// Variável para armazenar o índice do curso atualmente selecionado ou em exibição
let cursoAtualIndex = 0;

// Função para resetar a exibição de cursos de uma categoria
function resetarCursosCategoria() {
    // Reseta o índice do curso atual
    cursoAtualIndex = 0;

    // Remove o índice armazenado no localStorage
    localStorage.removeItem("blockCourseIndex");

    // Seleciona o bloco principal do curso
    const block = document.getElementById("course-block");
    // Seleciona o conteúdo dentro do bloco
    const content = block?.querySelector(".course-block-content");

    if (content) {
        // Limpa o conteúdo do bloco
        content.innerHTML = "";
        // Reseta altura e overflow
        content.style.height = "";
        content.style.overflow = "";
        // Remove a classe que indica visibilidade
        content.classList.remove("is-visible");
    }

    // Seleciona os elementos adicionais de exibição de cursos
    const flow  = document.getElementById("courses-flow");
    const list  = document.getElementById("courses-container");
    const grid  = document.getElementById("courses-grid");

    // Limpa o conteúdo de cada container, se existir
    if (flow)  flow.innerHTML = "";
    if (list)  list.innerHTML = "";
    if (grid)  grid.innerHTML = "";
}

// Função para inicializar accordions (expandir/recolher) de cursos dentro de um container específico
function inicializarAccordionsCurso(containerSelector) {
    // Seleciona o container dos cursos usando o seletor fornecido
    const container = document.querySelector(containerSelector);
    if (!container) return; // Encerra se o container não existir

    // Seleciona todos os botões de toggle dentro do container
    const toggles = container.querySelectorAll('.exp-toggle');

    toggles.forEach(btn => {

        // Evita adicionar múltiplos listeners no mesmo botão
        if (btn.dataset.listenerAttached) return;
        btn.dataset.listenerAttached = "true";

        // Obtém o cabeçalho do accordion
        const header = btn.parentElement;

        // Permite que o clique no cabeçalho também acione o botão de toggle
        header.addEventListener('click', () => btn.click());

        // Evento de clique no botão de toggle
        btn.addEventListener('click', (e) => {
            // Evita propagação para elementos pai
            e.stopPropagation();

            // Seleciona o elemento de detalhes associado
            const details = header.nextElementSibling;
            const isOpen = details.style.maxHeight && details.style.maxHeight !== '0px';

            // Seleciona todos os toggles no container
            const allToggles = container.querySelectorAll('.exp-toggle');

            // Fecha todos os outros accordions
            allToggles.forEach(otherBtn => {
                const otherDetails = otherBtn.parentElement.nextElementSibling;
                const otherHeader = otherBtn.parentElement;

                if (otherDetails !== details) {
                    otherDetails.style.maxHeight = '0';
                    otherDetails.classList.remove('open');
                    otherHeader.classList.remove('open');
                }
            });

            // Alterna o estado do accordion clicado
            if (isOpen) {
                // Se estava aberto, fecha
                details.style.maxHeight = '0';
                details.classList.remove('open');
                header.classList.remove('open');
            } else {
                // Se estava fechado, abre com altura dinâmica
                details.style.maxHeight = details.scrollHeight + 'px';
                details.classList.add('open');
                header.classList.add('open');
            }
        });
    });
}

// Função para ativar uma transição visual em um container específico
function ativarTransicao(container) {
    // Remove classes de transição e estado ativo para reiniciar a animação
    container.classList.remove("view-transition", "is-active");

    // Força reflow do layout para que a remoção das classes seja registrada pelo navegador
    container.offsetHeight;

    // Adiciona novamente as classes para iniciar a transição
    container.classList.add("view-transition");
    container.classList.add("is-active");
}

