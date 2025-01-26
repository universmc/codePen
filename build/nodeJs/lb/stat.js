const fs = require('node:fs');
fs.stat('./text.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log("we have access to the file stats in `stats`")
});