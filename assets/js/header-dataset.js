// Dataset global para configuração dos cabeçalhos das páginas
window.headerDataset = {
    // Configurações para a página "home"
    home: {
        showHomeIcon: false,             // Exibe ícone de home no header
        key: "home",                     // Chave de identificação

        name: "Rogério Clynton Ribeiro", // Nome exibido no header
        nameIsLink: false,               // Se o nome é link clicável
        nameHref: null,                  // URL do link, se aplicável

        showPhoto: false,                // Se exibe foto no header
        photoSrc: null,                  // URL da foto
        photoAlt: null,                  // Texto alternativo da foto

        showLastUpdate: true,            // Exibe data da última atualização

        onNameClick: null,               // Função ou seção alvo ao clicar no nome
        targetHeader: "portfolio",       // Header alvo da ação

        showHomeIcon: false,             // Repetição intencional para garantir estado
        headerClass: "header-home"       // Classe CSS do header
    },

    // Configurações para a página "portfolio"
    portfolio: {
        showHomeIcon: true,
        key: "portfolio",

        name: "Rogério Clynton Ribeiro",
        nameIsLink: true,
        nameHref: "#",
        nameSection: "home",

        showPhoto: true,
        photoSrc: "../assets/images/foto-rogerio.jpg",
        photoAlt: "Foto de Rogério Clynton Ribeiro",

        showLastUpdate: true,

        onNameClick: "home",
        targetHeader: null,

        showHomeIcon: true,
        headerClass: "header-portfolio"
    },

    // Configurações para a página "projetos50"
    projetos50: {
        showHomeIcon: true,
        key: "projetos50",

        name: "Rogério Clynton Ribeiro",
        nameIsLink: true,
        nameHref: "#",
        nameSection: "projetos50",

        showPhoto: true,
        photoSrc: "../assets/images/foto-rogerio.jpg",
        photoAlt: "Foto de Rogério Clynton Ribeiro",

        showLastUpdate: true,

        onNameClick: "home",
        targetHeader: null,

        showHomeIcon: true,
        headerClass: "header-portfolio"
    }
};
