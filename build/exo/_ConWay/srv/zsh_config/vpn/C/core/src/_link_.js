const fs = require('fs');
const axios = require('axios');
const genTXT = require('./txt');
const genHTML = require('./html');
const genCSS = require('./css');
const genSCSS = require('./scss');
const genJS = require('./js');
const genJSON = require('./json');
const genSVG = require('./svg');
const genSH = require('./sh');
const genSOL = require('./sol');
const genPY = require('./py');
const genMIDI = require('./midi');
const genMD = require('./md');
const genGQL = require('./gql');
const genBITMAP = require('./bitmap');
const genDRAWIO = require('./drawio');
const genGIF = require('./gif');

const readline = require('readline');

// Fonction pour capturer la saisie de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});