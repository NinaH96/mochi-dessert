"use client";

import { motion } from "framer-motion";
import { featuredCakes } from "@/lib/data";

export default function FeaturedCakes() {
  return (
    <section id="cakes" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-3">Cake files</p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Browse by folder, not by pressure
          </h2>
          <p className="mt-4 text-ink/70">
            Start with the kind of celebration you have in mind. Each folder
            opens into a small archive of sizes, flavors, and visual references.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCakes.map((cake, i) => (
            <motion.a
              href="#gallery"
              key={cake.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`folder-card card-hover group block ${cake.tint} px-5 pb-5 pt-7`}
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-paper/65">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-cocoa-deep">
                  {cake.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink/70">{cake.blurb}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-cocoa/55">
                  Open folder
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
