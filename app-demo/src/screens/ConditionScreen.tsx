import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { HandCoins, Wrench } from 'lucide-react';
import { SubHeader } from '../components/ui';
import { ProductArt } from '../components/ProductArt';
import { getProduct } from '../data/products';
import { useDemo } from '../state/DemoContext';

type Answer = 'yes' | 'no' | null;

const QUESTIONS = [
  { key: 'repairable', text: 'Could it be fixed with spare parts or a simple repair?' },
  { key: 'reusable', text: 'Could someone else still use it as it is?' },
  { key: 'complete', text: 'Are all the main panels and parts there?' },
] as const;

type QuestionKey = (typeof QUESTIONS)[number]['key'];

export function ConditionScreen() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const navigate = useNavigate();
  const { showToast } = useDemo();
  const [answers, setAnswers] = useState<Record<QuestionKey, Answer>>({
    repairable: null,
    reusable: null,
    complete: null,
  });

  if (!product) return <Navigate to="/return/find" replace />;

  const set = (key: QuestionKey, value: Answer) => setAnswers((a) => ({ ...a, [key]: value }));
  const blocked = answers.repairable === 'yes' || answers.reusable === 'yes';
  const allAnswered = Object.values(answers).every(Boolean);

  return (
    <div className="screen">
      <SubHeader title="Check condition" back="/return/find" step="Step 2 of 4" />
      <div className="content">
        <div className="product-summary">
          <div className="product-thumb">
            <ProductArt shape={product.shape} size={56} />
          </div>
          <div>
            <strong>{product.name}</strong>
            <span>{product.description}</span>
          </div>
        </div>

        <p className="lead">
          Return &amp; Earn is for furniture at the end of its life. A few quick questions help us suggest the best option.
        </p>

        {QUESTIONS.map((q) => (
          <div key={q.key} className="question">
            <p>{q.text}</p>
            <div className="segmented">
              {(['yes', 'no'] as const).map((v) => (
                <button key={v} className={answers[q.key] === v ? 'selected' : ''} onClick={() => set(q.key, v)}>
                  {v === 'yes' ? 'Yes' : 'No'}
                </button>
              ))}
            </div>

            {q.key === 'repairable' && answers.repairable === 'yes' && (
              <div className="redirect-card">
                <Wrench size={22} />
                <div>
                  <strong>Repair could give it a longer life</strong>
                  <p>IKEA offers free spare parts like screws and fittings for many products.</p>
                  <button className="link" onClick={() => showToast('Spare parts ordering is not part of this demo.')}>
                    Order spare parts
                  </button>
                </div>
              </div>
            )}
            {q.key === 'reusable' && answers.reusable === 'yes' && (
              <div className="redirect-card">
                <HandCoins size={22} />
                <div>
                  <strong>Sell it back instead</strong>
                  <p>Furniture that can still be used may fit IKEA Buy Back &amp; Resell, which often gives more value.</p>
                  <button className="link" onClick={() => showToast('Buy Back is not part of this demo.')}>
                    Check Buy Back
                  </button>
                </div>
              </div>
            )}
            {q.key === 'complete' && answers.complete === 'no' && (
              <div className="note">Missing parts mean less recoverable material, so the final value may be lower after inspection.</div>
            )}
          </div>
        ))}
      </div>

      <div className="footer-cta">
        <button
          className="btn btn-primary"
          disabled={!allAnswered || blocked}
          onClick={() => navigate(`/return/${product.id}/estimate`)}
        >
          {blocked ? 'Return & Earn is for end-of-life items' : 'See my estimate'}
        </button>
      </div>
    </div>
  );
}
