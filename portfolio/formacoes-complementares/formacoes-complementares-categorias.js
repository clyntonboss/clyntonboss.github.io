/**
 * 📄 formacoes-complementares.js
 *
 * Este arquivo centraliza todo o conteúdo das formações complementares do portfólio.
 * Cada chave do objeto principal representa uma formação ou área de estudo (ex: 'analiseDados').
 *
 * Estrutura de cada formação:
 *  - title          → Título da formação exibido como subtítulo
 *  - dataset        → Caminho do arquivo JS que contém o dataset dos cursos da formação
 *  - showViewModes  → Booleano que indica se os modos de visualização (block, grid, list, flow) devem aparecer
 *  - content        → HTML da formação, que será injetado dinamicamente no container principal (#section-content)
 *
 * Observações importantes:
 *  - Todo o HTML da propriedade 'content' é tratado como innerHTML, podendo conter subtítulos, blocos de cursos,
 *    navegação (primeiro, anterior, próximo, último), listas, grids ou fluxos de cursos, linhas decorativas e textos informativos.
 *  - A chave da formação (ex: 'analiseDados') é utilizada no JS para carregar datasets, atualizar subtítulo, aplicar modos de visualização
 *    e controlar navegação entre cursos.
 *  - Este arquivo não realiza lógica de animação ou navegação; ele apenas define o conteúdo e metadados das formações.
 */

