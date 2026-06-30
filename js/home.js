/* ============================================================
   home.js — carrusel del hero (auto) + carrusel de eventos
   ============================================================ */
(function () {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- HERO · carrusel de ofertas ---------- */
  const root = document.querySelector(".hero[data-carousel]");
  if (root) {
    const track = root.querySelector(".hero__track");
    const slides = [...root.querySelectorAll(".hero__slide")];
    const dotsWrap = root.querySelector(".hero__dots");
    const interval = +root.dataset.interval || 6000;
    let idx = 0, timer = null;

    // fondo por slide
    slides.forEach((s) => { if (s.dataset.bg) s.style.background = s.dataset.bg; });

    // dots
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Oferta " + (i + 1));
      b.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = [...dotsWrap.children];

    function go(i, user) {
      idx = (i + slides.length) % slides.length;
      track.style.transform = "translateX(" + -idx * 100 + "%)";
      dots.forEach((d, j) => d.setAttribute("aria-selected", j === idx ? "true" : "false"));
      if (user) restart();
    }
    const next = () => go(idx + 1);
    function start() { if (!reduce && !timer) timer = setInterval(next, interval); }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    go(0);
    start();
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

    // swipe táctil
    let x0 = null;
    root.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    root.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) go(idx + (dx < 0 ? 1 : -1), true);
      x0 = null;
    }, { passive: true });
  }

  /* ---------- EVENTOS · carrusel ---------- */
  const eTrack = document.querySelector(".events-track");
  const prev = document.querySelector(".events-nav .prev");
  const nxt = document.querySelector(".events-nav .next");
  if (eTrack) {
    const step = () => Math.min(eTrack.clientWidth * 0.8, 360);
    prev && prev.addEventListener("click", () => eTrack.scrollBy({ left: -step(), behavior: "smooth" }));
    nxt && nxt.addEventListener("click", () => eTrack.scrollBy({ left: step(), behavior: "smooth" }));

    let down = false, sx = 0, ss = 0;
    eTrack.addEventListener("pointerdown", (e) => { down = true; sx = e.pageX; ss = eTrack.scrollLeft; eTrack.setPointerCapture(e.pointerId); eTrack.style.cursor = "grabbing"; });
    eTrack.addEventListener("pointermove", (e) => { if (down) eTrack.scrollLeft = ss - (e.pageX - sx); });
    const rel = () => { down = false; eTrack.style.cursor = ""; };
    eTrack.addEventListener("pointerup", rel);
    eTrack.addEventListener("pointercancel", rel);
  }
})();
