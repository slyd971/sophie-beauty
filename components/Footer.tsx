import { brand, footer, navLinks, socialLinks } from "@/content/site";
import { EmailIcon, InstagramIcon, WhatsappIcon } from "./icons";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <span className="fmark">{brand.name}</span>
          <p>{brand.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation du footer">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener"
            aria-label={`${socialLinks.instagram.label} (nouvel onglet)`}
            title={socialLinks.instagram.label}
          >
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.whatsapp.url}
            target="_blank"
            rel="noopener"
            aria-label={`${socialLinks.whatsapp.label} (nouvel onglet)`}
            title={socialLinks.whatsapp.label}
          >
            <WhatsappIcon />
          </a>
          <a
            href={socialLinks.email.url}
            aria-label={`Email — ${socialLinks.email.address}`}
            title={socialLinks.email.address}
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {brand.name} — Riiane, prothésiste ongulaire
        </p>
        <p>
          Powered by{" "}
          <a href={footer.poweredBy.url} target="_blank" rel="noopener">
            {footer.poweredBy.label}
          </a>
        </p>
      </div>
    </footer>
  );
}
