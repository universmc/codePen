const fs = require('fs');
const Groq = require('groq-sdk');
// Initialize the SDKs with API keys
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const introduction = `
  ## Comment construire un site Web ('html/owf','css/json','js/json'[norme web sementique W3C (Web RDFlib)]) WOOw amusant 🔮**
 nous travaillons actuellement sur une interfaces de réponses format HTML, permettant d'intégrer visuellement et graphiquement des EFFETS WOW
`;
const ObjectifsSmart = `
Développez les objectifs SMART pour le cycle de mise à jo
- S pour spécifique : Le contrat doit permettre l'enregistrement et la monetisation des compétences professionnelles tous les X cyles.
- M pour mesurable : Le nombre de compétences certifiées et mises à jour doit être suivi.
- A pour atteignable : Utiliser la blockchain Ethereum pour assurer que les transactions de mise à jour sont immuables.
- R pour réaliste : Le projet doit être réalisable avec les ressources disponibles, y compris les outils de développement blockchain.
- T pour temporel : Le cycle de mise à jour doit être respecté tous les 28 jours (2 419 200 secondes).
`
const devOps = '"[]"';
const dev = `"${devOps}+#${introduction} if ${ObjectifsSmart} fi."`;
// Define the prompts and roles for each model

const promptingReadme = {
  context: "Utilizing GANs for data refinement emoji intéligent /mode Campagne.",
  role: "assistant",
  tasks: ["Data Generation", "Dynamic Modeling"],
  expectedOutcome: "Improved and adaptable data sets."
};

