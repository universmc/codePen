// Récupérer les données depuis le fichier JSON
fetch('daily.json')
  .then(response => response.json())
  .then(data => {
    // Stocker les données dans une variable globale (à éviter en production)
    window.data = data;

    // Fonction pour vérifier les rappels
    function checkReminders() {
      const now = Date.now();
      data.taches.forEach(task => {
        task.rappels.forEach(rappel => {
          if (rappel.periodicite === "unique" && rappel.timestamp <= now) {
            // Rappel unique
            alert(rappel.message);
          } else if (rappel.periodicite === "horaire") {
            // Rappel horaire
            const currentHour = new Date().getHours();
            if (currentHour === rappel.heure) {
              alert(rappel.message);
            }
          }
        });
      });
    }

// Fonction pour mettre à jour les barres de progression
// Fonction pour mettre à jour les barres de progression
function updateProgressBars() {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(taskElement => {
    const taskId = taskElement.dataset.id;
    const task = data.taches.find(t => t.id === taskId);

    if (task) {
      const progressBar = taskElement.querySelector('.progress-bar'); // Adaptez le sélecteur
      progressBar.style.width = `${task.progression}%`;

      // Forcer le recalcul des styles pour l'animation (si nécessaire)
      progressBar.style.width = `${task.progression - 0.1}%`;
      progressBar.style.width = `${task.progression}%`;
    }
  });
}

// Appel de la fonction à intervalles réguliers ou lors d'un événement
setInterval(updateProgressBars, 1000); // Met à jour toutes les secondes
    // Fonction pour créer un élément de tâche et l'ajouter au DOM
    function createTaskElement(task) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.dataset.id = task.id;
    
      taskElement.innerHTML = `
        <h2>${task.description}</h2>
        <div class="progress-bar-container">
          <div class="progress-bar" id="progress-bar-${task.id}"></div>
        </div>
      `;
    
      document.getElementById('tasks-container').appendChild(taskElement);
    }
        // Déclencher la mise à jour des barres de progression lors d'un événement (exemple : clic sur un bouton)
        document.getElementById('myButton').addEventListener('click', () => {
          updateProgressBars();
        });

    // Créer les éléments de tâche au chargement
    data.taches.forEach(createTaskElement);

    // Appeler les fonctions à intervalles réguliers
    setInterval(checkReminders, 3600000);
    setInterval(updateProgressBars, 60000);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });