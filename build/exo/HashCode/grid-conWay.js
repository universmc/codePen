const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Initialisation du jeu
  let grid = [];
  let rows = 10;
  let cols = 10;
  let aliveCells = 0;
  let state = [];
  
  // Fonction pour initialiser le jeu
  function initGame() {
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = Math.random() < 0.5 ? 1 : 0; // Aléatoirement initialiser les cellules
        if (grid[i][j] === 1) aliveCells++;
      }
    }
    state = grid.map(JSON.stringify);
  }
  
  // Fonction pour appliquer les règles du jeu
  function applyRules() {
    let newGrid = [];
    for (let i = 0; i < rows; i++) {
      newGrid[i] = [];
      for (let j = 0; j < cols; j++) {
        let aliveNeighbors = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols) {
              if (grid[i + x][j + y] === 1) aliveNeighbors++;
            }
          }
        }
        if (grid[i][j] === 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
          newGrid[i][j] = 0; // Mort
        } else if (grid[i][j] === 0 && aliveNeighbors === 3) {
          newGrid[i][j] = 1; // Naissance
        } else {
          newGrid[i][j] = grid[i][j]; // Survie
        }
      }
    }
    grid = newGrid;
    state = grid.map(JSON.stringify);
  }
  
  // Fonction pour générer l'ASCII ART
  function generateASCIIArt() {
    let asciiArt = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) asciiArt += "*"; // Cellule vivante
        else asciiArt += " "; // Cellule morte
      }
      asciiArt += "\n";
    }
    return asciiArt;
  }
  
  // Interaction avec l'utilisateur
  function handleCommand(command) {
    switch (command) {
      case "suivre":
        applyRules();
        break;
      case "reset":
        initGame();
        break;
      default:
        console.log("Commande invalide");
    }
  }
  
  // Initialisation du jeu
  initGame();
  
  // Boucle principale
  while (true) {
      let asciiArt = generateASCIIArt();
      console.log(asciiArt);
      readline.question("Saisissez une commande (suivre, reset, etc.)", (command) => {
        handleCommand(command);
      });
    }
  
  readline.on('close', () => {
    console.log(' quitté');
  });