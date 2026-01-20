const NAV_MENU_ID = 'nav-menu';
const NAV_TOGGLE_ID = 'nav-toggle';
const NAV_CLOSE_ID = 'nav-close';

const setMenuState = ({ navMenu, navToggle, navClose }, isOpen) => {
    navMenu.classList.toggle('show-menu', isOpen);
    navMenu.setAttribute('aria-hidden', String(!isOpen));
    navToggle?.setAttribute('aria-expanded', String(isOpen));
    navClose?.setAttribute('aria-expanded', String(isOpen));
};

export function initNav() {
    const navMenu = document.getElementById(NAV_MENU_ID);
    const navToggle = document.getElementById(NAV_TOGGLE_ID);
    const navClose = document.getElementById(NAV_CLOSE_ID);
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navMenu) return;

    const syncAriaForViewport = () => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        const isOpen = navMenu.classList.contains('show-menu');
        const hidden = isDesktop ? false : !isOpen;
        navMenu.setAttribute('aria-hidden', String(hidden));
    };

    const toggleState = (open) => {
        setMenuState({ navMenu, navToggle, navClose }, open);
        syncAriaForViewport();
    };

    navToggle?.addEventListener('click', () => toggleState(true));
    navClose?.addEventListener('click', () => toggleState(false));
    navLinks.forEach((link) => link.addEventListener('click', () => toggleState(false)));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') toggleState(false);
    });

    window.addEventListener('resize', syncAriaForViewport);
    syncAriaForViewport();
}
