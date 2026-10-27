import {
  Check,
  ScanLine,
  Smartphone,
} from 'lucide-react'
import { Notice } from './Content'
import type { ReactNode } from 'react'

function Phone({ title, children, number }: { title: string; children: ReactNode; number: string }) {
  return (
    <article className="phone-wrap">
      <span className="phone-step">{number} / 03</span>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-brand"><span>ikea</span><span>⋯</span></div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </article>
  )
}

export default function PrototypeScreens() {
  return (
    <div className="container">
      <div className="demo-disclaimer"><Smartphone aria-hidden="true" /><span>Illustrative prototype · No IKEA systems are connected</span></div>
      <div className="phones-grid">
        <Phone title="Find your product" number="01">
          <div className="phone-search"><ScanLine size={15} aria-hidden="true" /> Search products</div>
          <div className="phone-product"><div className="mini-bookcase"><i /><i /><i /></div><div><strong>BILLY</strong><small>Bookcase, white<br />80 × 28 × 202 cm</small></div><Check size={16} aria-hidden="true" /></div>
          <div className="phone-tip">Does your furniture need replacing? Check if its materials could be recovered.</div>
          <button className="phone-button" type="button">Check recycling value</button>
        </Phone>
        <Phone title="Your estimate" number="02">
          <div className="estimate-head"><span>Illustrative estimate</span><strong>32 <small>SEK</small></strong></div>
          <div className="estimate-row"><span>Particleboard</span><b>12 SEK</b></div>
          <div className="estimate-row"><span>Metal fittings</span><b>Included</b></div>
          <div className="estimate-row"><span>Plastic components</span><b>Included</b></div>
          <div className="estimate-bonus"><span>Participation bonus</span><b>+ 20 SEK</b></div>
          <div className="phone-warning">Final value depends on inspection and material recovery.</div>
        </Phone>
        <Phone title="Ready to return" number="03">
          <div className="return-check"><span><Check aria-hidden="true" /></span><b>Your item is ready for review</b><small>Bring your furniture to a participating IKEA returns point.</small></div>
          <div className="qr-placeholder" role="img" aria-label="Decorative QR code placeholder"><div /></div>
          <div className="phone-warning">Sample confirmation only. No voucher or QR code is active.</div>
          <button className="phone-button" type="button">View return details</button>
        </Phone>
      </div>
      <Notice tone="yellow">The 12 SEK estimated material value and 20 SEK Participation Bonus are fictional examples for this concept—not IKEA prices, verified material values or an actual offer. Screen controls are visual mockups and are not interactive.</Notice>
    </div>
  )
}
