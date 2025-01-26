// Constante liée à la suite de Fibonacci (à ajuster selon vos besoins)
const fibonacciConstant = 1.618;

// Fonction pour générer une grille de cellules
function createGrid(size) {
  const gridContainer = document.getElementById('grid-container');

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');

      // Calcul de la taille de la cellule en utilisant la suite de Fibonacci
      const cellSize = fibonacci(j + 1) * 10; // Ajustez le facteur d'échelle

      // Application de la constante pour définir une condition (exemple)
      if (j === size - 1) {
        cell.classList.add('end-cell'); // Classe pour styliser la dernière cellule
      }

      // Ajout d'attributs RDFa pour enrichir les données sémantiques
      cell.setAttribute('typeof', 'http://example.com/Cell');
      cell.setAttribute('property', 'position', `${i},${j}`);

      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      row.appendChild(cell);
    }

    gridContainer.appendChild(row);
  }
}

// Fonction pour calculer la suite de Fibonacci
// Fonction pour générer un nombre de la suite de Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Fonction pour calculer la taille d'un élément en fonction de sa position dans la suite de Fibonacci
  function calculateSize(index) {
    const baseSize = 10; // Taille de base
    const fibNumber = fibonacci(index);
    return baseSize * fibNumber * goldenRatio;
  }
  
  // Création d'une grille basée sur la suite de Fibonacci
  for (let i = 0; i < 10; i++) {
    const element = document.createElement('div');
    element.style.width = calculateSize(i) + 'px';
    element.style.height = calculateSize(i) + 'px';
    document.body.appendChild(element);
  }

// Appel de la fonction pour créer la grille
createGrid(10);