// Função para definir o modo de visualização dos cursos (ex: grid, lista, fluxo)
function setViewMode(mode) {
    // Salva o modo selecionado no localStorage
    localStorage.setItem("coursesViewMode", mode);

    // Atualiza os botões de visualização para refletir o modo atual
    atualizarBotoesDeVisualizacao(mode);

    // Seleciona o container atualmente visível entre os possíveis modos
    const current = document.querySelector(
        "#course-block:not(.hidden), #courses-flow:not(.hidden), #courses-container:not(.hidden), #courses-grid:not(.hidden)"
    );

    if (current) {
        // Remove a classe de estado ativo para iniciar a transição
        current.classList.remove("is-active");

        // Após 800ms (tempo da transição), troca o modo interno
        setTimeout(() => {
            trocarModoInterno(mode);
        }, 800);
    } else {
        // Se nenhum container estava visível, troca o modo imediatamente
        trocarModoInterno(mode);
    }
}

// Função para trocar o modo interno de visualização dos cursos
function trocarModoInterno(mode) {
    // Limpa todos os modos de visualização ativos
    limparTodosOsModos();

    let alvo = null;

    // Define o container alvo de acordo com o modo selecionado
    if (mode === "block") alvo = document.getElementById("course-block");
    if (mode === "flow")  alvo = document.getElementById("courses-flow");
    if (mode === "list")  alvo = document.getElementById("courses-container");
    if (mode === "grid")  alvo = document.getElementById("courses-grid");

    // Encerra se nenhum container for encontrado
    if (!alvo) return;

    // Torna o container visível e aplica classe para transição
    alvo.classList.remove("hidden");
    alvo.classList.add("view-transition");

    // Renderiza o conteúdo de acordo com o modo
    if (mode === "block") {
        const savedIndex = parseInt(localStorage.getItem("blockCourseIndex"), 10);
        renderBlocoCurso(Number.isInteger(savedIndex) ? savedIndex : 0);
    }

    if (mode === "flow") renderFluxoCursos(datasetCategoria);
    if (mode === "list") renderListaCursos(datasetCategoria);
    if (mode === "grid") renderGradeCursos(datasetCategoria);

    // Para modos diferentes de 'block', rola a seção do currículo para o topo
    if (mode !== "block") {
        const secao = document.querySelector(".curriculo-text");
        if (secao) {
            secao.scrollIntoView({ behavior: "instant", block: "start" });
        }
    }

    // Adiciona a classe de ativo na próxima frame para disparar animação
    requestAnimationFrame(() => {
        alvo.classList.add("is-active");
    });
}

// ❎ ======= Renderização Block Mode ======= ❎

