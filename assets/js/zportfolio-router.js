document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("[data-section]");
  const titleEl = document.getElementById("section-title");
  const iconEl = document.getElementById("section-icon");
  const contentEl = document.getElementById("section-content");
  const faviconEl = document.getElementById("page-favicon");

  const animatedElements = [iconEl, titleEl, contentEl];

  function animateTransition(updateCallback) {
    // Fade-out
    animatedElements.forEach(el => el.classList.remove("is-active"));

    setTimeout(() => {
      updateCallback();

      // força reflow para garantir a animação
      animatedElements.forEach(el => el.offsetHeight);

      // Fade-in
      animatedElements.forEach(el => el.classList.add("is-active"));
    }, 400); // mesmo tempo do fade-out
  }

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      updateViewModeControls(false);

      const key = link.dataset.section;
      const section = sections[key];
      if (!section) return;

      animateTransition(() => {
        //Ícone do H1
        iconEl.src = section.icon;
        iconEl.alt = `Ícone ${section.title}`;

        // Subtítulo
        titleEl.textContent = section.title;

        // Conteúdo
        contentEl.innerHTML = section.content;

        // Reativa accordions do conteúdo injetado
        initToggle();

        // Título da aba
        document.title = section.pageTitle;

        // Favicon
        if (section.favicon) {
          faviconEl.href = section.favicon;
        }
      });

      // Menu ativo
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Ativa estado inicial
  animatedElements.forEach(el => el.classList.add("is-active"));
});

document.addEventListener("click", e => {
  const link = e.target.closest("[data-category]");
  if (!link) return;

  e.preventDefault();

  const categoryKey = link.dataset.category;
  const category = categoriasFormacoesComplementares[categoryKey];
  if (!category) return;

  animateViewTransition(() => {
    // título da aba
    document.title = category.title;

    // conteúdo central
    document.getElementById("section-content").innerHTML = category.content;
  });

  // regra consolidada
  clearSideMenuActive();

  // dataset dinâmico
  loadCategoryDataset(category.dataset);

  // view modes
  updateViewModeControls(category.showViewModes);
});

function animateViewTransition(callback) {
  const elements = document.querySelectorAll(".view-transition");

  // Fade-out
  elements.forEach(el => el.classList.remove("is-active"));

  setTimeout(() => {
    if (typeof callback === "function") {
      callback();
    }

    // força reflow antes do fade-in
    elements.forEach(el => el.offsetHeight);

    // Fade-in
    elements.forEach(el => el.classList.add("is-active"));
  }, 400); // tempo do fade-out
}

function clearSideMenuActive() {
  document.querySelectorAll(".side-menu a.active")
    .forEach(link => link.classList.remove("active"));
}

function loadCategoryDataset(src) {
  // remove dataset anterior
  const oldScript = document.getElementById("category-dataset");
  if (oldScript) oldScript.remove();

  // injeta o novo
  const script = document.createElement("script");
  script.src = src;
  script.id = "category-dataset";
  script.defer = true;

  document.body.appendChild(script);
}

function updateViewModeControls(show) {
  const viewModesEl = document.getElementById("view-mode-controls");
  if (!viewModesEl) return;

  if (show) {
    viewModesEl.classList.add("is-visible");
  } else {
    viewModesEl.classList.remove("is-visible");
  }
}
