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
  
    thumb: "/portfolio/projetos/microsoft-power-bi/comercial/projetos/comercial-novacasa-retail.png",
  
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
  
    titulo: "Performance e Mapeamento Comercial",
    periodo: "Ago 2022",
    duracao: "12 dias",
    stackTecnica: "| Power BI | DAX | Linguagem M | Modelagem Dimensional | Data Storytelling | Business Intelligence |",
  
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNzZhNzE2YWEtZWNhMy00OGEzLTg0OTUtMzcyYmM3MGI2NGU2IiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
                        |
                        <a href="https://github.com/clyntonboss/power-bi-recursos-humanos-nexora-group.git" target="_blank" class="cert-link-verify cert-link-inf"> Repositório do Projeto </a>
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
                A NovaCasa Retail buscava compreender com maior precisão o desempenho de suas operações comerciais em diferentes regiões do país. Apesar da existência de registros de vendas, faltava uma visão analítica consolidada que permitisse acompanhar faturamento, desempenho de vendedores, comportamento de clientes e distribuição geográfica das vendas.
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
                Foi desenvolvido um dashboard estratégico em Power BI com modelagem dimensional estruturada para consolidar indicadores comerciais relevantes. A solução integra métricas como Faturamento Total, Quantidade de Transações, Ticket Médio e desempenho de vendedores, permitindo análises comparativas e identificação de tendências de vendas ao longo do tempo.
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
                O projeto foi desenvolvido seguindo padrão visual em Dark Mode e possui uma capa com menu lateral esquerdo que permite navegação entre as páginas Home, Performance e Mapeamento Comercial e Detalhamento Comercial, além da alternância entre os modos Dark e Light.
  
                A página Home apresenta indicadores estratégicos como Faturamento Total e destaques para o maior e o menor faturamento por vendedor, oferecendo uma visão executiva inicial do desempenho comercial.
  
                A página Performance e Mapeamento Comercial apresenta cartões com Faturamento versus Meta, Quantidade de Transações e Ticket Médio. Um gráfico de área demonstra a evolução temporal do faturamento com indicação da média de faturamento. O ranking dos cinco vendedores com maior desempenho é apresentado em gráfico de barras horizontais, enquanto um visual de inteligência artificial auxilia na identificação de padrões relevantes nos dados.
  
                No canto superior direito, uma área dedicada ao mapeamento comercial apresenta indicadores estratégicos como Quantidade de Clientes, Quantidade de Vendedores e Quantidade de Lojas. Um mapa do Brasil demonstra a distribuição geográfica do faturamento por meio de gradação de cores, permitindo identificar regiões com maior concentração de receita.
  
                A página de Detalhamento Comercial apresenta cartões com Faturamento, Transações e Ticket Médio. Uma tabela detalhada apresenta o desempenho individual dos vendedores com faturamento e quantidade vendida. Gráficos adicionais incluem uma rosca com a participação percentual do faturamento por região, um gráfico de barras horizontais com o volume de transações por gênero e um gráfico de barras verticais com o comparativo mensal de transações por gênero. Um gráfico de área final apresenta a evolução mensal do faturamento comparada à quantidade vendida, destacando os períodos de maior e menor desempenho.
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
                Power BI foi utilizado para desenvolvimento das visualizações e organização do storytelling analítico do projeto. DAX foi aplicado na criação de indicadores como Ticket Médio, Faturamento Total e métricas comparativas entre regiões e vendedores. A Linguagem M foi utilizada no Power Query para tratamento e transformação dos dados. A modelagem dimensional estruturou informações de vendas, clientes, vendedores e regiões, garantindo consistência analítica e desempenho nas consultas.
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
                A solução fortalece a análise estratégica da NovaCasa Retail ao oferecer uma visão integrada do desempenho comercial, permitindo avaliar a contribuição de vendedores, regiões e perfis de clientes no faturamento da empresa. As análises apoiam decisões relacionadas a expansão regional, estratégias de vendas e gestão de metas comerciais.
            </div>
        
          </div>
      </div>
    `
  }
];
