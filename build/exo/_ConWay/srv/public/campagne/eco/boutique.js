
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function initiateMission() {

  let TITRE = "Les secrets d'une boutique en ligne éphémère"
  const ACTIONS = `"
    ${TITRE}=['role','context']"; 
  "`
  const messages = [
    { role: "system", name: "introduction_event", content: `bonjour assistant Youtube prompt --ia --help, tu es invitée à participer à un défi spécial d'intelligence artificielle en ${ACTIONS}. Serais-tu intéressée par ceux genre de chose ?` },
    { role: "assistant", name: "event", content: `intéressée par l'idée d'ouvrire un boutique en ligne éphémère"` },
    { role: "user", name: "gemini_accept", content: "Je suis prête à relever le défi ! Peux-tu m'en dire plus ?" },
    { role: "assistant", name: "description_event", content: "Le défi est de produire une vidéo de 14 secondes basée sur 5 séquences <figure/> js/json." },
    { role: "user", name: "criteria_question", content: "Quels seront les critères d'évaluation ?" },
    { role: "system", name: "evaluation_criteria", content: "Les critères incluent l'efficacité, la rapidité, et la pertinence des résultats." },
    { role: "assistant", name: "ready_confirmation", content: "Je suis prête à commencer." }
  ];

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "gemma2-9b-it",
      temperature: 0.7,
      max_tokens: 2048
    });

    const completionText = chatCompletion.choices[0]?.message?.content || "Pas de réponse générée";
    console.log("Réponse générée par l'assistant :", completionText);
  } catch (error) {
    console.error("Erreur lors de la génération de la complétion :", error.message);
  }
}

initiateMission();
