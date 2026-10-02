const destinations = [
  {
    title: "Coveñas & Tolu",
    meta: "3 Días / 2 Noches",
    price: "$350.000",
    image: "/coveñas.jpeg",
    tag: "SEMANA",
  },
  {
    title: "Cartagena - AEREO",
    meta: "3 Días / 2 Noches",
    price: "$599.000",
    image: "/cartagena.jpg",
    tag: "DESDE",
  },
  {
    title: "Santa Marta - AEREO",
    meta: "4 Días / 3 Noches",
    price: "$1.497.000",
    image: "/santa_marta.jpg",
    tag: "2 X 1",
  },
  {
    title: "Eje cafetero",
    meta: "2 Días / 3 Noches",
    price: "$619.000",
    image: "/eje_cafetero.jpeg",
    tag: "CULTURA ÚNICA",
  },
];

export default function PopularDestinations () {
  return (
<section className="bg-[#fff7ed] py-14">
      <div className="container-anvida">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-700">
              Inspiración sin límites
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Descubre Nuestros Destinos
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {["Todos", "Playa & Relax", "Montaña & Trekking", "Aventura Extrema", "Cultura & Historia"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-semibold transition-colors hover:bg-cyan-700 hover:text-white ${
                    index === 0
                      ? "bg-cyan-700 text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.title}
              className="group overflow-hidden rounded-xl border border-cyan-900/10 bg-white shadow-[0_4px_20px_-2px_rgba(14,116,144,.08),0_2px_6px_-1px_rgba(249,115,22,.04)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cyan-100">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[8px] font-bold text-white">
                  {destination.tag}
                </span>
              </div>

              <div className="p-4">
                <span className="text-[10px] text-slate-500">{destination.meta}</span>
                <h3 className="mt-1 min-h-12 font-display text-sm font-bold leading-5 text-slate-900">
                  {destination.title}
                </h3>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="block text-[9px] text-slate-500">DESDE</span>
                    <strong className="font-display text-xl text-cyan-700">
                      {destination.price}
                    </strong>
                    <span className="text-[9px] text-slate-500"> USD</span>
                  </div>
                  <button className="rounded-full bg-cyan-700 px-3 py-2 text-[9px] font-bold text-white">
                    Ver más
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
