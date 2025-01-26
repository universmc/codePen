const fs = require('fs');
const express = require('express');
const Groq = require('groq-sdk');
const groq = new Groq();

const app = express();
const port = 3010;

// Écrire une fiche métier dans un fichier
const promptDev = {
  intitule: "Inventeur",
  seed: "31610",
  secteur: "Informatique",
  competences: [
      "JavaScript",
      "groq-sdk",
      "github"
  ],
  taches: [
      "Développement de sites web",
      "Maintenance d'applications web"
  ],
  // ... autres propriétés
};
fs.writeFileSync('developpeur.json', JSON.stringify(promptDev));

// Lire une fiche métier depuis un fichier
fs.readFile('developpeur.json', 'utf8', (err, data) => {
  if (err) throw err;
  const job = JSON.parse(data);
  console.log(job.intitule,job.secteur);
});




app.get('/dev', async (req, res) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {role: 'assistant',content:`"${promptDev}"`},
        {
          role: 'system',
          content: `*💡* Générateur d'Idée géniale** 💻 : Trouver des idées originales et innovantes pour le développement des inventions de '${promptDev}' (📅 Gestion des ressources et de la capacité de équipe -IA 🕒) nous fonctionnerons par itération sur le localhost/${port}/promptDev/. Ta réponse devra donc être rédigé au format HTML en respectant les normes du Web sémantique W3C `,
        },
      ],
      model: 'llama3-8b-8192',
    });

    res.status(200).json(chatCompletion.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));