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
      // Seleciona o grupo do título e o conteúdo principal da seção
      const titleGroup = document.getElementById("portfolio-title-group");
      const contentEl  = document.getElementById("section-content");
    
      // Se algum elemento não existir, aborta
      if (!titleGroup || !contentEl) return;
    
      // Remove animação de entrada anterior e aplica animação de saída
      titleGroup.classList.remove("portfolio-enter");
      titleGroup.classList.add("portfolio-exit");
    
      // Remove estado ativo do conteúdo (fade-out)
      contentEl.classList.remove("is-active");
    
      // Delay para permitir animação de saída antes de atualizar o DOM
      setTimeout(() => {
        // Atualiza o conteúdo via callback
        updateCallback();
    
        // Prepara animação de entrada (pré-entrada)
        titleGroup.classList.remove("portfolio-exit");
        titleGroup.classList.add("portfolio-pre-enter");
    
        // Força reflow para que a animação seja reconhecida pelo navegador
        titleGroup.offsetHeight;
        contentEl.offsetHeight;
    
        // Animação de entrada do título e ativação do conteúdo
        requestAnimationFrame(() => {
          titleGroup.classList.remove("portfolio-pre-enter");
          titleGroup.classList.add("portfolio-enter");
    
          contentEl.classList.add("is-active");
        });
    
      }, 800); // tempo do fade-out antes de atualizar o conteúdo
    }

    // Para cada link do menu principal (com atributo data-section)
    menuLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault(); // Evita navegação padrão do link
    
        // 🔴 Limpa o índice do curso atualmente exibido ao mudar de seção
        localStorage.removeItem("blockCourseIndex");
    
        // Anima saída dos botões de visualização (grid, block, etc.)
        animarSaidaViewModes(() => {
          updateViewModeControls(false); // Esconde controles de visualização
        });
    
        const key = link.dataset.section;     // Identificador da seção clicada
        const section = sections[key];        // Objeto de dados da seção
        if (!section) return;                 // Sai se não existir seção
    
        const secaoAnterior = secaoAtiva;     // Guarda a seção anterior
        secaoAtiva = key;                     // Atualiza a seção ativa global
    
        // Remove classe de visibilidade de todos os elementos que possuem transição
        document.querySelectorAll(".view-transition")
          .forEach(el => {
            el.classList.remove("is-active");
          });
    
        // 🔹 Reseta estado do subnível se a seção clicada não for a ativa
        if (estadoSubnivel.secao !== key) {
          estadoSubnivel = {
            ativa: false,
            secao: null
          };
        }
    
        // CASO ESPECIAL: se a seção possui categoria e o subnível ativo é o mesmo
        if (
          section?.hasCategory &&
          estadoSubnivel.ativa &&
          estadoSubnivel.secao === key
        ) {
          contentEl.classList.remove("is-active"); // Oculta conteúdo antes da troca
    
          // Atualiza ícone do título da seção
          iconEl.src = section.icon;
          iconEl.alt = `Ícone ${section.title}`;
          
          const titleGroup = document.getElementById("portfolio-title-group");
          if (titleGroup) {
            // Remove classes de transição anteriores e adiciona a classe ativa
            titleGroup.classList.remove(
              "portfolio-exit",
              "portfolio-pre-enter"
            );
            titleGroup.classList.add("portfolio-enter");
          }
          
          // Atualiza título e subtítulo
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
          
          // Troca o conteúdo da seção após delay (sincroniza animação)
          setTimeout(() => {
            contentEl.innerHTML = section.content;
            initToggle(); // Inicializa accordions do novo conteúdo
            
            contentEl.offsetHeight; // Força reflow para animação
            contentEl.classList.add("is-active"); // Fade-in do conteúdo
    
            if (categoryBox && categoryName) {
              categoryBox.classList.add("hidden");   // Oculta subtítulo de categoria
              categoryBox.classList.remove("category-exit"); // Limpa classe de saída
              categoryName.textContent = "";         // Limpa nome da categoria
            }
          }, 800);
          
          // Atualiza título da aba e favicon
          document.title = section.pageTitle;
          if (section.favicon) faviconEl.href = section.favicon;
          
          // Marca link ativo no menu
          menuLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
          
          return; // 🚨 Evita executar animateTransition
        }
    
        // Caso padrão: anima transição completa da seção
        animateTransition(() => {
          iconEl.src = section.icon;
          iconEl.alt = `Ícone ${section.title}`;
    
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
    
          // Troca conteúdo da seção
          contentEl.innerHTML = section.content;
          initToggle(); // Inicializa accordions do conteúdo
    
          // Atualiza título da aba
          document.title = section.pageTitle;
    
          // Atualiza favicon se existir
          if (section.favicon) {
            faviconEl.href = section.favicon;
          }
        });
    
        // Marca link ativo no menu
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
    
    // 🔹 Botão específico “Projetos 5.0” no home
    const btnProjetos50 = document.querySelector('.btn-projetos[data-section="projetos50"]');
    if (btnProjetos50) {
      btnProjetos50.addEventListener("click", e => {
        e.preventDefault();
      
        // Animação de transição de conteúdo
        animateViewTransition(() => {
          const contentEl = document.getElementById("section-content");
          contentEl.innerHTML = sections["projetos50"].content;
      
          // Inicializa modo de visualização bloco
          trocarModo("block");
        });
      
        // Marca o link correspondente no menu lateral como ativo
        const sideMenuLinks = document.querySelectorAll(".side-menu a");
        sideMenuLinks.forEach(link => link.classList.remove("active"));
      
        const projetosLink = document.querySelector('.side-menu a[data-section="projetos50"]');
        if (projetosLink) projetosLink.classList.add("active");
      
        // Atualiza variáveis de estado
        secaoAtiva = "projetos50";
        estadoSubnivel = { ativa: false, secao: null };
      });
    }
    
    // Inicializa animação dos elementos da seção
    animatedElements.forEach(el => el.classList.add("is-active"));
});

