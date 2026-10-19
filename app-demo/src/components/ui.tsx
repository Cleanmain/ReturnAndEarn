import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MATERIALS, type Product } from '../data/products';
import { formatKg } from '../lib/estimate';

export function IkeaLogo({ height = 26 }: { height?: number }) {
  return (
    <svg height={height} viewBox="0 0 90 34" role="img" aria-label="IKEA-style logo">
      <rect width="90" height="34" fill="#0058a3" />
      <ellipse cx="45" cy="17" rx="41" ry="14" fill="#ffdb00" />
      <text x="45" y="23.5" textAnchor="middle" fontFamily="Noto Sans, Arial, sans-serif" fontWeight="800" fontSize="18" fill="#0058a3" letterSpacing="-0.5">
        IKEA
      </text>
    </svg>
  );
}

export function ConceptBadge() {
  return <div className="concept-badge">Student concept · Not an official IKEA service</div>;
}

export function SubHeader({ title, back, step }: { title: string; back?: string; step?: string }) {
  const navigate = useNavigate();
  return (
    <header className="subheader">
      <button className="icon-btn" aria-label="Back" onClick={() => (back ? navigate(back) : navigate(-1))}>
        <ArrowLeft size={22} />
      </button>
      <div className="subheader-title">
        {title}
        {step && <span className="subheader-step">{step}</span>}
      </div>
      <span className="icon-btn-spacer" />
    </header>
  );
}

export function MaterialBar({ product }: { product: Product }) {
  const total = product.materials.reduce((s, m) => s + m.kg, 0);
  return (
    <div>
      <div className="material-bar" aria-hidden="true">
        {product.materials.map((m) => (
          <span
            key={m.key}
            style={{ width: `${Math.max(2, (m.kg / total) * 100)}%`, background: MATERIALS[m.key].color }}
          />
        ))}
      </div>
      <ul className="material-list">
        {product.materials.map((m) => (
          <li key={m.key}>
            <span className="dot" style={{ background: MATERIALS[m.key].color }} />
            <span className="grow">{MATERIALS[m.key].label}</span>
            <span className="muted">{formatKg(m.kg)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function FakeQr({ seed, size = 180 }: { seed: string; size?: number }) {
  // Deterministic decorative pattern; not a scannable code.
  const n = 25;
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x >= n - 8 && y < 8) || (x < 8 && y >= n - 8);
  const cells: ReactNode[] = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!inFinder(x, y) && rand() > 0.52) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  const finder = (x: number, y: number) => (
    <g key={`f-${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" />
    </g>
  );
  return (
    <svg width={size} height={size} viewBox={`-1 -1 ${n + 2} ${n + 2}`} shapeRendering="crispEdges" aria-label="Return code (decorative)">
      <rect x="-1" y="-1" width={n + 2} height={n + 2} fill="#fff" />
      <g fill="#111">
        {cells}
        {finder(0, 0)}
        {finder(n - 7, 0)}
        {finder(0, n - 7)}
      </g>
    </svg>
  );
}
