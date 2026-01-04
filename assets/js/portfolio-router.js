document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("[data-section]");
  const titleEl = document.getElementById("section-title");
  const iconEl = document.getElementById("section-icon");
  const contentEl = document.getElementById("section-content");
  const faviconEl = document.getElementById("page-favicon");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const key = link.dataset.section;
      const section = sections[key];
      if (!section) return;

      // Ícone do H1
      iconEl.src = section.icon;
      iconEl.alt = `Ícone ${section.title}`;

      // Subtítulo
      titleEl.textContent = section.title;

      // Conteúdo
      contentEl.innerHTML = section.content;

      // Título da aba
      document.title = section.pageTitle;

      // Favicon
      if (section.favicon) {
        faviconEl.href = section.favicon;
      }

      // Menu ativo
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
