// Définition des paliers et des niveaux
const levels = {
    junior: 500,   // Niveau de base (junior)
    intermediate: 2500,  // Niveau intermédiaire
    senior: 5000   // Niveau avancé (senior)
};

// Calculer le palier basé sur l'expérience
function calculateLevel(experience) {
    if (experience < levels.junior) {
        return "Apprenti";
    } else if (experience >= levels.junior && experience < levels.intermediate) {
        return "Junior";
    } else if (experience >= levels.intermediate && experience < levels.senior) {
        return "Intermédiaire";
    } else {
        return "Senior";
    }
}

// Fonction pour calculer la différence de potentiel entre deux niveaux
function potentialDifference(currentLevel, nextLevel) {
    if (levels[nextLevel] && levels[currentLevel]) {
        return levels[nextLevel] - levels[currentLevel];
    } else {
        throw new Error("Niveau non valide.");
    }
}

// Exemple de progression d'un utilisateur
let userExperience = 1200;  // Points d'expérience actuels
let userLevel = calculateLevel(userExperience);

console.log("Niveau actuel de l'utilisateur : " + userLevel);

// Calculer la différence de potentiel entre Junior et Senior
let potentialGap = potentialDifference("junior", "senior");
console.log("Différence de potentiel entre Junior et Senior : " + potentialGap + " PiCoin");

// Ajouter des points d'expérience à l'utilisateur
userExperience += 3000;
userLevel = calculateLevel(userExperience);
console.log("Niveau après mise à jour : " + userLevel);
