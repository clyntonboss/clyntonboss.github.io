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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · GFT - Fundamentos de Cloud com AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "GFT - Fundamentos de Cloud com AWS",
    cargaHoraria: "48 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "8YLMXVMS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8YLMXVMS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Automação e DevOps na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Automação e DevOps na AWS",
    cargaHoraria: "7 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "HRWIASPZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HRWIASPZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando Ferramentas da AWS para DevOps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Ferramentas da AWS para DevOps",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "RHRN7MB9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RHRN7MB9.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Aplicando Conceitos de DevOps na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicando Conceitos de DevOps na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "GPDVMXZE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GPDVMXZE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução ao DevOps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao DevOps",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "7AP02AVJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/7AP02AVJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Infraestrutura como Código na AWS com Terraform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Infraestrutura como Código na AWS com Terraform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "A7DW6TQH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/A7DW6TQH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Executando Tarefas Automatizadas com Lambda Function e S3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Executando Tarefas Automatizadas com Lambda Function e S3",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "LWGC7NUZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LWGC7NUZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando Automatização de Tarefas na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Automatização de Tarefas na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "DDZTOYVK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DDZTOYVK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Desenvolvimento e Ferramenta.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento e Ferramenta",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "JOGJZUDZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JOGJZUDZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Automatizando Implantação de Aplicações com AWS CodeDeploy.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Automatizando Implantação de Aplicações com AWS CodeDeploy",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "MIWBSCTA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MIWBSCTA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Implementando Infraestrutura Automatizada com AWS CloudFormation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando Infraestrutura Automatizada com AWS CloudFormation",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "RDACJ4Z3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RDACJ4Z3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando como Funcionam a AWS CLI e os SDKs.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando como Funcionam a AWS CLI e os SDKs",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "NCYNILLL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NCYNILLL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Segurança na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Segurança na AWS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "TRYZEQTY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TRYZEQTY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Protegendo Aplicações Web com AWS WAF.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Protegendo Aplicações Web com AWS WAF",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "BJCHWROV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BJCHWROV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo a Criptografia de Dados na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo a Criptografia de Dados na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "CWHHMWGZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CWHHMWGZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando Práticas Recomendadas de Segurança na Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Práticas Recomendadas de Segurança na Nuvem",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "Q4OV2K5P",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/Q4OV2K5P.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Gerenciamento e Governança na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento e Governança na AWS",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "SAWWLKSM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SAWWLKSM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo e Gerenciando Policies e Roles na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo e Gerenciando Policies e Roles na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "WD3FDJMR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WD3FDJMR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Gerenciando Usuários e Permissões na AWS com Identity and Access Management.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciando Usuários e Permissões na AWS com Identity and Access Management",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "KXBCELZ5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KXBCELZ5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Implementando sua Primeira Stack com AWS CloudFormation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando sua Primeira Stack com AWS CloudFormation",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "RTJTHBMD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RTJTHBMD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Fundamentos do AWS CloudTrail para Auditoria e Segurança na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos do AWS CloudTrail para Auditoria e Segurança na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "9ZEXTJWW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9ZEXTJWW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo o que é o AWS CloudWatch.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo o que é o AWS CloudWatch",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "PQYQXAA8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PQYQXAA8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Serviços Intermediários e Avançados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Serviços Intermediários e Avançados",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "CM0NUGMU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CM0NUGMU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando Workflows Automatizados com AWS Step Functions.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Workflows Automatizados com AWS Step Functions",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "PZFYW0RW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PZFYW0RW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo como Funcionam o Amazon SNS e SQS na Comunicação Assíncrona.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo como Funcionam o Amazon SNS e SQS na Comunicação Assíncrona",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "JNOF5OIV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JNOF5OIV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo o que são Amazon ECS e EKS na Orquestração de Containers.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo o que são Amazon ECS e EKS na Orquestração de Containers",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "AF7Y3MRB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AF7Y3MRB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo como Funciona o AWS Lambda.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo como Funciona o AWS Lambda",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "WLN8SPS1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WLN8SPS1.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Serviços de Armazenamento e CDN.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Serviços de Armazenamento e CDN",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "PRURSWVK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PRURSWVK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Aplicações Industriais com JavaScript e AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações Industriais com JavaScript e AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
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
    id: 270,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo a Distribuição de Conteúdo com Amazon CloudFront.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo a Distribuição de Conteúdo com Amazon CloudFront",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "MCAYVCEI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MCAYVCEI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Conhecendo o Amazon Glacier.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Amazon Glacier",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "GOAAH00C",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GOAAH00C.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução ao Amazon S3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Amazon S3",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "VFFZLG3S",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VFFZLG3S.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Banco de Dados na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Banco de Dados na AWS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "H48SYTH0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H48SYTH0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando Estratégias de Backup e Recuperação de Dados na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Estratégias de Backup e Recuperação de Dados na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "FJW59ZFL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FJW59ZFL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução ao Amazon DynamoDB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Amazon DynamoDB",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "ADMGFGSL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ADMGFGSL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo o que é o Amazon RDS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo o que é o Amazon RDS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "LOXYICU8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LOXYICU8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Redes na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes na AWS",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "4OTGCMBH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4OTGCMBH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo o que é o Amazon Elastic Load Balancer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo o que é o Amazon Elastic Load Balancer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "FYA1EYVA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FYA1EYVA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução à Distribuição de Conteúdo com Amazon CloudFront.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Distribuição de Conteúdo com Amazon CloudFront",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "NWWU01IG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NWWU01IG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Explorando os Fundamentos do Route 53 na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando os Fundamentos do Route 53 na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "2FPROAOX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2FPROAOX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução ao Security Group na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Security Group na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "ZUTORL7L",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZUTORL7L.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo o que é uma Subnet na Amazon VPC.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo o que é uma Subnet na Amazon VPC",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "OGI1HQZG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OGI1HQZG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução à Amazon VPC.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à Amazon VPC",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "EPS6EOEY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EPS6EOEY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Criando Recursos na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Recursos na AWS",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "SBJGGL7O",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SBJGGL7O.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Criando sua Primeira Função com Amazon Lambda.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando sua Primeira Função com Amazon Lambda",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "KQ7RMEEV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KQ7RMEEV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Criando seu Primeiro Bucket no Amazon S3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando seu Primeiro Bucket no Amazon S3",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "8UMJBR7I",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8UMJBR7I.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Criando sua Primeira Instância Amazon EC2.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando sua Primeira Instância Amazon EC2",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "EQUX18U7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EQUX18U7.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Computação na Nuvem com EC2.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Computação na Nuvem com EC2",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "AGWW9KXG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AGWW9KXG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Gerenciando Instâncias EC2 na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciando Instâncias EC2 na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "U6HKOSBB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U6HKOSBB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Armazenamento na Nuvem com Amazon EBS e S3.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenamento na Nuvem com Amazon EBS e S3",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "JHQUMQ2W",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JHQUMQ2W.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Entendendo as Instâncias EC2 e a Otimização de Recursos na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Entendendo as Instâncias EC2 e a Otimização de Recursos na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "4J1CVOGD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4J1CVOGD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução à AWS e Conceitos Básicos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à AWS e Conceitos Básicos",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "CXMLZS3D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CXMLZS3D.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Live de Lançamento - GFT - Fundamentos de Cloud com AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento - GFT - Fundamentos de Cloud com AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "8BDFW1GJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8BDFW1GJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Primeiros Passos com Acesso Seguro e Controle de Custos na AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com Acesso Seguro e Controle de Custos na AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "X6FMFIAG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/X6FMFIAG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Configurando sua Conta AWS com Segurança e Eficiência.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configurando sua Conta AWS com Segurança e Eficiência",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "YMBRSMYE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YMBRSMYE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Fundamentos Essenciais da Infraestrutura AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos Essenciais da Infraestrutura AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "3LIT6IIQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3LIT6IIQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Introdução à AWS e ao Universo da Computação em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução à AWS e ao Universo da Computação em Nuvem",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "FKWWBQHC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FKWWBQHC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.05.09 · Digital Innovation One · Boas-Vindas Bootcamp GFT - Fundamentos de Cloud com AWS.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Boas-Vindas Bootcamp GFT - Fundamentos de Cloud com AWS",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-05-09",
    dataConclusao: "09 de maio de 2026",
    codigo: "UMQEUH44",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UMQEUH44.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · XP Inc. - Cloud com Inteligência Artificial.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "XP Inc. - Cloud com Inteligência Artificial",
    cargaHoraria: "49 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "IQHTAWEI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IQHTAWEI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Serviços de IA na Cloud.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Serviços de IA na Cloud",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LBUS5NK6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LBUS5NK6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Explorando Conceitos, Serviços e Ferramentas de IA do Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Conceitos, Serviços e Ferramentas de IA do Azure",
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
    id: 238,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Explorando os Recursos de IA Generativa com Copilot e OpenAI.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando os Recursos de IA Generativa com Copilot e OpenAI",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PJCBSEVI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PJCBSEVI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Azure Cognitive Search (Utilizando AI Search para Indexação e Consulta de Dados).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Azure Cognitive Search: Utilizando AI Search para Indexação e Consulta de Dados",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "YSBNHMOB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YSBNHMOB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Inteligência de Documentos de IA do Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Inteligência de Documentos de IA do Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "PTO14ADL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PTO14ADL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Trabalhando com GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com GitHub Copilot",
    cargaHoraria: "8 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "DQABGEF3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DQABGEF3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Explorando Funcionalidades e Aplicações do GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Funcionalidades e Aplicações do GitHub Copilot",
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
    id: 233,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LCDOXVIK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LCDOXVIK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Copilot Chat.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Copilot Chat",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "YODO9Z4A",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YODO9Z4A.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · O que é o GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "O que é o GitHub Copilot",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "BHFHNGAH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BHFHNGAH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Trabalhando com Engenharia de Prompt.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Engenharia de Prompt",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "FJYJ6XTV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/FJYJ6XTV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Explorando Conceitos e Técnicas de Engenharia de Prompts.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Conceitos e Técnicas de Engenharia de Prompts",
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
    id: 228,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Utilizando Prompts para Gerar Insights de Relatórios de Vendas.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Utilizando Prompts para Gerar Insights de Relatórios de Vendas",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "VSVS1DDD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VSVS1DDD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Ferramentas e Plataformas da Microsoft Essenciais para a Engenharia de Prompts.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ferramentas e Plataformas da Microsoft Essenciais para a Engenharia de Prompts",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LMJVEXBV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LMJVEXBV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Escrevendo Prompts Eficazes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Escrevendo Prompts Eficazes",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "8L8SS8PH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8L8SS8PH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Fundamentos da IA Generativa.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos da IA Generativa",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "NCBKD2B8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NCBKD2B8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Como Funcionam os Serviços de IA em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Como Funcionam os Serviços de IA em Nuvem",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "KDSLSV6N",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KDSLSV6N.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Conceitos de Visão Computacional.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conceitos de Visão Computacional",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "W2J6TVSC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/W2J6TVSC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Introdução a Computação em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Computação em Nuvem",
    cargaHoraria: "13 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "VGC9EDVW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VGC9EDVW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Live de Lançamento (XP Inc. - Cloud com Inteligência Artificial).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Live de Lançamento: XP Inc. - Cloud com Inteligência Artificial",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "JLY5ISXF",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JLY5ISXF.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Explorando Conceitos e Benefícios da Computação em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando Conceitos e Benefícios da Computação em Nuvem",
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
    id: 219,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Identidade Acesso e Segurança.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Identidade Acesso e Segurança",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "2D0ENYBR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/2D0ENYBR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Configurando uma Instância de Banco de Dados na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Configurando uma Instância de Banco de Dados na Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "CA7ZNVPY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CA7ZNVPY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Tipos de Serviço de Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Tipos de Serviço de Nuvem",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "TDUCCYNX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TDUCCYNX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Criando Máquinas Virtuais na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Máquinas Virtuais na Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "LWVUPZUY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LWVUPZUY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Benefícios da Computação em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Benefícios da Computação em Nuvem",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "79FTCKHV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/79FTCKHV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.22 · Digital Innovation One · Introdução a Experiência XP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Experiência XP",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-22",
    dataConclusao: "22 de abril de 2026",
    codigo: "1BPS2YNQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/1BPS2YNQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Formação Google Cloud Platform (GCP) Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Google Cloud Platform (GCP) Specialist",
    cargaHoraria: "58 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "KIYVDXON",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KIYVDXON.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Google Kubernetes Engine.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Google Kubernetes Engine",
    cargaHoraria: "9 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "HNIXDANT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HNIXDANT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Avalie a Formação Google Cloud Platform (GCP) Specialist.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação Google Cloud Platform (GCP) Specialist",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "IQZLEGEW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IQZLEGEW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Materiais Complementares - Google Kubernetes Engine.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Google Kubernetes Engine",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "HNIXDANT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HNIXDANT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Criação do Cluster Kubernetes e Implantação do Microservice-Demo de Exemplo.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criação do Cluster Kubernetes e Implantação do Microservice-Demo de Exemplo",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "J1DMFJR7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J1DMFJR7.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com o Anthos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com o Anthos",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "ECCTEYZQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ECCTEYZQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · GKE (Backups Inteligente na Google Cloud Platform).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "GKE: Backups Inteligente na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "XT5PAYVZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XT5PAYVZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Load Balancer e SSL na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Load Balancer e SSL na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "VPQCTOPQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VPQCTOPQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Introdução GKE e uso de Containers.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução GKE e uso de Containers",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "S1RHNRHA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/S1RHNRHA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Compute Engine e Containers com Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Compute Engine e Containers com Google Cloud Platform",
    cargaHoraria: "14 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "TFVHF3NG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TFVHF3NG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Materiais Complementares - Conhecendo Soluções Google Compute e Containers.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Conhecendo Soluções Google Compute e Containers",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "U4PVCIFN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U4PVCIFN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Deploy de Aplicação Utilizando Container no Cloud Run.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deploy de Aplicação Utilizando Container no Cloud Run",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "OPFJOAJI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OPFJOAJI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Cloud Run na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Cloud Run na Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "4FICAQAE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4FICAQAE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Deploy de Aplicação AppEngine com Instance Class Personalizado e Auto Scaling.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deploy de Aplicação AppEngine com Instance Class Personalizado e Auto Scaling",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "6T5QNP6T",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6T5QNP6T.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Introdução ao App Engine.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao App Engine",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "G65SPDAP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/G65SPDAP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Criando um Instance Template e Instance Group Load Balancer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Instance Template e Instance Group Load Balancer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "9DPVPJVJL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9DPVPJVJL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Infraestrutura Native Cloud.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Infraestrutura Native Cloud",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "9EY2XLQY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9EY2XLQY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Criando a Primeira VPC e Máquina Virtual pelo Console GCP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando a Primeira VPC e Máquina Virtual pelo Console GCP",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "TTGCAOR5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TTGCAOR5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Gerenciando Máquinas Virtuais no Google Cloud Platform com Compute Engine.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciando Máquinas Virtuais no Google Cloud Platform com Compute Engine",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "VVQLMVTU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VVQLMVTU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · DevOps na Nuvem com Google Cloud Platform (GCP).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "DevOps na Nuvem com Google Cloud Platform (GCP)",
    cargaHoraria: "10 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "NLC3NNYI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NLC3NNYI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Materiais Complementares - DevOps na Nuvem com Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - DevOps na Nuvem com Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "NYZJWFSP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NYZJWFSP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Criando Pipeline de CI·CD com Cloud Build e Terraform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Pipeline de CI/CD com Cloud Build e Terraform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "DBDWL7DQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DBDWL7DQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Spinnaker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Spinnaker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "6VQPX3KX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6VQPX3KX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Jenkins.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Jenkins",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "SCY69PRP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SCY69PRP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Cloud Deploy GCP.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Cloud Deploy GCP",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "NQJSTGNR",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NQJSTGNR.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Terraform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Terraform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "LIOQYBX3",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LIOQYBX3.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Trabalhando com Cloud Build.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Cloud Build",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "ZRERYMPO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZRERYMPO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Introdução ao Conceito de DevOps e Preparação do Ambiente GCloud SDK.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Conceito de DevOps e Preparação do Ambiente GCloud SDK",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "OCWYF2WH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/OCWYF2WH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Google Cloud Foundations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Google Cloud Foundations",
    cargaHoraria: "26 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "BTWPZIS0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BTWPZIS0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Materiais Complementares - Google Cloud Foundations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares - Google Cloud Foundations",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "ZCNVFSO7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZCNVFSO7.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Utilizando o Cloud Shell.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Utilizando o Cloud Shell",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "4RNYECMU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4RNYECMU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Personalizando Dashboard e Trocando as Preferências de Idioma.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Personalizando Dashboard e Trocando as Preferências de Idioma",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "TPAQTRTP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TPAQTRTP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Conhecendo o Painel da Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo o Painel da Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "R4FGMGGJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/R4FGMGGJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Exportação do Billing na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Exportação do Billing na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "SYSAFLRL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SYSAFLRL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Definição de Orçamento de Billing na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Definição de Orçamento de Billing na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "TMR9LVGC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TMR9LVGC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Desenhando sua Organização de Pastas e Projetos e Grupos de Acessos na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenhando sua Organização de Pastas e Projetos e Grupos de Acessos na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "BWE9DELO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BWE9DELO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Arquiteturas Resilientes na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Arquiteturas Resilientes na Google Cloud Platform",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "BJUOPEQO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BJUOPEQO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Conceituando IAC e CI·CD.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conceituando IAC e CI/CD",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "T8CFBT51",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/T8CFBT51.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Gestão de Dados e Controle de Custos na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gestão de Dados e Controle de Custos na Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "P2CQNVAW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/P2CQNVAW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Redes e Monitoramento na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Redes e Monitoramento na Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "U1IKD8FO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/U1IKD8FO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Gestão de Acessos e Segurança na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gestão de Acessos e Segurança na Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "K65H6HYI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K65H6HYI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Organizando Projetos na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Organizando Projetos na Google Cloud Platform",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "XK2WPQMQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XK2WPQMQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Gestão de Recursos na Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gestão de Recursos na Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "CFCSN7AL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CFCSN7AL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Hands-On (Provisionando Usuários Cloud Identity).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Hands-On: Provisionando Usuários Cloud Identity",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "SFRRZPDH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SFRRZPDH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Gestão de Identidades com Boas Práticas de Segurança.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gestão de Identidades com Boas Práticas de Segurança",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "UQN4D0X4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UQN4D0X4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.16 · Digital Innovation One · Introdução ao Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Google Cloud Platform",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-16",
    dataConclusao: "16 de abril de 2026",
    codigo: "ES8IMF4J",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ES8IMF4J.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Formação Kubernetes Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Kubernetes Fundamentals",
    cargaHoraria: "19 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "AR4Z6B1Z",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AR4Z6B1Z.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Automatizando Deployments com Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Automatizando Deployments com Kubernetes",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "QGPLTKRM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QGPLTKRM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Avalie a Formação de Kubernetes Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação de Kubernetes Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "UEWJHFF7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UEWJHFF7.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Arquitetura e Deploy de Microsserviços).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Arquitetura e Deploy de Microsserviços",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "E1WRTLC8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/E1WRTLC8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Criando um Pipeline de Deploy com GitLab e Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Pipeline de Deploy com GitLab e Kubernetes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "H9ZBMJT6",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H9ZBMJT6.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · CI-CD Utilizando Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "CI-CD Utilizando Kubernetes",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "ZVKWYLUS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZVKWYLUS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Deployment e Roolback em Clusters Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Deployment e Roolback em Clusters Kubernetes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "CRCQUEW4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CRCQUEW4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Expondo e Conectando Aplicações Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Expondo e Conectando Aplicações Kubernetes",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "LSNXCADV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LSNXCADV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Conceitos Avançados (Expondo e Conectando Aplicações)).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Conceitos Avançados (Expondo e Conectando Aplicações)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "4OWAGFAH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4OWAGFAH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Criando um Deploy de uma Aplicação.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Deploy de uma Aplicação",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "P2MDOEIG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/P2MDOEIG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Persistência de Dados em Clusters Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Persistência de Dados em Clusters Kubernetes",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "ZIFMDOU0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZIFMDOU0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Serviços de Acesso para Kubernetes Pods.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Serviços de Acesso para Kubernetes Pods",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "GA373KU8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GA373KU8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Primeiros Passos com o Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com o Kubernetes",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "CX2U7ISY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CX2U7ISY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Primeiros Passos Com o Kubernetes).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Primeiros Passos Com o Kubernetes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "6F3OAZ3U",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6F3OAZ3U.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Criando Imagens Personalizadas com o Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando Imagens Personalizadas com o Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "E2DQHGOV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/E2DQHGOV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Conceitos Básicos Sobre Pods em Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conceitos Básicos Sobre Pods em Kubernetes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "K7VRVJEA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K7VRVJEA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Introdução ao Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Kubernetes",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "VKI5UFED",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VKI5UFED.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Introdução ao Kubernetes).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Introdução ao Kubernetes",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "XY1GJ1P8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XY1GJ1P8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Cluster Kubernetes em Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Cluster Kubernetes em Nuvem",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "WKHOLPKO",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WKHOLPKO.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Ambiente de Desenvolvimento Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Ambiente de Desenvolvimento Kubernetes",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "YN0R1ARD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YN0R1ARD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Introdução a Kubernetes e Orquestração de Contêineres.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Kubernetes e Orquestração de Contêineres",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "KQIZL1YM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/KQIZL1YM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Formação Docker Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação Docker Fundamentals",
    cargaHoraria: "15 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "LMUQAC6H",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LMUQAC6H.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Trabalhando com Cluster e Docker Swarm.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Cluster e Docker Swarm",
    cargaHoraria: "6 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "SOMMPX9Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SOMMPX9Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Avalie a Formação de Docker Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação de Docker Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "3LXIKNAH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3LXIKNAH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Cluster e Docker Swarm).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Cluster e Docker Swarm",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "HKHXDZES",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HKHXDZES.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Definição de um Cluster Swarm Local com o Vagrant.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Definição de um Cluster Swarm Local com o Vagrant",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "6G581EWZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6G581EWZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Load Balancer.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Load Balancer",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "4HL7OXBE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/4HL7OXBE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Criando um Cluster com o Docker Swarm.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Cluster com o Docker Swarm",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "LOBMCVO4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/LOBMCVO4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Docker File e Docker Compose.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Docker File e Docker Compose",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "NUNESZBS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/NUNESZBS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Docker File e Docker Compose).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Docker File e Docker Compose",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "XKDF6KVP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XKDF6KVP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Criando um Container de uma Aplicação WEB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Container de uma Aplicação WEB",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "POAGVOG8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/POAGVOG8.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Trabalhando com Docker Compose.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Docker Compose",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "HSIYVLKH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HSIYVLKH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Definição e Criação de um Docker File.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Definição e Criação de um Docker File",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "6RDNBPEJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/6RDNBPEJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Introdução ao Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Docker",
    cargaHoraria: "23 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "J6LQ9RRK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/J6LQ9RRK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Materiais Complementares (Introdução ao Docker).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Materiais Complementares: Introdução ao Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "8XOKVWUM",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8XOKVWUM.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Processamento Logs e Rede com Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Processamento Logs e Rede com Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "PG2U2KKJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PG2U2KKJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Armazenamento de Dados com Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenamento de Dados com Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "RWSJFAJZ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/RWSJFAJZ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Primeiros Passos com o Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Primeiros Passos com o Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "H3HEVZPB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/H3HEVZPB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Conhecendo e Instalando o Docker.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Conhecendo e Instalando o Docker",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "GABLHX19",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GABLHX19.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Formação AZ-204 Certification.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Formação AZ-204 Certification",
    cargaHoraria: "23 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "JBLKX2Y5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/JBLKX2Y5.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Simulado Preparatório o Exame AZ-204.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório o Exame AZ-204",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "SDL29MN1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SDL29MN1.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Avalie a Formação AZ-204 Certification.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Avalie a Formação AZ-204 Certification",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "DKYGPUVG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DKYGPUVG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Simulado Preparatório (Exame AZ-204).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório: Exame AZ-204",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "TMQPK5AD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/TMQPK5AD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Armazenamento e Banco de Dados no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenamento e Banco de Dados no Azure",
    cargaHoraria: "4 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
    codigo: "BUY8N0LP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BUY8N0LP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.13 · Digital Innovation One · Associando Conceitos de Armazenamento e Banco de Dados no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Associando Conceitos de Armazenamento e Banco de Dados no Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-04-13",
    dataConclusao: "13 de abril de 2026",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.12 · 4·Linux · Cloud Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",    

    instituicao: "4·Linux",
    curso: "Cloud Fundamentals",
    cargaHoraria: "20 h",
    conclusaoISO: "2026-04-12",
    dataConclusao: "12 de abril de 2026",
    codigo: "2618509009RR",
    mostrarCopiar: true,
    verificacao: {
      url: "http://aia.4linux.com.br/admin/tool/certificate/",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.02 · AWS Treina Brasil on TIDWIT · AWS Cloud Practitioner.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "AWS Treina Brasil on TIDWIT",
    curso: "AWS Cloud Practitioner",
    cargaHoraria: "12 h 17 min",
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
    id: 120,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.04.01 · AWS Treina Brasil on TIDWIT · Fundamentos de Nuvem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "AWS Treina Brasil on TIDWIT",
    curso: "Fundamentos de Nuvem",
    cargaHoraria: "3 h 11 min",
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
    id: 119,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.11 · FIAP - Centro Universitário · Cloud Fundamentals, Administration and Solution Architect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",    

    instituicao: "FIAP - Centro Universitário",
    curso: "Cloud Fundamentals, Administration and Solution Architect",
    cargaHoraria: "80 h",
    conclusaoISO: "2026-02-11",
    dataConclusao: "11 de fevereiro de 2026",
    codigo: "29405ffca11dc19fd267183f1a67eec9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=29405ffca11dc19fd267183f1a67eec9&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Microsoft Azure Cloud Native 2026.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Microsoft Azure Cloud Native 2026",
    cargaHoraria: "23 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "QBA6Z3RK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QBA6Z3RK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Construção de uma Aplicação Cloud-Native.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construção de uma Aplicação Cloud-Native",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "W55BYV2T",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/W55BYV2T.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Construção de uma Aplicação de Aluguel de Carros Totalmente Cloud-Native.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Construção de uma Aplicação de Aluguel de Carros Totalmente Cloud-Native",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "GHLYZGDL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GHLYZGDL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Inteligência Artificial no Desenvolvimento na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Inteligência Artificial no Desenvolvimento na Azure",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "F5HQLJOW",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/F5HQLJOW.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Instalação e Configuração do GitHub Copilot com o VS Code.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Instalação e Configuração do GitHub Copilot com o VS Code",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "GBGVUAVV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/GBGVUAVV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Inteligência Artificial no Desenvolvimento com GitHub Copilot.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Inteligência Artificial no Desenvolvimento com GitHub Copilot",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "S0NHUDYT",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/S0NHUDYT.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Computação Serverless e Automação na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Computação Serverless e Automação na Azure",
    cargaHoraria: "2 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "CAEYWV6G",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CAEYWV6G.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Criando um Serviço Autenticador de Boletos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Serviço Autenticador de Boletos",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "CN095LDA",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CN095LDA.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Computação Serverless com Azure Functions.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Computação Serverless com Azure Functions",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "UOH9UJWE",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UOH9UJWE.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Gerenciamento e Segurança de APIs na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento e Segurança de APIs na Azure",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "WZMOMPZD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WZMOMPZD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Guardando os Portões da sua API.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Guardando os Portões da sua API",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
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
    id: 107,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · API de Pagamentos Segura com Azure API Management.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "API de Pagamentos Segura com Azure API Management",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "YF7DAD8S",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/YF7DAD8S.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Gerenciamento de APIs com Azure API Management.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Gerenciamento de APIs com Azure API Management",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "M07NMGHK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/M07NMGHK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Desenvolvimento e Hospedagem de Aplicações Web com o Azure ML.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento e Hospedagem de Aplicações Web com o Azure ML",
    cargaHoraria: "3 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "UKBL2QUN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/UKBL2QUN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Publicando e Escalando Apps com Estilo.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Publicando e Escalando Apps com Estilo",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
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
    id: 103,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Criando um Blog com Container Apps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Blog com Container Apps",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "MIPOEZKS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/MIPOEZKS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Aplicações Contêinerizadas com Azure Container Apps.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações Contêinerizadas com Azure Container Apps",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "K6YBV3SG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K6YBV3SG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Contêiners e Orquestração na Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Contêiners e Orquestração na Azure",
    cargaHoraria: "5 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "3VKFRG2Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/3VKFRG2Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Desbravando Contêineres com AKS e App Service.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desbravando Contêineres com AKS e App Service",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
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
    id: 99,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Aplicações Web com Azure App Service.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Aplicações Web com Azure App Service",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "IAZEOWXS",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IAZEOWXS.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Trabalhando com Azure Kubernetes Service (AKS e K8S).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com Azure Kubernetes Service (AKS e K8S)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "I0DDJ7AY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/I0DDJ7AY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Orquestração de Contêineres com Azure Kubernetes Service (AKS).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Orquestração de Contêineres com Azure Kubernetes Service (AKS)",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "SPKUBA5Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SPKUBA5Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Fundamentos da Plataforma Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos da Plataforma Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "THIMV2JU",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/THIMV2JU.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Armazenando Dados de um e-Commerce na Cloud.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenando Dados de um e-Commerce na Cloud",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "K77TEPL0",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/K77TEPL0.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Fundamentos da Plataforma de Aplicações no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Fundamentos da Plataforma de Aplicações no Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "DJN37VNX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DJN37VNX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2026.02.07 · Digital Innovation One · Introdução a Experiência Microsoft Azure Cloud Native 2026.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução a Experiência Microsoft Azure Cloud Native 2026",
    cargaHoraria: "1 h",
    conclusaoISO: "2026-02-07",
    dataConclusao: "07 de fevereiro de 2025",
    codigo: "DYD5Z2YK",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DYD5Z2YK.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Microsoft Certification Challenge 4 - AZ 204.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Microsoft Certification Challenge #4 - AZ 204",
    cargaHoraria: "22 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "PT1GRSPB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/PT1GRSPB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Simulado Preparatório para o Exame AZ 204.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório para o Exame AZ-204",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "QLQZPX9K",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QLQZPX9K.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Simulado Preparatório para o Exame AZ-204.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Simulado Preparatório para o Exame AZ-204",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "XQDEAIJH",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/XQDEAIJH.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Monitoramento e Cache no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Monitoramento e Cache no Azure",
    cargaHoraria: "5 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "CPLRBQJY",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/CPLRBQJY.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Criando um Gerenciador de Catálogos da Netflix com Azure Functions e Banco de Dados.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Gerenciador de Catálogos da Netflix com Azure Functions e Banco de Dados",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "8YN3WO2V",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8YN3WO2V.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Implementando Cache para Soluções.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando Cache para Soluções",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "IA7EBJZJ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/IA7EBJZJ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.30 · Digital Innovation One · Solucionando Problemas usando o Application Insights.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Solucionando Problemas usando o Application Insights",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-30",
    dataConclusao: "30 de outubro de 2025",
    codigo: "ZWL8NHZ1",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZWL8NHZ1.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.29 · Digital Innovation One · Soluções Baseadas em Eventos e Mensagens.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Soluções Baseadas em Eventos e Mensagens",
    cargaHoraria: "4 h",
    conclusaoISO: "2025-10-29",
    dataConclusao: "29 de outubro de 2025",
    codigo: "AEFS1C0U",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AEFS1C0U.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.29 · Digital Innovation One · Como Fazer o Deploy de uma API na Nuvem na Prática.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Como Fazer o Deploy de uma API na Nuvem na Prática",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-29",
    dataConclusao: "29 de outubro de 2025",
    codigo: "9G0NWNA4",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/9G0NWNA4.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.27 · Digital Innovation One · Desenvolvendo Soluções Baseadas em Mensagem.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvendo Soluções Baseadas em Mensagem",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "0A0EBKAG",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/0A0EBKAG.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.27 · Digital Innovation One · Desenvolvendo Soluções Baseadas em Eventos.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvendo Soluções Baseadas em Eventos",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "VKF2DICI",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/VKF2DICI.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.27 · Digital Innovation One · Segurança e Gerenciamento de API.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Segurança e Gerenciamento de API",
    cargaHoraria: "5 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "WL4AHLSP",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WL4AHLSP.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.27 · Digital Innovation One · Criando um Microsserviço Serverless para Validação de CPF.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Criando um Microsserviço Serverless para Validação de CPF",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-27",
    dataConclusao: "27 de outubro de 2025",
    codigo: "EDWQQZPD",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/EDWQQZPD.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.20 · Cursa · Criando uma Intranet com SharePoint.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Criando uma Intranet com SharePoint",
    cargaHoraria: "29 h",
    conclusaoISO: "2025-10-20",
    dataConclusao: "20 de outubro de 2025",
    codigo: "595d26fb36",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/595d26fb36",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Contêineres e Identidade no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Contêineres e Identidade no Azure",
    cargaHoraria: "3 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "AKASI6PX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/AKASI6PX.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Implementando a Plataforma de Identidade da Microsoft.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando a Plataforma de Identidade da Microsoft",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "8IG8BJDQ",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/8IG8BJDQ.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Implementando Aplicativos de Contêiner no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando Aplicativos de Contêiner no Azure",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "HBNH41NV",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/HBNH41NV.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Armazenamento e Banco de Dados no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Armazenamento e Banco de Dados no Azure",
    cargaHoraria: "5 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "BIHNKL9C",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/BIHNKL9C.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Trabalhando com o Azure Cosmos DB.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Trabalhando com o Azure Cosmos DB",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "DMN5U95D",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/DMN5U95D.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.15 · Digital Innovation One · Explorando o Armazenamento de Blobs do Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando o Armazenamento de Blobs do Azure",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-15",
    dataConclusao: "15 de outubro de 2025",
    codigo: "ZDLKCJJB",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZDLKCJJB.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.14 · Digital Innovation One · Desenvolvimento de Aplicativos Web e Funções no Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Desenvolvimento de Aplicativos Web e Funções no Azure",
    cargaHoraria: "8 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "WMUTLSVL",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/WMUTLSVL.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.14 · Digital Innovation One · Microsoft Certification Challenge 4 (Dicas para se Preparar para o Hackathon).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Microsoft Certification Challenge #4: Dicas para se Preparar para o Hackathon",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "N89PIRVC",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/N89PIRVC.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.14 · Digital Innovation One · Implementando o Azure Functions.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Implementando o Azure Functions",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "QBFGQ3JN",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/QBFGQ3JN.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.14 · Digital Innovation One · Explorando o Serviço de Aplicativo do Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Explorando o Serviço de Aplicativo do Azure",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "5ZWZIPG9",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/5ZWZIPG9.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.10.14 · Digital Innovation One · Introdução ao Certification Challenge 4 com a Microsoft.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Certification Challenge #4 com a Microsoft",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-10-14",
    dataConclusao: "14 de outubro de 2025",
    codigo: "SOI8CH5Y",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/SOI8CH5Y.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.09.04 · Databricks Academy · Large Language Models (Application through Production).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Large Language Models: Application through Production",
    cargaHoraria: "12 h",
    conclusaoISO: "2025-09-04",
    dataConclusao: "04 de setembro de 2025",
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
    id: 66,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.08.05 · Databricks Academy · Genie Rooms Setup and Best Practice.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Genie Rooms Setup and Best Practice",
    cargaHoraria: "1 h 30 min",
    conclusaoISO: "2025-08-05",
    dataConclusao: "05 de agosto de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.13 · Databricks Academy · Create Your First Workspace Using Databricks Express.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Create Your First Workspace Using Databricks Express",
    cargaHoraria: "1 h 30 min",
    conclusaoISO: "2025-07-13",
    dataConclusao: "13 de julho de 2025",
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
    id: 64,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.13 · Databricks Academy · SQL Programming and Procedural Logic.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "SQL Programming and Procedural Logic",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-13",
    dataConclusao: "13 de julho de 2025",
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
    id: 63,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.13 · Databricks Academy · Data Warehousing with Databricks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Data Warehousing with Databricks",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-13",
    dataConclusao: "13 de julho de 2025",
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
    id: 62,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.07 · Databricks Academy · Automated Deployment with Databricks Asset Bundles.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Automated Deployment with Databricks Asset Bundles",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-07",
    dataConclusao: "07 de julho de 2025",
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
    id: 61,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.07 · Databricks Academy · Databricks Performance Optimization.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Performance Optimization",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-07",
    dataConclusao: "07 de julho de 2025",
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
    id: 60,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.07 · Databricks Academy · Databricks Data Privacy.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Data Privacy",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-07",
    dataConclusao: "07 de julho de 2025",
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
    id: 59,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.07 · Databricks Academy · Databricks Streaming and Delta Live Tables.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Streaming and Delta Live Tables",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-07",
    dataConclusao: "07 de julho de 2025",
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
    id: 58,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.06 · Databricks Academy · DevOps Essentials for Data Engineering.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "DevOps Essentials for Data Engineering",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-06",
    dataConclusao: "06 de julho de 2025",
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
    id: 57,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.06 · Databricks Academy · Data Management and Governance with Unity Catalog.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Data Management and Governance with Unity Catalog",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-06",
    dataConclusao: "06 de julho de 2025",
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
    id: 56,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.06 · Databricks Academy · Build Data Pipelines with LakeFlow Declarative Pipelines.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Build Data Pipelines with LakeFlow Declarative Pipelines",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-06",
    dataConclusao: "06 de julho de 2025",
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
    id: 55,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.06 · Databricks Academy · Deploy Workloads with Lakeflow Jobs.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Deploy Workloads with Lakeflow Jobs",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-06",
    dataConclusao: "06 de julho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.04 · Databricks Academy · Data Ingestion with Lakeflow Connect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Data Ingestion with Lakeflow Connect",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-04",
    dataConclusao: "04 de julho de 2025",
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
    id: 53,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.04 · Databricks Academy · Delta x Iceberg (Interoperability with Unity Catalog).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Delta x Iceberg: Interoperability with Unity Catalog",
    cargaHoraria: "1 h 30 min",
    conclusaoISO: "2025-07-04",
    dataConclusao: "04 de julho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.03 · Databricks Academy · Data Modeling Strategies.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Data Modeling Strategies",
    cargaHoraria: "2 h",
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
    id: 51,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.01 · Databricks Academy · SQL Analytics on Databricks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "SQL Analytics on Databricks",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-01",
    dataConclusao: "01 de julho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.07.01 · Databricks Academy · Artificial Intelligence · Business Intelligence for Data Analysts.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Artificial Intelligence / Business Intelligence for Data Analysts",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-07-01",
    dataConclusao: "01 de julho de 2025",
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
    id: 49,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Databricks Accredited Azure Platform Architect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Azure Platform Architect",
    cargaHoraria: "4 h 10 min",
    conclusaoISO: "2025-07-01 (Issue: July 1, 2025 / Expiration: July 1, 2027)",
    dataConclusao: "01 de julho de 2025",
    codigo: "e9b19a1a-c9bc-4299-bac8-e8c63ecfa6b8#acc.Zox1Ip6g",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/e9b19a1a-c9bc-4299-bac8-e8c63ecfa6b8#acc.Zox1Ip6g",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Azure Databricks Platform Architect Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Azure Databricks Platform Architect Accreditation",
    cargaHoraria: "20 min",
    conclusaoISO: "2025-06-30",
    dataConclusao: "30 de junho de 2025",
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
    id: 47,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Azure Databricks Cloud Integrations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Azure Databricks Cloud Integrations",
    cargaHoraria: "40 min",
    conclusaoISO: "2025-06-30",
    dataConclusao: "30 de junho de 2025",
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
    id: 46,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Azure Databricks Networking and Security Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Azure Databricks Networking and Security Fundamentals",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-30",
    dataConclusao: "30 de junho de 2025",
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
    id: 45,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Azure Databricks Workspace Administration Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Azure Databricks Workspace Administration Fundamentals",
    cargaHoraria: "1 h 10 min",
    conclusaoISO: "2025-06-30",
    dataConclusao: "30 de junho de 2025",
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
    id: 44,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Databricks Accredited Amazon Web Services Platform Architect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Amazon Web Services Platform Architect",
    cargaHoraria: "3 h 20 min (Issue: June 29, 2025 / Expiration: June 29, 2027)",
    conclusaoISO: "2025-06-29",
    dataConclusao: "29 de junho de 2025",
    codigo: "84a4d7a4-f3bd-4671-b524-9999d80703e3#acc.H4zfQY7o",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/84a4d7a4-f3bd-4671-b524-9999d80703e3#acc.H4zfQY7o",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Amazon Web Services Databricks Platform Architect Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Amazon Web Services Databricks Platform Architect Accreditation",
    cargaHoraria: "20 min",
    conclusaoISO: "2025-06-29",
    dataConclusao: "29 de junho de 2025",
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
    id: 42,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Amazon Web Services Databricks Cloud Integrations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Amazon Web Services Databricks Cloud Integrations",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-29",
    dataConclusao: "29 de junho de 2025",
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
    id: 41,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Amazon Web Services Databricks Networking and Security Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Amazon Web Services Databricks Networking and Security Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-29",
    dataConclusao: "29 de junho de 2025",
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
    id: 40,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Amazon Web Services Databricks Platform Administration Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Amazon Web Services Databricks Platform Administration Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-29",
    dataConclusao: "29 de junho de 2025",
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
    id: 39,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.21 · Databricks Academy · Databricks Accredited Google Cloud Platform Databricks Platform Architect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Google Cloud Platform Databricks Platform Architect",
    cargaHoraria: "3 h 20 min (Issue: June 21, 2025 / Expiration: June 21, 2027)",
    conclusaoISO: "2025-06-21",
    dataConclusao: "21 de junho de 2025",
    codigo: "40006ffa-eb9f-4310-967c-2638c0f90ac1#acc.Czf2X0tp",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/40006ffa-eb9f-4310-967c-2638c0f90ac1#acc.Czf2X0tp",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.20 · Databricks Academy · Google Cloud Platform Databricks Platform Architect Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Google Cloud Platform Databricks Platform Architect Accreditation",
    cargaHoraria: "20 min",
    conclusaoISO: "2025-06-20",
    dataConclusao: "20 de junho de 2025",
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
    id: 37,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.20 · Databricks Academy · Google Cloud Platform Databricks Cloud Integrations.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Google Cloud Platform Databricks Cloud Integrations",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-20",
    dataConclusao: "20 de junho de 2025",
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
    id: 36,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.20 · Databricks Academy · Google Cloud Platform Databricks Networking and Security Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Google Cloud Platform Databricks Networking and Security Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-20",
    dataConclusao: "20 de junho de 2025",
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
    id: 35,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.20 · Databricks Academy · Google Cloud Platform Databricks Platform Administration Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Google Cloud Platform Databricks Platform Administration Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-20",
    dataConclusao: "20 de junho de 2025",
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
    id: 34,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Databricks Accredited Generative Artificial Intelligence Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Generative Artificial Intelligence Fundamentals",
    cargaHoraria: "10 h 10 min (Issue: June 19, 2025 / Expiration: June 19, 2027)",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
    codigo: "8860b920-cc9e-44ef-b74f-d8dade5f4097#acc.wtGEnHhX",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/8860b920-cc9e-44ef-b74f-d8dade5f4097#acc.wtGEnHhX",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Application Deployment and Monitoring.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Application Deployment and Monitoring",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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
    id: 32,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Application Evaluation and Governance.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Application Evaluation and Governance",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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
    id: 31,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Application Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Application Development",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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
    id: 30,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Solution Development.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Solution Development",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Fundamentals Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Fundamentals Accreditation",
    cargaHoraria: "10 min",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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
    id: 28,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Generative Artificial Intelligence Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Generative Artificial Intelligence Fundamentals",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-19",
    dataConclusao: "19 de junho de 2025",
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
    id: 27,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Databricks Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Databricks Fundamentals",
    cargaHoraria: "1 h 30 min (Issue: June 11, 2025 / Expiration: June 11,2026)",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
    codigo: "64c80be0-4b36-4a4f-8d3d-3b10e5482c53#acc.QxLS6wM5",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/64c80be0-4b36-4a4f-8d3d-3b10e5482c53#acc.QxLS6wM5",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Fundamentals Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Fundamentals Accreditation",
    cargaHoraria: "30 min",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 25,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Fundamentals",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 24,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Platform Administrator.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Platform Administrator",
    cargaHoraria: "8 h 36 min (Issue: June 11, 2025 / Expiration: June 11, 2026)",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
    codigo: "3906926c-3c2a-4a78-9d83-7e84ed580cea#acc.6qvTaop8",
    mostrarCopiar: false,
    verificacao: {
      url: "https://credentials.databricks.com/3906926c-3c2a-4a78-9d83-7e84ed580cea#acc.6qvTaop8",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Platform Administrator Accreditation.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Accredited Platform Administrator Accreditation",
    cargaHoraria: "20 min",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 22,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · CI·CD Administration in Databricks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "CI/CD Administration in Databricks",
    cargaHoraria: "1 h 39 min",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 21,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Compute Resource Administration.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Compute Resource Administration",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 20,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Workspace Administration and Security.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Workspace Administration and Security",
    cargaHoraria: "1 h 14 min",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 19,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Identity Administration.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Identity Administration",
    cargaHoraria: "1 h",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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
    id: 18,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Platform Administration Fundamentals.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Databricks Platform Administration Fundamentals",
    cargaHoraria: "1 h 23 min",
    conclusaoISO: "2025-06-11",
    dataConclusao: "11 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.09 · Databricks Academy · Get Started with Databricks for Data Engineering.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Databricks for Data Engineering",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-09",
    dataConclusao: "09 de junho de 2025",
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
    id: 16,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.08 · Databricks Academy · Get Started with Databricks for Data Warehousing.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Databricks for Data Warehousing",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-08",
    dataConclusao: "08 de junho de 2025",
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
    id: 15,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.07 · Databricks Academy · Get Started with Databricks for Generative Artificial Intelligence.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Databricks for Generative Artificial Intelligence",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-07",
    dataConclusao: "07 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.06 · Databricks Academy · Get Started with Databricks for Machine Learning.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Databricks for Machine Learning",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-06",
    dataConclusao: "06 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.05 · Databricks Academy · Get Started with Databricks Platform Administration.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Databricks Platform Administration",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-05",
    dataConclusao: "05 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.04 · Databricks Academy · Get Started with Lakehouse Architecture on Databricks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with Lakehouse Architecture on Databricks",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-04",
    dataConclusao: "04 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.03 · Databricks Academy · Get Started with SQL Analytics and BI on Databricks.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Get Started with SQL Analytics and BI on Databricks",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-03",
    dataConclusao: "02 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.02 · Databricks Academy · Knowledge Check (Get Started with Databricks for Data Engineering).png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Knowledge Check: Get Started with Databricks for Data Engineering",
    cargaHoraria: "10 min",
    conclusaoISO: "2025-06-02",
    dataConclusao: "02 de junho de 2025",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.02 · Databricks Academy · Automate Production Workflows.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Databricks Academy",
    curso: "Automate Production Workflows",
    cargaHoraria: "2 h",
    conclusaoISO: "2025-06-02",
    dataConclusao: "02 de junho de 2025",
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
    id: 8,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.03.04 · FIAP - Centro Universitário · Cloud Fundamentals, Administration and Solution Architect.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "FIAP - Centro Universitário",
    curso: "Cloud Fundamentals, Administration and Solution Architect",
    cargaHoraria: "80 h",
    conclusaoISO: "2025-03-04",
    dataConclusao: "04 de março de 2025",
    codigo: "1d943ad0b9100be399f0059df696ac84",
    mostrarCopiar: false,
    verificacao: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=1d943ad0b9100be399f0059df696ac84&action=view",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2025.02.06 · TFTEC Cloud Company · Microsoft Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "TFTEC Cloud Company",
    curso: "Microsoft Azure",
    cargaHoraria: "46 h",
    conclusaoISO: "2025-02-06",
    dataConclusao: "06 de fevereiro de 2025",
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
    id: 6,

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.12.09 · Digital Innovation One · Introdução ao Microsoft Azure Advanced.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Digital Innovation One",
    curso: "Introdução ao Microsoft Azure Advanced",
    cargaHoraria: "1 h",
    conclusaoISO: "2024-12-09",
    dataConclusao: "09 de dezembro de 2024",
    codigo: "ZMANG25S",
    mostrarCopiar: false,
    verificacao: {
      url: "https://hermes.dio.me/certificates/ZMANG25S.pdf",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.11.08 · Cursa · Google Cloud Platform.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Google Cloud Platform",
    cargaHoraria: "11 h",
    conclusaoISO: "2024-11-08",
    dataConclusao: "08 de novembro de 2024",
    codigo: "c0e4796e55",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/c0e4796e55",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.10.29 · Cursa · SharePoint para Iniciantes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "SharePoint para Iniciantes",
    cargaHoraria: "8 h",
    conclusaoISO: "2024-10-29",
    dataConclusao: "29 de outubro de 2024",
    codigo: "b101026adc",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/b101026adc",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.10.28 · Cursa · AWS do Zero ao Expert.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "AWS do Zero ao Expert",
    cargaHoraria: "11 h",
    conclusaoISO: "2024-10-28",
    dataConclusao: "28 de outubro de 2024",
    codigo: "2b8b611dd2",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/2b8b611dd2",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.10.26 · Cursa · Microsoft Azure.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "Cursa",
    curso: "Microsoft Azure",
    cargaHoraria: "14 h",
    conclusaoISO: "2024-10-26",
    dataConclusao: "26 de outubro de 2024",
    codigo: "441b6d0de7",
    mostrarCopiar: false,
    verificacao: {
      url: "https://cursa.com.br/certificate/441b6d0de7",
      texto: "Verificar Autenticidade"
    },

    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
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

    thumb: "/portfolio/formacoes-complementares/cloud-computing/certificados/2024.02.21 · D&K Cloud Architecture · Docker & Kubernetes.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "Código: ",
    nomeVerificacao: "Verificação: ",

    instituicao: "D&K Cloud Architecture",
    curso: "Docker & Kubernetes",
    cargaHoraria: "6 h",
    conclusaoISO: "2024-02-21",
    dataConclusao: "21 de fevereiro de 2024",
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
