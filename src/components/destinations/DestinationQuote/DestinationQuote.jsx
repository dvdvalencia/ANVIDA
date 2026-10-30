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
    const nextDestination = destinations.find(
      (item) => item.ciudad === nextCity,
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
            if (
              checkOut &&
              event.target.value &&
              checkOut <= event.target.value
            ) {
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
        <QuoteResult
          quote={quote}
          selectedHotel={selectedHotel}
          periods={availablePeriods}
        />
      </section>
    </div>
  );
}
