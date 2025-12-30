let cursoAtualIndex = 0;

function setViewMode(mode) {
  const block = document.getElementById("course-block");
  const flow  = document.getElementById("courses-flow");
  const list  = document.getElementById("courses-container");
  const grid  = document.getElementById("courses-grid");

  // esconde todos
  block.classList.add("hidden");
  flow.classList.add("hidden");
  list.classList.add("hidden");
  grid.classList.add("hidden");

  // ativa o modo escolhido
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

  if (mode === "flow") {
    flow.classList.remove("hidden");
    renderFluxoCursos(cursosBancoDeDados);
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
      <img src="${curso.thumb}" alt="${curso.curso}" class="cert-thumb" onclick="abrirCertificado('${curso.thumb}')">
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
      class="cert-thumb"
      onclick="abrirCertificado('${curso.thumb}')"
    >

    <div class="curriculo-text cert-text-margin">
      <p><strong>Instituição:</strong> ${curso.instituicao}</p>
      <p><strong>Curso:</strong> ${curso.curso}</p>
      <p><strong>Carga Horária:</strong> ${curso.cargaHoraria}</p>
      <p><strong>Data de Conclusão:</strong> ${curso.dataConclusao}</p>
      <p><strong>Código:</strong> ${curso.codigo}</p>
      <p>
        <strong>Verificação:</strong>
        ${
          curso.verificacao?.url
            ? `<a href="${curso.verificacao.url}" target="_blank" class="cert-link-verify">${curso.verificacao.texto}</a>`
            : `<span class="cert-no-verify">Indisponível</span>`
        }
      </p>
    </div>
  `;

  // Atualiza indicador (ex: 3 / 21)
  const indicator = document.getElementById("course-indicator");
  if (indicator) {
    indicator.textContent = `${index + 1} / ${cursosBancoDeDados.length}`;
  }

  // Opções de Navegação Desabilitadas
  const firstBtn = document.getElementById("first-course");
  const prevBtn = document.getElementById("prev-course");
  const nextBtn = document.getElementById("next-course");
  const lastBtn = document.getElementById("last-course");
  
  // Primeiro curso
  if (index === 0) {
    firstBtn.classList.add("disabled");
    prevBtn.classList.add("disabled");
  } else {
    firstBtn.classList.remove("disabled");
    prevBtn.classList.remove("disabled");
  }
  
  // Último curso
  if (index === cursosBancoDeDados.length - 1) {
    nextBtn.classList.add("disabled");
    lastBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
    lastBtn.classList.remove("disabled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setViewMode("block");

  document.getElementById("first-course")?.addEventListener("click", () => {
    renderBlocoCurso(0);
  });

  document.getElementById("prev-course")?.addEventListener("click", () => {
    if (cursoAtualIndex > 0) {
      renderBlocoCurso(cursoAtualIndex - 1);
    }
  });

  document.getElementById("next-course")?.addEventListener("click", () => {
    if (cursoAtualIndex < cursosBancoDeDados.length - 1) {
      renderBlocoCurso(cursoAtualIndex + 1);
    }
  });

  document.getElementById("last-course")?.addEventListener("click", () => {
    renderBlocoCurso(cursosBancoDeDados.length - 1);
  });
});

// Modo Fluido
function renderFluxoCursos(cursos) {
  const container = document.getElementById("courses-flow");
  if (!container) return;

  container.innerHTML = "";

  cursos.forEach(curso => {
    const item = document.createElement("div");
    item.className = "course-flow-item";

    item.innerHTML = `
      <img 
        src="${curso.thumb}" 
        alt="${curso.curso}"
        class="cert-thumb"
        onclick="abrirCertificado('${curso.thumb}')"
      >

      <div class="curriculo-text cert-text-margin">
        <p><strong>Instituição:</strong> ${curso.instituicao}</p>
        <p><strong>Curso:</strong> ${curso.curso}</p>
        <p><strong>Carga Horária:</strong> ${curso.cargaHoraria}</p>
        <p><strong>Data de Conclusão:</strong> ${curso.dataConclusao}</p>
        <p><strong>Código:</strong> ${curso.codigo}</p>
        <p>
          <strong>Verificação:</strong>
          ${
            curso.verificacao?.url
              ? `<a href="${curso.verificacao.url}" target="_blank" class="cert-link-verify">${curso.verificacao.texto}</a>`
              : `<span class="cert-no-verify">Indisponível</span>`
          }
        </p>
      </div>
    `;

    container.appendChild(item);
  });
}

// ==== The End ====

document.addEventListener("DOMContentLoaded", () => {
  setViewMode("block");
});
