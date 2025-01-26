const fs = require('fs');
const Groq = require('groq-sdk');
const axios = require('axios');
const OpenAI = require('openai');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Define the prompts and roles for each model
const promptingTwitter = {
  context: "Enhancing text and code generation using ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
  tasks: ["Text Generation","code Generation", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output, coherent code output, gestion UX/UI."
}

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
const promptingAlgoGenesis = {
  name: "AlgoGenesis",
  context: "Analyze, Enhancing text and code generation using,llama3-8b-8192, ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
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

const promptingWorker = {
  name: "Worker",
  context: "gestion base de donnée using worker -ai 'llama3-8b-8192' model",
  role: "AI Language Expert BACKEND",
  tasks: ["Text Generation","JSON CODE Generation","XML CODE Generation","NODE CODE Generation","SQL CODE Generation","PHP CODE Generation","generate database code", "Context Understanding"],
  apiREST: "electronJs,nodeJs,apach,oracle,phpmyAdmin,json-server",
  variables:["groq -prompt --help --engine --devOp",],
  bouclesModel:["groq -prompt --help --engine --devOp",],
  fonctions:["groq -prompt --help --engine --devOp",],
  conditions:["groq -prompt --help --engine --devOp",],
  process:["groq -prompt --help --engine --devOp",],
  characteristics:["groq -prompt --help --engine --devOp",],
  ImmediateActions:["groq -prompt --help --engine --devOp",],
  filesIteration: ["groq -prompt --help --engine --devOp",],
  expectedOutcome: "High-quality, coherent text output,coherent code output."
};


// Execute the Twitter model prompting
async function executePromptingTwitter() {
  try {
    console.log("Starting Twitter content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de neoFS expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingTwitter) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Twitter_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Twitter content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing neoFs prompting:", error);
  }
}


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

async function executePromptingAlgoGenesis() {
  try {
    console.log("Starting AlgoGenesis content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de AlgoGenesis expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingAlgoGenesis) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/AlgoGenesis_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`NeoFs content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing AlgoGenesis prompting:", error);
  }
}




// Execute the Woker model prompting
async function executePromptingWorker() {
  try {
    console.log("Starting Worker data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de Worker expert BACKEND du projet" },
        { role: "user", content: JSON.stringify(promptingWorker) }
      ],
      model: "llama3-8b-8192",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/worker_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Worker content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Worker prompting:", error);
  }
}


// Main function to execute both models
async function main() {
  await executePromptingTwitter();
  await executePromptingAlgoGenesis();
  await executePromptingNeoFs();
  await executePromptingWorker();
  
  console.log("Model comparison completed. Check output files for results.");
}

main().catch(console.error);