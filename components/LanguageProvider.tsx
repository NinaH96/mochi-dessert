"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Language, translations } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Language;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const value = useMemo(
    () => ({
      lang,
      toggleLanguage: () => setLang((current) => (current === "en" ? "zh" : "en")),
      t: translations[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
