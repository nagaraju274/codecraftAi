// This directive indicates that this file should be processed on the server.
'use server';
/**
 * @fileOverview An AI agent for generating personalized study plans.
 *
 * - generateStudyPlan - A function that creates a weekly study plan based on user inputs.
 * - GenerateStudyPlanInput - The input type for the generateStudyPlan function.
 * - GenerateStudyPlanOutput - The return type for the generateStudyPlan function.
 */

// Import the pre-configured Genkit AI instance.
import { ai } from '@/ai/genkit';
// Import Zod for schema validation.
import { z } from 'genkit';

// Define the schema for the input data using Zod.
const GenerateStudyPlanInputSchema = z.object({
  // The topic the user wants to learn.
  topic: z.string().describe('The topic the user wants to learn.'),
  // The number of hours the user can study per week.
  hoursPerWeek: z.number().describe('The number of hours the user can dedicate to studying each week.'),
  // The user's current skill level.
  skillLevel: z.string().describe("The user's current skill level (e.g., Beginner, Intermediate, Advanced)."),
});
// Export the TypeScript type inferred from the Zod schema.
export type GenerateStudyPlanInput = z.infer<typeof GenerateStudyPlanInputSchema>;

// Define the schema for the output data using Zod.
const GenerateStudyPlanOutputSchema = z.object({
  // A structured, week-by-week study plan.
  weeks: z.array(z.object({
    // The week number.
    week: z.number().describe('The week number of the study plan.'),
    // The main topic for the week.
    topic: z.string().describe('The main topic or theme for the week.'),
    // A list of tasks for the week.
    tasks: z.array(z.string()).describe('A list of specific tasks or sub-topics to cover during the week.'),
    // A list of suggested resources.
    resources: z.array(z.object({
        // The display name of the resource.
        name: z.string().describe('The display name of the resource.'),
        // The URL for the resource.
        url: z.string().describe('The URL for the resource. If a direct link isn\'t available, provide a Google search URL.'),
    })).describe('A list of suggested resources with clickable links.'),
  })).describe('A structured, week-by-week study plan.'),
});
// Export the TypeScript type inferred from the Zod schema.
export type GenerateStudyPlanOutput = z.infer<typeof GenerateStudyPlanOutputSchema>;

// Define an async function that serves as a wrapper for the Genkit flow.
export async function generateStudyPlan(input: GenerateStudyPlanInput): Promise<GenerateStudyPlanOutput> {
  // Call the main Genkit flow with the provided input.
  return generateStudyPlanFlow(input);
}

// Define the AI prompt using Genkit.
const prompt = ai.definePrompt({
  // A unique name for the prompt.
  name: 'generateStudyPlanPrompt',
  // Define the input schema for the prompt.
  input: { schema: GenerateStudyPlanInputSchema },
  // Define the output schema for the prompt.
  output: { schema: GenerateStudyPlanOutputSchema },
  // The prompt string that will be sent to the AI model.
  prompt: `You are an expert curriculum developer. A user wants a personalized study plan.

  User's Request:
  - Topic to Learn: {{{topic}}}
  - Weekly Time Commitment: {{{hoursPerWeek}}} hours
  - Current Skill Level: {{{skillLevel}}}

  Your Task:
  Create a detailed, week-by-week study plan for a duration of 4 weeks.
  The plan should be realistic given the user's weekly time commitment.
  For each week, provide a main topic, a list of specific learning tasks, and a list of suggested resources.
  For each resource, provide a name and a full URL. If a direct link isn't available (e.g., for a book chapter or a general concept), create a Google search URL for it (e.g., "https://www.google.com/search?q=...").
  Structure your output according to the provided JSON schema. Ensure the tasks and topics are appropriate for the user's specified skill level.
  `,
});

// Define the main Genkit flow.
const generateStudyPlanFlow = ai.defineFlow(
  {
    // A unique name for the flow.
    name: 'generateStudyPlanFlow',
    // Define the input schema for the flow.
    inputSchema: GenerateStudyPlanInputSchema,
    // Define the output schema for the flow.
    outputSchema: GenerateStudyPlanOutputSchema,
  },
  // The async function that executes the flow's logic.
  async input => {
    // Call the defined prompt with the flow's input.
    const { output } = await prompt(input);
    // Return the output from the prompt, ensuring it's not null.
    return output!;
  }
);
