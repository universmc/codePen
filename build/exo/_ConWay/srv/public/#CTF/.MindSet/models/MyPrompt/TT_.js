const fs = require('fs');
const Groq = require("groq-sdk");
const groq = new Groq();

const introduction = `
Entre précarité et espoir 
`;

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

const ProblemeContext = `

`;


const solutionEnvisager = `

`

const freeTax =`
## Voici les 30 différents Action ou Verbose à À réaliser pour le DATALOADER du CTF "Buy back, Your Time" :

** *1. Impôt sur le revenu : impôt progressif sur les revenus des personnes physiques.
** *2. Revenus salariaux et assimilés : revenus provenant d'un travail dépendant ou assimilé.
** *3. Revenus et profits du patrimoine mobilier : revenus provenant de la détention d'actifs financiers.
** *4. Revenus fonciers et profits du patrimoine immobilier : revenus provenant de la détention de biens immobiliers.
** *5. Bénéfices agricoles : revenus provenant d'activités agricoles.
** *6. Bénéfices non commerciaux : revenus provenant d'activités libérales ou indépendantes.
** *7. Bénéfices industriels et commerciaux : revenus provenant d'activités industrielles ou commerciales.
** *8. Impôt sur les sociétés : impôt sur les bénéfices des sociétés.
** *9. Taxe sur la valeur ajoutée (TVA) : impôt sur la consommation.
** *10. Taxes sur le chiffre d'affaires : impôts sur le montant des ventes ou des prestations de services.
** *11. Cotisation sur la Valeur Ajoutée des Entreprises (CVAE) : impôt sur la valeur ajoutée des entreprises.
** *12. Taxes et participations sur les salaires : impôts et contributions sur les rémunérations versées par les employeurs.
** *13. Taxes sur les facteurs de production : impôts sur les matières premières, l'énergie ou les transports.
** *14. Autres impositions sectorielles : impôts spécifiques à certains secteurs d'activité.
** *15. Impôts fonciers : impôts sur la détention de biens immobiliers.
** *16. Impôts sur le patrimoine : impôts sur la fortune ou la détention d'actifs.
** *17. Enregistrement : impôt sur les actes juridiques.
** *18. Taxe sur les conventions d'assurances et assimilées : impôt sur les contrats d'assurance.
** *19. Recouvrement : procédure de recouvrement des impôts et taxes impayés.
** *20. Droit à l'erreur : dispositif permettant de rectifier une erreur commise lors de la déclaration des revenus.
** *21. Contrôle fiscal : procédure de contrôle des déclarations fiscales.
** *22. Contentieux : procédure de litige avec l'administration fiscale.
** *23. Sécurité juridique : garantie de la régularité et de la transparence des procédures fiscales.
** *24. Fiscalité internationale : règles fiscales applicables aux transactions internationales.
** *25. Cadastre : service chargé de l'établissement et de la mise à jour des plans fonciers.
** *26. Dispositions juridiques communes : règles juridiques communes à l'ensemble des procédures fiscales.
** *27. Réseau, Intelligent connecté : système informatique permettant la gestion et le suivi des procédures fiscales.
** *28. Rescrits : procédure permettant d'obtenir une interprétation de l'administration fiscale sur une situation particulière.
** *29. upadate : mise à jour des connaissances et des compétences en matière fiscale. des accents
`
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