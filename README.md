# Sophie Beauty — Presskit

Presskit Next.js de Sophie Beauty (prothésie ongulaire).

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Modifier le contenu

Tous les textes, chiffres, témoignages et chemins d'images sont centralisés dans
[`content/site.ts`](content/site.ts). Il suffit de modifier ce fichier — aucun besoin
de toucher aux composants React dans `components/`.

## Structure

- `app/` — layout, page d'accueil et styles globaux (`globals.css`)
- `components/` — un composant par section (Hero, Galerie, Méthode, Avant/Après, Témoignages, Contact…)
- `content/site.ts` — contenu éditable (textes, stats, étapes, témoignages, liens)
- `public/assets/` — photos et vidéo utilisées par le site (compressées pour le web)
- `source-media/` — photothèque source brute (non utilisée directement par le site)

> Note : `public/` (dossier Next.js) et `source-media/` sont volontairement deux
> dossiers distincts, même si macOS ne fait pas la différence entre majuscules et
> minuscules — sur un serveur Linux (Vercel, CI…) `public` et `Public` seraient deux
> dossiers différents, ce qui aurait cassé le site en production.

## SEO

- Copier `.env.local.example` en `.env.local` et renseigner `NEXT_PUBLIC_SITE_URL`
  avec le vrai domaine une fois le site déployé (utilisé pour l'URL canonique, le
  sitemap, `robots.txt` et l'image de partage Open Graph). Sans cette variable,
  tout pointe vers `http://localhost:3000`.
  **Sur Vercel, `.env.local` n'est pas déployé** : il faut ajouter
  `NEXT_PUBLIC_SITE_URL` dans Project Settings → Environment Variables (valeur :
  `https://sophie-beauty.presskit.fr`), puis redéployer pour que le build la
  prenne en compte. Sans ça, les aperçus de lien (WhatsApp, iMessage, réseaux
  sociaux…) restent cassés car l'image Open Graph pointe vers `localhost`.
- Métadonnées (titre, description, Open Graph, Twitter Card), favicon et image de
  partage sont générés automatiquement (`app/layout.tsx`, `app/icon.tsx`,
  `app/opengraph-image.tsx`) à partir de `content/site.ts` — pas besoin d'assets
  externes à maintenir.
- `app/sitemap.ts` et `app/robots.ts` génèrent `/sitemap.xml` et `/robots.txt`.
- Données structurées (`schema.org/BeautySalon`) injectées via
  `components/StructuredData.tsx`.

## Build production

```bash
npm run build
npm start
```
