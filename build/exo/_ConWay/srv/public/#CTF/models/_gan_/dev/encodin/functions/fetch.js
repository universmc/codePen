const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function fetchProjects() {
  try {
    // Remplacez "votre_requête_groq" par votre requête GROQ réelle pour récupérer les projets
    const query = `*[_type == "project"]`;
    const projects = await groq.query(query);

    console.log(projects);
    // Ici, vous pouvez traiter les données des projets et les utiliser selon vos besoins
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
  }
}

fetchProjects();