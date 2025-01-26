const fs = require('fs');
const { Telegraf } = require('telegraf');
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Fonction pour générer des prompts personnalisés
function generatePrompt(subject, params) {
    return `Crée un guide détaillé pour ${params.level} expliquant comment générer un revenu passif de ${params.goal} par mois en utilisant ${subject} et Gemini. Couvre les aspects suivants :
      * Identifier des niches de marché
      * Créer des produits ou services numériques
      * Mettre en place une stratégie de marketing
      * Automatiser les processus
      * Évaluer les risques et les opportunités`;
  }

  const subjects = [
    "smartContract",
    "wallet",
    "bilan-actif",
    "bilan-passif",
    "compte_resultat",
  ];
// Fonction principale
async function main() {
  const subject = process.argv[2] || 'revenu_passif_gemini';
  const params = {
    // Paramètres personnalisables : niveau de détail, public cible, etc.
    level: 'débutant',
    focus: 'cryptomonnaies',
    goal: '100€/jour'
  };
  const prompt = generatePrompt(subject, params);
  try {
    const completion = await groq.chat.completions.create({
      // ... (configuration du modèle, des messages, etc.)
      messages: [
        {role: "system", content:"Phase 0: initialisation"},
        {role: "user", content: `${subjects}`  },
        {role: "assistant", content: "bonjour et bienvenue, nous développons le sujet de conversation dans la variable $subject"  },
        {role: "system", content:"Imaginez un machine à prompt pour créer un Model de Machine_learning avec groq-sdk. les prompts pour la gestion du code groq-sdk serons transformer pour le projet \" wallet \". Voici ## le contexte, ## Le dataset, HTML,SCSS,JS,JSX,JSON ++ ... ## les Variables, ## les parametres ## Les fonctions,## boucle éventuel ## vos tâches, ## votre processus, et ## les caractéristiques, inférence recherchées: ## Actions Immédiates ## le prompt ultime pour generé le code source ## le code source attendu "},
        {role: "user", content: subject  },
        {role: "system", content:"Phase 2: Conceptualisation"},
        {role: "assistant", content: "Définition des concepts clés..."},
      //  {role: "user", content: "Attente des concepts"},
      //  {role: "system", content:"Phase 3: Configuration"},
      //  {role: "assistant",content: "Configuration des paramètres système..."},
      //  {role: "user", content: "Confirmation de la configuration"},
      //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
      //  {role: "assistant",content: "Entraînement en cours..."},
      //  {role: "user",content: "Suivi de l'entraînement"},
      //  // Correction de la duplication et de la faute de frappe
      //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
      //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
      //  {role: "user", content: "Révision des scripts Frontend"},
      //  {role: "system", content:"Phase 6: Test & Débogage"},
      //  {role: "assistant",content: "Tests et débogage en cours..."},
      //  {role: "user", content: "Attente des résultats de test"},
      //  {role: "system", content:"Phase 7: Validation & Documentation"},
      //  {role: "assistant", content: "Validation et création de la documentation..."},
      //  {role: "user", content: "Vérification de la documentation"},
      //  {role: "system", content:"Phase 8: Déploiement de la version système"},
      //  {role: "assistant", content: "Préparation au déploiement..."},
      //  {role: "user", content: "Prêt pour le déploiement"},
      //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
      //  {role: "assistant", content: "Annonce en cours..."},
        {role: "user", content: "Participation à l'annonce"},
      ],
      model: "gemma2-9b-it", //
      temperature: 0.5,
      max_tokens: 4096,
    }).then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = `test_SMart_Contrat-${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      console.log(mdContent);       
fs.writeFileSync(outputFilePath, mdContent);
      console.log(`Le How-To sur ${subject} a été enregistrée sur github dans ${outputFilePath}`);       
    });
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}
main(); 
