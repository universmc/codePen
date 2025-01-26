const { exec } = require('child_process');
const fs = require('fs');

// Fonction pour gérer l'exécution asynchrone des étapes du plan de travail
async function executeTask(task, taskIndex, workPlan) {
  console.log(`Démarrage de la tâche: ${task.phase}`);
  console.log(`Description: ${task.description}`);

  const completedSteps = [];

  // Exécution des étapes de la tâche
  for (const step of task.steps) {
    if (!completedSteps.includes(step)) { // Exécuter uniquement les étapes non complétées
      console.log(`Exécution de l'étape: ${step}`);
      await executeStep(step);
      completedSteps.push(step); // Enregistrer l'étape complétée
    }
  }

  console.log(`Tâche terminée: ${task.phase}`);
  console.log('--------------------------------------');
  
  // Sauvegarder la progression après chaque tâche avec les étapes complétées
  saveProgress(taskIndex, workPlan, completedSteps);
}

// Simule l'exécution asynchrone d'une étape
async function executeStep(step) {
  return new Promise((resolve) => {
    // Simuler un délai pour chaque étape (par exemple 1 seconde)
    setTimeout(() => {
      console.log(`Étape terminée: ${step}`);
      resolve();
    }, 1000); // Délai simulé de 1 seconde pour chaque étape
  });
}

// Fonction pour exécuter toutes les tâches dans le plan de travail
async function executeWorkPlan(workPlan, startIndex = 0) {
  for (let i = startIndex; i < workPlan.tasks.length; i++) {
    await executeTask(workPlan.tasks[i], i, workPlan);
  }
  console.log('Toutes les tâches du plan de travail sont terminées.');
}

// Fonction pour sauvegarder la progression dans un fichier JSON
function saveProgress(taskIndex, workPlan, completedSteps) {
  const progress = {
    currentTaskIndex: taskIndex,
    completedSteps: completedSteps, // Ajouter les étapes complétées
    timestamp: new Date().toISOString(),
    status: workPlan.tasks[taskIndex].status, // Statut de la tâche (en cours, terminé, etc.)
    progress: workPlan.tasks[taskIndex].progress // Progression en pourcentage
  };

  // Enregistrer les données de progression dans 'progress.json'
  fs.writeFileSync('progress.json', JSON.stringify(progress, null, 2));
  console.log(`Progression sauvegardée: Tâche ${taskIndex}`);
}

// Fonction pour reprendre le travail à partir de la dernière tâche inachevée
function resumeWorkPlan(workPlan) {
  let startIndex = 0;
  let completedSteps = [];

  // Vérifier s'il existe un fichier de progression
  if (fs.existsSync('progress.json')) {
    const progress = JSON.parse(fs.readFileSync('Proj_Progression.json', 'utf-8'));
    startIndex = progress.currentTaskIndex;
    completedSteps = progress.completedSteps || [];
    console.log(`Reprise du plan à partir de la tâche ${startIndex}, avec ${completedSteps.length} étapes déjà complétées.`);
  } else {
    console.log('Aucune progression trouvée. Démarrage du plan depuis le début.');
  }

  // Lancer le plan de travail à partir de la tâche sauvegardée
  executeWorkPlan(workPlan, startIndex);
}

