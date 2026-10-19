import { Link } from 'react-router-dom';
import { Calculator, PackageCheck, Recycle, ScanLine, Store, Ticket } from 'lucide-react';
import { ConceptBadge } from '../components/ui';
import { useDemo } from '../state/DemoContext';
import { getProduct } from '../data/products';

const STEPS = [
  { icon: ScanLine, title: 'Find or scan', text: 'Pick the item from your purchases or scan its label.' },
  { icon: Calculator, title: 'Get an estimate', text: 'We estimate the value of its recoverable materials.' },
  { icon: Ticket, title: 'See your voucher', text: 'Material value plus a return bonus.' },
  { icon: Store, title: 'Bring it to IKEA', text: 'Drop it off at a participating returns point.' },
  { icon: PackageCheck, title: 'IKEA verifies', text: 'Your voucher is issued once the return is accepted.' },
  { icon: Recycle, title: 'Materials recovered', text: 'Suitable materials are sorted and processed.' },
];

export function IntroScreen() {
  const { returns } = useDemo();
  const open = returns.filter((r) => r.status !== 'accepted');

  return (
    <div className="screen">
      <div className="intro-hero">
        <span className="pill pill-yellow">Return &amp; Earn</span>
        <h2>Old furniture.<br />New possibilities.</h2>
        <p>Return IKEA furniture that has reached the end of its life and earn a voucher for the materials that can still be recovered.</p>
      </div>

      <div className="content">
        {open.map((r) => {
          const product = getProduct(r.productId);
          return (
            <Link key={r.id} to={`/ready/${r.id}`} className="card open-return">
              <div>
                <span className="pill pill-blue">Ready for return</span>
                <strong>{product?.name}</strong>
                <span className="muted">Estimated voucher {r.voucher} SEK</span>
              </div>
              <span className="link">Show code</span>
            </Link>
          );
        })}

        <h3 className="section-title">How it works</h3>
        <ol className="steps">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <span className="step-icon">
                <Icon size={20} />
              </span>
              <div>
                <strong>
                  {i + 1}. {title}
                </strong>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="note">
          Return &amp; Earn is for furniture that can no longer reasonably be repaired, reused or resold. If it still has life
          left, we will point you to spare parts or Buy Back instead.
        </div>

        <ConceptBadge />
      </div>

      <div className="footer-cta">
        <Link to="/return/find" className="btn btn-primary">
          Start a return
        </Link>
      </div>
    </div>
  );
}
