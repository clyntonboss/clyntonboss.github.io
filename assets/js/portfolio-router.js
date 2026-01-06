document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("[data-section]");
  const titleEl = document.getElementById("section-title");
  const iconEl = document.getElementById("section-icon");
  const contentEl = document.getElementById("section-content");
  const faviconEl = document.getElementById("page-favicon");

  const header = document.getElementById("portfolio-header");

  const animatedElements = [iconEl, titleEl, contentEl];

function animateTransition(updateCallback) {
  const titleGroup = document.getElementById("portfolio-title-group");
  const contentEl  = document.getElementById("section-content");

  if (!titleGroup || !contentEl) return;

  /* =========================
     SAÍDA
  ========================= */

  // título: saída direcional
  titleGroup.classList.remove("portfolio-enter");
  titleGroup.classList.add("portfolio-exit");

  // conteúdo: fade-out
  contentEl.classList.remove("is-active");

  setTimeout(() => {
    /* =========================
       TROCA DE CONTEÚDO
    ========================= */
    updateCallback();

    /* =========================
       PREPARA ENTRADA
    ========================= */
    titleGroup.classList.remove("portfolio-exit");
    titleGroup.classList.add("portfolio-pre-enter");

    // força reflow
    titleGroup.offsetHeight;
    contentEl.offsetHeight;

    requestAnimationFrame(() => {
      /* =========================
         ENTRADA
      ========================= */
      titleGroup.classList.remove("portfolio-pre-enter");
      titleGroup.classList.add("portfolio-enter");

      // conteúdo: fade-in
      contentEl.classList.add("is-active");
    });

  }, 400);
}

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      updateViewModeControls(false);

      const key = link.dataset.section;
      const section = sections[key];
      if (!section) return;

      animateTransition(() => {
        // Ícone do H1
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

  // Estado inicial
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
    // TÍTULO VISÍVEL DA PÁGINA
    const titleEl = document.getElementById("section-title");
    if (titleEl) {
      titleEl.textContent = category.title;
    }
  
    // CONTEÚDO CENTRAL
    const contentEl = document.getElementById("section-content");
    if (contentEl) {
      contentEl.innerHTML = category.content;
  
      // ⬇️ INICIALIZA EXPLICITAMENTE O BLOCK MODE
      trocarModo("block");
    }
  });

  // regra consolidada
  clearSideMenuActive();
  
  loadCategoryDataset(category.dataset, () => {
    // 🔹 inicializa navegação do bloco
    inicializarNavegacaoBloco();
  
    // 🔹 força modo inicial
    setViewMode("block");
  });
  
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

function loadCategoryDataset(src, callback) {
  const oldScript = document.getElementById("category-dataset");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.src = src;
  script.id = "category-dataset";
  script.defer = true;

  script.onload = () => {
    if (typeof callback === "function") {
      callback();
    }
  };

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
