import { ArrowUpRight, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="wordmark wordmark-light" to="/">
            <span className="wordmark-icon" aria-hidden="true">R<span>&</span>E</span>
            <span className="wordmark-copy">return<span>&</span>earn</span>
          </Link>
          <p>A student concept for a more circular future.</p>
        </div>
        <div className="footer-note">
          <Leaf size={17} aria-hidden="true" />
          <span>Independent university concept · Not an official IKEA service</span>
        </div>
        <a className="footer-link" href="https://www.ikea.com/global/en/our-business/sustainability/our-circular-agenda/" target="_blank" rel="noreferrer">
          IKEA circular agenda <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© Return &amp; Earn · Chalmers Capstone Project</span>
        <span>Designed to keep materials in circulation.</span>
      </div>
    </footer>
  )
}
