"use client";
import React, { useState } from "react";
import destinosData from "./../../../data/destinos";

export default function HeroSection() {
  // Estados para manejar los filtros de la barra de búsqueda
  const [selectedCiudad, setSelectedCiudad] = useState(
    destinosData.destinos[0].ciudad,
  );

  // Buscar los hoteles disponibles para la ciudad seleccionada
  const currentDestinoObj =
    destinosData.destinos.find((d) => d.ciudad === selectedCiudad) ||
    destinosData.destinos[0];
  const [selectedHotel, setSelectedHotel] = useState(
    currentDestinoObj.hoteles[0].nombre,
  );
  // Manejar cambio de ciudad (reinicia el hotel al primer disponible de esa ciudad)
  const handleCiudadChange = (e) => {
    const nuevaCiudad = e.target.value;
    setSelectedCiudad(nuevaCiudad);
    const nuevoDestinoObj = destinosData.destinos.find(
      (d) => d.ciudad === nuevaCiudad,
    );
    if (nuevoDestinoObj && nuevoDestinoObj.hoteles.length > 0) {
      setSelectedHotel(nuevoDestinoObj.hoteles[0].nombre);
    }
  };
  // Obtener el hotel actual seleccionado para extraer un precio de referencia o periodo
  const currentHotelObj =
    currentDestinoObj.hoteles.find((h) => h.nombre === selectedHotel) ||
    currentDestinoObj.hoteles[0];
  const precioReferencia = currentHotelObj.tarifas[0]?.precio
    ? new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(currentHotelObj.tarifas[0].precio)
    : "Consultar";
  const handleSearch = () => {
    alert(
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
        <div className="mx-auto max-w-3xl text-center text-white">
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
        </div>

        {/* Barra de Búsqueda Interactiva */}

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-2 shadow-2xl">
          <div className="mb-2 flex gap-2 overflow-x-auto px-2 pt-1">
            {[
              "Paquetes Todo Incluido",
              "Hospedaje",
              "Tour y Aventura",
              "Transporte",
            ].map((item, index) => (
              <button
                key={item}
                className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-bold transition-colors hover:bg-cyan-700 hover:text-white ${
                  index === 0
                    ? "bg-cyan-700 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_.8fr_.9fr_auto] items-center">
            {/* 1. Selector de Destino (Ciudad) */}
            <div className="rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2">
              <label
                htmlFor="destino-select"
                className="block text-[8px] font-bold tracking-wider text-cyan-700 cursor-pointer"
              >
                DESTINO
              </label>
              <select
                id="destino-select"
                value={selectedCiudad}
                onChange={handleCiudadChange}
                className="w-full mt-1 bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                {destinosData.destinos.map((dest) => (
                  <option key={dest.ciudad} value={dest.ciudad}>
                    {dest.ciudad}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Selector de Hotel / Plan */}
            <div className="rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2">
              <label
                htmlFor="hotel-select"
                className="block text-[8px] font-bold tracking-wider text-cyan-700 cursor-pointer"
              >
                HOTEL / PLAN
              </label>
              <select
                id="hotel-select"
                value={selectedHotel}
                onChange={(e) => setSelectedHotel(e.target.value)}
                className="w-full mt-1 bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer truncate"
              >
                {currentDestinoObj.hoteles.map((hotel) => (
                  <option key={hotel.nombre} value={hotel.nombre}>
                    {hotel.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Fecha de Salida (Simulada/Informativa basada en datos) */}
            <div className="rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2">
              <span className="block text-[8px] font-bold tracking-wider text-cyan-700">
                TARIFA DESDE
              </span>
              <span className="mt-1 block truncate text-xs font-semibold text-orange-600">
                {precioReferencia}
              </span>
            </div>
            {/* 4. Jornada / Periodo */}
            <div className="rounded-lg border border-slate-100 bg-[#fffaf5] px-3 py-2">
              <span className="block text-[8px] font-bold tracking-wider text-cyan-700">
                MODALIDAD
              </span>
              <span className="mt-1 block truncate text-xs font-semibold text-slate-800 capitalize">
                {currentHotelObj.tarifas[0]?.periodo || "General"}
              </span>
            </div>

            {/* Botón de Acción */}
            <button
              onClick={handleSearch}
              className="rounded-full bg-orange-500 px-6 py-3 text-xs font-bold text-white hover:bg-orange-600 transition-colors cursor-pointer h-full flex items-center justify-center"
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2 text-[10px] font-semibold text-white/90">
          <span className="rounded-full bg-white/10 px-3 py-2">
            Cientos de viajeros felices
          </span>
          <span className="rounded-full bg-white/10 px-3 py-2">
            Asesoría personalizada
          </span>
          <span className="rounded-full bg-white/10 px-3 py-2">
            Pagos flexibles
          </span>
          <span className="rounded-full bg-white/10 px-3 py-2">
            Seguridad absoluta
          </span>
        </div>
      </div>
    </section>
  );
}
