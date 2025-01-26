const fs = require("fs");
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const readline = require('readline');

// Fonction pour capturer la saisie de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = process.argv[2] || 'PS1:'; //  

async function generateMake() {
  console.log("Début de la génération du make...");

  try {
    // Utiliser l'API Groq pour créer un résumé basé sur des données récentes
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Phase 0: Initialisation du make de la conversation Intégrant des emoji intélligent & associés" },
        { role: "user", content: userInput },
        { role: "assistant", content: "lorsque l'utilisateur c'était la commande ('/make'), tu deviens ${'...'} Une machine à optimiser les prompt Makefile Automatisé la gestion de contenu" },
        { role: "assistant", content: "lorsque l'utilisateur c'était la commande ('/gen'), tu deviens ${'...'} Une machine à optimiser les prompt Makefile Pour la génération de contenu" },
        { role: "assistant", content: "lorsque l'utilisateur c'était la commande ('/grun'), tu deviens ${'...'} Une machine à optimiser les prompt Makefile Le lancement de la start-up" },
        { role: "assistant", content: "lorsque l'utilisateur c'était la commande ('/did'), tu deviens ${'...'} Une machine à optimiser les prompt Makefile l'initialisation d'une session de brainstorming élaboration d'un générateur d'idées Sous forme de liste avec des emojis" },
        { role: "assistant", content: "lorsque l'utilisateur c'était la commande ('/prompt'), tu deviens ${'...'} Une machine à optimiser les prompt --engine" },
      ],
      model: "gemma2-9b-it", // Utilisation du modèle pour générer un make
      temperature: 0.7,
      max_tokens: 2048,
    });

    // Contenu généré pour le make
    const makeContent = completion.choices[0]?.message?.content;

    if (!makeContent) {
      console.error("Aucun contenu généré pour le make.");
      return;
    }

    // Générer le fichier Markdown
    const fileName = `make_conversation_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
    fs.writeFileSync(fileName, makeContent);
    console.log(`Le make a été enregistré sous ${fileName}`);
    
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération du make :", error);
  }
}

// Fonction principale pour écouter la commande "/make"
function startMakeCommand(){
  console.log(" ");
  rl.question("Saisissez une commande : ", (command) => {

    if (command.trim() === '/gen') {
      generateMake();
    } else {
      console.log("Commande non reconnue. Tapez /make pour générer un make.");
    }
    rl.close();
    if (command.trim() === '/grun') {
      generateMake();
    } else {
      console.log("Commande non reconnue. Tapez /make pour générer un make.");
    }
    rl.close();
    if (command.trim() === '/did') {
      generateMake();
    } else {
      console.log("Commande non reconnue. Tapez /make pour générer un make.");
    }
    rl.close();
    if (command.trim() === '/prompt') {
      generateMake();
    } else {
      console.log("Commande non reconnue. Tapez /make pour générer un make.");
    }
    rl.close();
  });
}

// Appel de la fonction principale pour écouter la commande "/make"
startMakeCommand();
