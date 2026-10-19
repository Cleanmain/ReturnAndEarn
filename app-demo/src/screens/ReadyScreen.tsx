import { useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { CheckCircle2, MapPin, PackageOpen, QrCode, ShoppingBag } from 'lucide-react';
import { FakeQr, SubHeader } from '../components/ui';
import { STORES, getProduct } from '../data/products';
import { useDemo } from '../state/DemoContext';

export function ReadyScreen() {
  const { returnId } = useParams();
  const navigate = useNavigate();
  const { returns, setStore, acceptReturn } = useDemo();
  const item = returns.find((r) => r.id === returnId);
  const product = getProduct(item?.productId);
  const prevStatus = useRef(item?.status);

  // When IKEA accepts the return while this screen is open, continue to the wallet.
  useEffect(() => {
    if (prevStatus.current === 'verifying' && item?.status === 'accepted') {
      const t = window.setTimeout(() => navigate('/wallet'), 1400);
      return () => window.clearTimeout(t);
    }
    prevStatus.current = item?.status;
  }, [item?.status, navigate]);

  if (!item || !product) return <Navigate to="/return" replace />;

  const accepted = item.status === 'accepted';

  return (
    <div className="screen">
      <SubHeader title={accepted ? 'Return complete' : 'Ready to return'} back="/return" step={accepted ? undefined : 'Step 4 of 4'} />
      <div className="content">
        <div className="ready-hero">
          {accepted ? <CheckCircle2 size={34} className="ok" /> : <PackageOpen size={34} />}
          <div>
            <h2>{accepted ? 'Return accepted' : 'Your item is ready for review'}</h2>
            <p>
              {product.name} · estimated voucher <strong>{item.voucher} SEK</strong>
            </p>
          </div>
        </div>

        <div className="qr-card">
          {/* Tapping the code is the presenter's hidden trigger for "IKEA scanned and accepted it". */}
          <button
            className="qr-button"
            onClick={() => acceptReturn(item.id)}
            disabled={item.status !== 'ready'}
            aria-label="Return code"
          >
            <FakeQr seed={item.code} size={176} />
            {item.status === 'verifying' && (
              <span className="qr-overlay">
                <span className="spinner" />
                Verifying your return…
              </span>
            )}
            {accepted && (
              <span className="qr-overlay qr-overlay-ok">
                <CheckCircle2 size={44} />
                Accepted
              </span>
            )}
          </button>
          <span className="return-code">{item.code}</span>
          <span className="muted small">Show this code at the returns point</span>
        </div>

        <h3 className="section-title">Where to return</h3>
        {STORES.map((s) => (
          <label key={s.id} className={`store-option ${item.storeId === s.id ? 'selected' : ''}`}>
            <input
              type="radio"
              name="store"
              checked={item.storeId === s.id}
              onChange={() => setStore(item.id, s.id)}
              disabled={item.status !== 'ready'}
            />
            <MapPin size={20} />
            <span className="grow">
              <strong>{s.name}</strong>
              <span className="muted small">{s.detail}</span>
            </span>
          </label>
        ))}

        <h3 className="section-title">What happens next</h3>
        <ol className="steps compact">
          <li>
            <span className="step-icon"><ShoppingBag size={18} /></span>
            <div>
              <strong>Bring it on your next IKEA visit</strong>
              <p>Take it apart flat if you can. It fits in the car with your new furniture.</p>
            </div>
          </li>
          <li>
            <span className="step-icon"><QrCode size={18} /></span>
            <div>
              <strong>Show your code at Returns &amp; Exchanges</strong>
              <p>A co-worker checks that it matches and is an end-of-life item.</p>
            </div>
          </li>
          <li>
            <span className="step-icon"><CheckCircle2 size={18} /></span>
            <div>
              <strong>Get your voucher</strong>
              <p>Once accepted, the voucher appears in your wallet right away.</p>
            </div>
          </li>
        </ol>

        <p className="muted small center">Sample confirmation only. No voucher or QR code is active.</p>
      </div>

      {accepted && (
        <div className="footer-cta">
          <Link to="/wallet" className="btn btn-primary">
            Go to my wallet
          </Link>
        </div>
      )}
    </div>
  );
}
