const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');

const client = new textToSpeech.TextToSpeechClient();

const request = {
  input: { text: 'Your extracted text from the script goes here' },
  voice: { languageCode: 'en-US', name: 'en-US-Standard-A' },
  audioConfig: { audioEncoding: 'MP3' },
};

client
  .synthesizeSpeech(request)
  .then(data => {
    const audioBytes = data[0].audioContent;
    fs.writeFileSync('output.mp3', audioBytes);
    console.log('Audio saved to output.mp3');
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
