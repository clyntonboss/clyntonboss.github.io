// Função para definir o modo de layout da página
function setLayoutMode(mode) {
    // Define o modo no atributo data-mode do body, usado para estilização CSS
    document.body.dataset.mode = mode;
}

// Função para aplicar o estado de header baseado no dataset global
function aplicarEstadoHeader(estado) {
    // Obtém os dados do header para o estado solicitado
    const data = window.headerDataset?.[estado];
    if (!data) return; // Encerra se o estado não existir

    // Seleciona o elemento header
    const header = document.querySelector("header.header");
    if (!header) return;

    // Seleciona elementos internos do header
    const photo = header.querySelector(".header-photo");
    const nameEl = header.querySelector(".header-name");
    const nameLink = nameEl?.querySelector("a") || null;
    const lastUpdate = header.querySelector(".last-update");

    // Remove todas as classes de header existentes e aplica a classe do estado
    header.classList.remove("header-home", "header-portfolio");
    header.classList.add(data.headerClass);

    // Atualiza foto se existir
    if (photo) {
        photo.src = data.photoSrc || "";
        photo.alt = data.photoAlt || "";
        photo.classList.toggle("photo-hidden", !data.showPhoto);
    }

    // Atualiza o nome exibido
    if (nameEl) {
        nameEl.textContent = data.name;
    }

    // Mostra ou oculta a data de última atualização
    if (lastUpdate) {
        lastUpdate.style.display = data.showLastUpdate ? "" : "none";
    }

    // Atualiza ícone de home no header
    const homeIconButton = document.getElementById("header-home-icon");
    if (homeIconButton) {
        if (data.showHomeIcon) {
            homeIconButton.classList.add("is-visible");
        } else {
            homeIconButton.classList.remove("is-visible");
        }
    }

    // Define o estado atual no dataset do header e do body
    header.dataset.state = estado;
    document.body.dataset.mode = estado;
}

// Função para resetar animações do header, preparando para uma nova transição
function resetHeaderAnimation(header) {
    // Remove todas as classes de animação do header
    header.classList.remove(
        "header-exit",
        "header-pre-enter",
        "header-enter",
        "portfolio-exit",
        "portfolio-pre-enter",
        "portfolio-enter"
    );

    // Força reflow para reiniciar animações CSS corretamente
    void header.offsetWidth;
}

// Ao carregar o DOM, aplica o estado inicial do header e do layout
document.addEventListener("DOMContentLoaded", () => {
    // Aplica o estado do header para "home"
    aplicarEstadoHeader("home");

    // Define o modo de layout como "home" no body
    setLayoutMode("home");
});

// Gerencia a transição animada ao clicar no link que leva para a seção "portfolio"
document.addEventListener("click", e => {
    // Verifica se o clique foi em um link com data-section="portfolio"
    const link = e.target.closest('a[data-section="portfolio"]');
    if (!link) return;

    e.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona elementos do header, introdução e painel lateral
    const header = document.querySelector("header.header");
    const intro = document.querySelector(".intro-photo");
    const side = document.querySelector(".side-portfolio");

    if (!header || !intro || !side) return;

    // Reseta animações existentes no header antes da transição
    resetHeaderAnimation(header);

    // Adiciona classe de saída para header e intro
    header.classList.add("portfolio-exit");
    intro.classList.add("is-leaving");

    // Após 1.2s, finaliza a saída e inicia entrada da seção portfolio
    setTimeout(() => {
        // Oculta a introdução e remove classe de saída
        intro.style.display = "none";
        intro.classList.remove("is-leaving");

        // Mostra o painel lateral e aplica classe de entrada
        side.style.display = "flex";
        side.classList.add("is-entering");

        // Atualiza header e layout para o estado "portfolio"
        aplicarEstadoHeader("portfolio");
        setLayoutMode("portfolio");

        // Reinicia animações do header e aplica classes de pré-entrada e entrada
        resetHeaderAnimation(header);
        header.classList.add("portfolio-pre-enter");

        void header.offsetWidth; // Força reflow

        header.classList.remove("portfolio-pre-enter");
        header.classList.add("portfolio-enter");

        // Após 0.4s, remove a classe de entrada do painel lateral
        setTimeout(() => {
            side.classList.remove("is-entering");
        }, 400);
    }, 1200);
});

