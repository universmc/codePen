const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
  const sujet = "subject";
  const verbe = "actions";
  const complement = "essentielle pour l'apprentissage et la croissance";
  const contexte = "Théories";
  const equation = "les équations Métaphysique et le Quanta : prompt --engine --help";

  const PromptRole = await promptχαλ(sujet, verbe, complement, contexte, equation);

  const readme = `"
  ./
-----------------------------------------------------------------------------------------------
# -------------------------------------(({ +regme })}-----------------------------------------------
## api zsh

step Plannnification data Project > Plan d'action (phase + timepstamp [html:5,canvas<table/>]
#! bin/sh 
cp Makefile build $sh + $api-key > source aliaias.sh
npm node -y
./build.sh
# OBJECTIFS
    > OBJECTIF_1
        + OBJECTIF_2
            - OBJECTIF_3
                * OBJECTIF_A
                * OBJECTIF_B
                * OBJECTIF_C
_________________________/
:
╔═════════════════════════════════════════════════════════════════════════════════╗
║[📗 📕 📒]┈┈┈┈┈┈┈┈< 🔷 - - ASCII_GRAPH-(Interface /dev mode) - - 🔷 >┈┈┈┈┈┈┈┈┈┈┈┈┈┈╣
╠═════════════════════════════════════════════════════════════════════════════════╣
║                                                                                 ║
║            0   1   a           A                                a(0,1)          ║
║      11.───┬───┬───┬────>    ---───────────────────────────────────+>   ____    ║
║        │   │   │   │                                                   [█░░░]   ║
║      1O.───┼───┼───┼─+>       --+──────────────────────────────────+>   ____    ║              
║        │   │   │   │                                                   [██░░]   ║
║      O1.───┼───┼───┼─+>       --+──────────────────────────────────+>   ____    ║              
║        │   │   │   │                                                   [███░░]  ║
║      0O.───┴───┴───┴────>    ---───────────────────────────────────+>           ║              
║                                                                                 ║
╠═════════════════════════════════════════════════════════════════════════════════╣
║/💻.📡/<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰 ║
╚═════════════════════════════════════════════════════════════════════════════════╝.sbin
# 📡 Network Interface 💻 #  (JAVASCRIPT:prompt --engine)
"`;


  groq.chat.completions.create({
    messages: [
      {role: "assistant",content: `"📙 INITIALISATION DE SYSTEM HOWTO ${PromptRole},${readme} 📡 Network Interface 💻 "`},
      {role: "user",content:`[📙,📘] Rédige une pseudo interface graphique sur la base et style de caratère $ASCII du ${readme}`}, 
      {role: "system",content: `"prompt --engine --help"`},
    // {role: "user",content:"[📙,📘] Rédige-moi une dissertation ou un court Magistral pour nous exposé ton potentiel IA dans le domaine cognifi sur ta compréhension et interprétation, de équations Métaphysique d'Albert Einstein."}, 
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.8,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "interface-" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

async function promptχαλ(sujet, verbe, complement, contexte,equation) {
  const prompts = [
    `"Selon ${contexte}, ${sujet} ${verbe} ${complement}."`,
    `"${contexte} croyait fermement que ${sujet} ${verbe} ${complement}."`,
    `"En tant que scientifique, ${contexte} savait que ${sujet} était ${verbe} afin d'exposé les ${complement} pour metre en ${equation} le prompt --engine."`,
    `"Pour l' ${equation} le prompt --engine défini le ${contexte}, et les actions à réalisé difinissentt ${verbe} associé au  le ${sujet}}."`
];

  const randomIndex = Math.floor(Math.random() * prompts.length);
  return prompts[randomIndex];
}

main();