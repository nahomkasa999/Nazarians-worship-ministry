import { footerColumns } from "@/content/footer";

export function Footer() {
  return (
    <footer className="footer">
      {/* Brand */}
      <div>
        <p className="footer__brand-name">
          NAZARIAN WORSHIP
        </p>
        <p className="footer__brand-desc">
          A monumental commitment to<br />
          the sacred truth through<br />
          contemporary expression.
        </p>
      </div>

      {/* Columns */}
      {footerColumns.map((col) => (
        <div key={col.title}>
          <p className="footer__col-title">
            {col.title}
          </p>
          <div className="footer__links">
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 NAZARIAN WORSHIP MINISTRY. ALL RIGHTS RESERVED.
        </p>
        <div className="footer__legal-links">
          <a href="#" className="footer__legal-link">
            PRIVACY POLICY
          </a>
          <a href="#" className="footer__legal-link">
            TERMS OF SERVICE
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
