"use client";

import { motion } from "framer-motion";
import FloatingDoodle from "./ui/FloatingDoodle";
import {
  DoodleStrawberry,
  DoodleStar,
  DoodleBow,
  DoodleFlower,
} from "./doodles/Doodles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-5 md:px-8 overflow-hidden"
    >
      {/* ambient floating doodles, scattered but not distracting */}
      <FloatingDoodle className="absolute left-[4%] top-[22%] w-10 md:w-14" duration={7}>
        <DoodleStrawberry className="w-full h-full" />
      </FloatingDoodle>
      <FloatingDoodle className="absolute right-[6%] top-[14%] w-8 md:w-12" duration={5.5} delay={0.6}>
        <DoodleStar className="w-full h-full" />
      </FloatingDoodle>
      <FloatingDoodle className="absolute right-[3%] bottom-[10%] w-10 md:w-14" duration={8} delay={1}>
        <DoodleFlower className="w-full h-full" />
      </FloatingDoodle>
      <FloatingDoodle
        className="absolute right-3 top-24 z-0 w-20 opacity-95 drop-shadow-md sm:right-8 sm:w-24 md:right-[7%] md:top-28 md:w-28 lg:w-36"
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

        {/* Right: the "cake box" reveal — our signature moment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-md md:max-w-none"
        >
          <div className="relative aspect-[4/5] rounded-4xl bg-blush-light shadow-soft overflow-hidden">
            {/* Replace with a real photo of a finished cake at /public/images/hero-cake.jpg */}
            <img
              src="/images/hero-cake.jpg"
              alt="A custom Mochi Dessert cake, freshly finished"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* box lid + ribbon that "unties" on load, like opening a cake box */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 bg-cream"
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 250 H400"
                stroke="#F8D8DF"
                strokeWidth="26"
                initial={{ pathLength: 1, opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />
              <motion.path
                d="M200 0 V500"
                stroke="#F8D8DF"
                strokeWidth="26"
                initial={{ pathLength: 1, opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </svg>
          </div>

          <FloatingDoodle
            className="absolute -bottom-6 -left-6 w-16 md:w-20 drop-shadow-md"
            duration={6}
          >
            <DoodleBow className="w-full h-full" />
          </FloatingDoodle>
        </motion.div>
      </div>
    </section>
  );
}
