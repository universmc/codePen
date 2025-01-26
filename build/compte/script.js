// Récupération du fichier JSON (à adapter selon votre structure)
fetch('dev.json')
  .then(response => response.json())
  .then(data => {
    // Fonction pour créer un élément HTML à partir d'un objet
    function createElement(tag, content, attributes = {}) {
      const element = document.createElement(tag);
      element.textContent = content;
      for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
      return element;
    }

    // Fonction pour créer un tableau HTML
    function createTable(data, parentElement) {
      const table = document.createElement('table');
      const tableBody = document.createElement('tbody');
      table.appendChild(tableBody);

      for (const section in data) {
        const row = document.createElement('tr');
        const header = document.createElement('th');
        header.textContent = section;
        row.appendChild(header);
        tableBody.appendChild(row);

        createRowsFromObject(data[section], tableBody);
      }

      parentElement.appendChild(table);
    }

    // Fonction pour créer des lignes de tableau à partir d'un objet
    function createRowsFromObject(obj, tableBody) {
      for (const key in obj) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = key;
        const cell2 = document.createElement('td');
        cell2.textContent = typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key];
        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);

        if (typeof obj[key] === 'object') {
          createRowsFromObject(obj[key], tableBody);
        }
      }
    }

    // Création de la structure HTML
    const planComptableDiv = document.getElementById('plan-comptable');
    createTable(data, planComptableDiv);
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON:', error);
  });