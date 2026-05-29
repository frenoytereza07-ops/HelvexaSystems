export type Lang = "en" | "fr" | "it" | "hi" | "de" | "es";

export const LANGUAGES: { code: Lang; label: string; flag: string; native: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧", native: "English" },
  { code: "fr", label: "French", flag: "🇫🇷", native: "Français" },
  { code: "it", label: "Italian", flag: "🇮🇹", native: "Italiano" },
  { code: "hi", label: "Hindi", flag: "🇮🇳", native: "हिन्दी" },
  { code: "de", label: "German", flag: "🇩🇪", native: "Deutsch" },
  { code: "es", label: "Spanish", flag: "🇪🇸", native: "Español" },
];

// Map country codes -> language
export const COUNTRY_TO_LANG: Record<string, Lang> = {
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", CH: "fr", CI: "fr", SN: "fr", CM: "fr", MG: "fr", CD: "fr", HT: "fr",
  // Italian
  IT: "it", SM: "it", VA: "it",
  // Hindi
  IN: "hi",
  // German
  DE: "de", AT: "de", LI: "de",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es", GT: "es", CU: "es",
  BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es", UY: "es", PR: "es",
  // Everywhere else falls back to English
};

type Dict = {
  nav: { packages: string; how: string; results: string; contact: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    statResponse: string;
    statResponseSub: string;
    statBookings: string;
    statBookingsSub: string;
    statRevenue: string;
    statRevenueSub: string;
  };
  packages: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    mostPopular: string;
    onboardingLabel: string;
    cta: string;
    ctaSub: string;
    starter: { name: string; title: string; desc: string; features: string[]; onboarding: string };
    growth: { name: string; title: string; desc: string; features: string[]; onboarding: string };
    premium: { name: string; title: string; desc: string; features: string[]; onboarding: string };
  };
  how: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    steps: { title: string; desc: string; detail: string }[];
  };
  results: {
    title: string;
    metrics: { metric: string; label: string; sub: string }[];
    cases: { icon: string; title: string; desc: string }[];
  };
  cta: {
    title1: string;
    title2: string;
    subtitle: string;
    reply: string;
  };
  footer: { rights: string; contact: string; tag: string };
  langSwitcher: { detected: string; change: string };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { packages: "Packages", how: "How it works", results: "Results", contact: "Contact Us" },
    hero: {
      badge: "AI Automation That Books While You Sleep",
      title1: "Stop losing leads",
      title2: "to voicemail.",
      subtitle: "We build AI receptionists, chat widgets, and follow-up systems that answer in 60 seconds, book appointments automatically, and nurture every lead — 24/7.",
      cta1: "Get started",
      cta2: "See packages",
      bullet1: "Live in 5 days",
      bullet2: "Done-for-you setup",
      bullet3: "No contracts",
      statResponse: "Response Time", statResponseSub: "avg first reply",
      statBookings: "Bookings", statBookingsSub: "this month",
      statRevenue: "Revenue", statRevenueSub: "automated",
    },
    packages: {
      badge: "Packages",
      title1: "Choose your automation",
      title2: "engine",
      subtitle: "Every package includes done-for-you setup. No pricing listed — we customize based on your volume.",
      mostPopular: "Most popular",
      onboardingLabel: "Onboarding:",
      cta: "Contact us",
      ctaSub: "Custom pricing • No setup fees discussed upfront",
      starter: {
        name: "STARTER", title: "The Foundation",
        desc: "Perfect for businesses starting their automation journey",
        features: [
          "📱 Missed call text-back (AI responds in under 60 sec)",
          "⭐ Automated review requests after every job",
          "💬 AI chat widget on their website",
          "📨 3-step lead follow-up sequence (SMS + email)",
          "👥 CRM with contact + pipeline management",
        ],
        onboarding: "Done-for-you setup — live in 5 business days",
      },
      growth: {
        name: "GROWTH", title: "The Engine",
        desc: "For businesses ready to scale with AI",
        features: [
          "🎙️ AI Voice receptionist (answers calls 24/7)",
          "📅 Automated booking system with reminders",
          "🔄 Full lead nurture sequence (7-touch, 30 days)",
          "📊 Custom sales pipeline built for their niche",
          "♻️ Reactivation campaign (win back cold leads)",
          "💬 WhatsApp + Instagram DM automation",
        ],
        onboarding: "Everything in Starter, plus dedicated onboarding",
      },
      premium: {
        name: "PREMIUM", title: "The Machine",
        desc: "Complete AI transformation for market leaders",
        features: [
          "⚙️ Custom AI workflows built for their exact business",
          "📢 Google + Facebook ad integration (leads into CRM)",
          "📱 Branded mobile app (white-labeled, their logo)",
          "🔗 3rd-party integrations (Zapier, Stripe, Calendly…)",
          "♾️ Unlimited contacts + sub-accounts",
          "📣 SMS broadcast campaigns (unlimited sends)",
        ],
        onboarding: "Done-for-you management + priority support",
      },
    },
    how: {
      badge: "How it works",
      title1: "Live in 5 days.",
      title2: "No tech skills needed.",
      subtitle: "We handle everything. You get a complete AI automation system that works 24/7.",
      cta: "Start your build",
      steps: [
        { title: "We map your workflow", desc: "30-min call. We learn how leads come in, how you book, and where leads drop off. No forms to fill.", detail: "Discovery call" },
        { title: "We build everything", desc: "AI voice, chat widget, CRM, follow-ups, booking — all connected. You get a preview link in 3 days.", detail: "Build phase" },
        { title: "We launch & train", desc: "Go live in 5 business days. We train your team, connect your numbers, and monitor for 14 days.", detail: "Launch" },
      ],
    },
    results: {
      title: "Built for local businesses who are tired of playing phone tag",
      metrics: [
        { metric: "47s", label: "Average response time", sub: "vs 4.2 hours industry avg" },
        { metric: "3.2x", label: "More bookings", sub: "First 30 days average" },
        { metric: "94%", label: "Leads nurtured", sub: "Never lose a lead again" },
        { metric: "24/7", label: "AI coverage", sub: "Nights, weekends, holidays" },
      ],
      cases: [
        { icon: "🏠", title: "Home Services", desc: "Plumbers, HVAC, electricians — never miss an emergency call again" },
        { icon: "💇", title: "Beauty & Wellness", desc: "Salons, med spas, clinics — fill your calendar automatically" },
        { icon: "🚗", title: "Automotive", desc: "Detailers, repair shops — book estimates while you work" },
      ],
    },
    cta: {
      title1: "Ready to stop",
      title2: "losing leads?",
      subtitle: "Email us and we'll build a custom automation plan for your business. No sales call required — we'll send you a Loom video walking through exactly what we'd build.",
      reply: "Average reply time: under 2 hours • Mon-Fri 9am-6pm EST",
    },
    footer: { rights: "© 2025 Helvexa AI. All rights reserved.", contact: "Contact", tag: "AI Automation Agency" },
    langSwitcher: { detected: "Detected your region", change: "Language" },
  },

  fr: {
    nav: { packages: "Forfaits", how: "Comment ça marche", results: "Résultats", contact: "Contactez-nous" },
    hero: {
      badge: "Une automatisation IA qui réserve pendant que vous dormez",
      title1: "Arrêtez de perdre des clients",
      title2: "à cause de la messagerie.",
      subtitle: "Nous créons des standards téléphoniques IA, des widgets de chat et des systèmes de relance qui répondent en 60 secondes, prennent des rendez-vous automatiquement et nourrissent chaque prospect — 24h/24.",
      cta1: "Commencer",
      cta2: "Voir les forfaits",
      bullet1: "Opérationnel en 5 jours",
      bullet2: "Installation clé en main",
      bullet3: "Sans engagement",
      statResponse: "Temps de réponse", statResponseSub: "première réponse moy.",
      statBookings: "Rendez-vous", statBookingsSub: "ce mois-ci",
      statRevenue: "Revenus", statRevenueSub: "automatisés",
    },
    packages: {
      badge: "Forfaits",
      title1: "Choisissez votre moteur",
      title2: "d'automatisation",
      subtitle: "Chaque forfait inclut une installation clé en main. Pas de prix affichés — nous personnalisons selon votre volume.",
      mostPopular: "Le plus populaire",
      onboardingLabel: "Mise en place :",
      cta: "Contactez-nous",
      ctaSub: "Tarif personnalisé • Aucun frais discuté à l'avance",
      starter: {
        name: "STARTER", title: "Les Fondations",
        desc: "Idéal pour les entreprises qui débutent leur automatisation",
        features: [
          "📱 Rappel SMS pour appels manqués (réponse IA en moins de 60 sec)",
          "⭐ Demandes d'avis automatiques après chaque prestation",
          "💬 Widget de chat IA sur votre site",
          "📨 Séquence de relance prospects en 3 étapes (SMS + email)",
          "👥 CRM avec gestion des contacts et du pipeline",
        ],
        onboarding: "Installation clé en main — en ligne en 5 jours ouvrés",
      },
      growth: {
        name: "GROWTH", title: "Le Moteur",
        desc: "Pour les entreprises prêtes à passer à l'échelle avec l'IA",
        features: [
          "🎙️ Standardiste vocal IA (réponses 24h/24)",
          "📅 Système de réservation automatisé avec rappels",
          "🔄 Séquence complète de nurturing (7 contacts, 30 jours)",
          "📊 Pipeline commercial sur mesure pour votre secteur",
          "♻️ Campagne de réactivation (récupération de prospects froids)",
          "💬 Automatisation WhatsApp + Instagram DM",
        ],
        onboarding: "Tout du Starter, plus un onboarding dédié",
      },
      premium: {
        name: "PREMIUM", title: "La Machine",
        desc: "Transformation IA complète pour les leaders du marché",
        features: [
          "⚙️ Workflows IA sur mesure pour votre activité",
          "📢 Intégration des pubs Google + Facebook (prospects dans le CRM)",
          "📱 Application mobile à votre marque (white-label)",
          "🔗 Intégrations tierces (Zapier, Stripe, Calendly…)",
          "♾️ Contacts et sous-comptes illimités",
          "📣 Campagnes SMS de masse (envois illimités)",
        ],
        onboarding: "Gestion clé en main + support prioritaire",
      },
    },
    how: {
      badge: "Comment ça marche",
      title1: "Opérationnel en 5 jours.",
      title2: "Aucune compétence tech requise.",
      subtitle: "Nous nous occupons de tout. Vous obtenez un système d'automatisation IA complet qui fonctionne 24h/24.",
      cta: "Lancer votre projet",
      steps: [
        { title: "Nous analysons votre activité", desc: "Appel de 30 min. Nous comprenons comment vos prospects arrivent, comment vous réservez et où vous les perdez. Aucun formulaire à remplir.", detail: "Appel découverte" },
        { title: "Nous construisons tout", desc: "IA vocale, widget de chat, CRM, relances, réservation — tout connecté. Vous recevez un aperçu en 3 jours.", detail: "Phase de construction" },
        { title: "Nous lançons et formons", desc: "Mise en ligne en 5 jours ouvrés. Nous formons votre équipe, connectons vos numéros et suivons pendant 14 jours.", detail: "Lancement" },
      ],
    },
    results: {
      title: "Conçu pour les PME locales fatiguées de jouer au téléphone arabe",
      metrics: [
        { metric: "47s", label: "Temps de réponse moyen", sub: "vs 4,2 h moy. du secteur" },
        { metric: "3,2x", label: "Plus de rendez-vous", sub: "Moyenne des 30 premiers jours" },
        { metric: "94%", label: "Prospects nourris", sub: "Ne perdez plus jamais un prospect" },
        { metric: "24/7", label: "Couverture IA", sub: "Nuits, week-ends, jours fériés" },
      ],
      cases: [
        { icon: "🏠", title: "Services à domicile", desc: "Plombiers, chauffagistes, électriciens — ne ratez plus une urgence" },
        { icon: "💇", title: "Beauté & bien-être", desc: "Salons, spas, cliniques — remplissez votre agenda automatiquement" },
        { icon: "🚗", title: "Automobile", desc: "Centres auto, garages — devis pris pendant que vous travaillez" },
      ],
    },
    cta: {
      title1: "Prêt à arrêter de",
      title2: "perdre des prospects ?",
      subtitle: "Écrivez-nous et nous construirons un plan d'automatisation personnalisé. Aucun appel commercial requis — nous vous enverrons une vidéo Loom détaillant ce que nous construirions.",
      reply: "Réponse moyenne : moins de 2h • Lun-Ven 9h-18h EST",
    },
    footer: { rights: "© 2025 Helvexa AI. Tous droits réservés.", contact: "Contact", tag: "Agence d'automatisation IA" },
    langSwitcher: { detected: "Région détectée", change: "Langue" },
  },

  it: {
    nav: { packages: "Pacchetti", how: "Come funziona", results: "Risultati", contact: "Contattaci" },
    hero: {
      badge: "Automazione IA che prenota mentre dormi",
      title1: "Smetti di perdere clienti",
      title2: "in segreteria.",
      subtitle: "Costruiamo receptionist IA, widget di chat e sistemi di follow-up che rispondono in 60 secondi, prenotano appuntamenti automaticamente e coltivano ogni contatto — 24/7.",
      cta1: "Inizia ora",
      cta2: "Vedi i pacchetti",
      bullet1: "Attivo in 5 giorni",
      bullet2: "Setup chiavi in mano",
      bullet3: "Senza vincoli",
      statResponse: "Tempo di risposta", statResponseSub: "prima risposta media",
      statBookings: "Prenotazioni", statBookingsSub: "questo mese",
      statRevenue: "Fatturato", statRevenueSub: "automatizzato",
    },
    packages: {
      badge: "Pacchetti",
      title1: "Scegli il tuo motore",
      title2: "di automazione",
      subtitle: "Ogni pacchetto include setup chiavi in mano. Nessun prezzo elencato — personalizziamo in base al tuo volume.",
      mostPopular: "Più popolare",
      onboardingLabel: "Onboarding:",
      cta: "Contattaci",
      ctaSub: "Prezzo su misura • Nessun costo discusso in anticipo",
      starter: {
        name: "STARTER", title: "La Fondazione",
        desc: "Perfetto per aziende che iniziano il loro percorso di automazione",
        features: [
          "📱 SMS automatico per chiamate perse (IA risponde in meno di 60 sec)",
          "⭐ Richieste di recensione automatiche dopo ogni servizio",
          "💬 Widget chat IA sul sito",
          "📨 Sequenza follow-up lead in 3 step (SMS + email)",
          "👥 CRM con gestione contatti e pipeline",
        ],
        onboarding: "Setup chiavi in mano — online in 5 giorni lavorativi",
      },
      growth: {
        name: "GROWTH", title: "Il Motore",
        desc: "Per aziende pronte a scalare con l'IA",
        features: [
          "🎙️ Receptionist vocale IA (risponde 24/7)",
          "📅 Sistema di prenotazione automatico con promemoria",
          "🔄 Sequenza completa di nurturing (7 contatti, 30 giorni)",
          "📊 Pipeline vendite su misura per il tuo settore",
          "♻️ Campagna di riattivazione (recupero lead freddi)",
          "💬 Automazione WhatsApp + Instagram DM",
        ],
        onboarding: "Tutto Starter, più onboarding dedicato",
      },
      premium: {
        name: "PREMIUM", title: "La Macchina",
        desc: "Trasformazione IA completa per leader di mercato",
        features: [
          "⚙️ Workflow IA personalizzati per la tua attività",
          "📢 Integrazione ads Google + Facebook (lead nel CRM)",
          "📱 App mobile brandizzata (white-label, tuo logo)",
          "🔗 Integrazioni di terze parti (Zapier, Stripe, Calendly…)",
          "♾️ Contatti e sotto-account illimitati",
          "📣 Campagne SMS broadcast (invii illimitati)",
        ],
        onboarding: "Gestione chiavi in mano + supporto prioritario",
      },
    },
    how: {
      badge: "Come funziona",
      title1: "Attivo in 5 giorni.",
      title2: "Nessuna competenza tecnica.",
      subtitle: "Ci occupiamo di tutto. Ottieni un sistema completo di automazione IA che lavora 24/7.",
      cta: "Inizia il tuo progetto",
      steps: [
        { title: "Mappiamo il tuo workflow", desc: "Chiamata di 30 min. Capiamo da dove arrivano i lead, come prenoti e dove li perdi. Niente moduli da compilare.", detail: "Call di scoperta" },
        { title: "Costruiamo tutto", desc: "IA vocale, widget chat, CRM, follow-up, prenotazioni — tutto collegato. Ricevi un'anteprima in 3 giorni.", detail: "Fase di costruzione" },
        { title: "Lanciamo e formiamo", desc: "Live in 5 giorni lavorativi. Formiamo il tuo team, colleghiamo i numeri e monitoriamo per 14 giorni.", detail: "Lancio" },
      ],
    },
    results: {
      title: "Pensato per le PMI locali stanche di rincorrere chiamate",
      metrics: [
        { metric: "47s", label: "Tempo medio di risposta", sub: "vs 4,2 ore media del settore" },
        { metric: "3,2x", label: "Più prenotazioni", sub: "Media primi 30 giorni" },
        { metric: "94%", label: "Lead coltivati", sub: "Non perdere più un contatto" },
        { metric: "24/7", label: "Copertura IA", sub: "Notti, weekend, festivi" },
      ],
      cases: [
        { icon: "🏠", title: "Servizi a domicilio", desc: "Idraulici, climatizzazione, elettricisti — mai più urgenze perse" },
        { icon: "💇", title: "Bellezza & wellness", desc: "Saloni, centri estetici, cliniche — riempi l'agenda automaticamente" },
        { icon: "🚗", title: "Automotive", desc: "Carrozzerie, officine — preventivi mentre lavori" },
      ],
    },
    cta: {
      title1: "Pronto a smettere di",
      title2: "perdere clienti?",
      subtitle: "Scrivici e costruiremo un piano di automazione su misura per la tua azienda. Nessuna call commerciale — ti invieremo un video Loom con esattamente quello che costruiremmo.",
      reply: "Risposta media: meno di 2 ore • Lun-Ven 9-18 EST",
    },
    footer: { rights: "© 2025 Helvexa AI. Tutti i diritti riservati.", contact: "Contatto", tag: "Agenzia di Automazione IA" },
    langSwitcher: { detected: "Regione rilevata", change: "Lingua" },
  },

  hi: {
    nav: { packages: "पैकेज", how: "यह कैसे काम करता है", results: "परिणाम", contact: "संपर्क करें" },
    hero: {
      badge: "AI ऑटोमेशन जो आपके सोते समय बुकिंग करता है",
      title1: "वॉइसमेल में",
      title2: "लीड्स खोना बंद करें।",
      subtitle: "हम AI रिसेप्शनिस्ट, चैट विजेट और फॉलो-अप सिस्टम बनाते हैं जो 60 सेकंड में जवाब देते हैं, अपॉइंटमेंट खुद बुक करते हैं और हर लीड को पोषित करते हैं — 24/7।",
      cta1: "शुरू करें",
      cta2: "पैकेज देखें",
      bullet1: "5 दिनों में लाइव",
      bullet2: "पूरी तरह तैयार सेटअप",
      bullet3: "कोई कॉन्ट्रैक्ट नहीं",
      statResponse: "प्रतिक्रिया समय", statResponseSub: "औसत पहला उत्तर",
      statBookings: "बुकिंग", statBookingsSub: "इस महीने",
      statRevenue: "राजस्व", statRevenueSub: "स्वचालित",
    },
    packages: {
      badge: "पैकेज",
      title1: "अपना ऑटोमेशन",
      title2: "इंजन चुनें",
      subtitle: "हर पैकेज में डन-फॉर-यू सेटअप शामिल है। कोई कीमत नहीं — हम आपके वॉल्यूम के अनुसार कस्टमाइज़ करते हैं।",
      mostPopular: "सबसे लोकप्रिय",
      onboardingLabel: "ऑनबोर्डिंग:",
      cta: "संपर्क करें",
      ctaSub: "कस्टम प्राइसिंग • पहले से कोई सेटअप शुल्क नहीं",
      starter: {
        name: "स्टार्टर", title: "द फाउंडेशन",
        desc: "ऑटोमेशन शुरू करने वाले व्यवसायों के लिए परफेक्ट",
        features: [
          "📱 मिस्ड कॉल टेक्स्ट-बैक (AI 60 सेकंड में जवाब देता है)",
          "⭐ हर काम के बाद ऑटोमेटिक रिव्यू रिक्वेस्ट",
          "💬 वेबसाइट पर AI चैट विजेट",
          "📨 3-स्टेप लीड फॉलो-अप सीक्वेंस (SMS + ईमेल)",
          "👥 कॉन्टैक्ट और पाइपलाइन मैनेजमेंट के साथ CRM",
        ],
        onboarding: "डन-फॉर-यू सेटअप — 5 बिज़नेस दिनों में लाइव",
      },
      growth: {
        name: "ग्रोथ", title: "द इंजन",
        desc: "AI के साथ स्केल करने को तैयार व्यवसायों के लिए",
        features: [
          "🎙️ AI वॉइस रिसेप्शनिस्ट (24/7 कॉल का जवाब)",
          "📅 रिमाइंडर के साथ ऑटोमेटिक बुकिंग सिस्टम",
          "🔄 पूरा लीड नर्चर सीक्वेंस (7-टच, 30 दिन)",
          "📊 आपके सेगमेंट के लिए कस्टम सेल्स पाइपलाइन",
          "♻️ रीएक्टिवेशन कैम्पेन (कोल्ड लीड्स वापस जीतें)",
          "💬 WhatsApp + Instagram DM ऑटोमेशन",
        ],
        onboarding: "स्टार्टर का सब कुछ, साथ में डेडिकेटेड ऑनबोर्डिंग",
      },
      premium: {
        name: "प्रीमियम", title: "द मशीन",
        desc: "मार्केट लीडर्स के लिए पूर्ण AI ट्रांसफॉर्मेशन",
        features: [
          "⚙️ आपके व्यवसाय के लिए कस्टम AI वर्कफ़्लो",
          "📢 Google + Facebook ad इंटीग्रेशन (लीड्स CRM में)",
          "📱 ब्रांडेड मोबाइल ऐप (व्हाइट-लेबल, आपका लोगो)",
          "🔗 थर्ड-पार्टी इंटीग्रेशन (Zapier, Stripe, Calendly…)",
          "♾️ असीमित कॉन्टैक्ट्स + सब-अकाउंट्स",
          "📣 SMS ब्रॉडकास्ट कैम्पेन (असीमित)",
        ],
        onboarding: "डन-फॉर-यू मैनेजमेंट + प्राथमिकता समर्थन",
      },
    },
    how: {
      badge: "यह कैसे काम करता है",
      title1: "5 दिनों में लाइव।",
      title2: "तकनीकी कौशल की ज़रूरत नहीं।",
      subtitle: "हम सब कुछ संभालते हैं। आपको 24/7 चलने वाला पूर्ण AI ऑटोमेशन सिस्टम मिलता है।",
      cta: "अपना बिल्ड शुरू करें",
      steps: [
        { title: "हम आपका वर्कफ़्लो मैप करते हैं", desc: "30 मिनट की कॉल। लीड्स कैसे आती हैं, आप कैसे बुक करते हैं और कहाँ खोते हैं — हम सब समझते हैं। कोई फॉर्म नहीं।", detail: "डिस्कवरी कॉल" },
        { title: "हम सब कुछ बनाते हैं", desc: "AI वॉइस, चैट विजेट, CRM, फॉलो-अप, बुकिंग — सब जुड़े हुए। 3 दिनों में प्रीव्यू लिंक।", detail: "बिल्ड फेज़" },
        { title: "हम लॉन्च और ट्रेन करते हैं", desc: "5 बिज़नेस दिनों में लाइव। हम टीम को ट्रेन करते हैं, नंबर जोड़ते हैं और 14 दिनों तक मॉनिटर करते हैं।", detail: "लॉन्च" },
      ],
    },
    results: {
      title: "उन स्थानीय व्यवसायों के लिए जो फोन टैग खेलने से थक चुके हैं",
      metrics: [
        { metric: "47s", label: "औसत प्रतिक्रिया समय", sub: "इंडस्ट्री औसत 4.2 घंटे की तुलना में" },
        { metric: "3.2x", label: "अधिक बुकिंग", sub: "पहले 30 दिनों का औसत" },
        { metric: "94%", label: "लीड्स को पोषित किया गया", sub: "फिर कभी कोई लीड न खोएं" },
        { metric: "24/7", label: "AI कवरेज", sub: "रातें, सप्ताहांत, छुट्टियाँ" },
      ],
      cases: [
        { icon: "🏠", title: "होम सर्विसेज", desc: "प्लंबर, HVAC, इलेक्ट्रीशियन — आपातकालीन कॉल कभी न छूटे" },
        { icon: "💇", title: "ब्यूटी और वेलनेस", desc: "सैलून, स्पा, क्लिनिक — कैलेंडर अपने आप भरें" },
        { icon: "🚗", title: "ऑटोमोटिव", desc: "डिटेलर्स, रिपेयर शॉप — काम करते हुए एस्टीमेट बुक करें" },
      ],
    },
    cta: {
      title1: "लीड्स खोना",
      title2: "बंद करने के लिए तैयार?",
      subtitle: "हमें ईमेल करें और हम आपके व्यवसाय के लिए कस्टम ऑटोमेशन प्लान बनाएंगे। कोई सेल्स कॉल नहीं — हम Loom वीडियो भेजेंगे।",
      reply: "औसत प्रतिक्रिया समय: 2 घंटे से कम • सोम-शुक्र 9am-6pm EST",
    },
    footer: { rights: "© 2025 Helvexa AI. सर्वाधिकार सुरक्षित।", contact: "संपर्क", tag: "AI ऑटोमेशन एजेंसी" },
    langSwitcher: { detected: "आपका क्षेत्र पहचाना गया", change: "भाषा" },
  },

  de: {
    nav: { packages: "Pakete", how: "So funktioniert's", results: "Ergebnisse", contact: "Kontakt" },
    hero: {
      badge: "KI-Automatisierung, die bucht, während Sie schlafen",
      title1: "Verlieren Sie keine Leads",
      title2: "mehr an die Mailbox.",
      subtitle: "Wir bauen KI-Rezeptionisten, Chat-Widgets und Follow-up-Systeme, die in 60 Sekunden antworten, Termine automatisch buchen und jeden Lead pflegen — rund um die Uhr.",
      cta1: "Loslegen",
      cta2: "Pakete ansehen",
      bullet1: "In 5 Tagen live",
      bullet2: "Komplett-Setup für Sie",
      bullet3: "Keine Verträge",
      statResponse: "Antwortzeit", statResponseSub: "Ø erste Antwort",
      statBookings: "Buchungen", statBookingsSub: "diesen Monat",
      statRevenue: "Umsatz", statRevenueSub: "automatisiert",
    },
    packages: {
      badge: "Pakete",
      title1: "Wählen Sie Ihren",
      title2: "Automatisierungs-Motor",
      subtitle: "Jedes Paket beinhaltet Komplett-Setup. Keine Preise angegeben — wir passen sie an Ihr Volumen an.",
      mostPopular: "Am beliebtesten",
      onboardingLabel: "Onboarding:",
      cta: "Kontaktieren Sie uns",
      ctaSub: "Individuelle Preise • Keine Setup-Gebühren im Voraus",
      starter: {
        name: "STARTER", title: "Das Fundament",
        desc: "Perfekt für Unternehmen, die ihre Automatisierungsreise beginnen",
        features: [
          "📱 SMS-Rückruf bei verpassten Anrufen (KI antwortet in unter 60 Sek.)",
          "⭐ Automatische Bewertungsanfragen nach jedem Auftrag",
          "💬 KI-Chat-Widget auf Ihrer Website",
          "📨 3-stufige Lead-Follow-up-Sequenz (SMS + E-Mail)",
          "👥 CRM mit Kontakt- + Pipeline-Verwaltung",
        ],
        onboarding: "Komplett-Setup für Sie — in 5 Werktagen live",
      },
      growth: {
        name: "GROWTH", title: "Der Motor",
        desc: "Für Unternehmen, die mit KI skalieren wollen",
        features: [
          "🎙️ KI-Sprach-Rezeptionist (24/7 Anrufe)",
          "📅 Automatisches Buchungssystem mit Erinnerungen",
          "🔄 Komplette Lead-Nurture-Sequenz (7-Touch, 30 Tage)",
          "📊 Maßgeschneiderte Sales-Pipeline für Ihre Nische",
          "♻️ Reaktivierungs-Kampagne (kalte Leads zurückgewinnen)",
          "💬 WhatsApp + Instagram DM-Automatisierung",
        ],
        onboarding: "Alles aus Starter, plus persönliches Onboarding",
      },
      premium: {
        name: "PREMIUM", title: "Die Maschine",
        desc: "Komplette KI-Transformation für Marktführer",
        features: [
          "⚙️ Maßgeschneiderte KI-Workflows für Ihr Geschäft",
          "📢 Google + Facebook Ad-Integration (Leads ins CRM)",
          "📱 Gebrandete Mobile-App (White-Label, Ihr Logo)",
          "🔗 Drittanbieter-Integrationen (Zapier, Stripe, Calendly…)",
          "♾️ Unbegrenzte Kontakte + Sub-Accounts",
          "📣 SMS-Broadcast-Kampagnen (unbegrenzte Sendungen)",
        ],
        onboarding: "Komplett-Management + Prioritäts-Support",
      },
    },
    how: {
      badge: "So funktioniert's",
      title1: "In 5 Tagen live.",
      title2: "Keine Tech-Kenntnisse nötig.",
      subtitle: "Wir kümmern uns um alles. Sie erhalten ein komplettes KI-Automatisierungssystem, das 24/7 läuft.",
      cta: "Projekt starten",
      steps: [
        { title: "Wir analysieren Ihren Workflow", desc: "30-Min-Call. Wir verstehen, wie Leads reinkommen, wie Sie buchen und wo Sie sie verlieren. Keine Formulare.", detail: "Discovery-Call" },
        { title: "Wir bauen alles", desc: "KI-Voice, Chat-Widget, CRM, Follow-ups, Buchung — alles verbunden. Vorschau-Link in 3 Tagen.", detail: "Bauphase" },
        { title: "Wir launchen & trainieren", desc: "Live in 5 Werktagen. Wir trainieren Ihr Team, verbinden Ihre Nummern und überwachen 14 Tage.", detail: "Launch" },
      ],
    },
    results: {
      title: "Gebaut für lokale Unternehmen, die das Telefon-Ping-Pong satt haben",
      metrics: [
        { metric: "47s", label: "Durchschnittliche Antwortzeit", sub: "vs. 4,2 Std. Branchendurchschnitt" },
        { metric: "3,2x", label: "Mehr Buchungen", sub: "Durchschnitt der ersten 30 Tage" },
        { metric: "94%", label: "Leads gepflegt", sub: "Nie wieder einen Lead verlieren" },
        { metric: "24/7", label: "KI-Abdeckung", sub: "Nächte, Wochenenden, Feiertage" },
      ],
      cases: [
        { icon: "🏠", title: "Handwerk & Service", desc: "Klempner, HLK, Elektriker — nie wieder einen Notruf verpassen" },
        { icon: "💇", title: "Beauty & Wellness", desc: "Salons, Med-Spas, Kliniken — Kalender automatisch füllen" },
        { icon: "🚗", title: "Automotive", desc: "Aufbereiter, Werkstätten — Kostenvoranschläge während Sie arbeiten" },
      ],
    },
    cta: {
      title1: "Bereit, keine Leads",
      title2: "mehr zu verlieren?",
      subtitle: "Schreiben Sie uns und wir bauen einen individuellen Automatisierungsplan. Kein Verkaufsgespräch — wir senden ein Loom-Video, das genau zeigt, was wir bauen würden.",
      reply: "Durchschnittliche Antwortzeit: unter 2 Stunden • Mo-Fr 9-18 Uhr EST",
    },
    footer: { rights: "© 2025 Helvexa AI. Alle Rechte vorbehalten.", contact: "Kontakt", tag: "KI-Automatisierungsagentur" },
    langSwitcher: { detected: "Region erkannt", change: "Sprache" },
  },

  es: {
    nav: { packages: "Paquetes", how: "Cómo funciona", results: "Resultados", contact: "Contáctanos" },
    hero: {
      badge: "Automatización IA que reserva mientras duermes",
      title1: "Deja de perder clientes",
      title2: "en el buzón de voz.",
      subtitle: "Construimos recepcionistas IA, widgets de chat y sistemas de seguimiento que responden en 60 segundos, reservan citas automáticamente y nutren cada lead — 24/7.",
      cta1: "Empezar",
      cta2: "Ver paquetes",
      bullet1: "En vivo en 5 días",
      bullet2: "Configuración llave en mano",
      bullet3: "Sin contratos",
      statResponse: "Tiempo de respuesta", statResponseSub: "primera respuesta media",
      statBookings: "Reservas", statBookingsSub: "este mes",
      statRevenue: "Ingresos", statRevenueSub: "automatizados",
    },
    packages: {
      badge: "Paquetes",
      title1: "Elige tu motor",
      title2: "de automatización",
      subtitle: "Cada paquete incluye configuración llave en mano. Sin precios listados — personalizamos según tu volumen.",
      mostPopular: "Más popular",
      onboardingLabel: "Onboarding:",
      cta: "Contáctanos",
      ctaSub: "Precio personalizado • Sin tarifas de configuración por adelantado",
      starter: {
        name: "STARTER", title: "La Base",
        desc: "Perfecto para empresas que inician su automatización",
        features: [
          "📱 SMS automático para llamadas perdidas (IA responde en menos de 60 seg)",
          "⭐ Solicitudes de reseña automáticas tras cada servicio",
          "💬 Widget de chat IA en tu web",
          "📨 Secuencia de seguimiento de 3 pasos (SMS + email)",
          "👥 CRM con gestión de contactos y pipeline",
        ],
        onboarding: "Configuración llave en mano — en vivo en 5 días laborables",
      },
      growth: {
        name: "GROWTH", title: "El Motor",
        desc: "Para empresas listas para escalar con IA",
        features: [
          "🎙️ Recepcionista de voz IA (responde llamadas 24/7)",
          "📅 Sistema de reservas automático con recordatorios",
          "🔄 Secuencia completa de nurturing (7 toques, 30 días)",
          "📊 Pipeline de ventas personalizado para tu nicho",
          "♻️ Campaña de reactivación (recupera leads fríos)",
          "💬 Automatización WhatsApp + Instagram DM",
        ],
        onboarding: "Todo lo de Starter, más onboarding dedicado",
      },
      premium: {
        name: "PREMIUM", title: "La Máquina",
        desc: "Transformación IA completa para líderes del mercado",
        features: [
          "⚙️ Flujos IA personalizados para tu negocio",
          "📢 Integración de anuncios Google + Facebook (leads al CRM)",
          "📱 App móvil con tu marca (white-label, tu logo)",
          "🔗 Integraciones de terceros (Zapier, Stripe, Calendly…)",
          "♾️ Contactos y sub-cuentas ilimitados",
          "📣 Campañas SMS masivas (envíos ilimitados)",
        ],
        onboarding: "Gestión llave en mano + soporte prioritario",
      },
    },
    how: {
      badge: "Cómo funciona",
      title1: "En vivo en 5 días.",
      title2: "Sin conocimientos técnicos.",
      subtitle: "Nos encargamos de todo. Obtienes un sistema completo de automatización IA que funciona 24/7.",
      cta: "Inicia tu proyecto",
      steps: [
        { title: "Mapeamos tu flujo de trabajo", desc: "Llamada de 30 min. Entendemos cómo entran los leads, cómo reservas y dónde los pierdes. Sin formularios.", detail: "Llamada de descubrimiento" },
        { title: "Construimos todo", desc: "IA de voz, widget de chat, CRM, seguimientos, reservas — todo conectado. Recibes un enlace de vista previa en 3 días.", detail: "Fase de construcción" },
        { title: "Lanzamos y formamos", desc: "En vivo en 5 días laborables. Formamos a tu equipo, conectamos tus números y monitorizamos durante 14 días.", detail: "Lanzamiento" },
      ],
    },
    results: {
      title: "Construido para negocios locales cansados de jugar al teléfono",
      metrics: [
        { metric: "47s", label: "Tiempo medio de respuesta", sub: "vs 4,2 h media del sector" },
        { metric: "3,2x", label: "Más reservas", sub: "Media primeros 30 días" },
        { metric: "94%", label: "Leads nutridos", sub: "Nunca pierdas un lead más" },
        { metric: "24/7", label: "Cobertura IA", sub: "Noches, fines de semana, festivos" },
      ],
      cases: [
        { icon: "🏠", title: "Servicios a domicilio", desc: "Fontaneros, climatización, electricistas — nunca pierdas una urgencia" },
        { icon: "💇", title: "Belleza y bienestar", desc: "Salones, spas, clínicas — llena tu agenda automáticamente" },
        { icon: "🚗", title: "Automoción", desc: "Detallistas, talleres — reserva presupuestos mientras trabajas" },
      ],
    },
    cta: {
      title1: "¿Listo para dejar de",
      title2: "perder leads?",
      subtitle: "Escríbenos y construiremos un plan de automatización personalizado para tu negocio. Sin llamada comercial — te enviaremos un vídeo Loom mostrando exactamente lo que construiríamos.",
      reply: "Tiempo medio de respuesta: menos de 2 horas • Lun-Vie 9am-6pm EST",
    },
    footer: { rights: "© 2025 Helvexa AI. Todos los derechos reservados.", contact: "Contacto", tag: "Agencia de Automatización IA" },
    langSwitcher: { detected: "Región detectada", change: "Idioma" },
  },
};
