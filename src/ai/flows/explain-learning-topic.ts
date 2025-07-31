'use server';
/**
 * @fileOverview An AI agent for explaining learning topics.
 *
 * - explainLearningTopic - A function that provides a detailed explanation for a given learning topic.
 * - ExplainLearningTopicInput - The input type for the explainLearningTopic function.
 * - ExplainLearningTopicOutput - The return type for the explainLearningTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainLearningTopicInputSchema = z.object({
  topicTitle: z.string().describe('The title of the learning topic to be explained.'),
  points: z.array(z.string()).describe('A list of key points to be covered in the explanation.'),
});
export type ExplainLearningTopicInput = z.infer<typeof ExplainLearningTopicInputSchema>;

const ExplainLearningTopicOutputSchema = z.object({
  explanation: z.string().describe('The detailed explanation of the learning topic, formatted in Markdown.'),
});
export type ExplainLearningTopicOutput = z.infer<typeof ExplainLearningTopicOutputSchema>;

export async function explainLearningTopic(input: ExplainLearningTopicInput): Promise<ExplainLearningTopicOutput> {
  return explainLearningTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainLearningTopicPrompt',
  input: {schema: ExplainLearningTopicInputSchema},
  output: {schema: ExplainLearningTopicOutputSchema},
  prompt: `You are an expert tutor who provides detailed, easy-to-understand explanations for technical topics.

Provide a detailed explanation for the following topic:
Topic: {{{topicTitle}}}

Cover these key points:
{{#each points}}
- {{{this}}}
{{/each}}

Your explanation should be clear, comprehensive, and formatted in Markdown.
`,
});

const explainLearningTopicFlow = ai.defineFlow(
  {
    name: 'explainLearningTopicFlow',
    inputSchema: ExplainLearningTopicInputSchema,
    outputSchema: ExplainLearningTopicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
