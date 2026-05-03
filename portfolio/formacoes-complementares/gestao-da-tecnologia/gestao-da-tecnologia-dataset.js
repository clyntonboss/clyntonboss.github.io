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
    id: 54,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Formação IoT Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação IoT Specialist",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "XJHFKQWG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XJHFKQWG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Computação Móvel Aplicada à IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Computação Móvel Aplicada à IoT",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ESC0XYGZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ESC0XYGZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Avalie a Formação IoT Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação IoT Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "C9SOZV7L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/C9SOZV7L.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Computação Móvel Aplicada à IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Computação Móvel Aplicada à IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "5WTKLT6M",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5WTKLT6M.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Projeto de Automação por meio de Comando de Voz.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto de Automação por meio de Comando de Voz",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "AFOVGAEX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AFOVGAEX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Desafios Intermediários - Formação IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Intermediários - Formação IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
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
    id: 48,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Interação Humano Computador (IHC) e Humano Máquina (IHM).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Interação Humano Computador (IHC) e Humano Máquina (IHM)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "RPQWUPXM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RPQWUPXM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Programando Sistemas de Computação Móvel em Software.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programando Sistemas de Computação Móvel em Software",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "261NPSWW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/261NPSWW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Programando Sistemas de Computação Móvel em Hardware.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programando Sistemas de Computação Móvel em Hardware",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "G05HNWY8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G05HNWY8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Inteligência Artificial Aplicada para Sistemas de IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Inteligência Artificial Aplicada para Sistemas de IoT",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "7EFRJ8BK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7EFRJ8BK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Inteligência Artificial aplicada para Sistemas de IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Inteligência Artificial Aplicada para Sistemas de IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "PELZVJJA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PELZVJJA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Projeto de Redes Neurais Artificiais para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto de Redes Neurais Artificiais para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "RKWLMSPS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RKWLMSPS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Sensoriamento Inteligente com Modelos de Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sensoriamento Inteligente com Modelos de Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "OU1FCMLS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OU1FCMLS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Redes de Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes de Deep Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NYQCBRBY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NYQCBRBY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Modelos de Inteligência Artificial para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelos de Inteligência Artificial para IoT",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "CEYLCIHD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CEYLCIHD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Sensores Inteligentes para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sensores Inteligentes para IoT",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "8EH6XYTM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8EH6XYTM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Sensores Inteligentes para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Sensores Inteligentes para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "YYF8WFJ2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YYF8WFJ2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Projeto de Sensores Inteligentes para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto de Sensores Inteligentes para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "JNFPHUAE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JNFPHUAE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Redes de Sensores Sem Fio para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes de Sensores Sem Fio para IoT",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "QHPGICGL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QHPGICGL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Algoritmos para Sensoriamento em IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos para Sensoriamento em IoT",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "BWOQFUIZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BWOQFUIZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Tipos de Sensores Aplicados para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tipos de Sensores Aplicados para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "JRGB03KW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JRGB03KW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Princípios de Eletrônica para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Princípios de Eletrônica para IoT",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "3EIQ7OH0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3EIQ7OH0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Princípios de Eletrônica para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Princípios de Eletrônica para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "EYOE8BYZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EYOE8BYZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Projeto de Circuitos Eletrônicos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto de Circuitos Eletrônicos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ANL0CHLF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ANL0CHLF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Desafios Básicos - Formação IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Básicos - Formação IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
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
    id: 29,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Sistemas Embarcados Críticos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Sistemas Embarcados Críticos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "OYRXBPKM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OYRXBPKM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Plataformas de Prototipação para Internet das Coisas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Plataformas de Prototipação para Internet das Coisas",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "QMUSAVRB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QMUSAVRB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Eletrônica Básica para Prototipação com Microcontroladores.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Eletrônica Básica para Prototipação com Microcontroladores",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "ESB1MXU6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ESB1MXU6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Protocolos de Comunicação e Segurança para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Protocolos de Comunicação e Segurança para IoT",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "I2GJKYXI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/I2GJKYXI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Protocolos de Comunicação e Segurança para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Protocolos de Comunicação e Segurança para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "KKIJ1TRI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KKIJ1TRI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Segurança de Redes para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Segurança de Redes para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "EQSGFQIX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EQSGFQIX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Redes TCP·IP e a Internet.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes TCP/IP e a Internet",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "9ZAPTWAM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9ZAPTWAM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Protocolos de Comunicação para IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Protocolos de Comunicação para IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "UX5LVDNB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UX5LVDNB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Introdução à Internet das Coisas (IoT) e suas Aplicações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Internet das Coisas (IoT) e suas Aplicações",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "6NTI36AA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6NTI36AA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Materiais Complementares - Introdução à Internet das Coisas (IoT) e suas Aplicações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Introdução à Internet das Coisas (IoT) e suas Aplicações",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NQOYFRYI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NQOYFRYI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Cidades Inteligentes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Cidades Inteligentes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "HQHJLLRO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HQHJLLRO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Aplicações de IoT na Atualidade.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações de IoT na Atualidade",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "NJMW1MTT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NJMW1MTT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Modelos de IoT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelos de IoT",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "EX4WHWK3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EX4WHWK3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.04.17 · Digital Innovation One · Introdução para IoT em um Mundo Conectado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução para IoT em um Mundo Conectado",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-17",
    dataConclusao: "17 de abril de 2026",
    codigo: "3DGWNAKI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3DGWNAKI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2026.02.18 · FIAP - Centro Universitário · Gestão de Infraestrutura de TI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Gestão de Infraestrutura de TI",
    cargaHoraria: "20 h",
    conclusaoISO: "2026-02-18",
    dataConclusao: "18 de fevereiro de 2026",
    codigo: "fd3fbd4225757b75339bf492c074f913",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=fd3fbd4225757b75339bf492c074f913&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.12.25 · Pontifícia Universidade Católica do Rio Grande do Sul · Gestão do Conhecimento e Transformação Digital.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul",
    curso: "Gestão do Conhecimento e Transformação Digital",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-12-25",
    dataConclusao: "25 de dezembro de 2025",
    codigo: "256381-199-1",
    mostrarCopiar: true,
    verificacao: {
      url: "https://educon.pucrs.br/validarcertificado/",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.12.19 · Pontifícia Universidade Católica do Rio Grande do Sul · Internet das Coisas, Inteligência Artificial e a Revolução Conectada.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul",
    curso: "Internet das Coisas, Inteligência Artificial e a Revolução Conectada",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-12-19",
    dataConclusao: "19 de dezembro de 2025",
    codigo: "256371-352-1",
    mostrarCopiar: true,
    verificacao: {
      url: "https://educon.pucrs.br/validarcertificado/",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.12.18 · Pontifícia Universidade Católica do Rio Grande do Sul · Transformando-se para a Era da Internet das Coisas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul",
    curso: "Transformando-se para a Era da Internet das Coisas",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-12-18",
    dataConclusao: "18 de dezembro de 2025",
    codigo: "236949-404-1",
    mostrarCopiar: true,
    verificacao: {
      url: "https://educon.pucrs.br/validarcertificado/",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.10.27 · Escola Nacional de Administração Pública · Capacitação em Governança de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola Nacional de Administração Pública - ENAP",
    curso: "Capacitação em Governança de Dados",
    cargaHoraria: "25 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "nlAG19303423U70g",
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
    id: 10,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.10.20 · Cursa · Governança da Tecnologia da Informação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Governança da Tecnologia da Informação",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-10-20",
    dataConclusao: "20 de outubro de 2025",
    codigo: "9368209b4e",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/9368209b4e",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.10.01 · Instituto Federal Rio Grande do Sul · Automação de Sistemas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Rio Grande do Sul",
    curso: "Automação de Sistemas",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-10-01",
    dataConclusao: "01 de outubro de 2025",
    codigo: "68dd788b-0f60-4e2b-b5fe-17f40aa800a9",
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
    id: 8,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.06.14 · Aprenda Mais · Automação de Sistemas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aprenda Mais",
    curso: "Automação de Sistemas",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-06-14",
    dataConclusao: "14 de junho de 2025",
    codigo: "684db234-a6c4-4b6c-aa60-6ba2ac1f0231",
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
    id: 7,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.06.05 · Instituto Federal Sul-Rio-Grandense · Sistemas de Informação Administrativos para Empresas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Sistemas de Informação Administrativos para Empresas",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-06-05",
    dataConclusao: "05 de junho de 2025",
    codigo: "6841d33f-6f50-4054-be33-e6d40a00c840",
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
    id: 6,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.05.17 · Pontifícia Universidade Católica do Rio Grande do Sul · Indústria 4.0.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul",
    curso: "Indústria 4.0",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-05-17",
    dataConclusao: "17 de maio de 2025",
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
    id: 5,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.03.23 · Instituto Federal Minas Gerais · Indústria 4.0 (Internet das Coisas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Minas Gerais",
    curso: "Indústria 4.0: Internet das Coisas",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-03-23",
    dataConclusao: "23 de março de 2025",
    codigo: "67e04995-b1c8-45ed-a6df-4e12ac140047",
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
    id: 4,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2025.03.12 · FIAP - Centro Universitário · Gestão de Infraestrutura de TI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Gestão de Infraestrutura de TI",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-03-12",
    dataConclusao: "12 de março de 2025",
    codigo: "593a81f5ad65479dc304fe68addcb8fb",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=593a81f5ad65479dc304fe68addcb8fb&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2024.11.10 · Santander Open Academy · Internet das Coisas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Santander Open Academy",
    curso: "Internet das Coisas",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-11-10",
    dataConclusao: "10 de novembro de 2024",
    codigo: "OA-2024-1110000651005",
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

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2024.11.05 · Escola Nacional de Administração Pública · Governança de Dados na Transformação Digital.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola Nacional de Administração Pública - ENAP",
    curso: "Governança de Dados na Transformação Digital",
    cargaHoraria: "25 h",
    conclusaoISO: "2024-11-05",
    dataConclusao: "05 de novembro de 2024",
    codigo: "47LJ14628946DKf7",
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
    id: 1,

    thumb: "/portfolio/formacoes-complementares/gestao-da-tecnologia/certificados/2024.10.22 · Escola Nacional de Administração Pública · Governança de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola Nacional de Administração Pública - ENAP",
    curso: "Governança de Dados",
    cargaHoraria: "30 h",
    conclusaoISO: "2024-10-22",
    dataConclusao: "22 de outubro de 2024",
    codigo: "wTDP14630780SAJ9",
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
  }
];
