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
    id: 6,

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2025.05.27 · Instituto Federal Rondônia · Logística Reversa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rondônia",
    curso: "Logística Reversa",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-05-27",
    dataConclusao: "27 de maio de 2025",
    codigo: "qcXRSFKWQg",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mooc.ifro.edu.br/mod/customcert/verify_certificate.php",
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

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2025.05.01 · Instituto Federal Sul-Rio-Grandense · Logística Reversa de Pós-Consumo e Pós-Venda.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Logística Reversa de Pós-Consumo e Pós-Venda",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-01",
    dataConclusao: "01 de maio de 2025",
    codigo: "6813c595-0d10-4211-980f-60b10a00c840",
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
    id: 4,

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2025.04.06 · Instituto Federal Sul-Rio-Grandense · Logística e Administração de Materiais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Logística e Administração de Materiais",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-04-06",
    dataConclusao: "06 de abril de 2025",
    codigo: "67f29950-ed00-40f2-841b-e8d70a00c840",
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
    id: 3,

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2025.04.02 · Instituto Federal Sul-Rio-Grandense · Conceitos de Logística Reversa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Conceitos de Logística Reversa",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-04-02",
    dataConclusao: "02 de abril de 2025",
    codigo: "67ed5a6a-3ae4-4def-b629-25370a00c840",
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
    id: 2,

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2025.03.31 · Instituto Federal Sul-Rio-Grandense · Introdução à Logística.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Introdução à Logística",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-03-31",
    dataConclusao: "31 de março de 2025",
    codigo: "67eaea27-319c-4ebb-8ff0-5fbc0a00c840",
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
    id: 1,

    thumb: "/portfolio/formacoes-complementares/gestao-logistica/certificados/2024.10.01 · FM2S · Fundamentos da Gestão Logística.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FM2S Educação e Consultoria",
    curso: "Fundamentos da Gestão Logística",
    cargaHoraria: "6 h",
    conclusaoISO: "2024-10-01",
    dataConclusao: "01 de outubro de 2024",
    codigo: "Y2VydGlmaWNhdGVfNDI3MDIyXzczMg%3D%3D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://ead.fm2s.com.br/verify/Y2VydGlmaWNhdGVfNDI3MDIyXzczMg%3D%3D",
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