// 🔒 Bloqueia cliques em links ativos do menu lateral para evitar ações redundantes
document.addEventListener(
  "click",
  e => {
    // Verifica se o clique ocorreu em um link ativo da side-menu
    const activeSection = e.target.closest(".side-menu a.active");
    if (!activeSection) return; // Sai se não for link ativo

    e.preventDefault();             // Cancela comportamento padrão (navegação)
    e.stopImmediatePropagation();   // Impede que outros listeners de clique sejam chamados
  },
  true // 👈 Captura na fase de captura (antes da propagação normal)
);

// 🔒 Bloqueia cliques em botões de visualização ativos para evitar ações redundantes
document.addEventListener(
  "click",
  e => {
    // Verifica se o clique ocorreu em um botão de view-mode que já está ativo
    const activeViewBtn = e.target.closest(".view-btn.active");
    if (!activeViewBtn) return; // Sai se não for botão ativo

    e.preventDefault();             // Cancela comportamento padrão do botão
    e.stopImmediatePropagation();   // Impede que outros listeners de clique sejam chamados
  },
  true // 👈 Captura na fase de captura, garantindo prioridade
);

// 🔹 Intercepta cliques em links de categoria no side menu
document.addEventListener("click", e => {
  // Busca o link mais próximo que tenha atributo data-category
  const link = e.target.closest("[data-category]");
  if (!link) return; // Sai se não houver link de categoria

  e.preventDefault(); // Cancela o comportamento padrão do link

  // 🔹 Limpa todas as visualizações ativas (grid, list, flow, block)
  limparTodosOsModos();

  // 🔹 Remove índice salvo do bloco de curso para evitar conflito
  localStorage.removeItem("blockCourseIndex");

  // 🔹 Recupera a chave e os dados da categoria clicada
  const categoryKey = link.dataset.category;
  const category = categoriasFormacoesComplementares[categoryKey];
  if (!category) return;

  // 🔹 Atualiza estado do subnível, indicando que uma categoria foi aberta
  estadoSubnivel = {
    ativa: true,
    secao: secaoAtiva
  };

  // 🔹 Preparação para transição: esconde conteúdo atual
  const contentEl = document.getElementById("section-content");
  if (contentEl) {
    contentEl.classList.remove("is-active");
    void contentEl.offsetHeight; // força reflow para animação
  }

  // 🔹 Anima a transição entre o conteúdo antigo e o novo
  animateViewTransition(() => {
    const titleEl = document.getElementById("section-title");
    
    if (titleEl) {
      const base = titleEl.querySelector(".title-base");      // título da seção
      const categoryBox = titleEl.querySelector(".title-category"); // container da categoria
      const categoryName = titleEl.querySelector(".category-name"); // nome da categoria exibido
    
      const activeSection = sections[secaoAtiva];
      
      // Atualiza título base da seção
      if (base && activeSection) {
        base.textContent = activeSection.title;
      }
    
      // Atualiza subtítulo da categoria com animação
      if (categoryBox && categoryName) {
        categoryName.textContent = category.title;
      
        categoryBox.classList.remove("hidden", "category-enter", "category-exit");
        
        void categoryBox.offsetHeight; // força reflow antes da animação
        
        categoryBox.classList.add("category-enter"); // animação de entrada
      }
    }
  
    // 🔹 Atualiza o conteúdo principal com o conteúdo da categoria
    const contentEl = document.getElementById("section-content");
    if (contentEl) {
      contentEl.innerHTML = category.content;

      // Inicializa explicitamente o modo block
      trocarModo("block");
    }
  });

  // 🔹 Limpa estado ativo de outros links do side menu
  clearSideMenuActive();
  
  // 🔹 Carrega dataset específico da categoria e inicializa navegação do bloco
  loadCategoryDataset(category.dataset, () => {
    inicializarNavegacaoBloco();
    setViewMode("block"); // garante modo inicial do bloco
  });
  
  // 🔹 Mostra controles de visualização se a categoria permitir
  if (category.showViewModes) {
    updateViewModeControls(true);
    animarEntradaViewModes(); // anima os ícones de view mode
  }
});

