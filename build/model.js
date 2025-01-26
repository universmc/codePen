// Charger le fichier JSON
fetch('config.json')
  .then(response => response.json())
  .then(data => {
    const projetElement = document.getElementById('projet');

    // Check if data object exists to avoid errors
    if (!data) {
      console.error('Error: Failed to load project data');
      return;
    }

    let projectHTML = `
      <h2>${data.projet.nom}</h2>
      <p>${data.projet.description}</p>
      <ul>
    `;

    // Iterate over project phases
    data.projet.etapes.forEach(etape => {
      projectHTML += `
        <li>
          <h3>${etape.Etape}</h3>
          <ul>
            <li><strong>Date de début :</strong> ${etape.DateDebut}</li>
            <li><strong>Date de fin prévue :</strong> ${etape.DateFinPrevue}</li>
            <li><strong>Ressources :</strong> ${etape.Ressources ? etape.Ressources.join(', ') : 'Aucune ressource'}</li>
            <li><strong>Critères de réussite :</strong> ${etape.CriteresReussite ? etape.CriteresReussite.join(', ') : 'Aucun critère'}</li>
            <li><strong>Tâches :</strong>
              <ul>
                ${etape.Taches ? etape.Taches.map(tache => `
                  <li>${tache.Titre} (${tache.PourcentageCompletion}%)</li>
                `).join('') : 'Aucune tâche définie'}
              </ul>
            </li>
          </ul>
        </li>
      `;
    });

    projectHTML += `
      </ul>
    `;

    // Insert the HTML into the page
    projetElement.innerHTML = projectHTML;
  })
  .catch(error => {
    console.error('Error fetching project data:', error);
  });