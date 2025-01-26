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

const CA = "Chiffre Affaire : 10 euros"
const actions = "CTA : Call To Action"

async function generateVertexAi() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `Génération d'une liste de 25 **titres** pour le devellopemeent 10 Business Model pour un ${CA} de pour X ${actions} Travailler, avec les des Crypro Game GCV qui vont Exploser en 2025 pour la ${conception}+${subject} fonction de ${nowJs} Pibot de Dédié à l'évolution des intelligences artificielles, les technique d'apprentissagtechnique d'apprentissage automatique, le développement du concept de 'match. In. Learning.' HACKATHON Bootcamp, 2025, Geekerie, Piraterie avec humour, respect des droits de l'Homme, la sécurité dans questions d'éthique et <meta/> donnée privé` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.5,
      max_tokens: 56, // Limiter pour obtenir une liste concise
    });

    const VertexAi = completion.choices[0]?.message?.content.split("\n").filter(Boolean);
    console.log("✅ Thématiques générées :", VertexAi);
    return VertexAi;
  } catch (error) {
    console.error("❌ Erreur lors de la génération des thématiques :", error);
    return [];
  }
}

/**
 * Génère un embedding complet en fonction d'une thématique via le rôle assistant.
 * @param {string} tensor - La thématique pour laquelle générer l'embedding.
 * @returns {Promise<string>} - Contenu de l'embedding généré.
 */
async function generateTensors(tensor) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "assistant", content: `Génération de l'embedding en fonction de liste titre TOP-2024 fonction du "${tensor}"afin de garantir les prédictions les plus justes et affable possible pour le top 20255.` }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 4096, // Autoriser un contenu riche et détaillé
    });

    const embeddingMotorCalcul = completion.choices[0]?.message?.content;
    console.log(`✅ Tensors généré pour le thème "${tensor}" :`, embeddingMotorCalcul);
    return embeddingMotorCalcul;
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de l'embedding pour "${tensor}" :`, error);
    return `Erreur lors de la génération de l'embedding pour le thème "${tensor}".`;
  }
}

/**
 * Fonction principale pour orchestrer la génération des thématiques et des embeddings.
 */
async function main() {
  try {
    // Génération de la liste des thématiques
    const VertexAi = await generateVertexAi();

    // Génération des embeddings pour chaque thématique
    for (const tensor of VertexAi) {
      const embeddingMotorCalcul = await generateTensors(tensor);

      // Enregistrement de l'embedding dans un fichier Markdown
      const outputFilePath = `AB2_${tensor.replace(/\s+/g, "_").toLowerCase()}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
      fs.writeFileSync(outputFilePath, embeddingMotorCalcul);

      console.log(`✅ Tensors sauvegardé : ${outputFilePath}`);
    }
  } catch (error) {
    console.error("❌ Une erreur s'est produite lors de l'exécution du script :", error);
  }
}

main();
