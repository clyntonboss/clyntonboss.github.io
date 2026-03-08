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

  thumb: "/portfolio/projetos/microsoft-power-bi/financeiro/projetos/Aureon Finance - Centro de Controle Financeiro.png",

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
  stackTecnica: "Power BI | DAX | Linguagem M | Modelagem Dimensional | Financial Analytics",

  projetoInterativo: `<p>|<a href="https://app.powerbi.com/view?r=eyJrIjoiZjJjMDQ3YjEtZGQ0OC00MzE5LWE0ODktMzg5NDVkZTRhMGQwIiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf">Projeto Interativo</a></p>`,

  descricaoProjeto: `
    <div class="decorative-line-projetos"></div>
    
    <div class="experience experience--compact experience--inf">
        <div class="exp-header exp-header--compact">
            <button class="exp-toggle exp-toggle--compact">▸</button>
            <span class="exp-role">Contexto do Problema</span>
        </div>
        <div class="exp-details">
    
          <div class="tech-desc">
              A gestão financeira pessoal frequentemente se torna complexa pela dispersão de informações entre diferentes fontes, dificultando a visualização clara de receitas, despesas, investimentos e compromissos financeiros. A ausência de um painel consolidado limita a capacidade de análise e planejamento estratégico das finanças.
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
              Foi desenvolvido o dashboard Aureon Finance, estruturado com uma capa interativa contendo menu lateral de navegação e suporte a modo Dark e Light para melhor experiência visual. A partir da capa, o usuário acessa o Centro de Controle Financeiro, que centraliza os principais indicadores financeiros e permite acompanhar o fluxo de receitas, despesas, empréstimos e investimentos em uma visão integrada.
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
              O Centro de Controle Financeiro apresenta cartões estratégicos com indicadores de Receita, Despesas, Empréstimos, Investimentos e Meta de Receita. A análise temporal Receita vs Despesas permite compreender a evolução do fluxo financeiro ao longo do tempo. Um Treemap de Transações organiza visualmente receitas, despesas, investimentos e empréstimos, enquanto indicadores percentuais mostram o impacto das despesas em relação à receita. O painel inclui ainda um gráfico de barras horizontais com o TOP 3 maiores receitas e tabelas detalhadas para acompanhamento completo das transações financeiras.
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
              Power BI foi utilizado para construção do ambiente analítico e das visualizações interativas. DAX foi aplicado na criação de medidas para cálculo de indicadores financeiros, variações temporais e métricas percentuais. A Linguagem M foi empregada no processo de transformação e preparação dos dados no Power Query. A modelagem dimensional estruturou as entidades financeiras e transacionais, garantindo consistência analítica e escalabilidade do modelo.
          </div>
      
        </div>
    </div>
  
    <div class="experience experience--compact experience--inf">
        <div class="exp-header exp-header--compact">
            <button class="exp-toggle exp-toggle--compact">▸</button>
            <span class="exp-role">Conexão com Planejamento Financeiro</span>
        </div>
        <div class="exp-details">
    
          <div class="tech-desc">
              O Aureon Finance foi concebido como um hub de controle e planejamento financeiro orientado por dados. A solução permite acompanhar desempenho financeiro, identificar padrões de gastos e apoiar decisões mais conscientes sobre investimentos e metas financeiras, alinhando organização financeira com prosperidade sustentável.
          </div>
      
        </div>
    </div>
  `
}
];
