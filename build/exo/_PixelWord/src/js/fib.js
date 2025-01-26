// ... code existant ...

// Fonction pour créer une cellule avec des données sémantiques
function createSemanticCell(row, col, data) {
    const cell = document.createElement('div');
    // ...
    cell.setAttribute('property', 'value', data.value);
    cell.setAttribute('property', 'category', data.category);
    // ...
    return cell;
  }
  
  // Fonction pour charger les données d'une cellule à partir d'un fichier JSON
  async function loadCellData(cellId) {
    const response = await fetch(`data/${cellId}.json`);
    const data = await response.json();
    return data;
  }
  
  // ...
  
  // Exemple d'utilisation :
  const cell = createSemanticCell(2, 3, { value: 42, category: 'number' });
  gridContainer.appendChild(cell);
  
  // Requête SPARQL pour récupérer toutes les cellules de catégorie "number"
  const query = `
    PREFIX : <http://example.com/>
    SELECT ?cell ?value
    WHERE {
      ?cell a :Cell ;
             :value ?value .
      FILTER (?category = "number")
    }
  `;