import Image from "next/image";
import { contact, socialLinks } from "@/content/site";
import { EmailIcon, InstagramIcon, WhatsappIcon } from "./icons";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="arch-frame">
          <Image src={contact.photo.src} alt={contact.photo.alt} fill sizes="(max-width: 820px) 90vw, 40vw" style={{ objectFit: "cover" }} />
        </div>
        <div>
          <span className="eyebrow eyebrow-invert">{contact.eyebrow}</span>
          <h2 className="display">{contact.title}</h2>
          <p className="contact-sub">{contact.description}</p>
          <div className="contact-links">
            <a
              className="clink primary"
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener"
              aria-label={`${socialLinks.instagram.label} (nouvel onglet)`}
              title={socialLinks.instagram.label}
            >
              <InstagramIcon />
            </a>
            <a
              className="clink ghost"
              href={socialLinks.whatsapp.url}
              target="_blank"
              rel="noopener"
              aria-label={`${socialLinks.whatsapp.label} (nouvel onglet)`}
              title={socialLinks.whatsapp.label}
            >
              <WhatsappIcon />
            </a>
            <a
              className="clink ghost"
              href={socialLinks.email.url}
              aria-label={`Email — ${socialLinks.email.address}`}
              title={socialLinks.email.address}
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
