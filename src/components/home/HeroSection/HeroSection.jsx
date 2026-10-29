"use client";
import { useMemo, useState } from "react";
import destinosData from "./../../../data/destinos";
import HeroSearchBar from "./HeroSearchBar";
import TrustBadges from "./TrustBadges";

const DEFAULT_CITY = destinosData.destinos?.[0]?.ciudad ?? "";

export default function HeroSection() {
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [selectedHotel, setSelectedHotel] = useState("");

  const destination =
    destinosData.destinos?.find(({ ciudad }) => ciudad === selectedCity) ??
    destinosData.destinos?.[0];

  const hotels = destination?.hoteles ?? [];

  const hotel = useMemo(
    () => hotels.find(({ nombre }) => nombre === selectedHotel) ?? hotels[0],
    [hotels, selectedHotel],
  );

  const price = hotel?.tarifas?.[0]?.precio;
  const formattedPrice =
    price != null
      ? new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        }).format(price)
      : "Consultar";

  function handleCityChange(city) {
    const nextDestination = destinosData.destinos?.find(
      (item) => item.ciudad === city,
    );

    setSelectedCity(city);
    setSelectedHotel(nextDestination?.hoteles?.[0]?.nombre ?? "");
  }

  function handleSearch() {
    if (!destination || !hotel) {
      window.alert("No hay destinos u hoteles disponibles para consultar.");
      return;
    }

    window.alert(
      `Buscando viaje a: ${selectedCiudad} - Hotel: ${selectedHotel}. Precio desde: ${precioReferencia}`,
    );
  };
  return (
    <section className="relative overflow-hidden bg-cyan-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,127,157,.78), rgba(0,100,124,.82)), url('/images/hero-travel.jpg')",
        }}
      />

      <div className="container-anvida relative py-12 md:py-16 lg:py-20">
        <header className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold backdrop-blur">
            Agencia Oficial de Experiencias Extraordinarias
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Agencia de viajes y Turismo
          </h1>
          <span>Bello, Antioquia</span>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
            Descubre planes turísticos y experiencias de viaje nacionales e
            internacionales con ANVIDA, tu agencia de viajes en Bello,
            Antioquia.
          </p>
        </header>

               <HeroSearchBar
          destinations={destinosData.destinos ?? []}
          selectedCity={selectedCity}
          selectedHotel={hotel?.nombre ?? ""}
          hotels={hotels}
          price={formattedPrice}
          period={hotel?.tarifas?.[0]?.periodo ?? "General"}
          onCityChange={handleCityChange}
          onHotelChange={setSelectedHotel}
          onSearch={handleSearch}
        />

        <TrustBadges />
      </div>
    </section>
  );
}
