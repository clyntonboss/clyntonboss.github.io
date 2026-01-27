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

  setLayoutMode("portfolio"); // 👈 ADD

  const header = document.querySelector("header.header");
  if (!header) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA (estado atual)
  header.classList.add("portfolio-exit");
    
  setTimeout(() => {
    aplicarEstadoHeader("portfolio");
    
    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");
  
    void header.offsetWidth;
  
    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");
  }, 400);
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="home"]');
  if (!link) return;

  e.preventDefault();

  setLayoutMode("home"); // 👈 ADD

  const header = document.querySelector("header.header");
  if (!header) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA (estado atual)
  header.classList.add("portfolio-exit");
  
  setTimeout(() => {
    aplicarEstadoHeader("home");
    
    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");
  
    void header.offsetWidth;
  
    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");
  }, 400);
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
