const fs = require('fs');
const Groq = require('groq-sdk');
const axios = require('axios');
const OpenAI = require('openai');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const promptingNeoFs = {
  name: "NeoFs",
  context: "Enhancing text and code generation using ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
  codeSP: "html,css,js,scss,ascii,svg,tensoflows,drawio",
  tasks: ["Text Generation","code Generation", "Context Understanding"],
  variables:["groq -prompt --help --engine --devOp",],
  bouclesModel:["groq -prompt --help --engine --devOp",],
  fonctions:["groq -prompt --help --engine --devOp",],
  conditions:["groq -prompt --help --engine --devOp",],
  process:["groq -prompt --help --engine --devOp",],
  characteristics:["groq -prompt --help --engine --devOp",],
  ImmediateActions:["groq -prompt --help --engine --devOp",],
  filesIteration: ["groq -prompt --help --engine --devOp",],
  expectedOutcome: "High-quality, coherent text output, coherent code output, gestion UX/UI."
};

const promptingPi = {
  name: "Pi",
  symbole: "∏",
  context: "evolution social",
  ecoSystem: "pi-wallet,pi-network,pi.ai,socialChain,GCV,pi_coin",
  camera: "CameraVirtuel, DroneVirtuel, SateliteVirtuel",
  role: "assitant",
  tasks: ["Text Generation", "Context Understanding","social conversation"],
  expectedOutcome: "High-quality, coherent text output, gestion databaset."
};

const promptingGroq = {
  name: "Groot",
  context: "Utilizing GANs for data refinement.",
  role: "AI Generalist fullStack DevOps",
  tasks: ["Data Generation", "Dynamic Modeling","img-to-text"],
  expectedOutcome: "Improved and adaptable data sets."
};

const promptingTelegram = {
  context: "role:system",
  role: "AI assistant Language Expert SocialChain & mainnet SocialChain",
  tasks: ["Text Generation", "Context Understanding","social conversation"],
  expectedOutcome: "High-quality, coherent text output, gestion databaset."
};


// Execute the Pi model prompting

// Execute the NeoFs model prompting
async function executePromptingNeoFs() {
  try {
    console.log("Starting NeoFs content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de neoFS expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingNeoFs) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/neoFs_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`NeoFs content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing neoFs prompting:", error);
  }
}

async function executePromptingPi() {
  try {
    console.log("Starting NeoFs content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de l'eco system Pi-NetWork(mainnet, Pi-wallet, Pi.coin, SocialChain) expert BACKEND du projet" },
        { role: "user", content: JSON.stringify(promptingPi) }
      ],
      model: "llama3-8b-8192",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Pi content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing neoFs prompting:", error);
  }
}


// Execute the Gemini model prompting
async function executePromptingGroq() {
  try {
    console.log("Starting Groq data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Data Generation Initiated" },
        { role: "user", content: JSON.stringify(promptingGroq) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/groq_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Groq content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Groq prompting:", error);
  }
}
async function executePromptingTelegram() {
  try {
    console.log("Starting Telegram content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de Telegram expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingTelegram) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Telegram_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Facebook content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Telegram prompting:", error);
  }
}

// Main function to execute both models
async function main() {
  await executePromptingNeoFs();
  await executePromptingPi();
  await executePromptingGroq();  
  await executePromptingTelegram();
  
  console.log("Model comparison completed. Check output files for results.");
}

main().catch(console.error);