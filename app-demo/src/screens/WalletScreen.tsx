import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Ticket } from 'lucide-react';
import { ConceptBadge } from '../components/ui';
import { getProduct } from '../data/products';
import { useDemo } from '../state/DemoContext';

const formatDate = (ts: number) => new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export function WalletScreen() {
  const { vouchers, returns, showToast } = useDemo();
  const balance = vouchers.reduce((s, v) => s + v.amount, 0);
  const sorted = [...vouchers].reverse();

  return (
    <div className="screen">
      <header className="page-header">
        <h2>Wallet</h2>
      </header>
      <div className="content">
        <div className="family-card">
          <div className="family-top">
            <span className="family-brand">IKEA Family</span>
            <span className="small">Emma Andersson</span>
          </div>
          <div className="family-balance">
            <span className="small">Return &amp; Earn balance</span>
            <strong>{balance} SEK</strong>
          </div>
          <span className="family-number">6275 9800 1234 5678</span>
        </div>

        <h3 className="section-title">Vouchers</h3>
        {sorted.length === 0 && (
          <div className="empty">
            <Ticket size={32} />
            <p>No vouchers yet. Return end-of-life furniture to earn one.</p>
            <Link to="/return" className="btn btn-secondary">
              Start a return
            </Link>
          </div>
        )}
        {sorted.map((v, i) => {
          const ret = returns.find((r) => r.id === v.returnId);
          const product = getProduct(ret?.productId);
          return (
            <div key={v.id} className={`voucher ${i === 0 ? 'voucher-new' : ''}`}>
              <div className="voucher-left">
                <span className="voucher-amount">{v.amount} SEK</span>
                <span className="small">Return &amp; Earn voucher</span>
              </div>
              <div className="voucher-right">
                <strong>For returning {product?.name ?? 'furniture'}</strong>
                <span className="small">Valid until {formatDate(v.expiresAt)}</span>
                <span className="small mono">{v.code}</span>
              </div>
            </div>
          );
        })}

        {sorted.length > 0 && (
          <>
            <button className="btn btn-primary" onClick={() => showToast('Checkout is not part of this demo. The voucher would be applied automatically.')}>
              Use on a new BILLY
            </button>
            <Link to="/impact" className="card link-card">
              <Leaf size={22} className="ok" />
              <span className="grow">
                <strong>See your impact</strong>
                <span className="muted small">Follow what happens to your materials</span>
              </span>
              <ChevronRight size={20} className="muted" />
            </Link>
          </>
        )}

        <p className="muted small center">Illustrative voucher only. No real value.</p>
        <ConceptBadge />
      </div>
    </div>
  );
}
