console.log("JS carregado");

function trocarHeaderParaPortfolio() {
  console.log("trocarHeaderParaPortfolio");
  
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
  console.log("trocarIntroParaSideMenu");
  
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

function trocarHeaderParaHome() {
  console.log("trocarHeaderParaHome");

  const homeHeader = document.querySelector(".header-home");
  const portfolioHeader = document.querySelector(".header-portfolio");

  if (!homeHeader || !portfolioHeader) return;

  // SAÍDA — Portfólio
  portfolioHeader.classList.add("header-exit");

  setTimeout(() => {
    portfolioHeader.classList.remove("is-visible", "header-exit");
    portfolioHeader.style.display = "none";

    // RESET VISUAL DO HEADER HOME (segurança)
    homeHeader.querySelectorAll("*").forEach(el => {
      el.style.animation = "";
    });

    // ENTRADA — Home
    homeHeader.style.display = "flex";
    homeHeader.offsetHeight;

    homeHeader.classList.add("is-visible", "header-enter");

  }, 400);
}

function trocarSideMenuParaIntro() {
  console.log("trocarSideMenuParaIntro");

  const sideMenu = document.querySelector(".side-portfolio");
  const intro = document.querySelector(".intro-home");

  if (!sideMenu || !intro) return;

  // SAÍDA — Side Menu
  sideMenu.classList.add("exit");

  setTimeout(() => {
    sideMenu.classList.remove("is-visible", "exit");
    sideMenu.style.display = "none";

    /* ===========================
       RESET VISUAL REAL DA INTRO
       =========================== */
    intro.querySelectorAll("*").forEach(el => {
      el.style.animation = "none";
      el.style.opacity = "";
      el.style.transform = "";
    });

    // força o browser a aplicar o reset
    intro.offsetHeight;

    // remove o bloqueio de animação
    intro.querySelectorAll("*").forEach(el => {
      el.style.animation = "";
    });

    /* ===========================
       ENTRADA — Intro
       =========================== */
    intro.classList.remove("exit");
    intro.style.display = "";
    intro.offsetHeight;

    intro.classList.add("enter");

  }, 400);
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  console.log("CLICK:", trigger.dataset.action);

  e.preventDefault();

  const action = trigger.dataset.action;

  switch (action) {
    case "open-portfolio":
      trocarHeaderParaPortfolio();
      trocarIntroParaSideMenu();
      break;

    case "open-home":
      trocarHeaderParaHome();
      trocarSideMenuParaIntro();
      break;
  }
});
