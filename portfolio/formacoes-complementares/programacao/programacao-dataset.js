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
    id: 299,

    thumb: "/portfolio/formacoes-complementares/programacao/certificados/2026.04.22 · Digital Innovation One · Vivo - Python AI Backend Developer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Vivo - Python AI Backend Developer",
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
    curso: "Aula Inaugural: Python AI Backend Developer",
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
