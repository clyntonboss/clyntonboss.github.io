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
    id: 2,

    thumb: "/portfolio/formacoes-complementares/analise-de-dados/certificados/2026.02.10 · FIAP - Centro Universitário · Business Intelligence.png",

    nomeInstituicao: "",
    nomeCurso: "",
    nomeCargaHoraria: "",
    nomeDataConclusao: "",
    nomeCodigo: "",
    nomeVerificacao: "",
    
    instituicao: "",
    curso: "",
    cargaHoraria: "",
    conclusaoISO: "",
    dataConclusao: "",
    codigo: "",
    mostrarCopiar: false,
    verificacao: "",

    nomeTitulo: "Título: ",
    nomePeriodo: "Período: ",
    nomeDuracao: "Duração: ",
    nomeStackTecnica: "Stack Técnica: ",

    titulo: "Performance de Vendas",
    periodo: "Fev/2024",
    duracao: "8 dias",
    stackTecnica: "Python™ | SQL | Power BI",
    projetoInterativo: `<p>|<a href="https://ufpraberta.ufpr.br/mod/simplecertificate/verify.php" target="_blank" class="cert-link-verify cert-link-inf">  Projeto Interativo  </a>|</p>`,
    descricaoProjeto: `
      <div class="decorative-line-projetos"></div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Contexto do Problema</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A organização enfrentava dificuldades em consolidar indicadores operacionais dispersos em múltiplas fontes, comprometendo a tomada de decisão gerencial.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Abordagem Estratégica</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                Foi adotada uma abordagem baseada em modelagem dimensional, integração de dados e definição de KPIs alinhados aos objetivos do negócio.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Impactos e Resultados</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                O projeto resultou em maior clareza operacional, redução de retrabalho analítico e aumento da eficiência no acompanhamento dos indicadores estratégicos.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Tecnologias Envolvidas</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                Power BI foi utilizado para visualização e storytelling, SQL para tratamento e consolidação dos dados, e Python™ para automatização de etapas de preparação.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Conexão com Indústria | Dados | Pessoas</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A solução conectou dados operacionais do processo industrial à análise estratégica, promovendo decisões mais ágeis e ampliando a autonomia dos gestores.
            </div>
        
          </div>
      </div>
    `
  },
  
  {
    id: 1,

    thumb: "/portfolio/formacoes-complementares/analise-de-dados/certificados/2026.02.10 · FIAP - Centro Universitário · Business Intelligence.png",

    nomeInstituicao: "Instituição: ",
    nomeCurso: "Curso: ",
    nomeCargaHoraria: "Carga Horária: ",
    nomeDataConclusao: "Data de Conclusão: ",
    nomeCodigo: "",
    nomeVerificacao: "",
    
    instituicao: "Tetra Educação",
    curso: "Imersão Excel Automate",
    cargaHoraria: "8 h",
    conclusaoISO: "",
    dataConclusao: "05 de março de 2026",
    codigo: "",
    mostrarCopiar: false,
    verificacao: "",


    nomeTitulo: "",
    nomePeriodo: "",
    nomeDuracao: "",
    nomeStackTecnica: "",

    titulo: "",
    periodo: "",
    duracao: "",
    stackTecnica: "",
    projetoInterativo: `<a href="https://ufpraberta.ufpr.br/mod/simplecertificate/verify.php" target="_blank" class="cert-link-verify cert-link-inf">Projeto Interativo</a>`,
    descricaoProjeto: `
      <div class="decorative-line-projetos"></div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Contexto do Problema</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A organização enfrentava dificuldades em consolidar indicadores operacionais dispersos em múltiplas fontes, comprometendo a tomada de decisão gerencial.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Abordagem Estratégica</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                Foi adotada uma abordagem baseada em modelagem dimensional, integração de dados e definição de KPIs alinhados aos objetivos do negócio.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Impactos e Resultados</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                O projeto resultou em maior clareza operacional, redução de retrabalho analítico e aumento da eficiência no acompanhamento dos indicadores estratégicos.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Tecnologias Envolvidas</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                Power BI foi utilizado para visualização e storytelling, SQL para tratamento e consolidação dos dados, e Python™ para automatização de etapas de preparação.
            </div>
        
          </div>
      </div>

      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Conexão com Indústria | Dados | Pessoas</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A solução conectou dados operacionais do processo industrial à análise estratégica, promovendo decisões mais ágeis e ampliando a autonomia dos gestores.
            </div>
        
          </div>
      </div>
    `
  }
];
