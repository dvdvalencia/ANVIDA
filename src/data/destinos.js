const destinosData = {
  destinos: [
    {
      ciudad: "Coveñas",
      hoteles: [
        {
          nombre: "COSTA DE MARFIL 2026",
          tarifas: [
            { periodo: "lunes a jueves", precio: 429000 },
            { periodo: "viernes a lunes", precio: 459000 },
            { periodo: "festivos", precio: 599000 },
            { periodo: "martes a viernes", precio: 429000 },
          ],
          incluye:
            "Transporte, Hospedaje, Desayuno, Almuerzo y Cena por noche de alojamiento (entran desayuno y salen con desayuno), Integración (Noche de blanco, Pool Party), Tour por Tolú y trasporte a  la Caimanera tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integraciones.",
        },
        {
          nombre: "COSTA DE MARFIL 2027",
          tarifas: [
            { periodo: "lunes a jueves", precio: 439000 },
            { periodo: "viernes a lunes", precio: 489000 },
            { periodo: "festivos", precio: 629000 },
            { periodo: "viernes a martes", precio: 619000 },
          ],
          incluye:
            "Transporte, Hospedaje, Desayuno, Almuerzo y Cena por noche de alojamiento (entran desayuno y salen con desayuno), Integración (Noche de blanco, Pool Party), Tour por Tolú y trasporte a  la Caimanera tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integraciones.",
        },
        {
          nombre: "ACAPULCO 2026",
          tarifas: [
            { periodo: "lunes a jueves", precio: 449000 },
            { periodo: "viernes a lunes", precio: 649000 },
            { periodo: "festivos", precio: 825000 },
            { periodo: "plan relámpago 1N", precio: 298000 },
            { periodo: "bachilleres 2N", precio: 499000 },
            { periodo: "bachilleres 3N", precio: 649000 },
          ],
          incluye:
            "Transporte, Hospedaje, Desayuno, Almuerzo y Cena por noche de alojamiento (entran con cena y salen con desayuno), Integración Noche de blanco, tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integracion. ",
        },
        {
          nombre: "ACAPULCO 2027",
          tarifas: [
            { periodo: "lunes a jueves", precio: 539000 },
            { periodo: "viernes a lunes", precio: 739000 },
            { periodo: "festivos", precio: 959000 },
            { periodo: "viernes a martes", precio: 999000 },
            { periodo: "semana santa 3N", precio: 959000 },
            { periodo: "semana santa 4N", precio: 1199000 },
            // { periodo: "semana 3N", "precio": 699000 },
            // { periodo: "fin de semana 2N", "precio": 559000 },
            // { periodo: "puente 2N", "precio": 699000 },
            // { periodo: "puente especial enero", "precio": 749000 },
          ],
          incluye:
            "Transporte, Hospedaje, Desayuno, Almuerzo y Cena por noche de alojamiento (entran con cena y salen con desayuno), Integración Noche de blanco, tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integracion. ",
        },
        {
          nombre: "KATHYMAR 2026",
          tarifas: [
            { periodo: "viernes a martes", precio: 530000 },
            { periodo: "festivos", precio: 650000 },
          ],
          incluye:
            "Transporte, Hospedaje con Nevera y TV, Desayuno, Almuerzo y Cena por noche de alojamiento (salen con desayuno), Integración Noche de blanco, Piscina, Jacuzzi, Tour por Tolú y trasporte a  la Caimanera, tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integracion.",
        },
        {
          nombre: "KATHYMAR 2027",
          tarifas: [
            { periodo: "viernes a martes", precio: 530000 },
            { periodo: "jueves a lunes", precio: 739000 },
            { periodo: "festivos", precio: 650000 },
          ],
          incluye:
            "Transporte, Hospedaje con Nevera y TV, Desayuno, Almuerzo y Cena por noche de alojamiento (salen con desayuno), Integración Noche de blanco, Piscina, Jacuzzi, Tour por Tolú y trasporte a  la Caimanera, tarjeta de asistencia medica, Cordinador acompañante. Nota: en semana no se realizan integracion.",
        },
      ],
    },
    {
      ciudad: "Santa Marta",
      hoteles: [
        {
          nombre: "APARTAMENTOS CON AIRE Y PISCINA",
          tarifas: [
            // { periodo: "lunes a jueves", precio: 659000 },
            { periodo: "jueves a lunes", precio: 699000 },
            { periodo: "festivos", precio: 579000 },
          ],
          incluye: "Alojamiento. Consulta con un asesor los detalles del plan.",
        },
      ],
    },
    {
      ciudad: "Cartagena",
      hoteles: [
        {
          nombre: "TORRES DEL LAGO",
          tarifas: [
            { periodo: "lunes a jueves", precio: 659000 },
            { periodo: "viernes a lunes", precio: 599000 },
            { periodo: "festivos", precio: 579000 },
          ],
          incluye: "Transporte, Hospedaje, Desayuno y Cena por noche de alojamiento (entran con desayuno y salen con desayuno), Tours: Barú, Castillo  san Felipe ( no incluye entrada), Ciudad amurallada, Chiva rumbera, Guía acompañante, Seguro de viaje.",
        },
        {
          nombre: "APARTAMENTOS CON AIRE Y PISCINA",
          tarifas: [
            { periodo: "lunes a jueves", precio: 659000 },
            { periodo: "viernes a lunes", precio: 775000 },
            { periodo: "festivos", precio: 579000 },
          ],
          incluye: "Alojamiento. Consulta con un asesor los detalles del plan.",
        },
        {
          nombre: "HOTEL TOLEDO ",
          tarifas: [
            { periodo: "lunes a jueves", precio: 659000 },
            { periodo: "viernes a lunes", precio: 599000 },
            { periodo: "festivos", precio: 779000 },
          ],
          incluye: "Alojamiento. Consulta con un asesor los detalles del plan.",
        },
      ],
    },
    {
      ciudad: "Eje Cafetero",
      hoteles: [
        {
          nombre: "FINCA HOTEL",
          tarifas: [{ periodo: "sabado a lunes", precio: 619000 }],
          incluye:
            "Transporte, Hospedaje, Desayunos y Cenas por noche de alojamiento (salen con desayuno), Tour: Salento y valle del cocorá en willys (Sábado), Parque del Café manilla full (Domingo), Termales de Santa Rosa (Lunes),Guía acompañante, Seguro de viaje  ",
        },
      ],
    },
    {
      ciudad: "Cartagena AEREO 2027 ",
      hoteles: [
        {
          nombre: "CARTAGENA PREMIUM",
          tarifas: [
            { periodo: "lunes a jueves", precio: 1197000 },
            { periodo: "miercoles a sabado", precio: 1197000 },
            { periodo: "viernes a lunes", precio: 1197000 },
            { periodo: "sabado a martes", precio: 1197000 },
          ],
          incluye:
            "Tiquete Medellin - Cartagena - Medellin  con equipaje de mano tipo morral sin rodachines medidas 45*35*25, Alojamiento 3 noches, Desayuno, Almuerzo y Cena, Traslados aeropuerto hotel aeropuerto. ",
        },
        {
          nombre: "COSTA DEL SOL",
          tarifas: [
            { periodo: "lunes a jueves", precio: 1197000 },
            { periodo: "miercoles a sabado", precio: 1197000 },
            { periodo: "viernes a lunes", precio: 1197000 },
            { periodo: "sabado a martes", precio: 1197000 },
          ],
          incluye:
            "Tiquete Medellin - Cartagena - Medellin  con equipaje de mano tipo morral sin rodachines medidas 45*35*25, Alojamiento 3 noches, Desayuno, Almuerzo y Cena, Traslados aeropuerto hotel aeropuerto. ",
        },
      ],
    },
    {
      ciudad: "Punta Cana 2027",
      hoteles: [
        {
          nombre: "WALA BAVARO",
          tarifas: [
            { periodo: "lunes a viernes", precio: 3297000 },
            { periodo: "martes a sabado", precio: 3297000 },
            { periodo: "miercoles a domingo", precio: 3297000 },
            { periodo: "jueves a domingo", precio: 3297000 },
            { periodo: "viernes a domingo", precio: 3297000 },
            { periodo: "sabado a martes", precio: 3297000 },
            { periodo: "domingo a lunes", precio: 3297000 },
          ],
          incluye:
            "Tiquete ida y vuelta con equipaje de mano tipo morral sin rodachines medidas 45*35*25, Alojamiento 4 noches, Desayuno, Almuerzo y Cena, Snack, Bebidas y licores ilimitadas, Traslados aeropuerto hotel aeropuerto. ",
        },
        {
          nombre: "BAHIA PRINCIPE TURQUESA",
          tarifas: [
            { periodo: "lunes a viernes", precio: 3797000 },
            { periodo: "martes a sabado", precio: 3797000 },
            { periodo: "miercoles a domingo", precio: 3797000 },
            { periodo: "jueves a domingo", precio: 3797000 },
            { periodo: "viernes a domingo", precio: 3797000 },
            { periodo: "sabado a martes", precio: 3797000 },
            { periodo: "domingo a lunes", precio: 3797000 },
          ],
          incluye:
            "Tiquete ida y vuelta con equipaje de mano tipo morral sin rodachines medidas 45*35*25, Alojamiento 4 noches, Desayuno, Almuerzo y Cena, Snack, Bebidas y licores ilimitadas, Traslados aeropuerto hotel aeropuerto. ",
        },
      ],
    },
  ],
};

export default destinosData;
