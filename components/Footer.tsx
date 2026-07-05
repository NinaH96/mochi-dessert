import { DoodleSwirl, DoodleStar } from "./doodles/Doodles";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-14 pb-10 border-t border-cocoa/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-2">
          <DoodleSwirl className="w-7 h-7" />
          <span className="font-display text-lg font-semibold text-cocoa">
            Mochi Dessert
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
          <a href="#cakes" className="hover:text-strawberry transition-colors">Cakes</a>
          <a href="#about" className="hover:text-strawberry transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-strawberry transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-strawberry transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-strawberry transition-colors">Contact</a>
        </nav>

        <DoodleStar className="w-6 h-6 opacity-70" />
      </div>

      <p className="max-w-6xl mx-auto mt-10 text-xs text-ink/40">
        © {new Date().getFullYear()} Mochi Dessert, West Lafayette, Indiana. Made with love, one small batch at a time.
      </p>
    </footer>
  );
}
