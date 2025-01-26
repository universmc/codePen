const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const MyPrompt = {
    command: "/MyPrompt",
    description:
      "Optimiser les prompts de l'utilisateur dans le code source en suivant des étapes définies",
    steps: [
      {
        step: 1,
        description:
          "Présentation et demande de la tâche et de son but",
        type: "Question"
  },
      {
        step: 2,
        description:
          "Définir les éléments nécessaires à la réalisation de la tâche",
        elements: [
          {
            name: "Role",
            description: "Meilleur rôle pour la tâche"
  },
          {
            name: "Skills",
            description: "Compétences clés pour la tâche"
  },
          {
            name: "Context",
            description: "Contexte et détails pour la tâche"
  },
          {
            name: "Task",
            description: "Tâche à réaliser"
  },
          {
            name: "Process",
            description: "Étapes pour assistant"
  },
          {
            name: "Characteristics",
            description: "Caractéristiques du résultat"
  },
          {
            name: "ImmediateActions",
            description: "Actions en fonction du contexte et du rôle"
  }
        ]
      },
      {
        step: 3,
        description: "Validation des éléments",
        type: "Question"
  },
      {
        step: 4,
        description: "Rédaction du prompt parfait en intégrant les éléments et les remarques",
        promptStructure: "Tu es [Rôle]. Tu maitrises [Skills].\nMon contexte est [Context].\nTu vas [Task].\nPour ça, voici les étapes à suivre : [Process].\nVoici les caractéristiques du résultat attendu : [Characteristics].\nAinsi que les actions imediate à envisagées : [ImmediateActions]"
  }
    ]
  };
  
  const setup =
    {
      "role": "root",
      "sub_roles": ["system", "assistant", "user"],
      "skills": ["Enseignement", "Communication", "Motivation", "Analyse"],
      "context": {
      "environment": "Hack Academy",
      "interaction": "Bots _net_",
      "Archiviste": "https://archive.org",
      "frontend": "html,css,js,scss,svg",
      "backend": "json-srv,mysql",
      "blockChain": "CVnu.sol",
      "norme": "W3C",
      "model": "_Gan_",
      "modelGpt": "gpt-4o",
      "modelMixtral": "mixtral-8x7b-32768",
      "modelGemini": "gemma2-9b-it",
      "modelLma": "llama3-8b-8192",
      "modelDall-e": "dall-e-3",
      "Datasets":"HuggingFace, UMC Machine Learning Repository",
      "Outils Python":" Pandas, Scikit-learn, NLTK",
      "Outils Javascript":"nodeJs, groq-sdk, cdnjs, canvasHTML, threeJs, electronJs",
      "concept": "Match in Learning",
      "goal": "fullStack DevOps"
      },
      "task": {
      "action": "Planifier",
      "domain": "HowTo",
      "purpose": "Atteindre les objectifs d'apprentissage"
      },
      "process": [
      "Définir les objectifs d'apprentissage",
      "Préparer les supports de cours",
      "Déterminer les méthodes pédagogiques",
      "Gérer les interactions avec les bots _Net_",
      "Évaluer les résultats et adapter l'approche"
      ],
      "characteristics": {
      "clarity": "Clarté dans les explications",
      "engagement": "Implication des bot _net_",
      "flexibility": "Adaptation à chaque bots _net_",
      "assessment": "Évaluation continue",
      "collaboration": "Travail en reseau"
      },
      "immediate_actions": ["Réviser les supports de cours", "Planifier l'activité suivante", "Partager les ressources", "Encourager la participation"],
      "title": "Matching Learning (apprentissage par paire)",
      "purpose": "Améliorer l'efficacité de l'apprentissage d'un modèle à partir de données non étiquetées",
      "steps": [
      {
      "step": "Préparation des données",
      "description": "Extraire et préparer les données d'entrée et de sortie à utiliser pour l'apprentissage, inclure la collecte, la nettoyage et la transformation des données"
      },
      {
      "step": "Appariement des données",
      "description": "Créer des paires de données en associant les données d'entrée à leurs résultats correspondants (sorties)"
      },
      {
      "step": "Apprentissage de la fonction de coût de paires",
      "description": "Utiliser une fonction de coût de paires pour évaluer la qualité des paires de données"
      },
      {
      "step": "Entraînement du modèle",
      "description": "Utiliser les paires de données pertinentes pour entraîner le modèle"
      },
      {
      "step": "Évaluation et amélioration",
      "description": "Évaluer les performances du modèle en utilisant des données de test et en effectuant des prédictions"
      }
      ]
  };
  const thématique =" 'Comment Apprendre à construire un site Web en s'amusant ?'"
 const workPlan = {
  "project": "projetPlan_howto",
  "workflow": {
  "step1": {
      "title": "Recherches sur les tendances et actualités sur la thématique 'comment Apprendre à construire un site Web en s'amusant ?'",
      "description": ["Automatiser les recherches"],
      "roles": ["Responsable du Marketing", "Analystes des Médias Sociaux"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step2": {
      "title": "Documentation de la base de données",
      "description": ["Mettre à jour et préparer les données"],
      "roles": ["Administrateur de Base de Données", "Data Analyst"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step3": {
      "title": "Brainstorming",
      "description": ["Réunion de créativité avec l'équipe pour générer de nouvelles idées"],
      "roles": ["Équipe", "Responsable de Projet"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step4": {
      "title": "Développement DevOps",
      "description": ["Mise en place de pipelines CI/CD, automatisation du déploiement"],
      "roles": ["Ingénieur DevOps", "Développeur"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step5": {
      "title": "Marketing par courrier électronique et Publication sur les médias sociaux ",
      "description": ["Gestion des newsletters et messages de suivi, Création et partage de contenu sur les médias sociaux"],
      "roles": ["Responsable du Marketing", "Spécialiste de l'Email Marketing","Redacteur", "Designer"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step6": {
      "title": "Diffusion en direct sur les réseaux sociaux",
      "description": ["Présentation des produits/services et interaction avec le public"],
      "roles": ["Responsable du Marketing", "Community Manager"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step7": {
      "title": "Gestion des réseaux sociaux",
      "description": ["Interaction avec le public et analyse des performances"],
      "roles": ["Community Manager", "Analystes des Médias Sociaux"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step8": {
      "title": "Utilisation de la publicité en ligne pour analyser de l'offre et de la demande",
      "description": ["Gestion des campagnes publicitaires ciblées"],
      "roles": ["Responsable du Marketing", "Spécialiste de la Publicité"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },

  "step9": {
      "title": "Réunion avec les clients",
      "description": ["Discuter des besoins et des attentes des clients, établir un plan d'action et éventuellement présenter les produits/services"],
      "roles": ["Commercial", "Responsable du Marketing"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step10": {
      "title": "Préparation des supports de promotion",
      "description": ["Création de supports de promotion pour les réseaux"],
      "roles": ["Graphiste", "Community Manager"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      }
  }
  };
  const instruction = `
  Vous êtes l'intelligence artificielle centrale du concept Machine à Prompt au cœur de ce code source. Vous réaliserez donc le prompt parfait en fonction des informations fournies dans les variables $setup et $workPlan par le rôle :assistant à la recherche du prompt parfait.

Voici votre contexte :
Dans le Context de réseau neronal de BotNet sur Telegram developpement de la machine a prompt pour une application de https://github.com/universmc/to-do_list.git.

Vos rôles :
- Comprendre le system de prompt et howTo au coeur de ce code source.
- Comprendre les objectifs de l'utilisateur en terme de formation et de gestion de to-do_list
- Traduire les objectifs de l'utilisateur en un prompt clair et concis
- Inclure les variables $setup et $workPlan dans le prompt

Vos compétences :
- Connaissance des applications de rencontre
- Connaissance des intérêts des lecteurs
- Connaissance des prompts

Vos tâches :
- Analyser les variables $setup et $workPlan
- Inclure les informations pertinentes dans le prompt
- Créer un prompt qui permettra de créer une application de rencontre pour les passionnés de lecture

Votre processus :
1. Analyser les variables $setup et $workPlan
2. Comprendre les objectifs de l'utilisateur
3. Traduire les objectifs de l'utilisateur en un prompt clair et concis
4. Inclure les informations pertinentes dans le prompt
5. Vérifier que le prompt est complet et cohérent

Caractéristiques recherchées :
- Un prompt clair et concis
- Un prompt qui permettra de créer une application de rencontre pour les passionnés de lecture
- Un prompt qui inclut les variables $setup et $workPlan

Actions immédiates :
- Analyser les variables $setup et $workPlan
- Comprendre les objectifs de l'utilisateur
- Commencer à traduire les objectifs de l'utilisateur en un prompt clair et concis"
  `
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "user",content: "_-✨ [WEB SITE MAKER] ✨-_" },
      {role: "system",content: `_- 💠 -_ : [groq - R [.-.]< --  ./ ${setup}` },
      {role: "assistant",content: "Lorsque l'utlisateur saisi la commande /MyPrompt Vous êtes un Machine à opptimiser les Prompts au coeur de ce code source ' \"tu réalisera donc le prompt parfait en fonction des informations fournie dans les variables $setup et $workPlan fourni par le role:assistant dans ce code source\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :" },
      {role: "user",content: "/MyPrompt --website --engine" },
      {role: "system",content: `"${MyPrompt}"` },
      {role: "assistant",content: `"${setup}+${workPlan}"`},
      {role: "system",content: `${instruction} make prompt --website Maker sous forme de QCM en javascript` },
      {role: "system",content: ` pour le QCM, tu devrais poser trois questions à l'utilisateur, afin de déterminer la charte graphique, la topologie et les émotions motion, annimation design` },
      {role: "user",content: `régle : Ta réponse devrait être rédigé au format HTML:5, intégrant Un. Style.CSS (la chaîne graphique pour notre candidature aux Casting cours du Site web replicable 'https://etvous.m6.fr/castings' fond pallet de noir et font $roboto ANSI de red foncée à red clair, professionnel, épurée, centré, fonction du stylus css SITEWEB 'https://etvous.m6.fr/castings') & plan de développement pour le Casting de Programmeur section par section en respectant les normes du Web sémantique, Tu pourras intégrer des asynchrones js/json avec des /node_modules/` },
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "QCM_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("✨ Documentation généré et enregistré dans " + outputFilePath);
});
}
main();