/**
 * ====================================================================
 * CONFIGURATION DU SITE - [NOM DE L'ENTREPRISE]
 * ====================================================================
 * Modifiez les valeurs ci-dessous pour personnaliser facilement
 * toutes les informations du site (Nom, WhatsApp, Tarifs, Adresses...)
 * sans avoir à modifier le code HTML !
 */

const SITE_CONFIG = {
  // 1. Identité de l'entreprise
  companyName: "IVORY CHINA CARGO", // Remplacez par le vrai nom (ex: Ivoire Chine Express, Kindo Fret, etc.)
  slogan: "Vos colis de Chine à Abidjan, simplement et en toute sécurité",
  tagline: "Service professionnel d'achat & transit Chine ➔ Côte d'Ivoire",

  // 2. Coordonnées & WhatsApp (très important pour les boutons de contact)
  whatsappNumber: "+2250700000000", // Format international sans espace (ex: +2250701020304 ou +8613000000000)
  phoneDisplayAbidjan: "+225 07 00 00 00 00", // Numéro visible pour appel Abidjan
  phoneDisplayChine: "+86 130 0000 0000", // Numéro visible pour appel / WeChat Chine
  emailContact: "contact@ivorychinacargo.ci",
  wechatId: "WeChat_ID_A_Remplir",

  // 3. Adresses physiques des entrepôts
  addresses: {
    abidjan: {
      title: "Agence & Entrepôt Abidjan",
      location: "Abidjan, Côte d'Ivoire (ex: Treichville / Marcory / Yopougon - [À PRÉCISER PAR L'ONCLE])",
      details: "Retrait des colis du Lundi au Samedi (8h30 - 18h30)",
      googleMapsUrl: "#"
    },
    chine: {
      title: "Entrepôt de Réception en Chine",
      location: "Guangzhou (Canton) & Yiwu, Chine - [ADRESSE CHINOISE FOURNIE APRÈS CONTACT]",
      details: "Réception 7j/7 de vos colis fournisseurs 1688, Taobao, Alibaba, usines directes",
      googleMapsUrl: "#"
    }
  },

  // 4. Tarifs indicatifs (Tableau Avion vs Bateau)
  // Remplacer les valeurs ci-dessous avec les chiffres exacts de l'oncle
  pricing: {
    avion: {
      nom: "Fret Aérien (Avion)",
      badge: "Express & Urgent",
      delai: "5 à 8 jours ouvrés",
      prixKg: "À partir de 8 500 FCFA / kg", // [À REMPLIR PAR L'ONCLE]
      minimum: "1 kg",
      fraisDouane: "Inclus (Dédouanement compris)",
      depart: "2 départs par semaine",
      ideal: "Électronique, téléphones, vêtements légers, échantillons urgents, bijoux, cosmétiques."
    },
    maritime: {
      nom: "Fret Maritime (Conteneur)",
      badge: "Économique & Gros Volume",
      delai: "35 à 45 jours",
      prixCbm: "À partir de 280 000 FCFA / CBM (m³)", // [À REMPLIR PAR L'ONCLE]
      minimum: "0.1 CBM ou 50 kg",
      fraisDouane: "Inclus (Dédouanement sécurisé)",
      depart: "Départ régulier chaque semaine",
      ideal: "Gros volumes, mobilier, machines industrielles, gros cartons de chaussures, vaisselle, quincaillerie."
    }
  },

  // 5. Réseaux Sociaux
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    whatsappChannel: "https://whatsapp.com"
  }
};

// Export global pour utilisation dans script.js et index.html
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
