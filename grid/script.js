const gridContainer = document.querySelector('.grid-container');
const data = [
  // Tes données ici, par exemple :
  { id: 1, title: '- 1 -' },
  { id: 2, title: '- 2 -' },
  { id: 3, title: '- 3 -' },
  { id: 4, title: '- 4 -' },
  { id: 5, title: '- 5 -' },
  { id: 6, title: '- 6 -' },
  { id: 7, title: '- 7 -' },
  { id: 8, title: '- 8 -' },
  { id: 9, title: '- 9 -' },
  // ...
];

function createGridItem(item) {
  const itemElement = document.createElement('div');
  itemElement.classList.add('grid-item');
  itemElement.textContent = item.title;
  return itemElement;
}

function renderGrid(data) {
  data.forEach(item => {
    gridContainer.appendChild(createGridItem(item));
  });
}

renderGrid(data);

// Fonction pour charger de nouveaux éléments (à adapter en fonction de ta source de données)
function loadMoreItems() {
  // ...
}

// Déclencher le chargement de nouveaux éléments lors du défilement
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreItems();
  }
});
