const gridContainer = document.querySelector('.grid-container');

function createGridItem() {
  const item = document.createElement('div');
  item.classList.add('grid-item');

  const input = document.createElement('input');
  item.appendChild(input);

  return item;
}

// Fonction pour générer la grille (à adapter)
function generateGrid(width, height) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      gridContainer.appendChild(createGridItem());
    }
  }
}

generateGrid(10, 10);