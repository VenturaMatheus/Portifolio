const sections = () => Array.from(document.querySelectorAll('section[id]'));

const handleActiveLinks = () => {
    const scrollY = window.pageYOffset;
    sections().forEach((section) => {
        const height = section.offsetHeight;
        const top = section.offsetTop - 60;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav__menu a[href*=${id}]`);

        if (!link) return;

        if (scrollY > top && scrollY <= top + height) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
};

const handleHeaderShadow = () => {
    const header = document.getElementById('header');
    if (!header) return;
    const isScrolled = window.scrollY >= 80;
    header.classList.toggle('scroll-header', isScrolled);
};

const handleScrollTop = () => {
    const scrollTop = document.getElementById('scroll-top');
    if (!scrollTop) return;
    const isVisible = window.scrollY >= 560;
    scrollTop.classList.toggle('show-scroll', isVisible);
};

const initSmoothAnchors = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
};

export function initScrollFeatures() {
    window.addEventListener('scroll', () => {
        handleActiveLinks();
        handleHeaderShadow();
        handleScrollTop();
    });

    handleActiveLinks();
    handleHeaderShadow();
    handleScrollTop();
    initSmoothAnchors();
}
