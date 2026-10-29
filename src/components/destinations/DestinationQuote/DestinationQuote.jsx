"use client";

import { useMemo, useState } from "react";
import QuoteHero from "./QuoteHero";
import QuoteForm from "./QuoteForm";
import QuoteResult from "./QuoteResult";
import { findMatchingTariff, getNights, getTodayLocal } from "./quoteUtils";
 



export default function DestinationQuote({ data }) {
  const destinations = data?.destinos ?? [];
  const [city, setCity] = useState(destinations[0]?.ciudad ?? "");
    const [hotelName, setHotelName] = useState(
    destinations[0]?.hoteles?.[0]?.nombre ?? "",
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isHoliday, setIsHoliday] = useState(false);
  const [quote, setQuote] = useState(null);
  const [message, setMessage] = useState("");

  const destination = destinations.find((item) => item.ciudad === city);
  const hotels = destination?.hoteles ?? [];
  const selectedHotel = hotels.find((item) => item.nombre === hotelName);
  const tariffs = selectedHotel?.tarifas ?? [];
  const today = useMemo(getTodayLocal, []);
  const nights = getNights(checkIn, checkOut);
  const invalidDates = Boolean(checkIn && checkOut && nights <= 0);
  const availablePeriods = tariffs.map(({ periodo }) => periodo);

  function resetQuote() {
    setQuote(null);
    setMessage("");
  }

  function handleCityChange(event) {
    const nextCity = event.target.value;
    const nextDestination = destinations.find((item) => item.ciudad === nextCity);

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

    setQuote({city, hotel: hotelName, checkIn, checkOut, nights, tariff});
  }

  return (
    <div className="min-h-screen bg-[#fff7ed]">
//       <section className="relative overflow-hidden bg-cyan-800 text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-35"
//           style={{
//             backgroundImage:
//               "linear-gradient(110deg, rgba(8,92,112,.96), rgba(8,145,178,.65)), url('/coveñas.jpeg')",
//           }}
//           aria-hidden="true"
//         />
//         <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
//           <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
//             Tu próxima escapada empieza aquí
//           </span>
//           <h1 className="mt-5 max-w-3xl font-bold tracking-tight text-4xl md:text-6xl">
//             Encuentra tu destino,{" "}
//             <span className="text-orange-300">cotiza tus fechas.</span>
//           </h1>
//           <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-50 md:text-base">
//             Elige ciudad, hotel y fechas para consultar la tarifa disponible
//             para tu viaje. Tu próxima historia está más cerca de lo que crees.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
//             <span className="rounded-full bg-white/10 px-4 py-2">✦ Planes para cada ocasión</span>
//             <span className="rounded-full bg-white/10 px-4 py-2">✦ Asesoría personalizada</span>
//             <span className="rounded-full bg-white/10 px-4 py-2">✦ Precios en pesos colombianos</span>
//           </div>
//         </div>
//       </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.78fr)]">
//         <div>
//           <div className="mb-6">
//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
//               Cotiza tu viaje
//             </span>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
//               ¿Cuándo quieres viajar?
//             </h2>
//             <p className="mt-2 text-sm leading-6 text-slate-600">
//               Selecciona tus fechas de entrada y salida para encontrar la tarifa
//               que corresponde a tu estadía.
//             </p>
//           </div>

//           <form
            onSubmit={handleSubmit}
//             className="rounded-3xl border border-cyan-900/10 bg-white p-5 shadow-[0_18px_50px_-32px_rgba(8,145,178,.45)] md:p-8"
//           >
//             
      </section>
    </div>
  );
}







  const selectedHotel = hotels.find((item) => item.nombre === hotelName);
  const tariffs = selectedHotel?.tarifas ?? [];
  const today = useMemo(getTodayLocal, []);
  const nights = getNights(checkIn, checkOut);
  const invalidDates = Boolean(checkIn && checkOut && nights <= 0);
  const availablePeriods = tariffs.map(({ periodo }) => periodo);

  function resetQuote() {
    setQuote(null);
    setMessage("");
  }

  function handleCityChange(event) {
    const nextCity = event.target.value;
    const nextDestination = destinations.find((item) => item.ciudad === nextCity);
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

    setQuote({ city, hotel: hotelName, checkIn, checkOut, nights, tariff });
  }

  return (
    <div className="min-h-screen bg-[#fff7ed]">
      <QuoteHero />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.78fr)]">
        <QuoteForm
          destinations={destinations}
          city={city}
          hotelName={hotelName}
          hotels={hotels}
          checkIn={checkIn}
          checkOut={checkOut}
          today={today}
          isHoliday={isHoliday}
          invalidDates={invalidDates}
          message={message}
          selectedHotel={selectedHotel}
          onCityChange={handleCityChange}
          onHotelChange={(event) => {
            setHotelName(event.target.value);
            resetQuote();
          }}
          onCheckInChange={(event) => {
            setCheckIn(event.target.value);
            if (checkOut && event.target.value && checkOut <= event.target.value) {
              setCheckOut("");
            }
            resetQuote();
          }}
          onCheckOutChange={(event) => {
            setCheckOut(event.target.value);
            resetQuote();
          }}
          onHolidayChange={(event) => {
            setIsHoliday(event.target.checked);
            resetQuote();
          }}
          onSubmit={handleSubmit}
        />
        <QuoteResult quote={quote} selectedHotel={selectedHotel} periods={availablePeriods} />
      </section>
    </div>
  );
}
