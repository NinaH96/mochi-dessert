"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import FloatingDoodle from "./ui/FloatingDoodle";
import { DoodleCandle, DoodleStrawberry } from "./doodles/Doodles";

const contactLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mochidessert",
    href: "https://instagram.com/mochidessert",
  },
  {
    icon: MessageCircle,
    label: "WeChat",
    value: "mochi_dessert",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@mochidessert.com",
    href: "mailto:hello@mochidessert.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-5xl mx-auto relative rounded-5xl bg-cocoa text-cream px-6 md:px-16 py-16 md:py-20 overflow-hidden">
        <FloatingDoodle className="absolute top-8 right-10 w-14 opacity-90" duration={6}>
          <DoodleCandle className="w-full h-full" />
        </FloatingDoodle>
        <FloatingDoodle className="absolute bottom-10 left-8 w-12 opacity-90" duration={7} delay={0.5}>
          <DoodleStrawberry className="w-full h-full" />
        </FloatingDoodle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl"
        >
          <p className="eyebrow mb-3 !text-blush">Let's make something sweet</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Tell us what you're celebrating.
          </h2>
          <p className="text-cream/75 mb-10 max-w-lg">
            Send a message with your date, flavor ideas, and any inspiration
            photos. We'll get back to you within a day or two to talk through
            the details.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl bg-cream/10 hover:bg-cream/15 transition-colors p-5"
              >
                <c.icon size={22} className="text-blush" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/50">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-cream/80 mb-10">
            <MapPin size={20} className="text-blush shrink-0" />
            <p>West Lafayette, Indiana — pickup by appointment</p>
          </div>

          <a
            href="mailto:hello@mochidessert.com"
            className="inline-block rounded-full bg-strawberry text-cream font-body font-semibold px-8 py-4 shadow-button hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Your Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}
