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
      headerHome.dataset.state = "exit";
      break;

    case "header-home-enter":
      headerHome.dataset.state = "enter";
      break;

    /* ─────── HEADER PORTFÓLIO ─────── */

    case "header-portfolio-exit":
      headerPortfolio.dataset.state = "exit";
      break;

    case "header-portfolio-enter":
      headerPortfolio.dataset.state = "enter";
      break;

    /* ───────── INTRO HOME ───────── */

    case "intro-exit":
      intro.dataset.state = "exit";
      break;

    case "intro-enter":
      intro.dataset.state = "enter";
      break;

    /* ───────── SIDE MENU ───────── */

    case "side-exit":
      side.dataset.state = "exit";
      break;

    case "side-enter":
      side.dataset.state = "enter";
      break;
  }
});

function sairHeaderHome() {
  const headerHome = document.querySelector('.header-home');
  if (!headerHome) return;

  headerHome.dataset.state = "exit";
}