// 🔹 Função que anima a transição de elementos de visualização (view mode)
// 🔹 Recebe um callback que será executado entre a saída e a entrada da animação
function animateViewTransition(callback) {
  // Seleciona todos os elementos que participam da animação de view
  const elements = document.querySelectorAll(".view-transition");

  // Remove a classe 'is-active' para iniciar o fade-out (saída)
  elements.forEach(el => {
    el.classList.remove("is-active");
  });

  // 🔹 Força reflow para que o DOM registre a mudança antes da animação
  void document.body.offsetHeight;

  // 🔹 Delay para permitir animação de saída antes de atualizar o conteúdo
  setTimeout(() => {

    // 🔹 Executa o callback passado, que normalmente injeta novo conteúdo
    if (typeof callback === "function") {
      callback();
    }

    // 🔹 Seleciona novamente os elementos após a atualização do DOM
    const newElements = document.querySelectorAll(".view-transition");

    // Remove qualquer estado residual 'is-active' para garantir transição limpa
    newElements.forEach(el => {
      el.classList.remove("is-active");
    });

    // 🔹 Força reflow novamente após atualização do DOM
    void document.body.offsetHeight;

    // 🔹 Executa a animação de entrada na próxima frame do navegador
    requestAnimationFrame(() => {
      newElements.forEach(el => {
        el.classList.add("is-active"); // fade-in
      });
    });

  }, 800); // tempo de espera para a animação de saída
}

// 🔹 Função que limpa o estado ativo do menu lateral (side menu)
// 🔹 Remove a classe 'active' de todos os links que estão marcados como ativos
function clearSideMenuActive() {
  document.querySelectorAll(".side-menu a.active")
    .forEach(link => link.classList.remove("active"));
}

// 🔹 Função que carrega dinamicamente o dataset de uma categoria via <script>
// 🔹 src: URL ou caminho do arquivo JS que contém os dados da categoria
// 🔹 callback: função opcional a ser executada após o script ser carregado
function loadCategoryDataset(src, callback) {
  // 🔹 Remove qualquer script anterior com o mesmo id para evitar duplicidade
  const oldScript = document.getElementById("category-dataset");
  if (oldScript) oldScript.remove();

  // 🔹 Cria um novo elemento <script> para carregar o dataset
  const script = document.createElement("script");
  script.src = src;            // URL do dataset
  script.id = "category-dataset"; // id fixo para referência futura
  script.defer = true;         // garante execução após o parsing do HTML

  // 🔹 Define callback que será executado após o script ser carregado
  script.onload = () => {
    if (typeof callback === "function") {
      callback();
    }
  };

  // 🔹 Adiciona o script ao final do body, iniciando o carregamento
  document.body.appendChild(script);
}

