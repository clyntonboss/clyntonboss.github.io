function trocarHeaderParaPortfolio() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  // SAÍDA — Home
  homeHeader.classList.add("header-exit");

  setTimeout(() => {
    homeHeader.classList.remove("is-visible", "header-exit");
    homeHeader.style.display = "none";

    // ENTRADA — Portfólio
    portfolioHeader.style.display = "flex";
    portfolioHeader.offsetHeight; // força reflow

    portfolioHeader.classList.add("is-visible", "header-enter");
  }, 400);
}

function trocarIntroParaSideMenu() {
  const intro = document.querySelector(".intro-home");
  const sideMenu = document.querySelector(".side-portfolio");

  if (!intro || !sideMenu) return;

  intro.classList.add("exit");

  setTimeout(() => {
    intro.classList.remove("is-visible", "exit");
    intro.style.display = "none";

    sideMenu.style.display = "block";
    sideMenu.offsetHeight;
    sideMenu.classList.add("is-visible", "enter");
  }, 400);
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  e.preventDefault();

  if (trigger.dataset.action === "open-portfolio") {
    trocarHeaderParaPortfolio();
    trocarIntroParaSideMenu();
  }
});

function trocarHeaderParaHome() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  // SAÍDA — Portfólio
  portfolioHeader.classList.add("header-exit");

  setTimeout(() => {
    portfolioHeader.classList.remove("is-visible", "header-exit", "header-enter");
    portfolioHeader.style.display = "none";
  
    homeHeader.style.display = "flex";
    homeHeader.offsetHeight;
  
    homeHeader.classList.add("is-visible", "header-enter");
  
    // LIMPA depois da animação
    setTimeout(() => {
      homeHeader.classList.remove("header-enter");
    }, 400);
  
  }, 400);
}

function trocarSideMenuParaIntro() {
  const sideMenu = document.querySelector(".side-portfolio");
  const intro = document.querySelector(".intro-home");

  if (!sideMenu || !intro) return;

  sideMenu.classList.add("exit");

  setTimeout(() => {
    sideMenu.classList.remove("is-visible", "exit");
    sideMenu.style.display = "none";

    // RESET TOTAL DE ESTADO
    intro.classList.remove("exit", "enter");

    intro.style.display = "";
    intro.offsetHeight;

    // Estado inicial da entrada
    intro.classList.add("enter");

  }, 400);
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  e.preventDefault();

  if (trigger.dataset.action === "open-home") {
    trocarHeaderParaHome();
    trocarSideMenuParaIntro();
  }
});
