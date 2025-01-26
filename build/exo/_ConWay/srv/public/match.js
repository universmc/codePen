const fs = require('fs');
const Groq = require('groq-sdk');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const introduction = `


`;

// Define the prompts and roles for each model
const promptingGROQ = {
  context: "Enhancing text generation using EXO.",
  role: "system",
  tasks: ["Text Generation", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};

const promptingGemini = {
  context: "Utilizing GANs for data refinement  CTF emoji /mode Campagne.",
  role: "assistant",
  tasks: ["Data Generation", "Dynamic Modeling"],
  expectedOutcome: "Improved and adaptable data sets."
};
const taches = {
  groq: {
      description: 'Génération de texte cohérent et contextuel',
      prompt: {
          context: "Améliorer la génération de texte en utilisant EXO.",
          role: "système",
          tâches: ["Génération de texte", "Compréhension contextuelle"],
          résultatAttendu: "Un texte de haute qualité et cohérent."
      }
  },
  gemini: {
      description: "Amélioration des données par le biais de GANs",
      prompt: {
          context: "Utilisation de GANs pour le raffinement des données  CTF emoji /mode Campagne.",
          role: "assistant",
          tâches: ["Génération de données", "Modélisation dynamique"],
          résultatAttendu: "Des ensembles de données améliorés et adaptables."
      }
  }
};


// Function to execute and compare GROque and Gemini outputs
async function executeAndMatchAIModels() {

  const match = { GROQ: null, Gemini: null }; // Initialize match results

  try {
    // Execute groq content generation task
    console.log("Starting Groq content generation task...");
    const groqCompletion = await groq.chat.completions.create({
      messages: [
        { role: "user", content: JSON.stringify(prompt) },
        { role: "user", content: JSON.stringify(promptingGROQ) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const groqContent = groqCompletion.choices[0]?.message?.content;
    const groqFilePath = `output/groq_output_${Date.now()}.md`;
    fs.writeFileSync(groqFilePath, groqContent || "No content generated.");
    console.log(`groq content saved to ${groqFilePath}`);
    match.GROQ = groqContent ? "Success" : "Failure";

    // Execute Gemini data generation task
    console.log("Starting Gemini data generation task...");
    const geminiCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `ConText for data Generation ${introduction} : Développement du modèle _GamlePlay_ Et entraînement par pair de l'abritre du Match entre les Utilisateur de la democratie2-0 sur les Les fonctionnalités du Web Sementique W3C initiales de > prompt --engine --help ++emoji intelligent` },
        { role: "user", content: JSON.stringify(promptingGemini) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const geminiContent = geminiCompletion.choices[0]?.message?.content;
    const geminiFilePath = `src/md/gemini_output_${Date.now()}.md`;
    fs.writeFileSync(geminiFilePath, geminiContent || "No content generated.");
    console.log(`Gemini content saved to ${geminiFilePath}`);
    match.Gemini = geminiContent ? "Success" : "Failure";

  } catch (error) {
    console.error("Error during AI model execution:", error);
  }

  // Log the match results
  console.log("Match Results:");
  console.log(`Groq Generation: ${match.GROQ}`);
  console.log(`Gemini Generation: ${match.Gemini}`);

  return match;
}

// Main function to initiate the match and log results
async function main() {
  const matchResults = await executeAndMatchAIModels();
  console.log("Final Match Results:", matchResults);
}

main().catch(console.error);