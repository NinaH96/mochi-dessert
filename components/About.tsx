"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-5 md:px-8 py-20 md:py-28 bg-blush-light/50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="paper-panel relative aspect-square max-w-sm mx-auto rounded-4xl overflow-hidden border border-cocoa/10 shadow-soft">
            <img
              src="/images/brand/mochi-logo-dog.png"
              alt="Mochi Dessert dog mascot sticker"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="eyebrow mb-3">{t.about.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            {t.about.title}
            <span className="text-strawberry">.</span>
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
