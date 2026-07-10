export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cocoa/10 px-5 pb-8 pt-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-end gap-3">
            <p className="brand-subtitle text-3xl text-cocoa-deep">Mocchi</p>
            <img
              src="/images/brand/mochi-sleep-dog-cutout.png"
              alt=""
              aria-hidden="true"
              className="mb-1 w-28 drop-shadow-sm md:w-36"
            />
          </div>
          <p className="mt-1 max-w-xs text-sm text-ink/50">
            Custom cakes and small-batch sweets in West Lafayette, Indiana.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
          <a href="#cakes" className="hover:text-strawberry transition-colors">Cakes</a>
          <a href="#about" className="hover:text-strawberry transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-strawberry transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-strawberry transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-strawberry transition-colors">Contact</a>
        </nav>
      </div>

      <p className="relative z-10 mx-auto mt-10 max-w-6xl text-xs text-ink/40">
        © {new Date().getFullYear()} Mochi Dessert, West Lafayette, Indiana. Made with love, one small batch at a time.
      </p>
    </footer>
  );
}
