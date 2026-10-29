"use client";

const CATEGORIES = [
  "Paquetes Todo Incluido",
  "Hospedaje",
  "Tour y Aventura",
  "Transporte",
];

const FIELD_CLASS =
  "min-w-0 rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2";
const LABEL_CLASS =
  "block cursor-pointer text-[8px] font-bold tracking-wider text-cyan-700";
const SELECT_CLASS =
  "mt-1 w-full cursor-pointer truncate bg-transparent text-xs font-semibold text-slate-800 focus:outline-none";

function SearchField({ label, htmlFor, children }) {
  return (
    <div className={FIELD_CLASS}>
      <label htmlFor={htmlFor} className={LABEL_CLASS}>
        {label}
      </label>
      {children}
    </div>
  );
}

function CategoryTabs() {
  return (
    <div className="mb-2 flex gap-2 overflow-x-auto px-2 pt-1">
      {CATEGORIES.map((category, index) => (
        <button
          key={category}
          type="button"
          aria-pressed={index === 0}
          className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-bold transition-colors hover:bg-cyan-700 hover:text-white ${
            index === 0
              ? "bg-cyan-700 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function InfoField({ label, value, valueClass = "text-slate-800" }) {
  return (
    <div className={FIELD_CLASS}>
      <span className={LABEL_CLASS}>{label}</span>
      <span className={`mt-1 block truncate text-xs font-semibold ${valueClass}`}>
        {value}
      </span>
    </div>
  );
}

export default function HeroSearchBar({
  destinations,
  selectedCity,
  selectedHotel,
  hotels,
  price,
  period,
  onCityChange,
  onHotelChange,
  onSearch,
}) {
  return (
    <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-2 shadow-2xl">
      <CategoryTabs />

      <div className="grid items-center gap-2 md:grid-cols-[1.4fr_1fr_.8fr_.9fr_auto]">
        <SearchField label="DESTINO" htmlFor="destino-select">
          <select
            id="destino-select"
            value={selectedCity}
            onChange={(event) => onCityChange(event.target.value)}
            className={SELECT_CLASS}
          >
            {destinations.map(({ ciudad }) => (
              <option key={ciudad} value={ciudad}>{ciudad}</option>
            ))}
          </select>
        </SearchField>

        <SearchField label="HOTEL / PLAN" htmlFor="hotel-select">
          <select
            id="hotel-select"
            value={selectedHotel}
            onChange={(event) => onHotelChange(event.target.value)}
            className={SELECT_CLASS}
            disabled={!hotels.length}
          >
            {hotels.map(({ nombre }) => (
              <option key={nombre} value={nombre}>{nombre}</option>
            ))}
          </select>
        </SearchField>

        <InfoField label="TARIFA DESDE" value={price} valueClass="text-orange-600" />
        <InfoField label="MODALIDAD" value={period} />

        <button
          type="button"
          onClick={onSearch}
          disabled={!selectedCity || !selectedHotel}
          className="flex h-full min-h-11 cursor-pointer items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
