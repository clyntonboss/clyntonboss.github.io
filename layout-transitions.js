document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="header-home-exit"]');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const headerHome = document.querySelector(".header-home");
    if (!headerHome) return;

    headerHome.classList.remove("header-enter", "header-pre-enter");
    headerHome.classList.add("header-exit");
  },
  true // 👈 captura, igual você já faz em outros pontos
);
