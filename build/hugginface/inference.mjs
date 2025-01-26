// Importation de la bibliothèque nécessaire pour interagir avec l'API Hugging Face
import { Inference } from '@huggingface/inference';
const inference = new Inference(process.env.HUGGING_FACE_TOKEN);
// Définition du modèle que tu souhaites utiliser
const modelId = "gpt2"; // Remplace par l'ID du modèle souhaité

// Préparation de l'entrée
const prompt = "Traduis ceci en espagnol : Hello, how are you?";

// Envoi de la requête à l'API
const result = await inference.generateText(modelId, prompt);

// Affichage du résultat
console.log(result.generated_text);