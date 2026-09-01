import { brand, contact, hero, socialLinks } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: brand.name,
    description: hero.description,
    image: `${siteUrl}${contact.photo.src}`,
    url: siteUrl,
    telephone: "+33781049337",
    sameAs: [socialLinks.instagram.url],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
