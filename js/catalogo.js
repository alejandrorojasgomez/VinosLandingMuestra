/* ============================================================
   catalogo.js — productos (ficticios) + render + filtros + búsqueda
   + contador de cantidad por producto + carrusel de ofertas.
   Listo para reemplazar por catálogo Shopify.
   ============================================================ */
(function () {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Catálogo compartido (js/products.js). Cada card enlaza a su ficha producto.html?id=
  const PRODUCTS = window.DV_PRODUCTS || [];

  const COP = (n) => "$" + n.toLocaleString("es-CO");
  const starStr = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
  const grid = document.getElementById("grid");
  const noRes = document.getElementById("no-results");
  const cartSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>';

  let curFilter = "all";
  let curSearch = "";

  // cantidad en carrito por producto (para el contador de las tarjetas)
  function cartQty(id) {
    try {
      const c = JSON.parse(localStorage.getItem("dv_cart")) || [];
      const f = c.find((i) => i.id === id);
      return f ? f.qty : 0;
    } catch { return 0; }
  }

  function card(p) {
    const q = cartQty(p.id);
    return `
      <article class="pcard reveal" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
        <a class="pcard__media" href="producto.html?id=${p.id}" aria-label="Ver ${p.name}">
          ${p.tag ? `<span class="pcard__tag">${p.tag}</span>` : ""}
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
        </a>
        <div class="pcard__body">
          <span class="pcard__cat">${p.cat}</span>
          <a class="pcard__name" href="producto.html?id=${p.id}">${p.name}</a>
          <span class="pcard__stars">${starStr(p.stars)}</span>
          <div class="pcard__foot">
            <div class="pcard__price">${COP(p.price)}${p.old ? `<s>${COP(p.old)}</s>` : ""}</div>
            <button class="pcard__add" aria-label="Agregar ${p.name}"
              data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">
              ${cartSvg}
              <b class="pcard__qty" ${q ? "" : "hidden"}>${q}</b>
            </button>
          </div>
        </div>
      </article>`;
  }

  function visible() {
    return PRODUCTS.filter(
      (p) =>
        (curFilter === "all" || p.cat === curFilter) &&
        (!curSearch || p.name.toLowerCase().includes(curSearch))
    );
  }

  function render() {
    const list = visible();
    grid.innerHTML = list.map(card).join("");
    grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    noRes.hidden = list.length > 0;
    bindAdd();
  }

  function bindAdd() {
    grid.querySelectorAll(".pcard__add").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        const n = window.DV.addToCart({ id: b.dataset.id, name: b.dataset.name, price: +b.dataset.price });
        const badge = b.querySelector(".pcard__qty");
        const q = cartQty(b.dataset.id);
        badge.textContent = q;
        badge.hidden = false;
        b.classList.add("added");
        setTimeout(() => b.classList.remove("added"), 260);
      });
    });
  }

  // Filtros
  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      curFilter = btn.dataset.filter;
      render();
    });
  });

  // Búsqueda
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", () => {
      curSearch = search.value.trim().toLowerCase();
      render();
    });
  }

  // Filtro inicial por hash
  const hash = location.hash.replace("#", "");
  if (["vinos", "quesos", "carnes", "gourmet"].includes(hash)) {
    curFilter = hash;
    document.querySelectorAll(".filters button").forEach((x) => x.classList.toggle("active", x.dataset.filter === hash));
  }
  render();

  /* ---------- Carrusel de ofertas ---------- */
  const oc = document.querySelector("[data-offers]");
  if (oc) {
    const track = oc.querySelector(".offers-track");
    const slides = [...oc.querySelectorAll(".offer-slide")];
    const dotsWrap = oc.querySelector(".offers-dots");
    const interval = +oc.dataset.interval || 5000;
    let i = 0, timer = null;

    slides.forEach((_, k) => {
      const b = document.createElement("button");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Oferta " + (k + 1));
      b.addEventListener("click", () => go(k, true));
      dotsWrap.appendChild(b);
    });
    const dots = [...dotsWrap.children];

    function go(k, user) {
      i = (k + slides.length) % slides.length;
      track.style.transform = "translateX(" + -i * 100 + "%)";
      dots.forEach((d, j) => d.setAttribute("aria-selected", j === i ? "true" : "false"));
      if (user) restart();
    }
    const next = () => go(i + 1);
    function start() { if (!reduce && !timer) timer = setInterval(next, interval); }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }
    go(0); start();
    oc.addEventListener("mouseenter", stop);
    oc.addEventListener("mouseleave", start);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  }
})();
