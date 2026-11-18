# Site Vitrine - Transit & Achat Chine ➔ Abidjan (Côte d'Ivoire)

Site vitrine one-page, **mobile-first**, ultra-rapide et conçu pour **convertir un maximum de visiteurs en demandes de devis sur WhatsApp**.

---

## 📁 Structure des dossiers organisée par langage

Le projet est désormais soigneusement structuré par langage et technologie :

```text
billy anty/
│
├── index.html                 # 📄 HTML : Structure principale du site vitrine
│
├── css/                       # 🎨 CSS : Tous les styles graphiques et animations
│   └── style.css              # Feuille de style (Couleurs Bleu Marine & Orange, Typographie, Responsive)
│
├── js/                        # ⚡️ JAVASCRIPT : Toute la logique et interactions
│   ├── config.js              # ⚙️ Configuration simple (Nom entreprise, WhatsApp, Tarifs, Adresses)
│   └── script.js              # Logique interactive (Simulateur devis, WhatsApp, FAQ accordéon, Menu mobile)
│
├── images/                    # 🖼️ IMAGES : Toutes les photos et médias du site
│   ├── chargement-conteneur.jpg
│   ├── entrepot-colis-abidjan.jpg
│   ├── reception-retrait-colis-abidjan.jpg
│   └── ...
│
└── README.md                  # 📖 Guide de personnalisation et de mise en ligne
```

---

## ⚡️ Comment ouvrir et tester le site

1. Allez dans le dossier `c:\Users\G S T\Downloads\billy anty`.
2. Double-cliquez simplement sur **`index.html`** pour l'ouvrir dans votre navigateur web (Chrome, Edge, Safari, Firefox).
3. Tout fonctionne immédiatement :
   - Les styles dans **`css/style.css`**
   - Les scripts et la configuration dans **`js/`**
   - Les photos dans **`images/`**

---

## 🛠️ Guide de personnalisation (`js/config.js`)

Pour modifier les coordonnées ou tarifs, ouvrez simplement le fichier **`js/config.js`** :

```javascript
const SITE_CONFIG = {
  // 1. Nom de l'entreprise
  companyName: "IVORY CHINA CARGO",

  // 2. Coordonnées & Numéro WhatsApp
  whatsappNumber: "+2250700000000",
  phoneDisplayAbidjan: "+225 07 00 00 00 00",
  phoneDisplayChine: "+86 130 0000 0000",
  emailContact: "contact@ivorychinacargo.ci",

  // 3. Tarifs indicatifs (Avion vs Conteneur)
  pricing: {
    avion: {
      prixKg: "À partir de 8 500 FCFA / kg",
    },
    maritime: {
      prixCbm: "À partir de 280 000 FCFA / m³ (CBM)",
    }
  }
};
```

Sauvegardez et rafraîchissez **`index.html`** : toutes les informations sont mises à jour automatiquement !
