const conteudos = {
  home: `
        <section id="inicio" class="main-section">
            <div class="fixed-header-section fade-item">
                <div class="fixed-header-container">
                    <h1>
                        <img src="assets/icons/icone-dados.png" alt="Ícone de Dados" class="title-icon">
                        <span class="title-wrapper">Transformando dados em decisões estratégicas.</span>
                    </h1>
                    <div class="decorative-line"></div>
                </div>
            </div>

            <div class="curriculo-container fade-item">
                <div class="intro-photo fade-item">
                    <img src="assets/images/foto-rogerio.jpg" alt="Foto de Rogério Clynton Ribeiro">
                    <a href="../portfolio/projetos/" class="btn-projetos fade-item">Projetos</a>
                    <a href="../portfolio/" class="btn-projetos fade-item">Portfólio</a>
                    <a href="../portfolio/" class="btn-projetos fade-item">Currículo</a>
                    <p class="signature-phrase fade-item">
                        Ao passo que me aproximo da perfeição,<br>
                        me distancio da pressa.<br>
                        ⸺ Clynton & Lorena
                    </p>
                </div>
                <div class="curriculo-text fade-item">
                    <p>
                        Analista de Dados movido pela curiosidade, pela precisão técnica e pelo compromisso de transformar informações complexas em decisões inteligentes e estratégicas.
                        Com sólida experiência em <strong>Python™, R, SQL e Power BI</strong>, atuo na criação de soluções analíticas que conectam indicadores à visão de negócio, permitindo
                        identificar padrões, antecipar cenários e orientar ações com clareza e segurança.
                    </p>
                    
                    <p>
                        Minha abordagem integra <strong>processos de ETL, modelagem estruturada, visualização interativa e análise preditiva</strong>, garantindo que cada insight seja não apenas
                        preciso, mas aplicável e relevante para o contexto da organização. Acredito que todo conjunto de dados carrega uma narrativa valiosa — e meu papel é revelá-la com rigor
                        analítico e comunicação clara, traduzindo complexidade em entendimento estratégico.
                    </p>
                    
                    <p>
                        Ao longo da minha trajetória, conduzi projetos que envolveram <strong>análises de desempenho, estudos estratégicos, automação de processos e construção de painéis
                        executivos</strong>. Em cada entrega, priorizo métricas confiáveis, rastreabilidade dos resultados e impacto tangível, sempre alinhando tecnologia, método e propósito.
                    </p>
                    
                    <p>
                        Estou em constante evolução, explorando novas ferramentas e metodologias para unir <strong>inovação, governança de dados e excelência operacional</strong>. Acredito no
                        poder da melhoria contínua e na importância de decisões orientadas por evidências para construir organizações mais eficientes, sustentáveis e inteligentes.
                    </p>
                    
                    <p>
                        Meu compromisso é claro: transformar dados em valor estratégico, alinhando conhecimento técnico, visão analítica e sensibilidade de negócio para apoiar decisões robustas
                        e impulsionar resultados consistentes.
                    </p>
                </div>
            </div>
        </section>
  `,
  portfolio: `
        <section id="curriculo" class="main-section">
            <div class="fixed-header-section fade-item">
                <div class="fixed-header-container">

                    <div class="header-with-controls">

                        <h1 id="portfolio-title-group">
                            <img id="section-icon" class="title-icon portfolio-icon" src="../assets/icons/icone-portfolio.png" alt="Ícone Portfólio">
                            <span id="section-title" class="title-wrapper portfolio-subtitle">
                              <span class="title-base">Portfólio</span>
                              <span class="title-category hidden">
                                <span class="pipe"> | </span>
                                <span class="category-name"></span>
                              </span>
                            </span>
                        </h1>

                        <div id="view-mode-controls" class="view-mode-controls" aria-label="Modos de visualização">
                            <button class="view-btn view-transition" data-view="block" aria-label="Ativar Visualização em Bloco" onclick="trocarModo('block')">▣</button>
                            <button class="view-btn view-transition" data-view="flow" aria-label="Ativar Visualização Fluida" onclick="trocarModo('flow')">☷</button>
                            <button class="view-btn view-transition" data-view="list" aria-label="Ativar Visualização em Lista" onclick="trocarModo('list')">☰</button>
                            <button class="view-btn view-transition" data-view="grid" aria-label="Ativar Visualização em Grade" onclick="trocarModo('grid')">⊞</button>
                        </div>
                    </div>
                        
                    <div class="decorative-line"></div>

                </div>
            </div>
    
            <!-- Container ajustado para o currículo -->
            <div class="curriculo-container fade-item">
                <!-- Menu lateral -->
                <div class="side-menu fade-item">
                  <ul>
                    <li><a href="#" data-section="perfil">Perfil</a></li>
                    <li><a href="#" data-section="proposito">Propósito</a></li>
                      <li class="menu-divider-item">
                        <div class="decorative-line-menu"></div>
                      </li>
                    <li><a href="#" data-section="formacaoAcademica">Formação Acadêmica</a></li>
                    <li><a href="#" data-section="competenciasTecnicas">Competências Técnicas</a></li>
                    <li><a href="#" data-section="competenciasComportamentais">Competências Comportamentais</a></li>
                      <li class="menu-divider-item">
                        <div class="decorative-line-menu"></div>
                      </li>
                    <li><a href="#" data-section="trajetoria">Trajetória</a></li>
                    <li><a href="#" data-section="formacoesComplementares">Formações Complementares</a></li>
                    <li><a href="#" data-section="certificacoesCredenciais">Certificações e Credenciais</a></li>
                      <li class="menu-divider-item">
                        <div class="decorative-line-menu"></div>
                      </li>
                    <li><a href="#" data-section="projetos50">Projetos 5.0</a></li>
                    <li><a href="#" data-section="impactosResultados">Impactos e Resultados</a></li>
                    <li><a href="#" data-section="producoesIntelectuais">Produções Intelectuais</a></li>
                  </ul>
                </div>
            
                <!-- Texto introdutório -->
                <div id="section-content" class="curriculo-text view-transition">
                    <p>
                        Minha trajetória é guiada por uma curiosidade que nunca adormeceu e por um desejo constante de compreender o mundo através dos dados. Ao longo dos últimos anos, mergulhei
                        em um processo de <strong>expansão intelectual</strong> e <strong>especialização intensa</strong>, estudando diariamente, explorando novas linguagens, tecnologias, metodologias
                        e abordagens analíticas. Esse caminho — construído com disciplina autodidata e uma busca incansável por profundidade técnica — moldou não apenas minhas habilidades, mas também
                        minha visão sobre como a informação se transforma em valor.
                    </p>
                    <p>
                        Atuo com uma perspectiva ampla e integrada, combinando <strong>Python™, R, SQL, Power BI, modelagem de dados, análise estatística, metodologias Lean Six Sigma, automação,
                        governança e qualidade de dados</strong>. Minha experiência se estende desde a construção de pipelines analíticos e processos de ETL até o desenvolvimento de dashboards interativos
                        e análises que iluminam padrões, comportamentos e oportunidades estratégicas.
                    </p>
                    <p>
                        Acredito que cada dataset carrega uma narrativa própria — uma história que precisa ser revelada com precisão técnica, sensibilidade analítica e visão crítica. Para mim, analisar
                        dados é muito mais que executar consultas, gerar gráficos ou aplicar modelos. É compreender o contexto, questionar o óbvio, enxergar conexões, antecipar cenários e transformar
                        complexidade em clareza. Meu trabalho é encontrar significado onde muitos enxergam apenas números.
                    </p>
                    <p> 
                        Nos últimos dois anos, percorri um ciclo de aprimoramento contínuo, aprofundando-me em <strong>Power BI, Python, SQL, MySQL, MongoDB, Estatística, Visualização de Dados, Data
                        Storytelling, Data Quality, Modelagem, Processos, LGPD e Cibersegurança</strong>. Essa evolução constante me permitiu unir técnica, estratégia e maturidade intelectual em um
                        estilo de trabalho analítico que equilibra rigor, criatividade, lógica e intuição.
                    </p>
                    <p>
                        Este portfólio reúne minha caminhada, meus aprendizados e minha visão: a de que dados são mais do que insumos. São instrumentos de decisão, transformação e impacto. Aqui você
                        encontrará não apenas projetos, mas uma construção consciente de experiência — fruto de disciplina, foco, curiosidade e um compromisso permanente com a excelência. 
                    </p>
                </div>
            </div>
        </section>
  `
};
