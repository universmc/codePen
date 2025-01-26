const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

document.addEventListener('DOMContentLoaded', async () => {
    const outputDiv = document.getElementById('output');

    const messages = [
        {
            role: 'user',
            content: 'Hello, how are you?'
},
        {
            role: 'user',
            content: 'I\'m doing great, thanks for asking!'
}
    ];

    const groq = new Groq();

    const chatCompletion = await groq.chat.completions.create({
        messages: messages,
        model: 'gemma-7b-it',
        temperature: 0.6,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
    });

    const generatedMessage = chatCompletion.choices[0].message.content;

    outputDiv.innerText = generatedMessage;
});
