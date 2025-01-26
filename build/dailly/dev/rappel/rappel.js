function updateProgressBars() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(taskElement => {
      const taskId = taskElement.dataset.id; // Supposons que l'ID de la tâche est stocké dans un attribut data-id
      const task = data.taches.find(t => t.id === taskId);
  
      if (task) {
        const progressBar = taskElement.querySelector('.progress-bar');
        progressBar.style.width = `${task.progression}%`;
      }
    });
  }
  
  // ... (reste du code)
  
  // Exemple de stockage local (localStorage)
  function saveData() {
    localStorage.setItem('tasksData', JSON.stringify(data));
  }
  
  // Exemple de chargement des données au démarrage
  function loadData() {
    const savedData = localStorage.getItem('tasksData');
    if (savedData) {
      data = JSON.parse(savedData);
    }
  }
  
  loadData();
  setInterval(checkReminders, 3600000);
  setInterval(updateProgressBars, 60000);
  setInterval(saveData, 10000); // Sauvegarde toutes les 10 secondes