// Récupérer les objectifs depuis le fichier JSON
fetch('smart.json')
  .then(response => response.json())
  .then(data => {
    // Sélectionner l'élément HTML où afficher les objectifs
    const objectifsContainer = document.getElementById('objectifs');

    // Créer les éléments HTML pour chaque objectif
    data.forEach(objectif => {
      const objectifElement = document.createElement('div');
      objectifElement.classList.add('objectif'); // Classe CSS pour styliser les objectifs

      objectifElement.innerHTML = `
        <h2>${objectif.objectif}</h2>
        <p><strong>Statut :</strong> ${objectif.statut}</p>
        <p><strong>Début :</strong> ${objectif.dateDebut}</p>
        <ul>
          ${objectif.taches.map(tache => `<li>${tache}</li>`).join('')}
        </ul>
        <p><strong>Fin :</strong> ${objectif.dateFin}</p>
      `;

      objectifsContainer.appendChild(objectifElement);
    });
  });