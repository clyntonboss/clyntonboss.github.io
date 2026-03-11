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
    id: 3,
  
    thumb: "/portfolio/projetos/microsoft-power-bi/faturamento/projetos/faturamento-bytewave.png",
  
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
  
    titulo: "Análise de Vendas",
    periodo: "Jul 2022",
    duracao: "22 dias",
    stackTecnica: "Power BI | DAX | Linguagem M | Modelagem Dimensional | Data Storytelling | Business Intelligence",
  
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNWI2NzFiYWQtNGZlMy00ZDVkLTgwOTgtODM1NDA1NzJlZjFmIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-faturamento-bytewave.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A ByteWave buscava compreender com maior clareza o desempenho de suas vendas em diferentes canais de comercialização. Apesar da existência de dados transacionais, faltava uma visão analítica consolidada que permitisse acompanhar faturamento, volume de produtos vendidos e desempenho dos vendedores, dificultando a identificação de tendências de mercado e oportunidades de crescimento.
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
                Foi desenvolvido um dashboard analítico em Power BI estruturado com modelagem dimensional para consolidar indicadores estratégicos de vendas. A solução permite acompanhar métricas como Faturamento Total, Quantidade de Produtos Vendidos, Quantidade de Transações e Ticket Médio, proporcionando uma visão integrada do desempenho comercial da empresa.
            </div>
        
          </div>
      </div>
  
      <div class="experience experience--compact experience--inf">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Estrutura do Dashboard</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-desc">
                O projeto segue padrão visual em Dark Mode e possui uma capa com menu lateral esquerdo para navegação entre as páginas do dashboard. A partir da Home é possível acessar as seções Análise do Faturamento e Análise dos Produtos Vendidos, além de alternar entre os modos Light e Dark. A capa apresenta cartões com indicadores estratégicos de Faturamento, Quantidade de Produtos Vendidos, Quantidade de Transações, Quantidade de Vendedores e Total de Produtos no Catálogo.
  
                A página de Análise do Faturamento apresenta cartões detalhados com Faturamento Total, Faturamento Loja e Faturamento e-Commerce, além de indicadores de produtos vendidos, transações e ticket médio. Um gráfico de área mostra a evolução temporal do faturamento de janeiro a dezembro, destacando o mês de maior e menor desempenho. Gráficos de rosca apresentam a participação dos canais de venda, enquanto um gráfico de barras horizontais destaca os quatro produtos mais faturados. A análise inclui ainda uma tabela com foto, nome e faturamento dos vendedores e um gráfico radar para comparação do desempenho comercial entre eles.
  
                A página de Análise dos Produtos Vendidos mantém a mesma estrutura analítica, porém focada no volume de produtos comercializados. O gráfico temporal apresenta a evolução da quantidade de produtos vendidos ao longo do ano, enquanto os gráficos de rosca demonstram a participação da Loja Física e do e-Commerce no volume total. Um gráfico de barras horizontais apresenta a quantidade de transações por vendedor e uma tabela detalhada exibe o nome do produto e as quantidades vendidas em cada canal.
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
                Power BI foi utilizado para construção das visualizações e organização da narrativa analítica do projeto. DAX foi aplicado na criação de métricas como Faturamento Total, Ticket Médio e indicadores comparativos entre canais de venda. A Linguagem M foi utilizada na etapa de transformação e preparação dos dados no Power Query. A modelagem dimensional estruturou os dados de vendas, produtos, vendedores e canais de comercialização, garantindo consistência analítica e desempenho nas consultas.
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
                A solução fortalece a análise de desempenho comercial da ByteWave ao oferecer uma visão clara do faturamento, comportamento de vendas e desempenho dos vendedores. As análises permitem identificar tendências de consumo, avaliar a contribuição de diferentes canais de venda e apoiar decisões estratégicas relacionadas a campanhas comerciais, gestão de portfólio e expansão das operações de vendas.
            </div>
        
          </div>
      </div>
    `
  },
  
  {
    id: 2,
  
    thumb: "/portfolio/projetos/microsoft-power-bi/faturamento/projetos/Performance de Vendas - Veloura Beauty.png",
  
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
                A Veloura Beauty buscava compreender melhor o desempenho de suas vendas em diferentes canais e regiões. Apesar da existência de dados transacionais, faltava uma visão analítica consolidada que permitisse acompanhar faturamento, volume de pedidos e comportamento de consumo dos produtos, dificultando a identificação de tendências de mercado e oportunidades de crescimento.
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
                Foi desenvolvido um dashboard analítico no Power BI com modelagem dimensional estruturada para consolidar indicadores estratégicos de vendas. A solução apresenta KPIs como Faturamento Total, Transações, Produtos Vendidos e Ticket Médio, permitindo analisar a evolução das vendas ao longo do tempo e identificar padrões de consumo entre os diferentes canais de comercialização.
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
                O dashboard permite avaliar o desempenho comercial da Veloura Beauty de forma clara e dinâmica, destacando períodos de maior e menor faturamento, produtos com maior volume de vendas e comportamento das transações ao longo do tempo. Essas análises ajudam a identificar tendências de consumo e apoiar estratégias de marketing, reposição de estoque e expansão comercial.
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
                Power BI foi utilizado para construção das visualizações e organização da narrativa analítica do projeto. DAX foi aplicado no desenvolvimento de métricas como Faturamento, Transações, Ticket Médio e indicadores de participação percentual. A modelagem dimensional estruturou os dados de vendas, produtos e canais de venda, garantindo consistência e desempenho nas análises.
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
                A solução fortalece a tomada de decisão orientada por dados ao fornecer uma visão clara do desempenho comercial da Veloura Beauty. Com isso, torna-se possível identificar produtos de maior relevância, compreender variações de faturamento ao longo do tempo e apoiar decisões estratégicas relacionadas a campanhas, portfólio de produtos e crescimento do negócio.
            </div>
        
          </div>
      </div>
    `
  },

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
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional | Data Storytelling | Business Intelligence |",
  
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiMWI3YTFhYzgtYTIwOS00ZDY5LWI0M2YtNGRiNzBhOGFlZGNjIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-faturamento-zentronix-electronics.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
