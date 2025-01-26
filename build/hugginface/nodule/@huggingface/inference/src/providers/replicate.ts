import type { ProviderMapping } from "./types";

export const REPLICATE_API_BASE_URL = "https://api.replicate.com";

type ReplicateId = string;

export const REPLICATE_SUPPORTED_MODEL_IDS: ProviderMapping<ReplicateId> = {
	"text-to-image": {
		"black-forest-labs/FLUX.1-schnell": "black-forest-labs/flux-schnell",
		"ByteDance/SDXL-Lightning":
			"bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
	},
	// "text-to-speech": {
	// 	"SWivid/F5-TTS": "x-lance/f5-tts:87faf6dd7a692dd82043f662e76369cab126a2cf1937e25a9d41e0b834fd230e"
	// },
};
