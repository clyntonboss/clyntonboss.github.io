let cursoAtualIndex = 0;

function setViewMode(mode) {
  localStorage.setItem("coursesViewMode", mode);
  
  atualizarBotoesDeVisualizacao(mode);
  
  limparTodosOsModos();

  if (mode === "block") {
    const block = document.getElementById("course-block");
    block.classList.remove("hidden");
  
    const savedIndex = parseInt(
      localStorage.getItem("blockCourseIndex"),
      10
    );
  
    renderBlocoCurso(
      Number.isInteger(savedIndex) ? savedIndex : 0
    );
  }

  if (mode === "flow") {
    const flow = document.getElementById("courses-flow");
    flow.classList.remove("hidden");
    renderFluxoCursos(cursosBancoDeDados);
  }

  if (mode === "list") {
    const list = document.getElementById("courses-container");
    list.classList.remove("hidden");
    renderListaCursos(cursosBancoDeDados);
  }

  if (mode === "grid") {
    const grid = document.getElementById("courses-grid");
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
      <img src="${curso.thumb}" alt="${curso.curso}" class="cert-thumb" onclick="abrirCertificado('${curso.thumb}')">
    `;

    container.appendChild(item);
  });
}

function renderBlocoCurso(index) {
  localStorage.setItem("blockCourseIndex", index);
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

    <div class="course-block cert-text-margin">
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

// ============== Listeners do Bloco ==============
function inicializarNavegacaoBloco() {
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
}
// =================== The  End ===================

// ==== Flow Mode ====
function renderFluxoCursos(cursos) {
  const container = document.getElementById("courses-flow");
  if (!container) return;

  container.innerHTML = "";

  cursos.forEach((curso, index) => {
    const item = document.createElement("div");
    item.className = "course-flow-item";

    item.innerHTML = `
      <img 
        src="${curso.thumb}" 
        alt="${curso.curso}"
        class="cert-thumb"
        onclick="abrirCertificado('${curso.thumb}')"
      >

      <div class="courses-flow cert-text-margin">
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

    // 🔹 linha decorativa entre cursos (exceto após o último)
    if (index < cursos.length - 1) {
      const hr = document.createElement("hr");
      hr.className = "decorative-line-cert";
      container.appendChild(hr);
    }
  });
}
// ============== The End ==============

// ======= Limpeza Global do DOM =======
function limparTodosOsModos() {
  const block = document.getElementById("course-block");
  const flow  = document.getElementById("courses-flow");
  const list  = document.getElementById("courses-container");
  const grid  = document.getElementById("courses-grid");

  if (block) {
    block.classList.add("hidden");
    const content = block.querySelector(".course-block-content");
    if (content) content.innerHTML = "";
  }

  if (flow) {
    flow.classList.add("hidden");
    flow.innerHTML = "";
  }

  if (list) {
    list.classList.add("hidden");
    list.innerHTML = "";
  }

  if (grid) {
    grid.classList.add("hidden");
    grid.innerHTML = "";
  }
}
// ============== The End ==============

// ==== Atualizar Estado dos Ícones ====
function atualizarBotoesDeVisualizacao(modoAtivo) {
  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach(btn => {
    if (btn.dataset.view === modoAtivo) {
      btn.classList.add("active");
      btn.setAttribute("aria-disabled", "true");
    } else {
      btn.classList.remove("active");
      btn.removeAttribute("aria-disabled");
    }
  });
}
// ============== The End ==============

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("coursesViewMode");
  localStorage.removeItem("blockCourseIndex");
});

document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Mantém a navegação funcionando
  inicializarNavegacaoBloco();

  // 🔹 Detecta primeira entrada REAL na página (nova aba)
  const alreadyVisited = sessionStorage.getItem("coursesVisited");

  if (!alreadyVisited) {
    // Primeira vez nesta aba → zera estado
    localStorage.removeItem("coursesViewMode");
    localStorage.removeItem("blockCourseIndex");
    sessionStorage.setItem("coursesVisited", "true");
  }

  // 🔹 Restaura modo salvo ou padrão
  const savedMode = localStorage.getItem("coursesViewMode") || "block";
  setViewMode(savedMode);

  // 🔹 Restaura posição do curso SOMENTE no Block Mode
  if (savedMode === "block") {
    const savedIndex =
      parseInt(localStorage.getItem("blockCourseIndex"), 10) || 0;
    renderBlocoCurso(savedIndex);
  }
});
