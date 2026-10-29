const BENEFITS = [
  "Planes para cada ocasión",
  "Asesoría personalizada",
  "Precios en pesos colombianos",
];

export default function QuoteHero() {
  return (
    <section className="relative overflow-hidden bg-cyan-800 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(8,92,112,.96), rgba(8,145,178,.65)), url('/coveñas.jpeg')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
          Tu próxima escapada empieza aquí
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Encuentra tu destino,{" "}
          <span className="text-orange-300">cotiza tus fechas.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-50 md:text-base">
          Elige ciudad, hotel y fechas para consultar la tarifa disponible para
          tu viaje. Tu próxima historia está más cerca de lo que crees.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="rounded-full bg-white/10 px-4 py-2">
              <span aria-hidden="true">✦ </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
