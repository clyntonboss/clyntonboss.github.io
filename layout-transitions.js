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
    portfolioHeader.classList.remove("is-visible", "header-exit");
    portfolioHeader.style.display = "none";

    // ENTRADA — Home
    homeHeader.style.display = "flex";
    homeHeader.offsetHeight;

    homeHeader.classList.add("is-visible", "header-enter");
  }, 400);
}

function trocarSideMenuParaIntro() {
  const sideMenu = document.querySelector(".side-portfolio");
  const intro = document.querySelector(".intro-home");

  if (!sideMenu || !intro) return;

  // SAÍDA — Side Menu
  sideMenu.classList.add("exit");

  setTimeout(() => {
    sideMenu.classList.remove("is-visible", "exit", "enter");
    sideMenu.style.display = "none";

    // RESET INTRO 🔥
    intro.classList.remove("enter", "exit", "is-visible");
    intro.style.display = "";

    // força reset visual
    intro.offsetHeight;

    // ENTRADA — Intro
    intro.classList.add("is-visible", "enter");
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
