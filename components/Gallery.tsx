"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";

const heightClass: Record<string, string> = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/4.6]",
  short: "aspect-[4/3]",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="eyebrow mb-3">The gallery</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            A little peek inside the box
          </h2>
          <p className="mt-4 text-ink/70">
            A rotating collection of recent cakes, cupcakes, and mochi treats.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`mb-4 md:mb-5 break-inside-avoid rounded-3xl overflow-hidden shadow-card ${heightClass[img.h]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
