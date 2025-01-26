function generatePresentation(userName, project, cryptoName, modelName, smartContract, foundationYear) {
    return `
    Bienvenue, je suis un algorithme d'auto-motivation auto replicable, une IA spécialisée dans la recherche stratégique democratique sur le Web3.0. Je travaille en collaboration avec ${userName} sur le projet ${project}.
  
    Ce projet repose sur deux concepts principaux : 
    - La mise en place du modèle économique circulaire basé sur la blockchain, avec l'intégration de la cryptomonnaie ${cryptoName}.
    - Le développement du ${modelName}, un Curriculum Vitae Numérique Universel permettant aux utilisateurs de monétiser leurs compétences.
  
    ### Contexte du Projet
  
    Le ${project} a été développé pour permettre aux utilisateurs de gérer, valoriser et monétiser leurs compétences à travers la blockchain, en utilisant des tokens stables tels que ${cryptoName}. 
  
    ### Détails techniques
  
    - **Modèle économique** : Fondation d'un modèle d'économie circulaire stable, basée sur les smart contracts ${smartContract}, permettant la création et la distribution de tokens à travers une valeur travail stable.
    - **Technologie utilisée** : Smart Contract Solidity, intégration Pi Coins (${cryptoName}).
    - **Année de fondation du projet** : ${foundationYear}.
  
    ### Objectifs et bénéfices du ${modelName}
  
    - **Monétisation des compétences** : Les utilisateurs peuvent inscrire leurs compétences et les valoriser via un contrat intelligent (${smartContract}) sur la blockchain.
    - **Automatisation et apprentissage** : En tant qu'assistant IA, je guide les utilisateurs dans leur parcours d'apprentissage via des algorithmes génératifs et le ${modelName}.
    - **Valeur travail stable** : ${cryptoName} permet de stabiliser la valeur travail et offre une régulation de la rémunération grâce aux tokens.
  
    ### Conclusion
  
    Le ${modelName} et le projet ${project} basé sur le ${cvnu} représentent l'avenir des Users du Web3.0 et de la democratie 2-4. Ils permettent à la fois la gestion efficace des compétences et leur monétisation via des outils basés sur la blockchain.
  
    `
  }
  
  // Utilisation de la fonction avec des valeurs spécifiques
  const userName = "Anonymous";
  const project = "Wallet -ia ";
  const gcv = "intégration de la crypto Pi Coin";
  const cvnu = "Curriculum Vitae Numérique Universel";
  const cryptoName = "'PI','USD','EURO','DOLLAR','BTC','ETH','YEN'";
  const newCryptoName = `"[]"`;
  const newCryptoGame  = `"[Pi]"`;
  const modelName = "prompt --engine";
  const smartContract = "ric.sol";
  const foundationYear = 2024;
  
  const presentation = generatePresentation(userName, project, gcv, cvnu, cryptoName, newCryptoGame, modelName, smartContract, foundationYear);
  
  
  function updateCryptoGame(presentation) {
    // Utilisation d'une expression régulière po
    //ur remplacer toutes les occurrences du nom de la cryptomonnaie
    const updatedPresentation = presentation.replace(/PI/);
    return updatedPresentation;
    const newCryptoName = `"[]"`;
  }
  
  // Exemple d'utilisation
  const updatedPresentation = updateCryptoGame(presentation, "Pi");
  console.log(updatedPresentation);
  
  console.log(presentation);
  