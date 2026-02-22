
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
  Globe,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Monitor,
  Workflow,
  Layers,
  Search,
  History,
  Activity,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Visual Foundations (HTML & CSS)",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to the Web & HTML5",
        why: "To understand how browsers render pages and master the structural backbone of every website.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "HTML Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
          { name: "MDN - HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
        ],
        practice: "Create a basic HTML document with a title, headings, paragraphs, and lists.",
      },
      {
        what: "Semantic HTML & Accessibility",
        why: "To give your content meaning for search engines (SEO) and ensure your site is usable for everyone.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Semantic HTML Guide", url: "https://www.freecodecamp.org/news/semantic-html5-guide/" },
        ],
        practice: "Refactor a generic <div> layout using <header>, <main>, <article>, and <footer>.",
      },
      {
        what: "CSS Basics: Selectors & Colors",
        why: "To transform plain text into visually appealing designs using colors, fonts, and borders.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "CSS Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
        ],
        practice: "Build a styled business card component with custom fonts and background gradients.",
      },
      {
        what: "The Box Model: Spacing & Sizing",
        why: "The #1 concept in layout. Mastering margin, border, and padding prevents layout bugs.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Box Model Explained (YouTube)", url: "https://www.youtube.com/watch?v=rIO5326FgPE" },
        ],
        practice: "Create a nested box layout and use box-sizing: border-box to fix overflow issues.",
      },
      {
        what: "Flexbox: 1D Layouts",
        why: "The industry standard for aligning items in rows or columns with ease.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Flexbox Froggy (Game)", url: "https://flexboxfroggy.com/" },
          { name: "CSS-Tricks Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
        ],
        practice: "Build a responsive navigation bar with a logo on the left and links on the right.",
      },
      {
        what: "CSS Grid: 2D Layouts",
        why: "For complex page structures. Grid allows you to control both columns and rows simultaneously.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Grid Garden (Game)", url: "https://cssgridgarden.com/" },
          { name: "Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
        ],
        practice: "Create a 12-column magazine-style grid layout with sidebar and header.",
      },
      {
        what: "Responsive Design & Media Queries",
        why: "To ensure your website works perfectly on iPhones, Tablets, and 4K Monitors.",
        time: "5 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Responsive Design (web.dev)", url: "https://web.dev/learn/design/" },
        ],
        practice: "Make a 3-column layout that collapses into a single column on mobile screens.",
      },
      {
        what: "HTML Forms & Native Validation",
        why: "To collect user data safely. Forms are the heart of user interaction.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "HTML Forms (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
        ],
        practice: "Build a 'Contact Us' form with required fields, email validation, and a submit button.",
      },
      {
        what: "CSS Transitions & Transforms",
        why: "To add life to your UI. Subtle animations (like button hover effects) create a premium feel.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "CSS Transitions (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions" },
        ],
        practice: "Animate a card to lift and show a shadow when the user hovers over it.",
      },
      {
        what: "Git Basics & GitHub",
        why: "Version control is essential for every developer. It's your time machine for code.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
        ],
        practice: "Push your first 'About Me' website to a GitHub repository.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Logic & Interactivity (JS & React)",
    level: "Intermediate",
    steps: [
      {
        what: "JavaScript Basics (Variables & Logic)",
        why: "JavaScript is the engine of the web. You must master variables, loops, and conditions.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "JS for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
        practice: "Write a script that calculates tip amounts based on a bill value.",
      },
      {
        what: "DOM Manipulation",
        why: "This is how JS talks to HTML. It allows you to change content and styles dynamically.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "DOM Manipulation (YouTube)", url: "https://www.youtube.com/watch?v=y17RuWkWdn8" },
        ],
        practice: "Build a button that adds a new item to a list every time it's clicked.",
      },
      {
        what: "ES6+ Modern Syntax",
        why: "To write clean, professional code using Arrow Functions, Destructuring, and Template Literals.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "ES6 Features Guide", url: "https://www.freecodecamp.org/news/write-better-javascript-js-es6-features-and-syntax-explained/" },
        ],
        practice: "Refactor your tip calculator to use modern arrow functions and destructuring.",
      },
      {
        what: "Asynchronous JS: Fetch & Promises",
        why: "To load data from the internet (like weather or stock prices) without refreshing the page.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Async/Await Explained", url: "https://www.youtube.com/watch?v=drK67OkA9zM" },
        ],
        practice: "Fetch a random user's data from an API and display it on your page.",
      },
      {
        what: "NPM & Node Basics",
        why: "To use the millions of packages available in the Node ecosystem.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "NPM Crash Course", url: "https://www.youtube.com/watch?v=jHDhaSSKmUX" },
        ],
        practice: "Initialize a project with npm and install a library like 'date-fns'.",
      },
      {
        what: "Introduction to React",
        why: "The most popular library for building modern interfaces. Components are the standard way to build apps.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "React Official Tutorial", url: "https://react.dev/learn" },
        ],
        practice: "Build a 'Counter' component that increments and decrements a number.",
      },
      {
        what: "React Props & State",
        why: "To pass data between components and manage data that changes over time.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "React State & Props", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
        ],
        practice: "Build a 'Todo' app where you can add tasks to a list in state.",
      },
      {
        what: "Tailwind CSS",
        why: "The fastest way to style modern web apps using utility classes directly in your HTML.",
        time: "5 Days",
        prereqs: "CSS Basics",
        resources: [
          { name: "Tailwind CSS Course", url: "https://www.youtube.com/watch?v=ft30zcMlFao" },
        ],
        practice: "Re-style your Todo app using only Tailwind utility classes.",
      },
      {
        what: "React Hooks (useEffect)",
        why: "To perform side effects like data fetching or starting timers in functional components.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "useEffect Guide", url: "https://react.dev/reference/react/useEffect" },
        ],
        practice: "Build a 'Weather Widget' that fetches data from an API when the component mounts.",
      },
    ],
  },
  {
    title: "Advanced Stage: Production Frameworks (Next.js)",
    level: "Advanced",
    steps: [
      {
        what: "Introduction to Next.js",
        why: "Next.js is the professional standard for React, offering SEO, Speed, and Routing out of the box.",
        time: "1 Week",
        prereqs: "React Stage",
        resources: [
          { name: "Next.js Official Course", url: "https://nextjs.org/learn" },
        ],
        practice: "Initialize a Next.js app and set up three pages with a shared layout.",
      },
      {
        what: "Server Components vs Client Components",
        why: "Next.js's biggest feature. Learn where to fetch data (Server) vs where to handle clicks (Client).",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "RSC Explained (YouTube)", url: "https://www.youtube.com/watch?v=S2Y73p2h3x4" },
        ],
        practice: "Create a list of posts fetched on the Server and a 'Like' button that is a Client Component.",
      },
      {
        what: "Next.js App Router & Dynamic Routing",
        why: "To build complex structures like blogs (/blog/post-1) or e-commerce stores easily.",
        time: "5 Days",
        prereqs: "Step 20",
        resources: [
          { name: "App Router Docs", url: "https://nextjs.org/docs/app" },
        ],
        practice: "Create a dynamic route that displays a user profile based on the ID in the URL.",
      },
      {
        what: "API Integration & Server Actions",
        why: "To send and save data securely without manually managing API endpoints.",
        time: "1 Week",
        prereqs: "Step 21",
        resources: [
          { name: "Server Actions Guide", url: "https://www.youtube.com/watch?v=O13a-y4t-V0" },
        ],
        practice: "Build a 'Guestbook' where users can submit a message that saves to a list.",
      },
      {
        what: "User Authentication (NextAuth/Auth.js)",
        why: "To build secure applications with user logins (Google, GitHub, Email).",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "Auth.js Documentation", url: "https://authjs.dev/" },
        ],
        practice: "Add 'Login with GitHub' to your Guestbook application.",
      },
      {
        what: "Web Performance & Core Web Vitals",
        why: "Speed is a feature. Learn to optimize images, fonts, and code to get 100/100 Lighthouse scores.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Performance (web.dev)", url: "https://web.dev/learn/performance/" },
        ],
        practice: "Use Google Lighthouse to audit and optimize a project's loading speed.",
      },
      {
        what: "SEO & Accessibility Mastery",
        why: "To make your site discoverable and usable by everyone. Essential for professional work.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "SEO Guide for Next.js", url: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata" },
        ],
        practice: "Add dynamic Open Graph images and metadata to your dynamic profile pages.",
      },
      {
        what: "Deployment & CI/CD",
        why: "To get your code live. Vercel and GitHub Actions are the pro-choice tools.",
        time: "3 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Deploying to Vercel", url: "https://vercel.com/docs" },
        ],
        practice: "Set up a CI/CD pipeline that builds and deploys your app every time you push to main.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Recipe Card", teaches: "Box model, typography, and clean CSS styling.", tech: "HTML, CSS" },
  { level: "Beginner", title: "Personal Bio Page", teaches: "Semantic tags, images, and mobile-friendly layouts.", tech: "Semantic HTML, CSS" },
  { level: "Beginner", title: "Interactive Survey Form", teaches: "Input types, labels, and native validation.", tech: "HTML5, CSS" },
  { level: "Intermediate", title: "Real-time Weather Dashboard", teaches: "Async Fetch, API keys, and DOM updates.", tech: "JavaScript, OpenWeather API" },
  { level: "Intermediate", title: "React Task Manager", teaches: "Component state, Props, and List mapping.", tech: "React, LocalStorage" },
  { level: "Intermediate", title: "Expense Tracker", teaches: "Complex state, calculation logic, and filter methods.", tech: "React, Tailwind" },
  { level: "Intermediate", title: "Movie Recommendation App", teaches: "Multi-page navigation and complex API integration.", tech: "React, React Router, TMDB API" },
  { level: "Advanced", title: "Full-stack Blog with Next.js", teaches: "Server components, MDX, and dynamic SEO.", tech: "Next.js, Tailwind, ShadCN" },
  { level: "Advanced", title: "AI-Powered Flashcard App", teaches: "LLM integration, conversational state, and authentication.", tech: "Next.js, Genkit, Firebase" },
  { level: "Advanced", title: "E-commerce Landing Page", teaches: "High-performance animations, optimized assets, and conversion UI.", tech: "Next.js, Framer Motion, Vercel" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on the core essentials to get productive with modern web tools quickly.",
    schedule: [
      "Days 1-7: HTML & CSS Fundamentals.",
      "Days 8-15: Modern JavaScript & Logic.",
      "Days 16-23: React Basics & Tailwind CSS.",
      "Days 24-30: Build 2 portfolio projects and deploy to Vercel.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for a solid foundation and a strong portfolio.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Mastering JavaScript, React, and API integration.",
      "Days 46-60: Introduction to Next.js and building a production-ready app.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional readiness and senior-level concepts.",
    schedule: [
      "Days 1-30: Core Web Foundations (HTML/CSS/JS).",
      "Days 31-60: Modern App Building (React/Next.js).",
      "Days 61-90: Performance, Security, AI Integration, and Interview Prep.",
    ]
  }
];

