/**
 * Dataset de estados do Header
 * Responsável apenas por DESCREVER como o header deve se apresentar
 * em cada contexto da aplicação.
 *
 * Este arquivo NÃO é módulo ES.
 * Ele expõe o dataset no escopo global.
 */

window.headerDataset = {
  home: {
    key: "home",

    // Conteúdo
    name: "Rogério Clynton Ribeiro",
    nameIsLink: false,
    nameHref: null,

    showPhoto: false,
    photoSrc: null,
    photoAlt: null,

    showLastUpdate: true,

    // Comportamento
    onNameClick: null,          // clicar no nome não troca estado
    targetHeader: "portfolio", // ação externa pode levar ao portfólio

    // Estado visual
    headerClass: "header-home"
  },

  portfolio: {
    key: "portfolio",

    // Conteúdo
    name: "Rogério Clynton Ribeiro",
    nameIsLink: true,
    nameHref: "/",

    showPhoto: true,
    photoSrc: "../assets/images/foto-rogerio.jpg",
    photoAlt: "Foto de Rogério Clynton Ribeiro",

    showLastUpdate: true,

    // Comportamento
    onNameClick: "home", // clicar no nome volta para Home
    targetHeader: null,

    // Estado visual
    headerClass: "header-portfolio"
  }
};
