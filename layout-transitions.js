function animateHeaderTransition(fromHeader, toHeader) {
  if (!fromHeader || !toHeader) return;

  // 🔹 limpa estados anteriores
  fromHeader.classList.remove("header-enter");
  toHeader.classList.remove("header-exit", "header-enter");

  // 🔹 saída do header atual
  fromHeader.classList.add("header-exit");

  // 🔹 prepara entrada do próximo
  toHeader.classList.remove("is-hidden");
  toHeader.classList.add("header-pre-enter");

  // força reflow
  fromHeader.offsetHeight;
  toHeader.offsetHeight;

  setTimeout(() => {
    // 🔹 finaliza saída
    fromHeader.classList.remove("header-exit");
    fromHeader.classList.add("is-hidden");

    // 🔹 inicia entrada
    toHeader.classList.remove("header-pre-enter");
    toHeader.classList.add("header-enter");
  }, 400);
}

document.addEventListener("click", e => {
  const btn = e.target.closest('[data-action="open-portfolio"]');
  if (!btn) return;

  e.preventDefault();

  const headerHome = document.querySelector(".header-home");
  const headerPortfolio = document.querySelector(".header-portfolio");

  animateHeaderTransition(headerHome, headerPortfolio);
});

document.addEventListener("click", e => {
  const link = e.target.closest('[data-action="open-home"]');
  if (!link) return;

  e.preventDefault();

  const headerHome = document.querySelector(".header-home");
  const headerPortfolio = document.querySelector(".header-portfolio");

  animateHeaderTransition(headerPortfolio, headerHome);
});

document.addEventListener("DOMContentLoaded", () => {
  const headerHome = document.querySelector(".header-home");
  const headerPortfolio = document.querySelector(".header-portfolio");

  headerHome.classList.add("header-enter");
  headerPortfolio.classList.add("is-hidden");
});
