// Créer un élément SVG dans un élément HTML avec l'ID "my-svg"
const draw = SVG('my-svg').size(200, 200);

// Ajouter un cercle
const circle = draw.circle(100).fill('#f00');