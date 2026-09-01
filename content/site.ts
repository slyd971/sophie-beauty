// Tout le contenu texte et les chemins d'images du presskit sont centralisés ici.
// Modifiez ce fichier pour changer les textes, chiffres, témoignages, etc.
// sans avoir à toucher aux composants React.

export const brand = {
  name: "Sophie Beauty",
  tagline: "Gel & pose américaine, nude et naturel",
  // Wordmark seul, recadré serré : utilisé dans le header (petite hauteur,
  // le "S" décoratif y écraserait le mot BEAUTY).
  logo: { src: "/assets/logo.png", width: 823, height: 353 },
  // Wordmark avec le "S" décoratif, plus de marge : utilisé sur l'image
  // Open Graph où la place ne manque pas.
  logoMark: { src: "/assets/logo-mark.png", width: 830, height: 584 },
};

export const seo = {
  description:
    "Dossier de presse de Sophie Beauty, prothésiste ongulaire spécialisée en gel nude et pose américaine.",
};

export const hero = {
  video: "/assets/hero.mp4",
  poster: "/assets/hero-poster.jpg",
  description:
    "Le travail de Riiane : une prothésiste ongulaire passionnée, spécialisée dans les poses gel nude et les capsules américaines, au service d'ongles précis, naturels et durables.",
  ctas: [
    { label: "Voir la galerie", href: "#galerie", variant: "primary" },
    { label: "Contact", href: "#contact", variant: "ghost" },
  ],
};

export const socialLinks = {
  instagram: {
    url: "https://www.instagram.com/sophie_beauty_studio/",
    label: "Instagram — @Sophie_Beauty_Studio",
  },
  whatsapp: {
    url: "https://wa.me/33781049337",
    label: "WhatsApp — 07 81 04 93 37",
  },
  email: {
    url: "mailto:Riianesophie93@gmail.com",
    label: "Riianesophie93@gmail.com",
    address: "Riianesophie93@gmail.com",
  },
};

export const stats = [
  { value: "30", label: "Clientes accueillies\nchaque mois" },
  { value: "70%", label: "Taux de fidélisation\nde la clientèle" },
  { value: "Gel nude\n& naturel", label: "Spécialité principale\ndu studio", small: true },
];

export const bio = {
  eyebrow: "Mon parcours",
  title: "Une passion devenue métier",
  photo: { src: "/assets/bio.jpg", alt: "Riiane, fondatrice de Sophie Beauty" },
  paragraphs: [
    "Ma passion pour la prothésie ongulaire est née d'une véritable fascination pour ce métier. À l'époque, je dépensais beaucoup d'argent pour faire mes ongles et j'adorais observer ma prothésiste ongulaire travailler. Petit à petit, je suis devenue curieuse et j'ai commencé à m'intéresser aux différentes techniques et à la précision de son travail.",
    "Pendant la période du Covid, ayant davantage de temps libre, j'ai décidé de me lancer et de suivre une formation en prothésie ongulaire. Ce qui était au départ une simple curiosité est rapidement devenu une véritable passion.",
    "Aujourd'hui, la prothésie ongulaire est devenue mon métier, mais surtout une activité que j'aime profondément. Chaque cliente, chaque création et chaque nouveau défi me permettent de continuer à apprendre et à exprimer ma créativité.",
  ],
  signature: "Riiane",
};

export const gallery = [
  {
    src: "/assets/gallery-1.jpg",
    alt: "Pose gel nude avec nail art floral et liseré rouge",
    big: true,
  },
  { src: "/assets/gallery-2.jpg", alt: "Pose gel nude glossy, finition naturelle" },
  { src: "/assets/gallery-3.jpg", alt: "Pose gel nude carrée avec détail blanc" },
  { src: "/assets/gallery-4.jpg", alt: "Pose gel french manucure classique" },
  { src: "/assets/gallery-5.jpg", alt: "Pose gel colorée avec nail art mixte" },
];

