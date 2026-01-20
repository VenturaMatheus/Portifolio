export function initSkills() {
    const contents = document.querySelectorAll('.skills__content');
    if (!contents.length) return;

    // Keep all skills sections always open (no toggle)
    contents.forEach((content) => {
        content.classList.add('skills-always-open');
    });
}
