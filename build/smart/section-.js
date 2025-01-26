// Structure de données représentant les sections (exemple)
const sections = [
    {
      titre: "Introduction",
      contenu: "Bienvenue dans cette présentation.",
      audio: "introduction.mp3"
    },
    {
      titre: "Partie 1",
      contenu: "Premier point à aborder...",

    },
    // ... autres sections
  ];
  
  // Fonction pour créer un élément HTML section
  function creerSection(section) {
    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = `
      <h2>${section.titre}</h2>
      <p>${section.contenu}</p>
      <audio controls>
        <source src="${section.audio}" type="audio/mpeg">
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    `;
    return sectionElement;
  }
  
  // Fonction pour afficher les sections
  function afficherSections(sections) {
    const container = document.getElementById('contenu'); // Remplacez par l'ID de votre conteneur
  
    sections.forEach(section => {
      const sectionElement = creerSection(section);
      container.appendChild(sectionElement);
    });
  }
  
  // Appel de la fonction pour afficher les sections
  afficherSections(sections);