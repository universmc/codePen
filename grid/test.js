// Initialisation
const HID = require('node-hid');
const devices = HID.devices();

const vendorId = 1386; 
const productId = 891; 
// Trouver la tablette
const tabletDevice = devices.find(device => device.vendorId === vendorId && device.productId === productId);
const tablet = new HID.HID(tabletDevice.path);

// Initialiser le canevas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Écouter les événements de la tablette
tablet.on('data', (data) => {
  // Extraire les coordonnées X et Y (adapter en fonction du format de données de votre tablette)
  const x = data[0];
  const y = data[1];

  // Dessiner un point sur le canevas
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();
});