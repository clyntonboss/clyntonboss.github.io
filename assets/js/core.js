// Adiciona a classe "js-ready" ao elemento <html> do documento
// Isso geralmente é usado para indicar que o JavaScript foi carregado e está ativo,
// permitindo que estilos CSS ou outros scripts reajam a essa condição.

document.documentElement.classList.add("js-ready");

// ================================ Função Global: Abrir Certificado ================================

// Função para abrir um certificado em uma nova janela/pop-up
function abrirCertificado(url) {
  // Captura a largura e altura disponíveis da tela do usuário
  const largura = screen.availWidth;
  const altura = screen.availHeight;

  // Abre uma nova janela apontando para o arquivo 'certificado.html' passando a URL da imagem como parâmetro
  // A janela é configurada para ocupar toda a tela disponível, ser redimensionável, sem menus e barras de ferramentas
  const janela = window.open(
    '/assets/utils/certificado.html?img=' + encodeURIComponent(url),
    'Certificado',
    `width=${largura},height=${altura},top=0,left=0,resizable=yes,menubar=no,toolbar=no,location=no,status=no,fullscreen=yes`
  );

  // Verifica se a janela foi aberta com sucesso
  if (janela) {
    // Coloca o foco na nova janela
    janela.focus();

    // Remove o foco do elemento ativo na janela principal, se houver
    if (document.activeElement) {
      document.activeElement.blur();
    }
  } else {
    // Caso o pop-up seja bloqueado, exibe alerta solicitando permissão
    alert("Por favor, permita pop-ups para este site.");
  }
}

// =================================== Função Global: Abrir Artigo ==================================

// Função para abrir um artigo em uma nova janela/pop-up
function abrirArtigo(url) {
    // Captura a largura e altura totais da tela do usuário
    const largura = screen.width;
    const altura = screen.height;

    // Abre uma nova janela apontando para o arquivo 'artigo.html', passando a URL do arquivo como parâmetro
    // A janela é configurada para ocupar toda a tela, sem menus ou barras de ferramentas e não redimensionável
    const janela = window.open(
        '/assets/utils/artigo.html?file=' + encodeURIComponent(url),
        'Artigo',
        `width=${largura},height=${altura},top=0,left=0,menubar=no,toolbar=no,location=no,status=no,resizable=no`
    );

    // Verifica se a janela foi aberta com sucesso
    if (janela) 
        // Coloca o foco na nova janela
        janela.focus();
    else 
        // Caso o pop-up seja bloqueado, exibe alerta solicitando permissão
        alert("Por favor, permita pop-ups para este site.");
}

// ==================== Módulo Fade-in ====================

// Função para inicializar o efeito de fade-in em elementos da página
function initFadeIn() {
    // Seleciona todos os elementos que devem receber o efeito de fade-in
    const items = document.querySelectorAll('.fade-item');

    // Aplica a classe 'visible' em cada item com um atraso incremental
    // Isso cria o efeito de entrada sequencial dos elementos
    items.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 150); // atraso de 150ms entre cada item
    });

    // Seleciona a foto do cabeçalho e aplica o fade-in com atraso de 100ms
    const headerPhoto = document.querySelector('.header-photo');
    if (headerPhoto) {
        setTimeout(() => {
            headerPhoto.classList.add('visible');
        }, 100);
    }

    // Seleciona o nome do cabeçalho e aplica o fade-in com atraso de 100ms
    const headerName = document.querySelector('.header-name');
    if (headerName) {
        setTimeout(() => {
            headerName.classList.add('visible');
        }, 100);
    }

    // Seleciona o elemento que mostra a última atualização e aplica o fade-in com atraso de 200ms
    const lastUpdate = document.querySelector('.last-update');
    if (lastUpdate) {
        setTimeout(() => {
            lastUpdate.classList.add('visible');
        }, 200);
    }
}

// ==================== Módulo Expand/Toggle ====================

