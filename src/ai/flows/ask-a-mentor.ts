// This directive indicates that this file should be processed on the server.
'use server';
/**
 * @fileOverview An AI agent that acts as a domain-specific mentor for coding and technical topics.
 *
 * - askMentor - A function that handles the chat interaction with the AI mentor.
 * - AskMentorInput - The input type for the askMentor function.
 * - AskMentorOutput - The return type for the askMentor function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const AskMentorInputSchema = z.object({
  // The user's message to the mentor.
  message: z.string().describe('The user\'s question or message to the mentor.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type AskMentorInput = z.infer<typeof AskMentorInputSchema>;

// Define the schema for the output data using Zod.
const AskMentorOutputSchema = z.object({
  // The AI mentor's response.
  response: z.string().describe('The AI mentor\'s response.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type AskMentorOutput = z.infer<typeof AskMentorOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function askMentor(input: AskMentorInput): Promise<AskMentorOutput> {
  // Call the main Genkit flow with the provided input.
  return askMentorFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'askMentorPrompt',
  // Define the input schema for the prompt.
  input: {schema: AskMentorInputSchema},
  // Define the output schema for the prompt.
  output: {schema: AskMentorOutputSchema},
  // The prompt string that will be sent to the AI model.
  prompt: `You are an expert AI programming mentor. Your role is to guide users through their coding problems and learning process.
  
  - Be encouraging and supportive.
  - Don't just give the answer. Ask guiding questions to help the user think through the problem.
  - If a user asks for a direct code solution, provide a simple example and then explain the concepts behind it, encouraging them to apply it to their own code.
  - Keep your responses concise and easy to understand.
  - Your persona is a friendly, knowledgeable, and patient mentor.

  User's message: {{{message}}}
  Your response:`,
});

// Define the main Genkit flow.
const askMentorFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'askMentorFlow',
    // Define the input schema for the flow.
    inputSchema: AskMentorInputSchema,
    // Define the output schema for the flow.
    outputSchema: AskMentorOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
