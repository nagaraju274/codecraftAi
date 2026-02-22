
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
  Monitor,
  Workflow,
  Server,
  History,
  Activity,
  Search,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Programming & CS Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Computer Science Fundamentals",
        why: "To understand how computers work at a low level (Binary, CPU, Memory, OS). This builds the mental model needed for coding.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "CS50: Introduction to Computer Science (Harvard/YouTube)", url: "https://www.youtube.com/watch?v=8mAITcNt77k" },
          { name: "Crash Course Computer Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" },
        ],
        practice: "Explain the fetch-decode-execute cycle to a friend. Write a simple logic gate simulation on paper.",
      },
      {
        what: "Programming Basics (Python or JavaScript)",
        why: "Every software engineer needs a primary language. Python is great for logic; JS is great for the web. Focus on variables, loops, and conditions.",
        time: "3 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "Python for Everybody (University of Michigan)", url: "https://www.py4e.com/" },
          { name: "JavaScript.info - The Basics", url: "https://javascript.info/first-steps" },
        ],
        practice: "Solve 50+ basic logic problems on platforms like HackerRank or LeetCode.",
      },
      {
        what: "Command Line & Shell Basics",
        why: "Software engineering happens in the terminal. Mastering 'cd', 'ls', 'mkdir', and 'ssh' is mandatory.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "The Missing Semester of Your CS Education", url: "https://missing.csail.mit.edu/2020/shell/" },
          { name: "Linux Journey - Terminal", url: "https://linuxjourney.com/lesson/the-shell" },
        ],
        practice: "Automate a file backup task using a simple .sh (Bash) or .ps1 (PowerShell) script.",
      },
      {
        what: "Version Control with Git",
        why: "To track code changes and collaborate. Git is the industry standard for every development team.",
        time: "1 Week",
        prereqs: "Step 2, Step 3",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
          { name: "GitHub Skills - Introduction", url: "https://skills.github.com/" },
        ],
        practice: "Create a GitHub repository, push code, create a branch, and resolve a merge conflict manually.",
      },
      {
        what: "Basic Data Structures (Arrays, Lists, Stacks)",
        why: "To store data efficiently. These are the building blocks of all complex software.",
        time: "2 Weeks",
        prereqs: "Step 2",
        resources: [
          { name: "Data Structures Easy to Advanced (YouTube)", url: "https://www.youtube.com/watch?v=RZE9u933Qso" },
          { name: "GeeksforGeeks - Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
        ],
        practice: "Implement a Stack and a Queue from scratch using an Array in your chosen language.",
      },
      {
        what: "Web Fundamentals (HTML & CSS)",
        why: "To understand how the user interface of the internet is built. Even backend engineers must understand the 'Front'.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "MDN - HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
          { name: "CSS Flexbox Froggy (Game)", url: "https://flexboxfroggy.com/" },
        ],
        practice: "Build a static personal bio page and style it without using any frameworks.",
      },
      {
        what: "Introduction to Databases (SQL)",
        why: "Software needs to persist data. Relational databases like PostgreSQL or MySQL are the standard.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "SQLBolt - Interactive SQL", url: "https://sqlbolt.com/" },
          { name: "SQL for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        ],
        practice: "Design a database schema for a simple library system and write queries to find books by author.",
      },
      {
        what: "Technical Documentation & Markdown",
        why: "Engineers spend more time reading and writing documentation than code. Clear communication is a superpower.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Markdown Guide", url: "https://www.markdownguide.org/getting-started/" },
          { name: "Writing Good Documentation (Write the Docs)", url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/" },
        ],
        practice: "Write a detailed README.md for your bio page project, explaining how to run it.",
      },
      {
        what: "Basic Algorithms & Big O Notation",
        why: "To measure code efficiency. You need to know if your code will run in 1 second or 1 hour as data grows.",
        time: "2 Weeks",
        prereqs: "Step 5",
        resources: [
          { name: "Big O Notation Explained (YouTube)", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
          { name: "Sorting Algorithms Visualized", url: "https://visualgo.net/en/sorting" },
        ],
        practice: "Implement Bubble Sort and Binary Search. Calculate their time complexities manually.",
      },
      {
        what: "Object-Oriented Programming (OOP)",
        why: "To structure large codebases. Principles like Encapsulation, Inheritance, and Polymorphism are core to industry code.",
        time: "2 Weeks",
        prereqs: "Step 2",
        resources: [
          { name: "OOP Principles (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
        ],
        practice: "Model a 'Bank Account' system with Classes for Savings, Checking, and Transaction history.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Building Production Systems",
    level: "Intermediate",
    steps: [
      {
        what: "Frontend Frameworks (React or Vue)",
        why: "To build complex, dynamic user interfaces efficiently using component-based architecture.",
        time: "4 Weeks",
        prereqs: "Beginner Stage",
        resources: [
          { name: "React Official Documentation", url: "https://react.dev/learn" },
          { name: "Full Stack Open (University of Helsinki)", url: "https://fullstackopen.com/en/" },
        ],
        practice: "Build a multi-page Todo application with categories and data persistence.",
      },
      {
        what: "Backend Development (Node.js or Django)",
        why: "To build APIs and handle server-side logic, authentication, and database interaction.",
        time: "4 Weeks",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" },
          { name: "Express.js Guide", url: "https://expressjs.com/en/guide/routing.html" },
        ],
        practice: "Build a RESTful API for a blog platform with Create, Read, Update, and Delete (CRUD) features.",
      },
      {
        what: "Advanced Data Structures (Trees & Graphs)",
        why: "For solving complex problems like pathfinding, social networks, or hierarchical data management.",
        time: "3 Weeks",
        prereqs: "Step 5",
        resources: [
          { name: "Binary Trees & BSTs (YouTube)", url: "https://www.youtube.com/watch?v=f55qeREg4uA" },
          { name: "Graph Algorithms Crash Course", url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU" },
        ],
        practice: "Implement a Binary Search Tree and write a function to find the shortest path between two nodes in a graph.",
      },
      {
        what: "Testing (Unit & Integration)",
        why: "Professional code must be verified. Testing prevents bugs from reaching production.",
        time: "2 Weeks",
        prereqs: "Step 11, Step 12",
        resources: [
          { name: "Jest Testing Framework Guide", url: "https://jestjs.io/docs/getting-started" },
          { name: "Pytest for Python", url: "https://docs.pytest.org/en/stable/" },
        ],
        practice: "Write 10+ unit tests for your blog API using Jest or Pytest.",
      },
      {
        what: "API Design & Protocols (REST, GraphQL, gRPC)",
        why: "To build efficient communication layers between different parts of a software system.",
        time: "2 Weeks",
        prereqs: "Step 12",
        resources: [
          { name: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" },
          { name: "Intro to GraphQL", url: "https://graphql.org/learn/" },
        ],
        practice: "Document an existing API using Swagger/OpenAPI or build a small GraphQL server.",
      },
      {
        what: "Advanced SQL & Database Optimization",
        why: "To handle large amounts of data efficiently. Learn about indexing, ACID properties, and JOIN optimization.",
        time: "2 Weeks",
        prereqs: "Step 7",
        resources: [
          { name: "Use The Index, Luke (Indexing Guide)", url: "https://use-the-index-luke.com/" },
          { name: "Database Design - Normalization", url: "https://www.youtube.com/watch?v=UrYLYV7WSHM" },
        ],
        practice: "Analyze a slow query using 'EXPLAIN' and optimize it by adding a proper Index.",
      },
      {
        what: "Security Basics (OWASP Top 10)",
        why: "Security is not an afterthought. You must know how to prevent SQL injection, XSS, and broken authentication.",
        time: "2 Weeks",
        prereqs: "Step 12",
        resources: [
          { name: "OWASP Top 10 Official", url: "https://owasp.org/www-project-top-ten/" },
          { name: "Web Security Academy (PortSwigger)", url: "https://portswigger.net/web-security" },
        ],
        practice: "Audit a project's login system for common vulnerabilities like weak password hashing.",
      },
      {
        what: "Software Architecture Patterns",
        why: "To understand how to organize code at scale. Learn MVC, Layered, and Microservices patterns.",
        time: "2 Weeks",
        prereqs: "Step 10, Step 12",
        resources: [
          { name: "Architecture Patterns (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns" },
        ],
        practice: "Diagram the architecture of your blog platform project using a tool like Excalidraw.",
      },
      {
        what: "Linux Server Management",
        why: "Your code will likely run on a Linux server. Learn how to manage processes, logs, and user permissions.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Linux Administration Bootcamp (YouTube)", url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
        ],
        practice: "Set up a virtual private server (VPS) and manually deploy a 'Hello World' app.",
      },
    ],
  },
  {
    title: "Advanced Stage: DevOps, Cloud & System Design",
    level: "Advanced",
    steps: [
      {
        what: "Containerization with Docker",
        why: "To ensure code runs the same everywhere. Docker eliminates 'it works on my machine' problems.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "Docker for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
          { name: "Docker Docs - Get Started", url: "https://docs.docker.com/get-started/" },
        ],
        practice: "Dockerize your full-stack blog project and its database into a multi-container environment.",
      },
      {
        what: "Orchestration with Kubernetes",
        why: "To manage thousands of containers automatically. K8s is the standard for modern cloud infrastructure.",
        time: "3 Weeks",
        prereqs: "Step 20",
        resources: [
          { name: "Kubernetes Tutorial for Beginners", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
        ],
        practice: "Deploy a simple app to a local Kubernetes cluster using Minikube or Kind.",
      },
      {
        what: "Cloud Providers (AWS, GCP, or Azure)",
        why: "To build and scale global applications using pre-managed services like S3, EC2, and Lambda.",
        time: "3 Weeks",
        prereqs: "None",
        resources: [
          { name: "AWS Cloud Practitioner Training (Free)", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
        ],
        practice: "Host a project on AWS using S3 for frontend and Elastic Beanstalk for backend.",
      },
      {
        what: "CI/CD Pipelines",
        why: "To automate building, testing, and deployment. Every 'push' should automatically go through a pipeline.",
        time: "2 Weeks",
        prereqs: "Step 4, Step 20",
        resources: [
          { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiY-9E" },
        ],
        practice: "Set up a GitHub Action that runs your tests and builds a Docker image on every commit.",
      },
      {
        what: "System Design & Scalability",
        why: "To learn how to design systems that handle millions of users. Learn load balancing, caching, and sharding.",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" },
          { name: "Grokking Modern System Design", url: "https://www.youtube.com/playlist?list=PLMCXHnjXn7yXPbPyvAnclAtIn_996To6x" },
        ],
        practice: "Design a high-level architecture for a real-time chat app like WhatsApp.",
      },
      {
        what: "Monitoring, Logging & SRE",
        why: "To keep systems healthy. Learn to use Prometheus, Grafana, and ELK stack to detect and fix issues.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "Prometheus & Grafana Tutorial", url: "https://www.youtube.com/watch?v=h4Sl21AK9f8" },
        ],
        practice: "Add monitoring to a local app and create a dashboard to visualize CPU/Memory usage.",
      },
      {
        what: "Clean Code & Design Patterns",
        why: "Writing code is easy; writing code that others can maintain is hard. Master SOLID principles and common patterns.",
        time: "2 Weeks",
        prereqs: "Advanced Logic",
        resources: [
          { name: "Refactoring.Guru - Design Patterns", url: "https://refactoring.guru/design-patterns" },
          { name: "Clean Code Handbook Summary", url: "https://github.com/ryanmcdermott/clean-code-javascript" },
        ],
        practice: "Refactor a 'messy' project by applying the Singleton or Factory pattern where appropriate.",
      },
      {
        what: "Agile, Scrum & Soft Skills",
        why: "Software engineering is a team sport. Learn how to work in Sprints, estimate tasks, and communicate technical ideas.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" },
        ],
        practice: "Break down a large project into small 'User Stories' and estimate their complexity using Story Points.",
      },
      {
        what: "Emerging Technologies (AI & Genkit)",
        why: "To stay relevant. Modern engineers leverage AI tools and integrate LLMs into their software.",
        time: "Ongoing",
        prereqs: "All previous",
        resources: [
          { name: "Genkit Documentation", url: "https://firebase.google.com/docs/genkit" },
        ],
        practice: "Build a simple AI-powered feature (like an auto-summarizer) into your blog project using Genkit.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "CLI Expense Tracker", teaches: "Logic, File I/O, loops, and basic error handling.", tech: "Python / Node.js" },
  { level: "Beginner", title: "Personal Portfolio Website", teaches: "HTML, CSS, and basic responsive design principles.", tech: "HTML, CSS" },
  { level: "Beginner", title: "GitHub Explorer", teaches: "Consuming APIs, working with JSON, and basic UI components.", tech: "JavaScript, GitHub API" },
  { level: "Intermediate", title: "Real-time Chat Application", teaches: "WebSockets, event-driven programming, and state management.", tech: "React, Socket.IO, Node.js" },
  { level: "Intermediate", title: "E-commerce Product Catalog", teaches: "Database modeling, CRUD, searching, and filtering data.", tech: "React, PostgreSQL, Express" },
  { level: "Intermediate", title: "Blogging Platform with Auth", teaches: "Authentication, authorization, JWT, and relational data.", tech: "Django / Next.js, Prisma" },
  { level: "Intermediate", title: "Weather Dashboard", teaches: "Asynchronous programming, API integration, and data visualization.", tech: "React, OpenWeather API" },
  { level: "Advanced", title: "Microservices-based Task Manager", teaches: "Distributed systems, Docker, inter-service communication, and CI/CD.", tech: "Go / Node.js, Docker, GitHub Actions" },
  { level: "Advanced", title: "Serverless Image Processor", teaches: "Cloud functions, event-driven architecture, and blob storage.", tech: "AWS Lambda, S3, Python" },
  { level: "Advanced", title: "AI-Powered Customer Support Bot", teaches: "Integrating LLMs, prompt engineering, and conversational UI.", tech: "Genkit, Next.js, Firebase" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, Git, and building static websites to get comfortable with the environment.",
    schedule: [
      "Days 1-7: Programming Fundamentals & Logic.",
      "Days 8-15: Git, CLI, and HTML/CSS Basics.",
      "Days 16-23: JavaScript & DOM Manipulation.",
      "Days 24-30: Build 2 beginner projects and learn Markdown.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full Stack",
    description: "Move from frontend to backend and databases, building functional applications.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: React/Frameworks and Backend APIs.",
      "Days 41-60: SQL Databases, Testing, and 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Engineer",
    description: "Comprehensive path including DevOps, Cloud, and System Design for job readiness.",
    schedule: [
      "Days 1-30: Core Development & Web Foundations.",
      "Days 31-60: Full Stack Development & Database Mastery.",
      "Days 61-90: Docker, Cloud (AWS), System Design, and Interview Prep.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between a Process and a Thread.",
  "What is Big O notation? Compare the complexity of Binary Search and Linear Search.",
  "Describe the ACID properties of a database transaction.",
  "What is the difference between REST and GraphQL?",
  "Explain the CAP theorem in distributed systems.",
  "How does a Load Balancer work? When do you need one?",
  "Describe the SOLID principles of object-oriented design.",
  "What is a Docker container? How is it different from a Virtual Machine?",
  "Explain how DNS works when you type google.com into a browser.",
  "Describe a difficult technical problem you solved using the STAR method.",
];

const codingQuestions = [
  { question: "Implement a function to find the missing number in an array of 1 to N.", topic: "Arrays" },
  { question: "Reverse a linked list without using extra space.", topic: "Linked Lists" },
  { question: "Find the longest substring without repeating characters.", topic: "Sliding Window" },
  { question: "Implement a thread-safe Singleton pattern.", topic: "Design Patterns" },
];

const mcqs = [
  { question: "Which protocol is used for secure communication over the web?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], answer: "HTTPS" },
  { question: "What is the time complexity of searching for an element in a balanced BST?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: "O(log n)" },
  { question: "Which Git command is used to combine changes from one branch into another?", options: ["git push", "git fetch", "git merge", "git fork"], answer: "git merge" },
];

const mistakes = [
  "Learning too many frameworks without mastering the fundamentals (HTML/CSS/JS/Logic).",
  "Writing code without tests and only testing manually in the browser.",
  "Hardcoding API keys and sensitive secrets directly into source code.",
  "Ignoring Big O complexity until the app slows down in production.",
  "Vague commit messages like 'fix' or 'update' instead of descriptive ones.",
  "Not documenting code or setting up a proper README for projects.",
  "Over-engineering a solution before understanding the actual problem.",
  "Ignoring security basics like input sanitization and SQL injection prevention.",
  "Tutorial hell: Copy-pasting tutorials without building anything original.",
  "Ignoring soft skills: Software engineering is as much about people as it is about machines.",
];

export default function SoftwareEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Software Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive path to mastering the art and science of building scalable, reliable, and high-performance software systems.
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
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
            <CardDescription>Build these 10 projects to showcase your expertise from beginner to senior engineer.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
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
            <CardDescription>Master the topics and questions required to land a role at top tech companies.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Coding Challenges</h3>
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
                    {['Data Structures', 'Algorithms', 'System Design', 'Docker', 'Kubernetes', 'AWS', 'REST API', 'Unit Testing', 'CI/CD', 'Git', 'Clean Code', 'Scalability', 'Microservices'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide high-quality GIFs or live demo links for all major projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write clear 'Architectural Decisions' sections in your READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cross-functional skills (e.g. 'Reduced build time by 40% using Docker').</li>
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
              10 Common Mistakes to Avoid
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Craft of Software</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Software engineering is a journey of continuous learning. It's not just about knowing a language; it's about solving real-world problems with robust, scalable systems. Stay consistent, build something every day, and never stop asking "how can this be better?". Your future as a world-class engineer starts today!
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
