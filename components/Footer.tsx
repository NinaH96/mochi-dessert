"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-cocoa/10 px-5 pb-8 pt-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <img
            src="/images/brand/mochi-sleep-dog-cutout.png"
            alt=""
            aria-hidden="true"
            className="w-28 drop-shadow-sm md:w-32"
          />
          <p className="mt-1 text-sm text-ink/50">
            {t.footer.body}
          </p>
        </div>

        <nav className="flex flex-wrap items-end gap-x-6 gap-y-2 pb-3 text-sm text-ink/60">
          <a href="#about" className="hover:text-strawberry transition-colors">{t.footer.story}</a>
          <a href="#gallery" className="hover:text-strawberry transition-colors">{t.footer.gallery}</a>
          <a href="#faq" className="hover:text-strawberry transition-colors">{t.footer.faq}</a>
          <a href="#contact" className="hover:text-strawberry transition-colors">{t.footer.contact}</a>
        </nav>
      </div>

      <p className="relative z-10 mx-auto mt-10 max-w-6xl text-xs text-ink/40">
        © {new Date().getFullYear()} {t.footer.copyright}
      </p>
    </footer>
  );
}
