'use server';
/**
 * @fileOverview A conversational chat AI agent.
 *
 * - chat - A function that handles the chat conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z, MessageSchema} from 'genkit';


const ChatInputSchema = z.object({
  messages: z.array(MessageSchema),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.string();
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {output} = await ai.generate({
        prompt: {
            messages: input.messages,
        },
        model: 'googleai/gemini-2.0-flash',
        config: {
            temperature: 0.5,
        }
    });

    return output?.text ?? "";
  }
);
