const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  console.log("Démarrage de la session de brainstorming");

  const build = "Sessions"
  const brainstorm = `https://github.com/universmc/brainstroming.git`

  const id = "idées";

  const TimeStamps = `{$date_shell}`;
  const TimeStampID = {build}+(TimeStamps)+{id}+{brainstorm};

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {"role": "system","content":`${TimeStamps}+`},
      {"role": "assistant","content":`Connection : ${brainstorm}+`},
      {"role": "user","content":`Connection : groq make update`},
      {"role": "assistant","content":`initialisation d'une session de brainstorming sur la création d'une idée intelligente Transformable et programmable`},
      {
        "role": "user",
        "content": "Bonjour, commençons une session de brainstorming sur 🔒 github/universmc html, css, JavaScript."
      },
      {
        "role": "assistant",
        "content": "bien sûr ! Je suis une IA, heureuse de pouvoir t'aider. Voici des Astuces courantes pour L'apprentissage automatique des intelligence artificielles générale, des emojis et des solutions pour le `brainstorming-app session` sur github. Bonne chance avec votre projet de brainstroming et d'💡 = idée brillante`. 😊"
      },
      {
        "role": "system",
        "content": "generation d'💡 = idée brillante`. en cours (loading + emoji ++)"
      },
    ],
    "model": "mixtral-8x7b-32768",
    "temperature": 0.8,
    "max_tokens": 2042,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  let fullResponse = ""; // Initialisation d'une variable pour stocker la réponse complète

  for await (const chunk of chatCompletion) {
    const content = chunk.choices[0]?.delta?.content || '';
    fullResponse += content; // Accumulation des fragments de texte dans la variable fullResponse
  }

  console.log("Réception de la réponse complète de l'IA : ", fullResponse); // Affichage de la réponse complète

  console.log("💻 Fin de la session de brainstorming[univers-mc.cloud].");
}

main().catch(console.error);