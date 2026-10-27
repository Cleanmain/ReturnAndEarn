import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { getProduct } from '../data/products';
import { estimate } from '../lib/estimate';

export type ReturnStatus = 'ready' | 'verifying' | 'accepted';

export interface ReturnItem {
  id: string;
  productId: string;
  storeId: string;
  status: ReturnStatus;
  code: string;
  voucher: number;
  createdAt: number;
  acceptedAt?: number;
}

export interface Voucher {
  id: string;
  returnId: string;
  amount: number;
  code: string;
  expiresAt: number;
}

interface DemoState {
  returns: ReturnItem[];
  vouchers: Voucher[];
}

interface DemoContextValue extends DemoState {
  toast: string | null;
  showToast: (message: string) => void;
  createReturn: (productId: string) => string;
  setStore: (returnId: string, storeId: string) => void;
  acceptReturn: (returnId: string) => void;
  reset: () => void;
}

const STORAGE_KEY = 'return-and-earn-demo';
const EMPTY: DemoState = { returns: [], vouchers: [] };
const VERIFY_MS = 2600;

function load(): DemoState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as DemoState;
    // A verification interrupted by a refresh goes back to "ready".
    return {
      ...parsed,
      returns: parsed.returns.map((r) => (r.status === 'verifying' ? { ...r, status: 'ready' } : r)),
    };
  } catch {
    return EMPTY;
  }
}

const randomDigits = (n: number) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('');

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(load);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage unavailable (private mode etc.); the demo still works in memory.
    }
  }, [state]);

  const showToast = useCallback((message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(null), 4200);
  }, []);

  const createReturn = useCallback(
    (productId: string) => {
      const existing = state.returns.find((r) => r.productId === productId && r.status !== 'accepted');
      if (existing) return existing.id;
      const product = getProduct(productId)!;
      const item: ReturnItem = {
        id: `ret-${Date.now()}`,
        productId,
        storeId: 'kallered',
        status: 'ready',
        code: `RE-${randomDigits(4)}-${product.name.slice(0, 5).toUpperCase()}`,
        voucher: estimate(product).voucher,
        createdAt: Date.now(),
      };
      setState((s) => ({ ...s, returns: [...s.returns, item] }));
      return item.id;
    },
    [state.returns],
  );

  const setStore = useCallback((returnId: string, storeId: string) => {
    setState((s) => ({ ...s, returns: s.returns.map((r) => (r.id === returnId ? { ...r, storeId } : r)) }));
  }, []);

  const acceptReturn = useCallback(
    (returnId: string) => {
      const item = state.returns.find((r) => r.id === returnId);
      if (!item || item.status !== 'ready') return;
      setState((s) => ({
        ...s,
        returns: s.returns.map((r) => (r.id === returnId ? { ...r, status: 'verifying' } : r)),
      }));
      window.setTimeout(() => {
        const now = Date.now();
        setState((s) => ({
          returns: s.returns.map((r) => (r.id === returnId ? { ...r, status: 'accepted', acceptedAt: now } : r)),
          vouchers: [
            ...s.vouchers,
            {
              id: `v-${now}`,
              returnId,
              amount: item.voucher,
              code: `${randomDigits(4)} ${randomDigits(4)} ${randomDigits(4)}`,
              expiresAt: now + 1000 * 60 * 60 * 24 * 90,
            },
          ],
        }));
        const product = getProduct(item.productId);
        showToast(`Return accepted! ${item.voucher} SEK voucher for your ${product?.name ?? 'item'} is in your wallet.`);
      }, VERIFY_MS);
    },
    [state.returns, showToast],
  );

  const reset = useCallback(() => {
    setState(EMPTY);
    setToast(null);
  }, []);

  return (
    <DemoContext.Provider value={{ ...state, toast, showToast, createReturn, setStore, acceptReturn, reset }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used inside DemoProvider');
  return ctx;
}
