const data = JSON.parse(fs.readFileSync('Timeline.json'));

const chartData = data.map(project => ({
  label: project.title,
  start: project.start,
  end: project.end,
  // ... autres propriétés pour Chart.js
}));

// Créer le graphique avec Chart.js en utilisant chartData