// Gerencia transições animadas entre seções usando links com atributo data-section
document.addEventListener("click", e => {
    // Verifica se o clique foi em um link com data-section
    const link = e.target.closest("[data-section]");
    if (!link) return;

    // Ignora cliques dentro do painel lateral do portfolio
    if (link.closest(".side-portfolio")) return;

    e.preventDefault(); // Previne o comportamento padrão do link

    // Obtém a chave da página a ser exibida
    const pageKey = link.dataset.section;

    // Seleciona elementos principais da página
    const header = document.querySelector("header.header");
    const intro = document.querySelector(".intro-photo");
    const side = document.querySelector(".side-portfolio");

    if (!header || !intro || !side) return;

    // Reseta animações do header
    resetHeaderAnimation(header);

    // Aplica classe de saída no header
    header.classList.add("portfolio-exit");

    // Define qual elemento está saindo (home ou portfolio)
    const leavingEl = pageKey === "home" ? side : intro;
    leavingEl.classList.add("is-leaving");

    // Após o tempo de saída, inicia a transição de entrada
    setTimeout(() => {
        // Oculta o elemento que estava saindo e remove classe
        leavingEl.style.display = "none";
        leavingEl.classList.remove("is-leaving");

        // Define o elemento que entrará
        const enteringEl = pageKey === "home" ? intro : side;
        enteringEl.style.display = "flex";
        enteringEl.classList.add("is-entering");

        // Atualiza header e layout para a nova seção
        aplicarEstadoHeader(pageKey);
        setLayoutMode(pageKey);

        // Reinicia animações do header
        resetHeaderAnimation(header);
        header.classList.add("portfolio-pre-enter");

        void header.offsetWidth; // Força reflow

        // Remove pré-entrada e aplica classe de entrada
        header.classList.remove("portfolio-pre-enter");
        header.classList.add("portfolio-enter");

        // Remove classe de entrada do elemento após transição
        setTimeout(() => {
            enteringEl.classList.remove("is-entering");
        }, pageKey === "home" ? 1200 : 400);
    }, pageKey === "home" ? 400 : 1200);
});

// Gerencia a transição ao clicar em uma categoria dentro do painel lateral do portfolio
document.addEventListener("click", e => {
    // Verifica se o clique foi em um link com data-category dentro da side-portfolio
    const link = e.target.closest(".side-portfolio a[data-category]");
    if (!link) return;

    e.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona elementos principais que sofrerão transição
    const content = document.querySelector(".main-content");
    const subtitle = document.querySelector(".tech-subtitle-sup");
    const icon = document.querySelector("#header-home-icon");

    if (!content || !subtitle || !icon) return;

    // Adiciona classes de saída para animação
    content.classList.add("is-leaving");
    subtitle.classList.add("is-leaving");
    icon.classList.add("is-leaving");

    // Após 200ms, troca o conteúdo da categoria e aplica classes de entrada
    setTimeout(() => {
        // Obtém a categoria clicada
        const categoria = link.dataset.category;
        carregarConteudoCategoria(categoria);

        // Atualiza o texto do subtítulo
        subtitle.textContent = link.textContent;

        // Remove classes de saída
        content.classList.remove("is-leaving");
        subtitle.classList.remove("is-leaving");
        icon.classList.remove("is-leaving");

        // Adiciona classes de entrada para animação
        content.classList.add("is-entering");
        subtitle.classList.add("is-entering");
        icon.classList.add("is-entering");

        // Após 400ms, remove as classes de entrada para finalizar animação
        setTimeout(() => {
            content.classList.remove("is-entering");
            subtitle.classList.remove("is-entering");
            icon.classList.remove("is-entering");
        }, 400);
    }, 200);
});

// Adiciona classe "loaded" à foto do header quando a imagem estiver carregada
document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".header-photo");
    if (!img) return;

    // Se a imagem já estiver carregada, aplica a classe imediatamente
    if (img.complete) {
        img.classList.add("loaded");
    } else {
        // Caso contrário, espera o evento load da imagem
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    }
});
