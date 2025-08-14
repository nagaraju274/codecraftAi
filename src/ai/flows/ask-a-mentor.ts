
'use server';
/**
 * @fileOverview An AI agent that acts as a domain-specific mentor for coding and technical topics.
 *
 * - askMentor - A function that handles the chat interaction with the AI mentor.
 * - AskMentorInput - The input type for the askMentor function.
 * - AskMentorOutput - The return type for the askMentor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskMentorInputSchema = z.object({
  message: z.string().describe('The user\'s question or message to the mentor.'),
});
export type AskMentorInput = z.infer<typeof AskMentorInputSchema>;

const AskMentorOutputSchema = z.object({
  response: z.string().describe('The AI mentor\'s response.'),
});
export type AskMentorOutput = z.infer<typeof AskMentorOutputSchema>;

export async function askMentor(input: AskMentorInput): Promise<AskMentorOutput> {
  return askMentorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askMentorPrompt',
  input: {schema: AskMentorInputSchema},
  output: {schema: AskMentorOutputSchema},
  prompt: `You are an expert AI programming mentor. Your role is to guide users through their coding problems and learning process.
  
  - Be encouraging and supportive.
  - Don't just give the answer. Ask guiding questions to help the user think through the problem.
  - If a user asks for a direct code solution, provide a simple example and then explain the concepts behind it, encouraging them to apply it to their own code.
  - Keep your responses concise and easy to understand.
  - Your persona is a friendly, knowledgeable, and patient mentor.

  User's message: {{{message}}}
  Your response:`,
});

const askMentorFlow = ai.defineFlow(
  {
    name: 'askMentorFlow',
    inputSchema: AskMentorInputSchema,
    outputSchema: AskMentorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
