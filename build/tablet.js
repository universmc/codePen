const { exec } = require('child_process');
const HID = require('node-hid');

const devices = HID.devices();

const vendorId = 1386; // Remplacez par votre vendorId
const productId = 891; // Remplacez par votre productId

let tablet;
app.whenReady().then(() => {
const devices = HID.devices();


// Crée ta fenêtre Electron
function createWindow() {
    const win = new BrowserWindow({
      width: 987,
      height: 610,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'), // Charge le script de préchargement
        contextIsolation: true,
        enableRemoteModule: false,
      },
    });
  
    win.loadFile('./index.html');
  }
// ...

});



const wss = new WebSocket.Server({ port: 8080 });



wss.on('connection', (ws) => {

// ... (code pour envoyer les données du stylet au client)

});



// Écouter les événements de la tablette

device.on('data', (data) => {

// Traiter les données reçues et les envoyer au client

wss.clients.forEach(client => {

if (client.readyState === WebSocket.OPEN) {

client.send(JSON.stringify(data));

}

});

});
console.log(devices)