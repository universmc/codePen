// script.js
const sections = document.querySelectorAll('section');
const prevButton = document.getElementById('precedent');
const nextButton = document.getElementById('suivant');
let currentSectionIndex = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
    currentSectionIndex = index;
}

nextButton.addEventListener('click', () => {
    showSection((currentSectionIndex + 1) % sections.length);
});

prevButton.addEventListener('click', () => {
    showSection((currentSectionIndex - 1 + sections.length) % sections.length);
});