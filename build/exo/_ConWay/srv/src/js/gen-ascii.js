const fs = require("fs");
const Groq = require("groq-sdk");
const { insert } = require("sanity");
const groq = new Groq();
const alias = fecth(`alias.sh`);
const initialisation = require(``);
const constructor =require(``);
const conception = require(``);
const modelsIA = require(``);
const frontend = require(``);
const backend = require(``);
const teste = INSERT(data/test);
const documentations =require(``);


async function main() {
const borderChars = {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝', 
    horizontal: '═',
    vertical: '║',
    intersectionLeft: '╠',
    intersectionRight: '╣',
    intersectionTop: '╦',
    intersectionBottom: '╩',
    intersectionCross: '╬',
  };
  
  const ganttChart= {initialisation}+{constructor}+{conception}+{configuration}+{modelsIA}+{frontend}+{backend}+{teste}+{documentations}+{livrables}+{contrib}
    
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:"initiation à la technologie groq vocal "},
    ],
    model: "mistral-large-latest",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();