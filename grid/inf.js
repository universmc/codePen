const gridContainer = document.querySelector('.infinite-grid');
let page = 1;

function createGridItem(index) {
  const item = document.createElement('div');
  item.classList.add('grid-item');
  item.textContent = `Case ${index}`;
  return item;
}

function loadMoreItems() {
  for (let i = 0; i < 10; i++) {
    gridContainer.appendChild(createGridItem(page * 10 + i));
  }
  page++;
}

loadMoreItems(); // Charger les premières cases

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreItems();
  }
});