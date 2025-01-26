// script.js
fetch('/data.json') // Corrected filename to 'daily.json'
  .then(response => response.json())
  .then(data => {
    if (data && data.taches) { 
      const tasksContainer = document.getElementById('tasks'); 
      // Update the overall progress bar (if needed)
      const overallProgressBar = document.querySelector('.overall-progress-bar');
      if (overallProgressBar) {
        overallProgressBar.style.width = `${data.objectif_journalier}%`; // Assuming 'objectif_journalier' represents overall progress
      }

      data.taches.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskProgressBar = document.createElement('div');
        taskProgressBar.classList.add('progress-bar');
        taskProgressBar.style.width = `${task.progression}%`;

        taskElement.innerHTML = `
          <h2>${task.description}</h2>
          <div class="progress-bar-container">
            ${taskProgressBar.outerHTML}
          </div>
        `;

        tasksContainer.appendChild(taskElement);
      });
    } else {
      console.error("Error: Invalid data format in daily.json");
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Manage reminders
const now = Date.now();
data.rappels.forEach(rappel => {
  if (rappel.timestamp <= now) {
    // Display a notification or execute an action (e.g., alert, sound)
    alert(rappel.message);
  }
});