// Função para renderizar um curso no modo 'bloco' (view block) pelo índice
function renderBlocoCurso(index) {
    // Salva o índice atual no localStorage para persistência
    localStorage.setItem("blockCourseIndex", index);

    // Seleciona o container principal do bloco de cursos
    const container = document.getElementById("course-block");
    const content = container?.querySelector(".course-block-content");

    // Encerra se não existir container ou conteúdo
    if (!container || !content) return;

    // Garante que o container esteja visível
    container.classList.remove("hidden");

    // Seleciona o curso pelo índice
    const curso = datasetCategoria[index];
    if (!curso) return;

    // Atualiza o índice global de curso atual
    cursoAtualIndex = index;

    // Remove a classe de visibilidade para iniciar transição
    content.classList.remove("is-visible");

    // Usa requestAnimationFrame para garantir atualização visual
    requestAnimationFrame(() => {
        content.classList.remove("is-visible");

        // Pequeno delay antes de atualizar o conteúdo
        setTimeout(() => {
            // Atualiza o HTML do bloco com os dados do curso
            content.innerHTML = `
                <img 
                    src="${curso.thumb}" 
                    alt="${curso.curso}"
                    class="cert-thumb cert-thumb-block"
                    onclick="abrirCertificado('${curso.thumb}')"
                >
                <div>
                    <p><strong>${curso.nomeInstituicao}</strong>${curso.instituicao}</p>
                    <p><strong>${curso.nomeCurso}</strong>${curso.curso}</p>
                    <p><strong>${curso.nomeCargaHoraria}</strong>${curso.cargaHoraria}</p>
                    <p><strong>${curso.nomeDataConclusao}</strong>${curso.dataConclusao}</p>
                    <p><strong>${curso.nomeCodigo}</strong>${curso.codigo}
                        ${curso.mostrarCopiar ? `<button class="copiar-btn" aria-label="Copiar Código" onclick="copiarCodigo('${curso.codigo}', this)">📋</button>` : ""}
                    </p>
                    <p>
                        <strong>${curso.nomeVerificacao}</strong>
                        ${
                            curso.verificacao === null
                                ? `<span class="cert-no-verify">Indisponível</span>`
                                : curso.verificacao?.url
                                    ? `<a href="${curso.verificacao.url}" target="_blank" class="cert-link-verify">${curso.verificacao.texto}</a>`
                                    : ""
                        }
                    </p>
                    <p><strong>${curso.nomeTitulo}</strong>${curso.titulo}</p>
                    <p><strong>${curso.nomePeriodo}</strong>${curso.periodo}</p>
                    <p><strong>${curso.nomeDuracao}</strong>${curso.duracao}</p>
                    <p><strong>${curso.nomeStackTecnica}</strong>${curso.stackTecnica}</p>
                    <p>${curso.projetoInterativo}</p>
                    ${curso.descricaoProjeto}
                </div>
            `;

            // Inicializa accordions dentro do bloco
            inicializarAccordionsCurso('#course-block');

            // Atualiza indicador de curso atual
            const indicator = document.getElementById("course-indicator");
            if (indicator) {
                indicator.textContent = `${index + 1} / ${datasetCategoria.length}`;
            }

            // Seleciona botões de navegação
            const firstBtn = document.getElementById("first-course");
            const prevBtn  = document.getElementById("prev-course");
            const nextBtn  = document.getElementById("next-course");
            const lastBtn  = document.getElementById("last-course");

            // Atualiza estado dos botões (habilitado/desabilitado) dependendo do índice
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

            requestAnimationFrame(() => {
                content.classList.add("is-visible");
            });

        }, 400); // Delay antes de atualizar conteúdo
    });
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  Flow Mode ======= ❎

// Função para renderizar os cursos no modo 'fluxo' (flow view)
function renderFluxoCursos(cursos) {
    // Seleciona o container do modo fluxo
    const container = document.getElementById("courses-flow");
    if (!container) return; // Encerra se o container não existir

    // Limpa o conteúdo atual do container
    container.innerHTML = "";

    // Itera sobre cada curso da lista
    cursos.forEach((curso, index) => {
        // Cria o elemento principal do curso
        const item = document.createElement("div");
        item.className = "course-flow-item";

        // Monta o conteúdo HTML do curso
        item.innerHTML = `
            <img 
                src="${curso.thumb}" 
                alt="${curso.curso}"
                class="cert-thumb cert-thumb-block"
                onclick="abrirCertificado('${curso.thumb}')"
            >
            <div>
                <p><strong>${curso.nomeInstituicao}</strong>${curso.instituicao}</p>
                <p><strong>${curso.nomeCurso}</strong>${curso.curso}</p>
                <p><strong>${curso.nomeCargaHoraria}</strong>${curso.cargaHoraria}</p>
                <p><strong>${curso.nomeDataConclusao}</strong>${curso.dataConclusao}</p>
                <p><strong>${curso.nomeCodigo}</strong>${curso.codigo}
                    ${curso.mostrarCopiar ? `<button class="copiar-btn" aria-label="Copiar Código" onclick="copiarCodigo('${curso.codigo}', this)">📋</button>` : ""}
                </p>
                <p>
                    <strong>${curso.nomeVerificacao}</strong>
                    ${
                        curso.verificacao === null
                            ? `<span class="cert-no-verify">Indisponível</span>`
                            : curso.verificacao?.url
                                ? `<a href="${curso.verificacao.url}" target="_blank" class="cert-link-verify">${curso.verificacao.texto}</a>`
                                : ""
                    }
                </p>
                <p><strong>${curso.nomeTitulo}</strong>${curso.titulo}</p>
                <p><strong>${curso.nomePeriodo}</strong>${curso.periodo}</p>
                <p><strong>${curso.nomeDuracao}</strong>${curso.duracao}</p>
                <p><strong>${curso.nomeStackTecnica}</strong>${curso.stackTecnica}</p>
                <p>${curso.projetoInterativo}</p>
                ${curso.descricaoProjeto}
            </div>
        `;

        // Adiciona o curso ao container
        container.appendChild(item);

        // Adiciona linha decorativa entre os cursos, exceto no último
        if (index < cursos.length - 1) {
            const hr = document.createElement("hr");
            hr.className = "decorative-line-cert";
            container.appendChild(hr);
        }
    });

    // Inicializa accordions dentro do container de fluxo
    inicializarAccordionsCurso('#courses-flow');
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  List Mode ======= ❎

// Função para renderizar os cursos no modo 'lista' (list view)
function renderListaCursos(cursos) {
    // Seleciona o container do modo lista
    const container = document.getElementById("courses-container");
    if (!container) return; // Encerra se o container não existir

    // Limpa o conteúdo atual do container
    container.innerHTML = "";

    // Itera sobre cada curso da lista
    cursos.forEach((itemData, index) => {
        // Cria o elemento principal do curso na lista
        const item = document.createElement("div");
        item.className = "course-list-item";
        item.dataset.index = index;

        // Adiciona classes especiais para primeiro e último item
        if (index === 0) item.classList.add("first");
        if (index === cursos.length - 1) item.classList.add("last");

        // Determina se é uma formação com nome de curso válido
        const isFormacao = itemData.curso && itemData.curso.trim() !== "";

        // Define o título e a segunda coluna com base no tipo de curso
        const titulo = isFormacao
            ? itemData.curso
            : itemData.titulo;

        const segundaColuna = isFormacao
            ? itemData.dataConclusao
            : itemData.periodo;

        // Monta o HTML do item da lista
        item.innerHTML = `
            <span class="course-name">${titulo || ""}</span>
            <span class="course-date">${segundaColuna || ""}</span>
        `;

        // Adiciona o item ao container
        container.appendChild(item);
    });
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ======= Renderização  Grid Mode ======= ❎

// Função para renderizar os cursos no modo 'grid' (grade view)
function renderGradeCursos(cursos) {
    // Logs para depuração (podem ser removidos em produção)
    console.log("renderGradeCursos chamada", cursos);
    const container = document.getElementById("courses-grid");
    console.log("container:", container);

    if (!container) return; // Encerra se o container não existir

    // Limpa o conteúdo atual do container
    container.innerHTML = "";

    // Itera sobre cada curso da lista
    cursos.forEach((curso, index) => {
        // Cria o elemento principal do curso na grade
        const item = document.createElement("div");
        item.className = "course-grid-item";
        item.dataset.index = index;

        // Monta o HTML do item da grade
        item.innerHTML = `
            <img 
                src="${curso.thumb}" 
                alt="${curso.curso}" 
                class="cert-thumb"
            >
        `;

        // Adiciona o item ao container
        container.appendChild(item);
    });
}

// ⛔ =============== The End =============== ⛔

// ❎ ========== Listener do Bloco ========== ❎

// Listener global para navegação entre cursos no modo 'bloco'
document.addEventListener("click", (event) => {
    // Detecta se o clique foi em algum botão de navegação
    const btn = event.target.closest(
        "#first-course, #prev-course, #next-course, #last-course"
    );
    if (!btn) return; // Encerra se não for um botão relevante

    // Navega para o primeiro curso
    if (btn.id === "first-course") {
        renderBlocoCurso(0);
    }

    // Navega para o curso anterior, se não for o primeiro
    if (btn.id === "prev-course" && cursoAtualIndex > 0) {
        renderBlocoCurso(cursoAtualIndex - 1);
    }

    // Navega para o próximo curso, se não for o último
    if (btn.id === "next-course" &&
        cursoAtualIndex < datasetCategoria.length - 1) {
        renderBlocoCurso(cursoAtualIndex + 1);
    }

    // Navega para o último curso
    if (btn.id === "last-course") {
        renderBlocoCurso(datasetCategoria.length - 1);
    }
});

// ⛔ =============== The End =============== ⛔

// ❎ ======== Limpeza Global do DOM ======== ❎

// Função para limpar todos os modos de visualização de cursos
function limparTodosOsModos() {
    // Seleciona todos os containers de cursos
    const block = document.getElementById("course-block");
    const flow  = document.getElementById("courses-flow");
    const list  = document.getElementById("courses-container");
    const grid  = document.getElementById("courses-grid");

    // Adiciona a classe 'hidden' ao modo bloco
    if (block) {
        block.classList.add("hidden");
    }

    // Adiciona a classe 'hidden' ao modo fluxo e limpa o conteúdo
    if (flow) {
        flow.classList.add("hidden");
        flow.innerHTML = "";
    }

    // Adiciona a classe 'hidden' ao modo lista e limpa o conteúdo
    if (list) {
        list.classList.add("hidden");
        list.innerHTML = "";
    }

    // Adiciona a classe 'hidden' ao modo grid e limpa o conteúdo
    if (grid) {
        grid.classList.add("hidden");
        grid.innerHTML = "";
    }
}

// ⛔ =============== The End =============== ⛔

//🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷

// ❎ ===== Atualizar Estado dos Ícones ===== ❎

// Função para atualizar o estado dos botões de visualização de cursos
function atualizarBotoesDeVisualizacao(modoAtivo) {
    // Seleciona todos os botões de visualização
    const buttons = document.querySelectorAll(".view-btn");

    // Itera sobre cada botão para atualizar sua aparência e acessibilidade
    buttons.forEach(btn => {
        if (btn.dataset.view === modoAtivo) {
            // Marca o botão correspondente como ativo e desabilita para acessibilidade
            btn.classList.add("active");
            btn.setAttribute("aria-disabled", "true");
        } else {
            // Remove o estado ativo dos outros botões
            btn.classList.remove("active");
            btn.removeAttribute("aria-disabled");
        }
    });

    // 🛡️ Proteção: atualiza tooltips se a função existir
    if (typeof atualizarTooltipsViewMode === "function") {
        atualizarTooltipsViewMode(modoAtivo);
    }
}

// ⛔ =============== The End =============== ⛔

// Listener para limpar dados de visualização de cursos antes de sair da página
window.addEventListener("beforeunload", () => {
    // Remove o modo de visualização salvo
    localStorage.removeItem("coursesViewMode");

    // Remove o índice do curso em bloco salvo
    localStorage.removeItem("blockCourseIndex");
});

// Inicialização segura dos cursos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o usuário já visitou a seção de cursos nesta sessão
    const alreadyVisited = sessionStorage.getItem("coursesVisited");

    if (!alreadyVisited) {
        // Se for a primeira visita, limpa dados antigos de visualização
        localStorage.removeItem("coursesViewMode");
        localStorage.removeItem("blockCourseIndex");

        // Marca a sessão como visitada
        sessionStorage.setItem("coursesVisited", "true");
    }

    // Inicia os cursos com proteções e inicializações necessárias
    iniciarCursosComSeguranca();
});

// ❎ ==== Alternar Modo de Visualização ==== ❎

// Função para trocar o modo de visualização de cursos
function trocarModo(mode) {
    // Se não for o modo 'bloco', rola a página para o topo instantaneamente
    if (mode !== "block") {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    // Chama a função que aplica o modo de visualização selecionado
    setViewMode(mode);
}

// ⛔ =============== The End =============== ⛔

// ❎ ====== Abrir Curso no Block Mode ====== ❎

// Listener global para abrir um curso em modo 'bloco' ao clicar em item de lista ou grid
document.addEventListener("click", (event) => {
    // Detecta se o clique foi em um item de lista ou grid
    const item = event.target.closest(
        ".course-list-item, .course-grid-item"
    );
    if (!item) return; // Encerra se não for um item relevante

    // Obtém o índice do curso a partir do atributo data-index
    const index = parseInt(item.dataset.index, 10);
    if (!Number.isInteger(index)) return; // Encerra se o índice não for válido

    // Salva o índice do curso atual no localStorage
    localStorage.setItem("blockCourseIndex", index);

    // Troca para o modo 'bloco' e renderiza o curso selecionado
    setViewMode("block");
    renderBlocoCurso(index);
});

// ⛔ =============== The End =============== ⛔

// Função para copiar o código do certificado para a área de transferência
function copiarCodigo(codigo, btn) {
    // Tenta escrever o código no clipboard
    navigator.clipboard.writeText(codigo)
        .then(() => {
            if (!btn) return;

            // Guarda o label original do botão
            const labelOriginal = btn.getAttribute("aria-label") || "Copiar Código";

            // Atualiza o label para feedback de sucesso
            btn.setAttribute("aria-label", "Código Copiado");

            // Força reflow para garantir a atualização visual
            btn.offsetHeight;

            // Restaura o label original após 8 segundos
            setTimeout(() => {
                btn.setAttribute("aria-label", labelOriginal);
            }, 8000);
        })
        .catch(err => console.error("Erro ao copiar: ", err));
}

// Função para atualizar os tooltips (aria-labels) dos botões de modos de visualização
function atualizarTooltipsViewMode(modoAtivo) {
    // Seleciona todos os botões de visualização dentro do controle
    const buttons = document.querySelectorAll("#view-mode-controls .view-btn");

    // Itera sobre cada botão para atualizar o tooltip
    buttons.forEach(btn => {
        const modo = btn.dataset.view;
        if (!modo) return; // Encerra se não houver modo definido

        // Formata o nome do modo com primeira letra maiúscula
        const nomeModo = modo.charAt(0).toUpperCase() + modo.slice(1);

        if (modo === modoAtivo) {
            // Atualiza tooltip para indicar que o modo está ativo
            btn.setAttribute(
                "aria-label",
                `Modo de Visualização ${nomeModo} (Ativo)`
            );
        } else {
            // Atualiza tooltip para indicar que o modo pode ser ativado
            btn.setAttribute(
                "aria-label",
                `Modo de Visualização ${nomeModo} (Ativar)`
            );
        }
    });
}

// Função para iniciar a visualização dos cursos com segurança, aguardando dataset carregado
function iniciarCursosComSeguranca(tentativas = 0) {
    // Verifica se o dataset de cursos está disponível e não vazio
    if (!Array.isArray(datasetCategoria) || datasetCategoria.length === 0) {
        // Tenta novamente até 20 vezes, com delay de 50ms entre tentativas
        if (tentativas < 20) {
            setTimeout(() => iniciarCursosComSeguranca(tentativas + 1), 50);
        }
        return; // Encerra se não houver dados
    }

    // Recupera o modo de visualização salvo ou define como 'block' por padrão
    const savedMode = localStorage.getItem("coursesViewMode") || "block";
    setViewMode(savedMode);

    // Se o modo salvo for 'block', recupera o índice salvo e renderiza o curso correspondente
    if (savedMode === "block") {
        const savedIndex =
            parseInt(localStorage.getItem("blockCourseIndex"), 10) || 0;
        renderBlocoCurso(savedIndex);
    }
}
