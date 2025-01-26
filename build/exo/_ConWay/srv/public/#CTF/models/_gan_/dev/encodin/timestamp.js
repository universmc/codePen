// Fonction pour afficher l'heure actuelle basée sur un timestamp
function displayTime(timestamp) {
    let date = new Date(timestamp);
  
    // Afficher l'heure actuelle en fonction du timestamp
    console.log(date.toLocaleString());
  }
  
  // Appeler la fonction toutes les minutes avec le timestamp mis à jour
  setInterval(function() {
    let currentTimeInMilliseconds = Date.now();
    displayTime(currentTimeInMilliseconds);
  }, 6);