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
    id: 4,

    thumb: "/portfolio/formacoes-complementares/idiomas/certificados/2025.07.17 · Hashtag Treinamentos · Jornada Inglês da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inglês da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-07-17",
    dataConclusao: "17 de julho de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inglês+da+Hashtag&dtcf=17%2F07%2F2025&hcf=8",
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

    thumb: "/portfolio/formacoes-complementares/idiomas/certificados/2025.01.09 · Hashtag Treinamentos · Jornada Inglês da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inglês da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-01-09",
    dataConclusao: "09 de janeiro de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inglês+da+Hashtag&dtcf=09%2F01%2F2025&hcf=8",
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
    id: 2,

    thumb: "/portfolio/formacoes-complementares/idiomas/certificados/2024.10.03 · Hashtag Treinamentos · Jornada Inglês da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inglês da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-10-03",
    dataConclusao: "03 de outubro de 2024",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inglês+da+Hashtag&dtcf=03%2F10%2F2024&hcf=8",
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

    thumb: "/portfolio/formacoes-complementares/idiomas/certificados/2024.03.10 · Fluênciassim · Imersão em Inglês.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fluênciassim",
    curso: "Imersão em Inglês",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-03-10",
    dataConclusao: "10 de março de 2024",
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
  }
];
