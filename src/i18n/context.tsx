import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DICTS, LOCALES, type Locale } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof DICTS["en"];
  dir: "ltr" | "rtl";
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null;
      if (stored && LOCALES.includes(stored)) {
        setLocaleState(stored);
      } else {
        const nav = navigator.language.slice(0, 2).toLowerCase() as Locale;
        if (LOCALES.includes(nav)) setLocaleState(nav);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem("locale", l); } catch {}
  };

  return (
    <I18nCtx.Provider value={{ locale, setLocale, t: DICTS[locale], dir: locale === "ar" ? "rtl" : "ltr" }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
