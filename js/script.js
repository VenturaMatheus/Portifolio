/*==================== MENU MOBILE ====================*/
// Selecionando os elementos do DOM
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Mostrar menu quando clicar no botão hamburguer
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Esconder menu quando clicar no X
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVER MENU MOBILE ====================*/
// Quando clicar em um link do menu, fecha o menu automaticamente
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Remove a classe show-menu quando clicar em cada link
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Adiciona a classe "active" ao link da seção atual durante o scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== ACCORDION SKILLS ====================*/
// Adiciona funcionalidade de abrir/fechar as seções de skills
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills-close';
    }

    if (itemClass === 'skills__content skills-close') {
        this.parentNode.className = 'skills__content skills-open';
    }
}

skillsHeader.forEach((header) => {
    header.addEventListener('click', toggleSkills);
});

// Abrir a primeira seção de skills por padrão
if (skillsContent.length > 0) {
    skillsContent[0].className = 'skills__content skills-open';
}

/*==================== MUDAR BACKGROUND DO HEADER ====================*/
// Adiciona sombra ao header quando rolar a página
function scrollHeader() {
    const header = document.getElementById('header');
    
    // Quando o scroll for maior que 80px, adiciona a classe scroll-header
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== MOSTRAR SCROLL TOP ====================*/
// Mostra o botão de voltar ao topo quando rolar para baixo
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    
    // Quando o scroll for maior que 560px, mostra o botão
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Animação de entrada dos elementos ao rolar a página
const sr = {
    // Configurações padrão
    distance: '60px',
    duration: 2500,
    delay: 400,
    
    // Simula o comportamento do ScrollReveal
    reveal: function(selector, options = {}) {
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => {
            // Configurações iniciais
            el.style.opacity = '0';
            el.style.transition = `all ${options.duration || this.duration}ms ease`;
            
            // Define a direção do movimento
            if (options.origin === 'top') {
                el.style.transform = `translateY(-${options.distance || this.distance})`;
            } else if (options.origin === 'bottom') {
                el.style.transform = `translateY(${options.distance || this.distance})`;
            } else if (options.origin === 'left') {
                el.style.transform = `translateX(-${options.distance || this.distance})`;
            } else if (options.origin === 'right') {
                el.style.transform = `translateX(${options.distance || this.distance})`;
            }
            
            // Adiciona delay se houver intervalo
            if (options.interval) {
                const index = Array.from(elements).indexOf(el);
                el.style.transitionDelay = `${(options.delay || this.delay) + (index * options.interval)}ms`;
            } else if (options.delay) {
                el.style.transitionDelay = `${options.delay}ms`;
            }
            
            observer.observe(el);
        });
    }
};

// Aplicando animações para diferentes seções
// Home
sr.reveal('.home__content', { origin: 'top', duration: 2000 });
sr.reveal('.home__img', { origin: 'bottom', duration: 2000, delay: 400 });

// Sobre
sr.reveal('.sobre__img', { origin: 'left', duration: 2000 });
sr.reveal('.sobre__data', { origin: 'right', duration: 2000 });

// Skills
sr.reveal('.skills__content', { origin: 'bottom', interval: 200 });

// Projetos - cada card aparece com intervalo
sr.reveal('.projetos__card', { origin: 'bottom', interval: 200 });

// Contatos
sr.reveal('.contatos__info', { origin: 'top', duration: 2000 });
sr.reveal('.contatos__form', { origin: 'bottom', duration: 2000 });

// Footer
sr.reveal('.footer__container', { origin: 'bottom', duration: 2000 });

/*==================== VALIDAÇÃO DO FORMULÁRIO ====================*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');


if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pega os valores dos campos
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Validação simples
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showMessage('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Por favor, insira um email válido!', 'error');
            return;
        }
     
        showMessage(`Obrigado, ${name}! Sua mensagem foi recebida.\n\nEm breve entrarei em contato através do email fornecido.`, 'success');
        this.reset();
    });
}

function showMessage(text, type) {
    if (contactMessage) {
        contactMessage.textContent = text;
        contactMessage.className = `contatos__form-message ${type}`;
        
        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            contactMessage.className = 'contatos__form-message';
        }, 5000);
    } else {
        alert(text);
    }
}

/*==================== SMOOTH SCROLL ====================*/
// Navegação suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== TYPING ANIMATION (OPCIONAL) ====================*/
// Efeito de digitação no título (você pode ativar se quiser)
function typeWriter(elemento, texto, i = 0) {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        setTimeout(() => typeWriter(elemento, texto, i + 1), 100);
    }
}



/*==================== DARK MODE (OPCIONAL) ====================*/
// Você pode adicionar um tema escuro facilmente
function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
    
    // Salva a preferência no localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Carrega a preferência do tema ao carregar a página
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

/*==================== CONSOLE LOG ====================*/
// Mensagem no console para desenvolvedores
console.log('%c🚀 Portfólio desenvolvido com HTML, CSS e JavaScript puro!', 
    'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c📧 Entre em contato através do formulário!', 
    'color: #4f46e5; font-size: 14px;');