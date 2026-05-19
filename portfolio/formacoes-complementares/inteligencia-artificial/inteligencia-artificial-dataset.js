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
    id: 291,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Lupo - Primeiros Passos com Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Lupo - Primeiros Passos com Inteligência Artificial",
    cargaHoraria: "30 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "SVYST49S",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SVYST49S.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Projeto Final (Mentor de Vendas com IA).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projeto Final: Mentor de Vendas com IA",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "DUZWCOCA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DUZWCOCA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Copiloto de Vendas com IA para Atendimento ao Cliente.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Copiloto de Vendas com IA para Atendimento ao Cliente",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "CQPYDP3N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CQPYDP3N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · IA na Prática com Prompting (Comunicação Rotina e Produtividade).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "IA na Prática com Prompting: Comunicação Rotina e Produtividade",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "85CUM9GB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/85CUM9GB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Criar Prompt da Newsletter de Divulgação Interna de Novos Produtos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criar Prompt da Newsletter de Divulgação Interna de Novos Produtos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "VGRMUQX0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VGRMUQX0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Criar Guideline da Newsletter de Divulgação Interna de Novos Produtos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criar Guideline da Newsletter de Divulgação Interna de Novos Produtos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "7DEL8GWL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7DEL8GWL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Criar Template de Newsletter para Divulgação Interna de Novos Produtos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criar Template de Newsletter para Divulgação Interna de Novos Produtos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "ARLSCWH3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ARLSCWH3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Panorama da IA e Aplicações no Dia a Dia.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Panorama da IA e Aplicações no Dia a Dia",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "WOJ3PXQ1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WOJ3PXQ1.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.05.06 · Digital Innovation One · Mapa de Oportunidades com IA no seu Dia a Dia.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Mapa de Oportunidades com IA no seu Dia a Dia",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-06",
    dataConclusao: "06 de maio de 2026",
    codigo: "HP0YELJR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HP0YELJR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Caixa - Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Caixa - Inteligência Artificial na Prática",
    cargaHoraria: "28 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "SVIBUSQV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SVIBUSQV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Desafio Caixa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio Caixa",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ITHQXZCP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ITHQXZCP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Identificando suas Habilidades que Podem ser Remuneradas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Identificando suas Habilidades que Podem ser Remuneradas",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "BZFRUOPO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BZFRUOPO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Evoluindo Técnicas de Prompt de IA Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Evoluindo Técnicas de Prompt de IA Generativa",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "FSLYF3AS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FSLYF3AS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · IA Entrevistador (Seu Simulador Inteligente de Entrevistas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "IA Entrevistador: Seu Simulador Inteligente de Entrevistas",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "6XAN5DEP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6XAN5DEP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · IA Mentor de Carreira (Descubra Seu Futuro em Tech).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "IA Mentor de Carreira: Descubra seu Futuro em Tech",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "U3XKQINL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U3XKQINL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Empreendendo com Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Empreendendo com Inteligência Artificial",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "5LLBWWDR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5LLBWWDR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Criando um APP de Organização de Finanças Pessoais com Vibe Coding.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um APP de Organização de Finanças Pessoais com Vibe Coding",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "HWUTDZLE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HWUTDZLE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Automatizando Processos com IA – Automatize Tarefas Repetitivas com Agentes de IA.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Automatizando Processos com IA – Automatize Tarefas Repetitivas com Agentes de IA",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "DKWKQHPK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DKWKQHPK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · One Person Business - Como Gerir e Organizar um Negócio de uma Pessoa com Agentes de IA.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "One Person Business - Como Gerir e Organizar um Negócio de uma Pessoa com Agentes de IA",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "Y5WIBNK4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Y5WIBNK4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Vibe Coding - Criando uma Solução de Negócio Através de Agentes de IA.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Vibe Coding - Criando uma Solução de Negócio Através de Agentes de IA",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "M5IMJ57M",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M5IMJ57M.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Da Ideia ao MVP - Como Transformar uma Ideia em um Produto ou Serviço com IA e Business Model Canvas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Da Ideia ao MVP - Como Transformar uma Ideia em um Produto ou Serviço com IA e Business Model Canvas",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "730CRCAF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/730CRCAF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Introdução a Empreendedorismo Digital (Como Começar a Empreender na Era das IA).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Empreendedorismo Digital: Como Começar a Empreender na Era das IA",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "YOPDFZFX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YOPDFZFX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Transforme sua Vida Financeira com Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transforme sua Vida Financeira com Inteligência Artificial",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LP3CESGP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LP3CESGP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Transformando Sua Rotina com IA (Tenha o seu Próprio Assistente de Metas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transformando Sua Rotina com IA: Tenha o seu Próprio Assistente de Metas",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "ZUOS4ZLE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZUOS4ZLE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Inclusão Financeira (Como a IA Pode te Ajudar a Organizar suas Finanças Pessoais).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Inclusão Financeira: Como a IA Pode te Ajudar a Organizar suas Finanças Pessoais",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "W4467BTN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/W4467BTN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Bem-Vindo ao Futuro (Como a IA e a Educação Financeira Vão Transformar sua Vida).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Bem-Vindo ao Futuro: Como a IA e a Educação Financeira Vão Transformar sua Vida",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "QQ7ISB2F",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QQ7ISB2F.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · BairesDev - Machine Learning Practitioner.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "BairesDev - Machine Learning Practitioner",
    cargaHoraria: "96 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "SI1DDTXV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SI1DDTXV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Fundamentos e Práticas de Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos e Práticas de Deep Learning",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "M0RUXYU5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M0RUXYU5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Associando Redes e Aplicações Práticas de Deep Learning com Lógica de Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Associando Redes e Aplicações Práticas de Deep Learning com Lógica de Programação",
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
    id: 262,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Programação para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação para Machine Learning",
    cargaHoraria: "16 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "3QOL0UBT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3QOL0UBT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Explorando Python com Lógica de Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Python com Lógica de Programação",
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
    id: 260,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Introdução ao Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Machine Learning",
    cargaHoraria: "12 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "FVJQNVY7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FVJQNVY7.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Live de Lançamento - Coding the Future - BairesDev.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento - Coding the Future - BairesDev",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "BQKYJCAL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BQKYJCAL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Machine Learning com a BairesDev.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Machine Learning com a BairesDev",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "5X8MHVX5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5X8MHVX5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Nexa - Machine Learning para Iniciantes na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Nexa - Machine Learning para Iniciantes na AWS",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "DLARMKNE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DLARMKNE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Machine Learning sem Código com Amazon SageMaker Canvas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Machine Learning sem Código com Amazon SageMaker Canvas",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "SS1Q2SDY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SS1Q2SDY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Explorando o SageMaker Canvas com Lógica de Programação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando o SageMaker Canvas com Lógica de Programação",
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
    id: 254,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Fundamentos de Machine Learning e IAs Generativas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Machine Learning e IAs Generativas",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "5NWHNJKW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5NWHNJKW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.22 · Digital Innovation One · Aula Inaugural (Bootcamp Nexa - Machine Learning para Iniciantes na AWS).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aula Inaugural: Bootcamp Nexa - Machine Learning para Iniciantes na AWS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "MJE6RX1I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MJE6RX1I.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.16 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
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
    id: 251,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Formação Machine Learning Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Machine Learning Specialist",
    cargaHoraria: "92 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "JNG12USR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JNG12USR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Visão Computacional com Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Visão Computacional com Machine Learning",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "JIEUCDRV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JIEUCDRV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Avalie a Formação Machine Learning Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação Machine Learning Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "DXKJAETX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DXKJAETX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Visão Computacional com Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Visão Computacional com Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "9CDYJEH6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9CDYJEH6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Criando um Sistema de Assistência Virtual do Zero.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Sistema de Assistência Virtual do Zero",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "TXKA6HB0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TXKA6HB0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Algoritmos para Processamento de Linguagem Natural.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos para Processamento de Linguagem Natural",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "INOQEVTS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/INOQEVTS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Visão Computacional 3D e seus Algoritmos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Visão Computacional 3D e seus Algoritmos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "YRNFMEHF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YRNFMEHF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Algoritmos para Rastreamento de Objetos em Imagens.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos para Rastreamento de Objetos em Imagens",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "HDQJPRXT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HDQJPRXT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Introdução à Visão Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Visão Computacional",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "RXHUAVNG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RXHUAVNG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Processamento de Imagens com Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Processamento de Imagens com Machine Learning",
    cargaHoraria: "16 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "XZY3CLQO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XZY3CLQO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Processamento de Imagens com Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Processamento de Imagens com Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "RQMVLU5N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RQMVLU5N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Criando um Sistema de Recomendação por Imagens Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Sistema de Recomendação por Imagens Digitais",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "HMZFM6VY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HMZFM6VY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Filtros de Eliminação de Ruídos em Imagens Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Filtros de Eliminação de Ruídos em Imagens Digitais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "RCO89BX2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RCO89BX2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Algoritmos de Processamento de Imagens Digitais para Detecção de Bordas em Objetos 2D.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos de Processamento de Imagens Digitais para Detecção de Bordas em Objetos 2D",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "97JXRDUK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/97JXRDUK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Programando com OpenCV (Abordagens Práticas).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programando com OpenCV: Abordagens Práticas",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "GTAPSYSV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GTAPSYSV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Métodos de Segmentação com OpenCV.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Métodos de Segmentação com OpenCV",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "GEQLKT09",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GEQLKT09.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Aplicações de Processamento de Imagens Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações de Processamento de Imagens Digitais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "Y1XPRMLH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Y1XPRMLH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Introdução ao Processamento de Imagens Digitais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Processamento de Imagens Digitais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "XISLWNTQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XISLWNTQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Frameworks de Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Frameworks de Deep Learning",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "BZQJDLP5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BZQJDLP5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Frameworks de Deep Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Frameworks de Deep Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "EP7KW1OI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EP7KW1OI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Criando um Sistema de Reconhecimento Facial do Zero.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Sistema de Reconhecimento Facial do Zero",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "XBBXLJJO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XBBXLJJO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Ambientes de Projetos Colaborativos de Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ambientes de Projetos Colaborativos de Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "KEKQKMIB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KEKQKMIB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Desenvolvimento de Algoritmos no Keras.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento de Algoritmos no Keras",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "LZUBUXIO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LZUBUXIO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Frameworks para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Frameworks para Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "0AL1TYN3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0AL1TYN3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Conhecendo as Bibliotecas Pandas e Scikit-Learn.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo as Bibliotecas Pandas e Scikit-Learn",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "OC8ASTPR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OC8ASTPR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Introdução às Bibliotecas de Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução às Bibliotecas de Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "HIF7F3KL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HIF7F3KL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Fundamentos e Práticas de Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos e Práticas de Deep Learning",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "6NGNIHS2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6NGNIHS2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Fundamentos e Práticas de Deep Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Fundamentos e Práticas de Deep Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "MRYVEIEW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MRYVEIEW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Criação de uma Base de Dados e Treinamento da Rede YOLO.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criação de uma Base de Dados e Treinamento da Rede YOLO",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "T29GI1AG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/T29GI1AG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Aplicações Práticas com Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações Práticas com Deep Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "NSWDOBIA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NSWDOBIA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Redes de Segmentação em Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes de Segmentação em Deep Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "PMRRMW8I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PMRRMW8I.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Redes de Detecção em Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes de Detecção em Deep Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "FXDNS1MO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FXDNS1MO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Redes de Classificação para Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes de Classificação para Deep Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "FPURQSNK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FPURQSNK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Tipos de Redes de Deep Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tipos de Redes de Deep Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "G59UH9PW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G59UH9PW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Teoria do Aprendizado Estatístico.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Teoria do Aprendizado Estatístico",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "8ZB56BGY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8ZB56BGY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Teoria do Aprendizado Estatístico).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Teoria do Aprendizado Estatístico",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "FKSZ4AAC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FKSZ4AAC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Cálculo de Métricas de Avaliação de Aprendizado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Cálculo de Métricas de Avaliação de Aprendizado",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "I2HFDABR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/I2HFDABR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Modelos de Machine Learning (Métricas de Avaliação de Desempenho).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelos de Machine Learning: Métricas de Avaliação de Desempenho",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "PEH7VTEZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PEH7VTEZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Otimização de Modelos em Hiperparâmetros.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimização de Modelos em Hiperparâmetros",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "5EBJ3YEG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5EBJ3YEG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Métodos de Otimização de Aprendizado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Métodos de Otimização de Aprendizado",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "YNEJQRLU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YNEJQRLU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Métodos de Validação de Treinamento.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Métodos de Validação de Treinamento",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "XCOSVABB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XCOSVABB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Algoritmos de Treinamento em Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos de Treinamento em Machine Learning",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "QH50MWSY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QH50MWSY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Algoritmos de Treinamento em Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Algoritmos de Treinamento em Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "CNCFASIE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CNCFASIE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Redução de Dimensionalidade em Imagens para Redes Neurais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redução de Dimensionalidade em Imagens para Redes Neurais",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "64CLDLAU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/64CLDLAU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Extração de Features e Redução de Dimensionalidade em Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Extração de Features e Redução de Dimensionalidade em Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "UZYKQ6NG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UZYKQ6NG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Algoritmos de Regressão para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos de Regressão para Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "SZMANZUZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SZMANZUZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Aprendizado por Reforço em Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendizado por Reforço em Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "MMBLQBPB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MMBLQBPB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Treinamento Supervisionado para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Treinamento Supervisionado para Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "4PT0M3W6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4PT0M3W6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Treinamento Não-Supervisionado em Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Treinamento Não-Supervisionado em Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "L2X7Q6JA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/L2X7Q6JA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Programação para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Programação para Machine Learning",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "DM80AGFB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DM80AGFB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Programação para Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Programação para Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "R8CGOCFT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/R8CGOCFT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Treinamento de Redes Neurais com Transfer Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Treinamento de Redes Neurais com Transfer Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "OLLW4TJ0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OLLW4TJ0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Desafios Básicos (Programação para Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios Básicos: Programação para Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
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
    id: 198,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Introdução ao COLAB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao COLAB",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "9RF9EAU5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9RF9EAU5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Conhecendo o Anaconda TensorFlow e SciPy.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Anaconda TensorFlow e SciPy",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "FKOYPH8D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FKOYPH8D.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · R para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "R para Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "ABIKCQ5N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ABIKCQ5N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Scilab para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Scilab para Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "FTIFBW3N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FTIFBW3N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Introdução ao Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Machine Learning",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "AT8IUBQ3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AT8IUBQ3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Materiais Complementares (Introdução ao Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Introdução ao Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "KIMABC5A",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KIMABC5A.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.15 · Digital Innovation One · Apresentação da Formação Machine Learning Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Apresentação da Formação Machine Learning Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-15",
    dataConclusao: "15 de abril de 2026",
    codigo: "AU6PTB3Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AU6PTB3Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · TOTVS - Fundamentos de Engenharia de Dados e Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "TOTVS - Fundamentos de Engenharia de Dados e Machine Learning",
    cargaHoraria: "61 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "2LQFH7XT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2LQFH7XT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Fundamentos e Técnicas de Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos e Técnicas de Machine Learning",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "D0UZNLTU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/D0UZNLTU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Python para Machine Learning na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Python para Machine Learning na Prática",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "YKLEWGZ9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YKLEWGZ9.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Linguagens de Programação para Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Linguagens de Programação para Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "LYUZDQWO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LYUZDQWO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Classificação de Problemas (Explorando Datasets).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Classificação de Problemas: Explorando Datasets",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "8ADOHQNM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8ADOHQNM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Algoritmos de SVM (Support Vector Machine).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos de SVM (Support Vector Machine)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "9WZKWGPK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9WZKWGPK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Algoritmos Genéricos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos Genéricos",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "TOV8NULP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TOV8NULP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Redes Neurais Artificiais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes Neurais Artificiais",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "PUSKA4RK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PUSKA4RK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Métodos de Machine Learning Bioinspirados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Métodos de Machine Learning Bioinspirados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "F1KPMIOS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F1KPMIOS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução ao Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "09AK9QA5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/09AK9QA5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Noções de Computação em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Noções de Computação em Nuvem",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "78JHHLLX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/78JHHLLX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Redução dos Custos em Farmácias com AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redução dos Custos em Farmácias com AWS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "HLTWFF8Z",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HLTWFF8Z.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Armazenamento e Banco de Dados AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenamento e Banco de Dados AWS",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "EXE3UBUY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EXE3UBUY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Redes em AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes em AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "SUTEF6XV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SUTEF6XV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Computação em AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Computação em AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "96XRHFRN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/96XRHFRN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Entendendo a Infraestrutura AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo a Infraestrutura AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "E9VXDG0L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/E9VXDG0L.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Como a Computação em Nuvem Funciona.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Como a Computação em Nuvem Funciona",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "RM6FSRX0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RM6FSRX0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Análise de Dados com Excel e Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Análise de Dados com Excel e Copilot",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "R1M6U0TI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/R1M6U0TI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução a Dashboards.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Dashboards",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "CCUG4ZKR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CCUG4ZKR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução a Banco de Dados Relacionais e ETL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Banco de Dados Relacionais e ETL",
    cargaHoraria: "13 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "16ZBJ20N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/16ZBJ20N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Praticando Fundamentos de ETL com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Praticando Fundamentos de ETL com Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
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
    id: 170,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Explorando IA Generativa em um Pipeline de ETL com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando IA Generativa em um Pipeline de ETL com Python",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "OGZJI8JF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OGZJI8JF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Fundamentos de ETL (Extract, Transform, Load) com Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de ETL (Extract, Transform, Load) com Python",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "YMYVZKYN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YMYVZKYN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução a Banco de Dados NoSQL.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Banco de Dados NoSQL",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "XBG8LXOZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XBG8LXOZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução à Ciência de Dados e Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Ciência de Dados e Python",
    cargaHoraria: "13 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "XIAHL4KR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XIAHL4KR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Praticando Operadores e Estruturas Condicionais em Python.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Praticando Operadores e Estruturas Condicionais em Python",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
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
    id: 165,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Princípios de Python e Versionamento de Código com Git e GitHub.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Princípios de Python e Versionamento de Código com Git e GitHub",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "VLILZSII",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VLILZSII.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Live de Lançamento TOTVS - Fundamentos de Engenharia de Dados e Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento TOTVS - Fundamentos de Engenharia de Dados e Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "F8FGNLIE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F8FGNLIE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.04 · Digital Innovation One · Introdução ao Bootcamp TOTVS - Fundamentos de Engenharia de Dados e Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Bootcamp TOTVS - Fundamentos de Engenharia de Dados e Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-04",
    dataConclusao: "04 de abril de 2026",
    codigo: "LFZR5AJX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LFZR5AJX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.02 · AWS Treina Brasil on TIDWIT · Nuvem e IA para Empresas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "AWS Treina Brasil on TIDWIT",
    curso: "Nuvem e IA para Empresas",
    cargaHoraria: "1 h 36 min",
    conclusaoISO: "2026-04-02",
    dataConclusao: "02 de abril de 2026",
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
    id: 161,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.04.01 · AWS Treina Brasil on TIDWIT · Fundamentos da IA.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "AWS Treina Brasil on TIDWIT",
    curso: "Fundamentos da IA",
    cargaHoraria: "2 h 38 min",
    conclusaoISO: "2026-04-01",
    dataConclusao: "01 de abril de 2026",
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
    id: 160,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.03.12 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-03-12",
    dataConclusao: "12 de março de 2026",
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
    id: 159,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.26 · Tetra Educação · Imersão Gestor do Futuro.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Gestor do Futuro",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-02-26",
    dataConclusao: "26 de fevereiro de 2026",
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
    id: 158,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.27 · FIAP - Centro Universitário · Soluções Tecnológicas Emergentes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Soluções Tecnológicas Emergentes",
    cargaHoraria: "40 h",
    conclusaoISO: "2026-02-27",
    dataConclusao: "27 de fevereiro de 2026",
    codigo: "13edb179828560136f819809d3c91901",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=13edb179828560136f819809d3c91901&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.19 · FIAP - Centro Universitário · Inteligência Artificial Responsável.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Inteligência Artificial Responsável",
    cargaHoraria: "80 h",
    conclusaoISO: "2026-02-19",
    dataConclusao: "19 de fevereiro de 2026",
    codigo: "74eeb0c02d795b38fa1592e4958f3167",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=74eeb0c02d795b38fa1592e4958f3167&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.19 · FIAP - Centro Universitário · Inteligência Artificial e Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Inteligência Artificial e Computacional",
    cargaHoraria: "80 h",
    conclusaoISO: "2026-02-19",
    dataConclusao: "19 de fevereiro de 2026",
    codigo: "4adf2eb22fdb35c0c3ae76d973f189cf",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=4adf2eb22fdb35c0c3ae76d973f189cf&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.12 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-02-12",
    dataConclusao: "12 de fevereiro de 2026",
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
    id: 154,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.11 · FIAP - Centro Universitário · Chatbots.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Chatbot",
    cargaHoraria: "60 h",
    conclusaoISO: "2026-02-11",
    dataConclusao: "11 de fevereiro de 2025",
    codigo: "b82467de2bcdcab00ec247b6ea681f3d",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=b82467de2bcdcab00ec247b6ea681f3d&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.05 · Hashtag Treinamentos · Imersão Agentes de Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Imersão Agentes de Inteligência Artificial",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-02-05",
    dataConclusao: "05 de fevereiro de 2026",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Imersão+Agentes+de+IA&dtcf=05%2F02%2F2026&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.02.04 · Comunidade Data Driven · Imersão Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Comunidade Data Driven",
    curso: "Imersão Inteligência Artificial",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-02-04",
    dataConclusao: "04 de fevereiro de 2025",
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
    id: 151,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Bradesco - GenAI & Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Bradesco - GenAI & Dados",
    cargaHoraria: "52 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "PRURMSU2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PRURMSU2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Desafio Final (Crie seu Chatbot Inteligente para o Mercado Financeiro).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio Final: Crie seu Chatbot Inteligente para o Mercado Financeiro",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "OHWFWPMG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OHWFWPMG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Desafio de Projeto Final - Construa seu Assistente Virtual com Inteligência Artificial Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafio de Projeto Final - Construa seu Assistente Virtual com Inteligência Artificial Generativa",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "SFA4PUOR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SFA4PUOR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Os Pilares Formais da Inteligência Artificial (Do Machine Learning à Inteligência Artificial Generativa).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Os Pilares Formais da Inteligência Artificial: Do Machine Learning à Inteligência Artificial Generativa",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "IHLG0YMW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IHLG0YMW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Conversando por Voz com o ChatGPT Utilizando Whisper (OpenAI) e Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conversando por Voz com o ChatGPT Utilizando Whisper (OpenAI) e Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "VV6LPUTI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VV6LPUTI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Visão Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Visão Computacional",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "AAX6RRGS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AAX6RRGS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Aprendendo Python™ e suas Estruturas de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aprendendo Python™ e suas Estruturas de Dados",
    cargaHoraria: "17 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "U1MZSDER",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U1MZSDER.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Manipulação de Coleções e Funções em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Manipulação de Coleções e Funções em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
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
    id: 143,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Explorando Conjuntos em Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Conjuntos em Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "SY2MHMRT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SY2MHMRT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Fundamentos de Programação com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Programação com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
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
    id: 141,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Do Excel ao SQL (Domine seus Dados com Inteligência).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Do Excel ao SQL: Domine seus Dados com Inteligência",
    cargaHoraria: "11 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "CUSU75XE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CUSU75XE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Entendendo Operações Bancárias com Python™.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo Operações Bancárias com Python™",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
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
    id: 139,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Introdução a Banco de Dados Relacionais (SQL).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Banco de Dados Relacionais (SQL)",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "QCOYENKL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QCOYENKL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Acelere seu Aprendizado com Inteligência Artificial Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Acelere seu Aprendizado com Inteligência Artificial Generativa",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "TLBMR5W0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TLBMR5W0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Live de Lançamento Bradesco - GenAI & Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento Bradesco - GenAI & Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "NUSN1177",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NUSN1177.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Acelere sua Aprendizagem com IA (Explore o Poder do NotebookLM).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Acelere sua Aprendizagem com Inteligência Artificial: Explore o Poder do NotebookLM",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "HB8KWSRI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HB8KWSRI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Introdução à Engenharia de Prompts.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Engenharia de Prompts",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "XIMIG8SB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XIMIG8SB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Fundamentos de Modelos de Linguagem de Grande Escala.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Modelos de Linguagem de Grande Escala",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "RRSXGY1H",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RRSXGY1H.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · A Era da IA (Machine Learning, LLMs, IA Generativa e Agentes).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "A Era da Inteligência Artificial: Machine Learning, LLMs, Inteligência Artificial Generativa e Agentes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "6NJVNNOR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6NJVNNOR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.31 · Digital Innovation One · Boas-Vindas ao Bradesco - GenAI & Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas-Vindas ao Bradesco - GenAI & Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-01-31",
    dataConclusao: "31 de janeiro de 2026",
    codigo: "A2E2ZFTV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/A2E2ZFTV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.29 · Daxus · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Daxus",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-01-29",
    dataConclusao: "29 de janeiro de 2025",
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
    id: 130,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.22 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-01-22",
    dataConclusao: "22 de janeiro de 2026",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=22%2F01%2F2026&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2026.01.15 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-01-15",
    dataConclusao: "15 de janeiro de 2026",
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
    id: 128,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.12.19 · Data Science Academy · Fundamentos de Linguagem Python™ do Básico a Aplicações de Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Data Science Academy",
    curso: "Fundamentos de Linguagem Python™ do Básico a Aplicações de Inteligência Artificial",
    cargaHoraria: "96 h",
    conclusaoISO: "2025-12-19",
    dataConclusao: "19 de dezembro de 2025",
    codigo: "6945020db9caae34dd00844a",
    mostrarCopiar: false,
    verificacao: {
      url: "https://mycourde.app/MpKX0TjEgLFyet7KC",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.12.11 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-12-11",
    dataConclusao: "11 de dezembro de 2025",
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
    id: 126,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.12.03 · Digital Innovation One · Nexa - Machine Learning e GenAI na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Nexa - Machine Learning e GenAI na Prática",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-12-03",
    dataConclusao: "03 de dezembro de 2025",
    codigo: "YKQYVDQR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YKQYVDQR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.12.03 · Digital Innovation One · Fundamentos de Machine Learning e Inteligências Artificiais Generativas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Machine Learning e Inteligências Artificiais Generativas",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-12-03",
    dataConclusao: "03 de dezembro de 2025",
    codigo: "G2BGKX0Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G2BGKX0Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.12.03 · Digital Innovation One · Fundamentos de Dados para Inteligência Artificial & Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos de Dados para Inteligência Artificial & Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-12-03",
    dataConclusao: "03 de dezembro de 2025",
    codigo: "FJL84MOP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FJL84MOP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.27 · Daxus · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Daxus",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-27",
    dataConclusao: "27 de novembro de 2025",
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
    id: 122,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Machine Learning sem Código com SageMaker Canvas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Machine Learning sem Código com SageMaker Canvas",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "QLIQWLED",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QLIQWLED.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Previsão de Estoque Inteligente na AWS com SageMaker Canvas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Previsão de Estoque Inteligente na AWS com SageMaker Canvas",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "G9ZAFSWF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G9ZAFSWF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Transformando Dados em Insights com SageMaker Canvas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Transformando Dados em Insights com SageMaker Canvas",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "J4LBQDNA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J4LBQDNA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Introdução ao SageMaker Canvas (Inteligência Artificial Generativa sem Código).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao SageMaker Canvas: Inteligência Artificial Generativa sem Código",
    cargaHoraria: "3 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "XDIFWFXQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XDIFWFXQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Introdução ao Desenvolvimento Low-Code.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Desenvolvimento Low-Code",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "ZQOJU8WU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZQOJU8WU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · O que são Inteligências Artificiais Generativas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "O que são Inteligências Artificiais Generativas",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "EOUSBVJF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EOUSBVJF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Processamento de Linguagem Natural.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Processamento de Linguagem Natural",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "KXO4KPOJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KXO4KPOJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Algoritmos e Aprendizado de Máquina.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Algoritmos e Aprendizado de Máquina",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "FLLW4A8T",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FLLW4A8T.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.21 · Digital Innovation One · Introdução ao Bootcamp Machine Learning para Iniciantes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Bootcamp Machine Learning para Iniciantes",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-21",
    dataConclusao: "21 de novembro de 2025",
    codigo: "KRH24IOB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KRH24IOB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Nexa - Fundamentos de Inteligência Artificial Generativa com Bedrock.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Nexa - Fundamentos de Inteligência Artificial Generativa com Bedrock",
    cargaHoraria: "9 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "FCD8H8T9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FCD8H8T9.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Explorando Inteligências Artificiais no Amazon Web Services.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Inteligências Artificiais no Amazon Web Services",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "OL8U7KCD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OL8U7KCD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Natural ou Fake Natty · Como Vencer na Era das Inteligências Artificiais Generativas!.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Natural ou Fake Natty? Como Vencer na Era das Inteligências Artificiais Generativas!",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "YBIUKBI2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YBIUKBI2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Associando Conceitos de Inteligências Artificiais Generativas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Associando Conceitos de Inteligências Artificiais Generativas",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
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
    id: 109,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Construindo Agentes Autônomos com Amazon Nova e AgentCore.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construindo Agentes Autônomos com Amazon Nova e AgentCore",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "X2LMJKYQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/X2LMJKYQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Amazon Bedrock para Escolha e Personalização de Modelos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Amazon Bedrock para Escolha e Personalização de Modelos",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "UXMNZJ3K",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UXMNZJ3K.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Prototipando Soluções Reais com PartyRock na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Prototipando Soluções Reais com PartyRock na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "M6EWAHOO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M6EWAHOO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Introdução ao Mundo da Inteligência Artificial Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Mundo da Inteligência Artificial Generativa",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "EEPQFOLT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EEPQFOLT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Aplicações Práticas da Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações Práticas da Inteligência Artificial",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "0OFTBWUF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0OFTBWUF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Aplicações e Impacto da Inteligência Artificial no Mundo Atual.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações e Impacto da Inteligência Artificial no Mundo Atual",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "V6CDMXKS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/V6CDMXKS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Introdução à Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Inteligência Artificial",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "SRQLFVGN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SRQLFVGN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Live de Lançamento Nexa + AWS - Fundamentos de Inteligência Artificial Generativa com Bedrock.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento Nexa + AWS - Fundamentos de Inteligência Artificial Generativa com Bedrock",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "VGS9EI0C",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VGS9EI0C.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.11.08 · Digital Innovation One · Bootcamps DIO (Educação Gratuita e Empregabilidade Juntas!).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Bootcamps DIO: Educação Gratuita e Empregabilidade Juntas!",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-11-08",
    dataConclusao: "08 de novembro de 2025",
    codigo: "QRL96OVR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QRL96OVR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.10.27 · Escola Nacional de Administração Pública · Introdução ao Processamento de Linguagem Natural.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola Nacional de Administração Pública - ENAP",
    curso: "Introdução ao Processamento de Linguagem Natural",
    cargaHoraria: "25 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "D4Kp19303419NUs8",
    mostrarCopiar: false,
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
    id: 99,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.10.18 · Cursa · Google Gemini.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Google Gemini",
    cargaHoraria: "31 h",
    conclusaoISO: "2025-10-18",
    dataConclusao: "18 de outubro de 2025",
    codigo: "dcd973a49d",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/dcd973a49d",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.10.16 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-10-16",
    dataConclusao: "16 de outubro de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=16%2F10%2F2025&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.10.01 · HP Foundation · Inteligência Artificial para Profissionais de Negócios.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "HP Foundation",
    curso: "Inteligência Artificial para Profissionais de Negócios",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-01",
    dataConclusao: "01 de outubro de 2025",
    codigo: "5633ceee-5064-4fa0-a684-5d42284547f3",
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
    id: 96,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.09.26 · Aprenda Mais · Inteligência Artificial I - Conhecendo as Redes Neurais Artificiais.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Aprenda Mais",
    curso: "Inteligência Artificial I - Conhecendo as Redes Neurais Artificiais",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-09-26",
    dataConclusao: "26 de setembro de 2025",
    codigo: "68d6d83f-f4b8-47b7-8017-39ebac1f02af",
    mostrarCopiar: false,
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
    id: 95,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.09.11 · Tetra Educação · Imersão Gestor do Futuro.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Gestor do Futuro",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-09-11",
    dataConclusao: "11 de setembro de 2025",
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
    id: 94,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.09.11 · Simplifica Treinamentos · Simplifica Inteligência Artificial Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Simplifica Treinamentos",
    curso: "Simplifica Inteligência Artificial Express",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-09-11",
    dataConclusao: "11 de setembro de 2025",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.09.11 · Daxus · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Daxus",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-09-11",
    dataConclusao: "11 de setembro de 2025",
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
    id: 92,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.29 · FIAP - Centro Universitário · Inteligência Artificial Responsável.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Inteligência Artificial Responsável",
    cargaHoraria: "80 h",
    conclusaoISO: "2025-08-29",
    dataConclusao: "29 de agosto de 2025",
    codigo: "1bf246ca707640c9e7d1938ef9535c48",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=1bf246ca707640c9e7d1938ef9535c48&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.14 · Tetra Educação · Imersão Gestor do Futuro.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Gestor do Futuro",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-08-14",
    dataConclusao: "14 de agosto de 2025",
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
    id: 90,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.12 · Cursa · Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Inteligência Artificial",
    cargaHoraria: "13 h",
    conclusaoISO: "2025-08-12",
    dataConclusao: "12 de agosto de 2025",
    codigo: "e2d9c8613b",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/e2d9c8613b",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.11 · Cursa · ChatGPT do Iniciante ao Avançado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "ChatGPT do Iniciante ao Avançado",
    cargaHoraria: "32 h",
    conclusaoISO: "2025-08-11",
    dataConclusao: "11 de agosto de 2025",
    codigo: "13ed13a578",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/13ed13a578",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.11 · Cursa · ChatGPT.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "ChatGPT",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-08-11",
    dataConclusao: "11 de agosto de 2025",
    codigo: "b3c7dcc392",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/b3c7dcc392",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.08.07 · Comunidade Data Driven · Imersão Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Comunidade Data Driven",
    curso: "Imersão Inteligência Artificial",
    cargaHoraria: "6 h",
    conclusaoISO: "2025-08-07",
    dataConclusao: "07 de agosto de 2025",
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
    id: 86,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.07.31 · Tetra Educação · Imersão Gestor do Futuro.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Gestor do Futuro",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-07-31",
    dataConclusao: "31 de julho de 2025",
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
    id: 85,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.07.24 · Tetra Educação · Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-07-24",
    dataConclusao: "24 de julho de 2025",
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
    id: 84,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.07.17 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-07-17",
    dataConclusao: "17 de julho de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=17%2F07%2F2025&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.07.03 · Tetra Educação · Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-07-03",
    dataConclusao: "03 de julho de 2025",
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
    id: 82,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.23 · Master Data Lab · Business Artificial Intelligence Essentials ·· The Future of Articial Intelligence.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Master Data Lab",
    curso: "Business Artificial Intelligence Essentials :: The Future of Articial Intelligence",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-06-26",
    dataConclusao: "26 de junho de 2025",
    codigo: "2cdabc60",
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
    id: 81,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Machine Learning Practitioner.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Machine Learning Practitioner",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 80,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Preparing for Databricks Certification Exams.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Preparing for Databricks Certification Exams",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 79,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Exam Information (Databricks Certified Machine Learning Professional).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Exam Information: Databricks Certified Machine Learning Professional",
    cargaHoraria: "1 min",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 78,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Advanced Machine Learning Operations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Advanced Machine Learning Operations",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 77,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Machine Learning at Scale.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Machine Learning at Scale",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 76,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Exam Information (Databricks Certified Machine Learning Associate).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Exam Information: Databricks Certified Machine Learning Associate",
    cargaHoraria: "1 min",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 75,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Machine Learning Operations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Machine Learning Operations",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 74,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Machine Learning Model Deployment.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Machine Learning Model Deployment",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 73,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.16 · Databricks Academy · Machine Learning Model Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Machine Learning Model Development",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-16",
    dataConclusao: "16 de junho de 2025",
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
    id: 72,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.15 · Databricks Academy · Data Preparation for Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Data Preparation for Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-15",
    dataConclusao: "15 de junho de 2025",
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
    id: 71,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.12 · Daxus · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Daxus",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-06-12",
    dataConclusao: "12 de junho de 2025",
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
    id: 70,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.06 · Instituto Federal Sul-Rio-Grandense · Aprendizagem de Máquina em Redes Bayesianas - Fundamentos e Aplicações.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Aprendizagem de Máquina em Redes Bayesianas - Fundamentos e Aplicações",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-06-06",
    dataConclusao: "06 de junho de 2025",
    codigo: "6843192d-0060-48dc-b0d9-06970a00c840",
    mostrarCopiar: false,
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
    id: 69,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.06.03 · Instituto Federal Mato Grosso do Sul · Introdução à Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Mato Grosso do Sul",
    curso: "Introdução à Inteligência Artificial",
    cargaHoraria: "30 h",
    conclusaoISO: "2025-06-03",
    dataConclusao: "03 de junho de 2025",
    codigo: "683e8bd8-ba28-48fd-a178-ed840a01004c",
    mostrarCopiar: false,
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
    id: 68,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.29 · Tetra Educação · Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-05-29",
    dataConclusao: "29 de maio de 2025",
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
    id: 67,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.23 · Instituto Federal Sul-Rio-Grandense · Inteligência Artificial (Fundamentos, Aplicações e Criatividade).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Instituto Federal Sul-Rio-Grandense",
    curso: "Inteligência Artificial: Fundamentos, Aplicações e Criatividade",
    cargaHoraria: "20 h",
    conclusaoISO: "2025-05-23",
    dataConclusao: "23 de maio de 2025",
    codigo: "6830a1c6-3d04-49e0-a440-61110a00c840",
    mostrarCopiar: false,
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
    id: 66,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.22 · Tetra Educação · Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-05-22",
    dataConclusao: "22 de maio de 2025",
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
    id: 65,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Microsoft Certification Challenge 3 DP-100.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Microsoft Certification Challenge #3 DP-100",
    cargaHoraria: "26 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "JMJ4SWZA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JMJ4SWZA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Otimizando Modelos de Linguagem para Aplicações Generativas de Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimizando Modelos de Linguagem para Aplicações Generativas de Inteligência Artificial",
    cargaHoraria: "7 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "6MDCURJW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6MDCURJW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Criando um Chatbot Baseado em Conteúdo de PDFs.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Chatbot Baseado em Conteúdo de PDFs",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "JLSX5D9F",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JLSX5D9F.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Otimizar o Treinamento de Modelo no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimizar o Treinamento de Modelo no Azure Machine Learning",
    cargaHoraria: "5 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "EDLL89LZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EDLL89LZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Treinando seu Primeiro Modelo de Machine Learning para Prever Vendas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Treinando seu Primeiro Modelo de Machine Learning para Prever Vendas",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "GEY606AV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GEY606AV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Introdução a Ciência de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Ciência de Dados",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "NHELIHJD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NHELIHJD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Digital Innovation One · Contribuindo em um Projeto Open Source no GitHub.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Contribuindo em um Projeto Open Source no GitHub",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-05-13",
    dataConclusao: "13 de maio de 2025",
    codigo: "SFKNMMXC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SFKNMMXC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.11 · Digital Innovation One · Simulado Preparatório para o Exame DP-100.png",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório para o Exame DP-100",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-05-11",
    dataConclusao: "11 de maio de 2025",
    codigo: "UFRBHFSN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UFRBHFSN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.11 · Digital Innovation One · Avalie este Bootcamp 2025.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie este Bootcamp 2025",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-05-11",
    dataConclusao: "11 de maio de 2025",
    codigo: "6XIYYCGJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6XIYYCGJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.11 · Digital Innovation One · Simulado Preparatório para o Exame DP 100.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório para o Exame DP-100",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-05-11",
    dataConclusao: "11 de maio de 2025",
    codigo: "9RZASFHH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9RZASFHH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.05.13 · Daxus · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Daxus",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-04-31",
    dataConclusao: "31 de abril de 2025",
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
    id: 54,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.30 · Digital Innovation One · Experimentos com o Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Experimentos com o Azure Machine Learning",
    cargaHoraria: "4 h",
    conclusaoISO: "2025-04-30",
    dataConclusao: "30 de abril de 2025",
    codigo: "USPJ5KVI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/USPJ5KVI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.30 · Digital Innovation One · Modelagem e Monitoramento de Modelos de Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Modelagem e Monitoramento de Modelos de Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-30",
    dataConclusao: "30 de abril de 2025",
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
    id: 52,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.30 · Digital Innovation One · Explorar e Configurar o Workspace do Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorar e Configurar o Workspace do Azure Machine Learning",
    cargaHoraria: "7 h",
    conclusaoISO: "2025-04-30",
    dataConclusao: "30 de abril de 2025",
    codigo: "XLTSJXLA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XLTSJXLA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.30 · Digital Innovation One · Fundamentos do Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos do Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-30",
    dataConclusao: "30 de abril de 2025",
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
    id: 50,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.29 · Digital Innovation One · Avalie o Desempenho dos seus Modelos no Azure Artificial Intelligence Foundry.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie o Desempenho dos seus Modelos no Azure Artificial Intelligence Foundry",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-29",
    dataConclusao: "29 de abril de 2025",
    codigo: "6Z8JJWDO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6Z8JJWDO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.29 · Digital Innovation One · Otimização Através de Ajuste Fino (Fine-Tuning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimização Através de Ajuste Fino (Fine-Tuning)",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-29",
    dataConclusao: "29 de abril de 2025",
    codigo: "4AMYXXTN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4AMYXXTN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.28 · Digital Innovation One · Otimizar Através do Retrieval Augmented Generation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimizar Através do Retrieval Augmented Generation",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-28",
    dataConclusao: "28 de abril de 2025",
    codigo: "7ZYBIXZW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7ZYBIXZW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.28 · Digital Innovation One · Otimizando Modelos do Azure Artificial Intelligence Foundry com Engenharia de Prompt.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Otimizando Modelos do Azure Artificial Intelligence Foundry com Engenharia de Prompt",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-28",
    dataConclusao: "28 de abril de 2025",
    codigo: "HQDRGK02",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HQDRGK02.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.28 · Digital Innovation One · Explore e Implante Modelos do Catálogo do Azure Artificial Intelligence Foundry.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explore e Implante Modelos do Catálogo do Azure Artificial Intelligence Foundry",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-28",
    dataConclusao: "28 de abril de 2025",
    codigo: "R7PYYMXN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/R7PYYMXN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.28 · Digital Innovation One · Introdução ao Azure Artificial Intelligence Foundry.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Azure Artificial Intelligence Foundry",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-28",
    dataConclusao: "28 de abril de 2025",
    codigo: "JTNQ6NC2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JTNQ6NC2.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Implantar e Consumir Modelos com o Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implantar e Consumir Modelos com o Azure Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "TBGGGDD8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TBGGGDD8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Implantação de Modelos em Pontos de Extremidade em Lote.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implantação de Modelos em Pontos de Extremidade em Lote",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "UBH7PUAL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UBH7PUAL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Implantação de Modelos Machine Learning em Pontos de Extremidade.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implantação de Modelos Machine Learning em Pontos de Extremidade",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "DJEPQFKU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DJEPQFKU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Gerenciar e Examinar Modelos no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciar e Examinar Modelos no Azure Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "0G0GNUTK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0G0GNUTK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Criação e Análise de Painéis de Inteligência Artificial Responsável no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criação e Análise de Painéis de Inteligência Artificial Responsável no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "1MUOTR8U",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1MUOTR8U.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.27 · Digital Innovation One · Registro de Modelos do MLflow no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Registro de Modelos do MLflow no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-27",
    dataConclusao: "27 de abril de 2025",
    codigo: "NZK6KGHS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NZK6KGHS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.26 · Digital Innovation One · Execução de Pipelines no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Execução de Pipelines no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-26",
    dataConclusao: "26 de abril de 2025",
    codigo: "QCG02Q3Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QCG02Q3Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.26 · Digital Innovation One · Realização de Ajuste de Hiperparâmetros com o Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Realização de Ajuste de Hiperparâmetros com o Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-26",
    dataConclusao: "26 de abril de 2025",
    codigo: "SVXUSEGM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SVXUSEGM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.26 · Digital Innovation One · Monitoramento do Treinamento de Modelos com MLflow.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Monitoramento do Treinamento de Modelos com MLflow",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-26",
    dataConclusao: "26 de abril de 2025",
    codigo: "OTVJCWGT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OTVJCWGT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.25 · Digital Innovation One · Execução de Scripts no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Execução de Scripts no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-25",
    dataConclusao: "25 de abril de 2025",
    codigo: "82J24HXL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/82J24HXL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.25 · Digital Innovation One · Treinando Modelos em Notebooks com MLflow.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Treinando Modelos em Notebooks com MLflow",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-25",
    dataConclusao: "25 de abril de 2025",
    codigo: "9MNKXIFP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9MNKXIFP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.25 · Digital Innovation One · Monitoramento do Treinamento de Modelos em Notebooks Jupyter com MLflow.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Monitoramento do Treinamento de Modelos em Notebooks Jupyter com MLflow",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-25",
    dataConclusao: "25 de abril de 2025",
    codigo: "WEFD0C2V",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WEFD0C2V.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.24 · Digital Innovation One · Identificação do Melhor Modelo de Classificação com Machine Learning Automatizado.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Identificação do Melhor Modelo de Classificação com Machine Learning Automatizado",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-24",
    dataConclusao: "24 de abril de 2025",
    codigo: "H9XTPNNA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H9XTPNNA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.24 · Digital Innovation One · Desafios de Código (Aperfeiçoe sua Lógica e Pensamento Computacional).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios de Código: Aperfeiçoe sua Lógica e Pensamento Computacional",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-24",
    dataConclusao: "24 de abril de 2025",
    codigo: "XXIKDSEX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XXIKDSEX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.24 · Digital Innovation One · Cofiguração e Uso de Ambientes no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Cofiguração e Uso de Ambientes no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-24",
    dataConclusao: "24 de abril de 2025",
    codigo: "BO9ZCLLM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BO9ZCLLM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.23 · Digital Innovation One · Gerenciamento de Destinos de Computação no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de Destinos de Computação no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-23",
    dataConclusao: "23 de abril de 2025",
    codigo: "GTSMQ1ET",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GTSMQ1ET.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.23 · Digital Innovation One · Disponibilização de Dados no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Disponibilização de Dados no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-23",
    dataConclusao: "23 de abril de 2025",
    codigo: "IRLEQZ2L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IRLEQZ2L.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.23 · Digital Innovation One · Ferramentas de Desenvolvimento com Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ferramentas de Desenvolvimento com Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-23",
    dataConclusao: "23 de abril de 2025",
    codigo: "QVZNBBOG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QVZNBBOG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.22 · Digital Innovation One · Trabalhando com Workspaces no Azure Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Workspaces no Azure Machine Learning",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-22",
    dataConclusao: "22 de abril de 2025",
    codigo: "DMJ73JP3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DMJ73JP3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.22 · Digital Innovation One · Live de Lançamento (Microsoft Certification Challenge 3 - DP 100).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento: Microsoft Certification Challenge #3 - DP 100",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-22",
    dataConclusao: "22 de abril de 2025",
    codigo: "EOQ7UEIC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EOQ7UEIC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.22 · Digital Innovation One · Desafios de Projetos (Crie um Portfólio Vencedor).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desafios de Projetos: Crie um Portfólio Vencedor",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-22",
    dataConclusao: "22 de abril de 2025",
    codigo: "51QSKILL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/51QSKILL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.21 · Digital Innovation One · Versionamento de Código com Git e GitHub.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Versionamento de Código com Git e GitHub",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-04-21",
    dataConclusao: "21 de abril de 2025",
    codigo: "JIO0GBXJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JIO0GBXJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.20 · Digital Innovation One · Projetar uma Solução de Aprendizado de Máquina.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Projetar uma Solução de Aprendizado de Máquina",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-20",
    dataConclusao: "20 de abril de 2025",
    codigo: "AE7SQILQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AE7SQILQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.16 · FIAP - Centro Universitário · Soluções Tecnológicas Emergentes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Soluções Tecnológicas Emergentes",
    cargaHoraria: "40 h",
    conclusaoISO: "2025-04-16",
    dataConclusao: "16 de abril de 2025",
    codigo: "5da8a90f78e922ffc9adebe81a1f9870",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=5da8a90f78e922ffc9adebe81a1f9870&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.14 · FIAP - Centro Universitário · Chatbots.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Chatbot",
    cargaHoraria: "60 h",
    conclusaoISO: "2025-04-14",
    dataConclusao: "14 de abril de 2025",
    codigo: "50620cda90ee7fe437bcb83dd3f8f17c",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=50620cda90ee7fe437bcb83dd3f8f17c&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.13 · Digital Innovation One · Ciclo de Vida do Processo de Ciência de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ciclo de Vida do Processo de Ciência de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-13",
    dataConclusao: "13 de abril de 2025",
    codigo: "JDPXQCHD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JDPXQCHD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.10 · Tetra Educação · Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-04-10",
    dataConclusao: "10 de abril de 2025",
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
    id: 17,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.10 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-04-10",
    dataConclusao: "10 de abril de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=10%2F04%2F2025&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.04.08 · Digital Innovation One · Introdução ao Microsoft Certification Challenge 3 DP-100.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Microsoft Certification Challenge #3 DP-100",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-04-08",
    dataConclusao: "08 de abril de 2025",
    codigo: "SRYK0UYK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SRYK0UYK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.03.27 · Empowerdata · Imersão Inteligência Artificial na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Empowerdata",
    curso: "Imersão Inteligência Artificial na Prática",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-03-27",
    dataConclusao: "27 de março de 2025",
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
    id: 14,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.03.01 · FIAP - Centro Universitário · Inteligência Artificial e Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Inteligência Artificial e Computacional",
    cargaHoraria: "80 h",
    conclusaoISO: "2025-03-01",
    dataConclusao: "01 de março de 2025",
    codigo: "592c1dc3a7a32191398fed53d7f0905b",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=592c1dc3a7a32191398fed53d7f0905b&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.02.20 · Tetra Educação - Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-02-20",
    dataConclusao: "20 de fevereiro de 2025",
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
    id: 12,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.02.05 · Gran Faculdade · Imersão Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Gran Faculdade",
    curso: "Imersão Inteligência Artificial",
    cargaHoraria: "10 h",
    conclusaoISO: "2025-02-05",
    dataConclusao: "05 de fevereiro de 2025",
    codigo: "ZYROW4-CE001574",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.01.23 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-01-23",
    dataConclusao: "23 de janeiro de 2025",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=23%2F01%2F2025&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2025.01.09 · Tetra Educação - Imersão Inteligência Artificial Revolution.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Tetra Educação",
    curso: "Imersão Inteligência Artificial Revolution",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-01-09",
    dataConclusao: "09 de janeiro de 2025",
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
    id: 9,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.11.11 · Santander Open Academy · Inteligência Artificial Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Santander Open Academy",
    curso: "Inteligência Artificial Generativa",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-11-11",
    dataConclusao: "11 de novembro de 2024",
    codigo: "OA-2024-1111000651407",
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
    id: 8,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.11.08 · Santander Open Academy · Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Santander Open Academy",
    curso: "Copilot",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-11-08",
    dataConclusao: "08 de novembro de 2024",
    codigo: "OA-2024-1108000649014",
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
    id: 7,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.11.05 · Cursa · Aprendizado de Máquina (Machine Learning).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Aprendizado de Máquina (Machine Learning)",
    cargaHoraria: "11 h",
    conclusaoISO: "2024-11-05",
    dataConclusao: "05 de novembro de 2024",
    codigo: "b70c498951",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/b70c498951",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.10.17 · Hashtag Treinamentos · Jornada Inteligência Artificial da Hashtag.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Hashtag Treinamentos",
    curso: "Jornada Inteligência Artificial da Hashtag",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-10-17",
    dataConclusao: "17 de outubro de 2024",
    codigo: "Inaplicável",
    mostrarCopiar: false,
    verificacao: {
      url: "https://dlp.hashtagtreinamentos.com/certificado/download?ncf=Rogério+Clynton+Ribeiro&necf=Jornada+Inteligência+Artificial+da+Hashtag&dtcf=17%2F10%2F2024&hcf=8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.10.15 · Santander Open Academy · Google (Inteligência Artificial e Produtividade).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Santander Open Academy",
    curso: "Google: Inteligência Artificial e Produtividade",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-10-15",
    dataConclusao: "15 de outubro de 2024",
    codigo: "OA-2024-1015000609659",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.10.15 · Escola de Inteligência Artificial · Inteligência Artificial com Algoritmos Genéticos em R.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Escola de Inteligência Artificial",
    curso: "Inteligência Artificial com Algoritmos Genéticos em R",
    cargaHoraria: "7 h",
    conclusaoISO: "2024-10-15",
    dataConclusao: "15 de outubro de 2024",
    codigo: "JGzFpalm",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.10.12 · Cursa · Inteligência Artificial com Zurubabel.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Inteligência Artificial com Zurubabel",
    cargaHoraria: "5 h 19 min",
    conclusaoISO: "2024-10-12",
    dataConclusao: "12 de outubro de 2024",
    codigo: "u5123989",
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

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.02.16 · Faculdade Exame · Carreira em Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Faculdade Exame",
    curso: "Carreira em Inteligência Artificial",
    cargaHoraria: "2 h",
    conclusaoISO: "2024-02-16",
    dataConclusao: "16 de fevereiro de 2024",
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
    id: 1,

    thumb: "/portfolio/formacoes-complementares/inteligencia-artificial/certificados/2024.01.17 · Faculdade Exame · Inteligência Artificial (Carreira do Futuro).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Faculdade Exame",
    curso: "Inteligência Artificial: Carreira do Futuro",
    cargaHoraria: "2 h",
    conclusaoISO: "2024-01-17",
    dataConclusao: "17 de janeiro de 2024",
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
