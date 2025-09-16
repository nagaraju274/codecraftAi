// src/ai/flows/explain-code.ts
// This directive indicates that this file should be processed on the server.
'use server';
/**
 * @fileOverview A code explanation AI agent.
 *
 * - explainCode - A function that handles the code explanation process.
 * - ExplainCodeInput - The input type for the explainCode function.
 * - ExplainCodeOutput - The return type for the explainCode function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const ExplainCodeInputSchema = z.object({
  // The code to be explained.
  code: z.string().describe('The code to be explained.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type ExplainCodeInput = z.infer<typeof ExplainCodeInputSchema>;

// Define the schema for the output data using Zod.
const ExplainCodeOutputSchema = z.object({
  // The explanation of the code.
  explanation: z.string().describe('The explanation of the code.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type ExplainCodeOutput = z.infer<typeof ExplainCodeOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function explainCode(input: ExplainCodeInput): Promise<ExplainCodeOutput> {
  // Call the main Genkit flow with the provided input.
  return explainCodeFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'explainCodePrompt',
  // Define the input schema for the prompt.
  input: {schema: ExplainCodeInputSchema},
  // Define the output schema for the prompt.
  output: {schema: ExplainCodeOutputSchema},
  // The prompt string that will be sent to the AI model.
  prompt: `You are an expert coding tutor who explains code in simple terms to students.

  Explain the following code in simple terms:

  {{code}}`,
});

// Define the main Genkit flow.
const explainCodeFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'explainCodeFlow',
    // Define the input schema for the flow.
    inputSchema: ExplainCodeInputSchema,
    // Define the output schema for the flow.
    outputSchema: ExplainCodeOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
