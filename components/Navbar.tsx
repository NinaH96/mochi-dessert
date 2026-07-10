"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const links = [
  { href: "#about", key: "story", color: "bg-folder-cream" },
  { href: "#gallery", key: "gallery", color: "bg-folder-blue" },
  { href: "#how-it-works", key: "orderNotes", color: "bg-folder-green" },
  { href: "#reviews", key: "reviews", color: "bg-blush-light" },
  { href: "#faq", key: "faq", color: "bg-cream-deep" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {
      // Browsers may ignore audio if the click is interrupted by navigation.
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 border-b border-cocoa/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7ECE6]/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(110,74,61,0.18)]"
          : "bg-[#F7ECE6]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#top"
          onClick={playClickSound}
          className="group flex -translate-y-0.5 items-center gap-3"
        >
          <img
            src="/images/brand/mochi-dog-head-cutout.png"
            alt="Mochi Dessert home"
            className="h-10 w-16 object-contain drop-shadow-sm transition-transform duration-300 group-hover:-rotate-3 md:h-12 md:w-20"
          />
          <span className="brand-subtitle text-2xl text-cocoa-deep md:text-3xl">
            Mocchi Dessert
          </span>
        </a>

        <div className="hidden translate-y-3 items-end gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`folder-tab ${l.color} px-5 py-3 font-body text-sm font-semibold text-cocoa-deep transition-transform duration-300 hover:-translate-y-1`}
            >
              {t.nav[l.key]}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="folder-tab bg-paper px-4 py-3 font-body text-sm font-semibold text-cocoa-deep transition-transform duration-300 hover:-translate-y-1"
          >
            {t.nav.toggle}
          </button>
          <a
            href="#contact"
            className="folder-tab bg-strawberry px-5 py-3 font-body text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-1"
          >
            {t.nav.order}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.menu}
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className={`block h-0.5 w-6 bg-cocoa rounded-full transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cocoa rounded-full transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cocoa rounded-full transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-[#F7ECE6]/98 border-t border-cocoa/10 px-5 pb-6 pt-4 grid grid-cols-2 gap-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`folder-tab ${l.color} px-4 py-3 font-body text-sm font-semibold text-cocoa-deep`}
            >
              {t.nav[l.key]}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="folder-tab bg-paper px-4 py-3 text-left font-body text-sm font-semibold text-cocoa-deep"
          >
            {t.nav.toggle}
          </button>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="folder-tab bg-strawberry px-4 py-3 text-center font-body text-sm font-semibold text-cream"
          >
            {t.nav.order}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
