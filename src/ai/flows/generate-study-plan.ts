
'use server';
/**
 * @fileOverview An AI agent for generating personalized study plans.
 *
 * - generateStudyPlan - A function that creates a weekly study plan based on user inputs.
 * - GenerateStudyPlanInput - The input type for the generateStudyPlan function.
 * - GenerateStudyPlanOutput - The return type for the generateStudyPlan function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateStudyPlanInputSchema = z.object({
  topic: z.string().describe('The topic the user wants to learn.'),
  hoursPerWeek: z.number().describe('The number of hours the user can dedicate to studying each week.'),
  skillLevel: z.string().describe("The user's current skill level (e.g., Beginner, Intermediate, Advanced)."),
});
export type GenerateStudyPlanInput = z.infer<typeof GenerateStudyPlanInputSchema>;

const GenerateStudyPlanOutputSchema = z.object({
  weeks: z.array(z.object({
    week: z.number().describe('The week number of the study plan.'),
    topic: z.string().describe('The main topic or theme for the week.'),
    tasks: z.array(z.string()).describe('A list of specific tasks or sub-topics to cover during the week.'),
    resources: z.array(z.object({
        name: z.string().describe('The display name of the resource.'),
        url: z.string().describe('The URL for the resource. If a direct link isn\'t available, provide a Google search URL.'),
    })).describe('A list of suggested resources with clickable links.'),
  })).describe('A structured, week-by-week study plan.'),
});
export type GenerateStudyPlanOutput = z.infer<typeof GenerateStudyPlanOutputSchema>;

export async function generateStudyPlan(input: GenerateStudyPlanInput): Promise<GenerateStudyPlanOutput> {
  return generateStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStudyPlanPrompt',
  input: { schema: GenerateStudyPlanInputSchema },
  output: { schema: GenerateStudyPlanOutputSchema },
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

const generateStudyPlanFlow = ai.defineFlow(
  {
    name: 'generateStudyPlanFlow',
    inputSchema: GenerateStudyPlanInputSchema,
    outputSchema: GenerateStudyPlanOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
