/* ============================================================
   main.js — comportamiento compartido (todas las páginas)
   Menú móvil, contador de carrito (mock localStorage), reveal on scroll.
   Sin dependencias. Listo para reemplazar el carrito por Shopify luego.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  const body = document.body;
  const toggle = document.querySelector(".nav-toggle");
  const backdrop = document.querySelector(".nav-backdrop");

  function closeNav() { body.classList.remove("nav-open"); toggle && toggle.setAttribute("aria-expanded", "false"); }
  function openNav() { body.classList.add("nav-open"); toggle && toggle.setAttribute("aria-expanded", "true"); }

  if (toggle) {
    toggle.addEventListener("click", () =>
      body.classList.contains("nav-open") ? closeNav() : openNav()
    );
  }
  if (backdrop) backdrop.addEventListener("click", closeNav);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  document.querySelectorAll(".main-nav a").forEach((a) => a.addEventListener("click", closeNav));

  /* ---------- Carrito mock (placeholder antes de Shopify) ---------- */
  const CART_KEY = "dv_cart";
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  function saveCart(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
  function cartCount() { return getCart().reduce((n, i) => n + (i.qty || 1), 0); }

  function renderCount() {
    const n = cartCount();
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = n;
      el.style.display = n > 0 ? "grid" : "none";
    });
  }

  // API global mínima para las páginas / futura integración Shopify
  window.DV = window.DV || {};
  window.DV.addToCart = function (product) {
    const cart = getCart();
    const found = cart.find((i) => i.id === product.id);
    if (found) found.qty += 1;
    else cart.push({ ...product, qty: 1 });
    saveCart(cart);
    renderCount();
    return cartCount();
  };

  renderCount();

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal, .reveal-group");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Año dinámico en footer ---------- */
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
