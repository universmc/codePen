// tablet.js

const HID = require('node-hid');

const vendorId = 1386;
const productId = 891;

const devices = HID.devices();

const tabletDevice = devices.find(device => 
    device.vendorId === vendorId && 
    device.productId === productId && 
    device.usagePage === 65280 && 
    device.usage === 128 
);

if (!tabletDevice) {
  console.error('Tablette Wacom non trouvée.');
  process.exit(1); 
}

const tablet = new HID.HID(tabletDevice.path);
console.log("✨ _ -  You Win - _ ✨ ");
console.log("");
module.exports = tablet;