Promise.all([
    fetch('../json/_bilan.json'),
    fetch('../json/budget.json'),
    fetch('../json/compte_resultat.json'),
    fetch('../json/matrice.json'),
    // ...
  ])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    // data[0] contient le bilan, data[1] le compte de résultat, etc.
    // Vous pouvez maintenant combiner ces données ou les utiliser séparément
  })
  .catch(error => {
    console.error('Erreur lors du chargement des fichiers JSON:', error);
  });