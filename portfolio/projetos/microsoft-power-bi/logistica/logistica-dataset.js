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
  
    thumb: "/portfolio/projetos/microsoft-power-bi/logistica/projetos/logistica-altaris-logistics.png",
  
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
  
    titulo: "Performance Logística",
    periodo: "Mai 2022",
    duracao: "20 dias",
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional | Excel | Figma |",
  
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiM2JmZDM2NzktYTJiMy00NWI3LWE4YjQtODAyNjhlNmFkZDVlIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-logistica-altaris-logistics.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A operação logística da Altaris Logistics enfrentava desafios na consolidação e análise de dados relacionados às entregas, faturamento e desempenho operacional, dificultando a identificação de padrões de atraso, eficiência nas entregas e causas de devoluções, impactando diretamente a qualidade do serviço e a tomada de decisão estratégica.
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
                Foi desenvolvida uma solução em Power BI estruturada para integrar indicadores logísticos e operacionais, com navegação intuitiva entre visão executiva e análises detalhadas. A modelagem permitiu explorar a performance das entregas ao longo do tempo, distribuição geográfica, controle de devoluções e análise de SLA, possibilitando uma visão consolidada e analítica da operação.
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
                O dashboard possibilita identificar rapidamente o desempenho das entregas, avaliar o nível de cumprimento de prazos e compreender as principais causas de devoluções. A análise integrada entre indicadores operacionais e financeiros promove decisões mais assertivas voltadas à eficiência logística, redução de atrasos e melhoria contínua do serviço.
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
                Power BI foi utilizado para construção das visualizações e navegação entre páginas analíticas. DAX aplicado na criação de medidas para análise de entregas, indicadores de SLA e cálculos de faturamento e devoluções. Modelagem dimensional estruturando dados de pedidos, clientes, estados e operações logísticas, garantindo performance e escalabilidade analítica.
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
                A solução conecta indicadores operacionais à estratégia logística, transformando dados de entregas, prazos e devoluções em insights acionáveis. Isso fortalece a gestão da operação, amplia a visibilidade sobre a performance logística e orienta decisões baseadas em dados para aumento da eficiência e qualidade do serviço.
            </div>
        
          </div>
      </div>
    `
  },
  
  {
    id: 1,
  
    thumb: "/portfolio/projetos/microsoft-power-bi/logistica/projetos/logistica-transflow-logistics.png",
  
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
  
    titulo: "Controle de Entregas e Devoluções",
    periodo: "Jan 2022",
    duracao: "16 dias",
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional |",
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNzhhNmQ0NmQtZGYyZC00NzVkLThmN2QtZjQxMDAwOTJmNTc1IiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-logistica-transflow-logistics.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A operação logística da TransFlow Logistics enfrentava desafios no monitoramento de pedidos, performance de motoristas e gestão de devoluções, impactando diretamente a eficiência operacional e a experiência do cliente.
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
                Foi desenvolvida uma solução em Power BI com modelagem dimensional estruturada e KPIs estratégicos: Pedidos Realizados, Produtos Transportados e Motoristas Ativos. A visualização foi organizada para facilitar a leitura executiva e a análise operacional.
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
                O dashboard permitiu identificar rapidamente gargalos logísticos, motoristas com maior índice de atraso, padrões de devolução e clientes com maior volume de pedidos, promovendo decisões mais rápidas e assertivas.
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
                Power BI foi utilizado para visualização e storytelling dos dados. DAX para construção de medidas como percentuais de devolução e análise de atrasos. Modelagem dimensional para organização eficiente das tabelas de pedidos, motoristas, clientes e produtos.
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
                A solução integra indicadores operacionais à visão estratégica, fortalecendo a governança logística, aumentando a transparência da operação e promovendo melhoria contínua baseada em dados.
            </div>
        
          </div>
      </div>
    `
  }
];
