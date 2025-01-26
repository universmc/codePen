function startChrono() {
    const chronoElement = document.getElementById('chrono');
    let secondes = 0;
    let minutes = 0;
    let heures = 0;
    let intervalId;
  
    intervalId = setInterval(() => {
      secondes++;
      if (secondes === 60) {
        secondes = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          heures++;
        }
      }
  
      const tempsEcoule = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
      chronoElement.textContent = tempsEcoule;
  
      // Ajout du timestamp dans la console (ou dans un fichier log si besoin)
      console.log(`Timestamp : ${new Date().toISOString()} - Temps écoulé : ${tempsEcoule}`);
  
      // Arrêt du chronomètre après une heure
      if (heures === 1) {
        clearInterval(intervalId);
        console.log('Le chronomètre a atteint une heure.');
      }
    }, 1000); // Met à jour le chronomètre toutes les 1 seconde
  }
  
  // Appel de la fonction pour démarrer le chronomètre
  startChrono();