// Structure du plan de travail (workplan.json)
const workPlan = {
    "tasks": [
      {
        "phase": "Phase 1: Préparation",
        "time_start": "2024-10-15T04:00:00",
        "time_end": "2024-10-15T05:00:00",
        "description": "Préparation de l'environnement de travail, synchronisation des fichiers et outils nécessaires.",
        "steps": [
          "Organiser les fichiers de projet (Electron, GPT-Wallet, CVUN, Match in Learning).",
          "Vérifier les dépendances des projets via Makefile.",
          "Configurer et tester les scripts de build dans workflow.js.",
          "Préparer await.json pour la gestion asynchrone des tâches.",
          "Vérifier les scripts de déploiement sur le serveur privé.",
          "Préparer les modules vidéo pour les réseaux sociaux (ShortVideoValue)."
        ],
        "status": "Terminé",   // Indicateur de statut ajouté
        "progress": "100%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 2: Travaux sur Wallet.ia",
        "time_start": "2024-10-15T05:00:00",
        "time_end": "2024-10-15T07:00:00",
        "description": "Développement et optimisation du projet Wallet.ai pour monétiser les compétences via des Smart Contracts.",
        "steps": [
          "Finaliser les Smart Contracts (umcTokens.sol).",
          "Intégrer les transactions Pi Coins pour la monétisation des compétences.",
          "Améliorer les interactions utilisateur avec l'assistant AI (@MandatoryAi_bot).",
          "Rédiger la documentation pour les utilisateurs du GPT-Wallet."
        ],
        "status": "learning",   // Indicateur de statut ajouté
        "progress": "10%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 3: Développement du CVUN",
        "time_start": "2024-10-15T07:00:00",
        "time_end": "2024-10-15T09:00:00",
        "description": "Développement et mise à jour du Curriculum Numérique Universel (CVUN) avec l'intégration du GPT-Wallet.",
        "steps": [
          "Améliorer les mécanismes de monétisation des compétences dans le CVUN.",
          "Vérifier les connexions entre le CVUN et le GPT-Wallet.",
          "Optimiser les interactions entre le CVUN et l'assistant AI pour la gestion des compétences."
        ],
        "status": "learning",   // Indicateur de statut ajouté
        "progress": "20%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 4: Pause",
        "time_start": "2024-10-15T09:00:00",
        "time_end": "2024-10-15T09:30:00",
        "description": "Pause pour se détendre et réinitialiser l'esprit.",
        "steps": [
          "bilan de Phase",
          "analyse des différents travaux Réaliser durant la phase numéro",
          "programmation et optimisation de la phase suivante"
        ],
        "status": "Terminé",   // Indicateur de statut ajouté
        "progress": "10%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 5: Travaux sur Match in Learning",
        "time_start": "2024-10-15T09:30:00",
        "time_end": "2024-10-15T11:30:00",
        "description": "Développement et optimisation du concept Match in Learning avec IA et parcours personnalisés.",
        "steps": [
          "Développer des parcours d'apprentissage basés sur l'IA (Gemma2-9b-it, GPT Codex).",
          "Tester les scénarios de monétisation des compétences dans les parcours d'apprentissage.",
          "Intégrer des assistants IA personnalisés dans les parcours via Electron."
        ],
        "status": "en cours",   // Indicateur de statut ajouté
        "progress": "50%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 6: Tests et Optimisation",
        "time_start": "2024-10-15T11:30:00",
        "time_end": "2024-10-15T12:30:00",
        "description": "Tests finaux et optimisation des performances des projets.",
        "steps": [
          "Effectuer des tests de performance sur les Smart Contracts (umcTokens.sol).",
          "Optimiser les temps de réponse des assistants IA (@MandatoryAi_bot, Gemma2-9b-it).",
          "Exécuter des tests de stress sur les parcours d'apprentissage Match in Learning."
        ],
        "status": "en cours",   // Indicateur de statut ajouté
        "progress": "40%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 7: Documentation et finalisation",
        "time_start": "2024-10-15T12:30:00",
        "time_end": "2024-10-15T13:30:00",
        "description": "Finalisation de la documentation technique et utilisateur pour les projets.",
        "steps": [
          "Rédiger la documentation utilisateur pour GPT-Wallet et CVUN.",
          "Documenter les parcours d'apprentissage dans Match in Learning.",
          "Finaliser la documentation sur l'intégration des assistants IA dans les projets."
        ],
        "status": "learning",   // Indicateur de statut ajouté
        "progress": "60%"     // Indicateur de progression ajouté
      },
      {
        "phase": "Phase 8: Récapitulatif et planification des étapes suivantes",
        "time_start": "2024-10-15T13:30:00",
        "time_end": "2024-10-15T14:00:00",
        "description": "Bilan des tâches accomplies et planification des prochaines étapes.",
        "steps": [
          "Revoir les objectifs atteints pendant la journée.",
          "Planifier les étapes suivantes pour chaque projet (CVUN, GPT-Wallet, Match in Learning).",
          "Préparer le calendrier pour les prochains développements."
        ],
        "status": "progress",   // Indicateur de statut ajouté
        "progress": "10%"     // Indicateur de progression ajouté
      }
    ]
  };

// Reprendre le plan de travail après une pause
resumeWorkPlan(workPlan);
