const gridContainer = document.querySelector('.infinite-grid');

function createGridItem(x, y) {
  const item = document.createElement('div');
  item.classList.add('grid-item');
  item.style.transform = `translateZ(${y * 100}px)`; // Simuler la profondeur
  return item;
}

// Fonction pour générer la grille (à adapter)
function generateGrid(width, height) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      gridContainer.appendChild(createGridItem(x, y));
    }
  }
}

generateGrid(10, 10);