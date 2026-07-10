"use client";

import { motion } from "framer-motion";

export default function About() {
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
          <p className="eyebrow mb-3">Our story</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
            It started with a love for celebration
            <span className="text-strawberry">.</span>
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              Mochi Dessert grew from years of learning, traveling, and baking.
              During high school in Europe, our founder studied dessert-making
              more seriously, falling in love with the patience, detail, and
              quiet joy behind a beautiful cake.
            </p>
            <p>
              In college, that passion became something shared. Friends started
              asking for birthday cakes, surprise cakes, and little desserts for
              the moments they wanted to remember. With every order, their
              encouragement turned a hobby into something more intentional.
            </p>
            <p>
              Now, every cake is made to help people celebrate their special
              occasions with something personal, thoughtful, and handmade in
              West Lafayette. It is still one cake at a time, still made with
              care, and always designed around the person receiving it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
