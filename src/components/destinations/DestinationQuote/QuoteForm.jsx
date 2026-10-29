const INPUT_CLASS =
  "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10 disabled:bg-slate-100";
const LABEL_CLASS = "text-sm font-semibold text-slate-800";

function SelectField({ label, value, onChange, options, disabled = false }) {
  return (
    <label className={LABEL_CLASS}>
      {label}
      <select value={value} onChange={onChange} disabled={disabled} className={INPUT_CLASS}>
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </label>
  );
}

function DateField({ label, value, min, onChange }) {
  return (
    <label className={LABEL_CLASS}>
      {label}
      <input
        type="date"
        min={min}
        value={value}
        onChange={onChange}
        required
        className={INPUT_CLASS}
      />
    </label>
  );
}

export default function QuoteForm({
  destinations, city, hotelName, hotels, checkIn, checkOut, today,
  isHoliday, invalidDates, message, selectedHotel,
  onCityChange, onHotelChange, onCheckInChange, onCheckOutChange,
  onHolidayChange, onSubmit,
}) {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
          Cotiza tu viaje
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          ¿Cuándo quieres viajar?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Selecciona tus fechas de entrada y salida para encontrar la tarifa que
          corresponde a tu estadía.
        </p>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-cyan-900/10 bg-white p-5 shadow-[0_18px_50px_-32px_rgba(8,145,178,.45)] md:p-8">
        {destinations.length ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Destino"
                value={city}
                onChange={onCityChange}
                options={destinations.map(({ ciudad }) => ({ value: ciudad, label: ciudad }))}
              />
              <SelectField
                label="Hotel"
                value={hotelName}
                onChange={onHotelChange}
                disabled={!hotels.length}
                options={hotels.map(({ nombre }) => ({ value: nombre, label: nombre }))}
              />
              <DateField label="Fecha de entrada" value={checkIn} min={today} onChange={onCheckInChange} />
              <DateField label="Fecha de salida" value={checkOut} min={checkIn || today} onChange={onCheckOutChange} />
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50/70 p-4">
              <input type="checkbox" checked={isHoliday} onChange={onHolidayChange} className="mt-0.5 size-4 accent-orange-500" />
              <span>
                <span className="block text-sm font-semibold text-slate-800">
                  Mi estadía corresponde a una tarifa de festivos
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">
                  Actívala si tus fechas aplican a la tarifa festiva del hotel.
                </span>
              </span>
            </label>

            {invalidDates && (
              <p className="mt-3 text-sm font-medium text-red-600" role="alert">
                La fecha de salida debe ser posterior a la fecha de entrada.
              </p>
            )}
            {message && (
              <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={!selectedHotel || invalidDates}
              className="mt-6 w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-48"
            >
              Cotizar mi estadía <span aria-hidden="true">→</span>
            </button>
          </>
        ) : (
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">
            No hay destinos disponibles para cotizar en este momento.
          </p>
        )}
      </form>
    </div>
  );
}
