const crypto = require('crypto');

// Fonction pour générer une graine basée sur l'horodatage Unix
function generateSeed() {
    return Date.now().toString();
}

// Fonction pour générer un nombre aléatoire de 24 chiffres basé sur la graine
function generateRandomNumber(seed) {
    const hash = crypto.createHash('sha256');
    hash.update(seed);
    const hashValue = hash.digest('hex');
    return BigInt('0x' + hashValue.slice(0, 101)).toString().padStart(24, '0');
}

// Fonction pour mettre à jour l'affichage de l'heure et du nombre aléatoire
function updateDisplay() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const seed = generateSeed();
    const randomNumber = generateRandomNumber(seed);

console.clear(); // Efface la console à chaque mise à jour
console.log(`⏱️ : ${hours}:${minutes}:${seconds}.${milliseconds}`);
console.log('');
console.log('╔═════════════════════════════════════════════════════════════════════════════════════════╗');
console.log('║[📗 📕 📒]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈codex┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>');  
console.log('╠═════════════════════════════════════════════════════════════════════════════════════════╣');
console.log('║                      ║ >                                                                ║');
console.log('║                      ║   Welcom                                                         ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║   [Ø]                ║                                                                  ║');
console.log('║   [Ø]                ║                                                                  ║');
console.log('║   [Ø]                ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('║                      ║                                                                  ║');
console.log('╠═════════════════════════════════════════════════════════════════════════════════════════╣');
console.log(`║ █░░ ${randomNumber} ░░█║`);
console.log('╚═════════════════════════════════════════════════════════════════════════════════════════╝');
}

// Mettre à jour l'affichage toutes les 100 millisecondes (ajuster selon besoin)
setInterval(updateDisplay, 100);