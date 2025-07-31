'use server';
/**
 * @fileOverview A conversational chat AI agent.
 *
 * - chat - A function that handles the chat conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {Message, Role, z} from 'genkit';

const ChatHistorySchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(ChatHistorySchema),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;


export async function chat(input: ChatInput): Promise<ChatOutput> {
  const messages: Message[] = input.history.map(item => ({
    role: item.role,
    content: [{ text: item.content }],
  }));

  messages.push({
    role: 'user',
    content: [{ text: input.message }],
  });

  const {output} = await ai.generate({
      prompt: messages,
      model: 'googleai/gemini-2.0-flash',
      config: {
          temperature: 0.5,
      }
  });

  return output?.text ?? "";
}
