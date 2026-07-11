"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const PREVIEW_ITEM_COUNT = 3;

export default function Gallery() {
  const { t } = useLanguage();
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(t.gallery.folders[0].id);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tappingId, setTappingId] = useState<string | null>(null);
  const activeFolder = t.gallery.folders.find((folder) => folder.id === activeId) ?? t.gallery.folders[0];
  const hasMoreItems = activeFolder.items.length > PREVIEW_ITEM_COUNT;
  const visibleItems = isExpanded ? activeFolder.items : activeFolder.items.slice(0, PREVIEW_ITEM_COUNT);

  const handleFolderClick = (folderId: string) => {
    setActiveId(folderId);
    setIsExpanded(false);
    setTappingId(folderId);

    window.setTimeout(() => {
      setTappingId((current) => (current === folderId ? null : current));
    }, 320);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      window.setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    }
  };

  return (
    <section id="gallery" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">{t.gallery.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-ink/70">
            {t.gallery.body}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2">
            {t.gallery.folders.map((folder, i) => {
              const isActive = folder.id === activeId;
              return (
                <motion.button
                  type="button"
                  key={folder.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  onClick={() => handleFolderClick(folder.id)}
                  className={`folder-card ${folder.color} group min-h-[198px] px-5 pb-5 pt-7 text-left transition-all duration-300 ${
                    isActive ? "-translate-y-2 shadow-soft" : "hover:-translate-y-1"
                  } ${tappingId === folder.id ? "is-tapping" : ""}`}
                  aria-pressed={isActive}
                >
                  {"price" in folder && folder.price && (
                    <span className="absolute right-4 top-4 rounded-full border border-cocoa/15 bg-paper/80 px-3 py-1 text-sm font-semibold text-cocoa-deep shadow-[0_6px_16px_-14px_rgba(74,43,36,0.45)] backdrop-blur-sm">
                      {folder.price}
                    </span>
                  )}
                  <div className="h-10" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cocoa/55">
                    {folder.note}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-cocoa-deep">
                    {folder.title}
                  </h3>
                  <p className="mt-3 max-w-xs whitespace-pre-line text-sm leading-relaxed text-cocoa-deep/65">
                    {folder.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            ref={detailsRef}
            key={activeFolder.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="paper-panel scroll-mt-28 rounded-[1.5rem] border border-cocoa/10 p-4 shadow-card md:p-6 lg:scroll-mt-32"
          >
            <div className={`folder-tab inline-block ${activeFolder.color} px-5 py-3 font-display text-xl font-semibold text-cocoa-deep`}>
              {activeFolder.title}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {visibleItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-cocoa/10 bg-paper p-3 shadow-[0_8px_18px_-16px_rgba(74,43,36,0.5)]"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-cream-deep">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mt-3 font-display text-lg font-semibold text-cocoa-deep">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ink/55">{item.meta}</p>
                </article>
              ))}
            </div>

            {hasMoreItems && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  className="rounded-full border border-cocoa/15 bg-paper px-5 py-3 text-sm font-semibold text-cocoa-deep shadow-[0_8px_18px_-18px_rgba(74,43,36,0.45)] transition-all hover:-translate-y-0.5 hover:border-strawberry/35 hover:text-strawberry"
                >
                  {isExpanded ? t.gallery.showLess : `${t.gallery.showMore} (${activeFolder.items.length})`}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
