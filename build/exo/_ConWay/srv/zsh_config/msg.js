// Maintenant, on utilise electron.fork pour créer un Web Worker
const { fork } = require('child_process');
const path = require('path');

const agent = fork(path.join(__dirname, 'tasks.js'));

// Récupérer les tâches une fois que le thread principal est prêt
window.addEventListener('DOMContentLoaded', () => {
    agent.on('message', (data) => {
      // Mettez à jour l'état de sorte à afficher les tâches récupérées par le Web Worker
  store.update({ tasks: data.tasks });
    });
  });
  
  // Gérer l'ajout d'une nouvelle tâche
  store.subscribe(() => {
    let tasks = store.getState().tasks;
    tasks = tasks.concat({ title: store.getState().newTask, dueDate: '' });
    // Envoyer les tâches au Web Worker pour que celles-ci soient récupérées
  agent.send({ tasks: tasks });
  
    // Effacer la tâche temporaire
  store.update({ newTask: '' });
  });
  