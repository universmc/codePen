const fs = require('fs');
const axios = require('axios');
const gen = require('./src/txt');
const gen = require('./src/html');
const gen = require('./src/css');
const gen = require('./src/scss');
const gen = require('./src/js');
const gen = require('./src/json');
const gen = require('./src/svg');
const gen = require('./src/sh');
const gen = require('./src/sol');
const gen = require('./src/py');
const gen = require('./src/midi');
const gen = require('./src/md');
const gen = require('./src/gql');
const gen = require('./src/bitmap');
const gen = require('./src/drawio');

const readline = require('readline');

// Fonction pour capturer la saisie de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});