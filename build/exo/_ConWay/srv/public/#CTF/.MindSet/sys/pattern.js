
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function initiateMission() {

    const pad = `"[]"`;
    const TXT = `"[exemple:hAshTag]"`;
    const remix = `"[tags.list]"`;
    const asign = `"[j-mc]"`;
    const source = `"${remix},${TXT},,${asign},${pad}"`;

  const messages = [
    { role: "system", name: "ia", content:`analyse` },
    { role: "user", name: "agent", content:`${source}` },
    { role: "assistant", name: "worker", content:`${source}` },
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