// Função para inicializar o comportamento de toggle (expandir/recolher) em seções de experiência
function initToggle() {
    // Seleciona todos os botões de toggle com a classe 'exp-toggle'
    const toggles = document.querySelectorAll('.exp-toggle');
  
    // Itera sobre cada botão de toggle
    toggles.forEach(btn => {

        // Obtém o elemento pai do botão, que é o cabeçalho da seção
        const header = btn.parentElement;

        // Permite que um clique no cabeçalho também acione o botão de toggle
        header.addEventListener('click', () => btn.click());

        // Evento de clique no próprio botão de toggle
        btn.addEventListener('click', (e) => {

            // Evita que o clique se propague para elementos pai
            e.stopPropagation();

            // Seleciona o elemento de detalhes que será expandido/recolhido
            const details = btn.parentElement.nextElementSibling;

            // Verifica se a seção já está aberta
            const isOpen = details.style.maxHeight && details.style.maxHeight !== '0px';

            // Fecha todas as outras seções que não são a atual
            toggles.forEach(otherBtn => {
                const otherDetails = otherBtn.parentElement.nextElementSibling;
                const otherHeader = otherBtn.parentElement;

                if (otherDetails !== details) {
                    otherDetails.style.maxHeight = '0';
                    otherDetails.classList.remove('open');
                    otherHeader.classList.remove('open');
                }
            });

            // Alterna o estado da seção atual
            if (isOpen) {
                // Se estava aberta, recolhe
                details.style.maxHeight = '0';
                details.classList.remove('open');
                header.classList.remove('open');
            } else {
                // Se estava fechada, expande com altura automática
                details.style.maxHeight = details.scrollHeight + 'px';
                details.classList.add('open');
                header.classList.add('open');
            }
        });
    });
}

// ==================== Módulo Bloqueio Clique Direito ====================

// Função para bloquear o clique com o botão direito do mouse na página
function initBlockRightClick() {
    // Previne o menu de contexto padrão ao clicar com o botão direito
    document.body.addEventListener('contextmenu', e => e.preventDefault());

    // Detecta quando o botão do mouse é pressionado
    document.body.addEventListener('mousedown', e => {
        // Verifica se o botão pressionado é o direito (2)
        if (e.button === 2) {
            // Altera o cursor para indicar ação proibida
            document.body.style.cursor = 'not-allowed';
            // Retorna o cursor ao padrão após 800ms
            setTimeout(() => document.body.style.cursor = 'default', 800);
        }
    });
}

// ==================== Módulo Organiza Certificados ====================

// Função para organizar elementos de certificados dentro do container do currículo
function initCertificados() {
    // Seleciona o container principal de texto do currículo que possui a classe 'fade-item'
    const container = document.querySelector('.curriculo-text.fade-item');
    if (!container) return; // Se não existir, encerra a função

    // Converte os elementos filhos do container em um array para fácil iteração
    const children = Array.from(container.children);
    let buffer = [];       // Array temporário para armazenar elementos que estarão dentro de um grupo
    let insideGroup = false; // Flag para indicar que estamos dentro de um grupo de certificados

    // Itera sobre cada elemento filho do container
    children.forEach(el => {
        if (el.tagName === 'A') {
            // Quando encontra um link <A>, inicia um novo grupo
            insideGroup = true;
            buffer = [];
        }
        else if (insideGroup && el.tagName === 'DIV') {
            // Quando está dentro de um grupo e encontra um <DIV>, adiciona ao buffer
            buffer.push(el);
        }
        else if (insideGroup && el.tagName === 'HR') {
            // Quando encontra uma linha horizontal <HR>, finaliza o grupo
            if (buffer.length) {
                // Cria um wrapper <div> com a classe 'cert-text-margin'
                const wrapper = document.createElement('div');
                wrapper.className = 'cert-text-margin';
                // Insere o wrapper antes do primeiro elemento do grupo
                container.insertBefore(wrapper, buffer[0]);
                // Move todos os elementos do buffer para dentro do wrapper
                buffer.forEach(div => wrapper.appendChild(div));
            }
            // Reseta a flag e o buffer para o próximo grupo
            insideGroup = false;
            buffer = [];
        }
    });
}

