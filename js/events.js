/* ============================================================
   events.js — eventos (ficticios) COMPARTIDO
   Lo consumen index.html (tarjetas) y evento.html (detalle ?id=).
   ============================================================ */
(function () {
  "use strict";

  const EVENTS = [
    {
      id: "feria", img: "assets/img/ev-feria.webp",
      title: "Feria Gastronómica", eyebrow: "Experiencia sensorial",
      tagline: "Un recorrido de sabores y aromas inolvidables.",
      date: "Sábado 19 de julio, 2026", time: "4:00 – 9:00 p.m.",
      place: "Sede Granada · Cali", price: "$45.000 / persona", cupos: "40 cupos",
      lead: "Una tarde para perderse entre quesos, vinos y charcutería de productores locales e internacionales, con cada parada pensada como una pequeña sorpresa para el paladar.",
      body: [
        "La Feria Gastronómica reúne lo mejor de nuestra selección en un mismo espacio: estaciones de cata, productores invitados y maridajes guiados por nuestros sommeliers. Vas a probar, preguntar y descubrir a tu ritmo, sin afán.",
        "Es el plan ideal para quien quiere iniciarse en el mundo del vino y la charcutería, o simplemente pasar una tarde distinta acompañado de buena comida y mejor compañía.",
      ],
      includes: ["Acceso a todas las estaciones de cata", "Copa de cristal de regalo", "5 maridajes guiados", "10% de descuento en tu primera compra"],
      highlights: ["Productores locales e internacionales", "Cupos limitados para una experiencia tranquila", "Apto para principiantes y expertos"],
    },
    {
      id: "cata", img: "assets/img/ev-cata.webp",
      title: "Noche de Cata", eyebrow: "Solo para los sentidos",
      tagline: "Cata de vinos y degustación de charcutería curada.",
      date: "Viernes 4 de julio, 2026", time: "7:00 – 10:00 p.m.",
      place: "Cava Delicias & Vinos · Cali", price: "$80.000 / persona", cupos: "24 cupos",
      lead: "Una velada íntima alrededor de seis vinos seleccionados y una tabla de charcutería curada, guiada paso a paso por nuestro sommelier.",
      body: [
        "En la Noche de Cata aprenderás a leer un vino: a mirarlo, olerlo y describir lo que sientes sin tecnicismos. Cada copa viene acompañada de un bocado pensado para realzarla, para que entiendas en boca por qué ciertos sabores se buscan entre sí.",
        "Un ambiente cálido, luz tenue y grupos pequeños para que la conversación fluya tanto como el vino. Sales sabiendo elegir mejor tu próxima botella.",
      ],
      includes: ["6 vinos de cata", "Tabla de charcutería curada", "Guía de cata impresa", "Copa de regalo"],
      highlights: ["Grupos reducidos de máximo 24 personas", "Guiada por sommelier certificado", "Ideal para una cita o plan entre amigos"],
    },
    {
      id: "clases", img: "assets/img/ev-clases.webp",
      title: "Clases de Maridaje", eyebrow: "Aprende del experto",
      tagline: "Combina vinos y charcutería como un profesional.",
      date: "Sábado 26 de julio, 2026", time: "10:00 a.m. – 1:00 p.m.",
      place: "Sede Granada · Cali", price: "$120.000 / persona", cupos: "16 cupos",
      lead: "Un taller práctico donde aprenderás las reglas (y las excepciones) del maridaje, armando tus propias combinaciones bajo la guía de nuestro equipo.",
      body: [
        "Olvídate de la teoría aburrida: aquí se aprende probando. Trabajarás con distintos vinos, quesos y embutidos para entender cómo el dulce, lo salado, lo graso y la acidez juegan entre sí, y por qué algunas combinaciones funcionan mejor que otras.",
        "Al final armarás tu propia tabla y te llevarás un recetario para repetir la experiencia en casa. Perfecto para quien quiere sorprender en su próxima reunión.",
      ],
      includes: ["Taller práctico de 3 horas", "Todos los insumos para maridar", "Recetario digital de maridajes", "Certificado de participación"],
      highlights: ["Cupos muy reducidos (16 personas)", "100% práctico y guiado", "Te llevas tu propia tabla armada"],
    },
    {
      id: "festival", img: "assets/img/ev-festival.webp",
      title: "Festival de Vinos", eyebrow: "El gran evento del año",
      tagline: "Vinos y comida local en un solo lugar.",
      date: "9 y 10 de agosto, 2026", time: "12:00 m. – 8:00 p.m.",
      place: "Plaza de eventos · Cali", price: "$60.000 / día", cupos: "Aforo amplio",
      lead: "Dos días de celebración con decenas de bodegas boutique, food trucks locales y música en vivo. El festival donde el vino es solo el comienzo.",
      body: [
        "El Festival de Vinos reúne bodegas premiadas y pequeños productores en un mismo lugar, para que pruebes etiquetas que rara vez llegan a la mesa. Recorre los stands a tu ritmo, charla con los productores y descubre tu próxima botella favorita.",
        "Entre cata y cata, food trucks de cocina local, tarima con música en vivo y zonas de descanso para hacer del plan una jornada completa. Un panorama para ir solo, en pareja o con todo el combo de amigos.",
      ],
      includes: ["Acceso al recinto por el día elegido", "10 tickets de degustación", "Copa oficial del festival", "Acceso a conciertos en vivo"],
      highlights: ["Decenas de bodegas boutique", "Food trucks y música en vivo", "Tickets adicionales a la venta en sitio"],
    },
    {
      id: "sabores", img: "assets/img/ev-degustacion.webp",
      title: "Sabores del Mundo", eyebrow: "La vuelta al mundo en una tarde",
      tagline: "Degustación con productos de todo el planeta.",
      date: "Domingo 17 de agosto, 2026", time: "3:00 – 7:00 p.m.",
      place: "Cava Delicias & Vinos · Cali", price: "$70.000 / persona", cupos: "30 cupos",
      lead: "Un viaje de sabores por distintos países: quesos, embutidos, aceites y conservas seleccionados de cada rincón, con su vino para acompañar.",
      body: [
        "Sabores del Mundo es una degustación temática que recorre Francia, Italia, España y más, parada por parada. En cada una probarás un producto estrella con el maridaje pensado para resaltarlo, mientras conoces su historia y origen.",
        "Una experiencia tan deliciosa como curiosa, ideal para paladares inquietos que disfrutan descubriendo cosas nuevas. Te irás con ideas (y antojos) para tu próxima tabla internacional.",
      ],
      includes: ["Recorrido por 6 países gastronómicos", "Maridaje de vino en cada estación", "Mapa de sabores de regalo", "Descuento en productos importados"],
      highlights: ["Productos importados difíciles de conseguir", "Formato relajado tipo recorrido", "Perfecto para curiosos del buen comer"],
    },
  ];

  window.DV_EVENTS = EVENTS;
  window.DV_getEvent = function (id) {
    return EVENTS.find((e) => e.id === id) || EVENTS[0];
  };
})();
