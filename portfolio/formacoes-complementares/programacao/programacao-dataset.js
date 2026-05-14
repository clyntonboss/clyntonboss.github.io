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
    id: 527,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Banco PAN Java Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Banco PAN Java Developer",
    cargaHoraria: "114 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "LF9OPZBE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LF9OPZBE.pdf",
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
    id: 526,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Dominando Algoritmos Intermediários com Desafios de Código Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Algoritmos Intermediários com Desafios de Código Java",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "NANPAQY0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NANPAQY0.pdf",
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
    id: 525,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Taxa de Imposto de Renda).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio (Taxa de Imposto de Renda)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 524,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Conta Espaços e Vogais).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio (Conta Espaços e Vogais)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 523,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Triângulo).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Triângulo",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 522,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Quitanda do seu Zé).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Quitanda do seu Zé",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 521,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Animal).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Animal",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 520,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Ganhando Produtividade com Spring Framework.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ganhando Produtividade com Spring Framework",
    cargaHoraria: "19 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "PHLLGQDA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PHLLGQDA.pdf",
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
    id: 519,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Criando uma API REST Conectada ao Amazon RDS com Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando uma API REST Conectada ao Amazon RDS com Java",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "HPAJZG8O",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HPAJZG8O.pdf",
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
    id: 518,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Conhecendo Spring Data JPA na Prática com Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo Spring Data JPA na Prática com Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "TDOGHOVQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TDOGHOVQ.pdf",
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
    id: 517,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Criando uma API REST Documentada com Spring Web e Swagger.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando uma API REST Documentada com Spring Web e Swagger",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "9UDEOZWG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9UDEOZWG.pdf",
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
    id: 516,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Trabalhando com Banco de Dados SQL e NoSQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Banco de Dados SQL e NoSQL",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "XJRTK5FB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XJRTK5FB.pdf",
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
    id: 515,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Boas Práticas com DynamoDB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas com DynamoDB",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "RX3MUFRO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RX3MUFRO.pdf",
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
    id: 514,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Programação Orientada a Objetos com Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação Orientada a Objetos com Java",
    cargaHoraria: "17 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "P8VKN8AE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/P8VKN8AE.pdf",
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
    id: 513,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Abstraindo um Bootcamp Usando Orientação a Objetos em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Abstraindo um Bootcamp Usando Orientação a Objetos em Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "GTUP6BIO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GTUP6BIO.pdf",
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
    id: 512,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Testes Unitários com JUnit.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Testes Unitários com JUnit",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "XBBHD2MV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XBBHD2MV.pdf",
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
    id: 511,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Gerenciamento de Dependências e Build em Java com Maven.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Dependências e Build em Java com Maven",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "FKYY8WDV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FKYY8WDV.pdf",
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
    id: 510,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Dominando Algoritmos Básicos com Desafios de Código Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Algoritmos Básicos com Desafios de Código Java",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "CVP5KY2L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CVP5KY2L.pdf",
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
    id: 509,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Fibonacci Fácil).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Fibonacci Fácil",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 508,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Dragão!).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Dragão!",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 507,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Soma de H com N Termos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Soma de H com N Termos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 506,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Imprimindo Positivos e Média).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Imprimindo Positivos e Média",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 505,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Desafio (Fábrica de Carros).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio: Fábrica de Carros",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
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
    id: 504,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Conhecendo a Linguagem de Programação Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo a Linguagem de Programação Java",
    cargaHoraria: "25 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "8LNQRPA4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8LNQRPA4.pdf",
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
    id: 503,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Estrutura de Dados em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estrutura de Dados em Java",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "6C16VLXJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6C16VLXJ.pdf",
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
    id: 502,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Aprendendo a Sintaxe Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendendo a Sintaxe Java",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "2UQCC9P9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2UQCC9P9.pdf",
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
    id: 501,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Prepare-se para a Jornada.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Prepare-se para a Jornada",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "6WOCDKP7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6WOCDKP7.pdf",
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
    id: 500,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Banco PAN Java Developer · Aula Inaugural.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Banco PAN Java Developer · Aula Inaugural",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "RHHSA1IC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RHHSA1IC.pdf",
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
    id: 499,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.28 · Digital Innovation One · Introdução ao Desenvolvimento Moderno de Software.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Desenvolvimento Moderno de Software",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-28",
    dataConclusao: "28 de abril de 2026",
    codigo: "8MGLLYYE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8MGLLYYE.pdf",
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
    id: 498,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Santander Bootcamp Full Stack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Santander Bootcamp Full Stack Developer",
    cargaHoraria: "120 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "HUO5QPHX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HUO5QPHX.pdf",
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
    id: 497,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo V - Spring Framework.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo V - Spring Framework",
    cargaHoraria: "13 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "LAI0KDUX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LAI0KDUX.pdf",
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
    id: 496,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Design Patterns com Java (Dos Clássicos (GoF) ao Spring Framework).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Design Patterns com Java: Dos Clássicos (GoF) ao Spring Framework",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "OHNDAVFA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OHNDAVFA.pdf",
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
    id: 495,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Desafios Intermediários Java - Santander Fullstack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Intermediários Java - Santander Fullstack Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
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
    id: 494,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Adicionando Segurança a uma API REST com Spring Security.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Adicionando Segurança a uma API REST com Spring Security",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "PNTNHFU5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PNTNHFU5.pdf",
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
    id: 493,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução a Spring Framework com Spring Boot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Spring Framework com Spring Boot",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "UJGDMRDQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UJGDMRDQ.pdf",
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
    id: 492,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução ao Framework Spring Boot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Framework Spring Boot",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "BNVMSWID",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BNVMSWID.pdf",
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
    id: 491,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Principais Protocolos de Comunicação da Internet.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Principais Protocolos de Comunicação da Internet",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "ZGEAR7VM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZGEAR7VM.pdf",
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
    id: 490,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo IV - Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo IV - Java",
    cargaHoraria: "27 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "NOGUJ0D8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NOGUJ0D8.pdf",
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
    id: 489,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Criando um Banco Digital com Java e Orientação a Objetos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Banco Digital com Java e Orientação a Objetos",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "3J8ZQ5XJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3J8ZQ5XJ.pdf",
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
    id: 488,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Desafios Iniciais Java - Santander Fullstack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Iniciais Java - Santander Fullstack Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
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
    id: 487,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Programação Orientada a Objetos com Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação Orientada a Objetos com Java",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "Z3DYBR5Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Z3DYBR5Y.pdf",
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
    id: 486,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Debugging Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Debugging Java",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "FX7QBA4L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FX7QBA4L.pdf",
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
    id: 485,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Tratamento de Exceções em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tratamento de Exceções em Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "G4AIEB36",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G4AIEB36.pdf",
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
    id: 484,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Trabalhando com Collections Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Collections Java",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "V4QVQBNJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/V4QVQBNJ.pdf",
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
    id: 483,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Estruturas de Repetição e Arrays em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estruturas de Repetição e Arrays em Java",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "H35EC0AU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H35EC0AU.pdf",
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
    id: 482,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Lógica Condicional e Controle de Fluxos em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Lógica Condicional e Controle de Fluxos em Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "IQ2QPJQN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IQ2QPJQN.pdf",
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
    id: 481,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Entendendo Métodos Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo Métodos Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "X1WX1PB1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/X1WX1PB1.pdf",
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
    id: 480,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Variáveis Tipos de Dados e Operadores Matemáticos em Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Variáveis Tipos de Dados e Operadores Matemáticos em Java",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "ZYSZ3TFQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZYSZ3TFQ.pdf",
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
    id: 479,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Dominando IDEs Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando IDEs Java",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "PWWDVHBQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PWWDVHBQ.pdf",
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
    id: 478,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo III - Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo III - Angular",
    cargaHoraria: "26 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "MAZATUQO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MAZATUQO.pdf",
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
    id: 477,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Como Criar um Front-End de um e-Commerce Utilizando Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Como Criar um Front-End de um e-Commerce Utilizando Angular",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "EBZQNSX2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EBZQNSX2.pdf",
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
    id: 476,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Desafios Intermediários JS - Santander Fullstack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Intermediários JS - Santander Fullstack Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
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
    id: 475,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Criação de Pipes com Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criação de Pipes com Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "EIC5QCMB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EIC5QCMB.pdf",
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
    id: 474,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Trabalhando com Componentes em Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Componentes em Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "075YNKE1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/075YNKE1.pdf",
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
    id: 473,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · O Poder do Data Binding no Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "O Poder do Data Binding no Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "IIBGFMT8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IIBGFMT8.pdf",
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
    id: 472,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução a Serviços Assíncronos no Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Serviços Assíncronos no Angular",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "FRQIB0ER",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FRQIB0ER.pdf",
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
    id: 471,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Implementando Serviços e Injeção de Dependências com Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando Serviços e Injeção de Dependências com Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "TPQT4CXZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TPQT4CXZ.pdf",
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
    id: 470,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Explorando Diretivas com Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Diretivas com Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "RV1OELLR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RV1OELLR.pdf",
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
    id: 469,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Instalando e Preparando o Ambiente Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Instalando e Preparando o Ambiente Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "5HH9COIV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5HH9COIV.pdf",
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
    id: 468,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · A Arquitetura de Componentes e a Gestão da Complexidade no Front-End.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "A Arquitetura de Componentes e a Gestão da Complexidade no Front-End",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "PK5EDX2V",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PK5EDX2V.pdf",
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
    id: 467,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Trabalhando com Páginas SPA com Angular.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Páginas SPA com Angular",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "ZIY8O4DG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZIY8O4DG.pdf",
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
    id: 466,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução ao Angular 8.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Angular 8",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "YI06V3JL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YI06V3JL.pdf",
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
    id: 465,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo II - HTML·CSS3·JS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo II - HTML/CSS3/JS",
    cargaHoraria: "31 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "W7G8MYZZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/W7G8MYZZ.pdf",
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
    id: 464,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução Prática ao TypeScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução Prática ao TypeScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "XVVL03GA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XVVL03GA.pdf",
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
    id: 463,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução ao TypeScript (Explorando Classes Tipos e Interfaces).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao TypeScript: Explorando Classes Tipos e Interfaces",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "CVGQWYVB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CVGQWYVB.pdf",
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
    id: 462,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Trabalhando com Módulos em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Módulos em JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "UZF7F3S3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UZF7F3S3.pdf",
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
    id: 461,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Desafios Iniciais JS - Santander Fullstack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Iniciais JS - Santander Fullstack Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
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
    id: 460,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Dominando Funções em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Funções em JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "5DOT0TG0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5DOT0TG0.pdf",
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
    id: 459,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Variáveis e Tipos com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Variáveis e Tipos com JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "FHYH6COS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FHYH6COS.pdf",
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
    id: 458,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Sintaxe e Operadores JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sintaxe e Operadores JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "MGRXP9IJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MGRXP9IJ.pdf",
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
    id: 457,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução ao JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "GY0MPTCX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GY0MPTCX.pdf",
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
    id: 456,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Recriando a Página Inicial do Instagram.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Recriando a Página Inicial do Instagram",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "SD5BQGVG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SD5BQGVG.pdf",
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
    id: 455,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Posicionando Elementos com Flexbox em CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Posicionando Elementos com Flexbox em CSS",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "S71HDBGD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/S71HDBGD.pdf",
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
    id: 454,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo I - Conteúdo de Abertura.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo I - Conteúdo de Abertura",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "6WDZNYM8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6WDZNYM8.pdf",
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
    id: 453,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Introdução à Programação e Pensamento Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Programação e Pensamento Computacional",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "AIXNR6D3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AIXNR6D3.pdf",
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
    id: 452,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Módulo 0 - Prepare-se para a Jornada.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Módulo 0 - Prepare-se para a Jornada",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "ZCJHXVRJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZCJHXVRJ.pdf",
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
    id: 451,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Aula Inaugural - Santander Bootcamp Full Stack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aula Inaugural - Santander Bootcamp Full Stack Developer",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "EVMMWB4W",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EVMMWB4W.pdf",
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
    id: 450,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Boas-Vindas ao Santander Bootcamp Full Stack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas-Vindas ao Santander Bootcamp Full Stack Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "MSEBMQXG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MSEBMQXG.pdf",
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
    id: 449,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Seja Protagonista Neste Bootcamp.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Seja Protagonista Neste Bootcamp",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "GXFKCPDX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GXFKCPDX.pdf",
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
    id: 448,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.27 · Digital Innovation One · Conheça as Oportunidades da DIO.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conheça as Oportunidades da DIO",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-27",
    dataConclusao: "27 de abril de 2026",
    codigo: "U2UVMI1J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U2UVMI1J.pdf",
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
    id: 447,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Impulso Full Stack Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Impulso Full Stack Web Developer",
    cargaHoraria: "110 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "Z4HBKYLI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Z4HBKYLI.pdf",
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
    id: 446,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Conteúdo.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conteúdo",
    cargaHoraria: "129 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "SUBH3GMZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SUBH3GMZ.pdf",
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
    id: 445,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desafios Impulso Intermediários - C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Impulso Intermediários - C#",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
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
    id: 444,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Criando um App Simples de Cadastro de Séries em .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um App Simples de Cadastro de Séries em .NET",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "8LAKEUEI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8LAKEUEI.pdf",
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
    id: 443,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Configuração da Arquitetura Back-End com .NET Core.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configuração da Arquitetura Back-End com .NET Core",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "J7CGX8OZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J7CGX8OZ.pdf",
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
    id: 442,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desenvolvimento de Aplicações com .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento de Aplicações com .NET",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "AWTY7KXK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AWTY7KXK.pdf",
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
    id: 441,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Tratamento de Erros em C com Exceptions.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tratamento de Erros em C# com Exceptions",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "XC3PVOCN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XC3PVOCN.pdf",
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
    id: 440,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Fundamentos de Coleções e LINQ com .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Coleções e LINQ com .NET",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "JUSCBVWE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JUSCBVWE.pdf",
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
    id: 439,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Programando com Orientação a Objeto com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programando com Orientação a Objeto com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "QWTKT2KE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QWTKT2KE.pdf",
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
    id: 438,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Construtores Propriedades Delegates e Eventos em .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construtores Propriedades Delegates e Eventos em .NET",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "OVOFKZDU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OVOFKZDU.pdf",
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
    id: 437,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Trabalhando com Arquivos e Streams em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Arquivos e Streams em C#",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "EI70ULDI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EI70ULDI.pdf",
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
    id: 436,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução ao HTTP·HTTPS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao HTTP/HTTPS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "LBCN5BMM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LBCN5BMM.pdf",
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
    id: 435,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Abstraindo um Jogo de RPG Usando Orientação a Objetos com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Abstraindo um Jogo de RPG Usando Orientação a Objetos com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "DZBJP23A",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DZBJP23A.pdf",
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
    id: 434,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desafios Impulso Iniciante - C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Impulso Iniciante - C#",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
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
    id: 433,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Trabalhando com Tipos de Referência e Valor em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Tipos de Referência e Valor em C#",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "GA7XUMKD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GA7XUMKD.pdf",
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
    id: 432,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Primeiros Passos com .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com .NET",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "LBH39DUE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LBH39DUE.pdf",
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
    id: 431,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Instalação e Configuração do Visual Studio Code.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Instalação e Configuração do Visual Studio Code",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "BTHZYDT2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BTHZYDT2.pdf",
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
    id: 430,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Criando o Ambiente de Desenvolvimento.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando o Ambiente de Desenvolvimento",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "BJZH0BQH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BJZH0BQH.pdf",
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
    id: 429,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução ao Ecossistema .NET e Documentação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Ecossistema .NET e Documentação",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "XKEYFPCL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XKEYFPCL.pdf",
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
    id: 428,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · SQL Server (Boas Práticas em Bancos Relacionais).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "SQL Server: Boas Práticas em Bancos Relacionais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "MM3TESLG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MM3TESLG.pdf",
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
    id: 427,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Modelando um Banco de Dados na Prática com SQL Server.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelando um Banco de Dados na Prática com SQL Server",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "Q578GKPQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Q578GKPQ.pdf",
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
    id: 426,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · SQL Server - Criando suas Primeiras Consultas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "SQL Server: Criando suas Primeiras Consultas",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "J2UZ8QYL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J2UZ8QYL.pdf",
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
    id: 425,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Criando o Front-End com ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando o Front-End com ReactJS",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "RJ0POXSA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RJ0POXSA.pdf",
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
    id: 424,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução aos React Hooks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução aos React Hooks",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "TDYITKEE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TDYITKEE.pdf",
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
    id: 423,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Trabalhando com States & Effects no ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com States & Effects no ReactJS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "POEGLJVS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/POEGLJVS.pdf",
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
    id: 422,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução a Redux com ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Redux com ReactJS",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "ZQRWNGVE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZQRWNGVE.pdf",
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
    id: 421,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desafios Impulso Intermediario - JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Impulso Intermediario - JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
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
    id: 420,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Práticas Avançadas em Projetos com ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Práticas Avançadas em Projetos com ReactJS",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "ZQIA5HPQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZQIA5HPQ.pdf",
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
    id: 419,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desenvolvimento de Aplicações para Internet com ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento de Aplicações para Internet com ReactJS",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "LVYJVSM3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LVYJVSM3.pdf",
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
    id: 418,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução ao ReactJS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao ReactJS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "VFEKEJN2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VFEKEJN2.pdf",
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
    id: 417,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Desafios Impulso Iniciante - JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Impulso Iniciante - JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
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
    id: 416,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Resolvendo Desafios de Código em Javascript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Resolvendo Desafios de Código em Javascript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "STTYHJAM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/STTYHJAM.pdf",
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
    id: 415,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Manipulando a D.O.M. com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando a D.O.M. com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "QZ75KBX0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QZ75KBX0.pdf",
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
    id: 414,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Orientação a Objetos com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Orientação a Objetos com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "IVTCAUVL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IVTCAUVL.pdf",
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
    id: 413,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Fundamentos de JavaScript Assíncrono.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de JavaScript Assíncrono",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "GHOB3RVO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GHOB3RVO.pdf",
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
    id: 412,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Debugging e Error Handling com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Debugging e Error Handling com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "KGZUCZMW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KGZUCZMW.pdf",
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
    id: 411,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Mapas e Conjuntos com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Mapas e Conjuntos com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "BHUD9BW7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BHUD9BW7.pdf",
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
    id: 410,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Recriando a Interface do Netflix.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Recriando a Interface do Netflix",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "1RSE1GQ1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1RSE1GQ1.pdf",
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
    id: 409,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Construindo Páginas para Internet com Bootstrap.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo Páginas para Internet com Bootstrap",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "E2VP4X8G",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/E2VP4X8G.pdf",
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
    id: 408,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução a Criação de Websites com HTML5 e CSS3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Criação de Websites com HTML5 e CSS3",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "FCPWVDWX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FCPWVDWX.pdf",
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
    id: 407,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Primeiros Passos para Desenvolvimento Web.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos para Desenvolvimento Web",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "KAEWQKFH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KAEWQKFH.pdf",
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
    id: 406,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Criando seu Primeiro Repositório no GitHub para Compartilhar seu Progresso.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando seu Primeiro Repositório no GitHub para Compartilhar seu Progresso",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "LQKSLWDU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LQKSLWDU.pdf",
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
    id: 405,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Projetos Ágeis com Scrum.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projetos Ágeis com Scrum",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "ZEEFKGEZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZEEFKGEZ.pdf",
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
    id: 404,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Introdução ao Git e ao GitHub.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Git e ao GitHub",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "QTNUFM9J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QTNUFM9J.pdf",
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
    id: 403,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Lógica de Programação Essencial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Lógica de Programação Essencial",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "B5VIBV8N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/B5VIBV8N.pdf",
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
    id: 402,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Pensamento Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Pensamento Computacional",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "HHXZBLTP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HHXZBLTP.pdf",
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
    id: 401,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Mentoria 1 (Aula Inaugural - Bootcamp Impulso Full Stack Web Developer).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Mentoria #1: Aula Inaugural - Bootcamp Impulso Full Stack Web Developer",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "PHQYK3S3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PHQYK3S3.pdf",
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
    id: 400,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.26 · Digital Innovation One · Boas-Vindas ao Bootcamp - Impulso Full Stack Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas-Vindas ao Bootcamp - Impulso Full Stack Web Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-26",
    dataConclusao: "26 de abril de 2026",
    codigo: "3EAWZEB6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3EAWZEB6.pdf",
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
    id: 399,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · XP Inc. - Full Stack Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "XP Inc. - Full Stack Developer",
    cargaHoraria: "127 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "CU9H2PRH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CU9H2PRH.pdf",
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
    id: 398,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução a Cloud com Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Cloud com Azure",
    cargaHoraria: "13 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "FLNGYFJ4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FLNGYFJ4.pdf",
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
    id: 397,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução a Conceitos de Mensageria e Service Bus com Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Conceitos de Mensageria e Service Bus com Azure",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "2GVHBIZC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2GVHBIZC.pdf",
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
    id: 396,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Configuração e Deploy na Nuvem Microsoft Azure Cloud.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configuração e Deploy na Nuvem Microsoft Azure Cloud",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "DARJ1TD8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DARJ1TD8.pdf",
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
    id: 395,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Microsoft Azure - Localizando Serviços por Categoria.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Microsoft Azure - Localizando Serviços por Categoria",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "O6AUKFDL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/O6AUKFDL.pdf",
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
    id: 394,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando Front-End com Next e Typescript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Front-End com Next e Typescript",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "0CG3A5LX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0CG3A5LX.pdf",
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
    id: 393,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Calculando Métricas de Investimento com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Calculando Métricas de Investimento com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
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
    id: 392,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando o seu Blog Pessoal com Next.js.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando o seu Blog Pessoal com Next.js",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "ENQMTE3W",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ENQMTE3W.pdf",
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
    id: 391,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução ao Next.js.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Next.js",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "5SCZZZFO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5SCZZZFO.pdf",
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
    id: 390,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Implementando uma Tela de Login com Validação Usando TypeScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando uma Tela de Login com Validação Usando TypeScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "HXVCFECT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HXVCFECT.pdf",
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
    id: 389,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Convertendo Projetos React de Javascript para TypeScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Convertendo Projetos React de Javascript para TypeScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "XGFKEYWG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XGFKEYWG.pdf",
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
    id: 388,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Fundamentos do TypeScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos do TypeScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "4TUBM5XQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4TUBM5XQ.pdf",
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
    id: 387,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Gerenciando Componentes React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciando Componentes React",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "4VAWZGU5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4VAWZGU5.pdf",
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
    id: 386,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Explorando Portfólio de Investimentos com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Portfólio de Investimentos com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
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
    id: 385,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Desenvolvendo a Tela de Cadastro da Plataforma DIO com React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvendo a Tela de Cadastro da Plataforma DIO com React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "VDBSQUJU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VDBSQUJU.pdf",
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
    id: 384,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Trabalhando com Formulários no React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Formulários no React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "LOMBNOYS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LOMBNOYS.pdf",
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
    id: 383,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Trabalhando com Hooks Básicos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Hooks Básicos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "JKE443BQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JKE443BQ.pdf",
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
    id: 382,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Estilização com Styled-Components.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estilização com Styled-Components",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "TSKWPKQ1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TSKWPKQ1.pdf",
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
    id: 381,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Conceitos Básicos de React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conceitos Básicos de React",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "K81Q2OHZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K81Q2OHZ.pdf",
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
    id: 380,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Calculando Rendimentos com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Calculando Rendimentos com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
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
    id: 379,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando uma Wiki de Repositórios do GitHub com React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando uma Wiki de Repositórios do GitHub com React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "QT2IQJ1Q",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QT2IQJ1Q.pdf",
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
    id: 378,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Manipulando Arrays no Javascript com Map Filter e Reduce.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando Arrays no Javascript com Map Filter e Reduce",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WIHAW7GM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WIHAW7GM.pdf",
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
    id: 377,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Organizando Aplicações React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Organizando Aplicações React",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "DCOGARWH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DCOGARWH.pdf",
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
    id: 376,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Convenções e Qualidade de Código React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Convenções e Qualidade de Código React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "UHGDOPOM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UHGDOPOM.pdf",
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
    id: 375,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Conceitos Fundamentais para React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conceitos Fundamentais para React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "YD7YHSPS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YD7YHSPS.pdf",
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
    id: 374,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando Projetos React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Projetos React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "ATGB7DEX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ATGB7DEX.pdf",
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
    id: 373,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução a Front-End com React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Front-End com React",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "GKLWZKAM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GKLWZKAM.pdf",
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
    id: 372,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando uma Calculadora com React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando uma Calculadora com React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "HPYI0MNZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HPYI0MNZ.pdf",
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
    id: 371,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Primeiros Passos na Biblioteca React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos na Biblioteca React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "JY9HYRDX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JY9HYRDX.pdf",
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
    id: 370,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Entendendo a DOM (Document Object Model).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo a DOM (Document Object Model)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "Z3TVDNVS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Z3TVDNVS.pdf",
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
    id: 369,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Tornando Páginas Web Interativas com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tornando Páginas Web Interativas com JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WHO67WU5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WHO67WU5.pdf",
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
    id: 368,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Estilizando Páginas com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estilizando Páginas com CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WKPRC2TZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WKPRC2TZ.pdf",
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
    id: 367,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Páginas Web com HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Páginas Web com HTML",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "NUGA6GWD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NUGA6GWD.pdf",
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
    id: 366,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Configuração de Ambiente React.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configuração de Ambiente React",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "L8258UXY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/L8258UXY.pdf",
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
    id: 365,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Trabalhando com Desenvolvimento Orientado a Testes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Desenvolvimento Orientado a Testes",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WSMTT99B",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WSMTT99B.pdf",
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
    id: 364,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Blindando seu Código com TDD e Testes Unitários Usando .NET Core.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Blindando seu Código com TDD e Testes Unitários Usando .NET Core",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "MKT7YDBQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MKT7YDBQ.pdf",
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
    id: 363,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Configuração da Suíte de Testes e Aplicando Testes Integrados em .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configuração da Suíte de Testes e Aplicando Testes Integrados em .NET",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "XYED4VVI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XYED4VVI.pdf",
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
    id: 362,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Implementando Validações de Testes Unitários com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando Validações de Testes Unitários com C#",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "ICDBKKCE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ICDBKKCE.pdf",
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
    id: 361,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Testes Unitários com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Testes Unitários com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "MS4WVSRY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MS4WVSRY.pdf",
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
    id: 360,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Construindo APIs com .NET C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo APIs com .NET C#",
    cargaHoraria: "16 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "F6YXULFM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F6YXULFM.pdf",
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
    id: 359,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Calculando Ativos com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Calculando Ativos com C#",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
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
    id: 358,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Trabalhando com ASP.NET Minimals APIs.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com ASP.NET Minimals APIs",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "ZLIV3JI9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZLIV3JI9.pdf",
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
    id: 357,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Construindo um Sistema de Agendamento de Tarefas com Entity Framework.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo um Sistema de Agendamento de Tarefas com Entity Framework",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "7C2BFHGX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7C2BFHGX.pdf",
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
    id: 356,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Trabalhando com Entity Framework com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Entity Framework com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WFYYMG44",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WFYYMG44.pdf",
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
    id: 355,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução as APIs com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução as APIs com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "X9NXFHFF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/X9NXFHFF.pdf",
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
    id: 354,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução a Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Banco de Dados",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "PK4VZZ1L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PK4VZZ1L.pdf",
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
    id: 353,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Montando Consultas Relacionais no SQL Server.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Montando Consultas Relacionais no SQL Server",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "2CBAJLHN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2CBAJLHN.pdf",
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
    id: 352,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução ao MongoDB e Bancos de Dados NoSQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao MongoDB e Bancos de Dados NoSQL",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "EQEC36PH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EQEC36PH.pdf",
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
    id: 351,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · SQL SERVER - Manipulando Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "SQL SERVER - Manipulando Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "YVGHS2LC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YVGHS2LC.pdf",
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
    id: 350,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · SQL SERVER - Dominando Tabelas e Tipos de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "SQL SERVER - Dominando Tabelas e Tipos de Dados",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "207DM8NT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/207DM8NT.pdf",
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
    id: 349,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Programação Orientada a Objetos com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação Orientada a Objetos com C#",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "GHT6BXUB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GHT6BXUB.pdf",
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
    id: 348,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Criando um Sistema e Abstraindo um Celular com POO em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Sistema e Abstraindo um Celular com POO em C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "YXKLW9OK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YXKLW9OK.pdf",
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
    id: 347,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Classes Abstratas e Interfaces com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Classes Abstratas e Interfaces com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "QKTHRTIE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QKTHRTIE.pdf",
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
    id: 346,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Herança e Polimorfismo com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Herança e Polimorfismo com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "PCCEJAV7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PCCEJAV7.pdf",
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
    id: 345,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução Abstração e Encapsulamento com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução Abstração e Encapsulamento com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "NBPWN0ML",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NBPWN0ML.pdf",
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
    id: 344,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Dados e Listas com .NET C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dados e Listas com .NET C#",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "FEBXCEZF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FEBXCEZF.pdf",
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
    id: 343,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Calculando Juros com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Calculando Juros com C#",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
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
    id: 342,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Construindo um Sistema de Hospedagem de um Hotel no C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo um Sistema de Hospedagem de um Hotel no C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "FUO01K1A",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FUO01K1A.pdf",
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
    id: 341,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Nuget Serializar e Atributos no C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Nuget Serializar e Atributos no C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "RRKLZ4CD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RRKLZ4CD.pdf",
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
    id: 340,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Tuplas Operador Ternário e Desconstrução de um Objeto com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tuplas Operador Ternário e Desconstrução de um Objeto com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "EAI7VA8F",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EAI7VA8F.pdf",
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
    id: 339,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Exceções e Coleções com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Exceções e Coleções com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "DJMQLZ9X",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DJMQLZ9X.pdf",
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
    id: 338,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Manipulando Valores com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando Valores com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "CESVN8V0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CESVN8V0.pdf",
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
    id: 337,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Propriedades Métodos e Construtores com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Propriedades Métodos e Construtores com C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "0ZTVL1PT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0ZTVL1PT.pdf",
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
    id: 336,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Sintaxe Básica com .NET C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sintaxe Básica com .NET C#",
    cargaHoraria: "16 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "ZMBLLNJJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZMBLLNJJ.pdf",
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
    id: 335,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Construindo um Sistema para um Estacionamento com C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo um Sistema para um Estacionamento com C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "9UPINV90",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9UPINV90.pdf",
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
    id: 334,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Array e Listas em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Array e Listas em C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "0ATKEJBU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0ATKEJBU.pdf",
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
    id: 333,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Conhecendo a Organização de um Programa C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo a Organização de um Programa C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "8WQL0FXZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8WQL0FXZ.pdf",
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
    id: 332,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Conhecendo as Estruturas de Repetição em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo as Estruturas de Repetição em C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "DS1CQYHM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DS1CQYHM.pdf",
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
    id: 331,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Operadores Aritméticos em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Operadores Aritméticos em C#",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "WBP0WJXP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WBP0WJXP.pdf",
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
    id: 330,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Tipos de Operadores em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tipos de Operadores em C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "JZ5UCG3B",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JZ5UCG3B.pdf",
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
    id: 329,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Sintaxe e Tipos de Dados em C.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sintaxe e Tipos de Dados em C#",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "5QB2MRZW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5QB2MRZW.pdf",
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
    id: 328,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução ao Ambiente .NET e Projetos Colaborativos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Ambiente .NET e Projetos Colaborativos",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "K6POTD26",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K6POTD26.pdf",
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
    id: 327,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Live de Lançamento (Coding The Future XP Inc. - Full Stack Developer).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento: Coding the Future XP Inc. - Full Stack Developer",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "3NSGQCDQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3NSGQCDQ.pdf",
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
    id: 326,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução as IDEs e Configuração de Ambiente .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução as IDEs e Configuração de Ambiente .NET",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "AJOBUZHD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AJOBUZHD.pdf",
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
    id: 325,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução ao .NET.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao .NET",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "LH59CBFS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LH59CBFS.pdf",
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
    id: 324,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.25 · Digital Innovation One · Introdução ao Desenvolvimento Full Stack com a XP Inc..png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Desenvolvimento Full Stack com a XP Inc.",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-25",
    dataConclusao: "25 de abril de 2026",
    codigo: "3RBEMZET",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3RBEMZET.pdf",
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
    id: 323,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Formação Python Backend Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Python Back-End Developer",
    cargaHoraria: "35 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ICIHCACP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ICIHCACP.pdf",
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
    id: 322,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · APIs Assíncronas em Python com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "APIs Assíncronas em Python com FastAPI",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "VAKb5KXD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VAKb5KXD.pdf",
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
    id: 321,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Avalie a Formação Python Backend Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação Python Back-End Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "MUCMVCK2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MUCMVCK2.pdf",
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
    id: 320,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Desenvolvimento Full Stack em Python com Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento Full Stack em Python com Django",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "31TRDXJA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/31TRDXJA.pdf",
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
    id: 319,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Deploy de Aplicações Python com Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deploy de Aplicações Python com Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "TKZ6WCCN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TKZ6WCCN.pdf",
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
    id: 318,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Testando seus Projetos em Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Testando seus Projetos em Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LDMLJXOW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LDMLJXOW.pdf",
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
    id: 317,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Autenticação e Autorização em Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Autenticação e Autorização em Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "OULQEBZT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OULQEBZT.pdf",
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
    id: 316,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Formulários com Python e Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formulários com Python e Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "623FSDFB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/623FSDFB.pdf",
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
    id: 315,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Views e Templates no Django Framework.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Views e Templates no Django Framework",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "TBXECCWX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TBXECCWX.pdf",
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
    id: 314,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Administração do Django Framework.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Administração do Django Framework",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "XFLAFRDP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XFLAFRDP.pdf",
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
    id: 313,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Modelos e Banco de Dados com Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelos e Banco de Dados com Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "SBGBNTRT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SBGBNTRT.pdf",
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
    id: 312,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Primeiros Passos com Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "U0AESLEV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U0AESLEV.pdf",
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
    id: 311,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução ao Django.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Django",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ZGBLWURJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZGBLWURJ.pdf",
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
    id: 310,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Desenvolvimento de APIs em Python com Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento de APIs em Python com Flask",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "W2AHVMMT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/W2AHVMMT.pdf",
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
    id: 309,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Filtrando Dados com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Filtrando Dados com Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 308,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Boas Práticas para APIs RESTful com Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas para APIs RESTful com Flask",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "HUDRGGI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HUDRGGI.pdf",
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
    id: 307,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Deploy de uma API Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deploy de uma API Flask",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "2RMTD5UB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2RMTD5UB.pdf",
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
    id: 306,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Testando Aplicações RESTful em Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Testando Aplicações RESTful em Flask",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "BVTTVVGP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BVTTVVGP.pdf",
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
    id: 305,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Autenticação e Autorização em Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Autenticação e Autorização em Flask",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "FBRNOOMB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FBRNOOMB.pdf",
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
    id: 304,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Manipulação de Dados com Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulação de Dados com Flask",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "XEBWOU8B",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XEBWOU8B.pdf",
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
    id: 303,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Primeiros Passos com Flask.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com Flask",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PMXSOWBE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PMXSOWBE.pdf",
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
    id: 302,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução ao Flask para APIs RESTful.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Flask para APIs RESTful",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PSB9Z4BX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PSB9Z4BX.pdf",
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
    id: 301,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Boas Práticas em Python (Pacotes Banco de Dados e Desenvolvimento Web).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas em Python: Pacotes Banco de Dados e Desenvolvimento Web",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "FMQUYHCJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FMQUYHCJ.pdf",
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
    id: 300,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Formatando Dados com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formatando Dados com Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 299,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Vivo - Python AI Backend Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Vivo - Python AI Back-End Developer",
    cargaHoraria: "67 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PEGOPEWE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PEGOPEWE.pdf",
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
    id: 298,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Explorando o FastAPI na Prática com TDD.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando o FastAPI na Prática com TDD",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "F5ECEAIT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F5ECEAIT.pdf",
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
    id: 297,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando Uma API com FastAPI Utilizando TDD.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Uma API com FastAPI Utilizando TDD",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "U7TKHUMA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U7TKHUMA.pdf",
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
    id: 296,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Orientação a Objetos e Boas Práticas em Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Orientação a Objetos e Boas Práticas em Python",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LJ0RKOYF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LJ0RKOYF.pdf",
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
    id: 295,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Explorando POO com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando POO com Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 294,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Dominando Python e suas Estruturas de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Python e suas Estruturas de Dados",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "XRBD2TAC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XRBD2TAC.pdf",
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
    id: 293,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Dominando os Fundamentos Básicos do Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando os Fundamentos Básicos do Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 292,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Aula Inaugural (Python AI Backend Developer).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aula Inaugural: Python AI Back-End Developer",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "NU0ZIW3L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NU0ZIW3L.pdf",
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
    id: 291,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Suzano - Python Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Suzano - Python Developer",
    cargaHoraria: "57 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "TRAYVQLQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TRAYVQLQ.pdf",
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
    id: 290,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Produtividade com Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Produtividade com Microsoft Copilot Studio",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "OOT32TR1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OOT32TR1.pdf",
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
    id: 289,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando um Copiloto com Fluxo de Conversa Personalizado no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Copiloto com Fluxo de Conversa Personalizado no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "NOFYKHPK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NOFYKHPK.pdf",
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
    id: 288,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando Respostas Generativas com IA no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Respostas Generativas com IA no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "OUVDVAV5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OUVDVAV5.pdf",
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
    id: 287,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando Variáveis no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Variáveis no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "4YETH346",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4YETH346.pdf",
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
    id: 286,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando Entidades Personalizadas no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Entidades Personalizadas no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "AGG7XZTQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AGG7XZTQ.pdf",
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
    id: 285,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução a Entidades e Variáveis no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Entidades e Variáveis no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "WDOKKUFZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WDOKKUFZ.pdf",
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
    id: 284,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Tópicos de Fallback do Sistema no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Tópicos de Fallback do Sistema no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PQWRGRJ1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PQWRGRJ1.pdf",
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
    id: 283,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Ramificando um Tópico no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ramificando um Tópico no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "YFSHPVAW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YFSHPVAW.pdf",
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
    id: 282,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução aos Tópicos no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução aos Tópicos no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "C5BVWKZL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/C5BVWKZL.pdf",
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
    id: 281,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Criando seu Primeiro Copiloto no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando seu Primeiro Copiloto no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "OOGR6CVB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OOGR6CVB.pdf",
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
    id: 280,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Ambientes no Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Ambientes no Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "7T4MHNA2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7T4MHNA2.pdf",
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
    id: 279,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Conhecendo o Microsoft Copilot Studio.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Microsoft Copilot Studio",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "IH2BOCZV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IH2BOCZV.pdf",
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
    id: 278,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Programação Orientada a Objetos com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação Orientada a Objetos com Python",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ESVP9KHD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ESVP9KHD.pdf",
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
    id: 277,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Fundamentos de POO em Sistemas Bancários.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de POO em Sistemas Bancários",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 276,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Coleções em Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Coleções em Python",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "NDDCFO36",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NDDCFO36.pdf",
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
    id: 275,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Gestão e Controle de Trnsações Bancárias.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gestão e Controle de Trnsações Bancárias",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
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
    id: 274,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução ao Ambiente Python e Projetos Colaborativos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Ambiente Python e Projetos Colaborativos",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "H4CHXNKM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H4CHXNKM.pdf",
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
    id: 273,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Live de Lançamento (Suzano - Python Developer).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento: Suzano - Python Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ZDU0LDKV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZDU0LDKV.pdf",
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
    id: 272,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Introdução ao Python com a Suzano.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Python com a Suzano",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "WYIVWCVE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WYIVWCVE.pdf",
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
    id: 271,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Formação Flutter Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Flutter Specialist",
    cargaHoraria: "71 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "GWBLLXOK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GWBLLXOK.pdf",
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
    id: 270,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Publicando os Seus Apps Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Publicando os Seus Apps Flutter",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NOUPLLE5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NOUPLLE5.pdf",
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
    id: 269,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Avalie a Formação Flutter Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação Flutter Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "EUYZNFCU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EUYZNFCU.pdf",
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
    id: 268,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares – Publicando seus Apps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares – Publicando seus Apps",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XR2YHSCA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XR2YHSCA.pdf",
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
    id: 267,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando a Versão de Release do seu App com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando a Versão de Release do seu App com Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XJ1NFMNV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XJ1NFMNV.pdf",
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
    id: 266,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Publicação de APPs Flutter para IOS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Publicação de APPs Flutter para IOS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ACIBAAII",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ACIBAAII.pdf",
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
    id: 265,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Publicando Apps Flutter na PlayStore.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Publicando Apps Flutter na PlayStore",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "3CJUKY13",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3CJUKY13.pdf",
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
    id: 264,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Introdução ao Firebase.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Firebase",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "VACVQIOF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VACVQIOF.pdf",
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
    id: 263,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares – Firebase.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares – Firebase",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "3ZLIQHAA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3ZLIQHAA.pdf",
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
    id: 262,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Potencializando o seu App Flutter com Cloud Firestore.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Potencializando o seu App Flutter com Cloud Firestore",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "70M4HCEQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/70M4HCEQ.pdf",
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
    id: 261,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Recursos de Ambiente de Produção para Aplicativos Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Recursos de Ambiente de Produção para Aplicativos Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "GRXKHCJB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GRXKHCJB.pdf",
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
    id: 260,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Conhecendo o Cloud Firestore.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Cloud Firestore",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NIMZ7FXI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NIMZ7FXI.pdf",
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
    id: 259,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Conhecendo o Firebase.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Firebase",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "1GAP22ES",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1GAP22ES.pdf",
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
    id: 258,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Gerenciamento de Estado e Padrões em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Estado e Padrões em Flutter",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "DIGPLDS1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DIGPLDS1.pdf",
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
    id: 257,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Gerenciamento de Estado e Padrões em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Gerenciamento de Estado e Padrões em Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "YRWYZ95I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YRWYZ95I.pdf",
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
    id: 256,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando um App Flutter com Gerenciamento de Estado e Reatividade.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um App Flutter com Gerenciamento de Estado e Reatividade",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "DGZ060NS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DGZ060NS.pdf",
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
    id: 255,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Boas Práticas e Padrões em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas e Padrões em Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "10KNX19L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/10KNX19L.pdf",
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
    id: 254,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Gerenciamento de Estado com Get no Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Estado com Get no Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "BBYOOFP1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BBYOOFP1.pdf",
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
    id: 253,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Gerenciamento de Estado com MobX no Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Estado com MobX no Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "IXNYFSIT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IXNYFSIT.pdf",
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
    id: 252,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Gerenciamento de Estado com Provider no Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Estado com Provider no Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ZJNOKD3J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZJNOKD3J.pdf",
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
    id: 251,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Trabalhando com Pacotes Externos em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Pacotes Externos em Flutter",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "KWLM4USM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KWLM4USM.pdf",
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
    id: 250,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Aplicando Pacotes Externos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Aplicando Pacotes Externos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "KD4S1BR7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KD4S1BR7.pdf",
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
    id: 249,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando um App Flutter de Lista de Contatos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um App Flutter de Lista de Contatos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "RHGRN3ZL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RHGRN3ZL.pdf",
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
    id: 248,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Manipulando Câmera e Imagens em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando Câmera e Imagens em Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "FQRKX45L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FQRKX45L.pdf",
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
    id: 247,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Interatividade em Aplicações Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Interatividade em Aplicações Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "JFFXXICB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JFFXXICB.pdf",
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
    id: 246,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Internacionalização e Máscaras com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Internacionalização e Máscaras com Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "SL8J2WDO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SL8J2WDO.pdf",
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
    id: 245,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Introdução aos Componentes Visuais no Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução aos Componentes Visuais no Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "HHP68UOA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HHP68UOA.pdf",
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
    id: 244,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Consumindo APIs com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Consumindo APIs com Flutter",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "B1OS08HZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/B1OS08HZ.pdf",
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
    id: 243,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Assincronismo e APIs REST.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Assincronismo e APIs REST",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XASZROVS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XASZROVS.pdf",
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
    id: 242,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando um App Flutter do Zero para o Consumo da API do ViaCEP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um App Flutter do Zero para o Consumo da API do ViaCEP",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "FKVGBIPG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FKVGBIPG.pdf",
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
    id: 241,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando um Crud com APP Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Crud com APP Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "B6IRU8ZN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/B6IRU8ZN.pdf",
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
    id: 240,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Trabalhando com APIs Autenticadas em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com APIs Autenticadas em Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "FXYGDMHE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FXYGDMHE.pdf",
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
    id: 239,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando Services para API em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Services para API em Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "5RYD7ECI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5RYD7ECI.pdf",
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
    id: 238,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Biblioteca HTTP e Conceito de Assincronismo em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Biblioteca HTTP e Conceito de Assincronismo em Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "TXOUVPDC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TXOUVPDC.pdf",
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
    id: 237,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Introdução ao Protocolo HTTP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Protocolo HTTP",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "CQPTAVGY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CQPTAVGY.pdf",
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
    id: 236,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Persistência de Dados com SQLite.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Persistência de Dados com SQLite",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "DVQMBQZ0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DVQMBQZ0.pdf",
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
    id: 235,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Persistência Local de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Persistência Local de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "RSQFDBQZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RSQFDBQZ.pdf",
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
    id: 234,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Armazenando os Dados de IMC e Persistindo Localmente.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenando os Dados de IMC e Persistindo Localmente",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XUJHBT0X",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XUJHBT0X.pdf",
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
    id: 233,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Armazenando Dados com Banco de Dados SQLite.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenando Dados com Banco de Dados SQLite",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "WIGJBIJ2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WIGJBIJ2.pdf",
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
    id: 232,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Armazenando Dados com Banco de Dados Hive.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenando Dados com Banco de Dados Hive",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "TA6XVMAT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TA6XVMAT.pdf",
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
    id: 231,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Persistindo Dados Locais em APPs Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Persistindo Dados Locais em APPs Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "6TULXIEN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6TULXIEN.pdf",
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
    id: 230,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Navegação e Widgets em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Navegação e Widgets em Flutter",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "QTSOLXBQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QTSOLXBQ.pdf",
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
    id: 229,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Pages Widgets Navegação e Funções.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Pages Widgets Navegação e Funções",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "0ZJS1UQK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0ZJS1UQK.pdf",
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
    id: 228,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Aprimorando a sua Calculadora de IMC com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprimorando a sua Calculadora de IMC com Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "PXM4RPH1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PXM4RPH1.pdf",
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
    id: 227,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando Visualizações de Dados em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Visualizações de Dados em Flutter",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "5LKIDC7Z",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5LKIDC7Z.pdf",
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
    id: 226,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Widgets para Interação com o Usuário em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Widgets para Interação com o Usuário em Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "JPJNYL3I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JPJNYL3I.pdf",
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
    id: 225,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Navegação e Controle de Acesso a Páginas em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Navegação e Controle de Acesso a Páginas em Flutter",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "OHAFYL86",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OHAFYL86.pdf",
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
    id: 224,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Projeto Flutter e Primeiros Componentes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto Flutter e Primeiros Componentes",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "VAD1IRHY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VAD1IRHY.pdf",
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
    id: 223,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Linguagem de Programação Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Linguagem de Programação Dart",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "VJZEKDDT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VJZEKDDT.pdf",
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
    id: 222,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Linguagem de Programação Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Linguagem de Programação Dart",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "GYPPJJJE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GYPPJJJE.pdf",
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
    id: 221,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando uma Calculadora de IMC Com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando uma Calculadora de IMC com Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "U7627DIA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U7627DIA.pdf",
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
    id: 220,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Introdução à Testes em Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Testes em Dart",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "E47KZUOT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/E47KZUOT.pdf",
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
    id: 219,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Boas Práticas e Tratamento de Exceções em Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas e Tratamento de Exceções em Dart",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "WGJFOQRY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WGJFOQRY.pdf",
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
    id: 218,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Orientação a Objetos em Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Orientação a Objetos em Dart",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NZKXMO3M",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NZKXMO3M.pdf",
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
    id: 217,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Dominando Funções em Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Funções em Dart",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XSVJXYJK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XSVJXYJK.pdf",
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
    id: 216,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Estruturas Condicionais e de Repetição em Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estruturas Condicionais e de Repetição em Dart",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "5N0ZEWVA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5N0ZEWVA.pdf",
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
    id: 215,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Fundamentos da Linguagem Dart.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos da Linguagem Dart",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "SXB8D8AO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SXB8D8AO.pdf",
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
    id: 214,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · ·Digital Innovation One · Introdução ao Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Flutter",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ZURY2PGP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZURY2PGP.pdf",
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
    id: 213,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Primeiros Passos com Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Primeiros Passos com Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "F3JG9TCK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F3JG9TCK.pdf",
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
    id: 212,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Subindo o Seu Projeto Flutter no GitHub.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Subindo o Seu Projeto Flutter no GitHub",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "BVXXOJB1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BVXXOJB1.pdf",
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
    id: 211,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Criando Meu Primeiro Projeto em Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Meu Primeiro Projeto em Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "PLWFRKBU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PLWFRKBU.pdf",
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
    id: 210,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Ambiente de Desenvolvimento Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ambiente de Desenvolvimento Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "N7MRVB2Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/N7MRVB2Y.pdf",
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
    id: 209,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.17 · Digital Innovation One · Introdução ao Flutter.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Flutter",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NRRS3UFL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NRRS3UFL.pdf",
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
    id: 208,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Formação JavaScript Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação JavaScript Developer",
    cargaHoraria: "39 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "DXYA9OC9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DXYA9OC9.pdf",
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
    id: 207,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Currículo Online com HTML CSS e JavaScript (Da Prototipação ao Deploy).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Currículo Online com HTML CSS e JavaScript: da Prototipação ao Deploy",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "4KWY1YW6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4KWY1YW6.pdf",
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
    id: 206,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Avalie a Formação de JavaScript Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação de JavaScript Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "ID1VGE9E",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ID1VGE9E.pdf",
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
    id: 205,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares (Currículo Online com HTML CSS e JavaScript (Da Prototipação ao Deploy)).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Currículo Online com HTML CSS e JavaScript: Da Prototipação ao Deploy",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "WK7MNSLA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WK7MNSLA.pdf",
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
    id: 204,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Publicando Seu Portfólio Profissional no GitHub Pages.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Publicando Seu Portfólio Profissional no GitHub Pages",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "FZN7ABAG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FZN7ABAG.pdf",
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
    id: 203,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando e Estilizando uma Página de Portfólio Profissional com CSS e JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando e Estilizando uma Página de Portfólio Profissional com CSS e JavaScript",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "TNSW269I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TNSW269I.pdf",
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
    id: 202,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Dominando Conceitos Avançados em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Conceitos Avançados em JavaScript",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "TCLS389V",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TCLS389V.pdf",
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
    id: 201,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Dominando Conceitos Avançados em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Dominando Conceitos Avançados em JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "YVNPLHWV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YVNPLHWV.pdf",
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
    id: 200,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Promises e Assincronismo com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Promises e Assincronismo com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "XGIK4ZAZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XGIK4ZAZ.pdf",
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
    id: 199,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Funções e Manipulação de Listas com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Funções e Manipulação de Listas com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "VHJ7MT7D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VHJ7MT7D.pdf",
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
    id: 198,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Orientação a Protótipo com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Orientação a Protótipo com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "MDQCZIT1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MDQCZIT1.pdf",
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
    id: 197,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Aprendendo Variáveis Escopo e Tipos de dados no JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendendo Variáveis Escopo e Tipos de dados no JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "PEEIJRVO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PEEIJRVO.pdf",
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
    id: 196,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · JavaScript para Web (Fundamentos de HTML CSS e APIs na Prática).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "JavaScript para Web: Fundamentos de HTML CSS e APIs na Prática",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "QX5OFF0R",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QX5OFF0R.pdf",
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
    id: 195,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - JavaScript para Web (Fundamentos de HTML CSS e APIs na Prática).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - JavaScript para Web: Fundamentos de HTML CSS e APIs na Prática",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "MFRAZPDY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MFRAZPDY.pdf",
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
    id: 194,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Construindo uma Pokédex com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo uma Pokédex com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "RD8KSLY0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RD8KSLY0.pdf",
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
    id: 193,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Dominando o Protocolo HTTP e Integrando com a PokeAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando o Protocolo HTTP e Integrando com a PokeAPI",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "SLRPKQLQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SLRPKQLQ.pdf",
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
    id: 192,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando um Projeto com HTML·CSS para Listagem de Pokémon.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Projeto com HTML·CSS para Listagem de Pokémon",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "1EYDNPTP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1EYDNPTP.pdf",
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
    id: 191,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Introdução ao Desenvolvimento Web com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Desenvolvimento Web com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "VCEZIAUP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VCEZIAUP.pdf",
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
    id: 190,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Aprenda a Programar do Zero com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprenda a Programar do Zero com JavaScript",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "2AUKY6ND",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2AUKY6ND.pdf",
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
    id: 189,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Aprenda a Programar do Zero com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Aprenda a Programar do Zero com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "HG0OAZOO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HG0OAZOO.pdf",
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
    id: 188,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Desafios de Código - Formação JavaScript Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios de Código - Formação JavaScript Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
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
    id: 187,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Consolide Seu Conhecimento com Desafios de Código JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Consolide seu Conhecimento com Desafios de Código JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "3QHRQDQC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3QHRQDQC.pdf",
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
    id: 186,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Importação e Exportação com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Importação e Exportação com JavaScript",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "XILCWUBP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XILCWUBP.pdf",
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
    id: 185,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Arrays e Estruturas de Repetição em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Arrays e Estruturas de Repetição em JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "EVLOOMWC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EVLOOMWC.pdf",
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
    id: 184,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando Objetos e Classes em JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Objetos e Classes em JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "G4SL4CTL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G4SL4CTL.pdf",
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
    id: 183,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Conhecendo Funções JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo Funções JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "2JJHSGRQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2JJHSGRQ.pdf",
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
    id: 182,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Primeiros Passos Com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com JavaScript",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "IKDI62OX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IKDI62OX.pdf",
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
    id: 181,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Apresentação da Formação JavaScript Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Apresentação da Formação JavaScript Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "WJOPRVTG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WJOPRVTG.pdf",
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
    id: 180,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Formação CSS Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação CSS Web Developer",
    cargaHoraria: "43 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "2NFLK0AA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2NFLK0AA.pdf",
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
    id: 179,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Refinando os Estilos CSS das Nossas Páginas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Refinando os Estilos CSS das Nossas Páginas",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "AY3OI4ZI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AY3OI4ZI.pdf",
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
    id: 178,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Avalie a Formação CSS Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação CSS Web Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "ZTLK4BH8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZTLK4BH8.pdf",
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
    id: 177,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Refinando os Estilos CSS das Nossas Páginas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Refinando os Estilos CSS das Nossas Páginas",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "70EFKSFH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/70EFKSFH.pdf",
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
    id: 176,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Clonando o Site da HBO Max com Animações em HTML e CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Clonando o Site da HBO Max com Animações em HTML e CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "ANROXNFP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ANROXNFP.pdf",
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
    id: 175,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Iniciando com seu primeiro Framework em CSS (Bootstrap).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Iniciando com seu primeiro Framework em CSS (Bootstrap)",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "XKICBUWO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XKICBUWO.pdf",
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
    id: 174,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Boas Práticas e Convenções no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas e Convenções no CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "DBVYMYRE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DBVYMYRE.pdf",
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
    id: 173,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Transições e Animações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transições e Animações",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "3WEYDH0O",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3WEYDH0O.pdf",
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
    id: 172,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Pseudo Elementos e Pseudo Classes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Pseudo Elementos e Pseudo Classes",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "MMW9SIBS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MMW9SIBS.pdf",
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
    id: 171,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Trabalhando com Layouts no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Layouts no CSS",
    cargaHoraria: "17 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "QPAZPNVK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QPAZPNVK.pdf",
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
    id: 170,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Trabalhando Com Layouts no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Trabalhando Com Layouts no CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "COIQEYHY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/COIQEYHY.pdf",
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
    id: 169,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Construindo um Layout Responsivo Para o Site do Discord Com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo um Layout Responsivo Para o Site do Discord Com CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "UB7Z3PGP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UB7Z3PGP.pdf",
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
    id: 168,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Responsividade no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Responsividade no CSS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "9WQJNVLS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9WQJNVLS.pdf",
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
    id: 167,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Reproduzindo a Listagem do YouTube com Grid Layout no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Reproduzindo a Listagem do YouTube com Grid Layout no CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "BW4YVJ3P",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BW4YVJ3P.pdf",
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
    id: 166,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Dominando Grid Layouts no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Grid Layouts no CSS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "YAOIJR7K",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YAOIJR7K.pdf",
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
    id: 165,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Clonando a Página do Youtube com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Clonando a Página do Youtube com CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "JG8NUAZ5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JG8NUAZ5.pdf",
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
    id: 164,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Trabalhando com Flexbox no CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Flexbox no CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "NVE75SE8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NVE75SE8.pdf",
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
    id: 163,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Posicionamentos e Exibição de Elementos com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Posicionamentos e Exibição de Elementos com CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "IDZK8XPZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IDZK8XPZ.pdf",
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
    id: 162,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Primeiros Passos com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com CSS",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "MFIHEQ0I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MFIHEQ0I.pdf",
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
    id: 161,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Primeiros Passos com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Primeiros Passos com CSS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "3XLGHNAS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3XLGHNAS.pdf",
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
    id: 160,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando sua Primeira Landing Page com HTML e CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando sua Primeira Landing Page com HTML e CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "LAO8PJUR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LAO8PJUR.pdf",
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
    id: 159,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Unidades de Medida em CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Unidades de Medida em CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "Q4MXWCVV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Q4MXWCVV.pdf",
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
    id: 158,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Estilizações Básicas com CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estilizações Básicas com CSS",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "DPTLFQG9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DPTLFQG9.pdf",
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
    id: 157,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Fundamentos do CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos do CSS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "RAVH76T6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RAVH76T6.pdf",
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
    id: 156,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Formação HTML Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação HTML Web Developer",
    cargaHoraria: "21 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "IDZK8XPZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IDZK8XPZ.pdf",
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
    id: 155,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · HTML II (Ampliando o Conhecimento).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "HTML II: Ampliando o Conhecimento",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "LDH2DGP8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LDH2DGP8.pdf",
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
    id: 154,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Avalie a Formação de HTML Web Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação de HTML Web Developer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "5O3CHETA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5O3CHETA.pdf",
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
    id: 153,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Ampliando Conhecimento.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Ampliando Conhecimento",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "WXLGW66N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WXLGW66N.pdf",
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
    id: 152,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Recriando o Wikipedia com Layout Moderno.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Recriando o Wikipedia com Layout Moderno",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "CNAELT1E",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CNAELT1E.pdf",
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
    id: 151,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · HTML (Recursos Especiais).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "HTML: Recursos Especiais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "MRNGSCU4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MRNGSCU4.pdf",
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
    id: 150,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Entendendo HTML Semântico.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo HTML Semântico",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "3LAYLWJD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3LAYLWJD.pdf",
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
    id: 149,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · HTML I (Conceitos Básicos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "HTML I: Conceitos Básicos",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "NLCNGRBY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NLCNGRBY.pdf",
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
    id: 148,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Conceitos Básicos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Conceitos Básicos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "CCJ4HDQN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CCJ4HDQN.pdf",
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
    id: 147,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando seu Primeiro Site Completo com HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando seu Primeiro Site Completo com HTML",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "D5F8UNSA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/D5F8UNSA.pdf",
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
    id: 146,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criando Tabelas com HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Tabelas com HTML",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "CW9JBSG2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CW9JBSG2.pdf",
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
    id: 145,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Trabalhando com Mídias utilizando HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Mídias utilizando HTML",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "EVCUCVMZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EVCUCVMZ.pdf",
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
    id: 144,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Estruturando seu HTML Formatações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estruturando seu HTML + Formatações",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "JYTSDUHR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JYTSDUHR.pdf",
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
    id: 143,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Trabalhando com Formulários em HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Formulários em HTML",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "WOGQVZ8T",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WOGQVZ8T.pdf",
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
    id: 142,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Primeiros Passos com HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com HTML",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "P1YALTDP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/P1YALTDP.pdf",
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
    id: 141,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Materiais Complementares - Primeiros Passos com HTML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Primeiros Passos com HTML",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "XRPQHTNW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XRPQHTNW.pdf",
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
    id: 140,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Criar Uma Página Web Utilizando as Tags Aprendidas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criar Uma Página Web Utilizando as Tags Aprendidas",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "5WVUWOAA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5WVUWOAA.pdf",
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
    id: 139,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Introdução ao HTML na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao HTML na Prática",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "M5DDDWQM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M5DDDWQM.pdf",
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
    id: 138,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.14 · Digital Innovation One · Entendendo Comunicação Client x Server.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo Comunicação Client x Server",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-14",
    dataConclusao: "14 de abril de 2026",
    codigo: "KRGMFBC0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KRGMFBC0.pdf",
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
    id: 137,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.12 · Instituto Federal Espírito Santo · Lovelace (Programação Python e C).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Espírito Santo",
    curso: "Lovelace: Programação Python e C",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-04-12",
    dataConclusao: "12 de abril de 2026",
    codigo: "824cabdf-6ee1-4ac0-b510-b88403958955",
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
    id: 136,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.26 · FIAP - Centro Universitário · Python™ Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Python™ Development",
    cargaHoraria: "80 h",
    conclusaoISO: "2026-02-26",
    dataConclusao: "26 de fevereiro de 2026",
    codigo: "1362714bf7177e71557a2c2c129d7b08",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=1362714bf7177e71557a2c2c129d7b08&action=view",
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
    id: 135,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.26 · FIAP - Centro Universitário · Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Python™",
    cargaHoraria: "80 h",
    conclusaoISO: "2026-02-26",
    dataConclusao: "26 de fevereiro de 2026",
    codigo: "59059d6b258a37f6e245b2bc889970d4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=59059d6b258a37f6e245b2bc889970d4&action=view",
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
    id: 134,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.24 · FIAP - Centro Universitário · Learn to Program.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Learn to Program",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-02-24",
    dataConclusao: "24 de fevereiro de 2026",
    codigo: "580bf01e74703eb88c2953a576d8c367",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=580bf01e74703eb88c2953a576d8c367&action=view",
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
    id: 133,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.20 · FIAP - Centro Universitário · Java Fundamentos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Java Fundamentos",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-02-20",
    dataConclusao: "20 de fevereiro de 2026",
    codigo: "174c689402730cad010870a3dc772633",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=174c689402730cad010870a3dc772633&action=view",
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
    id: 132,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.20 · FIAP - Centro Universitário · Java Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Java Development",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-02-20",
    dataConclusao: "20 de fevereiro de 2026",
    codigo: "d7114c632df66fb36686c3dbd82768a8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=d7114c632df66fb36686c3dbd82768a8&action=view",
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
    id: 131,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.17 · FIAP - Centro Universitário · Engenharia de Software.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Engenharia de Software",
    cargaHoraria: "100 h",
    conclusaoISO: "2026-02-17",
    dataConclusao: "17 de fevereiro de 2026",
    codigo: "280f07079eb92809633af50fa99b1eef",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=280f07079eb92809633af50fa99b1eef&action=view",
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
    id: 130,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.02.16 · FIAP - Centro Universitário · DevOps & Agile Culture.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "DevOps & Agile Culture",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-02-16",
    dataConclusao: "16 de fevereiro de 2026",
    codigo: "b875c0b372f1b39a78d3f7cd68718f0d",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=b875c0b372f1b39a78d3f7cd68718f0d&action=view",
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
    id: 129,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.12.14 · Cursa · Python™ 3 Básico ao Avançado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Python™ 3 Básico ao Avançado",
    cargaHoraria: "200 h",
    conclusaoISO: "2025-12-14",
    dataConclusao: "14 de dezembro de 2025",
    codigo: "d0444f35e2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/d0444f35e2",
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
    id: 128,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.22 · Instituto Federal Rio Grande do Sul · Programador Web.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Programador Web",
    cargaHoraria: "200 h",
    conclusaoISO: "2025-11-22",
    dataConclusao: "22 de novembro de 2025",
    codigo: "69214edf-c3e4-4ec9-bc0e-389d0aa81311",
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
    id: 127,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Luizalabs (Back-End com Python™).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Luizalabs - Back-End com Python™",
    cargaHoraria: "62 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "CGCYYCJL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CGCYYCJL.pdf",
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
    id: 126,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Aumentando a Produtividade com Inteligência Artificial e Versionamento de Código.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aumentando a Produtividade com Inteligência Artificial e Versionamento de Código",
    cargaHoraria: "7 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "F3QTY6JB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F3QTY6JB.pdf",
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
    id: 125,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Utilizando as Ferramentas do GitHub para Solucionar Algoritmos em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Utilizando as Ferramentas do GitHub para Solucionar Algoritmos em Python™",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "O8QVFEKT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/O8QVFEKT.pdf",
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
    id: 124,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Técnicas de Engenharia de Prompt.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Técnicas de Engenharia de Prompt",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "XHITDJ9E",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XHITDJ9E.pdf",
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
    id: 123,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Bases de Prompt Engineering para o GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Bases de Prompt Engineering para o GitHub Copilot",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "WLRYOZRX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WLRYOZRX.pdf",
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
    id: 122,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Configurando e usando o GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configurando e usando o GitHub Copilot",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "TCN1ZA7J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TCN1ZA7J.pdf",
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
    id: 121,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.06 · Digital Innovation One · Conhecendo o GitHub Copilot (Aumentando sua Produtividade na Programação).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o GitHub Copilot: Aumentando sua Produtividade na Programação",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-06",
    dataConclusao: "06 de novembro de 2025",
    codigo: "0BYIBOYZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0BYIBOYZ.pdf",
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
    id: 120,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Evoluindo com APIs Assíncronas com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Evoluindo com APIs Assíncronas com FastAPI",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "YC6WJN9F",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YC6WJN9F.pdf",
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
    id: 119,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Criando sua API Bancária Assíncrona com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando sua API Bancária Assíncrona com FastAPI",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "VUVVHMGT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VUVVHMGT.pdf",
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
    id: 118,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Boas Práticas para APIs Restful Assíncronas com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas para APIs Restful Assíncronas com FastAPI",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "R7XOQOKI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/R7XOQOKI.pdf",
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
    id: 117,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Deploy de uma API FastAPI Assíncrona.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deploy de uma API FastAPI Assíncrona",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "ZNDNIKBC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZNDNIKBC.pdf",
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
    id: 116,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Testando APIs Restful Assíncronas em FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Testando APIs Restful Assíncronas em FastAPI",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "LVKR6QBM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LVKR6QBM.pdf",
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
    id: 115,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Autenticação e Autorização em FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Autenticação e Autorização em FastAPI",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "FTCKUDYB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FTCKUDYB.pdf",
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
    id: 114,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.05 · Digital Innovation One · Manipulação de Dados com FastAPI Assíncrono.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulação de Dados com FastAPI Assíncrono",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-05",
    dataConclusao: "05 de novembro de 2025",
    codigo: "MDYKLL1P",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MDYKLL1P.pdf",
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
    id: 113,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.04 · Digital Innovation One · Integrando Python™ com Banco de Dados Relacionais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Integrando Python™ com Banco de Dados Relacionais",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-11-04",
    dataConclusao: "04 de novembro de 2025",
    codigo: "HHYWZT9U",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HHYWZT9U.pdf",
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
    id: 112,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.04 · Digital Innovation One · Integrando Python™ com Banco de Dados Relacionais Utilizando SQLAlchemy.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Integrando Python™ com Banco de Dados Relacionais Utilizando SQLAlchemy",
    cargaHoraria: "3 h",
    conclusaoISO: "2025-11-04",
    dataConclusao: "04 de novembro de 2025",
    codigo: "ABNHXTN3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ABNHXTN3.pdf",
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
    id: 111,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.04 · Digital Innovation One · Explorando Banco de Dados Relacionais com Python™ DB API.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Banco de Dados Relacionais com Python™ DB API",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-04",
    dataConclusao: "04 de novembro de 2025",
    codigo: "VD55TFIX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VD55TFIX.pdf",
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
    id: 110,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.04 · Digital Innovation One · Introdução Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução Banco de Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-04",
    dataConclusao: "04 de novembro de 2025",
    codigo: "4W97C5MZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4W97C5MZ.pdf",
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
    id: 109,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Fundamentos de APIs Rest com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de APIs Rest com FastAPI",
    cargaHoraria: "9 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "7X3LEQGV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7X3LEQGV.pdf",
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
    id: 108,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Desenvolvendo sua Primeira API com FastAPI, Python™ e Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvendo sua Primeira API com FastAPI, Python™ e Docker",
    cargaHoraria: "3 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "49GQOYAZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/49GQOYAZ.pdf",
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
    id: 107,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Primeiros Passos com FastAPI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com FastAPI",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "MRIHGQKX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MRIHGQKX.pdf",
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
    id: 106,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Introdução ao FestAPI paara APIs Restful Assíncronas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao FestAPI paara APIs Restful Assíncronas",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "I6COOFMB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/I6COOFMB.pdf",
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
    id: 105,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Boas Práticas para APIs Restful.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas Práticas para APIs Restful",
    cargaHoraria: "3 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "VPMGEMAU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VPMGEMAU.pdf",
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
    id: 104,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.03 · Digital Innovation One · Introdução a Aplicações Rest.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Aplicações Rest",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-03",
    dataConclusao: "03 de novembro de 2025",
    codigo: "IEHFHEK6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IEHFHEK6.pdf",
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
    id: 103,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Programação Orientada a Objetos com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação Orientada a Objetos com Python™",
    cargaHoraria: "7 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "N9Y9APKR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/N9Y9APKR.pdf",
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
    id: 102,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Fundamentos de POO em Soluções Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de POO em Soluções Digitais",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
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
    id: 101,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Modelando o Sistema Bancário em POO com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelando o Sistema Bancário em POO com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "THOWM4MB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/THOWM4MB.pdf",
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
    id: 100,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Interfaces e Classes Abstratas com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Interfaces e Classes Abstratas com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "IZRGO4KJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IZRGO4KJ.pdf",
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
    id: 99,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Conhecendo Polimorfismo em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo Polimorfismo em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "1WFK8XN0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1WFK8XN0.pdf",
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
    id: 98,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Aplicando Encapsulamento em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicando Encapsulamento em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "VIQ5G3GF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VIQ5G3GF.pdf",
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
    id: 97,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Aprendendo o Conceito de Herança com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendendo o Conceito de Herança com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "EJR6RKXR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EJR6RKXR.pdf",
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
    id: 96,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.02 · Digital Innovation One · Introdução à Programação Orientada a Objetos com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Programação Orientada a Objetos com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-02",
    dataConclusao: "02 de novembro de 2025",
    codigo: "CDSRYPRX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CDSRYPRX.pdf",
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
    id: 95,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Dominando Funções e Boas Práticas em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Funções e Boas Práticas em Python™",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "PL7XQIOL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PL7XQIOL.pdf",
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
    id: 94,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Entendendo Funções em Soluções Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo Funções em Soluções Digitais",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
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
    id: 93,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Gerenciamento de Pacotes, Convenções e Boas Práticas Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Pacotes, Convenções e Boas Práticas Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "JIBXHMFP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JIBXHMFP.pdf",
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
    id: 92,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Manipulando Arquivos em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando Arquivos em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "QFSRMLVZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QFSRMLVZ.pdf",
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
    id: 91,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Decoradores, Iteradores e Geradores com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Decoradores, Iteradores e Geradores com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "TB2ZGH66",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TB2ZGH66.pdf",
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
    id: 90,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Otimizando o Sistema Bancário com Funções Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimizando o Sistema Bancário com Funções Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "YILKRTGV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YILKRTGV.pdf",
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
    id: 89,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.11.01 · Digital Innovation One · Dominando Funções Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dominando Funções Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-01",
    dataConclusao: "01 de novembro de 2025",
    codigo: "DYJQ11G1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DYJQ11G1.pdf",
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
    id: 88,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Primeiros Passos com Python™ e Versionamento de Código.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com Python™ e Versionamento de Código",
    cargaHoraria: "16 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "M3DZRU8W",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M3DZRU8W.pdf",
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
    id: 87,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Live de Lançamento - Luizlabs Back-End com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento - Luizlabs Back-End com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "6CI6Z02K",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6CI6Z02K.pdf",
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
    id: 86,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Aprendendo a Utilizar Dicionários em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendendo a Utilizar Dicionários em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "VJ3FQL0A",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VJ3FQL0A.pdf",
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
    id: 85,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Conhecendo Tuplas em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo Tuplas em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "7FM89TPL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7FM89TPL.pdf",
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
    id: 84,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Trabalhando com Listas em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Listas em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "QNSKT5CU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QNSKT5CU.pdf",
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
    id: 83,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Manipulando Strings com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulando Strings com Python™",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "FWC6UIMV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FWC6UIMV.pdf",
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
    id: 82,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Estruturas Condicionais e de Repetição em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Estruturas Condicionais e de Repetição em Python™",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "LTKPG60Q",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LTKPG60Q.pdf",
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
    id: 81,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Tipos de Operadores com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tipos de Operadores com Python™",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "PGSA276S",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PGSA276S.pdf",
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
    id: 80,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Conhecendo a Linguagem de Programação Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo a Linguagem de Programação Python™",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "IYLG2DGQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IYLG2DGQ.pdf",
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
    id: 79,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.31 · Digital Innovation One · Ambiente de Desenvolvimento e Primeiros Passos com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ambiente de Desenvolvimento e Primeiros Passos com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-31",
    dataConclusao: "31 de outubro de 2025",
    codigo: "JWTADHWH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JWTADHWH.pdf",
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
    id: 78,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.30 · Digital Innovation One · Introdução ao Bootcamp - Back-End com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Bootcamp - Back-End com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "GZ55XXWJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GZ55XXWJ.pdf",
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
    id: 77,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.28 · Instituto Federal Minas Gerais · Programador Web em Tecnologias Front-End.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Programador Web em Tecnologias Front-End",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-10-28",
    dataConclusao: "28 de outubro de 2025",
    codigo: "69010c57-3638-436a-aa2e-ad05c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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
    id: 76,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.28 · Instituto Federal Minas Gerais · Programação Web (Avançado).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Programação Web (Avançado)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-28",
    dataConclusao: "28 de outubro de 2025",
    codigo: "6900d165-0454-4c33-8027-82ddc883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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
    id: 75,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.28 · Instituto Federal Minas Gerais · Programação Web (Básico).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Programação Web (Básico)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-28",
    dataConclusao: "28 de outubro de 2025",
    codigo: "6900bb27-d948-4f1f-8bbe-7115c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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
    id: 74,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.23 · IBM SkillsBuild · Seu Futuro no Desenvolvimento Web (O Panorama de Emprego).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Seu Futuro no Desenvolvimento Web: O Panorama de Emprego",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-23",
    dataConclusao: "23 de outubro de 2025",
    codigo: "MDL-267",
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
    id: 73,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.23 · IBM SkillsBuild · Desenvolva uma Página da Web de Lista de Tarefas Interativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Desenvolva uma Página da Web de Lista de Tarefas Interativa",
    cargaHoraria: "1 h 50 min",
    conclusaoISO: "2025-10-23",
    dataConclusao: "23 de outubro de 2025",
    codigo: "MDL-266",
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
    id: 72,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.23 · IBM SkillsBuild · Teste e Implementação de Website.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Teste e Implementação de Website",
    cargaHoraria: "2 h 10 min",
    conclusaoISO: "2025-10-23",
    dataConclusao: "23 de outubro de 2025",
    codigo: "MDL-265",
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
    id: 71,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.23 · IBM SkillsBuild · Dando Vida aos Websites com JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Dando Vida aos Websites com JavaScript",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-23",
    dataConclusao: "23 de outubro de 2025",
    codigo: "MDL-264",
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
    id: 70,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.23 · IBM SkillsBuild · Introdução ao HTML e CSS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Introdução ao HTML e CSS",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-23",
    dataConclusao: "23 de outubro de 2025",
    codigo: "MDL-263",
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
    id: 69,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.22 · IBM SkillsBuild · Desenvolvendo Sites para Web.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Desenvolvendo Sites para Web",
    cargaHoraria: "1 h 40 min",
    conclusaoISO: "2025-10-22",
    dataConclusao: "22 de outubro de 2025",
    codigo: "MDL-262",
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
    id: 68,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.21 · IBM SkillsBuild · Fundamentos do Desenvolvimento Web.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Fundamentos do Desenvolvimento Web",
    cargaHoraria: "1 h 40 min",
    conclusaoISO: "2025-10-21",
    dataConclusao: "21 de outubro de 2025",
    codigo: "MDL-261",
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
    id: 67,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.21 · IBM SkillsBuild · Aprenda JavaScript (Curso Completo para Iniciantes).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "IBM SkillsBuild",
    curso: "Aprenda JavaScript - Curso Completo para Iniciantes",
    cargaHoraria: "3 h 26 min",
    conclusaoISO: "2025-10-21",
    dataConclusao: "21 de outubro de 2025",
    codigo: "URL-PKZNO7MFNFG",
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
    id: 66,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.19 · Instituto Federal Rio Grande do Sul · Projeto de Sistemas Web.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Projeto de Sistemas Web",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-10-19",
    dataConclusao: "19 de outubro de 2025",
    codigo: "68f5682f-09c0-4a2f-a263-6ed90aa80707",
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
    id: 65,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.19 · Instituto Federal Rio Grande do Sul · Raspberry PI e Aplicações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Raspberry PI e Aplicações",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-19",
    dataConclusao: "19 de outubro de 2025",
    codigo: "68f4d859-3d7c-4567-92fa-be0c0aa80707",
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
    id: 64,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.19 · Instituto Federal Rio Grande do Sul · Raspberry PI Básico para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Raspberry PI Básico para IoT",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-19",
    dataConclusao: "19 de outubro de 2025",
    codigo: "68f4bc8b-4908-4eed-a562-98380aa8060b",
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
    id: 63,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.18 · Instituto Federal Rio Grande do Sul · Node.js (Introdução ao Desenvolvimento de APIs Modernas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Node.js: Introdução ao Desenvolvimento de APIs Modernas",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-18",
    dataConclusao: "18 de outubro de 2025",
    codigo: "68f32f26-9800-449f-946c-7ab20aa80016",
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
    id: 62,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.17 · Instituto Federal Rio Grande do Sul · Lógica de Programação (Múltiplos Valores e Módulos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Lógica de Programação: Múltiplos Valores e Módulos",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-17",
    dataConclusao: "17 de outubro de 2025",
    codigo: "68f2ec6d-821c-473c-9463-6a100aa80215",
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
    id: 61,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.17 · Instituto Federal Rio Grande do Sul · Lógica de Programação (Deixando os Seus Programas Espertos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Lógica de Programação: Deixando os Seus Programas Espertos",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-17",
    dataConclusao: "17 de outubro de 2025",
    codigo: "68f2de8f-5950-49af-a898-5b350aa80215",
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
    id: 60,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.17 · Instituto Federal Rio Grande do Sul · Lógica de Programação (Começando a Desenvolver seus Primeiros Programas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Lógica de Programação: Começando a Desenvolver seus Primeiros Programas",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-10-17",
    dataConclusao: "17 de outubro de 2025",
    codigo: "68f2ce6e-12e8-41e5-87f9-32530aa80e35",
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
    id: 59,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.17 · Instituto Federal Rio Grande do Sul · Programação Básica com Java III.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Programação Básica com Java III",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-17",
    dataConclusao: "17 de outubro de 2025",
    codigo: "68f2bb81-4e2c-4b52-b442-976b0aa8012a",
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
    id: 58,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.16 · Hashtag Treinamentos · Intensivão de JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Intensivão de JavaScript",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-10-16",
    dataConclusao: "16 de outubro de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Intensivão+de+JavaScript&dtcf=16%2F10%2F2025&hcf=8",
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
    id: 57,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.15 · Instituto Federal Rio Grande do Sul · Programação Básica com Java II.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Programação Básica com Java II",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "68f05b59-8ae8-4676-96f1-595c0aa80016",
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
    id: 56,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.14 · Instituto Federal Rio Grande do Sul · Programação Básica com Java I.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Programação Básica com Java I",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "68eeebda-15e8-4c4b-90c2-dd550aa80e35",
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
    id: 55,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.14 · Cursa · HTML5 & CSS3 na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "HTML5 & CSS3 na Prática",
    cargaHoraria: "7 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "73bd10c79f",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/73bd10c79f",
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
    id: 54,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.13 · Instituto Federal Rio Grande do Sul · React (Construindo Single Page Applications Dinâmicas e Interativas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "React: Construindo Single Page Applications Dinâmicas e Interativas",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-13",
    dataConclusao: "13 de outubro de 2025",
    codigo: "68eda869-c068-46f2-bbe9-62cb0aa80215",
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
    id: 53,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.13 · Instituto Federal Rio Grande do Sul · React Native (Criação de Aplicativos Móveis Modernos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "React Native: Criação de Aplicativos Móveis Modernos",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-13",
    dataConclusao: "13 de outubro de 2025",
    codigo: "68ed8753-5340-4f6f-a151-3a160aa80215",
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
    id: 52,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.12 · Instituto Federal Rio Grande do Sul · JavaScript (Fundamentos para Desenvolvimento Web Interativo).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "JavaScript: Fundamentos para Desenvolvimento Web Interativo",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-12",
    dataConclusao: "12 de outubro de 2025",
    codigo: "68ec52a4-bcfc-40ed-ab7d-73cc0aa8010b",
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
    id: 51,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.12 · Instituto Federal Rio Grande do Sul · CSS3 (Estilizando Páginas Web com Estilo).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "CSS3: Estilizando Páginas Web com Estilo",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-12",
    dataConclusao: "12 de outubro de 2025",
    codigo: "68ec246e-df38-4d22-bd1f-3aff0aa8010b",
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
    id: 50,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.10.12 · Instituto Federal Rio Grande do Sul · HTML5 (Fundamentos para Construção de Páginas Web Modernas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "HTML5: Fundamentos para Construção de Páginas Web Modernas",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-10-12",
    dataConclusao: "12 de outubro de 2025",
    codigo: "68ebe0d5-4f4c-4bdd-a46d-050a0aa80f17",
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
    id: 49,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.09.29 · Aprenda Mais · Python™ Fundamental 2.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aprenda Mais",
    curso: "Python™ Fundamental 2",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-09-29",
    dataConclusao: "29 de setembro de 2025",
    codigo: "68da9521-7470-4e6a-9517-90ebac1f02f0",
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
    id: 48,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.09.29 · Aprenda Mais · Python™ Fundamental 1.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aprenda Mais",
    curso: "Python™ Fundamental 1",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-09-29",
    dataConclusao: "29 de setembro de 2025",
    codigo: "68da94ce-2cfc-4cb6-a508-8f1bac1f03d2",
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
    id: 47,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.08.10 · Cursa · Excel VBA Básico ao Avançado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Excel VBA Básico ao Avançado",
    cargaHoraria: "18 h",
    conclusaoISO: "2025-08-10",
    dataConclusao: "10 de agosto de 2025",
    codigo: "07f73cf973",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/07f73cf973",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.06.05 · Instituto Federal Mato Grosso do Sul · Lógica de Programação com Arduino (Nível Intermediário).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Mato Grosso do Sul",
    curso: "Lógica de Programação com Arduino: Nível Intermediário",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-06-05",
    dataConclusao: "05 de junho de 2025",
    codigo: "6841755d-314c-4953-9411-0fbe0a01004c",
    mostrarCopiar: true,
    verificacao: {
      url: "https://cursoslivres.ifms.edu.br/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.06.04 · Instituto Federal Sul-Rio-Grandense · CSS (Folhas de Estilo Encadeadas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "CSS: Folhas de Estilo Encadeadas",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-06-04",
    dataConclusao: "04 de junho de 2025",
    codigo: "683fe705-39e8-46bd-b37b-b4320a00c840",
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
    id: 44,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.06.04 · Instituto Federal Mato Grosso do Sul · Introdução à Lógica de Programação com Arduino.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Mato Grosso do Sul",
    curso: "Introdução à Lógica de Programação com Arduino",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-06-04",
    dataConclusao: "04 de junho de 2025",
    codigo: "683fd7a0-364c-49b2-ab77-c1d70a01004c",
    mostrarCopiar: true,
    verificacao: {
      url: "https://cursoslivres.ifms.edu.br/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.06.03 · Instituto Federal Sul-Rio-Grandense · Lógica de Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Lógica de Programação",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-06-03",
    dataConclusao: "03 de junho de 2025",
    codigo: "683e9358-5bfc-4530-9dce-96a90a00c840",
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
    id: 42,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.30 · Instituto Federal Espírito Santo - Node.js para Iniciantes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Espírito Santo",
    curso: "Node.js para Iniciantes",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-05-30",
    dataConclusao: "30 de maio de 2025",
    codigo: "683a5a51-6bf0-47ab-af5c-8ed0ac1a2c07",
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
    id: 41,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.26 · Instituto Federal Minas Gerais · Programação para Dispositivos Móveis (Avançado).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Programação para Dispositivos Móveis (Avançado)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-26",
    dataConclusao: "26 de maio de 2025",
    codigo: "683461d2-eaf4-45c8-a70a-4367c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.23 · Instituto Federal Minas Gerais · Programação para Dispositivos Móveis (Básico).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Programação para Dispositivos Móveis (Básico)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-23",
    dataConclusao: "23 de maio de 2025",
    codigo: "68308ecc-ef0c-4de9-98a9-1812c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.21 · Instituto Federal Sul-Rio-Grandense · Linguagem PHP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Linguagem PHP",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-21",
    dataConclusao: "21 de maio de 2025",
    codigo: "682dad9b-3f64-4d3e-99c4-15290a00c840",
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
    id: 38,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.18 · Instituto Federal Minas Gerais · Operador e Programador de Sistemas Automatizados - Práticas Iniciais em CLP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Operador e Programador de Sistemas Automatizados - Práticas Iniciais em CLP",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-05-18",
    dataConclusao: "18 de maio de 2025",
    codigo: "6829df5e-bc14-4155-bc51-f916c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.18 · Instituto Federal Sul-Rio-Grandense · Linguagem JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Linguagem JavaScript",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-05-18",
    dataConclusao: "18 de maio de 2025",
    codigo: "6829d3b6-f758-490d-9fd1-b81e0a00c840",
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
    id: 36,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.08 · Hashtag Treinamentos · Jornada Full Stack da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Full Stack da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-05-08",
    dataConclusao: "08 de maio de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Full+Stack+da+Hashtag&dtcf=08%2F05%2F2025&hcf=8",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.07 · Instituto Federal Sul-Rio-Grandense · Fundamentos de Programação com Linguagem Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Fundamentos de Programação com Linguagem Python™",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-07",
    dataConclusao: "07 de maio de 2025",
    codigo: "681b9328-1680-4700-872d-46530a00c840",
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
    id: 34,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.06 · Instituto Federal Sul-Rio-Grandense · Fundamentos da Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Fundamentos da Programação",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-05-06",
    dataConclusao: "06 de maio de 2025",
    codigo: "681a5cfa-3488-40b1-a251-1ce30a00c840",
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
    id: 33,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.05 · Instituto Federal Minas Gerais · .Net (Avançado).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: ".Net: Avançado",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-05",
    dataConclusao: "05 de maio de 2025",
    codigo: "681937b5-f510-41f3-82fe-8359c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.05 · Instituto Federal Sul-Rio-Grandense · Linguagens de Programação Orientadas a Objetos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Linguagens de Programação Orientadas a Objetos",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-05",
    dataConclusao: "05 de maio de 2025",
    codigo: "6818eef6-76f8-4a13-b67e-f3bf0a00c840",
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
    id: 31,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.02 · Instituto Federal Minas Gerais · .Net (Básico).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: ".Net: Básico",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-02",
    dataConclusao: "02 de maio de 2025",
    codigo: "68150034-5408-4af8-b108-3082c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.02 · Instituto Federal Sul-Rio-Grandense · Introdução à Programação Orientada a Objetos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Introdução à Programação Orientada a Objetos",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-02",
    dataConclusao: "02 de maio de 2025",
    codigo: "6814f318-f74c-4883-adaf-81990a00c840",
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
    id: 29,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.02 · Instituto Federal Minas Gerais · JavaScript (Avançado).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "JavaScript (Avançado)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-02",
    dataConclusao: "02 de maio de 2025",
    codigo: "6814edc1-2208-45ae-8e03-261cc883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.02 · Instituto Federal Sul-Rio-Grandense · Introdução à Lógica de Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Introdução à Lógica de Programação",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-02",
    dataConclusao: "02 de maio de 2025",
    codigo: "6814e6d2-34bc-4810-9e9b-7f930a00c840",
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
    id: 27,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.05.01 · Instituto Federal Minas Gerais · JavaScript (Básico).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "JavaScript (Básico)",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-05-01",
    dataConclusao: "01 de maio de 2025",
    codigo: "6813c8ce-129c-44a4-a522-8290c883362e",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.13 · FIAP - Centro Universitário · Engenharia de Software.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Engenharia de Software",
    cargaHoraria: "100 h",
    conclusaoISO: "2025-04-13",
    dataConclusao: "13 de abril de 2025",
    codigo: "720f3468ec6e53e09beb3ebb598ec073",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=720f3468ec6e53e09beb3ebb598ec073&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.11 · FIAP - Centro Universitário · Learn to Program.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Learn to Program",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-04-11",
    dataConclusao: "11 de abril de 2025",
    codigo: "6c855188e3fd265809408eaf99edfc3a",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=6c855188e3fd265809408eaf99edfc3a&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.09 · FIAP - Centro Universitário · Java Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Java Development",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-04-09",
    dataConclusao: "09 de abril de 2025",
    codigo: "c2ba518890adab2e51ca681533446da3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=c2ba518890adab2e51ca681533446da3&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.08 · FIAP - Centro Universitário · Python™ Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Python™ Development",
    cargaHoraria: "80 h",
    conclusaoISO: "2025-04-08",
    dataConclusao: "08 de abril de 2025",
    codigo: "08ffb2bec6b23a78e44cf618568eb774",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=08ffb2bec6b23a78e44cf618568eb774&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.06 · Instituto Federal Minas Gerais · Python™ Avançado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Python™ Avançado",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-04-06",
    dataConclusao: "06 de abril de 2025",
    codigo: "67f29d0c-9e64-45ee-afa8-ddacac140047",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.04.02 · Instituto Federal Minas Gerais · Python™ Básico.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Python™ Básico",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-04-02",
    dataConclusao: "02 de abril de 2025",
    codigo: "67ed5ead-e6e8-4bce-92c5-35b4ac140047",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.03.31 · Instituto Federal Minas Gerais · Conceitos Avançados sobre Algoritmos e Programação com a Linguagem Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Conceitos Avançados sobre Algoritmos e Programação com a Linguagem Java",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-03-31",
    dataConclusao: "31 de março de 2025",
    codigo: "67eaed99-8e10-4349-9567-929eac140047",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.03.29 · Instituto Federal Minas Gerais · Introdução aos Algoritmos e à Programação Básica com a Linguagem Java.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Introdução aos Algoritmos e à Programação Básica com a Linguagem Java",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-03-29",
    dataConclusao: "29 de março de 2025",
    codigo: "67e824f8-9930-45e2-8878-c590ac140047",
    mostrarCopiar: true,
    verificacao: {
      url: "https://mais.ifmg.edu.br/maisifmg/mod/simplecertificate/verify.php",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.03.06 · FIAP - Centro Universitário · Java Fundamentos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Java Fundamentos",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-03-06",
    dataConclusao: "06 de março de 2025",
    codigo: "5010269e72159061bd900480ffdffb1f",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=5010269e72159061bd900480ffdffb1f&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.03.05 · FIAP - Centro Universitário · DevOps & Agile Culture.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "DevOps & Agile Culture",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-03-05",
    dataConclusao: "05 de março de 2025",
    codigo: "53196b57f1e68e51e1077c7314d571b7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=8bd56d63a7d5069d02dbacad78a0830c&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.03.03 · FIAP - Centro Universitário · Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Python™",
    cargaHoraria: "80 h",
    conclusaoISO: "2025-03-03",
    dataConclusao: "03 de março de 2025",
    codigo: "8bd56d63a7d5069d02dbacad78a0830c",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=8bd56d63a7d5069d02dbacad78a0830c&action=view",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2025.02.13 · Hashtag Treinamentos · Jornada Full Stack da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Full Stack da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-02-13",
    dataConclusao: "13 de fevereiro de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Full+Stack+da+Hashtag&dtcf=13%2F02%2F2025&hcf=8",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.18 · Didática Tech · Python™ Básico para Iniciantes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Didática Tech",
    curso: "Python™ Básico para Iniciantes",
    cargaHoraria: "4 h",
    conclusaoISO: "2024-11-18",
    dataConclusao: "18 de novembro de 2024",
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
    id: 13,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.11 · Fundação Bradesco · Desenvolvendo um Projeto Completo Python™ com Estruturas de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Desenvolvendo um Projeto Completo Python™ com Estruturas de Dados",
    cargaHoraria: "10 h",
    conclusaoISO: "2024-11-11",
    dataConclusao: "11 de novembro de 2024",
    codigo: "56EAA44F-2D19-43EE-A5CA-28E4704DA8A5",
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
  },
  
  {
    id: 12,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.10 · Fundação Bradesco · Criando um Projeto com Interface Gráfica Utilizando a Linguagem Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Criando um Projeto com Interface Gráfica Utilizando a Linguagem Python™",
    cargaHoraria: "10 h",
    conclusaoISO: "2024-11-10",
    dataConclusao: "10 de novembro de 2024",
    codigo: "D0DB107B-DF97-4D22-B81F-2113BCF1FBB1",
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
  },
  
  {
    id: 11,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.10 · Didática Tech · TensorFlow para Iniciantes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Didática Tech",
    curso: "TensorFlow para Iniciantes",
    cargaHoraria: "4 h",
    conclusaoISO: "2024-11-10",
    dataConclusao: "10 de novembro de 2024",
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
    id: 10,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.09 · Santander Open Academy · Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Santander Open Academy",
    curso: "Python™",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-11-09",
    dataConclusao: "09 de novembro de 2024",
    codigo: "OA-2024-1109000649689",
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
    id: 9,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.09 · Fundação Bradesco · Desenvolvimento Orientado a Objetos Utilizando a Linguagem Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Desenvolvimento Orientado a Objetos Utilizando a Linguagem Python™",
    cargaHoraria: "10 h",
    conclusaoISO: "2024-11-09",
    dataConclusao: "09 de novembro de 2024",
    codigo: "00CFAAC0-8018-49A1-B526-84C4279CB486",
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
  },
  
  {
    id: 8,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.09 · Escola Nacional de Administração Pública · Aprendendo com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola Nacional de Administração Pública - ENAP",
    curso: "Aprendendo com Python™",
    cargaHoraria: "20 h",
    conclusaoISO: "2024-11-09",
    dataConclusao: "09 de novembro de 2024",
    codigo: "qPoL146307585W5a",
    mostrarCopiar: true,
    verificacao: {
      url: "https://www.escolavirtual.gov.br/documentos/validacao/",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.11.08 · Fundação Bradesco · Introdução à Programação Orientada a Objetos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Introdução à Programação Orientada a Objetos",
    cargaHoraria: "5 h",
    conclusaoISO: "2024-11-08",
    dataConclusao: "08 de novembro de 2024",
    codigo: "D5F4279F-17D7-4EAD-B53D-8AA1C93314D6",
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
  },
  
  {
    id: 6,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.10.22 · Cursa · Power Apps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Power Apps",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-10-22",
    dataConclusao: "22 de outubro de 2024",
    codigo: "c419191d4b",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/c419191d4b",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.10.17 · Aplitech Foundation EAD · HTML5 · CSS3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aplitech Foundation EaD",
    curso: "HTML5 & CSS3",
    cargaHoraria: "5 h",
    conclusaoISO: "2024-10-17",
    dataConclusao: "17 de outubro de 2024",
    codigo: "X6sraYRUft",
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
    id: 4,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.10.10 · Fundação Bradesco · Linguagem de Programação Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Fundação Bradesco",
    curso: "Linguagem de Programação Python™",
    cargaHoraria: "18 h",
    conclusaoISO: "2024-10-10",
    dataConclusao: "10 de outubro de 2024",
    codigo: "D5AE56A5-6CCC-4883-A584-E8C1CF6EAFA4",
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
  },
  
  {
    id: 3,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.05.29 · BLACK EAGLE TREINAMENTOS [JOV!ANO] · Lógica de Programação com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Black Eagle Treinamentos [JOV!ANO]",
    curso: "Lógica de Programação com Python™",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-05-29",
    dataConclusao: "29 de maio de 2024",
    codigo: "Y2VydGlmaWNhdGVfNil5MI8xNzg%3D",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.02.08 · Rocketseat · NLW Expert (Trilha de HTML · CSS · JavaScript).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Rocketseat",
    curso: "NLW Expert: Trilha de HTML | CSS | JavaScript",
    cargaHoraria: "5 h",
    conclusaoISO: "2024-02-08",
    dataConclusao: "08 de fevereiro de 2024",
    codigo: "bb23052c-17b2-44cd-897a-8eb3d6484ece",
    mostrarCopiar: false,
    verificacao: {
      url: "https://app.rocketseat.com.br/certificates/bb23052c-17b2-44cd-897a-8eb3d6484ece",
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

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2024.02.01 · Hashtag Treinamentos · Intensivão de JavaScript.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Intensivão de JavaScript",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-02-01",
    dataConclusao: "01 de fevereiro de 2024",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Intensivão+de+JavaScript&dtcf=01%2F02%2F2024&hcf=8",
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
