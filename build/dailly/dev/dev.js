// script.js
fetch('dally.json')
  .then(response => response.json())
  .then(data => {
    const tasksContainer = document.getElementById('tasks');

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
  });