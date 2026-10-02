
export  default function DestinationCard({ destination }) {
  const {
    title,
    location,
    image,
    duration,
    price,
    currency = "COP",
    category,
    featured = false,
  } = destination;
  return (
 <article className="group overflow-hidden rounded-2xl border border-cyan-900/[0.08] bg-white shadow-[0_4px_20px_-2px_rgba(14,116,144,0.08),0_2px_6px_-1px_rgba(249,115,22,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-4px_rgba(14,116,144,0.12),0_4px_12px_-2px_rgba(249,115,22,0.06)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent" />

        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wide text-white">
            Destacado
          </span>
        )}

        {category && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-display text-[10px] font-bold text-cyan-800 backdrop-blur">
            {category}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          {location && (
            <span className="text-xs text-slate-500">
              {location}
            </span>
          )}

          {duration && (
            <span className="shrink-0 text-xs font-medium text-slate-500">
              {duration}
            </span>
          )}
        </div>

        <h3 className="mt-2 font-display text-lg font-bold leading-tight text-slate-900">
          {title}
        </h3>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
          <div>
            {price !== null && price !== undefined ? (
              <>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Desde
                </span>
                <strong className="font-display text-xl font-bold text-cyan-700">
                  {new Intl.NumberFormat("es-CO").format(price)}
                </strong>
                <span className="ml-1 text-[10px] text-slate-500">
                  {currency}
                </span>
              </>
            ) : (
              <>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Planes disponibles
                </span>
                <span className="font-display text-sm font-semibold text-cyan-700">
                  Consultar
                </span>
              </>
            )}
          </div>

          <a
            href={`/destinos/${destination.slug}`}
            className="rounded-full bg-cyan-600 px-4 py-2 font-display text-xs font-semibold text-white transition hover:bg-cyan-700"
          >
            Ver destino
          </a>
        </div>
      </div>
    </article>
  )
}
