// Objeto que guarda o estado do subnível atual em menus ou seções expansíveis
let estadoSubnivel = {
    ativa: false, // indica se algum subnível está ativo/aberto
    secao: null   // referência à seção atualmente ativa (ou null se nenhuma)
};

// Variável que guarda a seção atualmente ativa no portfólio ou no menu
let secaoAtiva = null; // null indica que nenhuma seção está ativa inicialmente

// Inicializa variáveis e referências do menu e da seção ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    // Todos os links que possuem data-section (menu lateral ou navegação)
    const menuLinks = document.querySelectorAll("[data-section]");

    // Elementos da seção que serão atualizados dinamicamente
    const titleEl = document.getElementById("section-title");      // Título da seção
    const iconEl = document.getElementById("section-icon");        // Ícone da seção
    const contentEl = document.getElementById("section-content");  // Conteúdo da seção
    const faviconEl = document.getElementById("page-favicon");     // Favicon da página
    const header = document.getElementById("portfolio-header");    // Header principal do portfólio

    // Lista de elementos que terão animação ao trocar a seção
    const animatedElements = [iconEl, titleEl, contentEl];
  
function animateTransition(updateCallback) {
  const titleGroup = document.getElementById("portfolio-title-group");
  const contentEl  = document.getElementById("section-content");

  if (!titleGroup || !contentEl) return;

  titleGroup.classList.remove("portfolio-enter");
  titleGroup.classList.add("portfolio-exit");

  contentEl.classList.remove("is-active");

  setTimeout(() => {
    updateCallback();

    titleGroup.classList.remove("portfolio-exit");
    titleGroup.classList.add("portfolio-pre-enter");

    titleGroup.offsetHeight;
    contentEl.offsetHeight;

    requestAnimationFrame(() => {

      titleGroup.classList.remove("portfolio-pre-enter");
      titleGroup.classList.add("portfolio-enter");

      contentEl.classList.add("is-active");
    });

  }, 400);
}

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // 🔴 LIMPA ESTADO DE CURSO AO TROCAR DE SEÇÃO
      localStorage.removeItem("blockCourseIndex");

      animarSaidaViewModes(() => {
        updateViewModeControls(false);
      });

      const key = link.dataset.section;
      const section = sections[key];
      if (!section) return;

      const secaoAnterior = secaoAtiva;
      secaoAtiva = key;

      // 🔄 RESET VISUAL COMPLETO DE TRANSIÇÃO DE CATEGORIA
      document.querySelectorAll(".view-transition")
        .forEach(el => {
          el.classList.remove("is-active");
        });

      if (estadoSubnivel.secao !== key) {
        estadoSubnivel = {
          ativa: false,
          secao: null
        };
      }

      // 🧠 CASO ESPECIAL: voltar para Formações Complementares a partir de categoria
      if (
        section?.hasCategory &&
        estadoSubnivel.ativa &&
        estadoSubnivel.secao === key
      ) {
        contentEl.classList.remove("is-active");

      // 🔧 restaura ícone da seção
      iconEl.src = section.icon;
      iconEl.alt = `Ícone ${section.title}`;
      
      // 🔧 garante estado visual consistente
      const titleGroup = document.getElementById("portfolio-title-group");
      if (titleGroup) {
        titleGroup.classList.remove(
          "portfolio-exit",
          "portfolio-pre-enter"
        );
        titleGroup.classList.add("portfolio-enter");
      }
      
        // remove apenas a categoria do subtítulo
        const baseTitle = titleEl.querySelector(".title-base");
        const categoryBox = titleEl.querySelector(".title-category");
        const categoryName = titleEl.querySelector(".category-name");
      
        if (baseTitle) {
          baseTitle.textContent = section.title;
        }
      
        if (categoryBox) {
          categoryBox.classList.remove("category-enter");
          categoryBox.classList.add("category-exit");
        }
      
        // troca somente o conteúdo
        setTimeout(() => {
          contentEl.innerHTML = section.content;
          initToggle();
        
          // força reflow
          contentEl.offsetHeight;
        
          // fade-in
          contentEl.classList.add("is-active");

          if (categoryBox && categoryName) {
            categoryBox.classList.add("hidden");
            categoryBox.classList.remove("category-exit");
            categoryName.textContent = "";
          }
        }, 400);
      
        document.title = section.pageTitle;
        if (section.favicon) faviconEl.href = section.favicon;
      
        // menu ativo
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      
        return; // 🚨 NÃO executa animateTransition
      }

      animateTransition(() => {
        // Ícone do H1
        iconEl.src = section.icon;
        iconEl.alt = `Ícone ${section.title}`;

        // Subtítulo base
        const baseTitle = titleEl.querySelector(".title-base");
        const categoryBox = titleEl.querySelector(".title-category");
        const categoryName = titleEl.querySelector(".category-name");
        
        if (baseTitle) {
          baseTitle.textContent = section.title;
        }
        
        if (categoryBox && categoryName) {
          categoryBox.classList.add("hidden");
          categoryName.textContent = "";
        }

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

  // 🔹 HOME → BOTÃO PROJETOS 5.0
  const btnProjetos50 = document.querySelector('.btn-projetos[data-section="projetos50"]');
  if (btnProjetos50) {
    btnProjetos50.addEventListener("click", e => {
      e.preventDefault();
  
      // 🔹 Chama a animação de transição de conteúdo, já existente
      animateViewTransition(() => {
        const contentEl = document.getElementById("section-content");
        contentEl.innerHTML = sections["projetos50"].content;
  
        // inicializa explicitamente o block mode
        trocarModo("block");
      });
  
      // 🔹 MARCA O LINK CORRESPONDENTE DO SIDE MENU
      const sideMenuLinks = document.querySelectorAll(".side-menu a");
      sideMenuLinks.forEach(link => link.classList.remove("active"));
  
      const projetosLink = document.querySelector('.side-menu a[data-section="projetos50"]');
      if (projetosLink) projetosLink.classList.add("active");
  
      // 🔹 ATUALIZA variáveis de estado (opcional, mantém consistência)
      secaoAtiva = "projetos50";
      estadoSubnivel = { ativa: false, secao: null };
    });
  }

  // Estado inicial
  animatedElements.forEach(el => el.classList.add("is-active"));
});

