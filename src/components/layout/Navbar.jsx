const navItems = [
  { label: "Destinos", href: "/destinos" },
  { label: "Planes", href: "/paquetes" },
  { label: "Promociones", href: "/ofertas" },
  { label: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/5 bg-white/95 backdrop-blur">
      <div className="container-anvida flex h-14 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="ANVIDA Logo" />
          {/* <div className="grid size-8 place-items-center rounded-lg bg-cyan-600 text-xs font-extrabold text-white">
            A
          </div> */}
          <span className="font-display text-sm font-extrabold tracking-tight text-slate-800">
            ANVIDA
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-slate-600 transition hover:text-cyan-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:302 620 93 87"
            className="hidden text-[11px] font-semibold text-slate-600 lg:block"
          >
            302 620 93 87 - 314 614 51 06
          </a>
          <a
            href="/contacto"
            className="rounded-full bg-orange-500 px-4 py-2 text-[11px] font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            Cotiza tu viaje
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            className="grid size-9 place-items-center rounded-full border border-slate-200 md:hidden"
          >
            <span className="text-sm">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};
