const STORAGE_KEY = 'mv-theme';

const applyTheme = (mode, toggleButton) => {
    const isLight = mode === 'light';
    document.body.classList.toggle('theme-light', isLight);
    document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
    const icon = toggleButton?.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-moon', isLight);
        icon.classList.toggle('fa-sun', !isLight);
    }
};

export function initTheme() {
    const toggleButton = document.getElementById('theme-toggle');
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'dark'); // escuro por padrão

    applyTheme(initial, toggleButton);

    toggleButton?.addEventListener('click', () => {
        const next = document.body.classList.contains('theme-light') ? 'dark' : 'light';
        applyTheme(next, toggleButton);
        localStorage.setItem(STORAGE_KEY, next);
    });
}
