const text = require('node:fs');
text.stat('./text.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log("we have access to the text stats in `stats`")
});