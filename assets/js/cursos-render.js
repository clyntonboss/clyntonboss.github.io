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
      <span class="course-date">${curso.dataConclusao}</span>
    `;

    container.appendChild(item);
  });
}
