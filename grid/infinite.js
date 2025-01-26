class InfiniteGrid {
    constructor() {
      this.grid = [];
    }
  
    getCell(x, y) {
      // Vérifier si la cellule existe déjà, sinon la créer
      if (!this.grid[x]) {
        this.grid[x] = [];
      }
      if (!this.grid[x][y]) {
        this.grid[x][y] = { value: null }; // Initialiser la cellule
      }
      return this.grid[x][y];
    }
  }
  
  const grid = new InfiniteGrid();
  
  // Obtenir la valeur d'une cellule
  const cellValue = grid.getCell(100, 50).value;
  
  // Modifier la valeur d'une cellule
  grid.getCell(-50, 20).value = 'X';