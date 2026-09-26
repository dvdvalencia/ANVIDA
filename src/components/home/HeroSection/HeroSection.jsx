const searchFields = [
  ["DESTINO", "Tolu y Coveñas"],
  ["FECHA DE SALIDA", "15/06/2027"],
  ["DURACIÓN", "7 Días"],
  ["PASAJEROS", "2 Adultos"],
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cyan-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,127,157,.78), rgba(0,100,124,.82)), url('/images/hero-travel.jpg')",
        }}
      />

      <div className="container-anvida relative py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold backdrop-blur">
            Agencia Oficial de Experiencias Extraordinarias
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            ¡Viaja, Vive, Descubre!
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
            Experiencias diseñadas a tu medida en los rincones más fascinantes
            del planeta con curaduría experta y seguridad absoluta.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-2 shadow-2xl">
          <div className="mb-2 flex gap-2 overflow-x-auto px-2 pt-1">
            {["Vuelos + Hotel", "Paquetes Todo Incluido", "Tour y Aventura", "Cruceros"].map(
              (item, index) => (
                <button
                  key={item}
                  className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-bold ${
                    index === 0
                      ? "bg-cyan-700 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_.8fr_.9fr_auto]">
            {searchFields.map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2"
              >
                <span className="block text-[8px] font-bold tracking-wider text-cyan-700">
                  {label}
                </span>
                <span className="mt-1 block truncate text-xs font-semibold text-slate-800">
                  {value}
                </span>
              </div>
            ))}
            <button className="rounded-full bg-orange-500 px-6 py-3 text-xs font-bold text-white hover:bg-orange-600">
              Buscar
            </button>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2 text-[10px] font-semibold text-white/90">
          <span className="rounded-full bg-white/10 px-3 py-2">Cientos de viajeros felices</span>
          <span className="rounded-full bg-white/10 px-3 py-2">Asesoría personalizada</span>
          <span className="rounded-full bg-white/10 px-3 py-2">Pagos flexibles</span>
          <span className="rounded-full bg-white/10 px-3 py-2">Seguridad absoluta</span>
        </div>
      </div>
    </section>
  );
}
