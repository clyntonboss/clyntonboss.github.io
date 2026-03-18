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
  
    thumb: "/portfolio/projetos/microsoft-power-bi/recursos-humanos/projetos/recursos-humanos-nexora-group.png",
  
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
  
    titulo: "Pesquisa de Satisfação dos Colaboradores",
    periodo: "Fev 2022",
    duracao: "12 dias",
    stackTecnica: "| Power BI | DAX | Modelagem Dimensional | People Analytics |",
    projetoInterativo: `<p>
                        |
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNjhkNWViMjUtNTZhNi00MzM0LTkyNGMtYjYyNDA3ODZmMjA4IiwidCI6IjIzY2FjN2VlLWYxZDgtNDMzOS1hYTdiLTc4MWFhOWY5MjI1YiJ9" target="_blank" class="cert-link-verify cert-link-inf"> Projeto Interativo </a>
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
                A área de Recursos Humanos da Nexora Group enfrentava desafios na consolidação e análise de dados relacionados ao quadro de colaboradores e à satisfação interna, dificultando a identificação de padrões comportamentais, tendências de contratação e percepções críticas sobre saúde, carga horária e remuneração.
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
                Foi desenvolvida uma solução em Power BI estruturada para integrar indicadores de capital humano e análises de satisfação, com navegação intuitiva entre visão geral e análises detalhadas. A modelagem permitiu explorar dados demográficos, canais de recrutamento e evolução das contratações, além de comparar percepções entre diferentes entrevistas e dimensões organizacionais.
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
                O dashboard possibilita identificar rapidamente padrões de satisfação e insatisfação, avaliar a efetividade dos canais de recrutamento e compreender a distribuição do quadro de colaboradores. A análise comparativa entre entrevistas e indicadores organizacionais promove decisões mais assertivas voltadas à retenção de talentos e melhoria do ambiente de trabalho.
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
                Power BI foi utilizado para construção das visualizações e navegação entre páginas analíticas. DAX aplicado na criação de medidas para análise de satisfação, percentuais e comparativos entre entrevistas. Modelagem dimensional estruturando dados de colaboradores, cargos, recrutamento e respostas, garantindo performance e escalabilidade analítica.
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
                A solução conecta indicadores de pessoas à estratégia organizacional, transformando dados de satisfação e estrutura interna em insights acionáveis. Isso fortalece a gestão de capital humano, amplia a visibilidade sobre o clima organizacional e orienta decisões baseadas em dados para evolução contínua da organização.
            </div>
        
          </div>
      </div>
    `
  }
];
