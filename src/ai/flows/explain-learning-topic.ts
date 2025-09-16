// This directive indicates that this file should be processed on the server.
'use server';
/**
 * @fileOverview An AI agent for explaining learning topics.
 *
 * - explainLearningTopic - A function that provides a detailed explanation for a given learning topic.
 * - ExplainLearningTopicInput - The input type for the explainLearningTopic function.
 * - ExplainLearningTopicOutput - The return type for the explainLearningTopic function.
 */

// Import the pre-configured Genkit AI instance.
import {ai} from '@/ai/genkit';
// Import Zod for schema validation.
import {z} from 'genkit';

// Define the schema for the input data using Zod.
const ExplainLearningTopicInputSchema = z.object({
  // The title of the learning topic.
  topicTitle: z.string().describe('The title of the learning topic to be explained.'),
  // A list of key points to cover.
  points: z.array(z.string()).describe('A list of key points to be covered in the explanation.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type ExplainLearningTopicInput = z.infer<typeof ExplainLearningTopicInputSchema>;

// Define the schema for the output data using Zod.
const ExplainLearningTopicOutputSchema = z.object({
  // The detailed explanation in Markdown format.
  explanation: z.string().describe('The detailed explanation of the learning topic, formatted in Markdown.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type ExplainLearningTopicOutput = z.infer<typeof ExplainLearningTopicOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function explainLearningTopic(input: ExplainLearningTopicInput): Promise<ExplainLearningTopicOutput> {
  // Call the main Genkit flow with the provided input.
  return explainLearningTopicFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'explainLearningTopicPrompt',
  // Define the input schema for the prompt.
  input: {schema: ExplainLearningTopicInputSchema},
  // Define the output schema for the prompt.
  output: {schema: ExplainLearningTopicOutputSchema},
  // The prompt string that will be sent to the AI model.
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

// Define the main Genkit flow.
const explainLearningTopicFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'explainLearningTopicFlow',
    // Define the input schema for the flow.
    inputSchema: ExplainLearningTopicInputSchema,
    // Define the output schema for the flow.
    outputSchema: ExplainLearningTopicOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const {output} = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
