# 🎨 Portfólio Profissional - Matheus Ventura

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Web3Forms](https://img.shields.io/badge/Web3Forms-Email%20API-blue)](https://web3forms.com/)

> Portfólio moderno e profissional com tema escuro/claro, arquitetura modular e integração de formulário funcional.

---

## ✨ Funcionalidades Principais

- ✅ **Design Responsivo** - Mobile-first, funciona em todos os dispositivos
- ✅ **Tema Escuro/Claro** - Alterna automaticamente com preferência do SO, salva em localStorage
- ✅ **Arquitetura Modular** - JavaScript organizado em 6 módulos independentes
- ✅ **Acessibilidade A11y** - ARIA labels, navegação por teclado, prefers-reduced-motion
- ✅ **Formulário Funcional** - Validação + integração Web3Forms para envio real de emails
- ✅ **Habilidades Estruturadas** - Nivéis (Básico/Intermediário/Avançado) com tags de projetos
- ✅ **Animações Suaves** - IntersectionObserver para reveal ao scrollar
- ✅ **Scroll Spy** - Menu ativo conforme seção visível
- ✅ **Performance** - Código otimizado, lazy loading em imagens
- ✅ **SEO** - Meta tags, estrutura semântica, Open Graph

---

## ✨ Funcionalidades

### 🎯 **Principais Features:**

- ✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Menu Interativo** - Navegação suave entre seções com scroll smooth
- ✅ **Arquitetura Modular** - JS separado por domínios (nav, scroll, animações, formulário, tema)
- ✅ **Seção de Habilidades** - Níveis (Básico/Intermediário/Avançado) e projetos associados
- ✅ **Portfólio de Projetos** - Cards interativos com hover effects
- ✅ **Formulário com Estados** - Validação, loading/sucesso/erro
- ✅ **Tema** - Alternância claro/escuro com preferência salva
- ✅ **Animações Suaves** - Intersection Observer para animações ao scrollar
- ✅ **Scroll to Top** - Botão para voltar ao topo da página
- ✅ **SEO Otimizado** - Meta tags completas (Open Graph, Twitter Cards)
- ✅ **Performance** - Código otimizado e leve
- ✅ **Acessibilidade** - ARIA labels e navegação por teclado

---

## 🛠️ Tecnologias & Stack

| Aspecto | Tecnologia |
|--------|-----------|
| **Estrutura** | HTML5 Semântico |
| **Estilos** | CSS3 com Variáveis, Flexbox, Grid |
| **Interatividade** | JavaScript ES6+ (Modular) |
| **Tema** | Dark/Light (CSS Variables + localStorage) |
| **Formulário** | Web3Forms API (envio real de emails) |
| **Animações** | IntersectionObserver + CSS Transitions |
| **Ícones** | Unicode + SVG inline |
| **Fontes** | Poppins (Google Fonts) |
| **Versionamento** | Git + GitHub |

---

## 📁 Estrutura do Projeto

```
Portifólio-beta/
│
├── index.html                    # HTML semântico
├── README.md                     # Documentação
│
├── Style/
│   └── style.css                 # Dark-first design system
│
├── js/
│   ├── main.js                   # Entrypoint + inicialização
│   └── modules/                  # Arquitetura modular
│       ├── nav.js                # Menu mobile + ARIA states
│       ├── scroll.js             # Scroll spy + header shadow + scroll-top
│       ├── skills.js             # Skills sempre abertas
│       ├── animations.js         # Reveal animations (IntersectionObserver)
│       ├── contact.js            # Formulário + Web3Forms
│       └── theme.js              # Toggle tema + persistência
│
└── assets/
    ├── site.webmanifest          # PWA manifest
    └── projects/                 # Screenshots dos projetos
```

---

### Tema Escuro (Padrão)
```css
--body-color: #0b1221          /* Fundo escuro */
--container-color: #0f172a     /* Cards/sections */
--border-color: #1e293b        /* Bordas sutis */
--primary-color: #6366f1       /* Indigo (principal) */
--primary-color-alt: #818cf8   /* Indigo claro (hover) */
```

### Tema Claro (body.theme-light)
```css
--body-color: #f9fafb          /* Fundo claro */
--container-color: #ffffff     /* Cards brancos */
--border-color: #f3f4f6        /* Bordas leves */
--primary-color: #6366f1       /* Indigo mantido */
```

---

## 🏗️ Arquitetura Modular JavaScript

Cada módulo tem responsabilidade única e bem definida:

### **main.js** - Orquestrador
```javascript
// Inicializa todos os módulos no boot
initTheme();
initNav();
initScrollFeatures();
initSkills();
initAnimations();
initContactForm();
```

### **theme.js** - Alternância de Tema
- Detecta preferência do SO (`prefers-color-scheme`)
- Permite toggle manual com botão
- Persiste escolha em `localStorage`
- Sincroniza `body.theme-light` e `document.documentElement.colorScheme`

### **nav.js** - Navegação Responsiva
- Menu mobile com animação
- Gerencia estados ARIA (`aria-expanded`, `aria-hidden`)
- Fecha menu ao redimensionar viewport
- Escape key para fechar

### **scroll.js** - Comportamento ao Scroll
- Scroll spy: destaca link do menu para seção visível
- Header shadow: aparece ao fazer scroll
- Scroll-to-top: botão aparece após 300px
- Smooth scroll em âncoras

### **skills.js** - Seção de Habilidades
- Inicializa cards como sempre visíveis (não-accordion)
- Aplica classe `.skills-always-open` para layout permanente

### **animations.js** - Reveal Animations
- IntersectionObserver para detectar elementos no viewport
- Respeita `prefers-reduced-motion` (acessibilidade)
- Adiciona classe `.show` para disparar CSS animations
- Configuração de threshold e margin

### **contact.js** - Formulário Inteligente
- Validação de campos (nome, email, mensagem)
- Integração Web3Forms (API sem backend)
- Estados: enviando → sucesso/erro
- Atributo `aria-busy` para acessibilidade
- Mensagens de feedback ao usuário

---

## 📱 Responsividade

| Viewport | Breakpoint | Comportamento |
|----------|-----------|--------------|
| Mobile | < 576px | Menu hamburguer, stack vertical |
| Tablet | 576px - 768px | Menu início da transição |
| Desktop | 768px - 1024px | Menu horizontal, grid 2 colunas |
| Large | > 1024px | Layout completo, grid 3 colunas |

---

## ♿ Acessibilidade (A11y)

✅ Semântica HTML correta (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
✅ ARIA labels em botões e ícones
✅ ARIA expanded/hidden para menu mobile
✅ Focus visível com outline colorido
✅ Contraste de cores adequado (WCAG AA)
✅ Suporta `prefers-reduced-motion`
✅ Navegação por teclado completa (Tab, Enter, Escape)
✅ Ordem lógica de tab stops

---

## 🚀 Como Começar

### **1. Clonar o Repositório**
```bash
git clone https://github.com/SEU-USUARIO/Portifólio-beta.git
cd Portifólio-beta
```

### **2. Abrir Localmente**
```bash
# Abra no navegador (qualquer servidor local funciona)
# Recomendado: Live Server extension no VS Code
```

### **3. Configurar Formulário**

Edite `js/modules/contact.js` e atualize:
```javascript
const WEB3FORMS_KEY = 'SUA_CHAVE_WEB3FORMS';
```

1. Vá em [web3forms.com](https://web3forms.com/)
2. Crie conta gratuita
3. Copie seu `access_key`
4. Cole no código acima

---

## 🎯 Seções do Portfólio

| Seção | Descrição |
|-------|-----------|
| **Home** | Apresentação com CTA principal |
| **Sobre** | Bio, foto, estatísticas |
| **Skills** | Habilidades com níveis e projetos associados |
| **Projetos** | Grid responsivo com cards interativos |
| **Contato** | Formulário funcional + canais de comunicação |
| **Footer** | Links, sociais, copyright |

---

## 📞 Contato

**Matheus Ventura**

- 📧 Email: [matheus.ventura154@gmail.com](mailto:matheus.ventura154@gmail.com)
- 💼 LinkedIn: [@matheus-ventura](https://linkedin.com/in/matheus-ventura-2a9933196/)
- 🐙 GitHub: [@VenturaMatheus](https://github.com/VenturaMatheus)
- 📱 WhatsApp: [+55 21 966859622](https://wa.me/5521966859622)

---

## 📄 Licença

Este projeto é **livre para uso pessoal e comercial**.

Sinta-se à vontade para:
- ✅ Usar como inspiração
- ✅ Fazer fork e modificar
- ✅ Utilizear em projetos pessoais
- ✅ Compartilhar com comunidade

**Créditos:** Desenvolvido por Matheus Ventura - 2025

---

## 🙏 Agradecimentos

- **Google Fonts** - Tipografia Poppins
- **Web3Forms** - API para envio de emails
- **GitHub** - Hosting e versionamento
- **Comunidade Dev** - Feedback e inspiração

---

## 🌟 Se Este Projeto Te Ajudou

- ⭐ Dê uma estrela no repositório
- 🔄 Compartilhe com desenvolvedores
- 💬 Deixe feedback nos issues

---

**Desenvolvido com ❤️ por Matheus Ventura**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
