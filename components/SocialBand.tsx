import { socialLinks } from "@/content/site";
import { EmailIcon, InstagramIcon, WhatsappIcon } from "./icons";

export function SocialBand() {
  return (
    <div className="social-band">
      <div className="wrap">
        <a
          href={socialLinks.instagram.url}
          target="_blank"
          rel="noopener"
          aria-label={socialLinks.instagram.label}
          title={socialLinks.instagram.label}
        >
          <InstagramIcon />
        </a>
        <a
          href={socialLinks.whatsapp.url}
          target="_blank"
          rel="noopener"
          aria-label={socialLinks.whatsapp.label}
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
  );
}
