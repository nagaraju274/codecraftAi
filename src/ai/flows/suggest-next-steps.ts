// src/ai/flows/suggest-next-steps.ts
// This directive indicates that this file should be processed on the server.
'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest the next steps for a student working on a coding project.
 *
 * It takes the project description, current code, and desired feature as input and returns a list of suggested next steps.
 * @module ai/flows/suggest-next-steps
 * @exports suggestNextSteps - A function that calls the suggestNextStepsFlow with the provided input.
 * @exports SuggestNextStepsInput - The input type for the suggestNextSteps function.
 * @exports SuggestNextStepsOutput - The output type for the suggestNextSteps function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const SuggestNextStepsInputSchema = z.object({
  // A description of the student's project.
  projectDescription: z
    .string()
    .describe('A description of the coding project the student is working on.'),
  // The student's current code.
  currentCode: z.string().describe('The current code the student has written.'),
  // The feature the student wants to implement.
  desiredFeature: z
    .string()
    .describe('The feature the student wants to implement.'),
});

// Export the TypeScript type inferred from the Zod schema.
export type SuggestNextStepsInput = z.infer<typeof SuggestNextStepsInputSchema>;

// Define the schema for the output data using Zod.
const SuggestNextStepsOutputSchema = z.object({
  // A list of suggested next steps.
  nextSteps: z
    .array(z.string())
    .describe('A list of suggested next steps for implementing the desired feature.'),
});

// Export the TypeScript type inferred from the Zod schema.
export type SuggestNextStepsOutput = z.infer<typeof SuggestNextStepsOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function suggestNextSteps(input: SuggestNextStepsInput): Promise<SuggestNextStepsOutput> {
  // Call the main Genkit flow with the provided input.
  return suggestNextStepsFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'suggestNextStepsPrompt',
  // Define the input schema for the prompt.
  input: {schema: SuggestNextStepsInputSchema},
  // Define the output schema for the prompt.
  output: {schema: SuggestNextStepsOutputSchema},
  // The prompt string that will be sent to the AI model.
  prompt: `You are an AI coding assistant helping a student build a coding project.

The project is described as follows:
{{{projectDescription}}}

The student has already written the following code:
{{{currentCode}}}

The student wants to implement the following feature:
{{{desiredFeature}}}

Suggest a list of next steps the student can take to implement the feature. Be specific and actionable.

Output the next steps as a numbered list.

Example output:
{
  "nextSteps": [
    "Step 1: Do this",
    "Step 2: Then do that",
    "Step 3: Finally do this other thing"
  ]
}
`,
});

// Define the main Genkit flow.
const suggestNextStepsFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'suggestNextStepsFlow',
    // Define the input schema for the flow.
    inputSchema: SuggestNextStepsInputSchema,
    // Define the output schema for the flow.
    outputSchema: SuggestNextStepsOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
