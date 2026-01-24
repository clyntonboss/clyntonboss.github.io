document.addEventListener("click", e => {
  const btn = e.target.closest('[data-action="header-home-exit"]');
  if (!btn) return;

  const headerHome = document.querySelector(".header-home");
  if (!headerHome) return;

  // garante estado limpo
  headerHome.classList.remove("header-enter", "header-pre-enter");

  // dispara animação de saída
  headerHome.classList.add("header-exit");
});
