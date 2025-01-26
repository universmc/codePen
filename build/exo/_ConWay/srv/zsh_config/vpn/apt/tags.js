const express = require('express');
const Groq = require('groq-sdk');
const groq = new Groq();

const app = express();
const port = 3007;

const tags= [];

app.get('/tags', async (req, res) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {role: 'assistant',content: `*💡* ${tags} *🕒*<br/> | in box |.`,},
        {
          role: 'user',
          content: `*💡* Générez plus de 15 \n\
                    #hashtag ☁️ Idée géniale** 💻 : Trouver des idées originales et innovantes pour le développement de prompt --engine (📅 Gestion des ressources et recylage en <meta/> donnée et de la capacité de l équipe 🕒).`,
        },
      ],
      model: 'llama3-8b-8192',
    });

    res.status(200).json(chatCompletion.choices[0].message.content);
  }
  
  catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
