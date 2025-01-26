const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
import { developmentModel } from './dev.js';

export async function sendMentorCompletion() {
    try {
        const contentString = JSON.stringify(developmentModel);

        const completion = await groq.chat.completions.create({
            messages: [{
                role: "user",
                content: contentString
            }],
            model: "modèle_spécifique"
        });

        console.log(completion);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la complétion :", error);
    }
}
