/**
 * 📄 Dataset de Categoria (Cursos ou Projetos)
 *
 * Este arquivo define `window.datasetCategoria`, um array de objetos que representam
 * os itens (cursos ou projetos) de uma categoria específica do portfólio.
 *
 * Cada objeto possui as propriedades abaixo, organizadas para uso dinâmico no
 * portfolio-sections.js e formacoes-complementares.js:
 *
 * ──────────────────────────────────────────────
 * Propriedades principais:
 * 
 * id                 → Número único identificador do item
 * thumb              → Caminho da imagem/thumbnail do curso ou projeto
 * nomeInstituicao    → Label para exibição da instituição
 * instituicao        → Nome da instituição
 * nomeCurso          → Label para exibição do nome do curso
 * curso              → Nome do curso
 * nomeCargaHoraria   → Label para exibição da carga horária
 * cargaHoraria       → Duração do curso (ex.: "2 h", "40 h")
 * nomeDataConclusao  → Label para exibição da data de conclusão
 * dataConclusao      → Data legível da conclusão (ex.: "21 de outubro de 2025")
 * conclusaoISO       → Data no formato ISO (ex.: "2025-10-21")
 * nomeCodigo         → Label para exibição do código (ex.: certificado)
 * codigo             → Código ou referência do item
 * nomeVerificacao    → Label para exibição do link de verificação
 * verificacao        → URL de verificação ou null
 * mostrarCopiar      → Booleano, indica se botão de copiar código deve ser exibido
 *
 * Propriedades adicionais (opcionais, uso interno):
 * nomeTitulo         → Label do título do projeto/curso
 * nomePeriodo        → Label do período de realização
 * nomeDuracao        → Label da duração
 * nomeStackTecnica   → Label da stack técnica
 * titulo             → Título do projeto/curso
 * periodo            → Período de realização
 * duracao            → Duração detalhada
 * stackTecnica       → Tecnologias ou competências aplicadas
 * projetoInterativo  → URL de projeto interativo (opcional)
 * descricaoProjeto   → Descrição detalhada do projeto/curso
 *
 * ──────────────────────────────────────────────
 * Observações:
 * - Este dataset é carregado dinamicamente via `loadCategoryDataset()`.
 * - Não deve conter lógica ou manipulação DOM; apenas dados estruturados.
 * - Ideal para manter consistência entre categorias, cursos e projetos.
 * - Facilita manutenção, atualização de conteúdo e integração com view modes.
 */

