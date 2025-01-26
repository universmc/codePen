const gridContainer = document.querySelector('.grid-container');
const goldenRatio = 1.618;

function createCell(width, height) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  cell.style.width = `${width}px`;
  cell.style.height = `${height}px`;
  // ... ajouter du contenu à la cellule
  gridContainer.appendChild(cell);
}

// Fonction pour calculer les dimensions d'une cellule en fonction de sa position
function calculateCellSize(row, col) {
  // ... calcul basé sur le nombre d'or et la position
}

// Générer la grille
for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const { width, height } = calculateCellSize(row, col);
    createCell(width, height);
  }
}