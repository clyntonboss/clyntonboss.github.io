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
  
    thumb: "/portfolio/projetos/microsoft-power-bi/faturamento/projetos/Performance de Vendas - Zentronix Electronics.png",
  
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
    stackTecnica: "Power BI | DAX | Modelagem Dimensional | Data Storytelling | Business Intelligence",
  
    projetoInterativo: `<a href="https://app.powerbi.com/view?r=eyJrIjoiMWI3YTFhYzgtYTIwOS00ZDY5LWI0M2YtNGRiNzBhOGFlZGNjIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf">Projeto Interativo</a>`,
  
    descricaoProjeto: `
      <div class="decorative-line-projetos"></div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Contexto do Problema</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A Zentronix Electronics buscava compreender o desempenho comercial de suas lojas e gerentes regionais ao longo do tempo. Apesar da disponibilidade de dados de vendas, faltava uma visualização consolidada que permitisse acompanhar faturamento, volume de pedidos e comportamento de consumo por região, dificultando análises comparativas e a identificação de oportunidades de crescimento.
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
                Foi desenvolvido um dashboard analítico no Power BI com modelagem dimensional estruturada para consolidar indicadores estratégicos de vendas. A solução permite selecionar gerentes responsáveis pelas operações e analisar KPIs como Faturamento Total, Quantidade de Pedidos e Ticket Médio. A análise temporal de 12 meses apresenta a evolução do faturamento e do volume de produtos vendidos, permitindo identificar sazonalidades e padrões de crescimento.
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
                O painel possibilita avaliar o desempenho comercial por gerente e por loja, identificar regiões com maior e menor faturamento e acompanhar a evolução das vendas ao longo do ano. A visualização geográfica do Brasil destaca variações regionais de faturamento, enquanto a tabela analítica apresenta detalhamento por loja com participação percentual e indicadores visuais de desempenho.
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
                Power BI foi utilizado para construção do dashboard e criação da narrativa analítica executiva. DAX foi aplicado no desenvolvimento de medidas como Faturamento, Pedidos, Ticket Médio e métricas de participação percentual. A modelagem dimensional organizou dados de vendas, lojas, gerentes e produtos, garantindo escalabilidade e desempenho nas análises.
            </div>
        
          </div>
      </div>
    
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Conexão com Estratégia Comercial</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A solução fortalece a tomada de decisão orientada por dados ao fornecer uma visão clara do desempenho comercial por região, gerente e loja. Com isso, a Zentronix Electronics passa a ter maior capacidade de identificar oportunidades de expansão, otimizar estratégias de vendas e acompanhar indicadores críticos de performance de forma contínua.
            </div>
        
          </div>
      </div>
    `
  }
];