// ==================== Módulo Update Date ====================

// Função para atualizar a data de última atualização em todos os elementos da página
function initUpdateDate() {
    // Seleciona todos os elementos com a classe 'last-update'
    const lastUpdateElements = document.querySelectorAll('.last-update');

    // Define a data de atualização que será exibida
    const dataAtualizacao = "10 de março de 2026"; // Definir data aqui

    // Atualiza o texto de cada elemento selecionado
    lastUpdateElements.forEach(el => 
        el.textContent = `Última atualização em: ${dataAtualizacao}`
    );
}

// ==================== Módulo Theme Home ====================

// Função para inicializar o toggle de tema (claro/escuro) na página inicial
function initThemeHome() {
    // Seleciona o botão de toggle do tema na página inicial
    const themeToggle = document.getElementById("theme-toggle-home");
    if (!themeToggle) return; // Se o botão não existir, encerra a função

    // Recupera o tema salvo no localStorage ou define o padrão como 'light'
    const savedTheme = localStorage.getItem("theme") || "light";

    // Aplica o tema ao atributo 'data-theme' do <html>
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Atualiza o ícone e tooltip do toggle de acordo com o tema atual
    updateIcon(savedTheme);
    updateThemeTooltip(savedTheme);

    // Adiciona classe para indicar que o toggle foi carregado
    themeToggle.classList.add("loaded");

    // Adiciona evento de clique ao toggle de tema
    themeToggle.addEventListener("click", () => {
        // Obtém o tema atual
        const currentTheme = document.documentElement.getAttribute("data-theme");
        // Define o novo tema alternando entre 'dark' e 'light'
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Aplica o novo tema ao <html> e salva no localStorage
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Atualiza o ícone e tooltip para refletir o novo tema
        updateIcon(newTheme);
        updateThemeTooltip(newTheme);
    });

    // Função interna para atualizar o ícone do toggle de tema
    function updateIcon(theme) {
        const icon = document.getElementById("theme-icon-home");
        if (!icon) return;

        if (theme === "dark") {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    // Função interna para atualizar o tooltip (aria-label) do toggle
    function updateThemeTooltip(theme) {
        themeToggle.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Ativar Modo Claro"
                : "Ativar Modo Escuro"
        );
    }
}

// ==================== Módulo Theme Portfolio ====================

// Função para inicializar o toggle de tema (claro/escuro) na página do portfólio
function initThemePortfolio() {
    // Seleciona o botão de toggle do tema na página do portfólio
    const themeToggle = document.getElementById("theme-toggle-portfolio");
    if (!themeToggle) return; // Se o botão não existir, encerra a função

    // Recupera o tema salvo no localStorage ou define o padrão como 'light'
    const savedTheme = localStorage.getItem("theme") || "light";

    // Aplica o tema ao atributo 'data-theme' do <html>
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Atualiza o ícone e tooltip do toggle de acordo com o tema atual
    updateIcon(savedTheme);
    updateThemeTooltip(savedTheme);

    // Adiciona classe para indicar que o toggle foi carregado
    themeToggle.classList.add("loaded");

    // Adiciona evento de clique ao toggle de tema
    themeToggle.addEventListener("click", () => {
        // Obtém o tema atual
        const currentTheme = document.documentElement.getAttribute("data-theme");
        // Define o novo tema alternando entre 'dark' e 'light'
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Aplica o novo tema ao <html> e salva no localStorage
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Atualiza o ícone e tooltip para refletir o novo tema
        updateIcon(newTheme);
        updateThemeTooltip(newTheme);
    });

    // Função interna para atualizar o ícone do toggle de tema
    function updateIcon(theme) {
        const icon = document.getElementById("theme-icon-portfolio");
        if (!icon) return;

        if (theme === "dark") {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    // Função interna para atualizar o tooltip (aria-label) do toggle
    function updateThemeTooltip(theme) {
        themeToggle.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Ativar Modo Claro"
                : "Ativar Modo Escuro"
        );
    }
}

// ==================== Disclosure Sections (controle manual) ====================

// Espera o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // Adiciona um listener de clique para toda a página
    document.addEventListener('click', function (e) {

        // Verifica se o clique foi em um elemento <summary> ou em seus descendentes
        const summary = e.target.closest('summary');
        if (!summary) return;

        // Encontra a seção pai mais próxima com a classe 'project-section'
        const section = summary.closest('.project-section');
        if (!section) return;

        // Previna o comportamento padrão do <summary>
        e.preventDefault();

        // Verifica se a seção já está aberta
        const isOpen = section.hasAttribute('open');

        // 🔎 Encontra o container real do grupo dinamicamente subindo na hierarquia
        let container = section.parentElement;

        while (container && container !== document.body) {
            const sections = container.querySelectorAll('.project-section');
            if (sections.length > 1) break; // Encontra o grupo real
            container = container.parentElement;
        }

        if (!container) return;

        const sections = container.querySelectorAll('.project-section');

        // Fecha todas as seções do grupo
        sections.forEach(other => {
            other.removeAttribute('open');
        });

        // Abre somente a seção clicada se ela não estava aberta
        if (!isOpen) {
            section.setAttribute('open', '');
        }

    });

});

