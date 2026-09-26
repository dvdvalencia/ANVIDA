const columns = [
  {
    title: "Destinos",
    links: ["Coveñas", "Cartagena", "Santa Marta", "bahia Solano", "San Andrés", "Providencia"],
  },
  {
    title: "Explora",
    links: ["Paquetes Todo Incluido", "Ofertas de Temporada",  "Asesoría de Viajes"],
  },
];

export const Footer = () => {
  return (
<footer className="bg-[#fff7ed]">
      <div className="container-anvida grid gap-10 border-t border-slate-900/5 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg bg-cyan-600 text-xs font-extrabold text-white">
              A
            </div>
            <span className="font-display font-extrabold">ANVIDA</span>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-600">
            Tu agencia de viajes experta en experiencias memorables,
            itinerarios personalizados y escapadas diseñadas para ti.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 font-display text-sm font-bold">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 hover:text-cyan-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 font-display text-sm font-bold">Suscríbete</h3>
          <p className="mb-3 text-sm text-slate-600">
            Recibe inspiración viajera y descuentos.
          </p>
          <div className="flex overflow-hidden rounded-full border border-slate-200 bg-white">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-xs outline-none"
            />
            <button className="bg-cyan-600 px-4 text-xs font-bold text-white">
              Unirme
            </button>
          </div>
        </div>
      </div>

      <div className="container-anvida flex flex-col gap-3 border-t border-slate-900/5 py-5 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2026 ANVIDA Travel Agency. Todos los derechos reservados.</span>
        <div className="flex gap-4">
          <a href="#">Aviso Legal</a>
          <a href="#">Privacidad</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
