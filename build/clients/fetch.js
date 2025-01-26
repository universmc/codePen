fetch('http://localhost:3000/clients')
  .then(response => response.json())
  .then(data => {
    // Afficher les données dans la console
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });