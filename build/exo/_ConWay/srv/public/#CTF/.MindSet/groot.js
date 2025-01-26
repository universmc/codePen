const express = require('express');
const Groq = require('groq-sdk');

function initGroq() {
    
  const groqInstance = new Groq();
  groqInstance.setRootPath('../node_modules/');
  return groqInstance;
}

function processGroqQuery(groqInstance, query) {
  const result = groqInstance.process(query);
  return result;
}


const app = express();

app.get('..//node_modules/', (req, res) => {
  const groqInstance = initGroq();
  const query = req.query.query;
  const result = processGroqQuery(groqInstance, query);
  res.send(result);
});

app.listen(3000, () => {
  console.log('Routage des /node_modules/ activé');
});