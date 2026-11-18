/**
 * ====================================================================
 * LOGIQUE JAVASCRIPT - SITE VITRINE TRANSIT CHINE-ABIDJAN
 * Interaction, WhatsApp Formatter, FAQ, Accordion, Mobile Menu & Config
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialisation avec la configuration
  initSiteConfig();

  // 2. Gestion du Menu Mobile
  initMobileMenu();

  // 3. Gestion de l'en-tête collant (Sticky Header)
  initStickyHeader();

  // 4. Accordéon FAQ
  initFaqAccordion();

  // 5. Calculateur Rapide d'estimation de tarif
  initShippingCalculator();

  // 6. Gestion du Formulaire de Devis (WhatsApp & Email)
  initQuoteForm();

  // 7. Animations légères au défilement (Scroll Reveal)
  initScrollAnimations();
});

/**
 * Charge les valeurs depuis config.js pour personnaliser le site
 */
function initSiteConfig() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  // Remplacement des textes avec data-config
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (config[key]) {
      el.textContent = config[key];
    }
  });

  // Liens WhatsApp directs
  const cleanPhone = (config.whatsappNumber || "").replace(/[^0-9]/g, "");
  const defaultWaMessage = encodeURIComponent(
    `Bonjour ${config.companyName || ""}, je vous contacte depuis votre site web pour des informations sur vos services de transit Chine-Abidjan.`
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${defaultWaMessage}`;

  document.querySelectorAll(".js-wa-link").forEach((link) => {
    link.href = waUrl;
  });

  // Liens d'appel téléphonique
  document.querySelectorAll(".js-phone-call").forEach((link) => {
    link.href = `tel:${cleanPhone}`;
  });

  // Numéros affichés
  document.querySelectorAll(".js-phone-display-abidjan").forEach((el) => {
    el.textContent = config.phoneDisplayAbidjan || config.whatsappNumber;
  });

  document.querySelectorAll(".js-phone-display-chine").forEach((el) => {
    el.textContent = config.phoneDisplayChine || "";
  });

  document.querySelectorAll(".js-email-display").forEach((el) => {
    el.textContent = config.emailContact || "contact@cargo.ci";
    if (el.tagName === "A") {
      el.href = `mailto:${config.emailContact}`;
    }
  });
}

/**
 * Menu Mobile Hamburger
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("is-open");
      toggleBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
  });
}

/**
 * Header avec ombre au défilement
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/**
 * Accordéon interactif pour la FAQ
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Fermer les autres accordéons
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          const otherAnswer = other.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Basculer l'élément courant
      if (isActive) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/**
 * Simulateur / Calculateur rapide de coût indicatif
 */
function initShippingCalculator() {
  const modeSelect = document.getElementById("calcMode");
  const qtyInput = document.getElementById("calcQty");
  const resultDisplay = document.getElementById("calcPriceDisplay");
  const unitLabel = document.getElementById("calcUnitLabel");
  const calcHint = document.getElementById("calcHint");

  if (!modeSelect || !qtyInput || !resultDisplay) return;

  function updateCalculation() {
    const mode = modeSelect.value;
    const qty = parseFloat(qtyInput.value) || 0;

    if (mode === "avion") {
      unitLabel.textContent = "kg";
      qtyInput.placeholder = "Ex: 5";
      const ratePerKg = 8500; // Tarif de base modifiable
      const total = qty * ratePerKg;
      resultDisplay.textContent = total > 0 ? `${total.toLocaleString("fr-FR")} FCFA` : "-- FCFA";
      calcHint.textContent = `Estimation basée sur ~${ratePerKg.toLocaleString("fr-FR")} FCFA/kg (délai : 5 à 8 jours)`;
    } else {
      unitLabel.textContent = "m³ (CBM)";
      qtyInput.placeholder = "Ex: 1";
      const ratePerCbm = 280000; // Tarif de base modifiable
      const total = qty * ratePerCbm;
      resultDisplay.textContent = total > 0 ? `${total.toLocaleString("fr-FR")} FCFA` : "-- FCFA";
      calcHint.textContent = `Estimation basée sur ~${ratePerCbm.toLocaleString("fr-FR")} FCFA/m³ (délai : 35 à 45 jours)`;
    }
  }

  modeSelect.addEventListener("change", updateCalculation);
  qtyInput.addEventListener("input", updateCalculation);
  updateCalculation();
}

/**
 * Formulaire de devis avec génération de message WhatsApp & option e-mail
 */
function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  const btnWhatsApp = document.getElementById("btnSubmitWhatsApp");
  const btnEmail = document.getElementById("btnSubmitEmail");

  if (!form) return;

  function getFormData() {
    return {
      nom: document.getElementById("quoteName")?.value.trim() || "",
      whatsapp: document.getElementById("quotePhone")?.value.trim() || "",
      service: document.getElementById("quoteService")?.value || "",
      mode: document.getElementById("quoteMode")?.value || "",
      produit: document.getElementById("quoteProduct")?.value.trim() || "",
      quantite: document.getElementById("quoteQty")?.value.trim() || "",
      message: document.getElementById("quoteMessage")?.value.trim() || ""
    };
  }

  function validateRequired(data) {
    if (!data.nom) {
      alert("Veuillez renseigner votre nom complet.");
      return false;
    }
    if (!data.whatsapp) {
      alert("Veuillez renseigner votre numéro WhatsApp.");
      return false;
    }
    if (!data.produit) {
      alert("Veuillez indiquer le type de produit à expédier.");
      return false;
    }
    return true;
  }

  // 1. Envoi par WhatsApp
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener("click", function (e) {
      e.preventDefault();
      const data = getFormData();
      if (!validateRequired(data)) return;

      const config = window.SITE_CONFIG || {};
      const company = config.companyName || "votre service transit";
      const phoneClean = (config.whatsappNumber || "+2250700000000").replace(/[^0-9]/g, "");

      const waText = 
`🇨🇳📦 *DEMANDE DE DEVIS TRANSIT CHINE-ABIDJAN*
Entreprise : ${company}
----------------------------------------
👤 *Client :* ${data.nom}
📱 *WhatsApp :* ${data.whatsapp}
🛠️ *Service souhaité :* ${data.service}
🚀 *Mode d'expédition :* ${data.mode}
🛍️ *Produit / Marchandise :* ${data.produit}
⚖️ *Poids / Volume estimé :* ${data.quantite || "Non précisé"}
📝 *Précisions / Message :*
${data.message || "Aucune note particulière"}
----------------------------------------
_Envoyé depuis le site web_`;

      const targetUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(waText)}`;
      window.open(targetUrl, "_blank");
    });
  }

  // 2. Envoi par Email (Fallback direct mailto)
  if (btnEmail) {
    btnEmail.addEventListener("click", function (e) {
      e.preventDefault();
      const data = getFormData();
      if (!validateRequired(data)) return;

      const config = window.SITE_CONFIG || {};
      const email = config.emailContact || "contact@cargo.ci";
      const subject = encodeURIComponent(`Demande de devis transit Chine-Abidjan - ${data.nom}`);
      const body = encodeURIComponent(
        `Bonjour,\n\nVoici ma demande de devis pour une expédition Chine vers Abidjan :\n\n` +
        `- Nom : ${data.nom}\n` +
        `- WhatsApp / Téléphone : ${data.whatsapp}\n` +
        `- Service : ${data.service}\n` +
        `- Mode : ${data.mode}\n` +
        `- Produit : ${data.produit}\n` +
        `- Poids / Volume estimé : ${data.quantite}\n` +
        `- Message complémentaire :\n${data.message}\n\nCordialement.`
      );

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
}

/**
 * Animations douces au scroll
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback si navigateur ancien
    animatedElements.forEach((el) => el.classList.add("revealed"));
  }
}
