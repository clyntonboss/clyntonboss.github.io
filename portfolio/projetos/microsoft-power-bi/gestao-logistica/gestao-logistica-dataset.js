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
  
    thumb: "/portfolio/projetos/logistica/transflow-logistics-dashboard.png",
  
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
  
    titulo: "Dashboard de Gestão Logística – TransFlow Logistics",
    periodo: "Mar/2026",
    duracao: "10 dias",
    stackTecnica: "Power BI | DAX | Modelagem Dimensional",
    projetoInterativo: `<a href="#" target="_blank" class="cert-link-verify cert-link-inf">Projeto Interativo</a>`,
    descricaoProjeto: `
      <div class="decorative-line-projetos"></div>
      
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Contexto do Problema</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                A operação logística demandava maior controle sobre pedidos, motoristas e produtos, especialmente em relação a atrasos e devoluções, impactando diretamente a eficiência operacional e a satisfação dos clientes.
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
                Foi desenvolvida uma solução em Power BI com modelagem dimensional estruturada e KPIs estratégicos: Quantidade de Produtos, Quantidade de Pedidos e Quantidade de Motoristas. A visualização foi organizada para facilitar a leitura executiva e a análise operacional.
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
              <span class="exp-role">Análises Implementadas</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                O painel apresenta gráfico de rosca com pedidos por status (Atrasado e No Prazo), barras horizontais com pedidos por cliente e entregas atrasadas por motorista, barras verticais com percentual de devoluções por categoria (Arrependimento, Danificado, Produto Errado e Sem Devolução) e um Treemap relacionando a quantidade de produtos ao percentual de devoluções.
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
