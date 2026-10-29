import { currencyFormatter } from "./quoteUtils";

function DetailRow({ label, children }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className="text-right font-semibold capitalize text-slate-800">{children}</dd>
    </div>
  );
}
 
function EmptyQuote({ periods }) {
  return (
    <>
      <div className="grid size-12 place-items-center rounded-2xl bg-cyan-50 text-2xl text-cyan-700" aria-hidden="true">✦</div>
      <h2 className="mt-5 text-xl font-bold text-slate-900">Tu cotización aparecerá aquí</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Completa los datos de tu viaje y te mostraremos la tarifa que aplica para esas fechas.
      </p>
      {periods.length > 0 && (
        <div className="mt-6 border-t border-slate-100 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Periodos disponibles</h3>
          <ul className="mt-3 space-y-2">
            {periods.map((period) => (
              <li key={period} className="flex items-center gap-2 text-sm capitalize text-slate-700">
                <span className="size-1.5 rounded-full bg-orange-500" />{period}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function QuoteDetails({ quote, selectedHotel }) {
  return (
    <>
      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
        Cotización lista
      </span>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{quote.city}</h2>
      <p className="mt-1 text-sm text-slate-600">{quote.hotel}</p>
      <div className="my-6 border-t border-slate-100" />
      <dl className="space-y-4 text-sm">
        <DetailRow label="Entrada">{quote.checkIn}</DetailRow>
        <DetailRow label="Salida">{quote.checkOut}</DetailRow>
        <DetailRow label="Duración">{quote.nights} {quote.nights === 1 ? "noche" : "noches"}</DetailRow>
        <DetailRow label="Tarifa aplicada">{quote.tariff.periodo}</DetailRow>
      </dl>
      <div className="mt-6 rounded-2xl bg-cyan-50 p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-800">Valor de la tarifa</span>
        <p className="mt-1 text-3xl font-extrabold tracking-tight text-cyan-800">
          {currencyFormatter.format(quote.tariff.precio)}
        </p>
        <span className="text-xs text-slate-500">COP</span>
      </div>
      {selectedHotel?.incluye && (
        <div className="mt-6">
          <h3 className="text-sm font-bold text-slate-900">Tu plan incluye</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{selectedHotel.incluye}</p>
        </div>
      )}
      <p className="mt-5 text-xs leading-5 text-slate-500">
        Valor de referencia sujeto a disponibilidad y confirmación con un asesor ANVIDA.
      </p>
    </>
  );
}

export default function QuoteResult({ quote, selectedHotel, periods }) {
  return (
    <aside aria-live="polite" className="self-start rounded-3xl border border-cyan-900/10 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(8,145,178,.45)] md:p-8">
      {quote
        ? <QuoteDetails quote={quote} selectedHotel={selectedHotel} />
        : <EmptyQuote periods={periods} />}
    </aside>
  );
}
