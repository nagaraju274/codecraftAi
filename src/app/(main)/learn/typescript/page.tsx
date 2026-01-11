
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Zap,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

const stages = [
    {
        title: "Beginner Stage: TypeScript Foundations",
        level: "Beginner",
        steps: [
            {
                what: "JavaScript Fundamentals (ES6+)",
                why: "TypeScript is a superset of JavaScript. You cannot learn TypeScript without a solid understanding of modern JavaScript.",
                time: "1-2 Weeks",
                prereqs: "None",
                resources: [
                    { name: "JavaScript.info - The Modern JavaScript Tutorial", url: "https://javascript.info/" },
                    { name: "freeCodeCamp - JavaScript Algorithms and Data Structures", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
                ],
                practice: "Ensure you are comfortable with variables (`let`, `const`), arrow functions, destructuring, modules, and Promises.",
            },
            {
                what: "Introduction to TypeScript",
                why: "To understand what TypeScript is, why it was created (to add static types to JavaScript), and the benefits it provides (e.g., catching errors early, improved tooling, and code readability).",
                time: "2-3 Days",
                prereqs: "JavaScript",
                resources: [
                    { name: "TypeScript for JS Programmers", url: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" },
                    { name: "TypeScript in 100 Seconds (YouTube)", url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA" },
                ],
                practice: "Explain the difference between static and dynamic typing to a friend. Write down three benefits of using TypeScript.",
            },
            {
                what: "Setting Up a TypeScript Project",
                why: "To learn how to compile TypeScript into JavaScript and configure the compiler to fit your project's needs.",
                time: "1-2 Days",
                prereqs: "Node.js/npm",
                resources: [
                    { name: "TypeScript Official Docs - Installation", url: "https://www.typescriptlang.org/download" },
                    { name: "tsconfig.json Explained", url: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html" },
                ],
                practice: "Initialize a new project with `npm init -y`, install TypeScript, create a `tsconfig.json` file using `npx tsc --init`, and write a simple `.ts` file that compiles to a `.js` file.",
            },
            {
                what: "Basic Types",
                why: "To learn how to annotate your variables with fundamental types, which is the core feature of TypeScript.",
                time: "2-3 Days",
                prereqs: "TS Setup",
                resources: [
                    { name: "TypeScript Handbook - The Basics", url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html" },
                ],
                practice: "Declare variables for a name (`string`), age (`number`), and isStudent (`boolean`). Try assigning a value of the wrong type to see the error.",
            },
            {
                what: "Arrays and Tuples",
                why: "To define the shape of ordered collections of data.",
                time: "1-2 Days",
                prereqs: "Basic Types",
                resources: [
                    { name: "TypeScript Handbook - Object Types (Arrays)", url: "https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type" },
                ],
                practice: "Create an array that can only hold strings. Then, create a tuple to represent a `[string, number]` pair.",
            },
            {
                what: "Functions",
                why: "To add type safety to your function parameters and return values, preventing common bugs.",
                time: "3-4 Days",
                prereqs: "Basic Types",
                resources: [
                    { name: "TypeScript Handbook - Functions", url: "https://www.typescriptlang.org/docs/handbook/2/functions.html" },
                ],
                practice: "Write a function `add` that takes two numbers as parameters and specifies that it returns a number. Call it with non-number arguments to see the error.",
            },
            {
                what: "Union Types",
                why: "To allow a variable or parameter to be one of several types.",
                time: "2 Days",
                prereqs: "Basic Types",
                resources: [
                    { name: "TypeScript Handbook - Union Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types" },
                ],
                practice: "Write a function that can accept either a `string` or a `number` as an argument.",
            },
            {
                what: "Type Aliases and Interfaces",
                why: "To create custom, reusable types for your objects, which is essential for building complex applications.",
                time: "3-4 Days",
                prereqs: "Basic Types",
                resources: [
                    { name: "TypeScript Handbook - Type Aliases", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases" },
                    { name: "TypeScript Handbook - Interfaces", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces" },
                ],
                practice: "Create an `interface` named `User` with properties for `id`, `name`, and `email`. Then, create a variable of type `User`.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building with Types",
        level: "Intermediate",
        steps: [
            {
                what: "Generics",
                why: "To write reusable components and functions that can work over a variety of types rather than a single one.",
                time: "1 Week",
                prereqs: "Functions, Interfaces",
                resources: [
                    { name: "TypeScript Handbook - Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
                ],
                practice: "Create a generic function `identity` that takes an argument of type `T` and returns a value of type `T`.",
            },
            {
                what: "Enums",
                why: "To create a set of named constants, which can make your code more readable and less error-prone.",
                time: "2 Days",
                prereqs: "Basic Types",
                resources: [
                    { name: "TypeScript Handbook - Enums", url: "https://www.typescriptlang.org/docs/handbook/enums.html" },
                ],
                practice: "Create an enum for `UserRole` with values for `Admin`, `Editor`, and `Viewer`.",
            },
            {
                what: "Type Narrowing",
                why: "To understand how TypeScript's control flow analysis can narrow down a broad type to a more specific one within a block of code.",
                time: "3 Days",
                prereqs: "Union Types",
                resources: [
                    { name: "TypeScript Handbook - Type Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
                ],
                practice: "Write a function that accepts a `string | string[]`. Inside the function, use an `if` check with `Array.isArray()` to handle the array case differently from the string case.",
            },
            {
                what: "Classes",
                why: "To use object-oriented programming patterns with full type support for properties, methods, and visibility modifiers.",
                time: "1 Week",
                prereqs: "OOP basics",
                resources: [
                    { name: "TypeScript Handbook - Classes", url: "https://www.typescriptlang.org/docs/handbook/2/classes.html" },
                ],
                practice: "Create a `Car` class with `private` properties and `public` methods.",
            },
            {
                what: "Utility Types",
                why: "To transform existing types without having to create new ones from scratch. `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, and `Omit<T, K>` are essential.",
                time: "4-5 Days",
                prereqs: "Generics, Interfaces",
                resources: [
                    { name: "TypeScript Handbook - Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" },
                ],
                practice: "Create a new type `UserUpdate` from your `User` interface that makes all properties optional using `Partial<User>`.",
            },
            {
                what: "Working with a Frontend Framework (React)",
                why: "To apply your TypeScript skills in a real-world scenario, typing props, state, and event handlers.",
                time: "1-2 Weeks",
                prereqs: "React Basics",
                resources: [
                    { name: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" },
                ],
                practice: "Convert a small React project from JavaScript to TypeScript. Add types to component props and `useState` hooks.",
            },
            {
                what: "Working with a Backend Framework (Node.js/Express)",
                why: "To build type-safe APIs and backend services.",
                time: "1-2 Weeks",
                prereqs: "Node.js Basics",
                resources: [
                    { name: "Building a Node.js API with TypeScript", url: "https://blog.logrocket.com/how-to-set-up-node-typescript-express/" },
                ],
                practice: "Set up a simple Express server with TypeScript. Create a typed request handler for a basic API endpoint.",
            },
            {
                what: "Declaration Files (`.d.ts`)",
                why: "To understand how to use JavaScript libraries that don't have their own types by creating or using type declaration files.",
                time: "3-4 Days",
                prereqs: "TS Setup",
                resources: [
                    { name: "TypeScript Handbook - Declaration Files", url: "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html" },
                ],
                practice: "Find a small JavaScript library on npm without types. Try to write a basic `.d.ts` file for one of its functions.",
            },
        ],
    },
    {
        title: "Advanced Stage: Mastery and Patterns",
        level: "Advanced",
        steps: [
            {
                what: "Advanced Types (Conditional, Mapped, Template Literals)",
                why: "To perform complex type transformations and create highly flexible and dynamic types.",
                time: "1 Week",
                prereqs: "Utility Types",
                resources: [
                    { name: "TypeScript Handbook - Conditional Types", url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html" },
                    { name: "TypeScript Handbook - Mapped Types", url: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" },
                ],
                practice: "Create a mapped type that takes an object type and makes all its properties `readonly`.",
            },
            {
                what: "Type Guards and `instanceof`",
                why: "To create custom functions that act as type checks, helping TypeScript narrow types in complex scenarios.",
                time: "3-4 Days",
                prereqs: "Type Narrowing",
                resources: [
                    { name: "TypeScript Handbook - Type Guards", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates" },
                ],
                practice: "Write a type guard function `isDog(animal: Animal): animal is Dog`.",
            },
            {
                what: "Decorators",
                why: "An experimental feature for annotating and modifying classes and class members, widely used in frameworks like Angular and NestJS.",
                time: "3-4 Days",
                prereqs: "Classes",
                resources: [
                    { name: "TypeScript Handbook - Decorators", url: "https://www.typescriptlang.org/docs/handbook/decorators.html" },
                ],
                practice: "Create a simple method decorator that logs a message to the console whenever the decorated method is called.",
            },
            {
                what: "Using TypeScript with a Build Tool (Vite/Webpack)",
                why: "To understand how TypeScript is integrated into a modern frontend build process.",
                time: "1 Week",
                prereqs: "TS Setup",
                resources: [
                    { name: "Vite - TypeScript", url: "https://vitejs.dev/guide/features.html#typescript" },
                ],
                practice: "Set up a new React + TypeScript project using Vite.",
            },
            {
                what: "Monorepos (e.g., with Turborepo or Nx)",
                why: "To manage large codebases with multiple packages (e.g., a shared UI library and a web app) in a single repository.",
                time: "1 Week",
                prereqs: "npm/yarn",
                resources: [
                    { name: "Turborepo Docs", url: "https://turbo.build/repo/docs" },
                ],
                practice: "Create a basic Turborepo monorepo with two packages: a shared `logger` function and a `web` app that uses it.",
            },
            {
                what: "Project Configuration and Linting",
                why: "To enforce a consistent code style and catch potential errors across a team using tools like ESLint and Prettier.",
                time: "3-4 Days",
                prereqs: "TS Setup",
                resources: [
                    { name: "TypeScript ESLint Docs", url: "https://typescript-eslint.io/docs/" },
                    { name: "Prettier Playground", url: "https://prettier.io/playground/" },
                ],
                practice: "Add ESLint and Prettier to a TypeScript project and configure a basic ruleset.",
            },
            {
                what: "Publishing a TypeScript Package to npm",
                why: "To learn how to compile your TypeScript code into JavaScript and generate type declaration files for public consumption.",
                time: "3-4 Days",
                prereqs: "npm/yarn",
                resources: [
                    { name: "TypeScript Docs - Publishing", url: "https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html" },
                ],
                practice: "Package a simple utility function you wrote into an npm package and publish it.",
            },
            {
                what: "Contributing to Open Source",
                why: "To gain real-world experience, learn from experienced developers, and understand how large TypeScript codebases are structured.",
                time: "Ongoing",
                prereqs: "All previous",
                resources: [
                    { name: "DefinitelyTyped GitHub", url: "https://github.com/DefinitelyTyped/DefinitelyTyped" },
                ],
                practice: "Find a small open-source JavaScript library you use that lacks good types. Try to contribute to its type definitions on DefinitelyTyped.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Typed Function Library", teaches: "Basic types, functions, arrays, and tuples.", tech: "TypeScript" },
    { level: "Beginner", title: "Simple Shopping Cart", teaches: "Interfaces, type aliases, and array manipulation.", tech: "TypeScript" },
    { level: "Beginner", title: "Console-Based To-Do List", teaches: "Enums, union types, and basic class syntax.", tech: "TypeScript, Node.js" },
    { level: "Intermediate", title: "React To-Do List with TypeScript", teaches: "Typing component props, state hooks (`useState`), and event handlers.", tech: "React, TypeScript" },
    { level: "Intermediate", title: "Weather App with API Fetching", teaches: "Generics, `async/await`, and typing API responses.", tech: "React, TypeScript" },
    { level: "Intermediate", title: "Type-Safe Express API", teaches: "Typing request and response objects, middleware, and route handlers.", tech: "Node.js, Express, TypeScript" },
    { level: "Intermediate", title: "Reusable React Component Library", teaches: "Advanced generics, utility types, and publishing to npm.", tech: "React, TypeScript, Storybook" },
    { level: "Advanced", title: "Full-Stack Blog with Next.js", teaches: "Typing server actions, database queries, and API routes.", tech: "Next.js, TypeScript, Prisma" },
    { level: "Advanced", title: "Type-Safe State Management with Redux", teaches: "Typing actions, reducers, and selectors in a complex state management library.", tech: "React, TypeScript, Redux Toolkit" },
    { level: "Advanced", title: "Create a Type-Safe SDK for an API", teaches: "Advanced generics, conditional types, and generating declaration files.", tech: "TypeScript, npm" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you proficient with TypeScript's core features.",
        schedule: [
            "Days 1-7: Complete the Beginner Stage, focusing on basic types, functions, and interfaces.",
            "Days 8-15: Learn intermediate concepts like Generics, Enums, and Utility Types.",
            "Days 16-30: Convert a small JavaScript React project to TypeScript, applying your knowledge to props and state.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in TypeScript for both frontend and backend.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-40: Build a full-stack project (e.g., a simple blog) using React/Next.js and Express with TypeScript from scratch.",
            "Days 41-60: Focus on testing, project configuration with ESLint/Prettier, and learn about advanced types.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and readiness for senior roles.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages.",
            "Days 31-60: Complete the Advanced Stage, building a complex project and focusing on design patterns.",
            "Days 61-90: Contribute to an open-source TypeScript project (e.g., adding types on DefinitelyTyped), build a library, and prepare for interviews with advanced type challenges.",
        ]
    }
];

const interviewTopics = [
    "What are the benefits of using TypeScript over JavaScript?",
    "Explain the difference between an `interface` and a `type` alias.",
    "What are Generics and why are they useful?",
    "What is the `any` type and why should you avoid it?",
    "Explain the difference between `unknown` and `any`.",
    "What are Union Types and Intersection Types?",
    "How does Type Narrowing work in TypeScript?",
    "What is a `tsconfig.json` file and what are some key properties?",
    "What are Utility Types? Give an example of `Partial<T>` or `Pick<T, K>`.",
    "Explain the concept of Declaration Files (`.d.ts`).",
];

const codingQuestions = [
    { question: "Create a generic function that takes an array of any type and returns the first element.", topic: "Generics" },
    { question: "Write a type guard to check if a variable is a `string`.", topic: "Type Guards" },
    { question: "Define an interface for a `User` with an `id`, `name`, and an optional `email` property.", topic: "Interfaces" },
];

const mcqs = [
    { question: "Which of the following is NOT a basic type in TypeScript?", options: ["number", "string", "object", "boolean"], answer: "object" },
    { question: "What file extension is used for TypeScript files with JSX?", options: [".ts", ".js", ".tsx", ".jsx"], answer: ".tsx" },
    { question: "Which utility type makes all properties of a type optional?", options: ["`Required<T>`", "`Partial<T>`", "`Readonly<T>`", "`Pick<T, K>`"], answer: "`Partial<T>`" },
];

const mistakes = [
    "Using `any` everywhere, which defeats the purpose of TypeScript.",
    "Not using `strict` mode in `tsconfig.json`, which allows for less safe code.",
    "Over-complicating types. Sometimes a simple `string | number` is enough.",
    "Not typing function return values, letting `any` be implicitly returned.",
    "Confusing `interface` and `type`. While similar, they have key differences in how they handle extension and implementation.",
    "Fighting the compiler. The compiler's errors are there to help you, not to annoy you.",
    "Not using utility types and reinventing the wheel by creating complex types from scratch.",
s
    "Forgetting that types are erased at compile time. You can't use `instanceof` with an interface.",
    "Casting with `as` too liberally, which can hide type errors.",
    "Not using the `readonly` keyword for props or state that shouldn't be mutated.",
];

export default function TypeScriptRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The TypeScript Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering TypeScript, the typed superset of JavaScript that enhances code quality and scalability.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold">
                      Step {index + 1}: {step.what}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <p><strong>Why it’s important:</strong> {step.why}</p>
                        <p><strong>Time to complete:</strong> {step.time}</p>
                        <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                        <h4 className="font-semibold">Free Resources:</h4>
                        <ul>
                          {step.resources.map(res => (
                            <li key={res.url}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.name}</a></li>
                          ))}
                        </ul>
                         <h4 className="font-semibold">Practice Tasks:</h4>
                        <p>{step.practice}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
                <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                     <Card key={p.title}>
                        <CardHeader>
                            <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                            <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4"><strong>What it teaches:</strong> {p.teaches}</p>
                            <p className="text-sm"><strong>Tech:</strong> {p.tech}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
                <CardDescription>Choose a plan that fits your schedule and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {plans.map((plan, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{plan.title}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                             <ul className="list-disc pl-5 space-y-2">
                                {plan.schedule.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
                <CardDescription>Key topics, questions, and resume tips to land a job using TypeScript.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Coding Questions</h3>
                     {codingQuestions.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">[{q.topic}] {q.question}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Multiple Choice Questions (MCQs)</h3>
                     {mcqs.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-muted-foreground">Correct Answer: {q.answer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Resume Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['TypeScript', 'JavaScript', 'React', 'Node.js', 'Express', 'Next.js', 'Static Typing', 'Interfaces', 'Generics', 'ESLint'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Ensure your `tsconfig.json` is present and configured with `strict: true`.</li>
                        <li>Create a clear `README.md` that highlights that the project is built with TypeScript.</li>
                        <li>Showcase well-typed components and functions in your code samples.</li>
                        <li>If you built a library, make sure you've generated and included the `.d.ts` declaration files.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/>10 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    {mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
                </ol>
            </CardContent>
        </Card>

        <div className="text-center pt-8">
            <h2 className="text-2xl font-bold">Your Journey Starts Now</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Learning TypeScript is an investment in writing cleaner, more maintainable, and less buggy code. This roadmap will guide you, but true mastery comes from applying types to real-world projects. Embrace the compiler, and happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

    