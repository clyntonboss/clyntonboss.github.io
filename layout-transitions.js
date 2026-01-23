document.addEventListener("click", e => {
  const btn = e.target.closest("[data-test]");
  if (!btn) return;

  const headerHome = document.querySelector(".header-home");
  const intro = document.querySelector(".intro-home");
  const side = document.querySelector(".side-portfolio");

  switch (btn.dataset.test) {

    case "header-exit":
      headerHome.dataset.state = "header-exit";
      break;

    case "header-enter":
      headerHome.dataset.state = "header-enter";
      break;

    case "intro-exit":
      intro.dataset.state = "intro-exit";
      break;

    case "intro-enter":
      intro.dataset.state = "intro-enter";
      break;

    case "side-exit":
      side.dataset.state = "side-exit";
      break;

    case "side-enter":
      side.dataset.state = "side-enter";
      break;
  }
});
