import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Recycle, Search, ShoppingCart } from 'lucide-react';
import { ConceptBadge, IkeaLogo } from '../components/ui';
import { ProductArt } from '../components/ProductArt';
import { useDemo } from '../state/DemoContext';
import type { ProductShape } from '../data/products';

const CATEGORIES: { label: string; shape: ProductShape }[] = [
  { label: 'Bookcases', shape: 'bookcase' },
  { label: 'Storage', shape: 'shelf' },
  { label: 'Wardrobes', shape: 'wardrobe' },
  { label: 'Armchairs', shape: 'armchair' },
];

export function HomeScreen() {
  const { showToast, vouchers } = useDemo();
  const balance = vouchers.reduce((s, v) => s + v.amount, 0);

  return (
    <div className="screen">
      <header className="home-header">
        <IkeaLogo />
        <div className="home-header-actions">
          <button className="icon-btn" aria-label="Favourites" onClick={() => showToast('Favourites are not part of this demo.')}>
            <Heart size={22} />
          </button>
          <button className="icon-btn" aria-label="Cart" onClick={() => showToast('The cart is not part of this demo.')}>
            <ShoppingCart size={22} />
          </button>
        </div>
      </header>

      <div className="content">
        <h2 className="greeting">Hej Emma!</h2>
        <button className="searchbar" onClick={() => showToast('Search is not part of this demo.')}>
          <Search size={18} /> What are you looking for?
        </button>

        <Link to="/return" className="promo">
          <div className="promo-text">
            <span className="pill pill-new">New · Return &amp; Earn</span>
            <h3>Does your furniture need replacing?</h3>
            <p>Check if its materials could be recovered, and earn a voucher when you return it.</p>
            <span className="promo-cta">
              Check my furniture <ChevronRight size={16} />
            </span>
          </div>
          <div className="promo-art">
            <Recycle size={64} strokeWidth={1.6} />
          </div>
        </Link>

        {balance > 0 && (
          <Link to="/wallet" className="card balance-card">
            <span>Your Return &amp; Earn vouchers</span>
            <strong>{balance} SEK</strong>
          </Link>
        )}

        <h3 className="section-title">Shop by category</h3>
        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <button key={c.label} className="category" onClick={() => showToast('Shopping is not part of this demo.')}>
              <ProductArt shape={c.shape} size={64} />
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        <ConceptBadge />
      </div>
    </div>
  );
}
