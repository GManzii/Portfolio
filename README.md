
# Portfolio
# G.Manzi // Central de Operações

> **Gabriela Manzi** > Ciência da Computação · CESAR School · Recife, PE  
> v1.2.0 // SYS_STATUS: ACTIVE

---

### [→ ACESSAR PORTFÓLIO]([https://github.com/GManzii](https://g-manzii-portfolio.vercel.app/index.html) 

---

### // sobre

Site de portdólio produzido com **HTML5, CSS3 e JavaScript Vanilla** 

O projeto adota uma estética *industrial ciberpunk/high-tech*, utilizando uma malha de pontos de fundo, pontos elétricos pulsantes via CSS puro, e um sistema reativo de mudança de estado (variáveis globais) que gerencia de forma instantânea a interface do usuário.

### // funcionalidades do sistema

- **Mecanismo Bilingue Nativo (`PT-BR` / `EN`):** Gerenciamento dinâmico de strings sem recarregamento de página. O estado do idioma é mantido no `localStorage`.
- **Alternador de Interface (`Dark Cyber` / `Light Mode`):** Sistema de temas controlado por inversão de variáveis raiz (`:root`), salvando a preferência do usuário no navegador.
- **Animação de Inicialização (`Typing Effect`):** Efeito de digitação autômato via `@keyframes` e etapas de renderização (`steps`) no título principal.

### // arquitetura de páginas

```text
arquivos/
├── index.html        # Central, biografia, stack de ferramentas e contatos
├── projetos.html     # Repositório de projetos tech
└── certificados.html # Lista de certificações profissionais
