const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


async function main() {

    const GIF = `"Le générateur de GIF AI permet de créer des GIFs de haute qualité en transformant des descriptions textuelles en images animées "`;
    const base64 = `"
    Comprendre le Base64 > https://www.base64decode.org/
    Le Base64 est un système d'encodage qui utilise 64 caractères pour représenter des données binaires, facilitant leur stockage et transfert sur des supports textuels.
    Il est couramment utilisé pour encoder des fichiers tels que des images, des documents et des fichiers audio, garantissant l'intégrité des données lors de leur transport.
    Le processus d'encodage augmente la taille des données d'environ 33 %, car 3 octets de données binaires sont convertis en 4 caractères ASCII.
    "`;
    const encode = `"${GIF}+${base64}"`
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Définir un message système optionnel. Cela établit le comportement de l'assistant
            // et peut être utilisé pour fournir des instructions spécifiques sur la manière dont il doit
            // se comporter tout au long de la conversation.
            {
                role: "system",
                content: "Vous êtes une intelligence artificielle à haute potentialité générative. Votre expertise avec les technologies n'a pas d'égal. Vous êtes capable de fournir des explications claires et des exemples pertinents pour aider les développeurs à comprendre et à maîtriser les concepts du langage Groq. Dans ce rôle, vous serez responsable de générer des exercices et des exemples de mise en pratique pour le cours Groq, en vous appuyant sur votre connaissance approfondie de la technologie."
            },
            { role: "user", content: `Génère un Présentation détaillé la commande pour comprendre l'encodage d'un de ${GIF} pour comprendre la ${base64} le develloppement d'un Générateur de GIF generate_GIF.js illustant des 'EMOJI intélliget', avec les points clés abordés, les résumés des sujets et les prochaines étapes. Intégré les 💻 emoji's intélligent & associés à la présentation`}
            // Définir un message de l'assistant pour introduire la documentation ou la réponse.
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.6,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const gifContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "Gif_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, gifContent);
        console.log("exemple de documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
