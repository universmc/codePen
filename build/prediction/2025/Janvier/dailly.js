const fs = require('fs');

function readJsonFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function trainModel() {
  try {
    const filePath = 'daily.json';
    const timelineData = await readJsonFileAsync(filePath);
    console.log("timelineData:", timelineData); // Log for debugging

    if (Array.isArray(timelineData)) {
      for (const dayData of timelineData) {
        // Preprocess data 
        const features = preprocessData(dayData); 

        // ... (rest of your code)
      }
    } else {
      console.error("timelineData is not an array. Please check your days.json file format.");
    }
  } catch (error) {
    console.error('Error during training:', error);
  }
}


// Add the preprocessData function here
function preprocessData(dayData) {
  // Example: Extract relevant features from dayData
  const features = {
    // ... extract features from dayData.hours, dayData.features, etc.
  };
  return features;
}
trainModel();