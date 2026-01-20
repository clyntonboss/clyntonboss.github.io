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

function trocarFixedHeaderParaPortfolio() {
  const home = document.querySelector(".fixed-home");
  const portfolio = document.querySelector(".fixed-portfolio");

  if (!home || !portfolio) return;

  // SAÍDA — Home
  home.classList.add("exit");

  setTimeout(() => {
    home.classList.remove("is-visible", "exit");
    home.style.display = "none";

    // ENTRADA — Portfólio
    portfolio.style.display = "block";
    portfolio.offsetHeight; // reflow

    portfolio.classList.add("is-visible", "enter");
  }, 400);
}

function trocarIntroParaSideMenu() {
  const intro = document.querySelector(".intro-home");
  const sideMenu = document.querySelector(".side-portfolio");

  if (!intro || !sideMenu) return;

  // SAÍDA — Intro
  intro.classList.add("exit");

  setTimeout(() => {
    intro.classList.remove("is-visible", "exit");
    intro.style.display = "none";

    // ENTRADA — Side Menu
    sideMenu.style.display = "block";
    sideMenu.offsetHeight; // reflow

    sideMenu.classList.add("is-visible", "enter");
  }, 450); // ligeiramente maior que o último delay
}

function trocarTextoHomeParaPortfolio() {
  const homeText = document.querySelector(".curriculo-home");
  const portfolioText = document.querySelector(".curriculo-portfolio");

  if (!homeText || !portfolioText) return;

  // SAÍDA — Home
  homeText.classList.add("exit");

  setTimeout(() => {
    homeText.classList.remove("is-visible", "exit");
    homeText.style.display = "none";

    // ENTRADA — Portfólio
    portfolioText.style.display = "block";
    portfolioText.offsetHeight; // reflow

    portfolioText.classList.add("is-visible", "enter");
  }, 400);
}

function trocarSideMenuParaIntro() {
  const sideMenu = document.querySelector(".side-portfolio");
  const intro = document.querySelector(".intro-home");

  if (!sideMenu || !intro) return;

  // SAÍDA — Side Menu
  sideMenu.classList.add("exit");

  setTimeout(() => {
    sideMenu.classList.remove("is-visible", "exit");
    sideMenu.style.display = "none";

    // ENTRADA — Intro
    intro.style.display = "block";
    intro.offsetHeight; // reflow

    intro.classList.add("is-visible", "enter");
  }, 400);
}

function trocarHeaderParaHome() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  // SAÍDA — Portfólio
  portfolioHeader.classList.add("header-exit");

  setTimeout(() => {
    portfolioHeader.classList.remove("is-visible", "header-exit");
    portfolioHeader.style.display = "none";

    // ENTRADA — Home
    homeHeader.style.display = "flex";
    homeHeader.offsetHeight; // reflow

    homeHeader.classList.add("is-visible", "header-enter");
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

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  e.preventDefault();

  if (trigger.dataset.action === "close-portfolio") {
    trocarHeaderParaHome();
    trocarSideMenuParaIntro();
  }
});

function iniciarHome() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");
  const intro = document.querySelector(".intro-home");
  const sideMenu = document.querySelector(".side-portfolio");

  if (homeHeader) {
    homeHeader.style.display = "flex";
    homeHeader.classList.add("is-visible");
  }

  if (portfolioHeader) {
    portfolioHeader.style.display = "none";
    portfolioHeader.classList.remove("is-visible", "header-enter");
  }

  if (intro) {
    intro.style.display = "block";
    intro.classList.add("is-visible");
  }

  if (sideMenu) {
    sideMenu.style.display = "none";
    sideMenu.classList.remove("is-visible", "enter");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarHome();
});
