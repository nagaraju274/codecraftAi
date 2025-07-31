import { config } from 'dotenv';
config();

import '@/ai/flows/explain-code.ts';
import '@/ai/flows/fix-code-error.ts';
import '@/ai/flows/suggest-next-steps.ts';
import '@/ai/flows/generate-code-from-prompt.ts';
