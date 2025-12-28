document.addEventListener("DOMContentLoaded", () => {
  renderListaCursos(cursosBancoDeDados);
});

function renderListaCursos(cursos) {
  const container = document.getElementById("courses-container");
  if (!container) return;

  container.innerHTML = "";

  cursos.forEach(curso => {
    const item = document.createElement("div");
    item.className = "course-list-item";

    item.innerHTML = `
      <span class="course-name">${curso.curso}</span>
      <span class="course-date">${formatarData(curso.conclusao)}</span>
    `;

    container.appendChild(item);
  });
}

function formatarData(dataISO) {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}
