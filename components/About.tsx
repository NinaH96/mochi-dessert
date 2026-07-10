"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const storyPhotos = [
  {
    src: "/images/story/friends-1.jpg",
    alt: "Friends celebrating with slices of cake",
  },
  {
    src: "/images/story/friends-2.jpg",
    alt: "Friends sharing matcha cake slices",
  },
  {
    src: "/images/story/friends-3.jpg",
    alt: "Friends sharing slices of a homemade cake",
  },
  {
    src: "/images/story/friends-4.jpg",
    alt: "Graduation cake with custom photo decorations",
  },
  {
    src: "/images/story/friends-5.jpg",
    alt: "Friends enjoying slices of a custom cake",
  },
];

export default function About() {
  const { t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(0);

  const showPrevious = () => {
    setActivePhoto((current) => (current === 0 ? storyPhotos.length - 1 : current - 1));
  };

  const showNext = () => {
    setActivePhoto((current) => (current + 1) % storyPhotos.length);
  };

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
          <div className="paper-panel relative mx-auto aspect-[4/3] max-w-[21rem] overflow-hidden rounded-4xl border border-cocoa/10 shadow-soft sm:max-w-[23rem] md:aspect-[3/4] md:max-w-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={storyPhotos[activePhoto].src}
                src={storyPhotos[activePhoto].src}
                alt={storyPhotos[activePhoto].alt}
                initial={{ opacity: 0, x: 18, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous story photo"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-lg font-semibold text-cocoa-deep shadow-card backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                ‹
              </button>
              <div className="flex items-center gap-2 rounded-full bg-paper/85 px-3 py-2 shadow-card backdrop-blur-sm">
                {storyPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    aria-label={`Show story photo ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === activePhoto ? "bg-strawberry" : "bg-cocoa/25"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next story photo"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-lg font-semibold text-cocoa-deep shadow-card backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                ›
              </button>
            </div>
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
