'use server';
/**
 * @fileOverview An AI agent for generating study notes.
 *
 * - generateNotes - A function that provides concise study notes for a given topic and subject.
 * - GenerateNotesInput - The input type for the generateNotes function.
 * - GenerateNotesOutput - The return type for the generateNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNotesInputSchema = z.object({
  subject: z.string().describe('The main subject the topic belongs to.'),
  topic: z.string().describe('The specific topic for which to generate notes.'),
});
export type GenerateNotesInput = z.infer<typeof GenerateNotesInputSchema>;

const GenerateNotesOutputSchema = z.object({
  notes: z.string().describe('The generated study notes in Markdown format.'),
});
export type GenerateNotesOutput = z.infer<typeof GenerateNotesOutputSchema>;

export async function generateNotes(input: GenerateNotesInput): Promise<GenerateNotesOutput> {
  return generateNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNotesPrompt',
  input: {schema: GenerateNotesInputSchema},
  output: {schema: GenerateNotesOutputSchema},
  prompt: `You are an expert academic tutor. Your task is to generate concise, easy-to-understand study notes for a specific topic within a subject.

  Subject: {{{subject}}}
  Topic: {{{topic}}}

  Provide the key points, definitions, and simple examples for the given topic. The notes should be formatted in clean Markdown.
  `,
});

const generateNotesFlow = ai.defineFlow(
  {
    name: 'generateNotesFlow',
    inputSchema: GenerateNotesInputSchema,
    outputSchema: GenerateNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
