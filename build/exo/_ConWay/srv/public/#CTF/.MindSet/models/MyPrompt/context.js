const fs = require('fs');
const Groq = require("groq-sdk");
const groq = new Groq();

const introduction = `
Entre précarité et espoir 
`;
const ProblemeContext = `

`;


const solutionEnvisager = `

`

const promptingContext = {
  context: [""],
  role: [""],
  fonctions: [""],
  compétences: [""],
  routine: [""],
  process: [""],
  tasks: [""],
  immediatActions: [""],
  emojiAssociate: [""],
  expectedOutcome: [""]
};

// Define the prompts and roles for each model
const promptingProbleme = {
  context: [""],
  role: [""],
  fonctions: [""],
  compétences: [""],
  routine: [""],
  process: [""],
  tasks: [""],
  immediatActions: [""],
  emojiAssociate: [""],
  expectedOutcome: [""]
};
const promptingSolution = {
  context: [""],
  role: [""],
  fonctions: [""],
  compétences: [""],
  routine: [""],
  process: [""],
  tasks: [""],
  immediatActions: [""],
  emojiAssociate: [""],
  expectedOutcome: [""]
};


// Function to execute and compare GROque and Solution outputs
async function executeAndMatchAIModels() {

  const match = { Context: null, Probleme: null, Solution: null }; // Initialize match results

  try {
        // Execute LLMA content generation task
        console.log("Starting Context content generation task...");
        const ContextCompletion = await groq.chat.completions.create({
          messages: [
            { role: "assistant", content: `Tu seras en charge d'analyser la liste des ${freeTax} pour les Transmetre par MESSAGE au ${ProblemeContext} Et de transmettre la liste des problèmes à ${promptingSolution}` },
            { role: "user", content: JSON.stringify(promptingContext) }
          ],
          model: "llama3-8b-8192",
          temperature: 0.7
        });
    
        const ContextContent = ContextCompletion.choices[0]?.message?.content;
        const ContextFilePath = `Context_output_${Date.now()}.md`;
        fs.writeFileSync(ContextFilePath, ContextContent || "No content generated.");
        console.log(`list des probleme  saved to ${ContextFilePath}`);
        match.Context = ContextContent ? "Success" : "Failure";

    // Execute GPT content generation task
    console.log("Starting Probleme content generation task...");
    const ProblemeCompletion = await groq.chat.completions.create({
      messages: [
        { role: "assistant", content: ` donc tu seras en charge d'analyser ${ProblemeContext} Et de transmettre la liste des problèmes à ${promptingSolution}` },
        { role: "user", content: JSON.stringify(promptingProbleme) }
      ],
      model: "gemma2-9b-it",
      temperature: 0.7
    });

    const ProblemeContent = ProblemeCompletion.choices[0]?.message?.content;
    const ProblemeFilePath = `Probleme_output_${Date.now()}.md`;
    fs.writeFileSync(ProblemeFilePath, ProblemeContent || "No content generated.");
    console.log(`list des probleme  saved to ${ProblemeFilePath}`);
    match.Probleme = ProblemeContent ? "Success" : "Failure";

    // Execute Solution data generation task
    console.log("Starting Solution data generation task...");
    const SolutionCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: ` votre mission après analyse, du ${ProblemeContext} et donc de respondre de l'agent ${promptingProbleme} et votre MISSION rechercher les ${ solutionEnvisager} les plus pertinentes et rapides à mettre en place en vue de la situation d'état d'urgence, des personnes impliquées dans cet enquête` },
        { role: "user", content: JSON.stringify(promptingSolution) }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.6
    });

    const SolutionContent = SolutionCompletion.choices[0]?.message?.content;
    const SolutionFilePath = `Solution_output_${Date.now()}.md`;
    fs.writeFileSync(SolutionFilePath, SolutionContent || "No content generated.");
    console.log(`Solution content saved to ${SolutionFilePath}`);
    match.Solution = SolutionContent ? "Success" : "Failure";

  } catch (error) {
    console.error("Error during AI model execution:", error);
  }

  // Log the match results
  console.log("Match Results:");
  console.log(`Probleme Generation: ${match.Context}`);
  console.log(`Probleme Generation: ${match.Probleme}`);
  console.log(`Solution Generation: ${match.Solution}`);

  return match;
}

// Main function to initiate the match and log results
async function main() {
  const matchResults = await executeAndMatchAIModels();
  console.log("Final Match Results:", matchResults);
}

main().catch(console.error);