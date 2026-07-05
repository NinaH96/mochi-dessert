"use client";

import { motion } from "framer-motion";
import { featuredCakes } from "@/lib/data";
import { DoodleCherry } from "./doodles/Doodles";

export default function FeaturedCakes() {
  return (
    <section id="cakes" className="relative px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="eyebrow mb-3">What we make</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            A cake for every kind of celebration
          </h2>
          <p className="mt-4 text-ink/70">
            Every order starts as a conversation. Here's where most of them begin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {featuredCakes.map((cake, i) => (
            <motion.a
              href="#contact"
              key={cake.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`card-hover group relative rounded-4xl ${cake.tint} p-3 shadow-card block`}
            >
              <div className="relative aspect-[5/4] rounded-[1.6rem] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-3 pt-5 pb-4">
                <h3 className="font-display text-xl font-semibold text-cocoa">
                  {cake.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink/70">{cake.blurb}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <DoodleCherry className="hidden md:block absolute -left-2 bottom-10 w-14 opacity-90 animate-wiggle" />
    </section>
  );
}
