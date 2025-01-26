import { pipeline } from '@huggingface/transformers';

const model = "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
// Allocate a pipeline for sentiment-analysis
let pipe = await pipeline('sentiment-analysis', 'nlptown/bert-base-multilingual-uncased-sentiment');

let out = await pipe('I love transformers!');