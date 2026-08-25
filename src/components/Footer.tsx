import { footerLinks } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Social links">
      <div className="footer-icons">
        {footerLinks.map((item) => {
          const Icon = item.icon
          return (
            <a key={item.label} className="footer-icon-link" href={item.href} aria-label={item.label}>
              <Icon aria-hidden="true" />
            </a>
          )
        })}
      </div>
      <p className="footer-copyright">© 2026 Kameswaran Jayagopal. All rights reserved.</p>
    </footer>
  )
}
