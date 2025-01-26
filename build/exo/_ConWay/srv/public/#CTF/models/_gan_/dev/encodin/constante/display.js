// welcomeMessage.js

import { projectDetails } from './portfolio.js';

export function displayWelcomeMessage() {
    console.log(`Bienvenue dans le cours d'optimisation JavaScript pour le projet ${projectDetails.number}.`);
    console.log(`Projet : ${projectDetails.name}, Complété : ${projectDetails.completed}`);
}

export function displayTechnologiesAndFeatures() {
    console.log("Technologies utilisées :", projectDetails.technologies.join(", "));
    console.log("Fonctionnalités du projet :", projectDetails.features);
}
