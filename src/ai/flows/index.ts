// This directive indicates that this file should be processed on the server.
'use server';

// Import the explainCode function from its module.
import { explainCode } from './explain-code';
// Import the explainLearningTopic function from its module.
import { explainLearningTopic } from './explain-learning-topic';
// Import the fixCodeError function from its module.
import { fixCodeError } from './fix-code-error';
// Import the generateCode function from its module.
import { generateCode } from './generate-code-from-prompt';
// Import the suggestNextSteps function from its module.
import { suggestNextSteps } from './suggest-next-steps';
// Import the askMentor function from its module.
import { askMentor } from './ask-a-mentor';
// Import the generateStudyPlan function from its module.
import { generateStudyPlan } from './generate-study-plan';

// Export all the imported functions so they can be easily accessed from other parts of the application.
export {
    explainCode,
    explainLearningTopic,
    fixCodeError,
    generateCode,
    suggestNextSteps,
    askMentor,
    generateStudyPlan,
};
