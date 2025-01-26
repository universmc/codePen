const fs = require('fs');

// Fonction pour lire le fichier JSON
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier : ${error}`);
    return [];
  }
}

// Fonction pour extraire les tâches d'un mois spécifique
function getTasksForMonth(timelineData, month) {
  const targetMonth = new Date(`${month}-01`).getMonth() + 1; // Mois en nombre (1-12)
  return timelineData.find((item) => item.id === targetMonth)?.tasks || [];
}

// Exemple d'utilisation
const filePath = 'Timeline.json'; // Chemin vers votre fichier JSON
const timelineData = readJsonFile(filePath);

// Extraire les tâches pour le mois de janvier
const MarsTasks = getTasksForMonth(timelineData, 'Mars'); 

console.log("Tâches pour Mars:", MarsTasks);