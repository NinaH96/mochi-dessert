"use client";

import { motion } from "framer-motion";
import FloatingDoodle from "./ui/FloatingDoodle";
import {
  DoodleStar,
  DoodleBow,
} from "./doodles/Doodles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-5 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center">
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
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-ink"
          >
            Baked with love,
            <br />
            <span className="text-strawberry squiggle-underline">made just for you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 text-base md:text-lg text-ink/70 max-w-md mx-auto md:mx-0"
          >
            Custom cakes for birthdays, graduations, pets, and every small
            reason to celebrate — designed with you, baked in small batches,
            picked up with a bow on top.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="rounded-full bg-strawberry text-cream font-body font-semibold px-7 py-3.5 shadow-button hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              Order a Custom Cake
            </a>
            <a
              href="#gallery"
              className="rounded-full border-2 border-cocoa/15 text-cocoa font-body font-semibold px-7 py-3.5 hover:border-cocoa/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              See the Gallery
            </a>
          </motion.div>
        </div>

        {/* Right: a compact Mochi dog decoration cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 mx-auto h-60 w-full max-w-sm sm:h-72 md:h-[420px] md:max-w-md lg:max-w-lg"
        >
          <FloatingDoodle
            className="absolute right-6 top-0 w-32 opacity-95 drop-shadow-md sm:right-8 sm:w-40 md:right-12 md:top-8 md:w-52 lg:w-60"
            duration={7.5}
            delay={0.2}
            yOffset={8}
            rotate={3}
          >
            <img
              src="/images/mochi-dog-baker.png"
              alt=""
              aria-hidden="true"
              className="w-full h-auto"
            />
          </FloatingDoodle>

          <FloatingDoodle
            className="absolute left-14 top-36 w-14 drop-shadow-md sm:left-16 sm:top-44 sm:w-16 md:left-20 md:top-72 md:w-20"
            duration={6.5}
            delay={0.5}
            yOffset={6}
            rotate={2}
          >
            <DoodleBow className="w-full h-full" />
          </FloatingDoodle>

          <FloatingDoodle
            className="absolute right-4 top-6 w-8 opacity-80 md:right-8 md:top-12 md:w-10"
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
