# Sophie Beauty Studio — Presskit

Presskit Next.js de Sophie Beauty Studio (prothésie ongulaire).

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

## Build production

```bash
npm run build
npm start
```
