"use client";

import { motion } from "framer-motion";
import {
  DoodleRibbon,
  DoodleSmiley,
  DoodleStar,
  DoodleBow,
} from "./doodles/Doodles";
import { useLanguage } from "./LanguageProvider";

const doodleMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ribbon: DoodleRibbon,
  smiley: DoodleSmiley,
  star: DoodleStar,
  bow: DoodleBow,
};

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="relative px-5 md:px-8 py-20 md:py-28 bg-matcha-light/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14 md:mb-20 mx-auto text-center md:text-left md:mx-0">
          <p className="eyebrow mb-3">{t.process.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            {t.process.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {t.process.steps.map((step, i) => {
            const Doodle = doodleMap[step.doodle];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative text-center sm:text-left"
              >
                <div className="mx-auto sm:mx-0 w-16 h-16 rounded-full bg-cream shadow-card flex items-center justify-center mb-5">
                  <Doodle className="w-9 h-9" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cocoa mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">{step.copy}</p>

                {i < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-cocoa/25 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