const categoriasFormacoesComplementares = {

// 🔹 ============================================ Análise de Dados ========================================== 🔹
  analiseDados: {
    title: "Análise de Dados",
    dataset: "/portfolio/formacoes-complementares/analise-de-dados/analise-de-dados-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Análise de Dados, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos analíticos, estatística, visualização de dados, ferramentas de BI e práticas aplicadas à tomada de decisão orientada por dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>

          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Análise de Dados consolidaram uma base técnica voltada à coleta, tratamento, exploração e interpretação de dados.<br>
                                        O domínio desses conceitos sustenta atividades de análises consistentes, indicadores confiáveis e soluções analíticas aplicadas a processos, negócios e tomada de decisão em diferentes contextos.</p></div>
    `
  },

// 🔹 ============================================= Banco de Dados =========================================== 🔹
  bancoDados: {
    title: "Banco de Dados",
    dataset: "/portfolio/formacoes-complementares/banco-de-dados/banco-de-dados-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Banco de Dados, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos, modelagem, elaboração de consultas, administração e aplicação de boas práticas no gerenciamento eficiente de sistemas de dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Banco de Dados consolidaram uma base técnica voltada à estruturação, consulta e gestão de dados.<br>
                                        O domínio desses conceitos sustenta atividades de análise de dados, inteligência de negócios e desenvolvimento de sistemas, garantindo integridade, desempenho e confiabilidade da informação ao longo dos processos em diferentes contextos.</p></div>
    `
  },

// 🔹 ================================================ Big Data ============================================== 🔹
  bigData: {
    title: "Big Data",
    dataset: "/portfolio/formacoes-complementares/big-data/big-data-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Big Data, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, arquiteturas, tecnologias e práticas relacionadas ao processamento, armazenamento e análise de grandes volumes de dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Big Data consolidaram uma base técnica voltada arquiteturas escaláveis, com foco em desempenho e confiabilidade.<br>
                                        O domínio desses conceitos sustenta atividades de análise de dados e BI, especialmente em cenários que demandam processamento distribuído, integração de múltiplas fontes e tratamento eficiente de grandes volumes de informação.</p></div>
    `
  },

// 🔹 ========================================= Inteligência Artificial ====================================== 🔹
  inteligenciaArtificial: {
    title: "Inteligência Artificial",
    dataset: "/portfolio/formacoes-complementares/inteligencia-artificial/inteligencia-artificial-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Inteligência Artificial, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos fundamentais, aplicações práticas e o uso responsável de técnicas de Inteligência Artificial no apoio à análise, automação e tomada de decisão.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Inteligência Artificial consolidaram uma base técnica voltada ao entendimento de modelos, técnicas e suas limitações.<br>
                                        O domínio desses conceitos sustenta atividades de análise de dados, automação de processos e apoio à decisão, considerando aspectos técnicos, éticos e de uso responsável da tecnologia.</p></div>
    `
  },

// 🔹 =========================================== Matemática Aplicada ======================================== 🔹
  matematica: {
    title: "Matemática Aplicada",
    dataset: "/portfolio/formacoes-complementares/matematica/matematica-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Matemática, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos matemáticos essenciais à modelagem computacional, incluindo estatística inferencial, teoria das probabilidades, álgebra linear aplicada, cálculo diferencial e integral, além de métodos de otimização.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Matemática consolidaram uma base técnica voltada à compreensão estrutural dos algoritmos e capacidade de análise crítica.<br>
                                        O domínio desses conceitos sustenta atividades de análise crítica de modelos e métricas, fortalece a interpretação estatística dos resultados e embasa decisões técnicas fundamentadas em rigor analítico, reduzindo a dependência de abordagens puramente instrumentais.</p></div>
    `
  },

// 🔹 ============================================ Data Storytelling ========================================= 🔹
  dataStorytelling: {
    title: "Data Storytelling",
    dataset: "/portfolio/formacoes-complementares/data-storytelling/data-storytelling-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Data Storytelling, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem técnicas de comunicação de dados, construção de narrativas visuais e tradução de análises em mensagens claras e orientadas à tomada de decisão.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Data Storytelling consolidaram uma base técnica voltada à análises e indicadores em narrativas compreensíveis e relevantes.<br>
                                        O domínio desses conceitos sustenta atividades de visualizações eficazes, apresentações executivas e painéis analíticos orientados à clareza, contexto e impacto na tomada de decisão.</p></div>
    `
  },

// 🔹 ============================================ Cloud Computing =========================================== 🔹
  cloud: {
    title: "Cloud Computing",
    dataset: "/portfolio/formacoes-complementares/cloud-computing/cloud-computing-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Cloud Computing, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, serviços e boas práticas relacionadas ao uso de ambientes em nuvem para armazenamento, processamento e disponibilização de soluções orientadas a dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Cloud Computing consolidaram uma base técnica voltada à serviços e modelos de uso em ambientes de computação em nuvem.<br>
                                        O domínio desses conceitos sustenta atividades de implementação e o suporte a soluções analíticas, sistemas e serviços de dados, integrando infraestrutura e aplicações de forma segura e orientada às necessidades do negócio, com foco em escalabilidade, disponibilidade e eficiência.</p></div>
    `
  },

// 🔹 ========================================== Sistemas Operacionais ======================================= 🔹
  sistemasOperacionais: {
    title: "Sistemas Operacionais",
    dataset: "/portfolio/formacoes-complementares/sistemas-operacionais/sistemas-operacionais-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Sistemas Operacionais, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos, uso e boas práticas na administração de sistemas operacionais, com foco em ambientes computacionais utilizados em soluções de dados e sistemas.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Sistemas Operacionais consolidaram uma base técnica voltada à administração e interação entre hardware e software.<br>
                                        O domínio desses conceitos sustenta atividades de infraestrutura, suporte a sistemas, ambientes de dados e integração de soluções, garantindo estabilidade, desempenho e confiabilidade operacional.</p></div>
    `
  },

// 🔹 ========================================= Segurança da Informação ====================================== 🔹
  segurancaInformacao: {
    title: "Segurança da Informação",
    dataset: "/portfolio/formacoes-complementares/seguranca-da-informacao/seguranca-da-informacao-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Segurança da Informação, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem princípios, boas práticas e mecanismos voltados à proteção de dados, sistemas e informações em diferentes ambientes tecnológicos.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Segurança da Informação consolidaram uma base técnica voltada à proteção, confidencialidade e integridade da informação.<br>
                                        O domínio desses conceitos sustenta atividades do uso responsável de dados, conformidade com normas e mitigação de riscos em ambientes analíticos, sistemas e processos organizacionais.</p></div>
    `
  },

// 🔹 ============================================== Programação ============================================= 🔹
    programacao: {
    title: "Programação",
    dataset: "/portfolio/formacoes-complementares/programacao/programacao-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Programação, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos de lógica, linguagens e práticas de desenvolvimento aplicadas à automação, análise de dados e construção de soluções computacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Programação consolidaram uma base técnica voltada à aplicakão de lógica, organização e boas práticas de desenvolvimento.<br>
                                        O domínio desses conceitos sustenta atividades de automação de processos, análise de dados e integração de sistemas, ampliando a eficiência e a capacidade de resolução de problemas em contextos profissionais.</p></div>
    `
  },

// 🔹 ======================================= Robotic Process Automation ===================================== 🔹
  roboticProcessAutomation: {
    title: "Robotic Process Automation",
    dataset: "/portfolio/formacoes-complementares/robotic-process-automation/robotic-process-automation-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Robotic Process Automation (RPA), organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, ferramentas e práticas voltadas à automação de processos repetitivos e estruturados, integrando sistemas, dados e fluxos operacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em RPA consolidaram uma base técnica voltada à aplicação de soluções de automação orientadas a processos.<br>
                                        O domínio desses conceitos sustenta atividades de integração entre sistemas, tratamento automatizado de dados e melhoria contínua de fluxos de trabalho em diferentes contextos organizacionais, com foco em eficiência, padronização e redução de esforços operacionais.</p></div>
    `
  },

// 🔹 =========================================== Gestão de Projetos ========================================= 🔹
  gestaoProjetos: {
    title: "Gestão de Projetos",
    dataset: "/portfolio/formacoes-complementares/gestao-de-projetos/gestao-de-projetos-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão de Projetos, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, métodos e práticas voltadas ao planejamento, execução, acompanhamento e entrega de projetos em diferentes contextos organizacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão de Projetos consolidaram uma base técnica voltada à organização, priorização e condução de iniciativas com foco em prazo.<br>
                                        O domínio desses conceitos sustenta atividades de gestão de projetos analíticos, tecnológicos e de melhoria de processos, promovendo alinhamento entre objetivos, recursos e resultados esperados.</p></div>
    `
  },

// 🔹 ============================================ Metodologia Ágil ========================================== 🔹
  metodologiaAgil: {
    title: "Metodologia Ágil",
    dataset: "/portfolio/formacoes-complementares/metodologia-agil/metodologia-agil-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Metodologias Ágeis, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem princípios, frameworks e práticas ágeis aplicados à gestão de projetos, desenvolvimento de soluções e melhoria contínua de processos.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Metodologias Ágeis consolidaram uma base técnica voltada à práticas colaborativas, ciclos iterativos e adaptação contínua.<br>
                                        O domínio desses conceitos sustenta atividades de condução de projetos e iniciativas analíticas ou tecnológicas de forma incremental, promovendo alinhamento, transparência e entrega de valor ao longo do processo.</p></div>
    `
  },

// 🔹 ========================================== Gestão da Tecnologia ======================================== 🔹
  gestaoTecnologia: {
    title: "Gestão da Tecnologia",
    dataset: "/portfolio/formacoes-complementares/gestao-da-tecnologia/gestao-da-tecnologia-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão da Tecnologia, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, práticas e modelos voltados à gestão de recursos tecnológicos, alinhamento estratégico e apoio à tomada de decisão organizacional.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão da Tecnologia consolidaram uma base técnica voltada à visão integrada sobre o papel da tecnologia nas organizações.<br>
                                        O domínio desses conceitos sustenta atividades de tomada de decisão, priorização de investimentos e governança de soluções tecnológicas, promovendo alinhamento entre objetivos estratégicos, processos e recursos digitais.</p></div>
    `
  },

// 🔹 =========================================== Gestão de Operações ======================================== 🔹
  gestaoOperacoes: {
    title: "Gestão de Operações",
    dataset: "/portfolio/formacoes-complementares/gestao-de-operacoes/gestao-de-operacoes-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão de Operações, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem conceitos, métodos e práticas voltados ao planejamento, controle e melhoria de operações, integrando processos, pessoas, tecnologia e indicadores de desempenho.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão de Operações consolidaram uma base técnica voltada à otimização de processos operacionais.<br>
                                        O domínio desses conceitos sustenta atividades de análise de desempenho, melhoria contínua e tomada de decisão orientada a dados, promovendo eficiência, qualidade e alinhamento com os objetivos organizacionais.</p></div>
    `
  },

// 🔹 =========================================== Gestão da Qualidade ======================================== 🔹
  gestaoQualidade: {
    title: "Gestão da Qualidade",
    dataset: "/portfolio/formacoes-complementares/gestao-da-qualidade/gestao-da-qualidade-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão da Qualidade, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem princípios, métodos e ferramentas voltados ao controle, garantia e melhoria da qualidade, com foco em processos, desempenho e atendimento aos requisitos do cliente.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão da Qualidade consolidaram uma base técnica voltada à visão sistêmica sobre processos, variabilidade e desempenho.<br>
                                        O domínio desses conceitos sustenta atividades de aplicação de práticas de melhoria contínua, análise de causas, padronização e tomada de decisão orientada por dados, assegurando consistência, eficiência e conformidade organizacional.</p></div>
    `
  },

// 🔹 ============================================ Gestão de Pessoas ========================================= 🔹
  gestaoPessoas: {
    title: "Gestão de Pessoas",
    dataset: "/portfolio/formacoes-complementares/gestao-de-pessoas/gestao-de-pessoas-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão de Pessoas, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem práticas de liderança, desenvolvimento humano, comunicação, engajamento e gestão de equipes, com foco no alinhamento entre pessoas, processos e resultados organizacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão de Pessoas consolidaram uma base técnica voltada à colaboração e desenvolvimento de equipes de alto desempenho.<br>
                                        O domínio desses conceitos sustenta atividades de gestão eficaz de pessoas em ambientes orientados a dados, processos e melhoria contínua, promovendo engajamento, responsabilidade e alinhamento estratégico.</p></div>
    `
  },

// 🔹 ============================================ Gestão de Negócios ======================================== 🔹
  gestaoNegocios: {
    title: "Gestão de Negócios",
    dataset: "/portfolio/formacoes-complementares/gestao-de-negocios/gestao-de-negocios-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão de Negócios, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos estratégicos, tomada de decisão, análise de cenários, modelos de negócio e alinhamento entre estratégia, operações e resultados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão de Negócios consolidaram uma base técnica voltada à análise estratégica e funcionamento organizacional.<br>
                                        O domínio desses conceitos sustenta atividades de decisões orientadas a dados, otimização de processos e geração de valor, conectando visão estratégica, execução operacional e resultados mensuráveis.</p></div>
    `
  },

// 🔹 =========================================== Gestão de Marketing ======================================== 🔹
  gestaoMarketing: {
    title: "Gestão de Marketing",
    dataset: "/portfolio/formacoes-complementares/gestao-de-marketing/gestao-de-marketing-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão de Marketing, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem estratégias de marketing, comportamento do consumidor, posicionamento de marca, métricas de desempenho e análise de resultados, com foco em decisões orientadas a dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão de Marketing consolidaram uma base técnica voltada à estratégias de mercado e mensuração de resultados.<br>
                                        O domínio desses conceitos sustenta atividades de tomada de decisões baseada em dados, avaliação de campanhas e alinhamento entre objetivos de negócio, público-alvo e indicadores de performance.</p></div>
    `
  },

// 🔹 ============================================ Gestão Financeira ========================================= 🔹
  gestaoFinanceira: {
    title: "Gestão Financeira",
    dataset: "/portfolio/formacoes-complementares/gestao-financeira/gestao-financeira-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão Financeira, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos financeiros, análise de custos, orçamento, indicadores financeiros e apoio à tomada de decisão, com foco no controle, planejamento e sustentabilidade dos negócios.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão Financeira consolidaram uma base técnica voltada à visão analítica sobre custos, receitas e indicadores financeiros.<br>
                                        O domínio desses conceitos sustenta atividades de planejamento financeiro, análise de viabilidade e tomada de decisões orientadas a dados, promovendo equilíbrio entre controle, eficiência e geração de valor.</p></div>
    `
  },

// 🔹 ============================================ Gestão Logística ========================================== 🔹
  gestaoLogistica: {
    title: "Gestão Logística",
    dataset: "/portfolio/formacoes-complementares/gestao-logistica/gestao-logistica-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Gestão Logística, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem planejamento logístico, gestão da cadeia de suprimentos, controle de estoques, distribuição, indicadores de desempenho e otimização de fluxos operacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Gestão Logística consolidaram uma base técnica voltada à cadeia de suprimentos e eficiência operacional.<br>
                                        O domínio desses conceitos sustenta atividades de análise de processos, uso de indicadores logísticos e tomada de decisões orientadas a dados, contribuindo para redução de custos, melhoria de prazos e aumento da confiabilidade operacional.</p></div>
    `
  },

// 🔹 ================================================= Design =============================================== 🔹
  design: {
    title: "Design",
    dataset: "/portfolio/formacoes-complementares/design/design-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Design, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos de design, experiência do usuário, design visual, organização da informação e princípios de usabilidade, com foco na clareza, funcionalidade e comunicação eficaz.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Design consolidaram uma base técnica voltada à estruturar informações, criar interfaces funcionais e comunicar dados.<br>
                                        O domínio desses conceitos sustenta atividades de construção de soluções visuais eficientes, experiência do usuário consistente e apresentação de informações orientadas à compreensão e tomada de decisão.</p></div>
    `
  },

// 🔹 ============================================ Autoconhecimento ========================================== 🔹
  autoconhecimento: {
    title: "Autoconhecimento",
    dataset: "/portfolio/formacoes-complementares/autoconhecimento/autoconhecimento-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Autoconhecimento, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem desenvolvimento pessoal, inteligência emocional, autogestão, comunicação interpessoal e reflexão crítica, com foco no aprimoramento do comportamento profissional e das relações no ambiente de trabalho.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Autoconhecimento consolidaram uma base técnica voltada à autoconsciência, equilíbrio emocional e melhoria da comunicação.<br>
                                        O domínio desses conceitos sustenta atividades de atuação profissional ética, colaborativa e responsável, fortalecendo a tomada de decisões, trabalho em equipe e adaptação a diferentes contextos organizacionais.</p></div>
    `
  },

// 🔹 ========================================== Skills Profissionais ======================================== 🔹
  skills: {
    title: "Skills Profissionais",
    dataset: "/portfolio/formacoes-complementares/skills/skills-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Skills Profissionais, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem habilidades técnicas e comportamentais aplicadas ao contexto corporativo, com foco em produtividade, comunicação, resolução de problemas e atuação orientada a resultados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Skills Profissionais consolidaram uma base técnica voltada à fortalecimento de competências práticas essenciais.<br>
                                        O domínio desses conceitos sustenta atividades de melhoria da performance individual, adaptação a diferentes contextos de trabalho e aplicação eficaz de habilidades técnicas e comportamentais no dia a dia corporativo.</p></div>
    `
  },

// 🔹 ================================================ Idiomas =============================================== 🔹  
idiomas: {
    title: "Idiomas",
    dataset: "/portfolio/formacoes-complementares/idiomas/idiomas-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Idiomas, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem o desenvolvimento de competências linguísticas aplicadas ao contexto acadêmico e profissional, com foco em compreensão, comunicação e uso técnico da língua.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Idiomas consolidaram uma base técnica voltada ao aprimoramento da comunicação em contextos profissionais e técnicos.<br>
                                        O domínio desses conceitos sustenta atividades de leitura, interpretação e produção de conteúdos, além da interação em ambientes multiculturais e no uso de materiais técnicos em língua estrangeira.</p></div>
    `
  },

// 🔹 ============================================ Sustentabilidade ========================================== 🔹
sustentabilidade: {
    title: "Sustentabilidade",
    dataset: "/portfolio/formacoes-complementares/sustentabilidade/sustentabilidade-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Sustentabilidade, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem práticas sustentáveis, responsabilidade socioambiental, eficiência no uso de recursos, conformidade regulatória e integração da sustentabilidade aos processos organizacionais.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Sustentabilidade consolidaram uma base técnica voltada ao impacto ambiental, social e econômico das atividades organizacionais.<br>
                                        O domínio desses conceitos sustenta atividades de incorporação de práticas sustentáveis na gestão de processos, tomada de decisões e busca por eficiência, conformidade e responsabilidade corporativa.</p></div>
    `
  },

// 🔹 ============================================== Credenciais ============================================= 🔹
credly: {
    title: "Credly",
    dataset: "/portfolio/formacoes-complementares/credly/credly-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Credenciais, organizadas por conclusão cronológica decrescente.<br>
                                        As certificações apresentadas representam validações formais de competências técnicas e profissionais, emitidas por instituições reconhecidas e passíveis de verificação pública.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As credenciais obtidas através da plataforma Credly reforçam a validação de competências adquiridas ao longo da trajetória profissional.<br>
                                        Esses registros contribuem para a transparência, a confiabilidade das qualificações apresentadas e o alinhamento com práticas contemporâneas de certificação e reconhecimento profissional.</p></div>
    `
  },

// 🔹 ============================================== Arquitetura ============================================= 🔹
arquitetura: {
    title: "Arquitetura",
    dataset: "/portfolio/formacoes-complementares/arquitetura/arquitetura-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne formações complementares na área de Arquitetura, organizadas por conclusão cronológica decrescente.<br>
                                        Os cursos apresentados abrangem fundamentos de projeto arquitetônico, leitura e interpretação de plantas, noções construtivas, normas técnicas, sustentabilidade e organização do espaço construído.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>
      
          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>As formações em Arquitetura consolidaram uma base técnica voltada à visão técnica de projetos, espaços construídos e processos construtivos.<br>
                                        O domínio desses conceitos sustenta atividades de leitura técnica, análise de projetos e entendimento das interações entre planejamento, execução e normas, favorecendo uma visão multidisciplinar aplicada a diferentes contextos profissionais.</p></div>
    `
  },

// 🔹 ===================================== Microsoft Power BI · Faturamento ================================= 🔹
  powerBiFaturamento: {
    title: "Faturamento",
    dataset: "/portfolio/projetos/microsoft-power-bi/faturamento/faturamento-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne projetos voltados ao segmento de Faturamento, organizados por conclusão cronológica decrescente.<br>
                                        Os projetos apresentados abrangem análise de faturamento, volume de vendas, ticket médio, performance comercial, distribuição regional de receita e monitoramento estratégico de indicadores financeiros.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>

          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>Os projetos de Faturamento consolidam uma base analítica voltada à gestão de receitas e acompanhamento de desempenho comercial.<br>
                                        O domínio desses conceitos permite estruturar soluções que ampliam a visibilidade sobre resultados, identificam oportunidades de crescimento, otimizam estratégias de vendas e fortalecem a governança financeira das organizações com suporte à tomada de decisão orientada por dados.</p></div>
    `
  },

// 🔹 ===================================== Microsoft Power BI · Financeiro ================================== 🔹
  powerBiFinanceiro: {
    title: "Financeiro",
    dataset: "/portfolio/projetos/microsoft-power-bi/financeiro/financeiro-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne projetos voltados ao segmento Financeiro, organizados por conclusão cronológica decrescente.<br>
                                        Os projetos apresentados abrangem análise de investimentos, modelagem financeira, gestão de riscos, otimização de recursos e práticas aplicadas à tomada de decisão estratégica.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>

          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>Os projetos Financeiros consolidam uma base prática voltada à análise de resultados, avaliação de métricas financeiras e controle de performance.<br>
                                        O domínio desses conceitos permite gerar soluções financeiras consistentes, relatórios confiáveis e orientar decisões estratégicas de negócios com base em dados reais de projetos corporativos.</p></div>
    `
  },

// 🔹 ================================== Microsoft Power BI · Gestão Logística =============================== 🔹
  powerBiLogistica: {
    title: "Logística",
    dataset: "/portfolio/projetos/microsoft-power-bi/logistica/logistica-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne projetos voltados ao segmento de Logística, organizados por conclusão cronológica decrescente.<br>
                                        Os projetos apresentados abrangem gestão de operações, monitoramento de entregas, análise de performance de motoristas, controle de devoluções e otimização de fluxos logísticos orientados por dados.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>

          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>Os projetos de Logística consolidam uma base prática voltada à eficiência operacional, controle de indicadores e melhoria contínua de processos.<br>
                                        O domínio desses conceitos permite estruturar soluções analíticas robustas, reduzir gargalos operacionais, aumentar a confiabilidade das entregas e apoiar decisões estratégicas com base em métricas reais da cadeia logística.</p></div>
    `
  },

// 🔹 ================================== Microsoft Power BI · Recursos Humanos =============================== 🔹
  powerBiRecursosHumanos: {
    title: "Recursos Humanos",
    dataset: "/portfolio/projetos/microsoft-power-bi/recursos-humanos/recursos-humanos-dataset.js",
    showViewModes: true,
    content: `
      <div class="tech-subtitle-sup"><p>Esta seção reúne projetos voltados ao segmento de Recursos Humanos, organizados por conclusão cronológica decrescente.<br>
                                        Os projetos apresentados abrangem análise de indicadores de desempenho, turnover, absenteísmo, clima organizacional, estrutura de cargos e monitoramento estratégico de métricas de People Analytics.</p></div>
      
      <hr class="decorative-line-cert">
      
      <div id="course-block" class="course-block hidden">
          <div class="course-block-content"></div>

          <div class="course-block-nav">
          
            <span id="first-course" class="course-nav-action" role="button">
              ⏮ Primeiro
            </span>
          
            <span id="prev-course" class="course-nav-action" role="button">
              ◀ Anterior
            </span>
          
            <span id="course-indicator" class="course-nav-indicator">
              1 / 21
            </span>
          
            <span id="next-course" class="course-nav-action" role="button">
              Próximo ▶
            </span>
          
            <span id="last-course" class="course-nav-action" role="button">
              Último ⏭
            </span>
          
          </div>
      
      </div>
      
      <div id="courses-flow" class="courses-flow hidden"></div>
      
      <div id="courses-container" class="courses-list hidden"></div>
      
      <div id="courses-grid" class="courses-grid hidden"></div>
      
      <hr class="decorative-line-cert">
      
      <div class="tech-subtitle-inf"><p>Os projetos de Recursos Humanos consolidam uma base analítica voltada à gestão estratégica de pessoas e monitoramento de performance.<br>
                                        O domínio desses conceitos permite estruturar soluções que fortalecem a cultura organizacional, reduzem riscos de rotatividade, ampliam o engajamento e alinham o capital humano aos objetivos estratégicos da organização com suporte à tomada de decisão orientada por dados.</p></div>
    `
  },
};
