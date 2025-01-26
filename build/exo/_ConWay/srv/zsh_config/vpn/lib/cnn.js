const fs = require('fs');
const Groq = require('groq-sdk');
const axios = require('axios');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
// Define the prompts and roles for each model
const Μχχχήλ = "χιχαΜλ"
const χιχαλι = `"${Μχχχήλ}"`
const Μιχαήλ = "χιχαλι"
const χιχαΜλ = `"${Μιχαήλ}"`

const encoding = `"${χιχαλι}:/${χιχαΜλ}"`

const mission = `"${encoding}"`

const promptingMC = {
  mission: `"perform tasks like lemmatization and Tokenizer Timestamp, encryption > χιχαλι:/χιχαλι" and potentially >> (e.g., "encoding") ${mission}.`,
  context: "Enhancing text generation using MC.",
  role: "AI Language Expert",
  tasks: [`"Text Generation", "Context Understanding","${encoding} > ${Μιχαήλ}"`],
  expectedOutcome: "High-quality, coherent text output."
};

const promptingGemini = {
  mission: `"perform tasks like lemmatization and Tokenizer Timestamp, encryption > χιχαλι:/χιχαλι" and potentially >> (e.g., "encoding") ${mission}.`,
  context: "Utilizing GANs for data refinement.",
  role: "AI Generalist",
  tasks: ["Data Generation", "Dynamic Modeling"],
  expectedOutcome: "Improved and adaptable data sets."
};

// Execute the MC model prompting
async function executePromptingMC() {
  try {
    console.log("Starting MC content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `INITIALISATIUON DE LA ${mission}` },
        { role: "assistant", content: JSON.stringify(promptingMC) },
        { role: "user", content: `Génère un Présentation détaillé la ${mission} pour le develloppement de ${promptingGemini} pour comprendre le (prompt --engine) a l'aide d'EMOJI intélliget, avec les points clés abordés, les résumés des sujets et les prochaines étapes. Intégré les 💻 emoji's intélligent & associés à la présentation`}
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/χιχαλι_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`MC content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing MC prompting:", error);
  }
}

// Execute the Gemini model prompting
async function executePromptingGemini() {
  try {
    console.log("Starting Gemini data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `INITIALISATIUON DE LA ${mission}` },
        { role: "assistant", content: JSON.stringify(promptingGemini) },
        { role: "user", content: `Génère un Présentation détaillé la ${mission} pour le develloppement de ${promptingMC} pour comprendre le (prompt --engine) a l'aide d'EMOJI intélliget, avec les points clés abordés, les résumés des sujets et les prochaines étapes. Intégré les 💻 emoji's intélligent & associés à la présentation`}
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/χιχαλ_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Gemini content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Gemini prompting:", error);
  }
}

// Main function to execute both models
async function main() {
  await executePromptingMC();
  await executePromptingGemini();
  
  console.log("Model comparison completed. Check output files for results.");
}

main().catch(console.error);
