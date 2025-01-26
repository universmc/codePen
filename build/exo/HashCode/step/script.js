// ... (code existant)

// Ajouter des données sémantiques à une cellule
function addSemanticData(cell, data) {
    cell.setAttribute('property', 'value', data.value);
    cell.setAttribute('property', 'color', data.color);
  }
  
  // ... (dans la boucle de création des cellules)
  
  // Charger des données depuis un fichier JSON
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Assigner les données aux cellules
      data.forEach((cellData, index) => {
        const cell = gridContainer.children[index];
        addSemanticData(cell, cellData);
      });
    });