const Groq = require('groq-sdk');


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
    const transcription = await groq.audio.transcriptions.create({
      file: fs.createReadStream("audio.m4a"),
      model: "whisper-large-v3",
      response_format: "verbose_json",
    });
    console.log(transcription.text);
  }
  main();