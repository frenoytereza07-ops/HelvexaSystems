import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations, COUNTRY_TO_LANG, LANGUAGES } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
  detected: boolean;
  countryCode: string | null;
};

const LanguageContext = createContext<Ctx | null>(null);

function detectFromBrowser(): Lang {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages || [navigator.language];
  for (const l of langs) {
    const code = l.toLowerCase().split("-")[0];
    if (LANGUAGES.find((x) => x.code === code)) return code as Lang;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [detected, setDetected] = useState(false);
  const [countryCode, setCountryCode] = useState<string | null>(null);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("helvexa_lang", l);
      localStorage.setItem("helvexa_lang_manual", "1");
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      // 1. User's manual choice takes priority
      try {
        const saved = localStorage.getItem("helvexa_lang") as Lang | null;
        const manual = localStorage.getItem("helvexa_lang_manual");
        if (saved && manual && LANGUAGES.find((x) => x.code === saved)) {
          setLangState(saved);
          document.documentElement.lang = saved;
          return;
        }
      } catch {}

      // 2. Try geolocation by IP (free, no key)
      const services = [
        async () => {
          const r = await fetch("https://ipapi.co/json/", { cache: "no-store" });
          if (!r.ok) throw new Error("ipapi");
          const d = await r.json();
          return d.country_code as string;
        },
        async () => {
          const r = await fetch("https://get.geojs.io/v1/ip/country.json", { cache: "no-store" });
          if (!r.ok) throw new Error("geojs");
          const d = await r.json();
          return d.country as string;
        },
      ];

      for (const fn of services) {
        try {
          const country = await fn();
          if (cancelled) return;
          if (country) {
            const upper = country.toUpperCase();
            setCountryCode(upper);
            const fromCountry = COUNTRY_TO_LANG[upper];
            if (fromCountry) {
              setLangState(fromCountry);
              setDetected(true);
              document.documentElement.lang = fromCountry;
              try { localStorage.setItem("helvexa_lang", fromCountry); } catch {}
              return;
            }
            // country found but not in our map -> fall through to browser
            break;
          }
        } catch {
          // try next service
        }
      }

      // 3. Fallback: browser language
      const browser = detectFromBrowser();
      if (!cancelled) {
        setLangState(browser);
        setDetected(true);
        document.documentElement.lang = browser;
        try { localStorage.setItem("helvexa_lang", browser); } catch {}
      }
    };

    init();
    return () => { cancelled = true; };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], detected, countryCode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}
