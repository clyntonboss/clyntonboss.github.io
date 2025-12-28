function renderBlocoCurso(index) {
  console.log("Renderizando bloco:", index);

  const container = document.querySelector(".course-block-content");
  container.innerHTML = "<p style='color:white'>TESTE BLOCO OK</p>";
}

let cursoAtualIndex = 0;

function setViewMode(mode) {
  const list = document.getElementById("courses-container");
  const grid = document.getElementById("courses-grid");
  const block = document.getElementById("courses-block");

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

  if (mode === "block") {
    document.getElementById("course-block").classList.remove("hidden");
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
      <p><strong>Carga Horária:</strong> ${curso.carga}</p>
      <p><strong>Conclusão:</strong> ${formatarData(curso.conclusao)}</p>

      ${
        curso.verificacao
          ? `<p><a href="${curso.verificacao}" target="_blank">Verificar autenticidade</a></p>`
          : ""
      }
    </div>
  `;

  // Controle de limites
  document.getElementById("prev-course").disabled = index === 0;
  document.getElementById("next-course").disabled = index === cursosBancoDeDados.length - 1;
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