document.addEventListener(
  "click",
  e => {
    const activeSection = e.target.closest(
      ".side-menu a.active"
    );
    if (!activeSection) return;

    e.preventDefault();
    e.stopImmediatePropagation();
  },
  true
);

document.addEventListener(
  "click",
  e => {
    const activeViewBtn = e.target.closest(".view-btn.active");
    if (!activeViewBtn) return;

    e.preventDefault();
    e.stopImmediatePropagation();
  },
  true // 👈 FASE DE CAPTURA (ESSENCIAL)
);

document.addEventListener("click", e => {
  const link = e.target.closest("[data-category]");
  if (!link) return;

  e.preventDefault();

  limparTodosOsModos();
  localStorage.removeItem("blockCourseIndex");

  const categoryKey = link.dataset.category;
  const category = categoriasFormacoesComplementares[categoryKey];
  if (!category) return;

  estadoSubnivel = {
    ativa: true,
    secao: secaoAtiva
  };

  const contentEl = document.getElementById("section-content");
  if (contentEl) {
    contentEl.classList.remove("is-active");
    void contentEl.offsetHeight; // força reflow
  }

  animateViewTransition(() => {
    // SUBTÍTULO — acrescenta apenas a categoria
    const titleEl = document.getElementById("section-title");
    
    if (titleEl) {
      const base = titleEl.querySelector(".title-base");
      const categoryBox = titleEl.querySelector(".title-category");
      const categoryName = titleEl.querySelector(".category-name");
    
      const activeSection = sections[secaoAtiva];
      
      if (base && activeSection) {
        base.textContent = activeSection.title;
      }
    
      if (categoryBox && categoryName) {
        categoryName.textContent = category.title;
      
        categoryBox.classList.remove("hidden", "category-enter", "category-exit");
        
        // força voltar para estado base
        void categoryBox.offsetHeight;
        
        categoryBox.classList.add("category-enter");
      }
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
  
  if (category.showViewModes) {
    updateViewModeControls(true);
    animarEntradaViewModes();
  }
});

function animateViewTransition(callback) {
  const elements = document.querySelectorAll(".view-transition");

  // 🔥 GARANTE ESTADO BASE REAL
  elements.forEach(el => {
    el.classList.remove("is-active");
  });

  // 🔥 força reflow isolado
  void document.body.offsetHeight;

  // Fade-out
  setTimeout(() => {

    if (typeof callback === "function") {
      callback();
    }

    // 🔥 garante que o DOM atualizado comece invisível
    const newElements = document.querySelectorAll(".view-transition");

    newElements.forEach(el => {
      el.classList.remove("is-active");
    });

    // 🔥 força reflow novamente
    void document.body.offsetHeight;

    requestAnimationFrame(() => {
      newElements.forEach(el => {
        el.classList.add("is-active");
      });
    });

  }, 400);
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

const VIEW_MODE_DELAY = 90; // delay entre ícones (ms)

function animarEntradaViewModes() {
  const buttons = getViewButtonsOrdered([
    "grid",
    "list",
    "flow",
    "block"
  ]);

  // limpa estados anteriores
  buttons.forEach(btn => {
    btn.classList.remove("active", "vm-enter", "vm-exit");
    btn.classList.add("vm-hidden");
  });

  // força reflow para garantir estado inicial
  buttons.forEach(btn => btn.offsetHeight);

  // entrada em cascata (Grid → Block)
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.remove("vm-hidden");
      btn.classList.add("vm-enter");

      // 🟢 Block vira active somente após entrar
      if (btn.dataset.view === "block") {
        setTimeout(() => {
          btn.classList.add("active");
        }, 400);
      }

    }, index * VIEW_MODE_DELAY);
  });
}

function animarSaidaViewModes(callback) {
  const buttons = getViewButtonsOrdered([
    "block",
    "flow",
    "list",
    "grid"
  ]);

  // remove active ANTES da saída
  buttons.forEach(btn => btn.classList.remove("active"));

  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.remove("vm-enter");
      btn.classList.add("vm-exit");
    }, index * VIEW_MODE_DELAY);
  });

  const totalTime =
    buttons.length * VIEW_MODE_DELAY + 400;

  setTimeout(() => {
    if (typeof callback === "function") callback();
  }, totalTime);
}

function getViewButtonsOrdered(order) {
  const map = {
    block: document.querySelector('.view-btn[data-view="block"]'),
    flow:  document.querySelector('.view-btn[data-view="flow"]'),
    list:  document.querySelector('.view-btn[data-view="list"]'),
    grid:  document.querySelector('.view-btn[data-view="grid"]')
  };

  return order.map(k => map[k]).filter(Boolean);
}
