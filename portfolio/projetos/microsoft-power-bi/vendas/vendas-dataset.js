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
  
    thumb: "/portfolio/projetos/microsoft-power-bi/faturamento/projetos/faturamento-veloura-beauty.png",
  
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
    periodo: "Abr 2022",
    duracao: "20 dias",
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional | Data Storytelling | Business Intelligence |",

    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiZGY5NTE1MTUtNWI2MS00YTFkLWEzOWItN2JmMWRmN2U2ODc4IiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-faturamento-veloura-beauty.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A operação comercial da Veloura Beauty enfrentava desafios na análise integrada de desempenho de vendas, dificultando a compreensão da eficiência de produtos, performance de vendedores e variações regionais, impactando decisões estratégicas e alocação de esforços comerciais.
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
                Foi desenvolvida uma solução em Power BI com modelagem dimensional estruturada e KPIs estratégicos: Faturamento, Transações, Produtos Vendidos e Ticket Médio. A análise foi organizada em múltiplas perspectivas — visão geral, produto, vendedor e localidade — permitindo leitura executiva e aprofundamento analítico.
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
                O dashboard possibilitou identificar produtos de alta performance, vendedores com maior eficiência comercial e regiões com potencial de crescimento, além de evidenciar diferenças entre canais de venda e padrões de comportamento, promovendo decisões mais assertivas, rápidas e orientadas por dados.
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
                Power BI foi utilizado para visualização e storytelling dos dados. DAX para construção de métricas como variações entre canais, classificação de desempenho (matriz BCG) e indicadores de eficiência. Modelagem dimensional para organização das tabelas de vendas, produtos, vendedores e localidades.
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
                A solução conecta análise de desempenho comercial à tomada de decisão estratégica, proporcionando visão integrada do negócio, identificação de oportunidades relevantes, maior transparência operacional e suporte à otimização contínua de produtos, canais de venda e equipes comerciais.
            </div>
        
          </div>
      </div>
    `
  },
  
  {
    id: 1,
  
    thumb: "/portfolio/projetos/microsoft-power-bi/vendas/projetos/vendas-zentronix-electronics.png",
  
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
    periodo: "Mar 2022",
    duracao: "8 dias",
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional | Data Storytelling | Business Intelligence |",
  
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNGZjYThkMDQtNjY5ZS00ODY5LWE0NzktMmRiNTI2YzczODg1IiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-vendas-zentronix-electronics.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A operação comercial da Zentronix Electronics enfrentava dificuldades para consolidar indicadores de desempenho de vendas de forma clara e acessível, dificultando a análise comparativa entre gerentes, regiões e períodos, além de limitar a identificação de padrões de comportamento nas vendas.
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
                Foi desenvolvida uma solução em Power BI com foco em análise de performance comercial, estruturando KPIs como Faturamento, Transações e Ticket Médio. A navegação foi planejada para permitir análise por gerente, com filtros intuitivos, visualizações temporais e geográficas, além de uma experiência interativa com alternância de temas e acesso rápido à visão geral.
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
                O dashboard permite identificar rapidamente variações no desempenho de vendas, destacar períodos de maior e menor volume, analisar a distribuição geográfica das vendas e comparar a performance entre lojas e gestores, apoiando decisões comerciais mais rápidas e orientadas por dados.
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
                Power BI foi utilizado para construção das visualizações e navegação interativa. DAX aplicado na criação de métricas como Ticket Médio e análises temporais com destaque automático para extremos. Modelagem de dados estruturada para suportar análise por gerente, loja, período e localização geográfica.
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
                A solução conecta indicadores comerciais à análise estratégica, proporcionando uma visão integrada da operação de vendas. Permite acompanhar a performance de gestores, identificar tendências ao longo do tempo e variações regionais, aumentando a transparência dos resultados e fortalecendo a tomada de decisão orientada por dados.
            </div>
        
          </div>
      </div>
    `
  }
];
