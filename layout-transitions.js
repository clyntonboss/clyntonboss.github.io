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
  const homeIcon = document.getElementById("header-home-icon");
  if (homeIcon) {
    homeIcon.style.display = data.showHomeIcon ? "" : "none";
  }

  /* =========================
     ESTADO ATUAL (opcional)
  ========================= */
  header.dataset.state = estado;
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

  // 🔹 SAÍDA
  header.classList.add("header-exit");

  setTimeout(() => {
    // 🔹 APLICA NOVO ESTADO
    aplicarEstadoHeader("portfolio");

    // 🔹 PREPARA ENTRADA
    header.classList.remove("header-exit");
    header.classList.add("header-pre-enter");

    requestAnimationFrame(() => {
      header.classList.remove("header-pre-enter");
      header.classList.add("header-enter");
    });
  }, 400); // ⬅ TEMPO DA ANIMAÇÃO DE SAÍDA
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="home"]');
  if (!link) return;

  e.preventDefault();

  const header = document.querySelector("header.header");
  if (!header) return;

  // 🔹 SAÍDA
  header.classList.add("header-exit");

  setTimeout(() => {
    // 🔹 APLICA NOVO ESTADO
    aplicarEstadoHeader("home");

    // 🔹 PREPARA ENTRADA
    header.classList.remove("header-exit");
    header.classList.add("header-pre-enter");

    requestAnimationFrame(() => {
      header.classList.remove("header-pre-enter");
      header.classList.add("header-enter");
    });
  }, 400);
});
