const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Dessiner une grille
for (let i = 0; i < 10; i++) {
  ctx.moveTo(i * 30, 0);
  ctx.lineTo(i * 30, 300);
  ctx.stroke();
  // ... idem pour les lignes verticales
}
// JavaScript pour charger de nouveaux éléments lors du défilement
const gridContainer = document.querySelector('.grid-container');

window.addEventListener('scroll', () => {
  // Vérifier si l'utilisateur a atteint la fin de la page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Charger de nouveaux éléments
    fetch('nouveaux_elements.html')
      .then(response => response.text())
      .then(html => {
        gridContainer.insertAdjacentHTML('beforeend', html);
      });
  }
});