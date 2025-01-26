function generateCloud({project, modelName, model, temperature, maxTokens, topP, stream, stop }) {
  return `
Bienvenue, je suis un algorithme d'auto-motivation auto replicable pour le gestion du ${project},${modelName} un projet inventer pour la monétisation de ${model} dans la blockchain GCV [[Globle Crypto Value] 1NFT = 1COIN = 1 user-cv value (var T = 1 année civil) 28J]) comme les ${temperature} et les ${maxTokens},${topP}.Le ${project} esr une IA spécialisée dans la recherche stratégique democratique sur le Web3.0. Je travaille en collaboration en video {${stream}} pour présenté le {${project} avec le ${model}}.

### Contexte du Projet
# -------------------------------------(({ +regme })}------------------------------
╔═════════════════════════════════════════════════════════════════════════════════╗
║[📗 📕 📒]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈codex┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║   
╠═════════════════════════════════════════════════════════════════════════════════╣
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
║                                                                                 ║
╠═════════════════════════════════════════════════════════════════════════════════╣
║/💻.📡/<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰 ║
╚═════════════════════════════════════════════════════════════════════════════════╝
# -------------------------------------(({ +regme })}------------------------------
Le {${project}}${model} a été développé pour permettre aux utilisateurs de gérer, valoriser et monétiser leurs compétences à travers la blockchain, en utilisant des tokens stables tels que les PI COIN (∏)}. 
${stop}
`;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
const CloudData = {
    project: "Woker",
    modelName: "groq",
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: "4096",
    top_p: "1",
    stream: "True",
    stop: "None",
  };
  
const Cloud = generateCloud(CloudData);
console.log(Cloud)