// ==================== Módulo Sync Disclosure com Accordion ====================

// Função para sincronizar o tamanho do acordeon quando se usa <details>/<summary> em seções de projetos
function initSyncDisclosureAccordion() {
    // Seleciona todas as seções com a classe 'project-section'
    document.querySelectorAll('.project-section').forEach(section => {
        // Adiciona um listener para o evento 'toggle' do <details>
        section.addEventListener('toggle', () => {
            // Encontra o container do acordeon mais próximo
            const accordionContent = section.closest('.exp-details');
            if (!accordionContent) return;

            // Recalcula a altura máxima apenas se o acordeon estiver aberto
            if (accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px') {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
}

// ==================== Animação do Rodapé ====================

// Animação do footer ao carregar a página
window.addEventListener("load", () => {
    // Seleciona todos os parágrafos na área esquerda do footer
    const texts = document.querySelectorAll(".footer-left p");
    texts.forEach((p, i) => {
        // Aplica a classe 'show' com atraso incremental para criar efeito de entrada sequencial
        setTimeout(() => {
            p.classList.add("show");
        }, i * 400); // 400ms de delay entre os parágrafos
    });

    // Seleciona todos os ícones dentro dos links do footer
    const icons = document.querySelectorAll(".footer a .footer-icon");
    icons.forEach((icon, i) => {
        // Aplica a classe 'show' com atraso, iniciando após 600ms e incrementando 300ms por ícone
        setTimeout(() => {
            icon.classList.add("show");
        }, 600 + i * 300); // começa depois do texto, 300ms de delay entre ícones
    });
});

// ==================== Inicialização ====================

// Inicializa todas as funções principais assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();                    // Aplica efeito de fade-in nos elementos da página
    initToggle();                    // Inicializa o toggle expandir/recolher das seções
    initBlockRightClick();           // Bloqueia clique direito do mouse na página
    initCertificados();              // Organiza os elementos de certificados no currículo
    initUpdateDate();                // Atualiza a data de última atualização na página
    initThemeHome();                 // Inicializa toggle de tema (claro/escuro) na página inicial
    initThemePortfolio();            // Inicializa toggle de tema (claro/escuro) na página do portfólio
    initSyncDisclosureAccordion();   // Sincroniza altura do acordeon das seções de projetos
});
