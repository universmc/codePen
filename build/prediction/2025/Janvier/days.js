const fs = require('fs');

// Function to read the JSON file
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return []; // Return empty array on error
  }
}

const filePath = 'day.json'; // Changement de nom de fichier
const timelineData = readJsonFile(filePath);
console.log("timelineData:", timelineData); // Log for debugging


if (Array.isArray(timelineData)) {
  timelineData.forEach(dayData => {
    trainModelForDay(dayData);
  });
} else {
  console.error("timelineData is not an array. Please check your days.json file format.");
}

function getTasksForDay(timelineData, date) {
  return timelineData.find(day => day.date === date)?.tasks || [];
}

function trainModelForDay(dayData) {
  // ... (votre logique d'entraînement, en utilisant les tâches de la journée)
}