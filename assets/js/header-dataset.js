/**
 * Dataset de estados do Header
 * Responsável apenas por DESCREVER como o header deve se apresentar
 * em cada contexto da aplicação.
 *
 * Nenhuma lógica de animação ou DOM deve ficar aqui.
 */

const headerDataset = {
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
    onNameClick: null, // não muda estado
    targetHeader: "portfolio", // botão Portfólio leva para lá

    // Classe / estado visual
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

    // Classe / estado visual
    headerClass: "header-portfolio"
  }
};

export default headerDataset;
