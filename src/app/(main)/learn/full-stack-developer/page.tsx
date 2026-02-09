
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
        title: "Beginner Stage: Web Foundations",
        level: "Beginner",
        steps: [
            {
                what: "HTML & CSS",
                why: "These are the absolute fundamentals. HTML provides the structure of your web pages, and CSS styles them.",
                time: "2 Weeks",
                prereqs: "None",
                resources: [
                    { name: "freeCodeCamp - HTML & CSS for Beginners", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
                    { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                    { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                ],
                practice: "Build a simple, single-page personal portfolio or a tribute page for a public figure using only HTML and CSS.",
            },
            {
                what: "JavaScript Fundamentals",
                why: "JavaScript makes your web pages interactive. Mastering its core concepts is crucial before moving to frameworks.",
                time: "2-3 Weeks",
                prereqs: "HTML, CSS",
                resources: [
                    { name: "JavaScript.info - The Modern JavaScript Tutorial", url: "https://javascript.info/" },
                    { name: "freeCodeCamp - JavaScript for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
                ],
                practice: "Create a simple tip calculator or a basic to-do list application using vanilla JavaScript to manipulate the DOM.",
            },
            {
                what: "Version Control with Git & GitHub",
                why: "Essential for tracking code changes, collaborating with others, and managing your projects.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Git and GitHub for Beginners - Crash Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
                ],
                practice: "Create a GitHub account. Initialize a Git repository for your portfolio project, make a few commits, and push it to GitHub.",
            },
            {
                what: "Node.js & NPM Basics",
                why: "Node.js allows you to run JavaScript on the server. NPM is the package manager you'll use to manage all your project's libraries.",
                time: "1 Week",
                prereqs: "JavaScript",
                resources: [
                    { name: "Node.js Official Documentation", url: "https://nodejs.org/en/docs" },
                    { name: "NPM Docs - Getting Started", url: "https://docs.npmjs.com/getting-started" },
                ],
                practice: "Install Node.js and NPM. Create a new project with `npm init` and install a simple package like `lodash`.",
            },
            {
                what: "Introduction to Backend with Express.js",
                why: "Express is a minimalist web framework for Node.js that makes it easy to build your first server and API.",
                time: "1 Week",
                prereqs: "Node.js",
                resources: [
                    { name: "Express.js - Hello world example", url: "https://expressjs.com/en/starter/hello-world.html" },
                ],
                practice: "Create a simple Express server that responds with 'Hello, World!' when you visit a specific route in your browser.",
            },
            {
                what: "Introduction to APIs",
                why: "APIs (Application Programming Interfaces) are how your frontend and backend communicate with each other.",
                time: "1 Week",
                prereqs: "JavaScript, Node.js",
                resources: [
                    { name: "What is a REST API? (YouTube)", url: "https://www.youtube.com/watch?v=lsMQRaeKNDk" },
                ],
                practice: "Design a simple API on paper for a blog. What endpoints would you need to get all posts, get a single post, and create a new post?",
            },
            {
                what: "React.js Basics",
                why: "React is the most popular library for building modern, component-based user interfaces.",
                time: "2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "React Official Docs (New)", url: "https://react.dev/learn" },
                ],
                practice: "Rebuild your vanilla JS to-do list using React components and the `useState` hook.",
            },
            {
                what: "Introduction to Databases (SQL & NoSQL)",
                why: "You need to understand the two major types of databases to know how to store your application's data.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "SQL vs. NoSQL Explained (YouTube)", url: "https://www.youtube.com/watch?v= başkan" },
                ],
                practice: "Write a short summary comparing when you might choose a SQL database (like PostgreSQL) versus a NoSQL database (like MongoDB).",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building a Full Application",
        level: "Intermediate",
        steps: [
            {
                what: "Advanced React (Hooks, Context)",
                why: "To manage complex state and side effects in your applications. `useEffect`, `useContext`, and custom hooks are essential.",
                time: "1-2 Weeks",
                prereqs: "React Basics",
                resources: [
                    { name: "React Hooks In-Depth", url: "https://react.dev/reference/react" },
                ],
                practice: "Create a simple app with a theme switcher (dark/light mode) using the Context API to provide the theme to all child components.",
            },
            {
                what: "Building REST APIs with Express",
                why: "To create the full CRUD (Create, Read, Update, Delete) functionality your frontend will consume.",
                time: "2 Weeks",
                prereqs: "Express.js Basics",
                resources: [
                    { name: "Building a REST API with Express", url: "https://www.digitalocean.com/community/tutorials/build-a-rest-api-with-node-js-and-express-js" },
                ],
                practice: "Build a complete REST API for a to-do list with endpoints for getting all tasks, adding a task, updating a task, and deleting a task. Use an in-memory array for now.",
            },
            {
                what: "Connecting to a SQL Database",
                why: "To persist your application's data. Learn how to connect your Express app to a database like PostgreSQL.",
                time: "2 Weeks",
                prereqs: "SQL Basics, Express APIs",
                resources: [
                    { name: "Node.js with PostgreSQL Tutorial", url: "https://www.freecodecamp.org/news/build-a-rest-api-with-node-js-and-postgresql/" },
                ],
                practice: "Refactor your to-do list API to use a PostgreSQL database instead of an in-memory array to store the tasks.",
            },
            {
                what: "Object-Relational Mapping (ORM)",
                why: "ORMs like Prisma or Sequelize allow you to interact with your database using JavaScript/TypeScript objects, improving safety and developer experience.",
                time: "1 Week",
                prereqs: "Database Connection",
                resources: [
                    { name: "Prisma Docs - Get Started", url: "https://www.prisma.io/docs/getting-started" },
                ],
                practice: "Integrate Prisma into your API project. Define a 'Task' model and use the Prisma Client to interact with your database.",
            },
            {
                what: "Authentication with JWT",
                why: "To secure your API and manage user-specific data. JWT is the standard for stateless authentication in APIs.",
                time: "1-2 Weeks",
                prereqs: "Express APIs",
                resources: [
                    { name: "Securing Node.js RESTful APIs with JWTs", url: "https://www.digitalocean.com/community/tutorials/nodejs-jwt-express-mongodb" },
                ],
                practice: "Add '/register' and '/login' endpoints to your API. On login, generate a JWT. Create a protected route that requires a valid JWT to access.",
            },
            {
                what: "Connecting Frontend to Backend",
                why: "To make your frontend 'talk' to your backend API to fetch and display data.",
                time: "1 Week",
                prereqs: "React, APIs",
                resources: [
                    { name: "Using the Fetch API (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
                ],
                practice: "In your React to-do app, use `useEffect` and `fetch` to load the initial list of tasks from your backend API.",
            },
            {
                what: "Introduction to Next.js",
                why: "A React framework for production. It offers server-side rendering, static site generation, and an improved developer experience out of the box.",
                time: "1 Week",
                prereqs: "React",
                resources: [
                    { name: "Next.js Official Docs", url: "https://nextjs.org/docs" },
                ],
                practice: "Rebuild your React to-do app using Next.js. Notice the file-based routing and other conventions.",
            },
            {
                what: "Styling with a CSS Framework",
                why: "To rapidly build beautiful, responsive UIs without writing custom CSS from scratch. Tailwind CSS is a popular choice.",
                time: "1 Week",
                prereqs: "CSS",
                resources: [
                    { name: "Tailwind CSS Official Docs", url: "https://tailwindcss.com/docs" },
                ],
                practice: "Style your Next.js to-do app using Tailwind's utility classes.",
            },
        ],
    },
    {
        title: "Advanced Stage: Production & Scalability",
        level: "Advanced",
        steps: [
            {
                what: "TypeScript",
                why: "To add static typing to your JavaScript code, which helps catch errors early, improves code quality, and makes large codebases much easier to maintain.",
                time: "1-2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
                ],
                practice: "Convert one of your existing JavaScript projects (either frontend or backend) to TypeScript.",
            },
            {
                what: "Containerization with Docker",
                why: "To package your application and its dependencies into a portable, reproducible container that can run anywhere.",
                time: "1 Week",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "Docker for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
                ],
                practice: "Write a Dockerfile for your backend API. Then use Docker Compose to run your Next.js app, your API, and your database together.",
            },
            {
                what: "Deployment to the Cloud",
                why: "To make your application accessible on the internet.",
                time: "1-2 Weeks",
                prereqs: "Docker",
                resources: [
                    { name: "Deploying Next.js to Vercel", url: "https://vercel.com/docs/frameworks/nextjs" },
                    { name: "Deploying a Node.js app to Heroku", url: "https://devcenter.heroku.com/articles/deploying-nodejs" },
                ],
                practice: "Deploy your Next.js frontend to Vercel and your Express backend API to a platform like Heroku or DigitalOcean App Platform.",
            },
            {
                what: "CI/CD (Continuous Integration/Deployment)",
                why: "To automate your testing and deployment process, enabling faster and more reliable releases.",
                time: "1 Week",
                prereqs: "Deployment, Testing",
                resources: [
                    { name: "GitHub Actions for CI/CD", url: "https://www.youtube.com/watch?v=R8_veQiY-9E" },
                ],
                practice: "Set up a GitHub Actions workflow that automatically runs your tests and deploys your main branch to your hosting provider on every push.",
            },
            {
                what: "Advanced Backend: WebSockets",
                why: "To enable real-time, two-way communication for features like chat and live notifications.",
                time: "1 Week",
                prereqs: "Express",
                resources: [
                    { name: "Socket.IO - Get Started", url: "https://socket.io/get-started/chat" },
                ],
                practice: "Integrate Socket.IO into your Express app to build a simple real-time chat application.",
            },
            {
                what: "Advanced Backend: Caching with Redis",
                why: "To improve your application's performance by storing frequently accessed data in a fast, in-memory database.",
                time: "1 Week",
                prereqs: "Databases",
                resources: [
                    { name: "Intro to Redis (YouTube)", url: "https://www.youtube.com/watch?v=G1rOthIU-uo" },
                ],
                practice: "Add a Redis cache to an API endpoint that fetches data from your database to speed up subsequent requests.",
            },
            {
                what: "Testing",
                why: "To ensure your application is reliable and to catch bugs before they reach production. Learn to write unit, integration, and end-to-end tests.",
                time: "1-2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "Testing Express.js APIs with Jest and Supertest", url: "https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/" },
                    { name: "Testing React Apps", url: "https://react.dev/learn/writing-tests" },
                ],
                practice: "Write unit tests for your API service functions and widget tests for your key React components.",
            },
            {
                what: "System Design Basics",
                why: "To understand how to design scalable and reliable systems, a key skill for senior roles.",
                time: "1 Week",
                prereqs: "All previous concepts",
                resources: [
                    { name: "System Design Interview - An Insider's Guide (Book)", url: "https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/B08B3FWY32" },
                ],
                practice: "On a whiteboard or paper, design a high-level architecture for a simple URL shortener service.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Personal Portfolio Website", teaches: "HTML, CSS, basic JavaScript, and deployment to a static host like Netlify.", tech: "HTML, CSS, JS" },
    { level: "Beginner", title: "API-Powered Weather App", teaches: "Fetching data from a third-party API, handling asynchronous JavaScript, and basic DOM manipulation.", tech: "HTML, CSS, JS, API" },
    { level: "Beginner", title: "Simple React To-Do List", teaches: "React fundamentals, component-based architecture, and state management with `useState`.", tech: "React" },
    { level: "Intermediate", title: "Full-Stack Blog Platform", teaches: "Building a REST API, connecting to a database, user authentication, and a React frontend.", tech: "React, Node.js, Express, PostgreSQL" },
    { level: "Intermediate", title: "Movie Recommendation App", teaches: "Interacting with a third-party API, client-side routing, and more complex state management.", tech: "React, React Router, API" },
    { level: "Intermediate", title: "E-commerce Product Catalog", teaches: "Data modeling for products, building a backend API, and creating a dynamic frontend to display them.", tech: "React, Express, Database" },
    { level: "Intermediate", title: "URL Shortener Service", teaches: "Backend logic, handling redirects, database design, and building a simple frontend.", tech: "Node.js, Express, Database, React" },
    { level: "Advanced", title: "Real-time Chat Application", teaches: "WebSockets, managing connections, broadcasting events, and complex frontend state.", tech: "React, Node.js, Express, Socket.IO" },
    { level: "Advanced", title: "Kanban Board (Trello Clone)", teaches: "Complex UI state, drag-and-drop functionality, authentication, and database persistence.", tech: "React, `react-beautiful-dnd`, Node.js, Database" },
    { level: "Advanced", title: "Food Delivery App (High-level)", teaches: "System design, microservices concepts, real-time location tracking (mocked), and complex data interactions.", tech: "Next.js, Node.js, PostgreSQL, Redis" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you building a functional MERN-stack (Mongo, Express, React, Node) application quickly.",
        schedule: [
            "Days 1-7: HTML, CSS, and JavaScript Fundamentals.",
            "Days 8-15: React Basics and building a simple frontend project.",
            "Days 16-23: Node.js, Express, and building a basic REST API.",
            "Days 24-30: Learn MongoDB basics and connect your frontend and backend to build a simple full-stack to-do app.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach to become proficient in building robust full-stack applications.",
        schedule: [
            "Days 1-15: Complete the entire Beginner Stage thoroughly.",
            "Days 16-35: Complete the Intermediate Stage, focusing on building a REST API with a SQL database and authentication.",
            "Days 36-50: Build a complete full-stack project like the 'Blog Platform'.",
            "Days 51-60: Learn about testing, TypeScript, and deployment. Deploy your project to the cloud.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages.",
            "Days 31-60: Cover the Advanced Stage, mastering Docker, CI/CD, and advanced backend concepts like WebSockets and caching.",
            "Days 61-75: Build an advanced project, such as the 'Real-time Chat Application', focusing on real-time communication.",
            "Days 76-90: Explore system design, contribute to an open-source project, and prepare for interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the difference between a `let`, `const`, and `var` in JavaScript.",
    "What is the Box Model in CSS?",
    "Explain the request-response cycle in a web application.",
    "What is a REST API? Describe the principles of REST.",
    "Difference between SQL and NoSQL databases.",
    "What is the 'event loop' in Node.js?",
    "How does authentication work? Explain sessions vs. JWTs.",
    "What is the difference between a class component and a functional component in React?",
    "Explain the purpose of the `useEffect` hook in React.",
    "High-level system design: How would you design a simple blogging platform?",
];

const mcqs = [
    { question: "Which HTTP status code indicates that a resource was successfully created on the server?", options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"], answer: "201 Created" },
    { question: "In React, which hook would you use to perform a data fetch when a component mounts?", options: ["useState", "useContext", "useEffect", "useReducer"], answer: "useEffect" },
    { question: "Which of the following is NOT a principle of REST?", options: ["Stateless", "Client-Server", "Stateful", "Cacheable"], answer: "Stateful" },
];

const mistakes = [
    "Focusing too much on learning many frameworks instead of mastering the fundamentals (HTML, CSS, JS, HTTP).",
    "Not handling errors properly on the backend, leading to server crashes.",
    "Ignoring security best practices, such as not hashing passwords or being vulnerable to SQL injection.",
    "Writing large, monolithic components on the frontend instead of breaking them down.",
    "Fetching too much data or making too many API calls from the client side, leading to poor performance.",
    "Not using a version control system like Git from the very beginning of a project.",
    "Mutating state directly in React.",
    "Not writing any automated tests for your code.",
    "Ignoring the importance of a good developer experience (e.g., no code formatting, no linting).",
    "Trying to build a complex, large-scale application before mastering the fundamentals with smaller projects."
];

export default function FullStackDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Full-Stack Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering both the front-end and back-end, from building user interfaces to designing databases and APIs.
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
                <CardDescription>Key topics, questions, and resume tips to land a full-stack developer job.</CardDescription>
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
                        {['React', 'Node.js', 'Express', 'Next.js', 'PostgreSQL', 'MongoDB', 'REST API', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Docker', 'AWS'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Have a single repository with a clear `README.md` that links to the live frontend and backend applications.</li>
                        <li>Alternatively, use a monorepo structure to house both frontend and backend code in one repository.</li>
                        <li>Document your API endpoints clearly in the backend's README.</li>
                        <li>Include setup and installation instructions for both services.</li>
                        <li>Write clean and well-organized commit history.</li>
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
                Becoming a full-stack developer is a challenging but incredibly versatile path. This roadmap is your guide, but true mastery comes from building complete, end-to-end projects. Stay curious, be persistent, and enjoy creating things for the web. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
