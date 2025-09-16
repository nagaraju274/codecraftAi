// src/ai/flows/fix-code-error.ts
// This directive indicates that this file should be processed on the server.
'use server';

/**
 * @fileOverview Fixes errors in code snippets.
 *
 * - fixCodeError - A function that takes code with an error and returns the fixed code.
 * - FixCodeErrorInput - The input type for the fixCodeError function.
 * - FixCodeErrorOutput - The return type for the fixCodeError function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const FixCodeErrorInputSchema = z.object({
  // The code snippet containing an error.
  code: z.string().describe('The code snippet with an error.'),
  // The programming language of the code.
  language: z.string().describe('The programming language of the code snippet.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type FixCodeErrorInput = z.infer<typeof FixCodeErrorInputSchema>;

// Define the schema for the output data using Zod.
const FixCodeErrorOutputSchema = z.object({
  // The corrected code snippet.
  fixedCode: z.string().describe('The corrected code snippet.'),
  // An explanation of the fix.
  explanation: z.string().describe('An explanation of the error and how it was fixed.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type FixCodeErrorOutput = z.infer<typeof FixCodeErrorOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function fixCodeError(input: FixCodeErrorInput): Promise<FixCodeErrorOutput> {
  // Call the main Genkit flow with the provided input.
  return fixCodeErrorFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'fixCodeErrorPrompt',
  // Define the input schema for the prompt.
  input: {schema: FixCodeErrorInputSchema},
  // Define the output schema for the prompt.
  output: {schema: FixCodeErrorOutputSchema},
  // The prompt string that will be sent to the AI model.
  prompt: `You are an expert programming tutor. A student has provided you with a code snippet that contains an error. Your task is to identify and fix the error, and then provide a clear explanation of what the error was and how you fixed it. The student is using the {{{language}}} programming language.\n\nCode:\n{{{code}}}`,
});

// Define the main Genkit flow.
const fixCodeErrorFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'fixCodeErrorFlow',
    // Define the input schema for the flow.
    inputSchema: FixCodeErrorInputSchema,
    // Define the output schema for the flow.
    outputSchema: FixCodeErrorOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
