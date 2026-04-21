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
    id: 29,

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Formação Scrum Master Certification.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Scrum Master Certification",
    cargaHoraria: "22 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "3SSQHXIN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3SSQHXIN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · ·Digital Innovation One · Simulados Preparatórios para o Exame PSM I da scrum.org.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulados Preparatórios para o Exame PSM I da scrum.org",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "QD4TYJWZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QD4TYJWZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Avalie a Formação Scrum Master Certification.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação Scrum Master Certification",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "XCPGN2VW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XCPGN2VW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Simulados Preparatórios para o Exame PSM I da scrum.org.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulados Preparatórios para o Exame PSM I da scrum.org",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "ARXT4T9J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ARXT4T9J.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Como se Preparar para a Certificação de Professional Scrum Master I (PSM I) da scrum.org.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Certificação de Professional Scrum Master I (PSM I) da scrum.org",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "PSFSWUH0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PSFSWUH0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Materiais Complementares - Como se Preparar para a Certificação de Professional Scrum Master I (PSM I) da scrum.org.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Certificação de Professional Scrum Master I (PSM I) da scrum.org",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "8WBLXZYS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8WBLXZYS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Conteúdos Complementares para o Exame PSM I.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conteúdos Complementares para o Exame PSM I",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "MWKZFPH4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MWKZFPH4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Dicas de Ouro para o Exame PSM I.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Dicas de Ouro para o Exame PSM I",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "0SRJS4B1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0SRJS4B1.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Por Dentro do Exame PSM I.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Por Dentro do Exame PSM I",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "G3JFMVK6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G3JFMVK6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Hands-On (Compreendendo o Scrum na Prática).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Hands-On: Compreendendo o Scrum na Prática",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "OCKGIXLH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OCKGIXLH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Materiais Complementares - Compreendendo o Scrum na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Compreendendo o Scrum na Prática",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "BX2X5YVZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BX2X5YVZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Completando o Framework Scrum.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Completando o Framework Scrum",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "BNSGFWPO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BNSGFWPO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Scrum (Analisando Cases de Sucesso).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Scrum: Analisando Cases de Sucesso",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "DELZBDXT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DELZBDXT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Como Entregar seu Desafio de Projeto.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Como Entregar seu Desafio de Projeto",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "Y00O8X5C",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Y00O8X5C.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Tudo que Cai na Prova PSM I.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tudo que Cai na Prova PSM I",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "MCSPBXWE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MCSPBXWE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Materiais Complementares - Os Próximos Passos para se Tornar um(a) Scrum Master.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Os Próximos Passos para se Tornar um(a) Scrum Master",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "D3ECSLPW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/D3ECSLPW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Sobre os Artefatos e seus Compromissos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sobre os Artefatos e Seus Compromissos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "XYXQWIHJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XYXQWIHJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Sobre o Framework Scrum.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sobre o Framework Scrum",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "OB4ITSZG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OB4ITSZG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Scrum Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Scrum Fundamentals",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "JIYTSKLR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JIYTSKLR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Materiais Complementares - Scrum Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - SCRUM Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "DXLZVQ88",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DXLZVQ88.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Por Dentro do Scrum (Responsabilidades, Eventos e Artefatos).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Por Dentro do Scrum: Responsabilidades, Eventos e Artefatos",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "YZPF5TAA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YZPF5TAA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/metodologia-agil/certificados/2026.04.11 · Digital Innovation One · Introdução ao Scrum.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Scrum",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-11",
    dataConclusao: "11 de abril de 2026",
    codigo: "J6MEHJLC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J6MEHJLC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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
