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

  }, 500); // tempo total da saída
}
