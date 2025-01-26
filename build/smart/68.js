// Récupérer l'élément HTML où nous allons afficher le contenu
const container = document.getElementById('action-plan-container');

// Charger le fichier JSON (à adapter en fonction de votre environnement)
fetch('68.json')
  .then(response => response.json())
  .then(data => {
    // Parcourir chaque phase du plan d'action
    data.phases.forEach(phase => {
      const section = document.createElement('section');
      const header = document.createElement('h2');
      header.textContent = phase.phase;
      section.appendChild(header);

      const list = document.createElement('ul');
      phase.taches.forEach(tache => {
        const item = document.createElement('li');
        item.textContent = tache;
        list.appendChild(item);
      });
      section.appendChild(list);

      container.appendChild(section);
    });

    // Ajouter les autres sections (ressources, risques, indicateurs) de manière similaire

    // Ajouter des attributs ARIA pour améliorer l'accessibilité
    container.setAttribute('aria-label', 'Plan daction détaillé');
    // ... ajouter des attributs ARIA pour chaque élément sémantique

  });