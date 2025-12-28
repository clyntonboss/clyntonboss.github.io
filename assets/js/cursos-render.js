function setViewMode(mode) {
  const list = document.getElementById("courses-container");
  const grid = document.getElementById("courses-grid");

  list.classList.add("hidden");
  grid.classList.add("hidden");

  if (mode === "list") {
    list.classList.remove("hidden");
    renderListaCursos(cursosBancoDeDados);
  }

  if (mode === "grid") {
    grid.classList.remove("hidden");
    renderGradeCursos(cursosBancoDeDados);
  }
}

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

function renderGradeCursos(cursos) {
  console.log("renderGradeCursos chamada", cursos);

  const container = document.getElementById("courses-grid");
  console.log("container:", container);

  if (!container) return;

  container.innerHTML = "";

  cursos.forEach(curso => {
    const item = document.createElement("div");
    item.className = "course-grid-item";

    item.innerHTML = `
      <img src="${curso.thumb}" alt="${curso.curso}">
      <span class="course-name">${curso.curso}</span>
    `;

    container.appendChild(item);
  });
}
