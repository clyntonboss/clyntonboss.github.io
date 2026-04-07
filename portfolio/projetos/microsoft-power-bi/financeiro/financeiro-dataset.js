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
    id: 1,
  
    thumb: "/portfolio/projetos/microsoft-power-bi/financeiro/projetos/financeiro-aureon-finance.png",
  
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
  
    titulo: "Centro de Controle Financeiro",
    periodo: "Jun 2022",
    duracao: "15 dias",
    stackTecnica: "| Power BI | DAX | Linguagem M | Modelagem Dimensional | Financial Analytics |",
  
    projetoInterativo: `<p>
                       |
                       <a href="https://app.powerbi.com/view?r=eyJrIjoiNDFjMzBkNzAtMmY3Zi00ZTdlLTkyMDktZmY3NzQ5Mzc5Y2NiIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                       |
                       <a href="https://github.com/clyntonboss/power-bi-financeiro-aureon-finance.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
                       |
                       </p>`,
  
    descricaoProjeto: `
      <div class="decorative-line-projetos"></div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Contexto do Problema</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A gestão financeira da Aureon Finance enfrentava desafios na consolidação e análise integrada de receitas, despesas, investimentos e empréstimos, dificultando a obtenção de uma visão clara sobre a saúde financeira. A ausência de indicadores estruturados e análises temporais limitava a identificação de tendências, o controle orçamentário e o acompanhamento do desempenho em relação às metas estabelecidas.
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
                Foi desenvolvida uma solução em Power BI estruturada para integrar indicadores financeiros e análises comparativas, com navegação intuitiva entre visão geral e detalhamentos operacionais. A modelagem permitiu acompanhar a evolução de receitas e despesas ao longo do tempo, analisar a representatividade dos custos e identificar os principais grupos de despesas, além de monitorar o desempenho frente às metas financeiras.
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
                O dashboard possibilita identificar rapidamente desequilíbrios entre receitas e despesas, avaliar a concentração de custos e acompanhar o desempenho financeiro ao longo do tempo. A análise detalhada das transações e categorias de despesas promove maior controle orçamentário e decisões mais assertivas voltadas à otimização de recursos e aumento da eficiência financeira.
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
                Power BI foi utilizado para construção das visualizações e navegação entre análises financeiras. DAX aplicado na criação de medidas para indicadores de desempenho, comparativos temporais e cálculo de metas. Modelagem dimensional estruturando dados de receitas, despesas, investimentos e transações, garantindo consistência, performance e escalabilidade analítica.
            </div>
        
          </div>
      </div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Conexão com Dados | Operação | Decisão</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A solução conecta dados financeiros à estratégia organizacional, transformando informações operacionais em insights acionáveis. Isso fortalece o controle financeiro, amplia a visibilidade sobre o desempenho econômico e orienta decisões baseadas em dados para planejamento, crescimento sustentável e melhoria contínua dos resultados.
            </div>
        
          </div>
      </div>
    `
  }
];
