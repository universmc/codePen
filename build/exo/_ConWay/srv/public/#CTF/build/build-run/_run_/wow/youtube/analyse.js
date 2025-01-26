const axios = require('axios');
const youtubeRmpt = "[]"

const snippet = "node";

async function fetchYouTubeData(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=?`;
    const response = await axios.get(url);
    return response.data.items[0];
}

async function generateSummary(description) {
    const summary = await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: description,
    });
    return summary;
}

async function main(videoId) {
    const videoData = await fetchYouTubeData(videoId);
    const summary = await generateSummary(videoData.snippet.description);
    console.log(`Titre : ${videoData.snippet.title}`);
    console.log(`Résumé : ${summary}`);
}

main('VOTRE_VIDEO_ID');
