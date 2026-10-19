import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ScanLine, Search, X } from 'lucide-react';
import { SubHeader } from '../components/ui';
import { ProductArt } from '../components/ProductArt';
import { PRODUCTS, type Product } from '../data/products';

function ProductRow({ product, meta, onSelect }: { product: Product; meta: string; onSelect: () => void }) {
  return (
    <button className="product-row" onClick={onSelect}>
      <div className="product-thumb">
        <ProductArt shape={product.shape} size={56} />
      </div>
      <div className="grow">
        <strong>{product.name}</strong>
        <span>{product.description}</span>
        <span className="muted small">{meta}</span>
      </div>
      <ChevronRight size={20} className="muted" />
    </button>
  );
}

export function FindScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [scanning, setScanning] = useState(false);

  const select = (id: string) => navigate(`/return/${id}/condition`);
  const purchases = PRODUCTS.filter((p) => p.purchasedYear).sort((a, b) => b.purchasedYear! - a.purchasedYear!);
  const q = query.trim().toLowerCase();
  const results = q
    ? PRODUCTS.filter((p) => `${p.name} ${p.description} ${p.articleNo}`.toLowerCase().includes(q))
    : [];

  const startScan = () => {
    setScanning(true);
    window.setTimeout(() => {
      setScanning(false);
      select('billy');
    }, 2200);
  };

  return (
    <div className="screen">
      <SubHeader title="Find your product" back="/return" step="Step 1 of 4" />
      <div className="content">
        <label className="searchbar searchbar-input">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search product name or article no."
          />
        </label>

        <button className="btn btn-secondary btn-icon" onClick={startScan}>
          <ScanLine size={20} /> Scan product label
        </button>

        {q ? (
          <>
            <h3 className="section-title">Search results</h3>
            {results.length === 0 && <p className="muted">No products found for “{query}”.</p>}
            {results.map((p) => (
              <ProductRow key={p.id} product={p} meta={`Article no. ${p.articleNo}`} onSelect={() => select(p.id)} />
            ))}
          </>
        ) : (
          <>
            <h3 className="section-title">From your purchases</h3>
            {purchases.map((p) => (
              <ProductRow
                key={p.id}
                product={p}
                meta={`Bought ${p.purchasedYear} · IKEA Family`}
                onSelect={() => select(p.id)}
              />
            ))}
            <h3 className="section-title">Other products</h3>
            {PRODUCTS.filter((p) => !p.purchasedYear).map((p) => (
              <ProductRow key={p.id} product={p} meta={`Article no. ${p.articleNo}`} onSelect={() => select(p.id)} />
            ))}
          </>
        )}
      </div>

      {scanning && (
        <div className="scanner">
          <button className="icon-btn scanner-close" aria-label="Cancel scan" onClick={() => setScanning(false)}>
            <X size={24} />
          </button>
          <div className="scanner-view">
            <div className="scanner-label">
              <span className="label-brand">BILLY</span>
              <span>Bookcase</span>
              <span className="label-barcode" />
              <span>002.638.50</span>
            </div>
            <span className="scanner-line" />
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
          </div>
          <p>Point the camera at the product label</p>
        </div>
      )}
    </div>
  );
}
