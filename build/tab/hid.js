const HID = require('node-hid');
const devices = HID.devices();

// Trouve le périphérique de ta tablette
const tabletDevice = devices.find(device => device.vendorId === ... && device.productId === ...);

// Ouvre le périphérique
const tablet = new HID.HID(tabletDevice.path);

// Écoute les données du stylet
tablet.on('data', (data) => {
  // Traite les données pour obtenir la position, la pression, etc.
  // Met à jour le canvas en conséquence
});

// ... (code pour dessiner sur le canvas)