// 🔹 Função que controla a visibilidade dos botões de modos de visualização (view modes)
// 🔹 show: booleano que indica se os controles devem aparecer (true) ou desaparecer (false)
function updateViewModeControls(show) {
  // 🔹 Seleciona o container dos botões de view mode
  const viewModesEl = document.getElementById("view-mode-controls");
  if (!viewModesEl) return; // ❌ Sai se não existir o elemento

  // 🔹 Adiciona ou remove a classe que torna o elemento visível
  if (show) {
    viewModesEl.classList.add("is-visible"); // 🔹 Mostra os botões
  } else {
    viewModesEl.classList.remove("is-visible"); // 🔹 Oculta os botões
  }
}

// ⏱️ Delay em milissegundos entre a animação sequencial dos botões de modos de visualização (view modes)
// 🔹 Usado para criar efeito em cascata, de entrada ou saída, dos botões: Grid → List → Flow → Block
const VIEW_MODE_DELAY = 90;

function animarEntradaViewModes() {
  // Obtém os botões de view mode na ordem desejada: Grid → List → Flow → Block
  const buttons = getViewButtonsOrdered([
    "grid",
    "list",
    "flow",
    "block"
  ]);

  // Limpa classes de estado anteriores e adiciona "vm-hidden" para garantir estado inicial invisível
  buttons.forEach(btn => {
    btn.classList.remove("active", "vm-enter", "vm-exit");
    btn.classList.add("vm-hidden");
  });

  // Força reflow para que o navegador registre o estado inicial antes da animação
  buttons.forEach(btn => btn.offsetHeight);

  // Aplica a animação de entrada em cascata, respeitando o delay entre cada botão
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      // Remove estado invisível e adiciona classe de entrada
      btn.classList.remove("vm-hidden");
      btn.classList.add("vm-enter");

      // Caso seja o botão "block", adiciona a classe "active" após a animação de entrada
      if (btn.dataset.view === "block") {
        setTimeout(() => {
          btn.classList.add("active");
        }, 400); // 400ms após iniciar a entrada
      }

    }, index * VIEW_MODE_DELAY); // delay em cascata para cada botão
  });
}

function animarSaidaViewModes(callback) {
  // Obtém os botões de view mode na ordem inversa: Block → Flow → List → Grid
  const buttons = getViewButtonsOrdered([
    "block",
    "flow",
    "list",
    "grid"
  ]);

  // Remove a classe "active" de todos os botões antes de iniciar a animação de saída
  buttons.forEach(btn => btn.classList.remove("active"));

  // Aplica a animação de saída em cascata, respeitando o delay entre cada botão
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      // Remove a classe de entrada e adiciona a classe de saída
      btn.classList.remove("vm-enter");
      btn.classList.add("vm-exit");
    }, index * VIEW_MODE_DELAY); // delay em cascata
  });

  // Calcula o tempo total necessário para a animação completar
  const totalTime =
    buttons.length * VIEW_MODE_DELAY + 400; // 400ms extra para suavizar o final

  // Executa o callback, se fornecido, após o término da animação
  setTimeout(() => {
    if (typeof callback === "function") callback();
  }, totalTime);
}

function getViewButtonsOrdered(order) {
  // Cria um mapeamento dos botões de view mode com base no atributo data-view
  const map = {
    block: document.querySelector('.view-btn[data-view="block"]'),
    flow:  document.querySelector('.view-btn[data-view="flow"]'),
    list:  document.querySelector('.view-btn[data-view="list"]'),
    grid:  document.querySelector('.view-btn[data-view="grid"]')
  };

  // Retorna os botões na ordem especificada pelo array `order`
  // Filtra valores nulos ou indefinidos caso algum botão não exista
  return order.map(k => map[k]).filter(Boolean);
}
