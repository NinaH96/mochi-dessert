"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DoodleSwirl } from "./doodles/Doodles";

const links = [
  { href: "#cakes", label: "Cakes" },
  { href: "#about", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(110,74,61,0.15)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <DoodleSwirl className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-display text-xl md:text-2xl font-semibold text-cocoa tracking-tight">
            Mochi Dessert
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-ink/80 hover:text-strawberry transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-strawberry text-cream font-body font-semibold text-sm px-5 py-2.5 shadow-button hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            Order a Cake
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
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
          className="lg:hidden bg-cream border-t border-blush px-5 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-base font-medium text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-strawberry text-cream font-body font-semibold text-sm px-5 py-3 text-center shadow-button"
          >
            Order a Cake
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