const interviewTopics = [
  "Explain the CSS Box Model in detail.",
  "Difference between var, let, and const.",
  "How does the Event Loop work in JavaScript?",
  "What are React Hooks? Explain useState and useEffect.",
  "What is the difference between Server Components and Client Components?",
  "How do you optimize a website for SEO?",
  "Explain Semantic HTML and why it matters for A11y.",
  "What is a REST API and how does it differ from GraphQL?",
  "How do you resolve a Merge Conflict in Git?",
  "Describe the request-response cycle when typing a URL in a browser.",
];

const codingQuestions = [
  { question: "Center a <div> vertically and horizontally using Flexbox.", topic: "Layout" },
  { question: "Reverse a string in JavaScript without using .reverse().", topic: "Strings" },
  { question: "Filter an array of numbers to only show those greater than 10.", topic: "Logic" },
  { question: "Build a counter component in React.", topic: "React" },
];

const mcqs = [
  { question: "Which HTML tag is used for the largest heading?", options: ["<head>", "<h6>", "<h1>", "<heading>"], answer: "<h1>" },
  { question: "Which unit is relative to the root element's font size?", options: ["px", "em", "rem", "vh"], answer: "rem" },
  { question: "Is JavaScript single-threaded or multi-threaded?", options: ["Single", "Multi", "Depends on OS", "Neither"], answer: "Single" },
];

