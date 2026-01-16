function trocarHeaderParaPortfolio() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  // SAÍDA — Home
  homeHeader.classList.add("header-exit");

  // após animação da saída
  setTimeout(() => {
    homeHeader.classList.remove("is-visible", "header-exit");
    homeHeader.style.display = "none";

    // prepara entrada
    portfolioHeader.style.display = "flex";
    portfolioHeader.offsetHeight; // força reflow

    portfolioHeader.classList.add("is-visible", "header-enter");

  }, 400); // tempo total da saída
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  e.preventDefault();

  if (trigger.dataset.action === "open-portfolio") {
    // chama quem sabe fazer
  }
});
