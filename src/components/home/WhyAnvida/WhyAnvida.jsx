const benefits = [
  ["Personalización Total", "Diseñamos cada itinerario adaptado exactamente a tus gustos."],
  ["Mejor Precio Garantizado", "Acuerdos directos con cadenas hoteleras y aerolíneas."],
  ["Soporte 24/7 en Destino", "Un concierge dedicado disponible para ayudarte."],
  ["Viajes Seguros & Protegidos", "Pólizas de cobertura en asistencia médica."],
];

export default function WhyAnvida() {
  return (
    <section className="bg-[#fff7ed] py-14">
      <div className="container-anvida text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-700">
          El estándar ANVIDA
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold">¿Por qué viajar con ANVIDA?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500">
          Transformamos la planificación de tus viajes en un proceso placentero,
          transparente y seguro.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text], index) => (
            <article key={title} className="rounded-xl bg-white p-5 text-left shadow-sm">
              <div className="mb-4 grid size-10 place-items-center rounded-full bg-cyan-50 text-cyan-700">
                {index + 1}
              </div>
              <h3 className="font-display text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
