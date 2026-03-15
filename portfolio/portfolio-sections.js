/**
 * 📄 portfolio-sections.js
 *
 * Este arquivo centraliza todo o conteúdo das seções do portfólio.
 * Cada chave do objeto principal representa uma seção do site (ex: 'home', 'projetos50', etc.).
 *
 * Estrutura de cada seção:
 *  - pageTitle       → Título da aba do navegador
 *  - favicon         → Ícone da aba do navegador
 *  - title           → Texto principal exibido como título da seção
 *  - icon            → Caminho do ícone da seção (exibido ao lado do título)
 *  - showViewModes   → Booleano que indica se os modos de visualização (block, grid, list, flow) devem aparecer
 *  - hasCategory     → Booleano que indica se a seção possui categorias internas
 *  - content         → HTML da seção, que será injetado dinamicamente no container principal (#section-content)
 *
 * Observações importantes:
 *  - Todo o HTML da propriedade 'content' é tratado como innerHTML, portanto pode conter tags <p>, <strong>, listas, etc.
 *  - A chave da seção (ex: 'home') é utilizada no JS para navegar, atualizar header, título, favicon e aplicar animações.
 *  - Este arquivo não realiza nenhuma lógica de navegação ou animação; ele apenas define o conteúdo e metadados das seções.
 */