const promptingHTML = {
  context: "tu seras en charge de la Syntaxe, Itération et génération de contenu .html de notre module",
  role: "system",
  tasks: ["Text Generation","HTML", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};
const promptingCSS = {
  context: "tu seras en charge de la Syntaxe, Itération et génération de contenu .css de notre module",
  role: "system",
  tasks: ["Text Generation","CSS", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};
const promptingSCSS = {
  context: "tu seras en charge de la Syntaxe, Itération et génération de contenu .scss de notre module",
  role: "system",
  tasks: ["Text Generation","CSS", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};
const promptingJS = {
  context: "tu seras en charge de la Syntaxe, Itération et génération de contenu .js de notre module",
  role: "system",
  tasks: ["Text Generation","HTML", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};
const promptingJSON = {
  context: "tu seras en charge de la Syntaxe, Itération et génération de contenu .json de notre module",
  role: "system",
  tasks: ["Text Generation","HTML", "Context Understanding"],
  expectedOutcome: "High-quality, coherent text output."
};


const NetWork = {
  groq: {
      description: 'Génération de texte cohérent et contextuel',
      promptGroq: {
          context: "Améliorer la génération de texte en utilisant EXO.",
          role: "système",
          taches: ["Génération de texte", "Compréhension contextuelle"],
          résultatAttendu: "Un texte de haute qualité et cohérent."
      }
  },
  gemini: {
      description: "Amélioration des données par le biais de GANs",
      promptGemini: {
          context: "Utilisation de GANs pour le raffinement des données  CTF emoji /mode Campagne.",
          role: "assistant",
          taches: ["Génération de données", "Modélisation dynamique"],
          résultatAttendu: "Des ensembles de données améliorés et adaptables."
      }
  }
};

// Function to execute and compare GROque and Gemini outputs
async function executeAndMatchAIModels() {

  const match = {README: null, HTML: null,CSS: null,SCSS: null,JS: null,JSON: null }; // Initialize match results

  try {

    // Execute prompt --readme content generation task
    console.log("Starting Groq-html content generation task...");
    const ReadmeCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "user", content: JSON.stringify(promptingReadme) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  }; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [.md], respectant les normes du Web sémantique W3C` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const ReadmeContent = ReadmeCompletion.choices[0]?.message?.content;
    const ReadmeFilePath = `data/readme_${Date.now()}.md`;
    fs.writeFileSync(ReadmeFilePath, ReadmeContent || "No content generated.");
    console.log(`groq content saved to ${ReadmeFilePath}`);
    match.README = ReadmeContent ? "Success" : "Failure";

    // Execute promp --html content generation task
    console.log("Starting Groq-html content generation task...");
    const HTMLCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  ; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [.html], respectant les normes du Web sémantique W3C` },
        { role: "user", content: JSON.stringify(promptingHTML) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const HTMLContent = HTMLCompletion.choices[0]?.message?.content;
    const HTMLFilePath = `src/html/HTML_output_${Date.now()}.html`;
    fs.writeFileSync(HTMLFilePath, HTMLContent || "No content generated.");
    console.log(`groq content saved to ${HTMLFilePath}`);
    match.HTML = HTMLContent ? "Success" : "Failure";

    // Execute prompt -css content generation task
    console.log("Starting Groq-html content generation task...");
    const CSSCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  }; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [.css], respectant les normes du Web sémantique W3C` },
        { role: "user", content: JSON.stringify(promptingCSS) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const CSSContent = CSSCompletion.choices[0]?.message?.content;
    const CSSFilePath = `src/css/CSS_output_${Date.now()}.css`;
    fs.writeFileSync(CSSFilePath, CSSContent || "No content generated.");
    console.log(`groq content saved to ${CSSFilePath}`);
    match.CSS = CSSContent ? "Success" : "Failure";
    
    // Execute prompt --SCSS content generation task
    console.log("Starting Groq-SCSS content generation task...");
    const SCSSCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  }; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [scss], respectant les normes du Web sémantique W3C` },
        { role: "user", content: JSON.stringify(promptingSCSS) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const SCSSContent = SCSSCompletion.choices[0]?.message?.content;
    const SCSSFilePath = `src/css/SCSS_output_${Date.now()}.scss`;
    fs.writeFileSync(SCSSFilePath, SCSSContent || "No content generated.");
    console.log(`groq content saved to ${SCSSFilePath}`);
    match.SCSS = CSSContent ? "Success" : "Failure";
    
    // Execute prompt --js content generation task
    console.log("Starting Groq-JS content generation task...");
    const JSCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  }; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [.js], respectant les normes du Web sémantique W3C` },
        { role: "user", content: JSON.stringify(promptingJS) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });
    
    const JSContent = JSCompletion.choices[0]?.message?.content;
    const JSFilePath = `src/js/JS_output_${Date.now()}.js`;
    fs.writeFileSync(JSFilePath, JSContent || "No content generated.");
    console.log(`groq content saved to ${JSFilePath}`);
    match.JS = JSContent ? "Success" : "Failure";


    // Execute prompt --json content generation task
    console.log("Starting Groq-JSON content generation task...");
    const JSONCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: JSON.stringify(NetWork) },
        { role: "assistant", content: JSON.stringify(dev) },
        { role: "system", content: `const match = {README: null, GROQ: null, Gemini: null,HTML: null,CSS: null,CSS: null,JS: null,JSON: null,SVG: null,DRAWIO: null,SOL: null  }; // Initialize match results` },
        { role: "assistant", content: ` ta réponse Doit intégralement être rédigé au format [.json], respectant les normes du Web sémantique W3C` },
        { role: "user", content: JSON.stringify(promptingJSON) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const JSONContent = JSONCompletion.choices[0]?.message?.content;
    const JSONFilePath = `src/json/JSon_output_${Date.now()}.json`;
    fs.writeFileSync(JSONFilePath, JSONContent || "No content generated.");
    console.log(`groq JSON content saved to ${JSONFilePath}`);
    match.JSON = JSONContent ? "Success" : "Failure";

  } catch (error) {
    console.error("Error during AI model execution:", error);
  }

  // Log the match results
  console.log("Match Results:");
  console.log(`Documentation Generation: ${match.README}`);
  console.log(`HTML Generation: ${match.HTML}`);
  console.log(`CSS Generation: ${match.CSS}`);
  console.log(`CSS Generation: ${match.SCSS}`);
  console.log(`JS Generation: ${match.JS}`);
  console.log(`JSON Generation: ${match.JSON}`);

  return match;
}

// Main function to initiate the match and log results
async function main() {
  const matchResults = await executeAndMatchAIModels();
  console.log("Final Match Results:", matchResults);
}

main().catch(console.error);