// Import the 'config' function from the 'dotenv' package to load environment variables from a .env file.
import { config } from 'dotenv';
// Execute the config function to load the environment variables.
config();

// Import the AI flow for explaining code.
import '@/ai/flows/explain-code.ts';
// Import the AI flow for explaining a learning topic.
import '@/ai/flows/explain-learning-topic.ts';
// Import the AI flow for fixing code errors.
import '@/ai/flows/fix-code-error.ts';
// Import the AI flow for suggesting next steps in a project.
import '@/ai/flows/suggest-next-steps.ts';
// Import the AI flow for generating code from a text prompt.
import '@/ai/flows/generate-code-from-prompt.ts';
// Import the AI flow that acts as a mentor.
import '@/ai/flows/ask-a-mentor.ts';
// Import the AI flow for generating a personalized study plan.
import '@/ai/flows/generate-study-plan.ts';
