document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="header-home-exit"]');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const headerHome = document.querySelector(".header-home");
    if (!headerHome) return;

    headerHome.classList.remove("header-enter", "header-pre-enter");
    headerHome.classList.add("header-exit");
  },
  true // 👈 captura, igual você já faz em outros pontos
);

document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="header-portfolio-enter"]');
    if (!btn) return;

    const headerPortfolio = document.querySelector(".header-portfolio");
    if (!headerPortfolio) return;

    e.preventDefault();
    e.stopPropagation();

    // garante estado limpo
    headerPortfolio.classList.remove(
      "header-exit",
      "header-enter"
    );

    // prepara pré-entrada
    headerPortfolio.classList.add("header-pre-enter");

    // força reflow
    headerPortfolio.offsetHeight;

    // dispara entrada
    requestAnimationFrame(() => {
      headerPortfolio.classList.remove("header-pre-enter");
      headerPortfolio.classList.add("header-enter");
    });
  },
  true // captura, padrão já adotado por vocês
);

document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="open-portfolio"]');
    if (!btn) return;

    const headerHome = document.querySelector(".header-home");
    const headerPortfolio = document.querySelector(".header-portfolio");

    if (!headerHome || !headerPortfolio) return;

    e.preventDefault();
    e.stopPropagation();

    /* =========================
       1️⃣ SAÍDA HEADER HOME
    ========================= */

    headerHome.classList.remove("header-enter");
    headerHome.classList.add("header-exit");

    /* =========================
       2️⃣ ENTRADA HEADER PORTFÓLIO
    ========================= */

    setTimeout(() => {
      // limpa estados antigos
      headerPortfolio.classList.remove("header-exit", "header-enter");

      // prepara pré-entrada
      headerPortfolio.classList.add("header-pre-enter");

      // força reflow
      headerPortfolio.offsetHeight;

      // dispara entrada
      requestAnimationFrame(() => {
        headerPortfolio.classList.remove("header-pre-enter");
        headerPortfolio.classList.add("header-enter");
      });
    }, 400); // mesmo tempo da saída do Home
  },
  true
);

document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="header-home-enter"]');
    if (!btn) return;

    const headerHome = document.querySelector(".header-home");
    if (!headerHome) return;

    e.preventDefault();
    e.stopPropagation();

    // 🔹 1️⃣ Limpa todos os estados antigos
    headerHome.classList.remove(
      "header-exit",
      "header-enter",
      "header-pre-enter",
      "is-hidden"
    );

    // 🔹 2️⃣ Garante que o headerHome está visível
    headerHome.classList.add("is-visible");

    // 🔹 3️⃣ Prepara pré-entrada
    headerHome.classList.add("header-pre-enter");

    // 🔹 4️⃣ Força reflow
    headerHome.offsetHeight;

    // 🔹 5️⃣ Dispara entrada
    requestAnimationFrame(() => {
      headerHome.classList.remove("header-pre-enter");
      headerHome.classList.add("header-enter");
    });
  },
  true
);

document.addEventListener(
  "click",
  e => {
    const btn = e.target.closest('[data-action="header-portfolio-exit"]');
    if (!btn) return;

    const headerPortfolio = document.querySelector(".header-portfolio");
    if (!headerPortfolio) return;

    e.preventDefault();
    e.stopPropagation();

    // 🔑 NÃO remove header-enter aqui
    headerPortfolio.classList.remove("header-pre-enter");

    // dispara saída a partir do estado visível
    headerPortfolio.classList.add("header-exit");
  },
  true
);
