function generatePresentation({ userName, project, cvnu, cryptoName, modelName, smartContract, foundationYear }) {
    return `
Bienvenue, je suis un algorithme d'auto-motivation auto replicable pour le gestion du ${project}, un projet inventer pour la monétisation de ${cvnu} dans la blockchain GCV [[Globle Crypto Value] 1NFT = 1COIN = 1 user-cv value (var T = 1 année civil) 28J]) comme les ${cryptoName} et les ${smartContract}. ${modelName} une IA spécialisée dans la recherche stratégique democratique sur le Web3.0. Je travaille en collaboration avec {${userName}} sur le projet {${project}}.

### Contexte du Projet

Le {${project}} a été développé pour permettre aux utilisateurs de gérer, valoriser et monétiser leurs compétences à travers la blockchain, en utilisant des tokens stables tels que {${cryptoName}}. 
`;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
const presentationData = {
    userName: "Anonymous",
    project: "Wallet -ia ",
    cvnu: "curriculum vitae, numérique universel ",
    cryptoName: "Pi COINS",
    smartContract: "cvnu.sol",
    modelName: "Gemini",
  };
  
const presentation = generatePresentation(presentationData);
console.log(presentation)