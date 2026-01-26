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
    showHomeIcon: false,
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
    showHomeIcon: false, // Home não mostra o ícone
    headerClass: "header-home"
  },

  portfolio: {
    showHomeIcon: true,
    key: "portfolio",

    // Conteúdo
    name: "Rogério Clynton Ribeiro",
    nameIsLink: true,
    nameHref: "#",
    nameSection: "home", // 👈 link “Portfólio” aponta para Home

    showPhoto: true,
    photoSrc: "../assets/images/foto-rogerio.jpg",
    photoAlt: "Foto de Rogério Clynton Ribeiro",

    showLastUpdate: true,

    // Comportamento
    onNameClick: "home", // clicar no nome volta para Home
    targetHeader: null,

    // Estado visual
    showHomeIcon: true, // Portfólio mostra o ícone
    headerClass: "header-portfolio"
  }
};
