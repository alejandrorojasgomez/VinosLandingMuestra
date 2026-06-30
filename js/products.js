/* ============================================================
   products.js — catálogo de productos (ficticios) COMPARTIDO
   Lo consumen catalogo.js (grid) y producto.html (ficha dinámica ?id=).
   Cada producto trae su propia descripción, pestañas y oferta.
   Listo para reemplazar por catálogo Shopify más adelante.
   ============================================================ */
(function () {
  "use strict";

  // Helper para pestañas con viñetas (Notas / Composición)
  const li = (items) =>
    "<ul>" +
    items
      .map(
        (t) =>
          '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg> ' +
          t +
          "</li>"
      )
      .join("") +
    "</ul>";

  const PRODUCTS = [
    /* ---------------- VINOS ---------------- */
    {
      id: "lucia-reserva", cat: "vinos", name: "Lucía Reserva 2019",
      price: 100450, old: 140000, img: "assets/img/prod-lucia-grid.webp",
      heroImg: "assets/img/lucia-bottle.webp", cutout: true,
      tag: "Más vendido", stars: 5, rating: 412,
      vol: "750 mL · 14% vol.",
      eyebrow: "El más pedido del mes",
      headline: "Todo el vino que necesitas para celebrar.",
      lead: "No es solo un tinto: es la excusa perfecta para que la noche se vuelva una historia que vale la pena contar.",
      stock: "Quedan menos de 80 botellas a este precio",
      tabs: [
        { label: "Descripción", html: "<p>Lucía Reserva 2019 nace de viñedos de altura y reposa 18 meses en barrica de roble francés. El resultado: un tinto elegante, redondo y profundo, pensado para acompañar las mejores mesas y las mejores conversaciones.</p>" },
        { label: "Notas de cata", html: li(["Aromas a frutos rojos maduros, vainilla y un toque de cacao.", "Taninos suaves, cuerpo medio-alto y final largo.", "Servir a 16–18 °C. Decantar 30 minutos."]) },
        { label: "Botella", html: "<p>Botella borgoña de 750 mL en vidrio extra oscuro para proteger el vino de la luz. Tapón de corcho natural y etiqueta de edición limitada numerada a mano.</p>" },
        { label: "Composición", html: li(["85% Cabernet Sauvignon · 15% Malbec.", "Contiene sulfitos. 14% alcohol por volumen.", "Origen: Valle del Cauca, Colombia."]) },
      ],
      stack: { items: [["Lucía Reserva 2019 (750 mL)", "$140.000"], ["Guía de maridaje digital", "Gratis"], ["Sacacorchos premium de regalo", "$35.000"], ["Envío express 24–48h", "Gratis"]], oldTotal: "$175.000", now: "$100.450" },
    },
    {
      id: "tinto-roble", cat: "vinos", name: "Tinto Roble Crianza",
      price: 78000, old: 0, img: "assets/img/prod-tinto-roble.webp",
      heroImg: "assets/img/prod-tinto-roble.webp", cutout: false,
      tag: "", stars: 4, rating: 188,
      vol: "750 mL · 13.5% vol.",
      eyebrow: "Crianza en roble",
      headline: "El tinto de diario que sabe a ocasión especial.",
      lead: "Doce meses en barrica para un vino redondo y fácil de querer, sin que la cuenta lo note.",
      stock: "Lote de crianza limitado este mes",
      tabs: [
        { label: "Descripción", html: "<p>Tinto Roble Crianza pasa 12 meses en barrica para ganar suavidad y estructura sin perder su carácter frutal. Es ese vino versátil que queda bien con casi todo: una pasta entre semana o una parrillada del domingo.</p>" },
        { label: "Notas de cata", html: li(["Ciruela, mora y un fondo dulce de vainilla y especias.", "Taninos pulidos, cuerpo medio y trago muy amable.", "Servir a 16 °C. No necesita decantar."]) },
        { label: "Maridaje", html: li(["Carnes rojas a la parrilla y embutidos curados.", "Pastas con salsas de tomate y quesos semicurados.", "Ideal para abrir sin ocasión: el tinto de la semana."]) },
        { label: "Composición", html: li(["100% Tempranillo.", "Contiene sulfitos. 13.5% alcohol por volumen.", "Crianza: 12 meses en barrica de roble americano."]) },
      ],
      stack: { items: [["Tinto Roble Crianza (750 mL)", "$95.000"], ["Guía de maridaje digital", "Gratis"], ["Envío express 24–48h", "Gratis"]], oldTotal: "$95.000", now: "$78.000" },
    },
    {
      id: "rosado-verano", cat: "vinos", name: "Rosado de Verano",
      price: 64000, old: 80000, img: "assets/img/prod-rosado.webp",
      heroImg: "assets/img/prod-rosado.webp", cutout: false,
      tag: "-20%", stars: 4, rating: 143,
      vol: "750 mL · 12% vol.",
      eyebrow: "Fresco y frutal",
      headline: "El rosado que pide terraza y buena compañía.",
      lead: "Fresco, frutal y peligrosamente fácil de tomar. El que desaparece de la nevera primero.",
      stock: "Precio de temporada por tiempo limitado",
      tabs: [
        { label: "Descripción", html: "<p>Rosado de Verano se vendimia temprano para conservar acidez y frescura. De color rosa pálido y aroma a fruta blanca, es el aperitivo perfecto para tardes cálidas y planes sin complicaciones.</p>" },
        { label: "Notas de cata", html: li(["Fresa, durazno y un toque cítrico muy limpio.", "Ligero, refrescante y con final seco.", "Servir bien frío, a 8–10 °C."]) },
        { label: "Maridaje", html: li(["Ensaladas, quesos frescos y pescados.", "Tablas ligeras y aperitivos de tarde.", "Solo, como aperitivo helado."]) },
        { label: "Composición", html: li(["Garnacha de prensado suave.", "Contiene sulfitos. 12% alcohol por volumen.", "Origen: Valle del Cauca, Colombia."]) },
      ],
      stack: { items: [["Rosado de Verano (750 mL)", "$80.000"], ["Guía de maridaje digital", "Gratis"], ["Envío express 24–48h", "Gratis"]], oldTotal: "$80.000", now: "$64.000" },
    },
    {
      id: "blanco-frutal", cat: "vinos", name: "Blanco Frutal Joven",
      price: 59000, old: 0, img: "assets/img/prod-blanco.webp",
      heroImg: "assets/img/prod-blanco.webp", cutout: false,
      tag: "", stars: 5, rating: 96,
      vol: "750 mL · 12.5% vol.",
      eyebrow: "Blanco joven",
      headline: "Un blanco que sabe a fruta recién cortada.",
      lead: "Aromático, vivo y sin pretensiones. El blanco que convierte cualquier martes en un pequeño plan.",
      stock: "Cosecha joven, disponibilidad limitada",
      tabs: [
        { label: "Descripción", html: "<p>Blanco Frutal Joven se elabora sin paso por barrica para mantener toda su expresión aromática. Resultado: un vino fragante, fresco y muy fácil de disfrutar, ideal para quien arranca en el mundo del vino blanco.</p>" },
        { label: "Notas de cata", html: li(["Manzana verde, pera y flores blancas.", "Acidez equilibrada, ligero y muy aromático.", "Servir frío, a 9–11 °C."]) },
        { label: "Maridaje", html: li(["Mariscos, sushi y pescados blancos.", "Quesos frescos y ensaladas cítricas.", "Aperitivos y picoteo de tarde."]) },
        { label: "Composición", html: li(["Sauvignon Blanc.", "Contiene sulfitos. 12.5% alcohol por volumen.", "Sin crianza en barrica."]) },
      ],
      stack: { items: [["Blanco Frutal Joven (750 mL)", "$59.000"], ["Guía de maridaje digital", "Gratis"], ["Envío express 24–48h", "Gratis"]], oldTotal: "$72.000", now: "$59.000" },
    },

    /* ---------------- QUESOS ---------------- */
    {
      id: "queso-azul", cat: "quesos", name: "Queso Azul Curado",
      price: 42000, old: 0, img: "assets/img/prod-queso-azul.webp",
      heroImg: "assets/img/prod-queso-azul.webp", cutout: false,
      tag: "Selecto", stars: 5, rating: 134,
      vol: "200 g · pieza",
      eyebrow: "Para paladares valientes",
      headline: "El azul que se roba la tabla.",
      lead: "Intenso, cremoso y con personalidad. Una cuña basta para que tu tabla pase de buena a inolvidable.",
      stock: "Curación artesanal: piezas limitadas",
      tabs: [
        { label: "Descripción", html: "<p>Queso Azul Curado madura lentamente hasta desarrollar sus vetas características y un sabor profundo e inconfundible. Cremoso al paladar y potente en aroma, es el protagonista que toda tabla de charcutería necesita.</p>" },
        { label: "En boca", html: li(["Sabor intenso, salino y persistente.", "Textura cremosa que se deshace en boca.", "Sacar de la nevera 30 min antes de servir."]) },
        { label: "Maridaje", html: li(["Vinos dulces y tintos de cuerpo alto.", "Miel, nueces y peras para contrastar.", "Imprescindible en cualquier tabla de quesos."]) },
        { label: "Conservación", html: li(["Mantener refrigerado entre 2 y 6 °C.", "Envolver en papel encerado, no en plástico.", "Consumir preferentemente en 2 semanas."]) },
      ],
      stack: { items: [["Queso Azul Curado (200 g)", "$42.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque térmico", "Incluido"]], oldTotal: "$52.000", now: "$42.000" },
    },
    {
      id: "brie-frances", cat: "quesos", name: "Brie Francés",
      price: 38000, old: 48000, img: "assets/img/prod-brie.webp",
      heroImg: "assets/img/prod-brie.webp", cutout: false,
      tag: "-20%", stars: 4, rating: 207,
      vol: "250 g · pieza",
      eyebrow: "Clásico francés",
      headline: "Suave, mantecoso e imposible de resistir.",
      lead: "El queso que desaparece primero de la tabla. Tibio, se vuelve pura seducción.",
      stock: "Oferta de la semana por tiempo limitado",
      tabs: [
        { label: "Descripción", html: "<p>Brie Francés de corteza blanca y pasta mantecosa, elaborado al estilo tradicional. Delicado y cremoso, gana aún más sabor a temperatura ambiente o ligeramente horneado con frutos secos.</p>" },
        { label: "En boca", html: li(["Mantecoso, suave y ligeramente afrutado.", "Corteza comestible de sabor delicado.", "Servir a temperatura ambiente para máxima cremosidad."]) },
        { label: "Maridaje", html: li(["Espumosos, blancos y rosados frescos.", "Mermeladas, uvas y baguette crujiente.", "Delicioso tibio con miel y nueces."]) },
        { label: "Conservación", html: li(["Refrigerar entre 2 y 6 °C.", "Consumir en la semana una vez abierto.", "Sacar 30 min antes de servir."]) },
      ],
      stack: { items: [["Brie Francés (250 g)", "$48.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque térmico", "Incluido"]], oldTotal: "$48.000", now: "$38.000" },
    },
    {
      id: "manchego", cat: "quesos", name: "Manchego Añejo",
      price: 52000, old: 0, img: "assets/img/prod-manchego.webp",
      heroImg: "assets/img/prod-manchego.webp", cutout: false,
      tag: "", stars: 5, rating: 161,
      vol: "250 g · cuña",
      eyebrow: "Curado 12 meses",
      headline: "Carácter español en cada bocado.",
      lead: "Firme, sabroso y con ese punto justo de sal. El que convierte una copa de tinto en un ritual.",
      stock: "Añejamiento de 12 meses, stock reducido",
      tabs: [
        { label: "Descripción", html: "<p>Manchego Añejo curado durante 12 meses, de pasta firme y sabor intenso con un final ligeramente picante. Un queso con denominación de carácter, perfecto para cortar en lascas y acompañar con un buen tinto.</p>" },
        { label: "En boca", html: li(["Sabor intenso, mantecoso con toque picante final.", "Textura firme que se quiebra en lascas.", "Aromas a frutos secos y mantequilla tostada."]) },
        { label: "Maridaje", html: li(["Tintos con crianza y vinos generosos.", "Membrillo, almendras y aceite de oliva.", "Excelente en tablas y como tapa clásica."]) },
        { label: "Conservación", html: li(["Refrigerar entre 2 y 6 °C.", "Envolver en papel encerado.", "Atemperar 30 min antes de servir."]) },
      ],
      stack: { items: [["Manchego Añejo (250 g)", "$52.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque térmico", "Incluido"]], oldTotal: "$64.000", now: "$52.000" },
    },

    /* ---------------- CARNES ---------------- */
    {
      id: "jamon-serrano", cat: "carnes", name: "Jamón Serrano",
      price: 95000, old: 120000, img: "assets/img/prod-jamon.webp",
      heroImg: "assets/img/prod-jamon.webp", cutout: false,
      tag: "-21%", stars: 5, rating: 298,
      vol: "200 g · loncheado",
      eyebrow: "Curación tradicional",
      headline: "El rey de la tabla, en lonchas finas.",
      lead: "Curado con paciencia hasta lograr ese sabor que no necesita presentación. Solo pan y aceite.",
      stock: "Oferta de apertura: unidades limitadas",
      tabs: [
        { label: "Descripción", html: "<p>Jamón Serrano de curación tradicional, cortado en lonchas finas listas para servir. Sabor profundo, justo de sal y con esa textura que se deshace en boca. El infaltable de cualquier picoteo que se respete.</p>" },
        { label: "En boca", html: li(["Sabor intenso y equilibrado, nada graso.", "Lonchas finas que se deshacen al instante.", "Servir a temperatura ambiente."]) },
        { label: "Maridaje", html: li(["Tintos jóvenes y cavas secos.", "Pan con tomate y un hilo de aceite de oliva.", "Melón en verano para un contraste clásico."]) },
        { label: "Conservación", html: li(["Refrigerar entre 2 y 6 °C.", "Consumir en pocos días tras abrir el sobre.", "Atemperar antes de servir para realzar el sabor."]) },
      ],
      stack: { items: [["Jamón Serrano (200 g)", "$120.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque al vacío", "Incluido"]], oldTotal: "$120.000", now: "$95.000" },
    },
    {
      id: "salami-italiano", cat: "carnes", name: "Salami Italiano",
      price: 46000, old: 0, img: "assets/img/prod-salami.webp",
      heroImg: "assets/img/prod-salami.webp", cutout: false,
      tag: "", stars: 4, rating: 117,
      vol: "250 g · pieza",
      eyebrow: "Embutido curado",
      headline: "El embutido que nunca falla en una tabla.",
      lead: "Especiado, jugoso y con ese punto de pimienta que pide otra rodaja. Y otra más.",
      stock: "Curado artesanal, disponibilidad limitada",
      tabs: [
        { label: "Descripción", html: "<p>Salami Italiano curado al estilo tradicional, con su grano de pimienta y un punto justo de especias. Jugoso y sabroso, es el embutido versátil que combina con quesos, vinos y buena compañía.</p>" },
        { label: "En boca", html: li(["Sabor especiado con notas de pimienta y ajo.", "Textura firme y jugosa a la vez.", "Cortar en rodajas finas para servir."]) },
        { label: "Maridaje", html: li(["Tintos jóvenes y cervezas artesanales.", "Quesos curados y encurtidos.", "Pan rústico y aceitunas."]) },
        { label: "Conservación", html: li(["Refrigerar entre 2 y 6 °C.", "Una vez abierto, consumir en 1–2 semanas.", "Conservar envuelto en papel."]) },
      ],
      stack: { items: [["Salami Italiano (250 g)", "$46.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque al vacío", "Incluido"]], oldTotal: "$56.000", now: "$46.000" },
    },
    {
      id: "chorizo-espanol", cat: "carnes", name: "Chorizo Español",
      price: 39000, old: 0, img: "assets/img/prod-chorizo.webp",
      heroImg: "assets/img/prod-chorizo.webp", cutout: false,
      tag: "Nuevo", stars: 4, rating: 54,
      vol: "250 g · pieza",
      eyebrow: "Recién llegado",
      headline: "Pimentón, carácter y mucho sabor.",
      lead: "El chorizo que perfuma la tabla apenas lo abres. Crudo o a la sartén, siempre gana.",
      stock: "Novedad: primeras unidades disponibles",
      tabs: [
        { label: "Descripción", html: "<p>Chorizo Español curado con pimentón de la vera, que le da su color y sabor inconfundibles. Se disfruta tal cual en una tabla o salteado para soltar todo su aroma. Recién incorporado a nuestra selección.</p>" },
        { label: "En boca", html: li(["Sabor a pimentón con un punto ahumado.", "Firme al corte, jugoso en boca.", "Delicioso crudo o ligeramente salteado."]) },
        { label: "Maridaje", html: li(["Tintos con cuerpo y sidra.", "Pan rústico y queso curado.", "Perfecto en guisos y a la parrilla."]) },
        { label: "Conservación", html: li(["Refrigerar entre 2 y 6 °C.", "Consumir en 1–2 semanas tras abrir.", "Conservar envuelto en papel."]) },
      ],
      stack: { items: [["Chorizo Español (250 g)", "$39.000"], ["Tarjeta de maridaje", "Gratis"], ["Empaque al vacío", "Incluido"]], oldTotal: "$48.000", now: "$39.000" },
    },

    /* ---------------- GOURMET ---------------- */
    {
      id: "aceite-oliva", cat: "gourmet", name: "Aceite de Oliva Extra",
      price: 54000, old: 0, img: "assets/img/prod-aceite.webp",
      heroImg: "assets/img/prod-aceite.webp", cutout: false,
      tag: "", stars: 5, rating: 89,
      vol: "500 mL · botella",
      eyebrow: "Virgen extra",
      headline: "El oro líquido que mejora cualquier plato.",
      lead: "Primera presión en frío, aromático y con ese amargor noble que distingue al buen aceite.",
      stock: "Edición de cosecha, stock limitado",
      tabs: [
        { label: "Descripción", html: "<p>Aceite de Oliva Virgen Extra de primera presión en frío, intenso y afrutado. Un chorrito basta para elevar una ensalada, un pan tostado o el broche final de un buen plato. Calidad que se nota en cada gota.</p>" },
        { label: "En boca", html: li(["Afrutado, con notas verdes y un amargor noble.", "Final ligeramente picante, señal de frescura.", "Mejor en crudo para apreciar todo su aroma."]) },
        { label: "Usos", html: li(["Ensaladas, carpaccios y pan tostado.", "Toque final sobre cremas y pescados.", "Base para vinagretas y marinados."]) },
        { label: "Ficha", html: li(["100% aceituna, primera presión en frío.", "Acidez < 0,5%.", "Conservar en lugar fresco y sin luz directa."]) },
      ],
      stack: { items: [["Aceite de Oliva Extra (500 mL)", "$54.000"], ["Recetario digital", "Gratis"], ["Envío express 24–48h", "Gratis"]], oldTotal: "$66.000", now: "$54.000" },
    },
    {
      id: "tabla-completa", cat: "gourmet", name: 'Caja "Noche Perfecta"',
      price: 180000, old: 240000, img: "assets/img/prod-tabla.webp",
      heroImg: "assets/img/prod-tabla.webp", cutout: false,
      tag: "Combo -25%", stars: 5, rating: 376,
      vol: "Caja para 2–4 personas",
      eyebrow: "Combo estrella",
      headline: "Una velada inolvidable en una sola caja.",
      lead: "Vino, quesos y charcutería seleccionados para que solo tengas que abrir, servir y disfrutar.",
      stock: "Combo del mes: armado por nuestros sommeliers",
      tabs: [
        { label: "Descripción", html: "<p>La Caja Noche Perfecta reúne lo mejor de nuestra selección en un solo pack listo para servir: una botella de tinto, una tabla de quesos y charcutería curada. Pensada para regalar o para regalarte una noche redonda sin complicaciones.</p>" },
        { label: "Qué incluye", html: li(["1 botella de tinto seleccionado (750 mL).", "Trío de quesos: azul, brie y manchego.", "Surtido de charcutería curada y picos artesanales."]) },
        { label: "Ideal para", html: li(["Una cita o cena en casa para 2–4 personas.", "Regalo gourmet listo para entregar.", "Celebrar sin pasar horas en la cocina."]) },
        { label: "Ficha", html: li(["Productos curados por nuestros sommeliers.", "Empaque de regalo incluido.", "Envío express con cadena de frío."]) },
      ],
      stack: { items: [["Vino tinto seleccionado (750 mL)", "$100.000"], ["Trío de quesos selectos", "$90.000"], ["Charcutería curada + picos", "$50.000"], ["Empaque de regalo + envío", "Gratis"]], oldTotal: "$240.000", now: "$180.000" },
    },
  ];

  window.DV_PRODUCTS = PRODUCTS;
  window.DV_getProduct = function (id) {
    return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  };
})();
