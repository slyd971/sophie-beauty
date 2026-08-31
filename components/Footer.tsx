import { brand } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <span className="fmark">{brand.name}</span>
      Presskit {new Date().getFullYear()} — Riiane, prothésiste ongulaire · {brand.tagline}
    </footer>
  );
}
