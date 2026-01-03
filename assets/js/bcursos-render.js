let cursoAtualIndex = 0;

// Função Utilitária

  function ativarTransicao(container) {
    container.classList.remove("view-transition", "is-active");
  
    // força reflow
    container.offsetHeight;
  
    container.classList.add("view-transition");
  
    requestAnimationFrame(() => {
      container.classList.add("is-active");
    });
  }

// Modos de Visualização dos Cursos

function setViewMode(mode) {
  localStorage.setItem("coursesViewMode", mode);
  atualizarBotoesDeVisualizacao(mode);

  limparTodosOsModos();

  let container;

  if (mode === "block") {
    const block = document.getElementById("course-block");
    block.classList.remove("hidden");
  
    const savedIndex = parseInt(
      localStorage.getItem("blockCourseIndex"),
      10
    );
  
    // 🔹 1️⃣ Renderiza PRIMEIRO (dados existem)
    renderBlocoCurso(
      Number.isInteger(savedIndex) ? savedIndex : 0
    );
  
    // 🔹 2️⃣ Anima DEPOIS
    requestAnimationFrame(() => {
      ativarTransicao(block);
    });
  }

  if (mode === "flow") {
    const flow = document.getElementById("courses-flow");
    flow.classList.remove("hidden");
  
    renderFlowCursos(); // ← render obrigatório
  
    requestAnimationFrame(() => {
      ativarTransicao(flow);
    });
  }

  if (mode === "list") {
    const list = document.getElementById("courses-container");
    list.classList.remove("hidden");
  
    renderListaCursos();
  
    requestAnimationFrame(() => {
      ativarTransicao(list);
    });
  }

  if (mode === "grid") {
    const grid = document.getElementById("courses-grid");
    grid.classList.remove("hidden");
  
    renderGridCursos();
  
    requestAnimationFrame(() => {
      ativarTransicao(grid);
    });
  }

  if (!container) return;

  container.classList.remove("hidden");

  // força reflow e anima SEMPRE
  container.offsetHeight;
  container.classList.add("is-active");

  // scroll só fora do block
  if (mode !== "block") {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }
}

// ❎ ======= Renderização Block Mode ======= ❎

function renderBlocoCurso(index) {
  localStorage.setItem("blockCourseIndex", index);

  const container = document.getElementById("course-block");
  const content = container?.querySelector(".course-block-content");

  if (!container || !content) return;

  const curso = datasetCategoria[index];
  if (!curso) return;

  // Atualiza índice global
  cursoAtualIndex = index;

  // 🔹 Inicia transição de saída
  content.classList.add("is-transitioning");

  setTimeout(() => {
    // 🔹 Renderiza novo conteúdo
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
        <p><strong>Código:</strong> ${curso.codigo}
          ${curso.mostrarCopiar ? `<button class="copiar-btn" onclick="copiarCodigo('${curso.codigo}')">📋</button>` : ""}
        </p>
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

    // 🔹 Atualiza indicador (ex: 3 / 21)
    const indicator = document.getElementById("course-indicator");
    if (indicator) {
      indicator.textContent = `${index + 1} / ${datasetCategoria.length}`;
    }

    // 🔹 Botões de navegação
    const firstBtn = document.getElementById("first-course");
    const prevBtn  = document.getElementById("prev-course");
    const nextBtn  = document.getElementById("next-course");
    const lastBtn  = document.getElementById("last-course");

    if (index === 0) {
      firstBtn?.classList.add("disabled");
      prevBtn?.classList.add("disabled");
    } else {
      firstBtn?.classList.remove("disabled");
      prevBtn?.classList.remove("disabled");
    }

    if (index === datasetCategoria.length - 1) {
      nextBtn?.classList.add("disabled");
      lastBtn?.classList.add("disabled");
    } else {
      nextBtn?.classList.remove("disabled");
      lastBtn?.classList.remove("disabled");
    }

    // 🔹 Finaliza transição (entrada)
    content.classList.remove("is-transitioning");
  }, 200);
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  Flow Mode ======= ❎

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
        <p><strong>Código:</strong> ${curso.codigo}
          ${curso.mostrarCopiar ? `<button class="copiar-btn" onclick="copiarCodigo('${curso.codigo}')">📋</button>` : ""}
        </p>
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

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  List Mode ======= ❎

function renderListaCursos(cursos) {
  const container = document.getElementById("courses-container");
  if (!container) return;

  container.innerHTML = "";

  cursos.forEach((curso, index) => {
    const item = document.createElement("div");
    item.className = "course-list-item";
    item.dataset.index = index; // 👈 MUITO IMPORTANTE

    item.innerHTML = `
      <span class="course-name">${curso.curso}</span>
      <span class="course-date">${curso.dataConclusao}</span>
    `;

    container.appendChild(item);
  });
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  Grid Mode ======= ❎

function renderGradeCursos(cursos) {
  console.log("renderGradeCursos chamada", cursos);

  const container = document.getElementById("courses-grid");
  console.log("container:", container);

  if (!container) return;

  container.innerHTML = "";

  cursos.forEach((curso, index) => {
    const item = document.createElement("div");
    item.className = "course-grid-item";
    item.dataset.index = index; // 👈 fundamental

    item.innerHTML = `
      <img 
        src="${curso.thumb}" 
        alt="${curso.curso}" 
        class="cert-thumb"
      >
    `;

    container.appendChild(item);
  });
}

// ⛔ =============== The End =============== ⛔

// ❎ ========== Listener do Bloco ========== ❎

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
    if (cursoAtualIndex < datasetCategoria.length - 1) {
      renderBlocoCurso(cursoAtualIndex + 1);
    }
  });

  document.getElementById("last-course")?.addEventListener("click", () => {
    renderBlocoCurso(datasetCategoria.length - 1);
  });
}

// ⛔ =============== The End =============== ⛔

// ❎ ======== Limpeza Global do DOM ======== ❎

function limparTodosOsModos() {
  const modos = [
    document.getElementById("course-block"),
    document.getElementById("courses-flow"),
    document.getElementById("courses-container"),
    document.getElementById("courses-grid")
  ];

  modos.forEach(modo => {
    if (!modo) return;
    modo.classList.add("hidden");
    modo.classList.remove("is-active");
  });
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ===== Atualizar Estado dos Ícones ===== ❎

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

// ⛔ =============== The End =============== ⛔

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

// ❎ ==== Alternar Modo de Visualização ==== ❎

function trocarModo(mode) {
  const modos = [
    "course-block",
    "courses-flow",
    "courses-container",
    "courses-grid"
  ];

  // 1️⃣ Esconde TODOS os modos
  modos.forEach(id => {
    const el = document.getElementById(id);
    el.classList.add("hidden");
    el.classList.remove("view-transition", "is-active");
  });

  // 2️⃣ Salva o modo atual
  localStorage.setItem("coursesViewMode", mode);

  // 3️⃣ Ativa o modo escolhido
  setViewMode(mode);

  // 4️⃣ Scroll sempre volta ao topo
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ⛔ =============== The End =============== ⛔

// ❎ ====== Abrir Curso no Block Mode ====== ❎

  document.addEventListener("click", (event) => {
    const item = event.target.closest(
      ".course-list-item, .course-grid-item"
    );
    if (!item) return;

    const index = parseInt(item.dataset.index, 10);
    if (!Number.isInteger(index)) return;

    localStorage.setItem("blockCourseIndex", index);

    setViewMode("block");
    renderBlocoCurso(index);
  });

// ⛔ =============== The End =============== ⛔

// Função Copiar Código do Certificado

function copiarCodigo(codigo) {
  navigator.clipboard.writeText(codigo)
    .then(() => alert("Código copiado!"))
    .catch(err => console.error("Erro ao copiar: ", err));
}