window.datasetCategoria = [
  {
    id: 47,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Formação SQL Database Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação SQL Database Specialist",
    cargaHoraria: "72 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "Y3WHVKUD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Y3WHVKUD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 46,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Transações & Gerenciamento de Banco de Dados com no MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transações & Gerenciamento de Banco de Dados com no MySQL",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "4V66CP7W",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4V66CP7W.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 45,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Avalie a Formação SQL Database Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação SQL Database Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "GH1F88AG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GH1F88AG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 44,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares - Trabalhando com Transações, Controle de Concorrência e Técnicas de Recuperação de Banco de dados no MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Transações & Gerenciamento de Banco de Dados com no MySQL",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "453S5FEQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/453S5FEQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 43,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Criando Transações Executando Backup e Recovery de Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Transações Executando Backup e Recovery de Banco de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "S7XDF2RM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/S7XDF2RM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 42,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Técnicas de Recuperação em Dados de Banco de Dados com MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Técnicas de Recuperação em Dados de Banco de Dados com MySQL",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "NUULYVNC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NUULYVNC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 41,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Controle de Concorrência em Banco de Dados com MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Controle de Concorrência em Banco de Dados com MySQL",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "QBDZGENI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QBDZGENI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 40,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Transações de Banco de Dados com MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transações de Banco de Dados com MySQL",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "JOTY9EO2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JOTY9EO2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 39,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Técnicas Avançadas em Banco de Dados com MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Técnicas Avançadas em Banco de Dados com MySQL",
    cargaHoraria: "17 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "CSGRWBCC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CSGRWBCC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 38,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · O Mapa de Sucesso para a Carreira de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "O Mapa de Sucesso para a Carreira de Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "SG12UBHF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SG12UBHF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 37,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares - Técnicas Avançadas de Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares -Técnicas Avançadas de Banco de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "J8VUDD98",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J8VUDD98.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 36,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Personalizando Acessos e Automatizando Ações no MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Personalizando Acessos e Automatizando Ações no MySQL",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "WJHHCQSG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WJHHCQSG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 35,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Personalizando o Banco de Dados com Índices e Procedures.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Personalizando o Banco de Dados com Índices e Procedures",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "RRUGS8CF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RRUGS8CF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 34,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Normalização em Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Normalização em Banco de Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "JHGX65BV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JHGX65BV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 33,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Fundamentos de Indexação em SGBDs com MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Indexação em SGBDs com MySQL",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "XTKZGTVH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XTKZGTVH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 32,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Overview sobre Automatização de Ações com Triggers no MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Overview sobre Automatização de Ações com Triggers no MySQL",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "78CGVK2G",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/78CGVK2G.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 31,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Explorando Lógica de Programação com SQL Dinâmico.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Lógica de Programação com SQL Dinâmico",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "KDV3S1UT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KDV3S1UT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 30,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Explorando Cláusulas de DDL e Esquemas de Banco de Dados no MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Cláusulas de DDL e Esquemas de Banco de Dados no MySQL",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "LZ6CPD3M",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LZ6CPD3M.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 29,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Personalizando Acessos com Views.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Personalizando Acessos com Views",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "VJGLFWPA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VJGLFWPA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 28,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Explorando a Linguagem de Consulta a Banco de Dados SQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando a Linguagem de Consulta a Banco de Dados SQL",
    cargaHoraria: "21 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "N7ZSUKAD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/N7ZSUKAD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 27,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares - Explorando a Linguagem de Consulta à Banco de Dados SQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Explorando a Linguagem de Consulta à Banco de Dados SQL",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "HFVHB7TM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HFVHB7TM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 26,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Modelo de Entidade Relacional com Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelo de Entidade Relacional com Banco de Dados",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "ND4CMW0M",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ND4CMW0M.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 25,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares - Modelagem de BD com Modelo Entidade e Relacionamento.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Modelagem de BD com Modelo Entidade e Relacionamento",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "TOCLNN3Q",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TOCLNN3Q.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 24,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Fundamentos de Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Banco de Dados",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "HFMULERY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HFMULERY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 23,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares - Fundamentos de Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Fundamentos de Banco de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "H7VEYCQS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H7VEYCQS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },

  {
    id: 22,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2026.02.26 · Vico Digital [Vico Treinamentos e Tecnologia LTDA] · SQL para Analistas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Vico Digital [Vico Treinamentos e Tecnologia LTDA]",
    curso: "SQL para Analistas",
    cargaHoraria: "7 h 40 min",
    conclusaoISO: "2026-02-26",
    dataConclusao: "26 de fevereiro de 2026",
    codigo: "eu9isb",
    mostrarCopiar: false,
    verificacao: {
      url: "https://vicotreinamentos.eadplataforma.app/certificate/view/eu9isb/2026-02-26",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 21,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.11.21 · Instituto Federal Rio Grande do Sul · Administrador de Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Administrador de Banco de Dados",
    cargaHoraria: "200 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "6920eba3-52ac-4d36-963c-cbe00aa81311",
    mostrarCopiar: true,
    verificacao: {
      url: "https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 20,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.13 · Cursa · SQL Server.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "SQL Server",
    cargaHoraria: "9 h",
    conclusaoISO: "2025-10-13",
    dataConclusao: "13 de outubro de 2025",
    codigo: "314a9531d2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/314a9531d2",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 19,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.13 · Cursa · Modelagem de Banco de Dados Relacionais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Modelagem de Banco de Dados Relacionais",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-10-13",
    dataConclusao: "13 de outubro de 2025",
    codigo: "55d1d706c2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/55d1d706c2",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 18,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.12 · Cursa · PostgreSQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "PostgreSQL",
    cargaHoraria: "11 h",
    conclusaoISO: "2025-10-12",
    dataConclusao: "12 de outubro de 2025",
    codigo: "e22abddbae",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/e22abddbae",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 17,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.12 · Instituto Federal Rio Grande do Sul · Banco de Dados (Oracle PL·SQL).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Banco de Dados: Oracle PL/SQL",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-12",
    dataConclusao: "12 de outubro de 2025",
    codigo: "68eb21ed-c064-4bcc-b743-35e40aa80e10",
    mostrarCopiar: true,
    verificacao: {
      url: "https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 16,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.11 · Cursa · Firebird (SQL).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Firebird (SQL)",
    cargaHoraria: "12 h",
    conclusaoISO: "2025-10-11",
    dataConclusao: "11 de outubro de 2025",
    codigo: "2d594c2dc0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/2d594c2dc0",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 15,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.10.10 · Instituto Federal Rio Grande do Sul · Banco de Dados 1 (Fundamentos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Banco de Dados 1: Fundamentos",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-10",
    dataConclusao: "10 de outubro de 2025",
    codigo: "68e97ba3-baa4-46e9-bf6a-30580aa8010c",
    mostrarCopiar: true,
    verificacao: {
      url: "https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 14,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.09.29 · Aprenda Mais · Banco de Dados 1 (Fundamentos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aprenda Mais",
    curso: "Banco de Dados 1: Fundamentos",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-09-29",
    dataConclusao: "29 de setembro de 2025",
    codigo: "68daf634-daa0-4b41-80b2-0d20ac1f0292",
    mostrarCopiar: true,
    verificacao: {
      url: "https://aprendamais.mec.gov.br/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 13,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.08.14 · Cursa · Estrutura de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Estrutura de Dados",
    cargaHoraria: "27 h",
    conclusaoISO: "2025-08-14",
    dataConclusao: "14 de agosto de 2025",
    codigo: "ab7e82f739",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/ab7e82f739",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 12,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.04.06 · Xperiun · Data Analytics · Minicurso de SQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Xperiun | Data Analytics",
    curso: "SQL",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-04-06",
    dataConclusao: "06 de abril de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: null,

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 11,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.04.05 · Unieducar · PHP·MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Unieducar",
    curso: "PHP/MySQL",
    cargaHoraria: "4 h",
    conclusaoISO: "2025-04-05",
    dataConclusao: "05 de abril de 2024",
    codigo: "202504053720346.1743884228",
    mostrarCopiar: false,
    verificacao: {
      url: "https://unieducar.org.br/consultar-certificado?numero_certificado=202504053720346.1743884228",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 10,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.03.29 · Instituto Federal Sul-Rio-Grandense · Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Banco de Dados",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-03-29",
    dataConclusao: "29 de março de 2025",
    codigo: "67e81c1a-8a6c-4918-b74a-69430a00c840",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mundi.ifsul.edu.br/ava/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 9,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2025.03.21 · Instituto Federal Espírito Santo · Introdução a NoSQL com MongoDB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Espírito Santo",
    curso: "Introdução a NoSQL com MongoDB",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-03-21",
    dataConclusao: "21 de março de 2025",
    codigo: "67dda60b-61b8-401e-aee5-25f0ac1a2c09",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mooc.cefor.ifes.edu.br/moodle/mod/simplecertificate/verify.php",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 8,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.11.11 · Cursa · Banco de Dados com PostgreSQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Banco de Dados com PostgreSQL",
    cargaHoraria: "7 h",
    conclusaoISO: "2024-11-11",
    dataConclusao: "11 de novembro de 2024",
    codigo: "395ef1823a",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/395ef1823a",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 7,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.11.09 · Unieducar · PHP·MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Unieducar",
    curso: "PHP/MySQL",
    cargaHoraria: "4 h",
    conclusaoISO: "2024-11-09",
    dataConclusao: "09 de novembro de 2024",
    codigo: "202411093657557.1731146220",
    mostrarCopiar: false,
    verificacao: {
      url: "https://unieducar.org.br/consultar-certificado?numero_certificado=202411093657557.1731146220",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 6,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.11.09 · Cursa · MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "MySQL",
    cargaHoraria: "14 h",
    conclusaoISO: "2024-11-09",
    dataConclusao: "09 de novembro de 2024",
    codigo: "279c8cdffe",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/279c8cdffe",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 5,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.11.04 · Cursa · Oracle Database do Zero ao Avançado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Oracle Database do Zero ao Avançado",
    cargaHoraria: "9 h",
    conclusaoISO: "2024-11-04",
    dataConclusao: "04 de novembro de 2024",
    codigo: "093a041fa3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/093a041fa3",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 4,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.10.21 · Escola de Inteligência Artificial · Introdução a Bancos de Dados e Linguagem SQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",
 
    instituicao: "Escola de Inteligência Artificial",
    curso: "Introdução a Bancos de Dados e Linguagem SQL",
    cargaHoraria: "7 h",
    conclusaoISO: "2024-10-21",
    dataConclusao: "21 de outubro de 2024",
    codigo: "qEjIxm7B",
    mostrarCopiar: false,
    verificacao: null,

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 3,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.10.17 · Escola de Inteligência Artificial · Introdução ao MongoDB · Fácil e Simples!.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola de Inteligência Artificial",
    curso: "Introdução ao MongoDB: Fácil e Simples!",
    cargaHoraria: "5 h",
    conclusaoISO: "2024-10-17",
    dataConclusao: "17 de outubro de 2024",
    codigo: "x60COYRo",
    mostrarCopiar: false,
    verificacao: null,

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 2,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.10.17 · Cursa · MySQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "MySQL",
    cargaHoraria: "7 h 51 min",
    conclusaoISO: "2024-10-17",
    dataConclusao: "17 de outubro de 2024",
    codigo: "u5153989",
    mostrarCopiar: false,
    verificacao: null,

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  },
  
  {
    id: 1,

    thumb: "/portfolio/formacoes-complementares/banco-de-dados/certificados/2024.10.05 · Fundação Bradesco · Administrando Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Administrando Banco de Dados",
    cargaHoraria: "15 h",
    conclusaoISO: "2024-10-05",
    dataConclusao: "05 de outubro de 2024",
    codigo: "7509592B-143A-4419-8F0A-AC1CCE0B26E2",
    mostrarCopiar: true,
    verificacao: {
      url: "https://www.ev.org.br/validar-certificado/",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: "",
    descricaoProjeto: ""
  }
];
