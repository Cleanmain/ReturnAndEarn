import { Link } from 'react-router-dom';
import { Factory, Layers, PackageCheck, Sprout } from 'lucide-react';
import { ConceptBadge } from '../components/ui';
import { MATERIALS, getProduct, type MaterialKey } from '../data/products';
import { formatKg } from '../lib/estimate';
import { useDemo } from '../state/DemoContext';

const JOURNEY = [
  { icon: PackageCheck, title: 'Returned & verified', text: 'Accepted at the IKEA returns point.' },
  { icon: Layers, title: 'Sorted', text: 'Wood-based board, metal and plastic are separated.' },
  { icon: Factory, title: 'Processed', text: 'Suitable wood can be chipped for new particleboard.' },
  { icon: Sprout, title: 'Potential new products', text: 'Where feasible, recycled material replaces virgin input.' },
];

export function ImpactScreen() {
  const { returns, vouchers } = useDemo();
  const accepted = returns.filter((r) => r.status === 'accepted');

  const byMaterial = new Map<MaterialKey, number>();
  for (const r of accepted) {
    for (const m of getProduct(r.productId)?.materials ?? []) {
      byMaterial.set(m.key, (byMaterial.get(m.key) ?? 0) + m.kg);
    }
  }
  const totalKg = [...byMaterial.values()].reduce((s, kg) => s + kg, 0);
  const maxKg = Math.max(1, ...byMaterial.values());
  const earned = vouchers.reduce((s, v) => s + v.amount, 0);
  const latest = accepted[accepted.length - 1];
  const latestProduct = getProduct(latest?.productId);

  return (
    <div className="screen">
      <header className="page-header">
        <h2>Your impact</h2>
      </header>
      <div className="content">
        {accepted.length === 0 ? (
          <div className="empty">
            <Sprout size={32} />
            <p>Your impact shows up here once your first return has been accepted.</p>
            <Link to="/return" className="btn btn-secondary">
              Start a return
            </Link>
          </div>
        ) : (
          <>
            <div className="stat-row">
              <div className="stat">
                <strong>{formatKg(totalKg)}</strong>
                <span>material returned</span>
              </div>
              <div className="stat">
                <strong>{accepted.length}</strong>
                <span>{accepted.length === 1 ? 'item returned' : 'items returned'}</span>
              </div>
              <div className="stat">
                <strong>{earned} SEK</strong>
                <span>vouchers earned</span>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Materials you have returned</h3>
              <ul className="bars">
                {[...byMaterial.entries()].map(([key, kg]) => (
                  <li key={key}>
                    <span className="bars-label">{MATERIALS[key].label}</span>
                    <span className="bars-track">
                      <span style={{ width: `${(kg / maxKg) * 100}%`, background: MATERIALS[key].color }} />
                    </span>
                    <span className="bars-value">{formatKg(kg)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Your {latestProduct?.name}'s material journey</h3>
              <ol className="timeline">
                {JOURNEY.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className={i === 0 ? 'done' : i === 1 ? 'current' : ''}>
                    <span className="timeline-icon">
                      <Icon size={16} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="muted small">A proposed pathway, not a guaranteed closed loop. Reuse depends on quality and processing requirements.</p>
            </div>
          </>
        )}

        <div className="card card-blue">
          <h3 className="card-title">Why it matters</h3>
          <p>
            IKEA aims for at least one-third of its wood-based range to be made from recycled wood by 2030. In FY24, recycled wood made up
            30.3% of the content in its particleboard.
          </p>
          <span className="small">Source: IKEA Sustainability Report FY24</span>
        </div>

        <div className="card">
          <h3 className="card-title">Return &amp; Earn in Göteborg</h3>
          <div className="stat-row">
            <div className="stat">
              <strong>1 284</strong>
              <span>returns this month</span>
            </div>
            <div className="stat">
              <strong>31.6 t</strong>
              <span>material recovered</span>
            </div>
          </div>
          <p className="muted small">Illustrative figures for this concept, not real data.</p>
        </div>

        <ConceptBadge />
      </div>
    </div>
  );
}
