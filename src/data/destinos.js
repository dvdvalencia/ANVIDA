const destinosData = {
  destinos: [
    {
      ciudad: "Coveñas",
      hoteles: [
        {
          nombre: "Costa de Marfil",
          tarifas: [
            { periodo: "lunes a jueves", precio: 429000 },
            { periodo: "viernes a lunes", precio: 459000 },
            { periodo: "festivos", precio: 599000 },
            { periodo: "martes a viernes", precio: 429000 },
          ],
          incluye: "Alojamiento y desayuno. Consulta con un asesor los detalles del plan.",
        },
        {
          nombre: "Acapulco",
          tarifas: [
            { periodo: "lunes a jueves", precio: 499000 },
            { periodo: "viernes a lunes", precio: 649000 },
            { periodo: "festivos", precio: 825000 },
          ],
          incluye: "Alojamiento y desayuno. Consulta con un asesor los detalles del plan.",
        },
      ],
    },
    {
      ciudad: "Cartagena",
      hoteles: [
        {
          nombre: "Ejemplo Hotel Cartagena",
          tarifas: [
            { periodo: "lunes a jueves", precio: 550000 },
            { periodo: "viernes a lunes", precio: 700000 },
            { periodo: "festivos", precio: 900000 },
          ],
          incluye: "Alojamiento. Consulta con un asesor los detalles del plan.",
        },
      ],
    },
  ],
};

export default destinosData;
