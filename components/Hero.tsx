"use client";

import { motion } from "framer-motion";
import FloatingDoodle from "./ui/FloatingDoodle";
import { DoodleStar } from "./doodles/Doodles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.98fr_1.02fr] md:gap-8">
        {/* Left: copy */}
        <div className="relative z-10 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            West Lafayette, Indiana
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-[1.02]"
          >
            <span className="brand-script block text-6xl text-strawberry sm:text-7xl md:text-8xl">
              Mocchi
            </span>
            <span className="mt-2 block font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
              cakes for special days.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70 md:mx-0 md:text-lg"
          >
            Custom cakes, pet-friendly treats, and small-batch sweets from a
            home studio in West Lafayette. Each order is kept like a tiny
            celebration folder: thoughtful, personal, and made one at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <a
              href="#contact"
              className="rounded-full bg-strawberry px-7 py-3.5 text-center font-body font-semibold text-cream shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              Order a Custom Cake
            </a>
            <a
              href="#gallery"
              className="rounded-full border-2 border-cocoa/15 bg-paper/70 px-7 py-3.5 text-center font-body font-semibold text-cocoa-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-cocoa/35"
            >
              Open the Archive
            </a>
          </motion.div>
        </div>

        {/* Right: a compact brand illustration cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 mx-auto h-72 w-full max-w-sm sm:h-80 md:h-[430px] md:max-w-md lg:max-w-lg"
        >
          <FloatingDoodle
            className="absolute left-1/2 top-0 w-64 -translate-x-1/2 opacity-95 drop-shadow-md sm:w-72 md:top-4 md:w-80 lg:w-[22rem]"
            duration={7.5}
            delay={0.2}
            yOffset={8}
            rotate={3}
          >
            <img
              src="/images/brand/mochi-cake-dog-cutout.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </FloatingDoodle>

          <FloatingDoodle
            className="absolute right-8 top-10 w-8 opacity-80 md:right-10 md:top-14 md:w-10"
            duration={5.5}
            delay={0.8}
            yOffset={5}
            rotate={2}
          >
            <DoodleStar className="w-full h-full" />
          </FloatingDoodle>
        </motion.div>
      </div>
    </section>
  );
}
