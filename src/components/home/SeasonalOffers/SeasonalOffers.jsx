export default function SeasonalOffers() {
  return (
    <section className="bg-[#f5ede3] py-14">
      <div className="container-anvida">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
              Oportunidades imperdibles
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold">Ofertas de Temporada</h2>
          </div>
          <span className="hidden text-xs text-slate-500 md:block">
            Precios congelados por tiempo limitado
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-600 p-6 text-white shadow-lg">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold">
              VENTA FLASH DE VERANO
            </span>
            <h3 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
              Hasta 40% OFF en Todo el Caribe
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/85">
              Reserva antes de que expire el cronómetro y obtén traslados
              privados gratuitos más crédito de spa.
            </p>

            <div className="mt-6 flex gap-2">
              {["03 DÍAS", "14 HRS", "26 MIN", "59 SEG"].map((item) => (
                <div key={item} className="rounded-lg bg-white/10 px-3 py-2 text-center backdrop-blur">
                  <strong className="block text-lg font-extrabold">{item.split(" ")[0]}</strong>
                  <span className="text-[8px] uppercase">{item.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-2">
              <button className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
                Código: VERANO40
              </button>
              <button className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold">
                Aprovechar Oferta
              </button>
            </div>
          </article>

          <div className="grid gap-5">
            {["Escapada 2x1 en Vuelos", "Paquetes Todo Incluido"].map(
              (title) => (
                <article key={title} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="h-20 w-28 shrink-0 rounded-lg bg-cyan-100" />
                  <div>
                    <span className="text-[8px] font-bold uppercase text-cyan-700">
                      Oferta especial
                    </span>
                    <h3 className="mt-1 font-display text-sm font-bold">{title}</h3>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Ver condiciones y fechas disponibles.
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
