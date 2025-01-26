const express = require('express');
const Groq = require('groq-sdk');
const groq = new Groq();

const app = express();
const door = 1001;

app.get('/door', async (req, res) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {role: 'assistant',content: `*💡* ${door} *🕒*<br/> | in box |.`,},
        {
          role: 'user',
          content: `IF *💡* Générez plus de 15,true FI \n\
                    While > #hashtag generaror ☁️ PORT IP : local.storage.id** 💻 : prompt --engine | in box | > for The code snippet >  Trouver des #hashtag @ID idées originales et innovantes pour le développement de prompt --engine (📅 Gestion des ressources et recylage en <meta/> donnée et de la capacité de l équipe 🕒).`,
        },
      ],
      model: 'llama3-8b-8192',
    });

    res.status(200).json(chatCompletion.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

app.listen(door, () => console.log(`Server running on door ${door}`));
