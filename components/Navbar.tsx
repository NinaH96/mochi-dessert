"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#cakes", label: "Cake Files", color: "bg-folder-pink" },
  { href: "#about", label: "Story", color: "bg-folder-cream" },
  { href: "#gallery", label: "Archive", color: "bg-folder-blue" },
  { href: "#how-it-works", label: "Order Notes", color: "bg-folder-green" },
  { href: "#reviews", label: "Reviews", color: "bg-blush-light" },
  { href: "#faq", label: "FAQ", color: "bg-cream-deep" },
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
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(110,74,61,0.15)]" : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-end justify-between px-5 md:px-8 pt-3 pb-0">
        <a href="#top" className="group flex items-center gap-3 pb-3">
          <img
            src="/images/brand/mochi-dog-head-cutout.png"
            alt="Mochi Dessert home"
            className="h-10 w-16 object-contain drop-shadow-sm transition-transform duration-300 group-hover:-rotate-3 md:h-12 md:w-20"
          />
          <span className="brand-subtitle text-2xl text-cocoa-deep md:text-3xl">
            Mochi Dessert
          </span>
        </a>

        <div className="hidden lg:flex items-end gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`folder-tab ${l.color} px-5 py-3 font-body text-sm font-semibold text-cocoa-deep transition-transform duration-300 hover:-translate-y-1`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="folder-tab bg-strawberry px-5 py-3 font-body text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-1"
          >
            Order
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="mb-3 flex flex-col gap-1.5 p-2 lg:hidden"
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
          className="lg:hidden bg-cream/95 border-t border-cocoa/10 px-5 pb-6 pt-4 grid grid-cols-2 gap-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`folder-tab ${l.color} px-4 py-3 font-body text-sm font-semibold text-cocoa-deep`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="folder-tab bg-strawberry px-4 py-3 text-center font-body text-sm font-semibold text-cream"
          >
            Order
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
