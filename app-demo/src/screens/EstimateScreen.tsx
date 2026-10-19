import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Info } from 'lucide-react';
import { MaterialBar, SubHeader } from '../components/ui';
import { ProductArt } from '../components/ProductArt';
import { getProduct } from '../data/products';
import { estimate, formatKg } from '../lib/estimate';
import { useDemo } from '../state/DemoContext';

export function EstimateScreen() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const navigate = useNavigate();
  const { createReturn } = useDemo();

  if (!product) return <Navigate to="/return/find" replace />;
  const est = estimate(product);

  const confirm = () => navigate(`/ready/${createReturn(product.id)}`);

  return (
    <div className="screen">
      <SubHeader title="Your estimate" back={`/return/${product.id}/condition`} step="Step 3 of 4" />
      <div className="content">
        <div className="estimate-hero">
          <ProductArt shape={product.shape} size={110} />
          <div>
            <strong>{product.name}</strong>
            <span>{product.description}</span>
            <span className="muted small">About {formatKg(est.totalKg)} of material</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Potential recoverable materials</h3>
          <MaterialBar product={product} />
        </div>

        <div className="card voucher-calc">
          <h3 className="card-title">How your voucher is calculated</h3>
          <div className="calc-row">
            <span>
              Net material value
              <small>Material value minus recovery costs</small>
            </span>
            <strong>{est.netMaterialValue} SEK</strong>
          </div>
          <div className="calc-row">
            <span>
              Circularity bonus
              <small>Thanks for bringing it back</small>
            </span>
            <strong>+ {est.bonus} SEK</strong>
          </div>
          <div className="calc-total">
            <span>Estimated voucher</span>
            <strong>{est.voucher} SEK</strong>
          </div>
        </div>

        <div className="note note-info">
          <Info size={18} />
          <span>Final value depends on inspection and material recovery. Figures in this demo are illustrative and not an IKEA offer.</span>
        </div>
      </div>

      <div className="footer-cta">
        <button className="btn btn-primary" onClick={confirm}>
          Return and earn {est.voucher} SEK
        </button>
      </div>
    </div>
  );
}
