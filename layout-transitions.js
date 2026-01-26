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
    if (data.showPhoto) {
      photo.src = data.photoSrc;
      photo.alt = data.photoAlt || "";
  
      // ✅ OBRIGATÓRIO para a foto aparecer
      photo.classList.remove("hidden");
    } else {
      photo.classList.add("hidden");
    }
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
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="portfolio"]');
  if (!link) return;

  e.preventDefault();

  const header = document.querySelector("header.header");
  if (!header) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA (estado atual)
  header.classList.add("portfolio-exit");
  
  setTimeout(() => {
    // 🔹 APLICA CONTEÚDO (foto passa a existir / visível)
    aplicarEstadoHeader("portfolio");
  
    // 🔹 FORÇA ESTADO INICIAL INVISÍVEL
    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");
  
    // 🔹 FORÇA O BROWSER A REGISTRAR O ESTADO
    void header.offsetWidth;
  
    // 🔹 ENTRADA SEQUENCIADA
    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");
  }, 400);
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="home"]');
  if (!link) return;

  e.preventDefault();

  const header = document.querySelector("header.header");
  if (!header) return;

  resetHeaderAnimation(header);
  
  // 🔹 SAÍDA (estado atual)
  header.classList.add("portfolio-exit");
  
  setTimeout(() => {
    // 🔹 APLICA CONTEÚDO (foto passa a existir / visível)
    aplicarEstadoHeader("portfolio");
  
    // 🔹 FORÇA ESTADO INICIAL INVISÍVEL
    resetHeaderAnimation(header);
    header.classList.add("portfolio-pre-enter");
  
    // 🔹 FORÇA O BROWSER A REGISTRAR O ESTADO
    void header.offsetWidth;
  
    // 🔹 ENTRADA SEQUENCIADA
    header.classList.remove("portfolio-pre-enter");
    header.classList.add("portfolio-enter");
  }, 400);
});
