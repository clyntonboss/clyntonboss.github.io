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

function trocarHeader(ativo) {
  const headers = document.querySelectorAll('.fixed-header-section');

  headers.forEach(header => {
    header.classList.remove('is-visible', 'visible');
  });

  const headerAtivo = document.querySelector(`.fixed-${ativo}`);
  if (!headerAtivo) return;

  // pequena pausa para garantir saída suave
  setTimeout(() => {
    headerAtivo.classList.add('is-visible');
    headerAtivo.classList.add('visible');
  }, 120);
}

document.addEventListener("click", e => {

  /* ============================
     SIDE MENU (data-section)
  ============================ */
  const linkSection = e.target.closest("[data-section]");
  if (linkSection) {
    const section = linkSection.dataset.section;

    if (section === "perfil" || section === "proposito") {
      trocarHeader("home");
    } else {
      trocarHeader("portfolio");
    }

    return;
  }

  /* ============================
     ACTIONS (data-action)
  ============================ */
  const trigger = e.target.closest("[data-action]");
  if (!trigger) return;

  e.preventDefault();

  if (trigger.dataset.action === "open-portfolio") {
    trocarHeaderParaPortfolio();
    trocarFixedHeaderParaPortfolio();
    trocarIntroParaSideMenu();
    trocarTextoHomeParaPortfolio();
  }
});
