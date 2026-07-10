"use client";

import { motion } from "framer-motion";
import { DoodleFlower } from "./doodles/Doodles";
import { useLanguage } from "./LanguageProvider";

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="relative px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14 md:mb-16">
          <p className="eyebrow mb-3">{t.reviews.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            {t.reviews.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 pt-4">
          {t.reviews.items.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ rotate: r.rotate }}
              className="relative bg-cream border border-cocoa/10 rounded-2xl shadow-card p-6 pt-8 hover:rotate-0 transition-transform duration-500"
            >
              <span className="tape rounded-sm" />
              <p className="font-display text-base leading-relaxed text-ink/85">
                "{r.quote}"
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center">
                  <DoodleFlower className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cocoa">{r.name}</p>
                  <p className="text-xs text-ink/50">{r.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
