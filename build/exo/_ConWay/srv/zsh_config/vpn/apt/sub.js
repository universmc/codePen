// Importation des modules nécessaires
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Génère une liste de thématiques via le rôle system.
 * @returns {Promise<string[]>} - Liste des thématiques générées.
 */

  const LicencesCreativeCommons = `
L’un des objectifs de Creative Commons est d’accroître la quantité de création sous licence libre dans « les biens communs », c’est-à-dire l’ensemble des œuvres librement disponibles pour une utilisation, un partage, une réutilisation et un remixage légaux. 
Grâce à l’utilisation des licences CC, des millions de personnes dans le monde entier ont mis leurs photos, vidéos, écrits, musiques et autres contenus créatifs à la disposition de tous les membres du public.
  `;

  const image = `url("./image/*")`
  const text = `url("./text/*")`
  const video = `url("./video/*")`
  const audio = `url("./audio/*")`
 
  const remixage = `(${audio},${video},${image},${text}`

 const question =`comment augmenter en productivité grâce a des méthodes de DeeP Learning et l'automatisation de la génération de contenu les ${LicencesCreativeCommons} ?`;
async function generateThemes() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Génération d'une liste de 11 titres d'Article 💡 pour la gestion et le devellepement de session de ${remixage} de contenu, la liste de titre sera utlisé pour le developpement des ${LicencesCreativeCommons} ` }
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
        { role: "assistant", content: `Génération de l'article en fonction des titres lier "${theme}" chaque article sera rédigé au format Markdown, intégrant des EMOJI Intelligent et des conseils pour le développement des différents services, liés à l'intelligence artificielle dans l'article intrinsèquement lié à la ${question}.` }
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
      const outputFilePath = `articles/${theme.replace(/\s+/g, "_").toLowerCase()}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
      fs.writeFileSync(outputFilePath, articleContent);

      console.log(`✅ Article sauvegardé : ${outputFilePath}`);
    }
  } catch (error) {
    console.error("❌ Une erreur s'est produite lors de l'exécution du script :", error);
  }
}

main();
