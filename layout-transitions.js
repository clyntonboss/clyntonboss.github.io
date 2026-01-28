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
    homeIconButton.classList.toggle("hidden", !data.showHomeIcon);
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
  }, 600); // tempo deve bater com duração da animação CSS
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="home"]');
  if (!link) return;

  e.preventDefault();

  const header = document.querySelector("header.header");
  const intro = document.querySelector(".intro-photo");
  const side = document.querySelector(".side-portfolio");

  if (!header || !intro || !side) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA HEADER
  header.classList.add("portfolio-exit");

  // 🔹 SAÍDA SIDE MENU (top → bottom)
  side.classList.add("is-leaving");

  setTimeout(() => {
    // 🔹 Oculta Side Menu e remove classe de saída
    side.style.display = "none";
    side.classList.remove("is-leaving");

    // 🔹 Exibe Intro e aplica animação de entrada (bottom → top)
    intro.style.display = "flex";
    intro.classList.add("is-entering");

    // 🔹 Atualiza header e layout
    aplicarEstadoHeader("home");
    setLayoutMode("home");

    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");

    void header.offsetWidth;

    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");

    // 🔹 Remove classe de entrada do Intro após animação
    setTimeout(() => {
      intro.classList.remove("is-entering");
    }, 600); // tempo deve bater com duração da animação CSS
  }, 400); // tempo deve bater com duração da animação CSS
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
