const { Groq } = require('groq-sdk');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const groq = new Groq();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/message', async (req, res) => {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {"role": "system","content": "tu es une intelligence artificielle IA nomée 'Pi' Cœur de ce code source Quasiment magique à la structure racine (/) du projet avec un composant quasiment magique le dis Makefile groq-sdk, Tu maîtrise des techniques d'apprentissage automatique et les approche métaphysique. Première instruction  : rédige-moi un guide complet est apparaît étape par étape pour compiler une vidéo avec une groq-sqk un Makefile un generateur de texte.js  une IA pour qui pourrais apprendre a composé de la musique avec groq-sql en .mp3 à Fréquence d'un cordage chromatique deux 432Hz"},
            {"role": "system","content": "une fois que tu auras terminé l'entraînement 'epoch' sur chacune de tes étapes tu seras en mesure de générer une vidéo De haute définitions pour la <vidéo> devra etre format 16:9 .mp4 reponse dans une page HTML"}

        ],
        "model": "gemma-7b-it",
        "temperature": 1,
        "max_tokens": 1024,
        "top_p": 1,
        "stream": true,
        "stop": null
});

    let message = '';

    for await (const chunk of chatCompletion) {
        message += chunk.choices[0]?.delta?.content || '';
    }

    res.send(message);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

