// Domaine de production du site. À définir via la variable d'environnement
// NEXT_PUBLIC_SITE_URL (voir .env.local.example) une fois le nom de domaine
// choisi — utilisé pour les URLs canoniques, le sitemap, robots.txt et les
// images Open Graph.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
