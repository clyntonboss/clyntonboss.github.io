function switchToPortfolioHeader() {
  const home = document.querySelector(".header-home");
  const portfolio = document.querySelector(".header-portfolio");

  // Home sai
  home.classList.remove("is-visible");
  home.classList.add("exit-right");

  setTimeout(() => {
    home.classList.add("is-hidden");
    home.classList.remove("exit-right");

    // Portfólio entra
    portfolio.classList.remove("is-hidden");
    portfolio.classList.add("is-visible", "enter-left");
  }, 400);
}

function switchToHomeHeader() {
  const home = document.querySelector(".header-home");
  const portfolio = document.querySelector(".header-portfolio");

  // Portfólio sai
  portfolio.classList.remove("is-visible");
  portfolio.classList.add("exit-left");

  setTimeout(() => {
    portfolio.classList.add("is-hidden");
    portfolio.classList.remove("exit-left");

    // Home entra
    home.classList.remove("is-hidden");
    home.classList.add("is-visible", "enter-right");
  }, 400);
}

/* =========================
   GATILHOS
========================= */

// Botão Portfólio
document.querySelector("[data-action='open-portfolio']")?.addEventListener("click", e => {
  e.preventDefault();
  switchToPortfolioHeader();
});

// Clique no nome (voltar para Home)
document.querySelector("[data-action='open-home']")?.addEventListener("click", e => {
  e.preventDefault();
  switchToHomeHeader();
});
