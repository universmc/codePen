import type { BaseArgs, Options } from "../../types";
export type TextToImageArgs = BaseArgs & {
    /**
     * The text to generate an image from
     */
    inputs: string;
    /**
     * Same param but for external providers like Together, Replicate
     */
    prompt?: string;
    response_format?: "base64";
    input?: {
        prompt: string;
    };
    parameters?: {
        /**
         * An optional negative prompt for the image generation
         */
        negative_prompt?: string;
        /**
         * The height in pixels of the generated image
         */
        height?: number;
        /**
         * The width in pixels of the generated image
         */
        width?: number;
        /**
         * The number of denoising steps. More denoising steps usually lead to a higher quality image at the expense of slower inference.
         */
        num_inference_steps?: number;
        /**
         * Guidance scale: Higher guidance scale encourages to generate images that are closely linked to the text `prompt`, usually at the expense of lower image quality.
         */
        guidance_scale?: number;
    };
};
export type TextToImageOutput = Blob;
/**
 * This task reads some text input and outputs an image.
 * Recommended model: stabilityai/stable-diffusion-2
 */
export declare function textToImage(args: TextToImageArgs, options?: Options): Promise<TextToImageOutput>;
//# sourceMappingURL=textToImage.d.ts.map