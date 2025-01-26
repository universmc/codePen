const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
    { role: 'assistant', content: "Comment devenir FreeLance : Le Guide Complet"},
    { role: 'system', content: "Introduction Prompt freelance --engine > Profile FreeLance 🎯📝 Table des matière, 🚀 Introduction, 🛠️ Installation, ⚙️ PortFolio,📚 Paramètre CV ,📦 Dépendance, 🧑‍💻 Exemple de Projet_Code, 📄 Licence, 🚀 Introduction"},
    { role: 'assistant', content: `
      ==========================================

🎯📝 **Table des matières**
-------------------------

1. **🚀 Introduction**
        * Qu'est-ce qu'un FreeLance ?
        * Pourquoi devenir FreeLance ?
        * Les avantages et inconvénients
2. **🛠️ Installation**
        * Les étapes pour commencer
        * Les compétences nécessaires
        * Comment trouver des clients ?
3. **⚙️ PortFolio**
        * L'importance d'avoir un PortFolio
        * Comment créer un PortFolio ?
        * Les erreurs à éviter
4. **📚 Paramètres CV**
        * Les éléments clés d'un CV FreeLance
        * Comment personnaliser votre CV ?
        * Les erreurs à éviter
5. **📦 Dépendances**
        * Les outils et ressources indispensables ?
        * Comment les utiliser efficacement ?
        * Les alternatives gratuites ?
6. **🧑‍💻 Exemple de Projet Code**
        * Comment présenter vos projets de code ?
        * Comment choisir les projets à mettre en avant ?
        * Comment expliquer votre processus de développement ?
7. **📄 Licence**
        * Les différents types de licence
        * Comment choisir la licence pour votre travail ?
        * Comment protéger vos droits d'auteur ?
      `},
    //  { role: 'assistant', content: "Vous êtes une IA, une Machine à optimisé les Prompts. Developpez le models de nouvelle fonctionnalitées, ## votre {contexte}, ## votre {rôle}, ## vos {compétences}, ## vos {tâches}, ## vos {fontions}, ## votre {quotidien}, ## les {processus}, ## les {caractéristiques}, ## ## les {Actions Immédiates} et ## le {resultat}{feedback} attentdu ainsi que les emoji's intélligent associé"}
  ],
    model: 'mixtral-8x7b-32768',
    temperature: 0.8,
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();