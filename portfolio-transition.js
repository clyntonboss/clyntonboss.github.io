import { UI_STATE, setUIState, getUIState } from "./ui-state.js";

const btnPortfolio = document.getElementById("btn-portfolio");

if (btnPortfolio) {
  btnPortfolio.addEventListener("click", () => {
    if (getUIState() === UI_STATE.PORTFOLIO) return;

    startPortfolioTransition();
  });
}

function startPortfolioTransition() {
  // 1️⃣ Marca início da saída
  document.body.classList.add("ui-exit");

  // 2️⃣ Aguarda a animação de saída terminar
  const EXIT_DURATION = 600; // ms — deve bater com o CSS

  setTimeout(() => {
    // 3️⃣ Atualiza estado
    setUIState(UI_STATE.PORTFOLIO);

    // 4️⃣ Remove saída e inicia entrada
    document.body.classList.remove("ui-exit");
    document.body.classList.add("ui-enter");

    // 5️⃣ Limpa classe de entrada após animação
    const ENTER_DURATION = 600;

    setTimeout(() => {
      document.body.classList.remove("ui-enter");
    }, ENTER_DURATION);

  }, EXIT_DURATION);
}
