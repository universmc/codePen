// Récupérer les données depuis json-server
fetch('/Qi-Store.json')
  .then(response => response.json())
  .then(data => {
    // Mettre à jour la barre de progression en fonction des données
    const progressBar = document.querySelector('.progress-bar-fill');
    progressBar.style.width = `${data.progression}%`;

    // Gérer les rappels
    const now = Date.now();
    data.rappels.forEach(rappel => {
      if (rappel.timestamp <= now) {
        // Afficher une notification ou exécuter une action
        alert(rappel.message);
      }
    });
  });