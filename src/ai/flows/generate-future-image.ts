'use server';

/**
 * @fileOverview Generates an image of the friend group in 50 years.
 *
 * - generateFutureImage - A function that generates the image.
 * - GenerateFutureImageInput - The input type for the generateFutureImage function.
 * - GenerateFutureImageOutput - The return type for the generateFutureImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const GenerateFutureImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the friend group, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateFutureImageInput = z.infer<typeof GenerateFutureImageInputSchema>;

const GenerateFutureImageOutputSchema = z.object({
  futureImage: z
    .string()
    .describe("An AI-generated image of the friend group in 50 years, as a data URI."),
});
export type GenerateFutureImageOutput = z.infer<typeof GenerateFutureImageOutputSchema>;

export async function generateFutureImage(
  input: GenerateFutureImageInput
): Promise<GenerateFutureImageOutput> {
  return generateFutureImageFlow(input);
}

const generateFutureImagePrompt = ai.definePrompt({
  name: 'generateFutureImagePrompt',
  input: {schema: GenerateFutureImageInputSchema},
  output: {schema: GenerateFutureImageOutputSchema},
  prompt: [
    {
      media: {url: '{{photoDataUri}}'},
    },
    {
      text: `generate an image of this friend group in 50 years. 

      Consider these transformations when creating the image:
        - Show the characters with wrinkles, age spots, and other signs of aging.
        - Add grey hair, balding, or other age-related hair changes.
        - Depict clothing and accessories that are appropriate for older adults.
        - Adjust the background and setting to reflect a plausible environment for the characters in their later years.

      Return the full image as a base64 data URI.`,
    },
  ],
  config: {
    responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
  },
});

const generateFutureImageFlow = ai.defineFlow(
  {
    name: 'generateFutureImageFlow',
    inputSchema: GenerateFutureImageInputSchema,
    outputSchema: GenerateFutureImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: 'generate an image of this character in a jungle'},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return {futureImage: media.url!};
  }
);
