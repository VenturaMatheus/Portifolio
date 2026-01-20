const defaultOptions = {
    distance: 60,
    duration: 800,
    delay: 100,
    threshold: 0.1,
};

const setInitialStyles = (element, origin, distance) => {
    element.style.opacity = '0';
    element.style.transition = `all ${defaultOptions.duration}ms ease`;

    if (origin === 'top') element.style.transform = `translateY(-${distance}px)`;
    if (origin === 'bottom') element.style.transform = `translateY(${distance}px)`;
    if (origin === 'left') element.style.transform = `translateX(-${distance}px)`;
    if (origin === 'right') element.style.transform = `translateX(${distance}px)`;
};

const createObserver = (selector, options) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const { distance = defaultOptions.distance, origin = 'bottom', interval = 0 } = options;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
            }
        });
    }, { threshold: defaultOptions.threshold });

    elements.forEach((el, index) => {
        setInitialStyles(el, origin, distance);
        if (interval) {
            el.style.transitionDelay = `${(options.delay || defaultOptions.delay) + index * interval}ms`;
        } else {
            el.style.transitionDelay = `${options.delay || defaultOptions.delay}ms`;
        }
        observer.observe(el);
    });
};

export function initAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    createObserver('.home__content', { origin: 'top', duration: 800 });
    createObserver('.home__img', { origin: 'bottom', duration: 800, delay: 200 });
    createObserver('.sobre__img', { origin: 'left' });
    createObserver('.sobre__data', { origin: 'right' });
    createObserver('.skills__content', { origin: 'bottom', interval: 120 });
    createObserver('.projetos__card', { origin: 'bottom', interval: 140 });
    createObserver('.contatos__info', { origin: 'top' });
    createObserver('.contatos__form', { origin: 'bottom' });
    createObserver('.footer__container', { origin: 'bottom' });
}
