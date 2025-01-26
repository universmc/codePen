const fs = require("fs");
const Groq = require('groq-sdk');

// Initialize Groq SDK with an API key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Template for messages with placeholders
const messageTemplate = `
  Context: {context}
  Role: {role}
  Skills: {skills}
  Tasks: {tasks}
  Functions: {functions}
  Routine: {routine}
  Process: {process}
  Characteristics: {characteristics}
  Immediate Actions: {immediateActions}
  Expected Outcome: {expectedOutcome}
  Emoji Associate: {emojiAssociate}
`;

// Dynamic population of the message template
function populateTemplate(template, data) {
  return template.replace(/{(\w+)}/g, (_, key) => data[key] || "");
}

// Example prompt data
const examplePrompt = {
  context: "Enhancing API development using Groq's insights.",
  role: "Full-stack Developer with Groq",
  skills: "Node.js, Express, MongoDB, Groq SDK",
  tasks: "Implement API endpoints, Apply business logic, Integrate Groq insights",
  functions: "Develop data-driven applications",
  routine: "Sprint cycles with Groq integration for insights",
  process: "Develop, Analyze, Optimize",
  characteristics: "Responsive, Efficient, Scalable",
  immediateActions: "Use Groq SDK for data analytics in API development.",
  expectedOutcome: "Optimized API performance through enhanced Groq-based data handling.",
  emojiAssociate: "intégration de l'emoji intélligent associer."
};

// Create a formatted prompt message
const formattedMessage = populateTemplate(messageTemplate, examplePrompt);
console.log("Formatted Message:\n", formattedMessage);

// Function to convert result into a JSON snippet format
function generateSnippetJson(promptData) {
  const snippet = {
    version: "1.0",
    application: {
      name: "API Development with Groq",
      description: promptData.context,
      modules: {
        backend: {
          role: promptData.role,
          stack: promptData.skills.split(", "),
          tasks: promptData.tasks.split(", "),
          functions: promptData.functions,
          process: promptData.process.split(", "),
          characteristics: promptData.characteristics.split(", ")
        }
      },
      setup: {
        actions: promptData.immediateActions,
        expectedOutcome: promptData.expectedOutcome,
        emojiAssociate: promptData.emojiAssociate
      },
      routine: promptData.routine
    }
  };

  return snippet;
}

// Generate JSON snippet and save to file
const snippetObject = generateSnippetJson(examplePrompt);
const outputFilePath = "snippet.json";
fs.writeFileSync(outputFilePath, JSON.stringify(snippetObject, null, 2));
console.log(`Snippet JSON generated and saved to ${outputFilePath}`);

// Main function to execute prompt generation and processing
async function executePromptingGroq() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Développement d'un template de référence (prompt --engine).json" },
        { role: "user", content: JSON.stringify(examplePrompt) },
      ],
      model: "gemma2-9b-it",
      temperature: 0.6,
      max_tokens: 1024
    });

    const responseContent = chatCompletion.choices[0]?.message?.content;
    if (responseContent) {
      console.log("Groq Insights:\n", responseContent);
    } else {
      console.error("No valid insights generated.");
    }
  } catch (error) {
    console.error("Error in executing Groq prompting:", error);
  }
}

// Execute the main function
executePromptingGroq();