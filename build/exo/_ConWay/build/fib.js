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