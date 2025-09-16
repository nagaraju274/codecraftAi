// src/ai/flows/generate-code-from-prompt.ts
// This directive indicates that this file should be processed on the server.
'use server';

/**
 * @fileOverview Generates code from a simple text prompt.
 *
 * - generateCode - A function that generates code based on a text prompt.
 * - GenerateCodeInput - The input type for the generateCode function.
 * - GenerateCodeOutput - The return type for the generateCode function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const GenerateCodeInputSchema = z.object({
  // A text prompt describing the code to generate.
  prompt: z.string().describe('A text prompt describing the code to generate.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type GenerateCodeInput = z.infer<typeof GenerateCodeInputSchema>;

// Define the schema for the output data using Zod.
const GenerateCodeOutputSchema = z.object({
  // The generated code.
  code: z.string().describe('The generated code.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type GenerateCodeOutput = z.infer<typeof GenerateCodeOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function generateCode(input: GenerateCodeInput): Promise<GenerateCodeOutput> {
  // Call the main Genkit flow with the provided input.
  return generateCodeFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'generateCodePrompt',
  // Define the input schema for the prompt.
  input: {schema: GenerateCodeInputSchema},
  // Define the output schema for the prompt.
  output: {schema: GenerateCodeOutputSchema},
  // The prompt string that will be sent to the AI model.
  prompt: `You are an expert coding assistant. You will generate code based on the user's prompt. Respond with only the code and with no other explanation.

Prompt: {{{prompt}}}`,
});

// Define the main Genkit flow.
const generateCodeFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'generateCodeFlow',
    // Define the input schema for the flow.
    inputSchema: GenerateCodeInputSchema,
    // Define the output schema for the flow.
    outputSchema: GenerateCodeOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
