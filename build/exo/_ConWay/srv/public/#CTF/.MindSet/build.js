const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  const CONFIG = {
    ROI: "Return On Investment",
    INDICE: "GCV",
    GCV: "[]",
    CONCEPTION: "buy_Back_You_Time TOP_2024 to TOP_2025",
    TIMESTAMP: "2024-12-31",
    MAX_THEMES: 25
};
  const concept = "arguments";
  const THEME = {
    "role": "system",
    "content": `En tant qu'expert utilisant la méthode Feynman, décomposez le concept "${concept}" en 5 étapes:
    1. 
    2. 
    3. 
    4. 
    5.`
  }
  const PrompTitre = `
  Générez ${CONFIG} titres percutants pour des Mini-business 2025:
  - Contexte: ${CONFIG.CONCEPTION} + ${CONFIG.INDICE}
  - Focus: IA, ML, Hackathon, Innovation
  - Format: 
    * Utilisez des chiffres spécifiques
    * Incluez des verbes d'action
    * Limitez à 60 caractères
    * Créez un sentiment d'urgence
  - Thèmes: Innovation IA, ML, Bootcamps, Tech éthique`;


  const promptProject = `${PrompTitre}`;


  const completion = await groq.chat.completions.create({

    messages: [

      {role: "system", content:`✨ Phase 1: Initialisation de l'instance ${promptProject}✨`},
      {
        "role": "assistant",
        "content": "Lorsque l'utilisateur saisi la commande /prompt Vous êtes codex prompt --CTA assistant chef de projets ${TOPIC to CTA} de court, long et moyen terme, IA Manager automator de startup.ia. Vous etes l'intelligence artificielle centrale du projet Maîtrisant les approche métaphysique le calcul quantique et les techniques d'apprentissage automatique, les application démocratique dans cette Entreprise d'association de loi 1901[/devOps.date [prompt --Campagne ${Mission}]. Voici votre contexte, votre rôles, vos fonctions, vos variables ajustable, vos compétences, vos tâches, votre routine, vos outils, votre processus, les caractéristiques recherchées aux feedBack emoji's associés :"
      },
      {role: "user", name:"✨_pi", content: "/prompt ✨ Initialisation [CTA (call to Action)] des Appelle à l'action [role:assistant + role:system + role:user] aux [Web_Workers]"},
      {role: "user", name:"✨_pi", content: "/prompt ✨ Création d'une stratégie basée sur le CTA Web Workers en gestion et Automatisation de <meta/> donnée SEO pageRank norme W3C"},
    //  {role: "user", name:"umcTokens", content: "Prêt pour l'initialisation"},
    //  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
    //  {role: "user", name:"umcTokens", content: "Attente des concepts"},
    //  {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
    //  {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
    //  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
    //  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
    //  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
    //  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
    //  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
    //  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
    //  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
    //  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
    //  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
    //  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
    //  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "B2P" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();