// Créez une instance de Groq avec votre clé API
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


// Fonction pour lire le contenu de instance.json et envoyer une requête à l'API
async function sendMentorCompletion() {
  try {
    // Lire le contenu de instance.json
    const jsonData = fs.readFileSync("instance.json");
    const mentorData = JSON.parse(jsonData);

    // Convertir l'objet mentorData en chaîne pour le contenu du message
    const contentString = JSON.stringify(mentorData);

    // Envoyer la requête à l'API groq
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",  // Utilisation de "user" comme rôle
          content: contentString
        }
      ],
      model: "gemma2-9b-it"
    });

    console.log(completion);
    // Traitez le résultat ici
  } catch (error) {
    console.error("Erreur lors de l'envoi de la complétion :", error);
  }
}

sendMentorCompletion();
