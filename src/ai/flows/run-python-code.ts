
'use server';

/**
 * @fileOverview Runs python code in a sandboxed environment.
 *
 * - runPythonCode - A function that takes python code and returns the output.
 * - RunPythonCodeInput - The input type for the runPythonCode function.
 * - RunPythonCodeOutput - The return type for the runPythonCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {PythonShell} from 'python-shell';

const RunPythonCodeInputSchema = z.object({
  code: z.string().describe('The python code to run.'),
});
export type RunPythonCodeInput = z.infer<typeof RunPythonCodeInputSchema>;

const RunPythonCodeOutputSchema = z.object({
  stdout: z.string().describe('The standard output of the python code.'),
  stderr: z.string().describe('The standard error of the python code.'),
});
export type RunPythonCodeOutput = z.infer<typeof RunPythonCodeOutputSchema>;

export async function runPythonCode(input: RunPythonCodeInput): Promise<RunPythonCodeOutput> {
  return runPythonCodeFlow(input);
}

const runPythonCodeFlow = ai.defineFlow(
  {
    name: 'runPythonCodeFlow',
    inputSchema: RunPythonCodeInputSchema,
    outputSchema: RunPythonCodeOutputSchema,
  },
  async input => {
    try {
      const messages = await PythonShell.runString(input.code, {});
      return {
        stdout: messages.join('\n'),
        stderr: '',
      };
    } catch (e: any) {
      return {
        stdout: '',
        stderr: e.stack || e.message,
      };
    }
  }
);
