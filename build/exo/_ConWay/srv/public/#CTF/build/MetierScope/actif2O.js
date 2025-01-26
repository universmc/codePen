const fs = require('fs');
const Groq = require('groq-sdk');

// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const instroductrion = `"
Build your Store

Créez une n'importe quelle expérience commerciale Exceptionnel dans le Qi Store Avec 5,5 % de taxonomy VAT comme base pour le model 'economie circulaire basé sur la blockChain cvnu.sol.

Mission : 
"`;

const promptingGroq
 = {
  context: "",
  role: "",
  tasks: [""],
  expectedOutcome: "."
};
// Define the prompts and roles for each model
const promptingSolution = {
  context: "",
  role: "",
  tasks: [""],
  expectedOutcome: ""
};

const promptingProbleme = {
  context: "",
  role: "",
  tasks: [""],
  expectedOutcome: ""
};

const shopify = `"${instroductrion}"`

// Function to execute and compare GROque and Gemini outputs
async function executeAndMatchAIModels() {

  const GAN = {
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

  const match = { Groq: null, SOLUTION: null,PROBLEME:null }; // Initialize match results

  try {
    // Execute GROQ content generation task
    console.log("Starting Groq content generation task...");
    const GroqCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(GAN) },
        { role: "assistant", content: shopify },
        { role: "user", content: JSON.stringify(promptingGroq) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const GroqContent = GroqCompletion.choices[0]?.message?.content;
    const GroqFilePath = `output/Groq_output_${Date.now()}.md`;
    fs.writeFileSync(GroqFilePath, GroqContent || "No content generated.");
    console.log(`groq content saved to ${GroqFilePath}`);
    match.Groq = GroqContent ? "Success" : "Failure";

    // Execute Solution data generation task
    console.log("génération de la solution aux problèmes données...");
    const SolutionCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(GAN) },
        { role: "assistant", content: shopify },
        { role: "user", content: JSON.stringify(promptingSolution) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6
    });

    const SolutionContent = SolutionCompletion.choices[0]?.message?.content;
    const SolutionFilePath = `output/Solution_output_${Date.now()}.md`;
    fs.writeFileSync(SolutionFilePath, SolutionContent || "No content generated.");
    console.log(` les solutions aux problèmes données ont bien été généré dans le répertoire ${SolutionFilePath}`);
    match.SOLUTION = SolutionContent ? "Success" : "Failure";

  // Execute Pi data generation task
        console.log("explication du problème donné et de la liste des tâches à mettre en place pour se connecter aux solutions.");
        const ProblemeCompletion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: JSON.stringify(GAN) },
            { role: "assistant", content: shopify },
            { role: "user", content: JSON.stringify(promptingProbleme) }
          ],
          model: "gemma2-9b-it",
          temperature: 0.6
        });
    
        const ProblemeContent = ProblemeCompletion.choices[0]?.message?.content;
        const ProblemeFilePath = `output/XProbleme_output_${Date.now()}.md`;
        fs.writeFileSync(ProblemeFilePath,ProblemeContent || "No content generated.");
        console.log(`Documentation et définition du problème donné généré dans le répertoire donner ${ProblemeFilePath}`);
        match.PROBLEME = ProblemeContent ? "Success" : "Failure";

  } catch (error) {
    console.error("Error during AI model execution:", error);
  }

  // Log the match results
  console.log("Match Results:");
  console.log(`✨ Arbitre Goal :${match.GROQ} ✨ `);
  console.log(`✨ dev op - Generation: ${match.SOLUTION} ✨ `);
  console.log(`✨ dev op - - 3 Groq Generation: ${match.PROBLEME} ✨ `);

  return match;
}

// Main function to initiate the match and log results
async function main() {
  const matchResults = await executeAndMatchAIModels();
  console.log("Final Match Results:", matchResults);
}

main().catch(console.error);