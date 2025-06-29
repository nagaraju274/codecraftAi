// src/ai/flows/suggest-next-steps.ts
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

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNextStepsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A description of the coding project the student is working on.'),
  currentCode: z.string().describe('The current code the student has written.'),
  desiredFeature: z
    .string()
    .describe('The feature the student wants to implement.'),
});

export type SuggestNextStepsInput = z.infer<typeof SuggestNextStepsInputSchema>;

const SuggestNextStepsOutputSchema = z.object({
  nextSteps: z
    .array(z.string())
    .describe('A list of suggested next steps for implementing the desired feature.'),
});

export type SuggestNextStepsOutput = z.infer<typeof SuggestNextStepsOutputSchema>;

export async function suggestNextSteps(input: SuggestNextStepsInput): Promise<SuggestNextStepsOutput> {
  return suggestNextStepsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestNextStepsPrompt',
  input: {schema: SuggestNextStepsInputSchema},
  output: {schema: SuggestNextStepsOutputSchema},
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

const suggestNextStepsFlow = ai.defineFlow(
  {
    name: 'suggestNextStepsFlow',
    inputSchema: SuggestNextStepsInputSchema,
    outputSchema: SuggestNextStepsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
