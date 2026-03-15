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
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiMTdiMTFmMGQtZGZjNC00Mzk4LWI1MmQtMDQ1NzBlNTM3ZjlkIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
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
                A Altaris Logistics buscava maior visibilidade sobre sua operação de entregas, especialmente em relação ao desempenho logístico, atrasos nas entregas, custos operacionais e índices de devolução. A ausência de uma visão integrada dificultava a identificação de gargalos e a tomada de decisões estratégicas baseadas em dados.
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
                Foi desenvolvido um dashboard executivo em Power BI estruturado em múltiplas camadas de análise. A capa apresenta indicadores de performance logística com o percentual de entregas realizadas no prazo e entregas em atraso. A visão geral consolida métricas estratégicas como faturamento total, gasto com entregas e percentual de lucro operacional.
            </div>
  
          </div>
      </div>
  
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Estrutura Analítica do Dashboard</span>
          </div>
          <div class="exp-details">
  
            <div class="tech-desc">
                A análise temporal foi construída com um gráfico de área que apresenta a evolução mensal do total de entregas, entregas no prazo e entregas atrasadas. Para análise geográfica, foi implementado um mapa interativo exibindo a distribuição das entregas por estado. As devoluções foram analisadas através de um gráfico de rosca com os principais motivos: desistência do cliente, mercadoria incorreta e erro na nota fiscal.
                <br><br>
                No painel lateral direito, indicadores percentuais destacam o desempenho das entregas no prazo e com atraso. Complementando essa análise, gráficos de barras verticais detalham os tipos de transporte utilizados — refrigerado, resfriado e seco — permitindo avaliar o impacto logístico em cada categoria.
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
                Power BI foi utilizado para construção do dashboard e storytelling de dados. DAX foi aplicado para cálculo de métricas como percentual de lucro, percentual de entregas no prazo e análise de atrasos. A modelagem dimensional organizou tabelas de entregas, regiões, transportes e devoluções. Excel foi utilizado para preparação e estruturação inicial dos dados, enquanto Figma foi utilizado para planejamento visual e prototipação da interface do dashboard.
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
                A solução fornece uma visão estratégica e operacional da cadeia logística da Altaris Logistics, permitindo monitorar desempenho de entregas, custos operacionais e padrões de devolução. O dashboard fortalece a governança de dados da operação e possibilita decisões mais rápidas e assertivas para otimização da performance logística.
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
