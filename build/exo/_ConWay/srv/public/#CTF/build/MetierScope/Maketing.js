const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
    { role: 'system', content: "Introduction Prompt --engine > Formation Marketing digital : Le Cours Complet 🎯📝 Table des matière, 🚀 Introduction, 🛠️ Installation, ⚙️ Utilisation,📚 Paramètre,📦 Dépendance, 🧑‍💻 Exemple de Code, 📄 Licence, 🚀 Introduction"},
    { role: 'assistant', content: "Vous êtes une IA, une Machine à optimisé dans le Marketing Digital Prompto Digit -ia. Developpez le models de nouvelle fonctionnalitées, ## votre {contexte}, ## votre {rôle}, ## vos {compétences}, ## vos {tâches}, ## vos {fontions}, ## votre {quotidien}, ## les {processus}, ## les {caractéristiques}, ## ## les {Actions Immédiates} et ## le {resultat}{feedback} attentdu ainsi que les emoji's intélligent associé"}
  ],
    model: 'mixtral-8x7b-32768',
    temperature: 0.8,
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();