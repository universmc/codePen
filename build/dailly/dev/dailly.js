// script.js
fetch('dailly.json')
  .then(response => response.json())
  .then(data => {
    const tasksContainer = document.getElementById('tasks');
    // Mettre à jour la barre de progression en fonction des données
    const progressBar = document.querySelector('.progress-bar-fill');
    progressBar.style.width = `${data.progression}%`;
    data.taches.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');

      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      progressBar.style.width = `${task.progression}%`;

      taskElement.innerHTML = `
        <h2>${task.description}</h2>
        <div class="progress-bar-container">
          ${progressBar.outerHTML}
        </div>
      `;

      tasksContainer.appendChild(taskElement);
    });
        // Gérer les rappels
        const now = Date.now();
        data.rappels.forEach(rappel => {
          if (rappel.timestamp <= now) {
            // Afficher une notification ou exécuter une action
            alert(rappel.message);
          }
    });
  });