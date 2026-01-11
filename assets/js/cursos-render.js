let cursoAtualIndex = 0;

// Função Utilitária

function ativarTransicao(container) {
  // reset total
  container.classList.remove("view-transition", "is-active");

  // força reflow para o browser "esquecer" o estado anterior
  container.offsetHeight;

  // reaplica a transição
  container.classList.add("view-transition");
  container.classList.add("is-active");
}

// Modos de Visualização dos Cursos

function setViewMode(mode) {
  localStorage.setItem("coursesViewMode", mode);

  atualizarBotoesDeVisualizacao(mode);

  // 🔹 pega o modo atualmente visível
  const current = document.querySelector(
    "#course-block:not(.hidden), #courses-flow:not(.hidden), #courses-container:not(.hidden), #courses-grid:not(.hidden)"
  );

  // 🔹 fade-out do modo atual
  if (current) {
    current.classList.remove("is-active");

    setTimeout(() => {
      trocarModoInterno(mode);
    }, 400); // mesmo tempo do CSS
  } else {
    trocarModoInterno(mode);
  }
}

function trocarModoInterno(mode) {
  // 🔹 limpa tudo
  limparTodosOsModos();

  let alvo = null;

  if (mode === "block") alvo = document.getElementById("course-block");
  if (mode === "flow")  alvo = document.getElementById("courses-flow");
  if (mode === "list")  alvo = document.getElementById("courses-container");
  if (mode === "grid")  alvo = document.getElementById("courses-grid");

  if (!alvo) return;

  // 🔹 mostra o modo
  alvo.classList.remove("hidden");

  // 🔹 renderiza
  if (mode === "block") {
    const savedIndex = parseInt(
      localStorage.getItem("blockCourseIndex"),
      10
    );
    renderBlocoCurso(Number.isInteger(savedIndex) ? savedIndex : 0);
  }

  if (mode === "flow") renderFluxoCursos(datasetCategoria);
  if (mode === "list") renderListaCursos(datasetCategoria);
  if (mode === "grid") renderGradeCursos(datasetCategoria);

  // 🔹 SCROLL PARA O TOPO DA SEÇÃO (CORRETO)
  if (mode !== "block") {
    const secao = document.querySelector(".curriculo-text");
    if (secao) {
      secao.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }

  // 🔹 anima entrada
  requestAnimationFrame(() => {
    ativarTransicao(alvo);
  });
}

// ❎ ======= Renderização Block Mode ======= ❎

function renderBlocoCurso(index) {
  if (!Array.isArray(datasetCategoria) || datasetCategoria.length === 0) {
    return;
  }

  // 🔐 normaliza índice
  if (index < 0) index = 0;
  if (index >= datasetCategoria.length) {
    index = datasetCategoria.length - 1;
  }

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
          ${curso.mostrarCopiar ? `<button class="copiar-btn" aria-label="Copiar Código" onclick="copiarCodigo('${curso.codigo}', this)">📋</button>` : ""}
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
          ${curso.mostrarCopiar ? `<button class="copiar-btn" aria-label="Copiar Código" onclick="copiarCodigo('${curso.codigo}', this)">📋</button>` : ""}
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

document.addEventListener("click", (event) => {
  const btn = event.target.closest(
    "#first-course, #prev-course, #next-course, #last-course"
  );
  if (!btn) return;

  if (btn.id === "first-course") {
    renderBlocoCurso(0);
  }

  if (btn.id === "prev-course" && cursoAtualIndex > 0) {
    renderBlocoCurso(cursoAtualIndex - 1);
  }

  if (
    btn.id === "next-course" &&
    cursoAtualIndex < datasetCategoria.length - 1
  ) {
    renderBlocoCurso(cursoAtualIndex + 1);
  }

  if (btn.id === "last-course") {
    renderBlocoCurso(datasetCategoria.length - 1);
  }
});

// ⛔ =============== The End =============== ⛔

// ❎ ======== Limpeza Global do DOM ======== ❎

function limparTodosOsModos() {
  const block = document.getElementById("course-block");
  const flow  = document.getElementById("courses-flow");
  const list  = document.getElementById("courses-container");
  const grid  = document.getElementById("courses-grid");

  if (block) {
    block.classList.add("hidden");
    // ❌ NÃO limpar content.innerHTML aqui
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

  // 🛡️ proteção total
  if (typeof atualizarTooltipsViewMode === "function") {
    atualizarTooltipsViewMode(modoAtivo);
  }
}

// ⛔ =============== The End =============== ⛔

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("coursesViewMode");
  localStorage.removeItem("blockCourseIndex");
});

document.addEventListener("DOMContentLoaded", () => {

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
  if (mode !== "block") {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }

  setViewMode(mode);
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

function copiarCodigo(codigo, btn) {
  navigator.clipboard.writeText(codigo)
    .then(() => {
      if (!btn) return;

      const labelOriginal = btn.getAttribute("aria-label") || "Copiar Código";

      // atualiza tooltip
      btn.setAttribute("aria-label", "Código Copiado");

      // força repaint para tooltip reagir imediatamente
      btn.offsetHeight;

      // restaura texto após um tempo
      setTimeout(() => {
        btn.setAttribute("aria-label", labelOriginal);
      }, 8000);
    })
    .catch(err => console.error("Erro ao copiar: ", err));
}

function atualizarTooltipsViewMode(modoAtivo) {
  const buttons = document.querySelectorAll("#view-mode-controls .view-btn");

  buttons.forEach(btn => {
    const modo = btn.dataset.view;
    if (!modo) return;

    const nomeModo =
      modo.charAt(0).toUpperCase() + modo.slice(1);

    if (modo === modoAtivo) {
      btn.setAttribute(
        "aria-label",
        `Modo de Visualização ${nomeModo} (Ativo)`
      );
    } else {
      btn.setAttribute(
        "aria-label",
        `Modo de Visualização ${nomeModo} (Ativar)`
      );
    }
  });
}
