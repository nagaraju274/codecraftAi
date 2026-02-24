
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Code,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Globe,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: JavaScript Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Environment Setup",
        why: "To understand what JavaScript is, its role in the browser, and how to use the Developer Console and VS Code.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "JS Introduction (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" },
          { name: "JS Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
        practice: "Print 'Hello World' in the console. Link an external .js file to an HTML document.",
      },
      {
        what: "Variables & Data Types",
        why: "Understanding 'let', 'const', and 'var' along with primitive types (String, Number, Boolean, null, undefined) is essential for data storage.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Variables & Data Types (JS.info)", url: "https://javascript.info/first-steps" },
        ],
        practice: "Create a script that stores your name, age, and a boolean value. Use template literals to print a bio.",
      },
      {
        what: "Basic Operators & Expressions",
        why: "Arithmetic, assignment, and comparison operators are used to perform calculations and logic.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "JS Operators (W3Schools)", url: "https://www.w3schools.com/js/js_operators.asp" },
        ],
        practice: "Build a simple calculator script that performs addition, subtraction, multiplication, and division.",
      },
      {
        what: "Control Flow (If/Else, Switch)",
        why: "Logic allows your program to make decisions and branching paths.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Conditionals Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" },
        ],
        practice: "Write a program that outputs a user's grade (A, B, C...) based on a numeric score variable.",
      },
      {
        what: "Functions: The Building Blocks",
        why: "Functions allow you to group code into reusable modules. Learn declarations, expressions, and parameters.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "JS Functions (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
        ],
        practice: "Write a function that calculates the area of a circle and another that reverses a string.",
      },
      {
        what: "Arrays & Common Methods",
        why: "Arrays store lists of data. Methods like push, pop, shift, and unshift are crucial for list manipulation.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Array Methods (JS.info)", url: "https://javascript.info/array-methods" },
        ],
        practice: "Create a list of tasks. Practice adding, removing, and finding items in the array.",
      },
      {
        what: "Objects & Key-Value Pairs",
        why: "Objects are the primary way to structure data in JS. Learn property access and nested objects.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Objects Basics", url: "https://javascript.info/object" },
        ],
        practice: "Create an object representing a car with properties for brand, model, and year.",
      },
      {
        what: "Intro to DOM Manipulation",
        why: "JavaScript's main power is interacting with HTML. Learn querySelector and innerHTML.",
        time: "1 Week",
        prereqs: "Step 1, HTML/CSS Basics",
        resources: [
          { name: "DOM Manipulation Course", url: "https://www.youtube.com/watch?v=y17RuWkWdn8" },
        ],
        practice: "Create a button that changes the background color of the page when clicked.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Modern & Async JS",
    level: "Intermediate",
    steps: [
      {
        what: "Modern ES6+ Features",
        why: "Master arrow functions, destructuring, spread/rest operators, and modules (import/export).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "ES6 Features (freeCodeCamp)", url: "https://www.freecodecamp.org/news/write-better-javascript-js-es6-features-and-syntax-explained/" },
        ],
        practice: "Refactor your previous beginner functions using arrow functions and destructuring.",
      },
      {
        what: "Asynchronous JS: Promises",
        why: "Handle operations that take time (like fetching data) without blocking the main thread.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Promises Guide", url: "https://javascript.info/promise-basics" },
        ],
        practice: "Create a Promise that resolves after 2 seconds and log a success message.",
      },
      {
        what: "Async / Await & Fetch API",
        why: "The modern, readable way to handle async code and communicate with servers.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Fetch API & Async/Await", url: "https://www.youtube.com/watch?v=drK67OkA9zM" },
        ],
        practice: "Fetch a list of users from 'https://jsonplaceholder.typicode.com/users' and display them on a page.",
      },
      {
        what: "Advanced Array Methods (Map, Filter, Reduce)",
        why: "Functional methods are the industry standard for processing data collections.",
        time: "5 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Functional Array Methods", url: "https://www.youtube.com/watch?v=rRgD1yVwIvE" },
        ],
        practice: "Given an array of numbers, use filter to get evens and map to square them.",
      },
      {
        what: "Scope, Closures & The 'this' Keyword",
        why: "Understand how variables are accessed and how functions 'remember' their environment.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Closures Explained", url: "https://www.youtube.com/watch?v=vKJpn5FyL3Q" },
          { name: "The 'this' Keyword", url: "https://javascript.info/object-methods" },
        ],
        practice: "Write a function that returns another function to increment a counter (private variable).",
      },
      {
        what: "OOP in JS: Classes & Prototypes",
        why: "Structure your code using classes, constructors, and inheritance.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Classes in JS", url: "https://javascript.info/classes" },
        ],
        practice: "Create a 'User' class and a 'PremiumUser' subclass that inherits properties.",
      },
      {
        what: "Error Handling (Try / Catch)",
        why: "Build resilient apps that handle unexpected crashes gracefully.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Error Handling Guide", url: "https://javascript.info/try-catch" },
        ],
        practice: "Wrap a fetch call in try/catch to handle potential network errors.",
      },
      {
        what: "Local Storage & Session Storage",
        why: "Persist user data (like theme settings or cart items) between page refreshes.",
        time: "3 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Local Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
        ],
        practice: "Build a dark mode toggle that saves the user's preference in LocalStorage.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & Performance",
    level: "Advanced",
    steps: [
      {
        what: "The Event Loop & Call Stack",
        why: "Deeply understand how JS handles concurrency, microtasks, and macrotasks.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "What is the Event Loop? (Talk)", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" },
        ],
        practice: "Predict the output order of a code snippet containing setTimeout, Promises, and console logs.",
      },
      {
        what: "Functional Programming Patterns",
        why: "Learn currying, composition, and pure functions for cleaner, testable code.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Functional JS Guide", url: "https://www.youtube.com/playlist?list=PL0zVEHSv8slXatx_v_YClatunInMAq_An" },
        ],
        practice: "Implement a compose function that combines multiple mathematical operations.",
      },
      {
        what: "Unit Testing with Jest",
        why: "Professional JS development requires automated tests to ensure reliability.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Testing with Jest", url: "https://www.youtube.com/watch?v=7r4xVDI2vho" },
        ],
        practice: "Write unit tests for a utility library of math functions.",
      },
      {
        what: "Performance & Memory Management",
        why: "Avoid memory leaks and optimize slow code using Chrome DevTools.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Memory Management", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management" },
        ],
        practice: "Use the 'Performance' tab in Chrome to analyze a slow-rendering loop.",
      },
      {
        what: "Regex (Regular Expressions)",
        why: "Powerful string searching and validation patterns used in almost every form.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Regex Guide", url: "https://javascript.info/regular-expressions" },
        ],
        practice: "Write a regex to validate an email address and a strong password.",
      },
      {
        what: "Web Workers & Service Workers",
        why: "Run heavy tasks in the background or build offline-capable PWAs.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Web Workers Basics", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" },
        ],
        practice: "Move a heavy numeric calculation to a Web Worker to keep the UI smooth.",
      },
      {
        what: "Security Best Practices",
        why: "Protect your apps from XSS, CSRF, and data injection attacks.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Web Security for Developers", url: "https://www.youtube.com/watch?v=1S0aBV-Waeo" },
        ],
        practice: "Audit a form to ensure all user inputs are properly sanitized before rendering.",
      },
      {
        what: "JS Tooling (Vite, Babel, ESLint)",
        why: "Understand the build pipeline that transforms modern JS for all browsers.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "JS Build Tools Explained", url: "https://www.youtube.com/watch?v=2ReR1YJrNOM" },
        ],
        practice: "Set up a project with Vite and configure ESLint rules for code quality.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Interactive BMI Calculator", teaches: "Input handling, variables, basic math, DOM updates.", tech: "Vanilla JS, HTML, CSS" },
  { level: "Beginner", title: "Drum Kit Web App", teaches: "Keyboard events, Audio playback, CSS classes toggle.", tech: "Vanilla JS" },
  { level: "Beginner", title: "Color Flipper", teaches: "Arrays, random numbers, DOM style manipulation.", tech: "Vanilla JS" },
  { level: "Intermediate", title: "Weather Dashboard", teaches: "Async/Await, Fetch, JSON parsing, API Keys.", tech: "JS, OpenWeather API" },
  { level: "Intermediate", title: "Recipe App with LocalStorage", teaches: "Persistence, filtering, complex objects, modular JS.", tech: "Vanilla JS" },
  { level: "Intermediate", title: "Infinite Scroll Gallery", teaches: "Intersection Observer API, Unsplash API, Async code.", tech: "JS, Unsplash API" },
  { level: "Intermediate", title: "Form Validator", teaches: "Regex, Event listeners, DOM validation feedback.", tech: "JS" },
  { level: "Advanced", title: "Collaborative Real-time Editor", teaches: "WebSockets, advanced state sync, event loop knowledge.", tech: "JS, Socket.io" },
  { level: "Advanced", title: "Custom Video Player", teaches: "Media API, custom event controls, high-perf UI updates.", tech: "Vanilla JS" },
  { level: "Advanced", title: "CLI Tool for Image Optimization", teaches: "Node.js, File system access, Buffers, Streams.", tech: "Node.js" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan for developers moving from another language.",
    schedule: [
      "Days 1-7: Syntax, DOM, and Event basics.",
      "Days 8-15: ES6+, Higher-order functions, and Async logic.",
      "Days 16-23: Fetching APIs and Building 2 Intermediate projects.",
      "Days 24-30: Unit testing and Tooling setup.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced pace for building a solid foundation and portfolio.",
    schedule: [
      "Days 1-20: Deep dive into Beginner Stage + 3 projects.",
      "Days 21-45: Mastering Intermediate concepts, OOP, and Async.",
      "Days 46-60: Exploring Advanced patterns and Testing.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for total professional readiness.",
    schedule: [
      "Days 1-30: Fundamentals and DOM mastery.",
      "Days 31-60: Professional Intermediate skills and API integration.",
      "Days 61-90: Performance, Security, Advanced patterns, and job prep.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between '==' and '==='.",
  "What is Closure and how is it useful?",
  "How does the Event Loop work? (Stack, Queue, Web APIs).",
  "Difference between var, let, and const.",
  "What is Prototypal Inheritance?",
  "How do you handle errors in asynchronous code?",
  "What are Higher-Order Functions?",
  "Explain Hoisting in JavaScript.",
  "What is the difference between null and undefined?",
  "How does the 'this' keyword work in different contexts?",
];

const codingQuestions = [
  { question: "Find the missing number in an array from 1 to 100.", topic: "Logic" },
  { question: "Implement a function to deep clone an object.", topic: "Recursion/Objects" },
  { question: "Check if two strings are anagrams of each other.", topic: "Strings" },
  { question: "Implement a debounce function from scratch.", topic: "Events/Closures" },
];

const mcqs = [
  { question: "What is the output of 'typeof NaN'?", options: ["number", "NaN", "undefined", "object"], answer: "number" },
  { question: "Which method is used to add an element at the beginning of an array?", options: ["push", "pop", "unshift", "shift"], answer: "unshift" },
  { question: "Is JavaScript single-threaded or multi-threaded?", options: ["Single-threaded", "Multi-threaded", "Depends on OS", "Neither"], answer: "Single-threaded" },
];

const mistakes = [
  "Not using 'const' by default and polluting the global scope with 'var'.",
  "Modifying an array while iterating over it.",
  "Comparing floating point numbers directly (e.g. 0.1 + 0.2 === 0.3).",
  "Forgetting to handle Promise rejections (unhandled errors).",
  "Assuming 'this' always refers to the parent object (context confusion).",
  "Not understanding closure, leading to memory leaks or stale data.",
  "Over-using libraries like jQuery when Vanilla JS is sufficient.",
  "Ignoring 'Strict Mode' which prevents common errors.",
  "Not using browser DevTools effectively for debugging.",
  "Writing callback hell instead of using Async/Await.",
];

export default function JavascriptRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The JavaScript Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering JavaScript, from basic interactivity to complex, high-performance web applications.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Web Development Languages">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Languages
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Layout className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                <CardHeader className="pb-3">
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                    <Terminal className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Expert guidance to help you land your dream JS role.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {interviewTopics.map(topic => (
                    <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                      <p className="text-sm leading-relaxed">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'ES6+', 'Async/Await', 'Promises', 'DOM', 'Closures', 'Event Loop', 'Fetch API', 'Functional Programming', 'Unit Testing', 'Vite', 'Babel'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Deploy your projects to a live URL using Vercel or GitHub Pages.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write clear README files explaining the technical challenges you solved.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <Lightbulb className="h-6 w-6"/>
              10 Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Language of the Web</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            JavaScript is the foundation of modern development. Once you master it, you unlock the ability to build almost anything. Stay consistent, keep building projects, and remember that every expert was once a beginner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