const mistakes = [
  "Learning too many frameworks at once instead of mastering the basics.",
  "Not using a naming convention (like BEM), leading to CSS spaghetti.",
  "Hardcoding values in pixels instead of using relative units (rem/em).",
  "Forgetting to check the console for errors during development.",
  "Vague commit messages like 'fix' instead of 'fix: resolve bug in header'.",
  "Ignoring Accessibility (A11y) until the very end of a project.",
  "Not optimizing images, leading to slow page loads.",
  "Over-using Client Components in Next.js unnecessarily.",
  "Not writing unit tests for critical business logic.",
  "Copy-pasting tutorials without building something original.",
];

export default function WebDevFoundationsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Web Development Foundations Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey from zero to building high-performance, professional web applications. Master the pillars of the internet.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
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
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
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
            <CardDescription>Build these 10 projects to showcase your skills to employers.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your first junior web developer role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'Responsive Design', 'A11y', 'SEO', 'REST API', 'Vercel'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Deploy every project to a live URL (Vercel/Netlify).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use high-quality screenshots and GIFs in GitHub READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write about technical challenges you solved in your portfolio.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Art of the Web</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            The web is the most accessible platform in history. Mastering it allows you to reach billions. Stay consistent, keep building even when it gets hard, and always stay curious. The future belongs to those who build it. You've got this!
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
