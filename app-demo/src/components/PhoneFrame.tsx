import { useEffect, type ReactNode } from 'react';
import { NavLink, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Home, Leaf, Recycle, ShoppingBag, Wallet } from 'lucide-react';
import { useDemo } from '../state/DemoContext';

const JOURNEY = [
  'Find or scan an IKEA product',
  'Estimate net material value',
  'See the estimated voucher incl. return bonus',
  'Bring the furniture to IKEA',
  'IKEA verifies and issues the voucher',
  'Materials are sorted and recovered',
];

// Screens that are part of the step-by-step flow hide the bottom navigation.
const FLOW_ROUTES = ['/return/find', '/return/:productId/*', '/ready/:returnId'];

function useActiveSteps(): number[] {
  const { pathname } = useLocation();
  const { returns } = useDemo();
  if (pathname === '/return/find' || matchPath('/return/:productId/condition', pathname)) return [1];
  if (matchPath('/return/:productId/estimate', pathname)) return [2, 3];
  const ready = matchPath('/ready/:returnId', pathname);
  if (ready) {
    const item = returns.find((r) => r.id === ready.params.returnId);
    return item?.status === 'ready' ? [4] : [5];
  }
  if (pathname === '/wallet' && returns.some((r) => r.status === 'accepted')) return [5];
  if (pathname === '/impact' && returns.some((r) => r.status === 'accepted')) return [6];
  return [];
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { toast, returns, acceptReturn, reset, showToast } = useDemo();
  const activeSteps = useActiveSteps();
  const inFlow = FLOW_ROUTES.some((p) => matchPath(p, pathname));

  // Presenter shortcuts: N = simulate IKEA accepting the return, R = reset demo.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'n' || e.key === 'N') {
        const ready = returns.find((r) => r.status === 'ready');
        if (!ready) return;
        if (!matchPath(`/ready/${ready.id}`, pathname)) navigate(`/ready/${ready.id}`);
        acceptReturn(ready.id);
      } else if (e.key === 'r' || e.key === 'R') {
        reset();
        navigate('/');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [returns, pathname, navigate, acceptReturn, reset]);

  return (
    <div className="stage">
      <aside className="presenter">
        <p className="presenter-eyebrow">Return &amp; Earn · App demo</p>
        <h1>Old furniture. New possibilities.</h1>
        <div className="persona">
          <div className="avatar">E</div>
          <div>
            <strong>Emma, 22</strong>
            <p>University student on a budget. Her BILLY bookcase is broken beyond repair and she is going to IKEA to buy a new one.</p>
          </div>
        </div>
        <ol className="journey">
          {JOURNEY.map((label, i) => {
            const step = i + 1;
            const done = activeSteps.length > 0 && step < Math.min(...activeSteps);
            const active = activeSteps.includes(step);
            return (
              <li key={label} className={active ? 'active' : done ? 'done' : ''}>
                <span className="journey-num">{step}</span>
                {label}
              </li>
            );
          })}
        </ol>
        <p className="presenter-foot">
          Student concept, Chalmers University of Technology · Not an official IKEA service. All figures are illustrative.
          <br />
          <kbd>N</kbd> simulate IKEA acceptance · <kbd>R</kbd> reset demo
        </p>
      </aside>

      <div className="phone">
        <div className="phone-screen">
          <div className="statusbar">
            <span>9:41</span>
            <span className="statusbar-icons">
              <span className="signal" />
              <span className="battery" />
            </span>
          </div>

          <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
            <span className="toast-icon">
              <Bell size={16} />
            </span>
            <div>
              <strong>IKEA</strong>
              <p>{toast}</p>
            </div>
          </div>

          <main className="app" key={pathname}>
            {children}
          </main>

          {!inFlow && (
            <nav className="bottomnav">
              <NavLink to="/" end>
                <Home size={22} />
                Home
              </NavLink>
              <button onClick={() => showToast('Shopping is not part of this demo.')}>
                <ShoppingBag size={22} />
                Shop
              </button>
              <NavLink to="/return">
                <Recycle size={22} />
                Return
              </NavLink>
              <NavLink to="/wallet">
                <Wallet size={22} />
                Wallet
              </NavLink>
              <NavLink to="/impact">
                <Leaf size={22} />
                Impact
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
