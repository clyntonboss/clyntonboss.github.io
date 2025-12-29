let cursoAtualIndex = 0;

function setViewMode(mode) {
  const list = document.getElementById("courses-container");
  const grid = document.getElementById("courses-grid");
  const block = document.getElementById("course-block");

  list.classList.add("hidden");
  grid.classList.add("hidden");
  block.classList.add("hidden");

  if (mode === "list") {
    list.classList.remove("hidden");
    renderListaCursos(cursosBancoDeDados);
  }

  if (mode === "grid") {
    grid.classList.remove("hidden");
    renderGradeCursos(cursosBancoDeDados);
  }

  if (mode === "block") {
    block.classList.remove("hidden");
    renderBlocoCurso(0);
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

function renderBlocoCurso(index) {
  const container = document.getElementById("course-block");
  const content = container.querySelector(".course-block-content");

  if (!container || !content) return;

  const curso = cursosBancoDeDados[index];
  if (!curso) return;

  cursoAtualIndex = index;

  content.innerHTML = `
    <img 
      src="${curso.thumb}" 
      alt="${curso.curso}"
      onclick="abrirCertificado('${curso.thumb}')"
    >

    <div class="course-meta">
      <p><strong>Instituição:</strong> ${curso.instituicao}</p>
      <p><strong>Curso:</strong> ${curso.curso}</p>
      <p><strong>Carga Horária:</strong> ${curso.cargaHoraria}</p>
      <p><strong>Data de Conclusão:</strong> ${curso.dataConclusao}</p>
      <p><strong>Código:</strong> ${curso.codigo}</p>

      ${
        curso.verificacao?.url
          ? `<p><a href="${curso.verificacao.url}" target="_blank">
               ${curso.verificacao.texto}
             </a></p>`
          : ""
      }
    </div>
  `;

  document.getElementById("prev-course").disabled = index === 0;
  document.getElementById("next-course").disabled =
    index === cursosBancoDeDados.length - 1;
}

document.getElementById("prev-course").addEventListener("click", () => {
  if (cursoAtualIndex > 0) {
    renderBlocoCurso(cursoAtualIndex - 1);
  }
});

document.getElementById("next-course").addEventListener("click", () => {
  if (cursoAtualIndex < cursosBancoDeDados.length - 1) {
    renderBlocoCurso(cursoAtualIndex + 1);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setViewMode("block");
});
