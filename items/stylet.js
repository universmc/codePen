// stylet.js

const HID = require('node-hid');

const vendorId = 1386;
const productId = 891;

const devices = HID.devices();

const styletDevice = devices.find(device => 
    device.vendorId === vendorId && 
    device.productId === productId && 
    device.usagePage === 1 && 
    device.usage === 1 
);

if (!styletDevice) {
  console.error('Stylet Wacom non trouvé.');
  process.exit(1); 
}

const stylet = new HID.HID(styletDevice.path);
console.log("✨ _ -  You Win - _ ✨ ");
console.log("");
console.log("╔═════════════════════════════════════╗     ╔════════════════════════════════════════════════════════════════════════════════╗");
console.log("╠════════{ ✨ Pi  - Console }═════════╣     ║[💫]                       🔷 Weclom tool Univers IA 🔷                     >[🛰]║");
console.log("║                                     ║     ╠════════════════════════════════════════════════════════════════════════════════╣");
console.log("║                      💠             ║     ║                                                                                ║");
console.log("║             ╲┈┈┈┈╱                  ║     ║                                                                                ║");
console.log("║             ╱▔▔▔▔╲                  ║     ║                                                                                ║");
console.log("║            ┃┈▇┈┈▇┈┃                 ║     ║                                                                                ║");
console.log("║          ╭╮┣━━━━━━┫╭╮               ║     ║                                                                                ║");
console.log("║          ┃┃┃┈┈┈┈┈┈┃┃┃               ║     ║                                                                                ║");
console.log("║          ╰╯┃┈┈┈┈┈┈┃╰╯               ║     ║                                                                                ║");
console.log("║            ╰┓┏━━┓┏╯                 ║     ║                                                                                ║");
console.log("║             ╰╯  ╰╯                  ║     ║                                                                                ║");
console.log("║    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈      ║     ║                                                                                ║");
console.log("║                                     ║     ║                                                                                ║");
console.log("║                                     ║     ║                                                                                ║");
console.log("║       [] IA                         ║     ║                                                                                ║");
console.log("║       [] MyPrompt                   ║     ║                                                                                ║");
console.log("║       [] Chatbot                    ║     ║                                                                                ║");
console.log("║                                     ║     ║                                                                                ║");
console.log("║       [] Blog                       ║     ║                                                                                ║");
console.log("║       [] Machine Learning           ║     ║                                                                                ║");
console.log("║       [] gpt-wallet                 ║     ║                                                                                ║");
console.log("║                                     ║     ║                                                                                ║");
console.log("║    ---------------------------      ║     ║                                                                                ║");
console.log("║       [] Codex                      ║     ║                                                                                ║");
console.log("║       [] Map                        ║     ║                                                                                ║");
console.log("║       [] Exit                       ║     ║                                                                                ║");
console.log("║                                     ║     ║                                                                                ║");
console.log("╠═════════════════════════════════════╣     ╠════════════════════════════════════════════════════════════════════════════════╣");
console.log("║💰:{                                }║     ║ 💻.📡/<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░/%>║");
console.log("╚═════════════════════════════════════╝     ╚════════════════════════════════════════════════════════════════════════════════╝");
console.log("✨ _ -  You Win - _ ✨ ");
module.exports = stylet;