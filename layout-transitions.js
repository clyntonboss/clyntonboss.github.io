document.addEventListener("click", e => {
  const btn = e.target.closest("[data-state]");
  if (!btn) return;

  const headerHome = document.querySelector(".header-home");
  const headerPortfolio = document.querySelector(".header-portfolio");
  const intro = document.querySelector(".intro-home");
  const side = document.querySelector(".side-portfolio");

  switch (btn.dataset.state) {

    /* ───────── HEADER HOME ───────── */
    case "header-home-exit":
      headerHome.classList.add("header-exit");
      break;

    case "header-home-enter":
      headerHome.classList.remove("header-exit");
      break;

    /* ─────── HEADER PORTFÓLIO ─────── */
    case "header-portfolio-exit":
      headerPortfolio.classList.add("header-exit");
      break;

    case "header-portfolio-enter":
      headerPortfolio.classList.remove("header-exit");
      break;

    /* ───────── INTRO HOME ───────── */
    case "intro-exit":
      intro.classList.add("exit");
      break;

    case "intro-enter":
      intro.classList.remove("exit");
      break;

    /* ───────── SIDE MENU ───────── */
    case "side-exit":
      side.classList.add("exit");
      break;

    case "side-enter":
      side.classList.remove("exit");
      break;
  }
});

function sairHeaderHome() {
  const headerHome = document.querySelector(".header-home");
  if (!headerHome) return;

  headerHome.classList.add("header-exit");
}
