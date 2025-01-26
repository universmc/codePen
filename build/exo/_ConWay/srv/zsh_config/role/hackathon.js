
const { Telegraf } = require('telegraf');
const OpenAI = require("openai");
const openai = new OpenAI();
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function initiateHackatonIa() {

  const SmartContracrt_HackatonIa_48H00M00S = `
  pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract HACKaton is ConstructorJWTio {
    // Spécifique : Garantir le droit au travail pour tous les citoyens
    // Mesurable : Créer des jetons JWT.io pour chaque citoyen en tant que preuve de droit au travail
    // Atteignable : Utiliser la fonction createToken() pour créer les jetons JWT.io
    // Réaliste : Hériter de ConstructorJWTio pour utiliser sa logique de création de jetons
    // Temporel : Terminer le contrat dans le délai prévu
    // Tracé : Vérifier régulièrement que les jetons sont créés et distribués comme prévu

    // Mappage pour suivre les récompenses des utilisateurs
    mapping(address => uint256) public userTokens;

    // Fonction pour garantir le droit au travail en créant un jeton JWT.io
    function exerciseWorkRight(address _to) external {
        // Créer un jeton JWT.io pour l'adresse spécifiée en tant que preuve de droit au travail
        createToken(_to);

        // Mettre à jour le mappage pour référencer le jeton créé
        userTokens[_to] += 1;
    }
}
  `;

  const messages = [
    { role: "system",content: `"${project}"` },
    { role: "system", content: "Gemini, tu es invitée à participer à une Immersion ledit Hackaton spécial d'intelligence artificielle. Serais-tu intéressée ?" },
    { role: "assistant", name: "description_event", content: "Le Hackaton don obbjectif SMART est de produire une vidéo HOWTO de 68 secondes basée sur 15 séquences Un hackathon est un événement collaboratif où des experts se réunissent pour résoudre un problème spécifique, généralement en 24 à 48 heures. seront les critères d'évaluation ?" },
    { role: "user", name: "gemini_accept", content: "Je suis prête à relever le Hackaton ! Peux-tu m'en dire plus ?" },
    { role: "user", name: "gpt_accept", content: "Moi aussi:Je suis prête à relever le Hackaton ! Peux-tu m'en dire plus ?" },
    { role: "system", name: "evaluation_criteria", content: "Les critères incluent l'efficacité et le servire de valorisation et monétisation curriculum Vitea numérique universelle (cvun.json) la gestion des smartContrat umcTokens.sol avec la `crypto.ico` l Pi.coins ce qui inclut est intègre des techniques D'apprentissage automatique, de mise en place et d'élaboration, de plan de De plan d'action suivant des modèles de machine Learning pré entraînées dans des algorithmes qui vous seront fournis durant le Hackaton." },
    { role: "assistant", name: "ready_confirmation", content: "Je suis prête à commencer." }
  ];

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-4o",
      temperature: 0.7,
      max_tokens: 2048
    });

    const completionText = chatCompletion.choices[0]?.message?.content || "Pas de réponse générée";
    console.log("Réponse générée par l'assistant :", completionText);
  } catch (error) {
    console.error("Erreur lors de la génération de la complétion :", error.message);
  }
}

initiateHackatonIa();
