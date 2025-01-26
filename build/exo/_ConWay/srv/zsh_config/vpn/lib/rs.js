const fs = require('fs');
const Groq = require('groq-sdk');
const axios = require('axios');
const OpenAI = require('openai');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Define the prompts and roles for each model

const promptingTweeter = {
  context: "Utilizing GANs for data refinement.",
  role: "AI Generalist fullStack DevOps",
  tasks: ["Data Generation", "Dynamic Modeling","img-to-text"],
  expectedOutcome: "Improved and adaptable data sets."
};

const promptingFacebook = {
  context: "Enhancing text and code generation using ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
  tasks: ["Text Generation","code Generation", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output, coherent code output, gestion UX/UI."
};

const promptingSHARE = {
  context: "role:system",
  role: "AI assistant Language Expert SocialChain & mainnet SocialChain",
  tasks: ["Text Generation", "Context Understanding","social conversation"],
  expectedOutcome: "High-quality, coherent text output, gestion databaset."
};

const promptingTelegram = {
  context: "role:system",
  role: "AI assistant Language Expert SocialChain & mainnet SocialChain",
  tasks: ["Text Generation", "Context Understanding","social conversation"],
  expectedOutcome: "High-quality, coherent text output, gestion databaset."
};
const promptingTikTok = {
  context: "Utilizing GANs for data refinement.",
  role: "AI Generalist fullStack DevOps",
  tasks: ["Data Generation", "Dynamic Modeling","img-to-text"],
  expectedOutcome: "Improved and adaptable data sets."
};
const promptingInstagram = {
  context: "gestion base de donnée using worker -ai 'llama3-8b-8192' model",
  role: "AI Language Expert BACKEND",
  tasks: ["Text Generation","JSON CODE Generation","XML CODE Generation","NODE CODE Generation","SQL CODE Generation","PHP CODE Generation","generate database code", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output,coherent code output."
};

const promptingShopify = {
  context: "gestion base de donnée using worker -ai 'llama3-8b-8192' model",
  role: "AI Language Expert BACKEND",
  tasks: ["Text Generation","JSON CODE Generation","XML CODE Generation","NODE CODE Generation","SQL CODE Generation","PHP CODE Generation","generate database code", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output,coherent code output."
};

const promptingYouTube = {
  context: "Enhancing text and code generation using ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
  tasks: ["Text Generation","code Generation", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output, coherent code output, gestion UX/UI."
};
const promptingLinkedin = {
  context: "Enhancing text and code generation using ML & NLP, rdfLIB for e-motion Web design",
  role: "AI Language Expert FRONTEND",
  tasks: ["Text Generation","code Generation", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output, coherent code output, gestion UX/UI."
};


// Execute the NeoFs model prompting
async function executePromptingTweeter() {
  try {
    console.log("Starting Tweeter content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de Tweeter expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingTweeter) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Tweeter_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Tweeter content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Tweeter prompting:", error);
  }
}


// Execute the Facebook model prompting
async function executePromptingFacebook() {
  try {
    console.log("Starting Facebook content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de neoFS expert FRONTEND du projet" },
        { role: "user", content: JSON.stringify(promptingFacebook) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Facebook_Pibot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Facebook content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing neoFs prompting:", error);
  }
}




// Execute the SHARE model prompting
async function executePromptingSHARE() {
  try {
    console.log("Starting SHARE content generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de l'eco system Pi-NetWork (mainnet, wallet, Pi.coin, SocialChain) expert BACKEND du projet" },
        { role: "user", content: JSON.stringify(promptingSHARE) }
      ],
      model: "llama3-8b-8192",
      temperature: 0.7
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/SHARE_bot_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`SHARE content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing neoSHARE prompting:", error);
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

// Execute the TikTok model prompting
async function executePromptingTikTok() {
  try {
    console.log("Starting TikTok data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Text Generation Initiated pour la présentation de TikTok expert BACKEND du projet" },
        { role: "user", content: JSON.stringify(promptingTikTok) }
      ],
      model: "llama3-8b-8192",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/TikTok_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Worker content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing TikTok prompting:", error);
  }
}

// Execute the Instagram model prompting
async function executePromptingInstagram() {
  try {
    console.log("Starting Instagram data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Data Generation Initiated" },
        { role: "user", content: JSON.stringify(promptingInstagram) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/gemini_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Instagram content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Instagram prompting:", error);
  }
}

// Execute the SHopify model prompting
async function executePromptingShopify() {
  try {
    console.log("Starting Shopify data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Data Generation Initiated" },
        { role: "user", content: JSON.stringify(promptingShopify) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Shopify_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Groq content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Shopify prompting:", error);
  }
}
// Execute the Youtube model prompting
async function executePromptingYouTube() {
  try {
    console.log("Starting YouTube data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Data Generation Initiated" },
        { role: "user", content: JSON.stringify(promptingYouTube) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/YouTube_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Groq content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing YouTube prompting:", error);
  }
}

// Execute the Linkedin model prompting
async function executePromptingLinkedin() {
  try {
    console.log("Starting Linkedin data generation task...");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Data Generation Initiated" },
        { role: "user", content: JSON.stringify(promptingLinkedin) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const content = chatCompletion.choices[0]?.message?.content;
    const filePath = `output/Linkedin_output_${Date.now()}.md`;
    fs.writeFileSync(filePath, content || "No content generated.");
    console.log(`Groq content saved to ${filePath}`);
  } catch (error) {
    console.log("Error executing Linkedin prompting:", error);
  }
}

// Main function to execute both models
async function main() {
  await executePromptingTweeter();
  await executePromptingFacebook();
  await executePromptingSHARE();
  await executePromptingTelegram();
  await executePromptingTikTok();
  await executePromptingInstagram();
  await executePromptingShopify();
  await executePromptingYouTube();
  await executePromptingLinkedin();
  
  console.log("Model comparison completed. Check output files for results.");
}

main().catch(console.error);