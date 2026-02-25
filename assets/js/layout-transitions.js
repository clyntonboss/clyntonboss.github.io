function setLayoutMode(mode) {
  document.body.dataset.mode = mode;
}

function aplicarEstadoHeader(estado) {
  const data = window.headerDataset?.[estado];
  if (!data) return;

  const header = document.querySelector("header.header");
  if (!header) return;

  const photo = header.querySelector(".header-photo");
  const nameEl = header.querySelector(".header-name");
  const nameLink = nameEl?.querySelector("a") || null;
  const lastUpdate = header.querySelector(".last-update");

  /* =========================
     CLASSES DE ESTADO
  ========================= */
  header.classList.remove("header-home", "header-portfolio");
  header.classList.add(data.headerClass);

  /* =========================
     FOTO
  ========================= */
  if (photo) {
    photo.src = data.photoSrc || "";
    photo.alt = data.photoAlt || "";
  
    // ✅ CONTROLE CORRETO (animável)
    photo.classList.toggle("photo-hidden", !data.showPhoto);
  }

  /* =========================
     NOME
  ========================= */
  if (nameEl) {
    nameEl.textContent = data.name; // apenas mostra o nome, sem link
  }

  /* =========================
     DATA DE ATUALIZAÇÃO
  ========================= */
  if (lastUpdate) {
    lastUpdate.style.display = data.showLastUpdate ? "" : "none";
  }

  // =========================
  // ÍCONE HOME
  // =========================
  const homeIconButton = document.getElementById("header-home-icon");
  
  if (homeIconButton) {
    if (data.showHomeIcon) {
      homeIconButton.classList.add("is-visible");
    } else {
      homeIconButton.classList.remove("is-visible");
    }
  }

  /* =========================
     ESTADO ATUAL (opcional)
  ========================= */
  header.dataset.state = estado;

  // 🔥 ESSENCIAL PARA INTRO / SIDE MENU
  document.body.dataset.mode = estado;
}

function resetHeaderAnimation(header) {
  header.classList.remove(
    "header-exit",
    "header-pre-enter",
    "header-enter",
    "portfolio-exit",
    "portfolio-pre-enter",
    "portfolio-enter"
  );

  // força reflow para garantir que o browser "veja" o reset
  void header.offsetWidth;
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarEstadoHeader("home");
  setLayoutMode("home"); // 👈 ADD
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="portfolio"]');
  if (!link) return;

  e.preventDefault();

  const header = document.querySelector("header.header");
  const intro = document.querySelector(".intro-photo");
  const side = document.querySelector(".side-portfolio");

  if (!header || !intro || !side) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA HEADER
  header.classList.add("portfolio-exit");

  // 🔹 SAÍDA INTRO (top → bottom)
  intro.classList.add("is-leaving");

  setTimeout(() => {
    // 🔹 Oculta Intro e remove classe de saída
    intro.style.display = "none";
    intro.classList.remove("is-leaving");

    // 🔹 Exibe Side Menu e aplica animação de entrada (bottom → top)
    side.style.display = "flex";
    side.classList.add("is-entering");

    // 🔹 Atualiza header e layout
    aplicarEstadoHeader("portfolio");
    setLayoutMode("portfolio");

    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");

    void header.offsetWidth;

    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");

    // 🔹 Remove classe de entrada do Side Menu após animação
    setTimeout(() => {
      side.classList.remove("is-entering");
    }, 400); // tempo deve bater com duração da animação CSS
  }, 1200); // tempo deve bater com duração da animação CSS
});

document.addEventListener("click", e => {
  const link = e.target.closest("[data-section]");
  if (!link) return;

  // 🔹 Filtra apenas links da navegação principal
  if (link.closest(".side-portfolio")) return; // clicou dentro do Side Menu → ignora aqui

  e.preventDefault();

  const pageKey = link.dataset.section; // "home", "portfolio" ou "projetos50"
  const header = document.querySelector("header.header");
  const intro = document.querySelector(".intro-photo");
  const side = document.querySelector(".side-portfolio");

  if (!header || !intro || !side) return;

  resetHeaderAnimation(header);

  // 🔹 SAÍDA HEADER
  header.classList.add("portfolio-exit");

  // 🔹 SAÍDA DA AREA ATUAL
  const leavingEl = pageKey === "home" ? side : intro;
  leavingEl.classList.add("is-leaving");

  setTimeout(() => {
    leavingEl.style.display = "none";
    leavingEl.classList.remove("is-leaving");

    const enteringEl = pageKey === "home" ? intro : side;
    enteringEl.style.display = "flex";
    enteringEl.classList.add("is-entering");

    // 🔹 Atualiza header e layout
    aplicarEstadoHeader(pageKey);
    setLayoutMode(pageKey);

    // 🔹 Header animado
    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");

    void header.offsetWidth;

    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");

    setTimeout(() => {
      enteringEl.classList.remove("is-entering");
    }, pageKey === "home" ? 1200 : 400);
  }, pageKey === "home" ? 400 : 1200);
});

document.addEventListener("click", e => {
  const link = e.target.closest(".side-portfolio a[data-category]");
  if (!link) return;

  e.preventDefault();

  const content = document.querySelector(".main-content");
  const subtitle = document.querySelector(".tech-subtitle-sup");
  const icon = document.querySelector("#header-home-icon");

  if (!content || !subtitle || !icon) return;

  // 🔹 Apenas animação de conteúdo e subtítulo, sem tocar Header ou Side Menu
  content.classList.add("is-leaving");
  subtitle.classList.add("is-leaving");
  icon.classList.add("is-leaving");

  setTimeout(() => {
    // 🔹 Atualiza conteúdo e subtítulo
    const categoria = link.dataset.category;
    carregarConteudoCategoria(categoria); // função que troca conteúdo no main-content
    subtitle.textContent = link.textContent;

    content.classList.remove("is-leaving");
    subtitle.classList.remove("is-leaving");
    icon.classList.remove("is-leaving");

    content.classList.add("is-entering");
    subtitle.classList.add("is-entering");
    icon.classList.add("is-entering");

    setTimeout(() => {
      content.classList.remove("is-entering");
      subtitle.classList.remove("is-entering");
      icon.classList.remove("is-entering");
    }, 400); // tempo da animação do conteúdo
  }, 200); // delay curto para dar sensação de saída
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".header-photo");
  if (!img) return;

  if (img.complete) {
    img.classList.add("loaded");
  } else {
    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });
  }
});
