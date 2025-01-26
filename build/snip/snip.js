const fs = require('fs');

const snippets = {};

/**
 * Generates a prompt chain for a given task by creating sequential prompts.
 * @param {string} initialTask - The initial task or query.
 * @param {number} depth - Number of prompts to chain.
 * @returns {array} - Array of chained prompts.
 */
function promptChaining(initialTask, depth = 3) {
    let prompts = [`${initialTask}`];
    for (let i = 1; i <= depth; i++) {
        prompts.push(`Step ${i}: Refine and expand on the task: ${prompts[i - 1]}`);
    }
    snippets["promptChaining"] = prompts;
    return prompts;
}

/**
 * Generates a self-reflection prompt to evaluate and improve the previous response.
 * @param {string} lastResponse - The last generated response.
 * @returns {string} - A self-reflective prompt.
 */
function selfReflection(lastResponse) {
    const prompt = `Reflect on the quality of this response: "${lastResponse}". Identify any ambiguities or areas to improve.`;
    snippets["selfReflection"] = prompt;
    return prompt;
}

/**
 * Creates an iterative refinement prompt to gradually improve a response.
 * @param {string} basePrompt - The initial prompt.
 * @param {number} iterations - Number of refinement steps.
 * @returns {array} - Array of refined prompts.
 */
function iterativeRefinement(basePrompt, iterations = 3) {
    let prompts = [`Initial prompt: ${basePrompt}`];
    for (let i = 1; i <= iterations; i++) {
        prompts.push(`Iteration ${i}: Review and improve the previous response. Consider any missing details.`);
    }
    snippets["iterativeRefinement"] = prompts;
    return prompts;
}

/**
 * Generates recursive prompts for deep exploration of a topic.
 * @param {string} topic - The main topic to explore.
 * @param {number} depth - Depth of recursive questioning.
 * @returns {array} - Array of recursive prompts.
 */
function recursivePrompting(topic, depth = 3) {
    let prompts = [`Explore the topic: ${topic}`];
    for (let i = 1; i <= depth; i++) {
        prompts.push(`Level ${i}: Expand deeper into ${topic}. Explore related subtopics.`);
    }
    snippets["recursivePrompting"] = prompts;
    return prompts;
}

/**
 * Saves snippets to a JSON file.
 * @param {string} filename - The filename for the JSON output.
 */
function saveSnippets(filename = 'snippets.json') {
    fs.writeFileSync(filename, JSON.stringify(snippets, null, 2), 'utf-8');
}

// Example usage of the functions
const task = "Analyze customer feedback";
promptChaining(task, 3);
selfReflection("This response addresses the main issues but lacks specific examples.");
iterativeRefinement(task, 3);
recursivePrompting("Machine Learning in e-commerce", 3);

// Save the generated snippets to snippets.json
saveSnippets();
console.log("Snippets saved to snippets.json");
