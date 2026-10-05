"use client";

import { useMemo, useState } from "react";

const weekdays = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function getWeekday(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
}

function getNights(checkIn, checkOut) {
  const start = new Date(`${checkIn}T00:00:00Z`);
  const end = new Date(`${checkOut}T00:00:00Z`);
  return (end - start) / 86400000;
}

function findMatchingTariff(tariffs, checkIn, checkOut, isHoliday) {
  if (isHoliday) {
    return tariffs.find((tariff) => normalize(tariff.periodo) === "festivos");
  }

  const arrivalDay = normalize(getWeekday(checkIn));
  const departureDay = normalize(getWeekday(checkOut));

  return tariffs.find((tariff) => {
    const match = normalize(tariff.periodo).match(/^(\p{L}+)\s+a\s+(\p{L}+)$/u);
    return match && match[1] === arrivalDay && match[2] === departureDay;
  });
}

export default function DestinationQuote({ data }) {
  const destinations = data?.destinos ?? [];
  const [city, setCity] = useState(destinations[0]?.ciudad ?? "");
  const selectedDestination = destinations.find(
    (destination) => destination.ciudad === city,
  );
  const hotels = selectedDestination?.hoteles ?? [];
  const [hotelName, setHotelName] = useState(hotels[0]?.nombre ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isHoliday, setIsHoliday] = useState(false);
  const [quote, setQuote] = useState(null);
  const [message, setMessage] = useState("");

  const selectedHotel = hotels.find((hotel) => hotel.nombre === hotelName);
  const tariffs = selectedHotel?.tarifas ?? [];
  const today = useMemo(() => {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 10);
  }, []);
  const invalidDates =
    checkIn && checkOut && getNights(checkIn, checkOut) <= 0;
  const availablePeriods = tariffs.map((tariff) => tariff.periodo);

  function resetQuote() {
    setQuote(null);
    setMessage("");
  }

  function handleCityChange(event) {
    const nextCity = event.target.value;
    const nextDestination = destinations.find(
      (destination) => destination.ciudad === nextCity,
    );
    setCity(nextCity);
    setHotelName(nextDestination?.hoteles?.[0]?.nombre ?? "");
    resetQuote();
  }

  function handleSubmit(event) {
    event.preventDefault();
    resetQuote();

    if (!selectedHotel || !checkIn || !checkOut || invalidDates) {
      setMessage("Selecciona un hotel y un rango de fechas válido.");
      return;
    }

    const tariff = findMatchingTariff(tariffs, checkIn, checkOut, isHoliday);
    if (!tariff) {
      setMessage(
        isHoliday
          ? "Este hotel no tiene una tarifa festiva disponible."
          : "No encontramos una tarifa para esos días. Revisa los periodos disponibles.",
      );
      return;
    }

    setQuote({
      city,
      hotel: hotelName,
      checkIn,
      checkOut,
      nights: getNights(checkIn, checkOut),
      tariff,
    });
  }

  return (
    <div className="min-h-screen bg-[#fff7ed]">
      <section className="relative overflow-hidden bg-cyan-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(8,92,112,.96), rgba(8,145,178,.65)), url('/coveñas.jpeg')",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            Tu próxima escapada empieza aquí
          </span>
          <h1 className="mt-5 max-w-3xl font-bold tracking-tight text-4xl md:text-6xl">
            Encuentra tu destino,{" "}
            <span className="text-orange-300">cotiza tus fechas.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-50 md:text-base">
            Elige ciudad, hotel y fechas para consultar la tarifa disponible
            para tu viaje. Tu próxima historia está más cerca de lo que crees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
            <span className="rounded-full bg-white/10 px-4 py-2">✦ Planes para cada ocasión</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✦ Asesoría personalizada</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✦ Precios en pesos colombianos</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.78fr)]">
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              Cotiza tu viaje
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              ¿Cuándo quieres viajar?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Selecciona tus fechas de entrada y salida para encontrar la tarifa
              que corresponde a tu estadía.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-cyan-900/10 bg-white p-5 shadow-[0_18px_50px_-32px_rgba(8,145,178,.45)] md:p-8"
          >
            {destinations.length > 0 ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Destino
                    <select
                      value={city}
                      onChange={handleCityChange}
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                    >
                      {destinations.map((destination) => (
                        <option key={destination.ciudad} value={destination.ciudad}>
                          {destination.ciudad}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="text-sm font-semibold text-slate-800">
                    Hotel
                    <select
                      value={hotelName}
                      onChange={(event) => {
                        setHotelName(event.target.value);
                        resetQuote();
                      }}
                      disabled={hotels.length === 0}
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10 disabled:bg-slate-100"
                    >
                      {hotels.map((hotel) => (
                        <option key={hotel.nombre} value={hotel.nombre}>
                          {hotel.nombre}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="text-sm font-semibold text-slate-800">
                    Fecha de entrada
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(event) => {
                        setCheckIn(event.target.value);
                        resetQuote();
                      }}
                      required
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                    />
                  </label>

                  <label className="text-sm font-semibold text-slate-800">
                    Fecha de salida
                    <input
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(event) => {
                        setCheckOut(event.target.value);
                        resetQuote();
                      }}
                      required
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
                    />
                  </label>
                </div>

                <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50/70 p-4">
                  <input
                    type="checkbox"
                    checked={isHoliday}
                    onChange={(event) => {
                      setIsHoliday(event.target.checked);
                      resetQuote();
                    }}
                    className="mt-0.5 size-4 accent-orange-500"
                  />
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

        <aside className="self-start rounded-3xl border border-cyan-900/10 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(8,145,178,.45)] md:p-8">
          {quote ? (
            <>
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                Cotización lista
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                {quote.city}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{quote.hotel}</p>
              <div className="my-6 border-t border-slate-100" />
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Entrada</dt>
                  <dd className="font-semibold text-slate-800">{quote.checkIn}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Salida</dt>
                  <dd className="font-semibold text-slate-800">{quote.checkOut}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Duración</dt>
                  <dd className="font-semibold text-slate-800">
                    {quote.nights} {quote.nights === 1 ? "noche" : "noches"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Tarifa aplicada</dt>
                  <dd className="text-right font-semibold capitalize text-slate-800">
                    {quote.tariff.periodo}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl bg-cyan-50 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-800">
                  Valor de la tarifa
                </span>
                <p className="mt-1 text-3xl font-extrabold tracking-tight text-cyan-800">
                  {currencyFormatter.format(quote.tariff.precio)}
                </p>
                <span className="text-xs text-slate-500">COP</span>
              </div>
              {selectedHotel?.incluye && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-900">Tu plan incluye</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {selectedHotel.incluye}
                  </p>
                </div>
              )}
              <p className="mt-5 text-xs leading-5 text-slate-500">
                Valor de referencia sujeto a disponibilidad y confirmación con
                un asesor ANVIDA.
              </p>
            </>
          ) : (
            <>
              <div className="grid size-12 place-items-center rounded-2xl bg-cyan-50 text-2xl text-cyan-700" aria-hidden="true">
                ✦
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Tu cotización aparecerá aquí
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Completa los datos de tu viaje y te mostraremos la tarifa que
                aplica para esas fechas.
              </p>
              {availablePeriods.length > 0 && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Periodos disponibles
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {availablePeriods.map((period) => (
                      <li
                        key={period}
                        className="flex items-center gap-2 text-sm capitalize text-slate-700"
                      >
                        <span className="size-1.5 rounded-full bg-orange-500" />
                        {period}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </aside>
      </section>
    </div>
  );
}