export const method = {
  eyebrow: "Savoir-faire",
  title: "Méthode de travail — Gel & pose américaine",
  intro:
    "Une méthode structurée en sept étapes, pensée pour la précision, l'hygiène et la longévité de chaque pose — avec une attention particulière portée aux poses gel nude et naturelles.",
  steps: [
    {
      title: "Diagnostic",
      items: [
        "Échange avec la cliente sur ses envies",
        "Observation de l'état et de la longueur des ongles naturels",
        "Choix de la technique adaptée : gel ou pose américaine",
      ],
    },
    {
      title: "Préparation de l'ongle",
      items: [
        "Désinfection des mains et du matériel",
        "Repousse et nettoyage des cuticules",
        "Préparation de la plaque de l'ongle",
        "Limage et dégraissage",
        "Application des produits de préparation nécessaires",
      ],
    },
    {
      title: "Construction / pose",
      items: [
        "Gel : choix du chablon ou de la forme adaptée, construction et mise en forme de l'ongle avec le gel",
        "Pose américaine : choix de la capsule adaptée à chaque ongle, préparation puis application avec le gel/adhésif approprié",
      ],
    },
    {
      title: "Mise en forme",
      items: [
        "Limage pour obtenir la longueur et la forme souhaitées",
        "Vérification de la symétrie et de l'architecture de chaque ongle",
        "Correction des éventuelles irrégularités",
      ],
    },
    {
      title: "Finition & décoration",
      items: [
        "Application de la couleur, du gel polish ou de la décoration choisie",
        "Nail art si demandé",
        "Application du top coat et finition",
      ],
    },
    {
      title: "Contrôle final",
      items: [
        "Vérification de chaque ongle : forme, épaisseur, symétrie et finition",
        "Hydratation des cuticules",
        "Présentation du résultat à la cliente",
      ],
    },
    {
      title: "Conseils après la prestation",
      items: [
        "Conseils pour entretenir les ongles",
        "Recommandation d'un délai de remplissage/dépose adapté",
        "Conseils pour éviter les décollements ou les traumatismes",
      ],
    },
  ],
};

export const beforeAfter = {
  before: { src: "/assets/avant.jpg", alt: "Ongles avant la pose" },
  after: { src: "/assets/apres.jpg", alt: "Ongles après la pose gel nude" },
  caption: "Pose gel nude & naturel — précision et mise en forme signées Sophie Beauty.",
};

export const testimonials = [
  {
    quote:
      "Je suis absolument ravie de mes ongles ! Riiane est très professionnelle, minutieuse et vraiment à l'écoute. Elle prend le temps de comprendre ce que je veux et le résultat est toujours magnifique. Mes ongles tiennent super bien et je reçois énormément de compliments. Je recommande les yeux fermés !",
    author: "Cliente Sophie Beauty",
  },
  {
    quote:
      "Une super expérience du début à la fin ! Riiane est douce, perfectionniste et passionnée par son travail. J'ai adoré le résultat, mes ongles sont exactement comme je les imaginais. On se sent vraiment à l'aise et entre de bonnes mains. Je reviendrai sans hésiter !",
    author: "Cliente Sophie Beauty",
  },
];

export const contact = {
  eyebrow: "Collaborations & contact",
  title: "Parlons de votre prochain projet",
  description:
    "Presse, collaborations, partenariats de marque ou rendez-vous : Sophie Beauty est ouvert aux échanges. Retrouvez-nous sur les réseaux ou écrivez directement.",
  photo: {
    src: "/assets/contact.jpg",
    alt: "Riiane, prothésiste ongulaire chez Sophie Beauty",
  },
};

// Utilisé à la fois par le header (desktop + mobile) et le footer.
export const navLinks = [
  { label: "Parcours", href: "#parcours" },
  { label: "Galerie", href: "#galerie" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export const footer = {
  poweredBy: {
    label: "presskit.fr",
    url: "https://presskit.fr",
  },
};
