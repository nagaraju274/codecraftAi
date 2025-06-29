// src/ai/flows/fix-code-error.ts
'use server';

/**
 * @fileOverview Fixes errors in code snippets.
 *
 * - fixCodeError - A function that takes code with an error and returns the fixed code.
 * - FixCodeErrorInput - The input type for the fixCodeError function.
 * - FixCodeErrorOutput - The return type for the fixCodeError function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FixCodeErrorInputSchema = z.object({
  code: z.string().describe('The code snippet with an error.'),
  language: z.string().describe('The programming language of the code snippet.'),
});
export type FixCodeErrorInput = z.infer<typeof FixCodeErrorInputSchema>;

const FixCodeErrorOutputSchema = z.object({
  fixedCode: z.string().describe('The corrected code snippet.'),
  explanation: z.string().describe('An explanation of the error and how it was fixed.'),
});
export type FixCodeErrorOutput = z.infer<typeof FixCodeErrorOutputSchema>;

export async function fixCodeError(input: FixCodeErrorInput): Promise<FixCodeErrorOutput> {
  return fixCodeErrorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fixCodeErrorPrompt',
  input: {schema: FixCodeErrorInputSchema},
  output: {schema: FixCodeErrorOutputSchema},
  prompt: `You are an expert programming tutor. A student has provided you with a code snippet that contains an error. Your task is to identify and fix the error, and then provide a clear explanation of what the error was and how you fixed it. The student is using the {{{language}}} programming language.\n\nCode:\n{{{code}}}`,
});

const fixCodeErrorFlow = ai.defineFlow(
  {
    name: 'fixCodeErrorFlow',
    inputSchema: FixCodeErrorInputSchema,
    outputSchema: FixCodeErrorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
