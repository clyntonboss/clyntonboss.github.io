// ==================== FUNÇÃO GLOBAL: ABRIR CERTIFICADO ====================
function abrirCertificado(url) {
  const largura = screen.availWidth;
  const altura = screen.availHeight;

  const janela = window.open(
    '/assets/utils/certificado.html?img=' + encodeURIComponent(url),
    'Certificado',
    `width=${largura},height=${altura},top=0,left=0,resizable=yes,menubar=no,toolbar=no,location=no,status=no,fullscreen=yes`
  );

  if (janela) {
    janela.focus();
  } else {
    alert("Por favor, permita pop-ups para este site.");
  }
}

// ==================== FUNÇÃO GLOBAL: ABRIR ARTIGO ====================
function abrirArtigo(url) {
    const largura = screen.width;
    const altura = screen.height;
    const janela = window.open(
        '/assets/utils/artigo.html?file=' + encodeURIComponent(url),
        'Artigo',
        `width=${largura},height=${altura},top=0,left=0,menubar=no,toolbar=no,location=no,status=no,resizable=no`
    );
    if (janela) janela.focus();
    else alert("Por favor, permita pop-ups para este site.");
}

// ==================== Módulo Fade-in ====================
function initFadeIn() {
    const items = document.querySelectorAll('.fade-item');

    items.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 150);
    });

    // Slide-in da foto no cabeçalho
    const headerPhoto = document.querySelector('.header-photo');
    if (headerPhoto) {
        setTimeout(() => {
            headerPhoto.classList.add('visible');
        }, 100);
    }

    // Slide-in do nome no cabeçalho
    const headerName = document.querySelector('.header-name');
    if (headerName) {
        setTimeout(() => {
            headerName.classList.add('visible');
        }, 100);
    }

    // Slide-in da data no cabeçalho
    const lastUpdate = document.querySelector('.last-update');
    if (lastUpdate) {
        setTimeout(() => {
            lastUpdate.classList.add('visible');
        }, 200);
    }
}

// ==================== Módulo Expand/Toggle ====================
function initToggle() {
    const toggles = document.querySelectorAll('.exp-toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const details = btn.parentElement.nextElementSibling;
            const isOpen = details.style.maxHeight && details.style.maxHeight !== '0px';

            toggles.forEach(otherBtn => {
                const otherDetails = otherBtn.parentElement.nextElementSibling;
                if (otherDetails !== details) {
                    otherDetails.style.maxHeight = '0';
                    otherBtn.textContent = '+';
                }
            });

            if (isOpen) {
                details.style.maxHeight = '0';
                btn.textContent = '+';
            } else {
                details.style.maxHeight = details.scrollHeight + 'px';
                btn.textContent = '−';
            }
        });
    });
}

// ==================== Módulo Bloqueio Clique Direito ====================
function initBlockRightClick() {
    document.body.addEventListener('contextmenu', e => e.preventDefault());
    document.body.addEventListener('mousedown', e => {
        if (e.button === 2) {
            document.body.style.cursor = 'not-allowed';
            setTimeout(() => document.body.style.cursor = 'default', 500);
        }
    });
}

// ==================== Módulo Organiza Certificados ====================
function initCertificados() {
    const container = document.querySelector('.curriculo-text.fade-item');
    if (!container) return;

    const children = Array.from(container.children);
    let buffer = [];
    let insideGroup = false;

    children.forEach(el => {
        if (el.tagName === 'A') {
            insideGroup = true;
            buffer = [];
        }
        else if (insideGroup && el.tagName === 'DIV') {
            buffer.push(el);
        }
        else if (insideGroup && el.tagName === 'HR') {
            if (buffer.length) {
                const wrapper = document.createElement('div');
                wrapper.className = 'cert-text-margin';
                container.insertBefore(wrapper, buffer[0]);
                buffer.forEach(div => wrapper.appendChild(div));
            }
            insideGroup = false;
            buffer = [];
        }
    });
}

// ==================== Módulo Update Date ====================
function initUpdateDate() {
    const lastUpdateElements = document.querySelectorAll('.last-update');
    const dataAtualizacao = "22 de dezembro de 2025"; // Definir data aqui
    lastUpdateElements.forEach(el => el.textContent = `Última atualização em: ${dataAtualizacao}`);
}

// ==================== Módulo Theme ====================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Aplica tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.classList.add('loaded');

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const icon = document.getElementById("theme-icon");
        if (!icon) return;
        if (theme === "dark") {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }
}

// ==================== Inicialização ====================
document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();
    initToggle();
    initBlockRightClick();
    initCertificados();
    initUpdateDate();
    initTheme();
});
