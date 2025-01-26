// Importation des modules nécessaires
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Génère une liste de thématiques via le rôle system.
 * @returns {Promise<string[]>} - Liste des thématiques générées.
 */

const conception = `buy_Back_You_Time TOP_24`;

const rOi = "Return On Investment"
const indice = "EBE [Cxcédent Brut d'Exploitation]"
const subject = `Makefile Top start-UP 2023 to TOP-2024 in ${rOi} fonction de ${indice} du CAC40 algorithme de calcul différentiel de pour les prédictions 2025 Fonction.TimeCOde+fusion+TimeStamps`

 
const nowJs = "timestamps du 2024-12-21(AAAA-MM-DD)";

const CA = "Chiffre Affaire : 100 euros par jour"
const actions = "CTA : Call To Action"
const number_titre = "14"
async function generateThemes() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Génération d'une liste de ${number_titre} **titres** pour le devellopemeent 10 Business Model pour un ${CA} de pour X ${actions} Travailler, avec les des Crypro Game GCV qui vont Exploser en 2025 pour la ${conception}+${subject} fonction de ${nowJs} Pibot de Dédié à l'évolution des intelligences artificielles, les technique d'apprentissagtechnique d'apprentissage automatique, le développement du concept de 'match. In. Learning.' HACKATHON Bootcamp, 2025, Geekerie, Piraterie avec humour, respect des droits de l'Homme, la sécurité dans questions d'éthique et <meta/> donnée privé` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.5,
      max_tokens: 56, // Limiter pour obtenir une liste concise
    });

    const themes = completion.choices[0]?.message?.content.split("\n").filter(Boolean);
    console.log("✅ Thématiques générées :", themes);
    return themes;
  } catch (error) {
    console.error("❌ Erreur lors de la génération des thématiques :", error);
    return [];
  }
}

/**
 * Génère un article complet en fonction d'une thématique via le rôle assistant.
 * @param {string} theme - La thématique pour laquelle générer l'article.
 * @returns {Promise<string>} - Contenu de l'article généré.
 */
async function generateArticle(theme) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "assistant", content: `Génération de l'article en fonction de liste titre TOP-2024 fonction du "${theme}"afin de garantir les prédictions les plus justes et affable possible pour le top 20255.` }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 4096, // Autoriser un contenu riche et détaillé
    });

    const articleContent = completion.choices[0]?.message?.content;
    console.log(`✅ Article généré pour le thème "${theme}" :`, articleContent);
    return articleContent;
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de l'article pour "${theme}" :`, error);
    return `Erreur lors de la génération de l'article pour le thème "${theme}".`;
  }
}

/**
 * Fonction principale pour orchestrer la génération des thématiques et des articles.
 */
async function main() {
  try {
    // Génération de la liste des thématiques
    const themes = await generateThemes();

    // Génération des articles pour chaque thématique
    for (const theme of themes) {
      const articleContent = await generateArticle(theme);

      // Enregistrement de l'article dans un fichier Markdown
      const outputFilePath = `AB2_${theme.replace(/\s+/g, "_").toLowerCase()}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
      fs.writeFileSync(outputFilePath, articleContent);

      console.log(`✅ Article sauvegardé : ${outputFilePath}`);
    }
  } catch (error) {
    console.error("❌ Une erreur s'est produite lors de l'exécution du script :", error);
  }
}

main();
