import { initNav } from './modules/nav.js';
import { initScrollFeatures } from './modules/scroll.js';
import { initSkills } from './modules/skills.js';
import { initAnimations } from './modules/animations.js';
import { initContactForm } from './modules/contact.js';
import { initTheme } from './modules/theme.js';

const boot = () => {
    initTheme();
    initNav();
    initScrollFeatures();
    initSkills();
    initAnimations();
    initContactForm();
};

document.addEventListener('DOMContentLoaded', boot);
