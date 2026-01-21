function trocarIntroParaSideMenu() {
  const intro = document.querySelector(".intro-home");
  const sideMenu = document.querySelector(".side-portfolio");

  if (!intro || !sideMenu) return;

  intro.classList.add("exit");

  setTimeout(() => {
    intro.classList.remove("is-visible", "exit", "enter");
    intro.style.display = "none";

    sideMenu.style.display = "block";
    sideMenu.offsetHeight;

    sideMenu.classList.add("is-visible", "enter");
  }, 400);
}

function trocarSideMenuParaIntro() {
  const sideMenu = document.querySelector(".side-portfolio");
  const intro = document.querySelector(".intro-home");

  if (!sideMenu || !intro) return;

  sideMenu.classList.add("exit");

  setTimeout(() => {
    sideMenu.classList.remove("is-visible", "exit", "enter");
    sideMenu.style.display = "none";

    intro.style.display = "block";
    intro.offsetHeight;

    intro.classList.add("is-visible", "enter");
  }, 500);
}

function trocarHeaderParaPortfolio() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  homeHeader.classList.add("exit");

  setTimeout(() => {
    homeHeader.classList.remove("is-visible", "exit", "enter");
    homeHeader.style.display = "none";

    portfolioHeader.style.display = "flex";
    portfolioHeader.offsetHeight;

    portfolioHeader.classList.add("is-visible", "enter");
  }, 400);
}

function trocarHeaderParaHome() {
  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  portfolioHeader.classList.add("exit");

  setTimeout(() => {
    portfolioHeader.classList.remove("is-visible", "exit", "enter");
    portfolioHeader.style.display = "none";

    homeHeader.style.display = "flex";
    homeHeader.offsetHeight;

    homeHeader.classList.add("is-visible", "enter");
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

  if (trigger.dataset.action === "open-home") {
    trocarHeaderParaHome();
    trocarSideMenuParaIntro();
  }
});
