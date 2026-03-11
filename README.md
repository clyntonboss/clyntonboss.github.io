# Rogério Clynton Ribeiro — Portfólio Profissional

Portfólio profissional desenvolvido para apresentar projetos, certificações, formações complementares, artigos e iniciativas relacionadas à análise de dados, tecnologia, engenharia de produção e desenvolvimento de soluções orientadas a dados.

Este projeto foi concebido com foco em **clareza, elegância visual, arquitetura modular e navegação fluida**, permitindo a exploração dinâmica de conteúdos sem recarregamento de página.

---

# Visão Geral

O site funciona como uma **plataforma estruturada de apresentação profissional**, organizada em categorias que permitem acessar:

- Projetos desenvolvidos
- Formações complementares
- Certificações
- Artigos científicos
- Produções técnicas
- Iniciativas relacionadas a dados e tecnologia

A navegação foi projetada para proporcionar uma **experiência contínua e responsiva**, baseada em carregamento dinâmico de conteúdo e transições suaves entre seções.

---

# Evolução da Arquitetura

No início do projeto, a estrutura era baseada em **mais de 40 páginas HTML independentes**, cada uma responsável por exibir um conjunto específico de conteúdos.

Com o amadurecimento do projeto e a evolução da arquitetura da aplicação, foi adotado um novo modelo baseado em:

- **Single Page Architecture**
- **Datasets dinâmicos**
- **Renderização via JavaScript**
- **Troca de conteúdo sem recarregamento de página**

Como resultado:

- A aplicação passou a operar com **um único HTML principal**
- O conteúdo passou a ser **carregado dinamicamente**
- A navegação tornou-se **mais rápida, fluida e modular**

Essa mudança trouxe ganhos importantes em:

- organização do código
- escalabilidade
- manutenção
- experiência do usuário

---

# Arquitetura do Projeto

A estrutura atual do projeto segue um modelo baseado em **separação de responsabilidades**.

## Camadas principais

### Estrutura base
Responsável pelo carregamento inicial da aplicação.


Contém a estrutura base da interface e os containers que recebem os conteúdos dinâmicos.

---

### Datasets de Conteúdo

Os conteúdos do portfólio são organizados em **datasets JavaScript**, permitindo que novas categorias ou projetos sejam adicionados sem alterar a estrutura principal do site.

Exemplos:

- dataset-formacoes.js  
- dataset-projetos.js  
- dataset-artigos.js  


Cada dataset contém os metadados necessários para renderização dos itens.

---

### Sistema de Navegação Dinâmica

A navegação entre seções é controlada por um **roteador interno em JavaScript**, que interpreta atributos HTML e executa a troca dinâmica de conteúdo.

Elementos como:
