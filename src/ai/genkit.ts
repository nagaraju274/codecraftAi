// Import the 'genkit' function from the 'genkit' library to configure the AI system.
import {genkit} from 'genkit';
// Import the Google AI plugin to integrate with Google's generative AI models.
import {googleAI} from '@genkit-ai/googleai';

// Configure and export the global AI instance.
export const ai = genkit({
  // A list of plugins to use. Here, we're using the Google AI plugin.
  plugins: [googleAI()],
  // Set the default model to be used for generation requests.
  model: 'googleai/gemini-2.0-flash',
});
