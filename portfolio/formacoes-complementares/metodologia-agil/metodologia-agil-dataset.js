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
    id: 7,

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2025.11.14 · VMEdu, Inc · Scrum Fundamentals Certified.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "VMEdu, Inc",
    curso: "Scrum Fundamentals Certified",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-14",
    dataConclusao: "14 de novembro de 2025",
    codigo: "1126415",
    mostrarCopiar: false,
    verificacao: {
      url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RogérioClyntonRibeiro-1126415.pdf",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2025.11.12 · VMEdu, Inc · Kanban Essentials with Artificial Intelligence Certified.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "VMEdu, Inc",
    curso: "Kanban Essentials with Artificial Intelligence Certified",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-12",
    dataConclusao: "12 de novembro de 2025",
    codigo: "1125359",
    mostrarCopiar: false,
    verificacao: {
      url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/KanbanEssentialswithAICertified-RogérioClyntonRibeiro-1125359.pdf",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2025.11.12 · VMEdu, Inc · OKR Fundamentals with Artificial Intelligence Certified.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "VMEdu, Inc",
    curso: "OKR Fundamentals with Artificial Intelligence Certified",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-12",
    dataConclusao: "12 de novembro de 2025",
    codigo: "1125355",
    mostrarCopiar: false,
    verificacao: {
      url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/OKRFundamentalswithAICertified-RogérioClyntonRibeiro-1125355.pdf",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2025.09.21 · Instituto Federal Rio Grande do Sul · Scrum (Gerenciando Projetos de Software com Agilidade).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Scrum: Gerenciando Projetos de Software com Agilidade",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-09-21",
    dataConclusao: "21 de setembro de 2025",
    codigo: "68d02fb4-9efc-409b-b42e-dffc0aa8006f",
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
    id: 3,

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2025.03.24 · Qulture Rocks · OKRs · Da Missão à Ação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Qulture Rocks",
    curso: "OKRs: Da Missão à Ação",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-03-24",
    dataConclusao: "24 de março de 2025",
    codigo: "cert_pcnfcb09",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2024.10.04 · FM2S · OKR - Objectives and Key Results.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FM2S Educação e Consultoria",
    curso: "OKR - Objectives and Key Results",
    cargaHoraria: "5 h",
    conclusaoISO: "2024-10-04",
    dataConclusao: "04 de outubro de 2024",
    codigo: "c5e02459600e00f748d0eb826b90241200081502",
    mostrarCopiar: false,
    verificacao: {
      url: "https://ead.fm2s.com.br/verify/c5e02459600e00f748d0eb826b90241200081502",
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
    id: 1,

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2024.10.02 · FM2S · Método Kanban.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FM2S Educação e Consultoria",
    curso: "Método Kanban",
    cargaHoraria: "12 h",
    conclusaoISO: "2024-10-02",
    dataConclusao: "02 de outubro de 2024",
    codigo: "Y2VydGlmaWNhdGVfNDI3MDIyXzEwMDE%3D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://ead.fm2s.com.br/verify/Y2VydGlmaWNhdGVfNDI3MDIyXzEwMDE%3D",
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
