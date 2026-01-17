export const UI_STATE = {
  HOME: "home",
  PORTFOLIO: "portfolio"
};

let currentState = UI_STATE.HOME;

export function getUIState() {
  return currentState;
}

export function setUIState(newState) {
  currentState = newState;
  document.body.setAttribute("data-ui-state", newState);
}
