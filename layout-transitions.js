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
    if (data.nameIsLink) {
      if (nameLink) {
        nameLink.textContent = data.name;
        nameLink.href = "#";
      } else {
        nameEl.innerHTML = `<a href="#" data-section="home">${data.name}</a>`;
      }
    } else {
      nameEl.textContent = data.name;
    }
  }

  /* =========================
     DATA DE ATUALIZAÇÃO
  ========================= */
  if (lastUpdate) {
    lastUpdate.style.display = data.showLastUpdate ? "" : "none";
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

  aplicarEstadoHeader("portfolio");
});

document.addEventListener("click", e => {
  const link = e.target.closest('a[data-section="home"]');
  if (!link) return;

  e.preventDefault();
  e.stopPropagation();

  aplicarEstadoHeader("home");
});