const sections = {

// ================================================== Home ================================================

  home: {
    pageTitle: "Rogério Clynton Ribeiro | Analista de Dados",
    favicon: "/assets/icons/icone-dados.png",
    title: "Transformando dados em decisões estratégicas.",
    icon: "/assets/icons/icone-dados.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <p>Analista de Dados movido pela curiosidade, precisão técnica e compromisso em transformar informações complexas em decisões estratégicas. 
         Com sólida experiência em <strong>Python, R, SQL e Power BI</strong>, crio soluções analíticas que conectam indicadores à visão de negócio, 
         permitindo identificar padrões, antecipar cenários e orientar ações com clareza e segurança.
      </p>
      
      <p>Minha abordagem integra <strong>processos de Extract, Transform and Load (ETL), modelagem estruturada, visualização interativa e análises 
         descritiva, diagnóstica, preditiva, prescritiva, exploratória e qualitativa</strong>. Isso garante que cada insight seja não apenas preciso, 
         mas aplicável e relevante para o contexto da organização. Acredito que todo conjunto de dados carrega uma narrativa valiosa — e meu papel é 
         revelá-la com rigor analítico e comunicação clara.
      </p>
      
      <p>Ao longo da minha trajetória, conduzi projetos que envolveram <strong>análises de desempenho, estudos estratégicos, automação de processos 
         e construção de dashboards executivos</strong>. Em cada entrega, priorizo métricas confiáveis, rastreabilidade e impacto tangível, alinhando 
         tecnologia, método e propósito.
      </p>
      
      <p>Estou em constante evolução, explorando novas ferramentas e metodologias para unir <strong>inovação, governança de dados e excelência 
         operacional</strong>. Acredito no poder da melhoria contínua e na importância de decisões orientadas por evidências para construir organizações 
         mais eficientes, sustentáveis e inteligentes.
      </p>
      
      <p>Meu compromisso é claro: transformar dados em valor estratégico, alinhando conhecimento técnico, visão analítica e sensibilidade de negócio para 
         apoiar decisões robustas e impulsionar resultados consistentes.
      </p>
    `
  },

// =============================================== Portfólio ==============================================

  portfolio: {
    pageTitle: "Portfólio | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-portfolio.png",
    title: "Portfólio",
    icon: "/assets/icons/icone-portfolio.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <p>Minha trajetória é guiada por uma curiosidade que nunca adormeceu e por um desejo constante de compreender o mundo por meio dos 
         dados. Ao longo dos últimos anos, mergulhei em um processo de <strong>expansão intelectual</strong> e <strong>especialização 
         intensa</strong>, estudando diariamente, explorando novas linguagens, tecnologias, metodologias e abordagens analíticas. Esse 
         caminho — construído com disciplina autodidata e busca incansável por profundidade técnica — moldou não apenas minhas habilidades, 
         mas também minha visão sobre como a informação se transforma em valor.
      </p>
      
      <p>Atuo com uma perspectiva ampla e integrada, combinando <strong>Python, R, SQL, Power BI, modelagem de dados, análises descritiva, 
         diagnóstica, preditiva, prescritiva, exploratória e qualitativa, metodologias Lean Six Sigma, automação, governança e qualidade de 
         dados</strong>. Minha experiência se estende desde a construção de pipelines analíticos e processos de ETL até o desenvolvimento 
         de dashboards interativos e análises que iluminam padrões, comportamentos e oportunidades estratégicas.
      </p>
      
      <p>Acredito que cada dataset carrega uma narrativa própria — uma história que precisa ser revelada com precisão técnica, sensibilidade 
         analítica e visão crítica. Para mim, analisar dados vai muito além de executar consultas, gerar gráficos ou aplicar modelos. É 
         compreender o contexto, questionar o óbvio, enxergar conexões, antecipar cenários e transformar complexidade em clareza. Meu trabalho 
         é encontrar significado onde muitos veem apenas números.
      </p>
      
      <p>De 2020 em diante, venho percorrendo um ciclo de aprimoramento contínuo, aprofundando-me em <strong>Power BI, Python, SQL, MySQL, 
         MongoDB, Estatística, Visualização de Dados, Data Storytelling, Data Quality, Modelagem, Processos, LGPD e Cibersegurança</strong>, 
         entre outros. Essa evolução constante me permite unir técnica, estratégia e maturidade intelectual em um estilo de trabalho analítico 
         que equilibra rigor, criatividade, lógica e intuição.
      </p>
      
      <p>Este portfólio reúne minha trajetória, meus aprendizados e minha visão: dados são mais do que insumos — são instrumentos de decisão, 
         transformação e impacto. Aqui se encontram não apenas projetos, mas uma construção consciente de experiência, fruto de disciplina, 
         foco, curiosidade e compromisso permanente com a excelência.
      </p>
    `
  },

// ================================================ Perfil ================================================

  perfil: {
    pageTitle: "Perfil | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-perfil.png",
    title: "Perfil",
    icon: "/assets/icons/icone-perfil.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <p>Minha trajetória profissional, iniciada em 1998, sempre foi movida por uma convicção simples e poderosa: <strong>a evolução é consequência 
         direta da curiosidade, da disciplina e da busca constante por entendimento profundo</strong>. Ao longo dos anos, transitei por diferentes 
         áreas da tecnologia, ampliando repertórios, conectando experiências e desenvolvendo uma visão cada vez mais sistêmica sobre processos, dados 
         e soluções inteligentes.
      </p>
      
      <p>Essa jornada, porém, ganhou um novo contorno nos últimos anos. O que antes era uma atuação ampla dentro de Tecnologia da Informação (TI) 
         evoluiu para uma fase de <strong>especialização intensa</strong>, impulsionada por <strong>curiosidade insaciável</strong> e por um comprometimento 
         diário com o <strong>desenvolvimento autodidata</strong>. A cada estudo, desafio ou projeto, busco mais do que conhecimento técnico: busco 
         compreender o sentido, a lógica e o impacto de cada conceito, ferramenta e decisão.
      </p>
      
      <p>Não se trata apenas de dominar tecnologias, metodologias ou linguagens; trata-se de construir uma base sólida, consistente e capaz de gerar 
         soluções que unem precisão, inteligência e clareza. Por isso, estudo todos os dias — movido pelo desejo de aprofundar, conectar ideias e 
         transformar complexidade em valor.
      </p>
      
      <p>O que se encontra neste portfólio não é apenas um conjunto de projetos ou certificações, mas o reflexo dessa caminhada: uma trajetória marcada 
         por <strong>expansão intelectual</strong>, <strong>busca de profundidade técnica</strong>, <strong>exploração contínua</strong> e dedicação real 
         à excelência. Cada entrega representa não apenas o que faço, mas sobretudo <strong>como penso e como evoluo</strong>.
      </p>
      
      <p>Este espaço é, portanto, a síntese de anos de prática, estudo e refinamento — um recorte vivo de uma jornada que continua, com propósito, coerência 
         e compromisso permanente de aprender, transformar e contribuir para um futuro mais inteligente, integrado, sustentável e humano.
      </p>
    `
  },

// =============================================== Propósito ==============================================

  proposito: {
    pageTitle: "Propósito | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-proposito.png",
    title: "Propósito",
    icon: "/assets/icons/icone-proposito.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <p>Meu propósito é construir pontes entre dados, entendimento e impacto real. Acredito que informação só ganha valor quando se transforma em clareza, 
         decisão e resultado — e é isso que orienta cada projeto, estudo e solução que desenvolvo.
      </p>
      
      <p>Em um cenário em que o volume de dados cresce mais rápido do que a capacidade de interpretá-los, meu compromisso é criar análises que não apenas 
         expliquem o que aconteceu, mas que revelem o <strong>porquê</strong>, o <strong>e se</strong> e o <strong>o que fazer a seguir</strong>. Meu trabalho 
         vai além de gráficos ou métricas: sua essência é provocar entendimento, gerar insights relevantes e sustentar decisões mais estratégicas.
      </p>
      
      <p>Vejo a análise de dados como um processo vivo — uma convergência entre lógica, curiosidade e visão de negócio. Por isso, busco unir profundidade técnica 
         e pensamento crítico, conectando técnicas avançadas, modelagem cuidadosa e narrativas claras, permitindo que as organizações enxerguem desafios e 
         oportunidades com precisão e inteligência.
      </p>
      
      <p>Evoluir continuamente também faz parte desse compromisso: estudar, testar, questionar, reconstruir. Não apenas para acompanhar a velocidade da tecnologia, 
         mas para <strong>antecipar caminhos</strong> e entregar soluções que façam sentido hoje e sustentem decisões de amanhã.
      </p>
      
      <p>Acredito ainda que dados são, antes de tudo, uma expressão da realidade. Por isso, meu propósito inclui a responsabilidade de tratá-los com integridade, 
         respeito e precisão. Cada análise que construo reflete fielmente o cenário, evita simplificações que distorçam a verdade e busca a síntese que revela o 
         que realmente importa. É assim que transformo números em entendimento confiável e decisões sustentáveis.
      </p>
      
      <p>Em tudo o que faço, meu objetivo permanece o mesmo: transformar complexidade em direção, dados em estratégia e informação em vantagem competitiva. 
         <strong>Trabalhar com dados, para mim, é uma forma de construir clareza — e clareza é a base de qualquer futuro sólido.</strong>
      </p>
    `
  },

// ========================================== Formação Acadêmica ==========================================

  formacaoAcademica: {
    pageTitle: "Formação Acadêmica | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-formacao-academica.png",
    title: "Formação Acadêmica",
    icon: "/assets/icons/icone-formacao-academica.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <hr class="decorative-line-cert">

        <a href="#" onclick="abrirCertificado('/portfolio/formacao-academica/diploma/2024.03.13 · Centro Universitário de Barra Mansa · Engenharia de Produção.png'); return false;">
            <img src="/portfolio/formacao-academica/diploma/2024.03.13 · Centro Universitário de Barra Mansa · Engenharia de Produção.png" alt="Engenharia de Produção" class="cert-thumb cert-thumb-block">
        </a>
        
        <div class="course-block">
            <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
            <p><strong>Curso:</strong> Engenharia de Produção | Bacharelado</p>
            <p><strong>Carga Horária:</strong> 3.800 h (Fev 2019 – Mar 2024)</p>
            <p><strong>Data de Conclusão:</strong> 13 de março de 2024</p>
            <p><strong>Código:</strong> 514.514.4bb97a2ecb2b<button class="copiar-btn copiar-btn--compact" aria-label="Copiar Código" onclick="copiarCodigo('514.514.4bb97a2ecb2b', this)">📋</button></p>
            <p><strong>Verificação:</strong>
            <a href="https://www.ubm.br/dd/" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
            </p>
        </div>

      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle"><p>Participações contínuas em seminários acadêmicos com desenvolvimento e apresentação de artigos científicos nas áreas de inclusão social, inclusão digital,
                                    tecnologia da informação, dados, produção e sustentabilidade, incluindo economia circular e Environmental, Social and Governance (ESG).<br>
                                    Todos os artigos científicos estão disponíveis para acesso e leitura na seção Produções Intelectuais.</p></div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">I Seminário de Ensino e Extensão</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
                  <li style="margin-bottom: 16px;">SGCE - Sistema de Gerenciamento da Carreira Estudantil</li>
              </ul>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">VI Seminário de Pesquisa e Iniciação Científica</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
                  <li style="margin-bottom: 16px;">Ensaio sobre perspectivas da transição da Indústria 4.0 para a Indústria 5.0</li>
                  <li style="margin-bottom: 16px;">Utilização de resíduos como matéria-prima na indústria</li>
                  <li style="margin-bottom: 16px;">As principais ferramentas computacionais aplicadas à Engenharia de Produção</li>
                  <li style="margin-bottom: 16px;">Análise da demanda por trabalho em Home Office</li>
                  <li style="margin-bottom: 16px;">A atuação do Engenheiro de Produção na Indústria 4.0</li>
                  <li style="margin-bottom: 16px;">Computação Quântica: a evolução da Tecnologia da Informação</li>
              </ul>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2022</span>
              <span class="exp-role">V Seminário de Pesquisa e Iniciação Científica</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details" style="line-height: 1.8;">
              <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
                  <li style="margin-bottom: 16px;">Vendas Especiais: lucratividade advinda de resíduos Rrcicláveis</li>
                  <li style="margin-bottom: 16px;">Os impactos da aplicação da Lei Geral de Proteção de Dados (LGPD)</li>
              </ul>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2021</span>
              <span class="exp-role">IV Seminário de Pesquisa e Iniciação Científica</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
                  <li style="margin-bottom: 16px;">Ensino a Distância: uma ferramenta de inclusão social</li>
              </ul>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2020</span>
              <span class="exp-role">III Seminário de Pesquisa e Iniciação Científica</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
                  <li style="margin-bottom: 16px;">EaD: a nova onda da educação - Virtudes e Desafios</li>
              </ul>
          </div>
      </div>
    `
  },

// ========================================= Competências Técnicas ========================================

  competenciasTecnicas: {
    pageTitle: "Competências Técnicas | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-competencias-tecnicas.png",
    title: "Competências Técnicas",
    icon: "/assets/icons/icone-competencias-tecnicas.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <div class="tech-subtitle-sup"><p>As competências abaixo estão organizadas por domínio técnico.<br>
                                        Ao expandir cada categoria, são apresentados os principais métodos, ferramentas, tecnologias e aplicações práticas relacionadas.</p></div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Análise de Dados</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Fundamentos, métodos e ferramentas para transformar dados brutos em informações valiosas e insights aplicáveis.</div>
              <div class="tech-title">Microsoft Power BI</div>
              <div class="tech-desc">
                  Modelagem de dados, ETL com Power Query, medidas DAX, modelagem dimensional, criação de dashboards corporativos, integração com bancos de dados, governança de workspaces, otimização de desempenho e técnicas profissionais de Data Storytelling.
              </div>
          
              <div class="tech-title">Microsoft Excel</div>
              <div class="tech-desc">
                  Tabelas dinâmicas, funções avançadas, análise de dados, automação de rotinas, criação de relatórios, organização de bases e preparação de dados para BI.
              </div>
          
              <div class="tech-title">Python Programming Language</div>
              <div class="tech-desc">
                  Manipulação de dados com Pandas, cálculos numéricos com NumPy, automação de processos, web scraping, análise estatística, modelos preditivos e fundamentos de machine learning.
              </div>
          
              <div class="tech-title">R Programming Language</div>
              <div class="tech-desc">
                  Manipulação de dados, visualização estatística, análise exploratória, criação de modelos estatísticos e aplicações em machine learning com RStudio.
              </div>
          
              <div class="tech-title">Data Analysis Expressions (DAX)</div>
              <div class="tech-desc">
                  Medidas e colunas calculadas, funções de filtragem e contexto, cálculos avançados, otimização e utilização do DAX Studio em análises de desempenho.
              </div>
          
              <div class="tech-title">Power Query</div>
              <div class="tech-desc">
                  Limpeza, transformação e padronização de dados, automação de etapas ETL, criação de consultas parametrizadas e integração entre múltiplas fontes.
              </div>
          
              <div class="tech-title">Tableau</div>
              <div class="tech-desc">
                  Construção de dashboards interativos, análise visual, conexão com diversas fontes de dados e criação de histórias visuais orientadas a insights.
              </div>
          
              <div class="tech-title">Qlik Sense</div>
              <div class="tech-desc">
                  Preparação de dados, desenvolvimento de visuais dinâmicos, criação de dashboards gerenciais e uso do motor associativo para exploração analítica.
              </div>
          
              <div class="tech-title">Google Looker Studio</div>
              <div class="tech-desc">
                  Conexão com múltiplas fontes, criação de relatórios dinâmicos, métricas personalizadas e visualizações para monitoramento de indicadores.
              </div>
          
              <div class="tech-title">Google Data Studio</div>
              <div class="tech-desc">
                  Desenvolvimento de painéis, aplicação de filtros interativos, consolidação de dados e construção de relatórios executivos.
              </div>
          
              <div class="tech-title">Google Analytics</div>
              <div class="tech-desc">
                  Monitoramento de métricas digitais, análise de tráfego, interpretação de KPIs e avaliação de comportamento de usuários.
              </div>
          
              <div class="tech-title">Apache Spark</div>
              <div class="tech-desc">
                  Processamento distribuído, manipulação de grandes volumes de dados, pipelines analíticos e fundamentos de aplicações big data.
              </div>
          
              <div class="tech-title">Apache Hadoop</div>
              <div class="tech-desc">
                  Estrutura distribuída, HDFS, conceitos de processamento massivo e fundamentos de ecossistemas big data.
              </div>
          
              <div class="tech-title">SQL for Data Analysis</div>
              <div class="tech-desc">
                  Consultas analíticas, manipulação de dados, filtros avançados, junções, agregações, subconsultas e modelagem relacional.
              </div>
          
              <div class="tech-title">Data Warehouse</div>
              <div class="tech-desc">
                  Arquitetura de dados, conceitos de ETL, esquemas estrela e floco de neve, KPIs e construção de ambientes analíticos.
              </div>
          
              <div class="tech-title">Data Modeling and Dimensional Modeling</div>
              <div class="tech-desc">
                  Estruturas relacionais, normalização, criação de entidades e relacionamentos, modelagem dimensional e construção de modelos para BI.
              </div>
          
              <div class="tech-title">Data Science Foundations</div>
              <div class="tech-desc">
                  Estatística aplicada, exploração de dados, limpeza de bases, visualização analítica, lógica de experimentação e fundamentos de IA.
              </div>
          
              <div class="tech-title">Machine Learning Basics</div>
              <div class="tech-desc">
                  Treinamento e avaliação de modelos, algoritmos clássicos, preparação de dados, validação e uso de pacotes para modelagem preditiva.
              </div>
          
              <div class="tech-title">Exploratory Data Analysis (EDA)</div>
              <div class="tech-desc">
                  Identificação de padrões, tratamento de outliers, visualizações diagnósticas, consolidação de insights e suporte à tomada de decisões.
              </div>
          
              <div class="tech-title">Statistics for Data Analysis</div>
              <div class="tech-desc">
                  Probabilidade, distribuições, testes estatísticos, medidas descritivas, variabilidade e inferência aplicada a dados.
              </div>
          
              <div class="tech-title">Business Intelligence</div>
              <div class="tech-desc">
                  KPIs, métricas empresariais, processos decisórios, governança de dados, análises corporativas e implementação de soluções gerenciais.
              </div>
          
              <div class="tech-title">Data Storytelling and Visualization Techniques</div>
              <div class="tech-desc">
                  Construção narrativa, design de dashboards, comunicação de insights, usabilidade, percepção visual e técnicas avançadas de apresentação de dados.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Banco de Dados</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Estruturas, linguagens e técnicas voltadas ao armazenamento, organização e consulta eficiente de grandes volumes de dados.</div>
              <div class="tech-title">Modelagem e Arquitetura de Banco de Dados</div>
              <div class="tech-desc">
                  Modelagem de dados conceitual, lógica e física; normalização; diagramação; integridade referencial; 
                  entendimento de arquitetura relacional e não relacional; definição de chaves, relacionamentos e regras de negócio; 
                  implementação de estruturas de armazenamento otimizadas.
              </div>
          
              <div class="tech-title">SQL</div>
              <div class="tech-desc">
                  Criação e manipulação de bancos relacionais; consultas avançadas com SELECT, JOINs, GROUP BY e HAVING; 
                  subconsultas; funções de agregação; manipulação de dados com DML (INSERT, UPDATE, DELETE);
                  administração básica com DDL e controle de acesso via DCL; criação de views, índices e stored procedures.
              </div>
          
              <div class="tech-title">MySQL</div>
              <div class="tech-desc">
                  Gestão de bancos MySQL; criação e otimização de tabelas e índices; uso de triggers, procedures e functions; 
                  administração de usuários; tuning de performance; utilização em aplicações web; integração com PHP; 
                  exportação e importação de dados; implementação de rotinas de manutenção.
              </div>
          
              <div class="tech-title">SQL Server</div>
              <div class="tech-desc">
                  Administração de instâncias SQL Server; criação de bancos, tabelas, funções e procedures; 
                  gerenciamento de acessos; tuning de queries; jobs de automação; controle de transações e locks; 
                  utilização de SQL Server Management Studio e ferramentas de análise.
              </div>
          
              <div class="tech-title">Oracle Database / PL/SQL</div>
              <div class="tech-desc">
                  Desenvolvimento PL/SQL com procedures, functions, packages e triggers; uso de cursores; 
                  execução de blocos anônimos; gerenciamento de usuários e permissões; 
                  criação e administração de estruturas Oracle; gerenciamento de transações e tuning.
              </div>
          
              <div class="tech-title">PostgreSQL</div>
              <div class="tech-desc">
                  Administração e utilização de PostgreSQL; criação de tipos, sequences, views e índices; 
                  escrita de queries avançadas; otimização de planos de execução; 
                  uso de extensões; gerenciamento de permissões e manutenção do servidor.
              </div>
          
              <div class="tech-title">MongoDB (NoSQL)</div>
              <div class="tech-desc">
                  Estruturação de coleções e documentos; criação de consultas em JSON; 
                  utilização de operadores e pipelines de agregação; modelagem orientada a documentos; 
                  indexação para desempenho; manipulação de dados em bancos não relacionais; 
                  integração com aplicações modernas.
              </div>
          
              <div class="tech-title">Firebird</div>
              <div class="tech-desc">
                  Utilização de bancos Firebird; criação e manipulação de tabelas; 
                  escrita de queries SQL; uso de triggers e procedures; 
                  administração básica e manutenção de arquivos de banco.
              </div>
          
              <div class="tech-title">Administração de Banco de Dados (DBA)</div>
              <div class="tech-desc">
                  Gerenciamento de instâncias, usuários e permissões; monitoramento de desempenho; 
                  manutenção preventiva; criação e execução de rotinas de backup e recuperação; 
                  tuning de queries e otimização de índices; controle de transações e concorrência; 
                  garantia de integridade, disponibilidade e segurança dos dados.
              </div>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Big Data</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Tecnologias e estratégias para processar, analisar e extrair valor de dados massivos, variados e em alta velocidade.</div>
              <div class="tech-title">Fundamentos de Big Data</div>
              <div class="tech-desc">
                  Conceitos essenciais de Big Data; arquitetura distribuída; sistemas escaláveis; 
                  processamento em larga escala; volume, variedade, velocidade e veracidade (4Vs); 
                  escolha de tecnologias conforme o tipo de dado; fundamentos de análise e pipelines distribuídos.
              </div>
          
              <div class="tech-title">Engenharia de Dados</div>
              <div class="tech-desc">
                  Construção de pipelines de dados; ingestão, transformação e entrega; 
                  ETL e ELT; orquestração de fluxos; modelagem para análises avançadas; 
                  integração entre sistemas distribuídos; automação de cargas; 
                  monitoramento e governança; apoio à tomada de decisão baseada em dados.
              </div>
          
              <div class="tech-title">Google BigQuery</div>
              <div class="tech-desc">
                  Consulta e análise em data warehouse totalmente gerenciado; 
                  execução de SQL altamente otimizado; particionamento e clusterização de tabelas; 
                  integração com pipelines ETL/ELT; carregamento e exportação de dados em larga escala; 
                  uso de funções analíticas; otimização de custos e desempenho.
              </div>
          
              <div class="tech-title">Databricks</div>
              <div class="tech-desc">
                  Uso da plataforma unificada de dados e IA; criação de notebooks colaborativos; 
                  desenvolvimento de pipelines com Delta Lake; processamento batch e streaming; 
                  integração com Spark; gerenciamento de clusters; 
                  otimização de workloads e tuning de performance.
              </div>
          
              <div class="tech-title">Apache Spark</div>
              <div class="tech-desc">
                  Processamento distribuído de dados com Spark Core; 
                  criação de aplicações com DataFrames e RDDs; 
                  utilização de Spark SQL; execução de pipelines de larga escala; 
                  desenvolvimento de aplicações completas com Python; 
                  monitoramento e otimização de jobs; 
                  stream processing com Spark Structured Streaming; 
                  tratamento de grandes volumes de dados em tempo real.
              </div>
          
              <div class="tech-title">Mineração de Dados</div>
              <div class="tech-desc">
                  Técnicas de descoberta de padrões; identificação de correlações, clusters e tendências; 
                  seleção de atributos; pré-processamento de grandes volumes de dados; 
                  aplicação de métodos estatísticos e machine learning para apoio à decisão.
              </div>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Inteligência Artificial</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Conceitos e aplicações que permitem criar sistemas capazes de aprender, identificar padrões e tomar decisões inteligentes.</div>
              <div class="tech-title">Fundamentos de Inteligência Artificial</div>
              <div class="tech-desc">
                  Conceitos essenciais de IA, sistemas inteligentes, arquiteturas cognitivas,
                  aplicações práticas, ética, responsabilidade, avaliação de modelos e impactos tecnológicos.
              </div>
          
              <div class="tech-title">Automação com Inteligência Artificial</div>
              <div class="tech-desc">
                  Automação de tarefas com IA e APIs; construção de fluxos inteligentes;
                  integração entre modelos generativos e ferramentas de produtividade; 
                  criação de agentes e automações para negócios e processos operacionais.
              </div>
          
              <div class="tech-title">Modelos Generativos e IA Generativa</div>
              <div class="tech-desc">
                  Uso de modelos generativos multimodais; criação de conteúdos com LLMs;
                  engenharia de prompt; ajuste fino; RAG; avaliação de modelos generativos;
                  aplicações práticas em texto, imagem, embeddings e agentes inteligentes.
              </div>
          
              <div class="tech-title">ChatGPT</div>
              <div class="tech-desc">
                  Criação de fluxos avançados com LLMs; construção de assistentes personalizados;
                  uso de modelos GPT para automação, análise de dados, geração de conteúdo e agentes de IA;
                  técnicas avançadas de prompting e otimização de respostas.
              </div>
          
              <div class="tech-title">Google Gemini</div>
              <div class="tech-desc">
                  Utilização de modelos multimodais Gemini; criação de fluxos integrados;
                  análise de imagens, textos e dados; aplicações práticas em automação e produtividade.
              </div>
          
              <div class="tech-title">Amazon Bedrock</div>
              <div class="tech-desc">
                  Uso de modelos generativos AWS; seleção e customização de modelos;
                  criação de agentes autônomos; desenvolvimento com PartyRock;
                  integração de IA generativa em aplicações corporativas.
              </div>
          
              <div class="tech-title">Microsoft Copilot</div>
              <div class="tech-desc">
                  Automação e suporte inteligente com Copilot; interação em ambientes Microsoft 365;
                  geração de conteúdo e otimização de processos por meio de IA integrada.
              </div>
          
              <div class="tech-title">Chatbots Inteligentes</div>
              <div class="tech-desc">
                  Criação de chatbots com IA; fluxos conversacionais; 
                  integração de LLMs; construção de bots baseados em contexto; 
                  automação de atendimento e agentes interativos.
              </div>
          
              <div class="tech-title">Microsoft Azure Machine Learning</div>
              <div class="tech-desc">
                  Desenvolvimento e gestão de modelos em ambientes Azure; 
                  pipelines de machine learning; tracking com MLFlow; 
                  experimentação, tuning de hiperparâmetros; 
                  implantação em endpoints; engenharia de prompt aplicada a soluções corporativas;
                  governança, monitoramento e versionamento de modelos.
              </div>
          
              <div class="tech-title">Machine Learning</div>
              <div class="tech-desc">
                  Pré-processamento; seleção de atributos; desenvolvimento, avaliação
                  e implantação de modelos; MLOps; machine learning em escala;
                  workflows automatizados; modelos supervisionados e não supervisionados.
              </div>
          
              <div class="tech-title">Processamento de Linguagem Natural (NLP)</div>
              <div class="tech-desc">
                  Técnicas de análise de texto; classificação, sumarização e extração de entidades;
                  modelos de linguagem; embeddings; aplicações com NLP moderno e LLMs.
              </div>
          
              <div class="tech-title">Inteligência Artificial com Linguagem R</div>
              <div class="tech-desc">
                  Implementação de algoritmos evolutivos, técnicas estatísticas
                  e modelos computacionais utilizando a linguagem R.
              </div>
          
              <div class="tech-title">Zurubabel</div>
              <div class="tech-desc">
                  Ferramentas visuais e fluxos simplificados de automação de IA;
                  criação de modelos sem código; integração com pipelines inteligentes.
              </div>
          
              <div class="tech-title">Soluções Tecnológicas Emergentes</div>
              <div class="tech-desc">
                  Análise de tendências em IA; tecnologias exponenciais; 
                  adoção estratégica de soluções emergentes; impacto na transformação digital.
              </div>
          
              <div class="tech-title">IA para Negócios</div>
              <div class="tech-desc">
                  Aplicações de IA em ambientes corporativos; otimização de processos; 
                  análise estratégica; suporte à tomada de decisão com IA; automação executiva.
              </div>
          
              <div class="tech-title">AWS SageMaker Canvas</div>
              <div class="tech-desc">
                  Criação de modelos sem código; análises preditivas; workflows simplificados de ML; 
                  integração com AWS; construção de soluções generativas e preditivas em ambiente visual.
              </div>
          
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Matemática para Machine Learning</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Fundamentos matemáticos essenciais aplicados à construção de modelos de Machine Learning, compreensão de dados e otimização de algoritmos.</div>
      
              <div class="tech-title">Álgebra e Funções</div>
              <div class="tech-desc">
                  Limites e Funções, Vetores, R² Ajustado, Derivadas e Derivadas Parciais, Normalização e Função Sigmóide.
              </div>
      
              <div class="tech-title">Estatística e Probabilidade</div>
              <div class="tech-desc">
                  Pontos Máximos e Mínimos, MAE x MSE, Teorema de Bayes, Distribuição Normal, Coeficiente R² e Gradiente Descendente.
              </div>
      
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Data Storytelling</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">A arte de comunicar dados com clareza, contexto e narrativa, conectando informações a decisões e ações.</div>
              <div class="tech-title">Microsoft PowerPoint</div>
              <div class="tech-desc">
                  Estruturação de apresentações profissionais, design visual, animações, técnicas avançadas de narrativa visual e construção de slides de alto impacto para Data Storytelling.
              </div>
          
              <div class="tech-title">Data Storytelling</div>
              <div class="tech-desc">
                  Construção de narrativas baseadas em dados, organização lógica de insights, princípios de comunicação visual, criação de mensagens claras e uso estratégico de elementos gráficos para tomada de decisão.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Cloud</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Serviços, modelos e arquiteturas que permitem computação escalável, segura e sob demanda na nuvem.</div>
              <div class="tech-title">Docker</div>
              <div class="tech-desc">
                  Construção de imagens, execução de contêineres, isolamento de serviços, criação de ambientes reprodutíveis e suporte a pipelines de desenvolvimento.
              </div>
          
              <div class="tech-title">Kubernetes</div>
              <div class="tech-desc">
                  Orquestração de contêineres, implantação declarativa, escalabilidade automática, gestão de clusters e operação de workloads distribuídos.
              </div>
          
              <div class="tech-title">Microsoft Azure</div>
              <div class="tech-desc">
                  Serviços de computação, armazenamento e redes, Azure Functions, APIs, mensageria, identidades, Cosmos DB, Application Insights, monitoramento, governança, automação, soluções serverless, integrações com contêineres e arquiteturas baseadas em eventos e mensagens.
              </div>
          
              <div class="tech-title">Amazon Web Services (AWS)</div>
              <div class="tech-desc">
                  Serviços gerenciados, computação elástica, redes, segurança, práticas de administração, integrações cloud-native e suporte corporativo a workloads Databricks.
              </div>
          
              <div class="tech-title">Google Cloud Platform (GCP)</div>
              <div class="tech-desc">
                  Computação, armazenamento, networking, segurança, automação, integrações com Databricks e arquiteturas escaláveis para soluções corporativas em nuvem.
              </div>
          
              <div class="tech-title">Microsoft SharePoint</div>
              <div class="tech-desc">
                  Criação de intranets, gestão de conteúdo, colaboração corporativa, configuração de sites e automação de processos internos.
              </div>
          
              <div class="tech-title">Cloud Fundamentals, Administration and Solution Architecture</div>
              <div class="tech-desc">
                  Conceitos de computação em nuvem, modelos de serviço, segurança, governança, administração multi-cloud, desenho de soluções e boas práticas arquiteturais.
              </div>
          
              <div class="tech-title">Databricks</div>
              <div class="tech-desc">
                  Arquitetura Lakehouse, Delta Lake, Unity Catalog, ingestão e engenharia de dados, SQL Analytics, BI, Data Warehousing, Machine Learning, IA Generativa, pipelines com DLT e Lakeflow, automação de workloads, performance tuning, governança, segurança, administração de workspaces e identidades, CI/CD, asset bundles, orquestração e operação corporativa completa da plataforma.
              </div>
          
              <div class="tech-title">Genie Rooms</div>
              <div class="tech-desc">
                  Configuração de ambientes colaborativos, gerenciamento de salas virtuais e aplicação de práticas recomendadas para coordenação de equipes.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Sistema Operacional</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Bases que sustentam o funcionamento de computadores e servidores, gerenciando recursos e garantindo estabilidade.</div>
              <div class="tech-title">Linux</div>
              <div class="tech-desc">
                  Fundamentos do sistema operacional, comandos essenciais, gerenciamento de usuários, permissões, processos, serviços, estrutura de diretórios e práticas básicas de administração.
              </div>
          
              <div class="tech-title">Android</div>
              <div class="tech-desc">
                  Conceitos de ambiente móvel, ferramentas do sistema, integrações, configurações e fundamentos de operação e manutenção do ecossistema Android.
              </div>
          
              <div class="tech-title">Microsoft Windows Server</div>
              <div class="tech-desc">
                  Instalação e configuração do servidor, administração de recursos, Active Directory, gerenciamento de domínios, permissões, serviços e práticas essenciais de infraestrutura Microsoft.
              </div>
          
              <div class="tech-title">Virtual Machines</div>
              <div class="tech-desc">
                  Conceitos de virtualização, criação e gerenciamento de máquinas virtuais, instalação de sistemas operacionais e administração de ambientes isolados.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Segurança da Informação</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Práticas e estruturas para proteger dados, sistemas e usuários contra ameaças, falhas e vulnerabilidades.</div>
              <div class="tech-title">Information Security</div>
              <div class="tech-desc">
                  Princípios de segurança, controle de acesso, políticas de proteção, gestão de riscos, fundamentos de segurança organizacional e boas práticas de defesa.
              </div>
          
              <div class="tech-title">Cybersecurity</div>
              <div class="tech-desc">
                  Conceitos essenciais de cibersegurança, vetores de ataque, defesa de sistemas, análise de ameaças, monitoramento de ambientes e mitigação de vulnerabilidades.
              </div>
          
              <div class="tech-title">Network Security</div>
              <div class="tech-desc">
                  Proteção de redes, segmentação, firewalls, protocolos seguros, prevenção a intrusões e práticas de fortalecimento de infraestrutura.
              </div>
          
              <div class="tech-title">Blockchain Technology</div>
              <div class="tech-desc">
                  Estruturas distribuídas, consenso, criptografia aplicada, contratos inteligentes, operações em cadeias públicas e privadas e fundamentos avançados de segurança em blockchain.
              </div>
          
              <div class="tech-title">Applied Cryptography</div>
              <div class="tech-desc">
                  Lógica e teoria dos números, cifras simétricas e assimétricas, funções hash, assinaturas digitais e fundamentos matemáticos de sistemas criptográficos.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Programação</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Linguagens, algoritmos e técnicas utilizadas para desenvolver soluções tecnológicas e automatizar processos.</div>
              <div class="tech-title">Programming Logic</div>
              <div class="tech-desc">
                  Estruturas condicionais, repetição, modularização, depuração, resolução de problemas e fundamentos essenciais para construção de algoritmos e sistemas funcionais.
              </div>
          
              <div class="tech-title">Python Programming Language</div>
              <div class="tech-desc">
                  Sintaxe fundamental, estruturas de dados, funções, módulos, orientação a objetos, manipulação de arquivos, programação assíncrona, integração com APIs RESTful, padrões profissionais, testes, versionamento, uso de SQL com DB API e SQLAlchemy, além de boas práticas para desenvolvimento de aplicações completas.
              </div>
          
              <div class="tech-title">FastAPI Framework</div>
              <div class="tech-desc">
                  Construção de APIs RESTful assíncronas, validação, autenticação, autorização, modelagem de rotas, integração com bancos relacionais, testes, deploy e otimização de desempenho.
              </div>
          
              <div class="tech-title">JavaScript Programming Language</div>
              <div class="tech-desc">
                  Manipulação do DOM, eventos, lógica de front-end, modularização, consumo de APIs, programação assíncrona e criação de experiências web interativas.
              </div>
          
              <div class="tech-title">HTML5</div>
              <div class="tech-desc">
                  Estruturação semântica de páginas, acessibilidade, padrões modernos e construção de layouts bem organizados.
              </div>
          
              <div class="tech-title">CSS3</div>
              <div class="tech-desc">
                  Estilização responsiva, layouts flexíveis, animações, boas práticas de design e organização modular de estilos.
              </div>
          
              <div class="tech-title">Front-End Web Development</div>
              <div class="tech-desc">
                  Construção de interfaces modernas, integração entre HTML, CSS e JavaScript, responsividade, testes, versionamento e implantação de websites completos.
              </div>
          
              <div class="tech-title">React</div>
              <div class="tech-desc">
                  Componentização, hooks, gerenciamento de estado, roteamento e criação de interfaces reativas para aplicações web modernas.
              </div>
          
              <div class="tech-title">React Native</div>
              <div class="tech-desc">
                  Desenvolvimento de aplicativos móveis, navegação, integração com APIs e construção de interfaces multiplataforma.
              </div>
          
              <div class="tech-title">Node.js</div>
              <div class="tech-desc">
                  Execução JavaScript no servidor, construção de APIs, módulos, manipulação de arquivos, npm e fundamentos do back-end moderno.
              </div>
          
              <div class="tech-title">PHP Programming Language</div>
              <div class="tech-desc">
                  Sintaxe essencial, integração com HTML, manipulação de formulários e construção de recursos dinâmicos para aplicações web.
              </div>
          
              <div class="tech-title">Java Programming Language</div>
              <div class="tech-desc">
                  Estruturas fundamentais, orientação a objetos, tipos de dados, modularização, algoritmos e desenvolvimento de aplicações robustas.
              </div>
          
              <div class="tech-title">Microsoft .NET Development</div>
              <div class="tech-desc">
                  Estruturas básicas e avançadas, programação orientada a objetos, manipulação de dados e criação de aplicações corporativas.
              </div>
          
              <div class="tech-title">Web Development</div>
              <div class="tech-desc">
                  Fundamentos de hospedagem, testes, implementação, responsividade, integração entre camadas e entrega de websites profissionais.
              </div>
          
              <div class="tech-title">Mobile Development</div>
              <div class="tech-desc">
                  Interfaces móveis, padrões de navegação, adaptação entre plataformas e implementação de funcionalidades essenciais.
              </div>
          
              <div class="tech-title">Arduino Development</div>
              <div class="tech-desc">
                  Programação embarcada, sensores, automação, lógica aplicada e criação de projetos eletrônicos interativos.
              </div>
          
              <div class="tech-title">Raspberry Pi for IoT</div>
              <div class="tech-desc">
                  Hardware aplicado, automação, redes, computação embarcada e desenvolvimento de soluções conectadas.
              </div>
          
              <div class="tech-title">Programmable Logic Controllers (PLC)</div>
              <div class="tech-desc">
                  Fundamentos de automação industrial, lógica ladder, módulos de entrada e saída e práticas iniciais de programação de CLPs.
              </div>
          
              <div class="tech-title">DevOps & Agile Culture</div>
              <div class="tech-desc">
                  Integração contínua, entrega contínua, colaboração entre equipes, fluxo de desenvolvimento e fundamentos de cultura ágil.
              </div>
          
              <div class="tech-title">Software Engineering</div>
              <div class="tech-desc">
                  Análise de requisitos, arquitetura, modelagem, testes, documentação, versionamento e boas práticas para desenvolvimento de sistemas.
              </div>
          
              <div class="tech-title">Microsoft Excel VBA</div>
              <div class="tech-desc">
                  Automação de rotinas, macros, manipulação de planilhas, estruturas de controle e integração com ferramentas do Microsoft Office.
              </div>
          
              <div class="tech-title">TensorFlow</div>
              <div class="tech-desc">
                  Estruturas de tensores, operações básicas, fundamentos de redes neurais e primeiros passos em aprendizado de máquina.
              </div>
          
              <div class="tech-title">GitHub Copilot & Prompt Engineering</div>
              <div class="tech-desc">
                  Otimização do fluxo de programação, engenharia de prompt, assistência em algoritmos e aumento de produtividade com IA aplicada ao desenvolvimento.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Robotic Process Automation</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Automação inteligente que replica ações humanas em sistemas digitais, aumentando eficiência e reduzindo erros.</div>
              <div class="tech-title">Robotic Process Automation (RPA)</div>
              <div class="tech-desc">
                  Automação de fluxos operacionais, mapeamento de processos, criação de robôs, integração entre sistemas, redução de tarefas manuais e aplicação de práticas estruturadas de automação corporativa.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão de Projetos</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Metodologias, práticas e ferramentas que garantem organização, planejamento e execução eficiente de projetos.</div>
              <div class="tech-title">Project Management</div>
              <div class="tech-desc">
                  Fundamentos de planejamento, escopo, cronogramas, orçamentos, gestão de riscos, partes interessadas, governança, documentação e análise de requisitos.
              </div>
          
              <div class="tech-title">Agile Project Management</div>
              <div class="tech-desc">
                  Métodos ágeis, Scrum, Kanban, ciclos iterativos, cerimônias ágeis, priorização de backlog, gestão orientada a valor e adaptação contínua.
              </div>
          
              <div class="tech-title">Project Management Tools & Systems</div>
              <div class="tech-desc">
                  Utilização de Microsoft Project, Jira Software, Trello, Asana e Notion para organização de tarefas, acompanhamento de sprints, indicadores, frameworks híbridos e colaboração produtiva.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Metodologia Ágil</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Princípios e frameworks que promovem entregas contínuas, colaboração e adaptação rápida às mudanças.</div>
              <div class="tech-title">Scrum Framework</div>
              <div class="tech-desc">
                  Estruturação de squads, definição de papéis, sprints, cerimônias, backlog, métricas ágeis, priorização e entrega contínua de valor em ambientes de desenvolvimento.
              </div>
          
              <div class="tech-title">Kanban Method</div>
              <div class="tech-desc">
                  Visualização de fluxo, limites de WIP, melhoria contínua, otimização de processos, acompanhamento de throughput e gerenciamento baseado em fluxo.
              </div>
          
              <div class="tech-title">Objectives and Key Results (OKR)</div>
              <div class="tech-desc">
                  Definição de objetivos estratégicos, criação de resultados-chave mensuráveis, acompanhamento por ciclos, alinhamento organizacional e integração de OKRs à cultura ágil.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão da Tecnologia</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Estratégias para alinhar infraestrutura, sistemas e inovação tecnológica aos objetivos organizacionais.</div>
              <div class="tech-title">Data Governance</div>
              <div class="tech-desc">
                  Qualidade de dados, políticas, catalogação, segurança da informação, compliance, LGPD, gestão de metadados e estruturas corporativas de governança.
              </div>
          
              <div class="tech-title">Internet of Things (IoT)</div>
              <div class="tech-desc">
                  Sensores, conectividade, dispositivos inteligentes, arquitetura IoT, interoperabilidade, edge computing e aplicações em Indústria 4.0.
              </div>
          
              <div class="tech-title">Industry 4.0</div>
              <div class="tech-desc">
                  Automação avançada, integração de sistemas, computação em nuvem, IoT industrial, análise de dados operacionais e processos digitais.
              </div>
          
              <div class="tech-title">IT Infrastructure Management</div>
              <div class="tech-desc">
                  Redes, servidores, virtualização, ambientes corporativos, monitoramento, gestão de capacidade, disponibilidade, performance e fundamentos ITIL.
              </div>
          
              <div class="tech-title">Information Systems Management</div>
              <div class="tech-desc">
                  Sistemas corporativos, fluxo de informações, integração de processos, ERP, modelos organizacionais e suporte estratégico à tomada de decisão.
              </div>
          
              <div class="tech-title">Systems Automation</div>
              <div class="tech-desc">
                  Automação de processos, integração de sistemas, workflows digitais e otimização de operações técnico-administrativas.
              </div>
          
              <div class="tech-title">IT Governance</div>
              <div class="tech-desc">
                  COBIT, conformidade, auditoria, processos decisórios, alinhamento estratégico, gestão de riscos e frameworks de governança de TI.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão de Operações</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Modelos e técnicas que otimizam processos, recursos e fluxos para alcançar eficiência operacional.</div>
              <div class="tech-title">Operations Management</div>
              <div class="tech-desc">
                  Indicadores operacionais, métricas de manutenção, análise de desempenho, gestão de workflows produtivos, controle de eficiência e otimização de processos industriais.
              </div>
          
              <div class="tech-title">Maintenance Management</div>
              <div class="tech-desc">
                  Manutenção preditiva, preventiva e corretiva, técnicas de monitoramento, análise de falhas, confiabilidade, ferramentas de inspeção e planejamento de manutenção baseado em dados.
              </div>
          
              <div class="tech-title">Predictive Maintenance Techniques</div>
              <div class="tech-desc">
                  Vibração, termografia, ultrassom, análise de óleo, inspeções técnicas e uso de ferramentas específicas para antecipação de falhas e aumento da disponibilidade operacional.
              </div>
          
              <div class="tech-title">Centrifugal Pump Systems</div>
              <div class="tech-desc">
                  Funcionamento, componentes, curvas características, análise de desempenho, diagnóstico de falhas e boas práticas de operação e manutenção de bombas centrífugas.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão da Qualidade</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Sistemas e práticas voltados à melhoria contínua, consistência e excelência nos produtos e serviços.</div>
              <div class="tech-title">Lean Six Sigma</div>
              <div class="tech-desc">
                  Redução de desperdícios, análise de causa raiz, mapeamento de processos, ferramentas estatísticas, ciclos DMAIC e melhoria contínua orientada a dados.
              </div>
          
              <div class="tech-title">White Belt – Lean Six Sigma</div>
              <div class="tech-desc">
                  Conceitos introdutórios, fundamentos de melhoria contínua, identificação de problemas e participação em projetos Lean Six Sigma.
              </div>
          
              <div class="tech-title">Yellow Belt – Lean Six Sigma</div>
              <div class="tech-desc">
                  Estruturas básicas de análise, apoio a projetos, entendimento de métricas, ferramentas essenciais e contribuição para melhorias operacionais.
              </div>
          
              <div class="tech-title">Green Belt – Lean Six Sigma</div>
              <div class="tech-desc">
                  Liderança de projetos, análise aprofundada, metodologia DMAIC, estatística aplicada, redução de variabilidade e otimização de processos.
              </div>
          
              <div class="tech-title">Quality Management</div>
              <div class="tech-desc">
                  Gestão de padrões, auditorias, controle de qualidade, procedimentos, ferramentas da qualidade e direcionamento para eficiência operacional.
              </div>
          
              <div class="tech-title">Operational Excellence</div>
              <div class="tech-desc">
                  Estruturas de alto desempenho, práticas de eficiência, melhoria contínua, cultura de processos robustos e eliminação de desperdícios.
              </div>
          
              <div class="tech-title">Lean Manufacturing</div>
              <div class="tech-desc">
                  Fluxos enxutos, otimização operacional, redução de estoques, padronização e melhoria contínua em ambientes industriais.
              </div>
          
              <div class="tech-title">Kaizen Method</div>
              <div class="tech-desc">
                  Aplicação de melhorias incrementais, solução prática de problemas, envolvimento da equipe e otimização diária de processos.
              </div>
          
              <div class="tech-title">Standard Operating Procedure (SOP)</div>
              <div class="tech-desc">
                  Elaboração de procedimentos, estruturação de instruções padronizadas, organização de fluxos e suporte à conformidade operacional.
              </div>
          
              <div class="tech-title">MASP – Problem Solving Methodology</div>
              <div class="tech-desc">
                  Identificação, análise e tratamento de problemas, aplicação estruturada de etapas, evidências e ações corretivas e preventivas.
              </div>
          
              <div class="tech-title">5S Methodology</div>
              <div class="tech-desc">
                  Organização, limpeza, padronização, disciplina, eficiência, ambiente produtivo e cultura de melhoria contínua.
              </div>
          
              <div class="tech-title">Industrial Production Management</div>
              <div class="tech-desc">
                  Processos industriais, produtividade, controle operacional, planejamento de produção e fundamentos da gestão fabril.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão de Pessoas</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Competências e estratégias que desenvolvem, motivam e engajam equipes de forma humana e eficaz.</div>
              <div class="tech-title">Leadership and People Management</div>
              <div class="tech-desc">
                  Princípios de liderança, motivação de equipes, tomada de decisão, gestão situacional, desenvolvimento de talentos e construção de ambientes colaborativos.
              </div>
          
              <div class="tech-title">Leadership Communication</div>
              <div class="tech-desc">
                  Comunicação estratégica, influência organizacional, feedback estruturado, negociação e condução de conversas de alinhamento e performance.
              </div>
          
              <div class="tech-title">Customer Experience Management (CX)</div>
              <div class="tech-desc">
                  Jornada do cliente, métricas de experiência, desenho de processos centrados no cliente, mapeamento de touchpoints e estratégias de fidelização.
              </div>
          
              <div class="tech-title">Customer Relationship Management (CRM)</div>
              <div class="tech-desc">
                  Gestão de relacionamento, segmentação de clientes, estratégias de retenção, análise comportamental e práticas de atendimento orientadas ao valor.
              </div>
          
              <div class="tech-title">Corporate Training and Development (T&D)</div>
              <div class="tech-desc">
                  Desenvolvimento organizacional, trilhas de aprendizagem, design instrucional, avaliação de desempenho e implementação de programas de capacitação.
              </div>
          
              <div class="tech-title">Corporate University Management</div>
              <div class="tech-desc">
                  Estruturação de universidades corporativas, governança educacional, gestão de competências, métricas de aprendizagem e alinhamento estratégico.
              </div>
          
              <div class="tech-title">Performance Management for HR</div>
              <div class="tech-desc">
                  Modelos de avaliação, KPIs de desempenho, gestão por competências, monitoramento contínuo e alinhamento de metas individuais e organizacionais.
              </div>
          
              <div class="tech-title">People Development for Emerging Leaders</div>
              <div class="tech-desc">
                  Formação de líderes iniciantes, autogestão, inteligência emocional, gestão de conflitos e desenvolvimento de postura de liderança.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão de Negócios</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Visão estratégica e práticas que direcionam organizações à tomada de decisão, crescimento e competitividade.</div>
              <div class="tech-title">Business Skills Fundamentals</div>
              <div class="tech-desc">
                  Fundamentos de negócios, pensamento estratégico, resolução de problemas, análise situacional e tomada de decisão orientada a valor.
              </div>
          
              <div class="tech-title">Business Analysis with Artificial Intelligence</div>
              <div class="tech-desc">
                  Análise de requisitos, modelagem de processos, elicitação assistida por IA, identificação de melhorias e técnicas analíticas para decisões corporativas.
              </div>
          
              <div class="tech-title">Corporate Sales Fundamentals</div>
              <div class="tech-desc">
                  Vendas consultivas, negociação B2B, propostas de valor, gestão de pipeline e estratégias de relacionamento comercial.
              </div>
          
              <div class="tech-title">N8N Automation Platform</div>
              <div class="tech-desc">
                  Criação de workflows, automação de processos, manipulação de dados, uso de nós padrão, integrações com APIs e serviços externos, webhooks, lógica de orquestração e boas práticas de automação em plataformas low-code.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão de Marketing</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Técnicas e análises que conectam marcas ao público, fortalecendo presença, valor e posicionamento.</div>
              <div class="tech-title">Trade Marketing</div>
              <div class="tech-desc">
                  Estratégias de canal, execução no ponto de venda, comportamento do shopper, gestão de categorias e ações para aumento de giro e visibilidade.
              </div>
          
              <div class="tech-title">LinkedIn Professional Branding</div>
              <div class="tech-desc">
                  Construção de marca pessoal, presença digital estratégica, networking profissional, otimização de perfil e posicionamento orientado a autoridade.
              </div>
          
              <div class="tech-title">Social Media Marketing</div>
              <div class="tech-desc">
                  Planejamento de conteúdo, métricas de engajamento, segmentação, gestão de comunidades e estratégias para plataformas sociais.
              </div>
          
              <div class="tech-title">Mobile Marketing</div>
              <div class="tech-desc">
                  Estratégias para dispositivos móveis, campanhas orientadas a apps, notificações, comportamento mobile e otimização de conversões em ambientes móveis.
              </div>
          
              <div class="tech-title">Marketing Strategy Fundamentals</div>
              <div class="tech-desc">
                  Análise de mercado, definição de posicionamento, segmentação, estratégias competitivas e construção de planos de marketing.
              </div>
          
              <div class="tech-title">Digital Marketing Fundamentals</div>
              <div class="tech-desc">
                  Canais digitais, planejamento de campanhas, funis de aquisição, SEO, mídias pagas e mensuração de desempenho digital.
              </div>
          
              <div class="tech-title">Marketing Research Fundamentals</div>
              <div class="tech-desc">
                  Métodos de pesquisa, coleta e análise de dados, estudos de mercado, comportamento do consumidor e interpretação de insights.
              </div>
          
              <div class="tech-title">Advanced Marketing Management</div>
              <div class="tech-desc">
                  Gestão de portfólio, estratégias de marca, análise competitiva, planejamento integrado e tomada de decisão orientada a dados.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão Financeira</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Princípios que orientam o controle, análise e uso inteligente dos recursos econômicos de uma organização.</div>
              <div class="tech-title">Corporate Financial Management</div>
              <div class="tech-desc">
                  Fluxo de caixa, análise econômica, orçamento empresarial, indicadores financeiros, gestão de custos e tomada de decisão orientada ao desempenho financeiro.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Gestão Logística</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Planejamento e coordenação do fluxo de materiais, produtos e informações ao longo da cadeia de suprimentos.</div>
              <div class="tech-title">Logistics and Materials Management</div>
              <div class="tech-desc">
                  Cadeia de suprimentos, gestão de estoques, armazenagem, movimentação de materiais, planejamento logístico, distribuição e eficiência operacional.
              </div>
          
              <div class="tech-title">Reverse Logistics</div>
              <div class="tech-desc">
                  Processos de retorno, pós-consumo e pós-venda, recuperação de valor, sustentabilidade, destino final de materiais e gerenciamento de ciclos reversos.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Design</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Princípios visuais e estruturais aplicados para criar interfaces, layouts e experiências funcionais e atraentes.</div>
              <div class="tech-title">Figma Interface Design Platform</div>
              <div class="tech-desc">
                  Criação de interfaces, prototipagem, wireframes, auto layout, design responsivo, componentes reutilizáveis e fluxos de navegação para web e mobile.
              </div>
          
              <div class="tech-title">User Experience (UX) Design</div>
              <div class="tech-desc">
                  Arquitetura da informação, fluxos de usuário, usabilidade, heurísticas de Nielsen, estruturação de produtos digitais e criação de experiências centradas no usuário.
              </div>
          
              <div class="tech-title">User Interface (UI) Design</div>
              <div class="tech-desc">
                  Design visual, composição gráfica, tipografia, hierarquia visual, padrões de interface e criação de layouts para web e mobile.
              </div>
          
              <div class="tech-title">UX Research</div>
              <div class="tech-desc">
                  Métodos de pesquisa, planejamento e condução de entrevistas, análise de comportamentos, testes com usuários e desenvolvimento de insights para decisões de produto.
              </div>
          
              <div class="tech-title">Design Thinking</div>
              <div class="tech-desc">
                  Processo de inovação centrada no usuário, ideação, prototipagem, testes rápidos e resolução criativa de problemas complexos.
              </div>
          
              <div class="tech-title">Graphic Design</div>
              <div class="tech-desc">
                  Princípios visuais, composição, cores, tipografia, layout, criação de materiais gráficos e desenvolvimento de identidade visual.
              </div>
          
              <div class="tech-title">Web Design</div>
              <div class="tech-desc">
                  Estruturação de interfaces web, design responsivo, arquitetura de navegação, padrões modernos e criação de layouts funcionais.
              </div>
          
              <div class="tech-title">Game Design</div>
              <div class="tech-desc">
                  Estruturação de mecânicas, experiência do jogador, narrativa interativa, prototipagem e princípios fundamentais de design para jogos.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Autoconhecimento</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Habilidades voltadas ao desenvolvimento pessoal, autoconsciência e fortalecimento das competências internas.</div>
              <div class="tech-title">Professional Self-Development</div>
              <div class="tech-desc">
                  Autoconhecimento, identificação de competências, desenvolvimento pessoal, alinhamento de metas e aprimoramento contínuo de performance profissional.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Habilidades</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Conjunto de capacidades técnicas e humanas que ampliam performance, adaptabilidade e evolução profissional.</div>
              <div class="tech-title">IBM SkillsBuild Professional Skills</div>
              <div class="tech-desc">
                  Desenvolvimento de mindset profissional, colaboração, adaptabilidade, comunicação avançada e competências essenciais para alta performance.
              </div>
          
              <div class="tech-title">Negotiation Fundamentals</div>
              <div class="tech-desc">
                  Técnicas de negociação, análise de interesses, construção de acordos, comunicação estratégica e resolução de conflitos em ambientes corporativos.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Idiomas</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Ferramenta essencial para comunicação global e ampliação de oportunidades profissionais e culturais.</div>
              <div class="tech-title">English Language Skills</div>
              <div class="tech-desc">
                  Compreensão oral, leitura, comunicação básica, vocabulário fundamental e desenvolvimento progressivo de fluência em inglês.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Sustentabilidade</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Práticas que promovem responsabilidade ambiental, social e econômica de forma equilibrada e consciente.</div>
              <div class="tech-title">Environmental, Social and Governance (ESG)</div>
              <div class="tech-desc">
                  Práticas de sustentabilidade corporativa, governança ambiental, responsabilidade social, compliance ESG, riscos climáticos, métricas de impacto, relatórios de sustentabilidade e estratégias para negócios de baixo carbono.
              </div>
          
              <div class="tech-title">Circular Economy</div>
              <div class="tech-desc">
                  Modelos de economia regenerativa, ciclos de retorno, reutilização de materiais, ecodesign, eficiência de recursos, cadeias produtivas circulares, transição para modelos sustentáveis e integração de princípios circulares em processos industriais.
              </div>
          
              <div class="tech-title">Circular Business Models</div>
              <div class="tech-desc">
                  Desenvolvimento de modelos de negócio sustentáveis, criação de valor circular, estratégias regenerativas, soluções para cidades inteligentes e frameworks para inovação ambiental.
              </div>
          
              <div class="tech-title">Waste Management for Circular Systems</div>
              <div class="tech-desc">
                  Gestão de resíduos, logística reversa, reciclagem avançada, reaproveitamento de materiais, políticas urbanas de sustentabilidade e implementação de práticas de baixo impacto ambiental.
              </div>
          
              <div class="tech-title">Sustainable Cities and Circular Urban Development</div>
              <div class="tech-desc">
                  Planejamento urbano sustentável, cidades inteligentes, governança circular, infraestrutura verde, economia regenerativa e estratégias públicas para desenvolvimento urbano resiliente.
              </div>
          
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Credly</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Conceitos e conhecimentos sobre plataformas, autenticação e gestão de identidades digitais.</div>
              <div class="tech-title">Credly Digital Credential Platform</div>
              <div class="tech-desc">
                  Criação e emissão de badges digitais, gestão e verificação de certificações, integração com perfis profissionais e rastreamento de credenciais.
              </div>
          
          </div>
      
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Arquitetura</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <div class="tech-subtitle">Fundamentos estruturais e estratégicos aplicados ao design de sistemas, soluções e modelos tecnológicos.</div>
              <div class="tech-title">Building Information Modeling (BIM)</div>
              <div class="tech-desc">
                  Modelagem paramétrica, coordenação multidisciplinar, extração de quantitativos, revisão de modelos, compatibilização e fluxo de trabalho BIM nível profissional.
              </div>
          
              <div class="tech-title">Autodesk Revit</div>
              <div class="tech-desc">
                  Modelagem arquitetônica, criação de famílias, documentação avançada, representação de projetos, coordenação e detalhamento técnico em ambiente BIM.
              </div>
          
              <div class="tech-title">Autodesk Civil 3D</div>
              <div class="tech-desc">
                  Modelagem de terrenos, superfícies, corredores viários, análise geométrica, documentação e processos de infraestrutura integrados ao ecossistema BIM.
              </div>
          
              <div class="tech-title">Computer-Aided Design (CAD)</div>
              <div class="tech-desc">
                  Desenho técnico 2D, detalhamento arquitetônico, representação gráfica, normas de desenho e transição eficiente do CAD para o fluxo BIM.
              </div>
          
              <div class="tech-title">Arquitetura e Representação Digital</div>
              <div class="tech-desc">
                  Modelagem de elementos arquitetônicos, leitura e interpretação técnica, representação visual, organização de projetos e comunicação gráfica profissional.
              </div>
          
              <div class="tech-title">Fluxos de Trabalho CAD-to-BIM</div>
              <div class="tech-desc">
                  Conversão de desenhos 2D para modelos paramétricos, otimização de processos, padronização de templates e integração entre plataformas de projeto.
              </div>
          </div>
      </div>
    `
  },

// ===================================== Competências Comportamentais =====================================

  competenciasComportamentais: {
    pageTitle: "Competências Comportamentais | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-competencias-comportamentais.png",
    title: "Competências Comportamentais",
    icon: "/assets/icons/icone-competencias-comportamentais.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <div class="tech-subtitle-sup"><p>As competências comportamentais abaixo estão organizadas por domínio.<br>
                                        Ao expandir cada categoria, são descritas atitudes, práticas e contextos de aplicação ao longo da minha trajetória.</p></div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Comunicação & Relacionamento</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <div class="tech-subtitle">Forma de interagir, transmitir ideias e colaborar com os outros.</div>
              <div class="tech-title">Boa Comunicação</div>
              <div class="tech-desc">
                  Comunicação clara, estruturada e objetiva, com habilidade para transmitir informações complexas de forma acessível, adaptar o discurso ao público e fortalecer a assertividade em interações presenciais ou remotas. Capacidade de ouvir ativamente, sintetizar ideias e construir entendimentos comuns com precisão.
              </div>
      
              <div class="tech-title">Trabalho em Equipe</div>
              <div class="tech-desc">
                  Colaboração ativa em ambientes multidisciplinares, integração de competências diversas, compartilhamento de conhecimento e construção de resultados coletivos. Habilidade para alinhar expectativas, apoiar colegas e contribuir para um clima organizacional produtivo e equilibrado.
              </div>
      
              <div class="tech-title">Capacidade de Negociação</div>
              <div class="tech-desc">
                  Habilidade para conduzir diálogos estratégicos, compreender necessidades das partes envolvidas, identificar alternativas de ganho mútuo e construir acordos equilibrados. Atuação pautada por clareza, empatia e firmeza, garantindo resultados satisfatórios e sustentáveis.
              </div>
      
              <div class="tech-title">Gestão de Conflitos</div>
              <div class="tech-desc">
                  Abordagem imparcial e estruturada para mediação de divergências, construção de entendimento entre partes e restauração de ambientes produtivos. Capacidade de lidar com tensões com serenidade, isenção emocional e foco na solução, preservando relações profissionais e o andamento das atividades.
              </div>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Liderança & Gestão</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <div class="tech-subtitle">Coordenação de pessoas, gestão de processos e orientação de equipes.</div>
              <div class="tech-title">Liderança Colaborativa</div>
              <div class="tech-desc">
                  Condução de equipes por meio da influência positiva, incentivo à participação, desenvolvimento de talentos e promoção de autonomia responsável. Capacidade de orientar, inspirar e estruturar processos de forma compartilhada, fortalecendo a maturidade do grupo e o alcance das metas.
              </div>
      
              <div class="tech-title">Gestão de Tempo</div>
              <div class="tech-desc">
                  Organização precisa de tarefas, priorização com base em impacto e urgência, disciplina para manter ritmo de execução e capacidade de cumprir prazos sem comprometer qualidade. Abordagem estruturada que otimiza rotinas e aumenta a eficiência operacional.
              </div>
      
              <div class="tech-title">Proatividade</div>
              <div class="tech-desc">
                  Atitude orientada à ação, antecipação de demandas e iniciativa para solucionar problemas antes que impactem resultados. Capacidade de identificar oportunidades de melhoria, propor caminhos e agir com autonomia, sempre alinhado aos objetivos estratégicos e ao contexto organizacional.
              </div>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Pensamento Analítico & Estratégico</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <div class="tech-subtitle">Análise, raciocínio e tomada de decisão baseada em informações e lógica.</div>
              <div class="tech-title">Raciocínio Lógico</div>
              <div class="tech-desc">
                  Estruturação lógica do pensamento para analisar situações, decompor problemas e construir conclusões coerentes e fundamentadas. Capacidade de identificar inconsistências, estabelecer relações causais e produzir soluções claras e objetivas com base em critérios racionais e verificáveis.
              </div>
      
              <div class="tech-title">Pensamento Analítico</div>
              <div class="tech-desc">
                  Avaliação detalhada de informações, identificação de padrões relevantes, interpretação crítica de dados e capacidade de transformar elementos dispersos em insights práticos. Análise estruturada que favorece decisões estratégicas e sustentadas por evidências concretas.
              </div>
      
              <div class="tech-title">Resolução de Problemas Complexos</div>
              <div class="tech-desc">
                  Capacidade de investigar causas profundas, analisar variáveis interdependentes e desenvolver soluções robustas para desafios de alta complexidade. Abordagem orientada à mitigação de riscos, escolha de alternativas viáveis e implementação de estratégias eficazes de forma organizada e precisa.
              </div>
      
              <div class="tech-title">Tomada de Decisão Baseada em Dados</div>
              <div class="tech-desc">
                  Utilização de métricas, evidências e indicadores relevantes para fundamentar escolhas, minimizando vieses subjetivos e aumentando a precisão dos resultados. Capacidade de interpretar dados com senso crítico e direcionar ações alinhadas a objetivos estratégicos e mensuráveis.
              </div>
      
              <div class="tech-title">Pensamento Sistêmico</div>
              <div class="tech-desc">
                  Visão ampliada de cenários, compreensão das interdependências entre processos e análise de consequências de curto, médio e longo prazo. Capacidade de enxergar o todo, antecipar efeitos colaterais e propor soluções que considerem impactos organizacionais integrados.
              </div>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Orientação a Resultados</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
              <div class="tech-subtitle">Foco em performance, metas e entrega de valor.</div>
              <div class="tech-title">Orientação a Resultados</div>
              <div class="tech-desc">
                  Foco contínuo em metas estratégicas, disciplina para monitorar progresso, capacidade de ajustar rotas e compromisso em entregar valor real. Atuação consistente, resiliente e guiada pela busca de desempenho elevado com precisão e responsabilidade.
              </div>
          </div>
      </div>
    `
  },

// ============================================== Trajetória ==============================================

  trajetoria: {
    pageTitle: "Trajetória | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-trajetoria.png",
    title: "Trajetória",
    icon: "/assets/icons/icone-trajetoria.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <p>
          Minha trajetória profissional foi construída de forma contínua, progressiva e intencional, unindo prática técnica, capacidade analítica e visão estratégica.
          Desde os primeiros contatos com a tecnologia, ainda no final da década de 1990, cada etapa contribuiu para formar um profissional orientado à resolução de problemas,
          à organização da informação e à geração de valor por meio do uso consciente da tecnologia.
      </p>
      <p>
          O início dessa jornada ocorreu em 1998, com o primeiro curso na área de Tecnologia da Informação. Já em 1999, passei a atuar de forma voluntária em instituições de
          ensino, apoiando secretarias e setores administrativos. Mesmo em contextos simples, esse período foi fundamental para desenvolver autonomia técnica, senso de
          responsabilidade e uma compreensão prática de processos, infraestrutura e organização da informação, muito antes da formalização no mercado de trabalho.
      </p>
      <p>
          A partir de 2003, tive contato com ambientes corporativos mais complexos, atuando como técnico de suporte em uma empresa prestadora de serviços para a indústria
          siderúrgica. Nesse contexto, prestei suporte a usuários e sistemas críticos, como Windows, Office, SAP e outras soluções corporativas. Com o tempo, fui promovido
          a analista SAP júnior, acumulando funções técnicas e analíticas. Essa fase consolidou uma visão sistêmica dos processos, além de fortalecer a capacidade de atuação
          sob pressão e em ambientes de alta responsabilidade operacional.
      </p>
      <p> 
          Entre 2009 e 2010, atuei em diferentes instituições, principalmente no setor educacional, prestando suporte presencial à infraestrutura de TI. Nessas experiências,
          fui responsável por redes, estações de trabalho, impressoras e apoio direto a alunos, professores e equipes administrativas. Essa etapa reforçou minha adaptabilidade,
          leitura de contexto e habilidade de lidar com perfis diversos de usuários, muitas vezes assumindo responsabilidades além do escopo formal da função.
      </p>
      <p>
          A partir de 2011, iniciei a atuação de forma independente, prestando serviços de TI e desenvolvendo sistemas voltados principalmente para instituições de ensino,
          sem deixar de atender pessoas físicas. Esse período foi marcado pela consolidação da autonomia profissional e pelo amadurecimento na identificação de necessidades
          reais antes da definição de soluções técnicas. Mais do que executar demandas, passei a estruturar soluções alinhadas ao contexto, aos recursos disponíveis e aos
          objetivos de cada cliente.
      </p>
      <p>
          Em 2019, retornei ao ambiente acadêmico e direcionei meus esforços de forma estratégica para a área de dados. Desde então, concentrei meus estudos e projetos em
          análise e visualização de dados, automação de processos e modelagem da informação, utilizando ferramentas como Power BI, SQL, Python, R, M, Figma, n8n e, mais
          recentemente, Neo4j. Essa fase representa a convergência natural entre toda a experiência prática acumulada e uma atuação orientada à tomada de decisão, eficiência
          e impacto mensurável.
      </p>
      <p>
          Essa trajetória, construída ao longo de mais de duas décadas, se materializa hoje em projetos analíticos, soluções orientadas a dados e iniciativas que geram
          resultados concretos. Os projetos desenvolvidos e os impactos alcançados refletem diretamente esse percurso e estão apresentados nas seções seguintes.
      </p>
    `
  },

// ========================================= Formações Complementares =====================================

  formacoesComplementares: {
    pageTitle: "Formações Complementares | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-formacoes-complementares.png",
    title: "Formações Complementares",
    icon: "/assets/icons/icone-formacoes-complementares.png",
    showViewModes: false,
    hasCategory: true,
    content: `
      <div class="tech-subtitle-sup"><p>As formações complementares estão organizadas por área de conhecimento.<br>
                                        Ao selecionar uma categoria, são apresentados os cursos concluídos, com informações pertinentes a cada curso.</p></div>
      
      <div class="cert-links">
          <!--  Dados e Inteligência -->
          <a href="#" data-category="analiseDados">Análise de Dados</a>
          <a href="#" data-category="bancoDados">Bancos de Dados</a>
          <a href="#" data-category="bigData">Big Data</a>
          <a href="#" data-category="inteligenciaArtificial">Inteligência Artificial</a>
          <a href="#" data-category="matematica">Matemática Aplicada</a>
          <a href="#" data-category="dataStorytelling">Data Storytelling</a>
          
          <!-- Tecnologia e Fundamentos -->
          <a href="#" data-category="cloud">Cloud Computing</a>
          <a href="#" data-category="sistemasOperacionais">Sistemas Operacionais</a>
          <a href="#" data-category="segurancaInformacao">Segurança da Informação</a>
          <a href="#" data-category="programacao">Programação</a>
          <a href="#" data-category="roboticProcessAutomation">Robotic Process Automation</a>
                          
          <!-- Gestão e Negócios -->
          <a href="#" data-category="gestaoProjetos">Gestão de Projetos</a>
          <a href="#" data-category="metodologiaAgil">Metodologia Ágil</a>
          <a href="#" data-category="gestaoTecnologia">Gestão da Tecnologia</a>
          <a href="#" data-category="gestaoOperacoes">Gestão de Operações</a>
          <a href="#" data-category="gestaoQualidade">Gestão da Qualidade</a>
          <a href="#" data-category="gestaoPessoas">Gestão de Pessoas</a>
          <a href="#" data-category="gestaoNegocios">Gestão de Negócios</a>
          <a href="#" data-category="gestaoMarketing">Gestão de Marketing</a>
          <a href="#" data-category="gestaoFinanceira">Gestão Financeira</a>
          <a href="#" data-category="gestaoLogistica">Gestão Logística</a>
      
          <!-- Design & Comunicação -->
          <a href="#" data-category="design">Design</a>
      
          <!-- Desenvolvimento Humano & Soft Skills -->
          <a href="#" data-category="autoconhecimento">Autoconhecimento</a>
          <a href="#" data-category="skills">Skills Profissionais</a>
      
          <!-- Outras categorias -->
          <a href="#" data-category="idiomas">Idiomas</a>
          <a href="#" data-category="sustentabilidade">Sustentabilidade</a>
          <a href="#" data-category="credly">Credly</a>
          <a href="#" data-category="arquitetura">Arquitetura</a>
      </div>
    `
  },

// ====================================== Certificações e Credenciais =====================================

  certificacoesCredenciais: {
    pageTitle: "Certificações e Credenciais | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-certificacoes-e-credenciais.png",
    title: "Certificações e Credenciais",
    icon: "/assets/icons/icone-certificacoes-e-credenciais.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne certificações e credenciais obtidas ao longo da trajetória profissional, organizadas por categoria e data de conclusão.<br>
                                        Os registros apresentados representam validações formais de conhecimentos, emitidas por instituições e plataformas reconhecidas.</p></div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Azure Platform Architect</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Databricks Accredited Azure Platform Architect.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.30 · Databricks Academy · Databricks Accredited Azure Platform Architect.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Azure Platform Architect</p>
                  <p><strong>Carga Horária:</strong> 4 h 10 min</p>
                  <p><strong>Data de Conclusão:</strong> 01 de julho de 2025 (Issue: July 1, 2025 / Expiration: July 1, 2027)</p>
                  <p><strong>Código:</strong> e9b19a1a-c9bc-4299-bac8-e8c63ecfa6b8#acc.Zox1Ip6g</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/e9b19a1a-c9bc-4299-bac8-e8c63ecfa6b8#acc.Zox1Ip6g" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Amazon Web Services Platform Architect</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Databricks Accredited Amazon Web Services Platform Architect.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.29 · Databricks Academy · Databricks Accredited Amazon Web Services Platform Architect.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Amazon Web Services Platform Architect</p>
                  <p><strong>Carga Horária:</strong> 3 h 20 min</p>
                  <p><strong>Data de Conclusão:</strong> 29 de junho de 2025 (Issue: June 29, 2025 / Expiration: June 29, 2027)</p>
                  <p><strong>Código:</strong> 84a4d7a4-f3bd-4671-b524-9999d80703e3#acc.H4zfQY7o</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/84a4d7a4-f3bd-4671-b524-9999d80703e3#acc.H4zfQY7o" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Google Cloud Platform Databricks Platform Architect</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.21 · Databricks Academy · Databricks Accredited Google Cloud Platform Databricks Platform Architect.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.21 · Databricks Academy · Databricks Accredited Google Cloud Platform Databricks Platform Architect.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Google Cloud Platform Databricks Platform Architect</p>
                  <p><strong>Carga Horária:</strong> 3 h 20 min</p>
                  <p><strong>Data de Conclusão:</strong> 21 de junho de 2025 (Issue: June 21, 2025 / Expiration: June 21, 2027)</p>
                  <p><strong>Código:</strong> 40006ffa-eb9f-4310-967c-2638c0f90ac1#acc.Czf2X0tp</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/40006ffa-eb9f-4310-967c-2638c0f90ac1#acc.Czf2X0tp" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Generative Artificial Intelligence Fundamentals</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Databricks Accredited Generative Artificial Intelligence Fundamentals.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.19 · Databricks Academy · Databricks Accredited Generative Artificial Intelligence Fundamentals.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Generative Artificial Intelligence Fundamentals</p>
                  <p><strong>Carga Horária:</strong> 10 h 10 min</p>
                  <p><strong>Data de Conclusão:</strong> 19 de junho de 2025 (Issue: June 19, 2025 / Expiration: June 19, 2027)</p>
                  <p><strong>Código:</strong> 8860b920-cc9e-44ef-b74f-d8dade5f4097#acc.wtGEnHhX</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/8860b920-cc9e-44ef-b74f-d8dade5f4097#acc.wtGEnHhX" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Databricks Fundamentals</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Databricks Fundamentals.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Databricks Fundamentals.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Databricks Fundamentals</p>
                  <p><strong>Carga Horária:</strong> 1 h 30 min</p>
                  <p><strong>Data de Conclusão:</strong> 11 de junho de 2025 (Issue: June 11, 2025 / Expiration: June 11,2026)</p>
                  <p><strong>Código:</strong> 64c80be0-4b36-4a4f-8d3d-3b10e5482c53#acc.QxLS6wM5</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/64c80be0-4b36-4a4f-8d3d-3b10e5482c53#acc.QxLS6wM5" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Databricks Accredited Platform Administrator</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Platform Administrator.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/cloud-computing/certificados/2025.06.11 · Databricks Academy · Databricks Accredited Platform Administrator.png" alt="Cloud" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Databricks Academy</p>
                  <p><strong>Curso:</strong> Databricks Accredited Platform Administrator</p>
                  <p><strong>Carga Horária:</strong> 8 h 36 min</p>
                  <p><strong>Data de Conclusão:</strong> 11 de junho de 2025 (Issue: June 11, 2025 / Expiration: June 11, 2026)</p>
                  <p><strong>Código:</strong> 3906926c-3c2a-4a78-9d83-7e84ed580cea#acc.6qvTaop8</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://credentials.databricks.com/3906926c-3c2a-4a78-9d83-7e84ed580cea#acc.6qvTaop8" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Green Belt - Lean Six Sigma</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.09.08 · Domus Lean Seis Sigma · Lean Seis Sigma Green Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.09.08 · Domus Lean Seis Sigma · Lean Seis Sigma Green Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Domus Lean Seis Sigma</p>
                  <p><strong>Curso:</strong> Lean Seis Sigma Green Belt</p>
                  <p><strong>Carga Horária:</strong> 40 h</p>
                  <p><strong>Data de Conclusão:</strong> 08 de setembro de 2024</p>
                  <p><strong>Código:</strong> #DLSSGB00006</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">Yellow Belt - Lean Six Sigma</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2026.01.15 · Produzindo Engenharia · Yellow Belt em Lean Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2026.01.15 · Produzindo Engenharia · Yellow Belt em Lean Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Produzindo Engenharia</p>
                  <p><strong>Curso:</strong> Yellow Belt em Lean Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 15 h</p>
                  <p><strong>Data de Conclusão:</strong> 15 de janeiro de 2026</p>
                  <p><strong>Código:</strong> 2DRWLM-CE000256</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · VMEdu, Inc · Six Sigma Yellow Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · VMEdu, Inc · Six Sigma Yellow Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> VMEdu, Inc</p>
                  <p><strong>Curso:</strong> Six Sigma Yellow Belt</p>
                  <p><strong>Carga Horária:</strong> 20 h</p>
                  <p><strong>Data de Conclusão:</strong> 12 de novembro de 2025</p>
                  <p><strong>Código:</strong> 1125351</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-RogérioClyntonRibeiro-1125351.pdf" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.03.01 · FM2S · Certificação Lean Six Sigma Yellow Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.03.01 · FM2S · Certificação Lean Six Sigma Yellow Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> FM2S Educação e Consultoria</p>
                  <p><strong>Curso:</strong> Lean Six Sigma Yellow Belt</p>
                  <p><strong>Carga Horária:</strong> 24 h</p>
                  <p><strong>Data de Conclusão:</strong> 01 de março de 2024</p>
                  <p><strong>Código:</strong> 328571</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-role">White Belt - Lean Six Sigma</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">

              <hr class="decorative-line-cert decorative-line-sup">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2026.01.28 · RL Associados · Formação White Belt Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2026.01.28 · RL Associados · Formação White Belt Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> RL & Associados</p>
                  <p><strong>Curso:</strong> Formação White Belt Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 2 h</p>
                  <p><strong>Data de Conclusão:</strong> 28 de janeiro de 2026</p>
                  <p><strong>Código:</strong> 119337</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · Nortegubisian · Six Sigma White Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · Nortegubisian · Six Sigma White Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Nortegubisian</p>
                  <p><strong>Curso:</strong> Six Sigma White Belt</p>
                  <p><strong>Carga Horária:</strong> 4 h</p>
                  <p><strong>Data de Conclusão:</strong> 12 de novembro de 2025</p>
                  <p><strong>Código:</strong> 0001124</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · Escola EDTI · Certificação White Belt em Lean Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.12 · Escola EDTI · Certificação White Belt em Lean Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Escola EDTI</p>
                  <p><strong>Curso:</strong> Certificação White Belt em Lean Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 8 h</p>
                  <p><strong>Data de Conclusão:</strong> 12 de novembro de 2025</p>
                  <p><strong>Código:</strong> EDTIe62b390b3ae00a98c0df96b4b0d6c6c7</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.11 · Council for Six Sigma Certification · Lean Six Sigma White Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.11 · Council for Six Sigma Certification · Lean Six Sigma White Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Council for Six Sigma Certification</p>
                  <p><strong>Curso:</strong> Lean Six Sigma White Belt</p>
                  <p><strong>Carga Horária:</strong> 8 h</p>
                  <p><strong>Data de Conclusão:</strong> 11 de novembro de 2025</p>
                  <p><strong>Código:</strong> 7th0wCFtCy</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.11 · Frons Educação · White Belt Lean Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2025.11.11 · Frons Educação · White Belt Lean Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Frons Educação</p>
                  <p><strong>Curso:</strong> White Belt Lean Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 10 h</p>
                  <p><strong>Data de Conclusão:</strong> 11 de novembro de 2025</p>
                  <p><strong>Código:</strong> 733D78A22E-1451E0F1F-144C20C72</p>
                  <p><strong>Verificação:</strong>
                  <a href="https://frons.com.br/verificacao-certificados/733D78A22E-1451E0F1F-144C20C72/" target="_blank" class="cert-link-verify">Verificar Autenticidade</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.02.29 · Produzindo Engenharia · White Belt Lean Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.02.29 · Produzindo Engenharia · White Belt Lean Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> Produzindo Engenharia</p>
                  <p><strong>Curso:</strong> White Belt Lean Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 6 h</p>
                  <p><strong>Data de Conclusão:</strong> 29 de fevereiro de 2024</p>
                  <p><strong>Código:</strong> WBFEV240077</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">

              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.02.28 · FM2S · Certificação Lean Six Sigma White Belt.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2024.02.28 · FM2S · Certificação Lean Six Sigma White Belt.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> FM2S Educação e Consultoria</p>
                  <p><strong>Curso:</strong> Lean Six Sigma White Belt</p>
                  <p><strong>Carga Horária:</strong> 8 h</p>
                  <p><strong>Data de Conclusão:</strong> 28 de fevereiro de 2024</p>
                  <p><strong>Código:</strong> 327940</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
              <a href="#" onclick="abrirCertificado('/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2021.11.21 · RL Associados · White Belt - Six Sigma.png'); return false;">
                  <img src="/portfolio/formacoes-complementares/gestao-da-qualidade/certificados/2021.11.21 · RL Associados · White Belt - Six Sigma.png" alt="Gestão da Qualidade" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> RL & Associados</p>
                  <p><strong>Curso:</strong> White Belt - Six Sigma</p>
                  <p><strong>Carga Horária:</strong> 3 h 30 min</p>
                  <p><strong>Data de Conclusão:</strong> 21 de novembro de 2021</p>
                  <p><strong>Código:</strong> Inaplicável</p>
                  <p><strong>Verificação:</strong>
                  <a class="cert-no-verify">Indisponível</a>
                  </p>
              </div>
      
              <hr class="decorative-line-cert">
      
          </div>
      </div>

    `
  },

// =============================================== Projetos 5.0 ===========================================

  projetos50: {
    pageTitle: "Projetos 5.0 | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-projetos-50.png",
    title: "Projetos 5.0",
    icon: "/assets/icons/icone-projetos-50.png",
    showViewModes: false,
    hasCategory: true,
    content: `
      <div class="tech-subtitle-sup"><p>Os Projetos estão organizados por segmento estratégico.<br>
                                        Ao selecionar uma categoria, são apresentados os projetos desenvolvidos, com informações relevantes sobre contexto, soluções implementadas, tecnologias aplicadas e resultados alcançados.</p></div>
      
      <div class="cert-links">
      
        <!-- Comercial & Receita -->
        <!-- Primeiro, porque essas áreas são responsáveis por gerar receita e demanda. 
             Começar com Comercial e Vendas mostra foco no resultado financeiro da empresa. -->
        <a href="#" data-category="powerBiComercial">Comercial</a>
        <a href="#" data-category="#">Vendas</a>
        <!-- Marketing, Produto e SAC apoiam a geração de receita, criando valor e experiência para o cliente. -->
        <a href="#" data-category="#">Marketing</a>
        <a href="#" data-category="#">Produto</a>
        <a href="#" data-category="#">Serviço de Atendimento ao Consumidor</a>
        <!-- Faturamento vem por último neste grupo, pois é a execução financeira da receita gerada. -->
        <a href="#" data-category="powerBiFaturamento">Faturamento</a>
      
        <!-- Financeiro & Controladoria -->
        <!-- Depois da receita, vem o controle financeiro. Mostra quem gerencia o dinheiro da empresa. -->
        <a href="#" data-category="powerBiFinanceiro">Financeiro</a>
        <a href="#" data-category="#">Contabilidade</a>
        <a href="#" data-category="#">Custos</a>
        <a href="#" data-category="#">Orçamento</a>
        <a href="#" data-category="#">Investimentos</a>
        <a href="#" data-category="#">Receitas</a>
      
        <!-- Operações & Cadeia de Suprimentos -->
        <!-- Depois do financeiro, entram as operações, que garantem que produtos e serviços 
             sejam produzidos, armazenados e entregues corretamente. -->
        <a href="#" data-category="#">Produção</a>
        <a href="#" data-category="powerBiLogistica">Logística</a>
        <a href="#" data-category="#">Estoque</a>
        <a href="#" data-category="#">Ativos</a>
        <a href="#" data-category="#">Quebra de Equipamentos</a>
      
        <!-- Pessoas & Compliance -->
        <!-- Em seguida, RH e compliance entram para mostrar suporte institucional, 
             gestão de pessoas e governança organizacional. -->
        <a href="#" data-category="powerBiRecursosHumanos">Recursos Humanos</a>
        <a href="#" data-category="#">Segurança do Trabalho</a>
        <a href="#" data-category="#">Jurídico</a>
      
        <!-- Qualidade & Governança -->
        <!-- Projetos de qualidade e governança de dados garantem confiabilidade e melhoria contínua. -->
        <a href="#" data-category="#">Qualidade do Produto</a>
        <a href="#" data-category="#">Qualidade de Dados</a>
      
        <!-- Setoriais -->
        <!-- Por último, projetos setoriais ou específicos, que não pertencem diretamente 
             a uma área empresarial, mas são relevantes para análise ou pesquisa. -->
        <a href="#" data-category="#">Acidentes em Rodovias</a>
      
      </div>
    `
  },

// ========================================= Impactos e Resultados ========================================

  impactosResultados: {
    pageTitle: "Impactos e Resultados | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-impactos-e-resultados.png",
    title: "Impactos e Resultados",
    icon: "/assets/icons/icone-impactos-e-resultados.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <div class="tech-subtitle-sup"><p>Resultados que vão além da tecnologia, construídos pela integração entre dados, processos e contexto organizacional, 
                                        gerando impacto real, clareza decisória e eficiência sustentável.</p></div>
                                        
      <p>
          Ao longo da minha trajetória profissional, a tecnologia sempre foi utilizada como meio, e não como fim. Os projetos e iniciativas desenvolvidos tiveram como
          objetivo central gerar impacto real, seja por meio da melhoria de processos, da organização da informação, do suporte à tomada de decisão ou da criação de soluções
          alinhadas ao contexto de cada organização. Os resultados apresentados a seguir refletem ganhos concretos observados em diferentes cenários de atuação.
      </p>
      
      <div class="experience experience--compact">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Processos</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-subtitle">Estruturação, padronização e melhoria contínua de fluxos operacionais e administrativos.</div>
            <div class="tech-title">Situação Inicial:</div>
            <div class="tech-desc">
                Ambientes com processos pouco estruturados, alto grau de retrabalho, uso excessivo de controles manuais e ausência de padronização na organização das informações.
            </div>
        
            <div class="tech-title">Abordagem Adotada:</div>
            <div class="tech-desc">
                Mapeamento de rotinas, reorganização de fluxos operacionais e aplicação de soluções tecnológicas adequadas à realidade de cada contexto, priorizando simplicidade, clareza e sustentabilidade das soluções ao longo do tempo.
            </div>
        
            <div class="tech-title">Resultado Alcançado:</div>
            <div class="tech-desc">
                Redução de retrabalho, maior previsibilidade operacional, padronização de procedimentos e melhoria significativa na organização dos processos administrativos e técnicos.
            </div>
      
          </div>
      </div>

      <div class="experience experience--compact">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Informações e Tomadas de Decisões</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-subtitle">Transformação de dados em informação clara, confiável e acionável para suporte estratégico.</div>
            <div class="tech-title">Situação Inicial:</div>
            <div class="tech-desc">
                Dados dispersos, planilhas desconectadas, dificuldade de acesso à informação confiável e ausência de indicadores claros para apoiar decisões.
            </div>
        
            <div class="tech-title">Abordagem Adotada:</div>
            <div class="tech-desc">
                Estruturação de bases de dados, consolidação de múltiplas fontes de informação e desenvolvimento de soluções analíticas e visuais que transformam dados brutos em informação compreensível e acionável.
            </div>
        
            <div class="tech-title">Resultado Alcançado:</div>
            <div class="tech-desc">
                Maior clareza informacional, visão integrada dos dados, apoio efetivo à tomada de decisão e substituição de controles manuais por painéis e indicadores consistentes.
            </div>
      
          </div>
      </div>

      <div class="experience experience--compact">
          <div class="exp-header exp-header--compact">
              <button class="exp-toggle exp-toggle--compact">▸</button>
              <span class="exp-role">Tecnológico</span>
          </div>
          <div class="exp-details">
      
            <div class="tech-subtitle">Aplicação de soluções tecnológicas alinhadas ao contexto, com foco em eficiência, integração e sustentabilidade.</div>
            <div class="tech-title">Situação Inicial:</div>
            <div class="tech-desc">
                Instituições com desafios na gestão da informação, suporte técnico reativo e dificuldades na utilização eficiente de recursos tecnológicos.
            </div>
        
            <div class="tech-title">Abordagem Adotada:</div>
            <div class="tech-desc">
                Atuação próxima às equipes administrativas, educacionais e usuários finais, com foco na organização da informação, no suporte acessível e na disseminação de uma cultura orientada ao uso consciente da tecnologia e dos dados.
            </div>
        
            <div class="tech-title">Resultado Alcançado:</div>
            <div class="tech-desc">
                Melhoria na gestão educacional e administrativa, maior autonomia dos usuários, melhor aproveitamento dos recursos tecnológicos disponíveis e fortalecimento da cultura organizacional orientada à informação.
            </div>
      
          </div>
      </div>
                          
      <div class="tech-title"><p>Síntese e Continuidade</p></div>
      
      <p>
          Os impactos apresentados são resultado direto da aplicação prática de conhecimentos técnicos, analíticos e estratégicos, construídos ao longo da minha trajetória
          profissional. Essas iniciativas se materializam em projetos que integram tecnologia, dados e contexto organizacional, apresentados em detalhes na seção Projetos 5.0.
      </p>
    `
  },

// ======================================== Produções Intelectuais ========================================

  producoesIntelectuais: {
    pageTitle: "Produções Intelectuais | Rogério Clynton Ribeiro",
    favicon: "/assets/icons/icone-producoes-intelectuais.png",
    title: "Produções Intelectuais",
    icon: "/assets/icons/icone-producoes-intelectuais.png",
    showViewModes: false,
    hasCategory: false,
    content: `
      <div class="tech-subtitle-sup"><p>Artigos científicos apresentados em seminários acadêmicos para as áreas de inclusão social, inclusão digital, tecnologia da informação, dados, produção e sustentabilidade, incluindo economia circular e Environmental, Social and Governance (ESG).</p></div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">Computação Quântica: a evolução da Tecnologia da Informação</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">

              <hr class="decorative-line-cert decorative-line-sup">

              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Computação Quântica (a revolução da Tecnologia da Informação – uma Revisão Bibliográfica).png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Computação Quântica (a revolução da Tecnologia da Informação – uma Revisão Bibliográfica).png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>

              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Computação Quântica: a revolução da Tecnologia da Informação – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 26 de outubro de 2023</p>
              </div>

              <hr class="decorative-line-cert decorative-line-sup">

              <h4>
                  Resumo
              </h4>

              <p>
                  Ao passo que a sociedade evolui, as tecnologias acompanham tal evolução e com isso surgem novos campos de estudos para aprimorar conhecimentos, mas sobretudo
                  para alavancar a evolução da ciência e revolucionar as indústrias para promover mais segurança para os cidadãos, maior precisão no desenvolvimento de produtos e
                  otimizar a qualidade de dados e informações. Da segunda metade do século XX até os dias atuais a tecnologia da informação já evoluiu sistematicamente, mas estima-se
                  que a Computação Clássica (computadores digitais) esteja próxima do seu limite de evolução e esse limite vem contribuindo para o investimento em um novo horizonte
                  que trata a Computação Quântica (computadores quânticos) que desbrava um novo conceito de computação com hardwares baseados em Mecânica Quântica.
              </p>

              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Computação Quântica (A Evolução da Tecnoologia da Informação).pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">A atuação do Engenheiro de Produção na Indústria 4.0</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · A atuação do Engenheiro de Produção na Indústria 4.0 – uma Revisão Bibliográfica.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · A atuação do Engenheiro de Produção na Indústria 4.0 – uma Revisão Bibliográfica.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> A atuação do Engenheiro de Produção na Indústria 4.0 – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 26 de outubro de 2023</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <h4>
                  Resumo
              </h4>
              <p>
                  Uma vez que haja a compreensão de que o Engenheiro de Produção é formado para ser gestor, busca-se demonstrar onde esse profissional tem papel fundamental para
                  implantação, condução e operação da Indústria 4.0, visto que a quarta revolução industrial é uma realidade e as organizações estão em busca de se adequarem para
                  não perderem a competitividade, nem quedas na produtividade e consequentemente não serem prejudicadas, principalmente financeiramente. Essa demonstração se
                  apresenta neste trabalho que é resultado de revisão bibliográfica que buscou apontar a evolução até os dias atuais da chamada quarta revolução industrial, bem como as
                  responsabilidades e o perfil do Engenheiro de Produção, sem desprezar os principais desafios que as organizações devem enfrentar sob a gestão desse profissional que
                  tem papel fundamental para a mudança cultural no que tange a capacitação sobre a tecnologia digital e reestruturação dos parques industriais.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/A Atuação do Engenheiro de Produção na Indústria 4.0.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">Análise da demanda por trabalho em <i>Home Office</i></span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Análise da demanda por trabalho em Home Office – uma Revisão Bibliográfica.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Análise da demanda por trabalho em Home Office – uma Revisão Bibliográfica.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Análise da demanda por trabalho em Home Office – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 26 de outubro de 2023</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  Com a popularização da internet e computadores a partir das décadas de 1980 e 1990, as organizações começaram a migrar postos de trabalho para o <i>Home Office</i>. Essa
                  prática que começou discretamente vem sendo alavancada pelo aumento populacional que está cada vez mais consciente dos benefícios da qualidade de vida
                  aliada ao trabalho e principalmente motivada pelo avanço das tecnologias eletrônica e da informação, impulsionado nos últimos anos por consequência da pandemia do
                  COVID-19. Não é uma tarefa fácil essa migração, considerando que há de se ter um alto nível de disciplina com disposição para rever a cultura profissional e entender que
                  é preciso ter um espaço dedicado ao trabalho da mesma forma que se estivesse nos limites da organização. Esse formato de trabalho apresenta vantagens tanto para as
                  organizações quanto para os colaboradores e algumas organizações oferecem diversos benefícios para seus colaboradores.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Análise da Demanda por Trabalho em Home Office.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">As principais Ferramentas Computacionais aplicadas à Engenharia de Produção</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · As principais Ferramentas Computacionais aplicadas à Engenharia de Produção – uma Revisão Bibliográfica.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · As principais Ferramentas Computacionais aplicadas à Engenharia de Produção – uma Revisão Bibliográfica.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> As principais Ferramentas Computacionais aplicadas à Engenharia de Produção – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 26 de outubro de 2023</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  O Engenheiro de Produção tem a competência de atuar nos mais variados setores de uma organização com foco na produtividade – reduzindo custos e desperdícios e
                  aumentando o lucro – e para ter sucesso no âmbito de suas atribuições não basta ter uma equipe capacitada e qualificada, é primordial o auxílio de Ferramentas
                  Computacionais em nível de produção, gestão, simulação e análise de indicadores. Esse artigo que é uma revisão bibliográfica apresenta as principais Ferramentas
                  Computacionais que auxiliam o Engenheiro de Produção, bem como as suas aplicações em diversos setores das organizações, considerando também as
                  ferramentas voltadas para Sustentabilidade e <i>ESG – Environmental Social and Governance</i>, que não podem faltar em nenhum segmento empresarial.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/As Principais Ferramentas Computacionais Aplicadas à Engenharia de Produção.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">Utilização de resíduos como matéria-prima na indústria</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Utilização de resíduos como matéria-prima na indústria – uma Revisão Bibliográfica.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Utilização de resíduos como matéria-prima na indústria – uma Revisão Bibliográfica.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Utilização de resíduos como matéria-prima na indústria – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 24 de outubro de 2023</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  Diante o aumento exponencial da sociedade, cresce o consumo e com isso a preocupação com o meio ambiente. Da segunda metade do século XX em diante os
                  órgãos fiscalizadores em âmbito mundial passaram a aprimorar os dispositivos de combate a degradação do meio ambiente explicitando através de indicadores os
                  malefícios para o meio ambiente por consequência da desenfreada extração de Matérias-Primas para a fabricação de produtos e prestação de serviços. Por meio da
                  evolução das políticas de Sustentabilidade mudando a direção sistemática de Economia Linear para Economia Circular, as organizações passaram a buscar
                  alternativas para aquisição de Matérias-Primas, através principalmente da reciclagem, mas também através da substituição de Matérias-Primas não recicláveis por aquelas
                  que são recicláveis. Com isso os Resíduos voltam para o processo fabril da própria organização ou é destinado para organizações de outros segmentos.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Utilização de Resíduos como Matéria-Prima na Indústria.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2023</span>
              <span class="exp-role">Ensaio sobre perspectivas da transição da Indústria 4.0 para a Indústria 5.0</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Ensaio sobre perspectivas da transição da Indústria 4.0 para a Indústria 5.0 – uma Revisão Bibliográfica.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2023.11.22 · UBM - Centro Universitário de Barra Mansa · Ensaio sobre perspectivas da transição da Indústria 4.0 para a Indústria 5.0 – uma Revisão Bibliográfica.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> VI Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Ensaio sobre perspectivas da transição da Indústria 4.0 para a Indústria 5.0 – uma Revisão Bibliográfica</p>
                  <p><strong>Data de Apresentação:</strong> 24 de outubro de 2023</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  Analogamente se observa a redução do tempo de intervalo entre as revoluções industriais e esse fenômeno se consolida na percepção do intervalo entre a quarta
                  revolução industrial e a quinta. A quarta revolução industrial teve seu início oficializado em 2011 e apenas 6 anos depois, em 2017, começaram os debates sobre o que seria
                  a próxima revolução industrial que alguns autores descrevem como a evolução da Indústria 4.0. O principal foco da Indústria 4.0 é automatizar ao máximo os processos
                  produtivos que é contraposto nos debates para a próxima revolução industrial que levará de volta para os parques fabris os recursos humanos, porém, especializados.
                  A tendência é conciliar a robotização com o <i>feeling</i> humano promovendo sinergia entre os dois mundos.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Ensaio Sobre Perspectivas da Transição da Indústria 4.0 para a Indústria 5.0.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2022</span>
              <span class="exp-role">Os impactos da aplicação da Lei Geral de Proteção de Dados - LGPD</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2022.12.08 · UBM - Centro Universitário de Barra Mansa · Os impactos da aplicação da Lei Geral de Proteção de Dados – LGPD.png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2022.12.08 · UBM - Centro Universitário de Barra Mansa · Os impactos da aplicação da Lei Geral de Proteção de Dados – LGPD.png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> V Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Os impactos da aplicação da Lei Geral de Proteção de Dados – LGPD</p>
                  <p><strong>Data de Apresentação:</strong> 26 de novembro de 2022</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  Em vista da demanda mundial pelo consumo de tecnologia da informação e a utilização cada vez mais maciça dos recursos tecnológicos, percebeu-se a
                  necessidade da criação e regulamentação de normas para atender o setor. A criação da LGPD (Lei Geral de Proteção de Dados) atende aos anseios da
                  sociedade para a proteção dos seus dados de forma a impedir que sua privacidade seja violada. Este trabalho que é resultado de pesquisa bibliográfica apresenta
                  detalhes sobre essa lei, os setores onde ela se aplica e os deveres dos envolvidos. Para atender as determinações se faz necessário o entendimento de um ponto
                  específico sobre a TI (Tecnologia da Informação) que se refere à segurança da informação, conforme é explanado no decorrer do resultado da pesquisa.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Os Impactos da Aplicação da Lei Geral de Proteção de Dados - LGPD.pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2022</span>
              <span class="exp-role">Vendas Especiais: lucratividade advinda de Resíduos Recicláveis</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2022.12.08 · UBM - Centro Universitário de Barra Mansa · Vendas Especiais (lucratividade advinda de Resíduos Recicláveis).png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2022.12.08 · UBM - Centro Universitário de Barra Mansa · Vendas Especiais (lucratividade advinda de Resíduos Recicláveis).png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> V Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Vendas Especiais: lucratividade advinda de Resíduos Recicláveis</p>
                  <p><strong>Data de Apresentação:</strong> 26 de novembro de 2022</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
              
              <h4>
                  Resumo
              </h4>
              <p>
                  Vendas Especiais é uma das terminologias utilizadas para um setor que tem papel importante na cadeia de gestão de resíduos. Em busca do entendimento dessa cadeia
                  foi realizada uma pesquisa de campo numa organização que opera com esse setor com o objetivo de apontar onde se aplicam as políticas voltadas para a
                  sustentabilidade que é um dos grandes anseios da sociedade na atualidade, associado aos benefícios para a organização e implantação. O resultado da pesquisa
                  apresentou que não se tratava apenas do cumprimento das determinações dos órgãos fiscalizadores, mas sim de uma reestruturação que abrangeria mudança cultural
                  organizacional, descarte correto dos resíduos não recicláveis em aterros sanitários. No caso daqueles recicláveis ora denominados de co-produtos, o beneficiamento para
                  outras organizações como matéria-prima, aumentariam a satisfação financeira dos <i>shareholders</i>.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Vendas Especiais (Lucratividade Advinda de Resíduos Recicláveis).pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2021</span>
              <span class="exp-role">Ensino a Distância: uma ferramenta de Inclusão Social</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2021.11.19 · UBM - Centro Universitário de Barra Mansa · Ensino a Distância (uma ferramenta de Inclusão Social).png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2021.11.19 · UBM - Centro Universitário de Barra Mansa · Ensino a Distância (uma ferramenta de Inclusão Social).png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> IV Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> Ensino a Distância: uma ferramenta de Inclusão Social</p>
                  <p><strong>Data de Apresentação:</strong> 26 de outubro de 2021</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <h4>
                  Resumo
              </h4>
              <p>
                  A pandemia do COVID-19 que se alastrou desde dezembro de 2019, teve por
                  consequência que todas as pessoas mundialmente mudaram as rotinas habituais. As sociedades em todos os setores buscaram alternativas para minimizar os
                  impactos e levar conhecimento para os cidadãos. A Educação à Distância (EaD) tomou conta dos debates e se apresentou como uma alternativa de qualificar as
                  pessoas sem o convívio social. Este trabalho apresenta o resultado de uma pesquisa bibliográfica e documental realizada no período compreendido entre
                  agosto/2020 a julho de 2021. Os resultados indicaram que anteriormente a pandemia a população já buscava no EaD uma fonte de aprimoramento profissional,
                  principalmente em pessoas com rotinas variáveis de horário que não dispunham diariamente de tempo fixo para realizarem suas próprias qualificações. Além disso, a
                  evolução do EaD se consolidou ao presencial impulsionado, também, através dessa nova ordem social e se disseminou tanto nos setores públicos quanto privados.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/Ensino a Distância (Uma Ferramenta de Inclusão Social).pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>
      
      <div class="experience">
          <div class="exp-header">
              <span class="exp-period">2020</span>
              <span class="exp-role">EaD: a nova onda da educação - Virtudes e Desafios</span>
              <button class="exp-toggle">▸</button>
          </div>
          <div class="exp-details">
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <a href="#" onclick="abrirCertificado('/portfolio/producoes-intelectuais/certificados/2020.08.28 · UBM - Centro Universitário de Barra Mansa · EaD (a nova onda da educação – Virtudes e Desafios).png'); return false;">
                  <img src="/portfolio/producoes-intelectuais/certificados/2020.08.28 · UBM - Centro Universitário de Barra Mansa · EaD (a nova onda da educação – Virtudes e Desafios).png" alt="Artigo Científico" class="cert-thumb cert-thumb--accordion">
              </a>
              <div>
                  <p><strong>Instituição:</strong> UBM - Centro Universitário de Barra Mansa</p>
                  <p><strong>Evento Acadêmico:</strong> III Seminário de Pesquisa e Iniciação Científica - UBM</p>
                  <p><strong>Título:</strong> EaD: a nova onda da educação – Virtudes e Desafios</p>
                  <p><strong>Data de Apresentação:</strong> 27 de agosto de 2020</p>
              </div>
      
              <hr class="decorative-line-cert decorative-line-sup">
      
              <h4>
                  Resumo
              </h4>
              <p>
                  A modalidade de aula de Ensino à Distância (EaD) tomou conta de debates na sociedade no que diz respeito à educação de um modo geral nos últimos meses do ano de 2020.
                  Este artigo visa debater o assunto trazendo um pouco de história de quando e como surgiu o EaD, o perfil dos alunos que procuram este tipo de aula indicando os desafios
                  socioculturais, ferramentas computacionais apropriadas e as soluções. A metodologia utilizada se baseia em pesquisa bibliográfica e documental a respeito deste modo de
                  ensinar e aprender utilizando os recursos disponíveis na mídia digital atualmente, na qual se alicerça o EaD. Concluiu-se que muitos desafios ainda existem e outros ainda
                  aflorarão nesta forma educacional uma vez que tanto professores quanto alunos estão, por força de uma pandemia instaurada, desbravando os desafios e tendo como meta
                  principal trazer cultura, informação e principalmente educação de qualidade a todos.
              </p>
      
              <a href="javascript:void(0);" onclick="abrirArtigo('/portfolio/producoes-intelectuais/artigos-cientificos/EaD (A Nova Onda da Educação - Virtudes e Desafios).pdf')" class="cert-link-verify link-artigo-destaque">
                 Acesse o artigo completo.
              </a>
          </div>
      </div>

    `
  },
};
