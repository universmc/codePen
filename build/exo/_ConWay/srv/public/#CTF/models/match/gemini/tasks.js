const express = require('express');

const port = 1007;
const app = express();

// Dès qu'un message est reçu depuis le thread principal
process.on('message', (event, data) => {
  // Effectuez une tâche asynchrone (exemple : récupérer des tâches à partir d'une API)
  const tasks = getTasks(); // Remplacez cette fonction par votre logique de récupération des tâches

  // Envoie la réponse au thread principal
  process.send({ tasks: tasks });
});

function getTasks() {
  // Votre logique pour récupérer les tâches à partir de votre source de données
  // Exemple :
  return [
    { title: 'Tâche 1', dueDate: '2023-02-15' },
    { title: 'Tâche 2', dueDate: '2023-02-20' },
    // ...
  ];
}

app.get("/heavy", (req, res) => {
    let total = 0;
    for (let i = 0; i < 6_000_000; i++) {
      total++;
    }
    res.send(`The result of the CPU intensive task is ${total}\n`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

console.log(`worker pid=${process.pid}`);