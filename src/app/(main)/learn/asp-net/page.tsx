
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
  Terminal,
  Code,
  Search,
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Globe,
  Activity,
  ArrowLeft,
  ArrowRight,
  Database,
  History,
  Binary,
  Settings,
  HardDrive,
  Box,
  Server,
  Cloud,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: C# & Web Basics",
    level: "Beginner",
    steps: [
      {
        what: "C# Fundamentals for ASP.NET",
        why: "ASP.NET is built on C#. You must master classes, interfaces, LINQ, and async/await before building web apps.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "C# Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
          { name: "C# Documentation (Microsoft)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        ],
        practice: "Build a console-based student management system using Classes and Lists.",
      },
      {
        what: "Introduction to .NET Ecosystem & CLI",
        why: "To understand the difference between .NET Framework, .NET Core, and .NET 5+. Mastering the CLI is essential for automation.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "What is .NET?", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
        ],
        practice: "Install .NET SDK. Run 'dotnet new webapi' and 'dotnet run' to start your first server.",
      },
      {
        what: "MVC Architecture (Model-View-Controller)",
        why: "The core design pattern of ASP.NET. Understanding how data flows from the controller to the view is critical.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "ASP.NET Core MVC Overview", url: "https://learn.microsoft.com/en-us/aspnet/core/mvc/overview" },
        ],
        practice: "Create a simple 'Hello World' MVC app that passes a message from a Controller to a View.",
      },
      {
        what: "Routing & URL Management",
        why: "To map browser requests to specific pieces of code. Learn both Attribute and Conventional routing.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Routing in ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing" },
        ],
        practice: "Define custom routes for a products page like '/store/category/electronics'.",
      },
      {
        what: "Middleware Fundamentals",
        why: "Middleware is the 'pipeline' of your app. It handles logging, authentication, and error processing.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "ASP.NET Core Middleware Guide", url: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/" },
        ],
        practice: "Write a simple custom middleware that logs the time taken for every request.",
      },
      {
        what: "Dependency Injection (DI)",
        why: "ASP.NET Core is built around DI. It's the standard way to write modular, testable, and decoupled code.",
        time: "4 Days",
        prereqs: "C# Interfaces",
        resources: [
          { name: "Dependency Injection in .NET", url: "https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection" },
        ],
        practice: "Register a 'WeatherService' interface and inject it into a Controller.",
      },
      {
        what: "Configuration & Environments",
        why: "To manage settings (DB strings, API keys) for Development, Staging, and Production safely.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Configuration in ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/" },
        ],
        practice: "Create an appsettings.json file and read a custom 'WelcomeMessage' value in your app.",
      },
      {
        what: "Razor Pages Basics",
        why: "A simpler, page-focused alternative to MVC. Perfect for building dynamic websites with less boilerplate.",
        time: "4 Days",
        prereqs: "HTML/CSS Basics",
        resources: [
          { name: "Intro to Razor Pages", url: "https://learn.microsoft.com/en-us/aspnet/core/razor-pages/" },
        ],
        practice: "Build a simple Contact Form using Razor Pages that displays the submitted info.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Data, APIs & Security",
    level: "Intermediate",
    steps: [
      {
        what: "Entity Framework Core (EF Core)",
        why: "To interact with databases using C# instead of raw SQL. This is the industry-standard ORM for .NET.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "EF Core Getting Started", url: "https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app" },
          { name: "EF Core Crash Course (YouTube)", url: "https://www.youtube.com/watch?v=qOJUPp8shWE" },
        ],
        practice: "Create a database schema using Migrations and perform CRUD operations on a 'Tasks' table.",
      },
      {
        what: "Building RESTful Web APIs",
        why: "To build the backends for mobile apps and single-page applications (React/Next.js).",
        time: "1 Week",
        prereqs: "Step 3, Step 9",
        resources: [
          { name: "Tutorial: Create a web API", url: "https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api" },
        ],
        practice: "Build a 'Book Store API' that returns JSON data and supports GET, POST, PUT, and DELETE.",
      },
      {
        what: "Validation & Model Binding",
        why: "To ensure user data is safe and correctly formatted before it reaches your database.",
        time: "3 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Model Validation in ASP.NET", url: "https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation" },
        ],
        practice: "Add Data Annotations (e.g., [Required], [EmailAddress]) to your API request models.",
      },
      {
        what: "ASP.NET Core Identity (Auth)",
        why: "To handle user logins, passwords, and roles safely. Security is a non-negotiable skill.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Introduction to Identity", url: "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity" },
        ],
        practice: "Implement a 'User Registration' and 'Login' flow with password hashing.",
      },
      {
        what: "JWT (JSON Web Tokens) for APIs",
        why: "The standard for stateless authentication in modern web APIs and microservices.",
        time: "1 Week",
        prereqs: "Step 10, Step 12",
        resources: [
          { name: "JWT Authentication in .NET (YouTube)", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
        ],
        practice: "Secure your Book Store API so only logged-in users can add or delete books.",
      },
      {
        what: "Logging & Error Handling",
        why: "To debug production issues. Learn structured logging with Serilog and centralized error boundaries.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Logging in .NET", url: "https://learn.microsoft.com/en-us/dotnet/core/extensions/logging" },
        ],
        practice: "Set up an Exception Filter to return a standardized JSON error response whenever an API fails.",
      },
      {
        what: "Unit Testing with xUnit",
        why: "Professional code must be tested. Learn to write unit tests for your logic and mock your database.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Unit Testing C# with .NET", url: "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test" },
        ],
        practice: "Write tests for your 'WeatherService' using Moq to simulate the data provider.",
      },
      {
        what: "NuGet & Libraries",
        why: "To reuse open-source tools. Learn to manage your own NuGet packages and internal company libraries.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "An Introduction to NuGet", url: "https://learn.microsoft.com/en-us/nuget/what-is-nuget" },
        ],
        practice: "Install and use the 'AutoMapper' package to simplify mapping between your DB entities and DTOs.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scale & Cloud Mastery",
    level: "Advanced",
    steps: [
      {
        what: "Real-time Apps with SignalR",
        why: "To build live features like chat, dashboards, and notifications using WebSockets.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "SignalR Introduction", url: "https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction" },
        ],
        practice: "Build a real-time 'Stock Ticker' that pushes price updates to the browser.",
      },
      {
        what: "Caching Strategies (Redis)",
        why: "To improve app performance by storing frequently used data in memory.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Caching in ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory" },
        ],
        practice: "Implement a Distributed Cache using Redis for a slow-running database query.",
      },
      {
        what: "Docker & Containerization",
        why: "To ensure your app runs identically in Development and Production. Modern .NET apps are almost always containerized.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Dockerize a .NET App", url: "https://docs.docker.com/language/dotnet/build-images/" },
        ],
        practice: "Write a Dockerfile for your Web API and run it as a container.",
      },
      {
        what: "Microservices Architecture",
        why: "To build global-scale applications by breaking a monolith into small, independently deployable services.",
        time: "3 Weeks",
        prereqs: "Step 10, Step 19",
        resources: [
          { name: "Microservices with .NET (eBook)", url: "https://dotnet.microsoft.com/en-us/download/e-book/microservices-architecture" },
        ],
        practice: "Design an e-commerce system with separate services for 'Catalog' and 'Orders'.",
      },
      {
        what: "gRPC for High-Performance Service Communication",
        why: "Faster and more efficient than REST for internal service-to-service communication.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Introduction to gRPC on .NET", url: "https://learn.microsoft.com/en-us/aspnet/core/grpc/" },
        ],
        practice: "Implement a gRPC service that handles high-speed telemetry data.",
      },
      {
        what: "Cloud Deployment (Azure)",
        why: "Microsoft Azure provides the best integration for .NET apps. Master App Service, Azure SQL, and Azure Functions.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "Azure for .NET Developers", url: "https://learn.microsoft.com/en-us/azure/developer/dotnet/" },
        ],
        practice: "Deploy your Web API to Azure App Service and connect it to a managed Azure SQL database.",
      },
      {
        what: "CI/CD Pipelines (GitHub Actions)",
        why: "To automate building, testing, and deploying your code every time you push.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "GitHub Actions for .NET", url: "https://learn.microsoft.com/en-us/dotnet/devops/github-actions-overview" },
        ],
        practice: "Set up an action that runs your xUnit tests and builds a Docker image on every commit.",
      },
      {
        what: "Blazor: Modern .NET Frontend",
        why: "Build interactive web UIs using C# instead of JavaScript. A game-changer for .NET developers.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Blazor Tutorial (Official)", url: "https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/intro" },
        ],
        practice: "Rebuild your To-Do list UI using Blazor WebAssembly.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Expense Tracker CLI", teaches: "C# logic, List collections, and File I/O.", tech: "C#, .NET CLI" },
  { level: "Beginner", title: "Static Portfolio Website", teaches: "MVC Layouts, Razor syntax, and custom CSS.", tech: "ASP.NET Core MVC" },
  { level: "Beginner", title: "Contact Form with Validation", teaches: "Forms, Tag Helpers, and Model Binding.", tech: "ASP.NET Core Razor Pages" },
  { level: "Intermediate", title: "Full-Stack Task Manager", teaches: "EF Core, SQL Server, CRUD, and Repository Pattern.", tech: "ASP.NET Core, SQL Server" },
  { level: "Intermediate", title: "E-commerce Web API", teaches: "REST, JWT Authentication, Swagger, and DTOs.", tech: "ASP.NET Core Web API" },
  { level: "Intermediate", title: "Weather Dashboard", teaches: "Consuming external APIs, Caching, and Async logic.", tech: "ASP.NET Core, Redis" },
  { level: "Intermediate", title: "Blog Platform with Comments", teaches: "DB Associations (1:N), User Identity, and Roles.", tech: "ASP.NET Core, Identity" },
  { level: "Advanced", title: "Real-time Support Chat", teaches: "WebSockets, SignalR, and frontend integration.", tech: "ASP.NET Core, SignalR, React" },
  { level: "Advanced", title: "Microservices Gateway", teaches: "Service communication, Docker Compose, and gRPC.", tech: "ASP.NET Core, gRPC, Docker" },
  { level: "Advanced", title: "Serverless Image Resizer", teaches: "Event-driven architecture and cloud functions.", tech: "Azure Functions, .NET" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Web Builder",
    description: "Focus on C# syntax and basic MVC to build functional dynamic websites quickly.",
    schedule: [
      "Days 1-7: C# Foundations and .NET CLI basics.",
      "Days 8-15: MVC Architecture, Routing, and Razor syntax.",
      "Days 16-23: Forms, Validations, and basic EF Core.",
      "Days 24-30: Build a complete CRUD Task Manager and learn deployment basics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full-Stack Dev",
    description: "Balanced path covering professional authentication, APIs, and data mastery.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Web APIs, JWT Security, and SQL Server mastery.",
      "Days 41-60: ASP.NET Identity, Unit Testing, and building a full API project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Enterprise Architect",
    description: "Comprehensive path for professional readiness in cloud and microservices roles.",
    schedule: [
      "Days 1-30: Core Development & Web Foundations.",
      "Days 31-60: Intermediate Features, Testing, and Security.",
      "Days 61-90: Microservices, Docker, Azure, SignalR, and Performance tuning.",
    ]
  }
];

const interviewTopics = [
  "Explain the ASP.NET Core Request Pipeline and Middleware.",
  "What is the difference between AddTransient, AddScoped, and AddSingleton?",
  "How does Entity Framework Core handle Migrations?",
  "What is the difference between MVC and Razor Pages?",
  "Explain the difference between Authentication and Authorization.",
  "What are Tag Helpers in ASP.NET Core?",
  "How do you prevent SQL Injection in EF Core?",
  "Explain the concept of Inversion of Control (IoC).",
  "What is the role of the Program.cs and Startup.cs files?",
  "Describe the difference between SSR (Server-Side Rendering) and Client-Side APIs.",
];

const codingQuestions = [
  { question: "Implement a generic Repository pattern for a User entity.", topic: "Design Patterns" },
  { question: "Write a middleware that redirects all HTTP traffic to HTTPS.", topic: "Middleware" },
  { question: "How would you implement a custom ValidationAttribute for a Model property?", topic: "Validation" },
  { question: "Write a LINQ query to find the top 3 highest-paid employees in each department.", topic: "LINQ" },
];

const mcqs = [
  { question: "Which method is used to register a service that lasts for the duration of a single request?", options: ["AddTransient", "AddScoped", "AddSingleton", "AddRequest"], answer: "AddScoped" },
  { question: "What is the default port for an ASP.NET Core app using Kestrel?", options: ["80", "443", "5000", "8080"], answer: "5000" },
  { question: "Which file is the modern entry point for a .NET 6+ application?", options: ["Startup.cs", "Global.asax", "Program.cs", "Web.config"], answer: "Program.cs" },
];

const mistakes = [
  "Ignoring async/await: Synchronous database calls will freeze your application under load.",
  "Hardcoding strings: Use strongly-typed configurations or constants for URLs and keys.",
  "Fat Controllers: Keep your controller logic thin; move business logic to Service classes.",
  "Neglecting Security: Not using HTTPS or failing to sanitize user inputs leads to breaches.",
  "Mismatched DI Lifetimes: Injecting a Scoped service into a Singleton will cause runtime errors.",
  "Large ViewModels: Don't pass your raw DB entities to the View; use DTOs (Data Transfer Objects).",
  "Ignoring Logs: Most deployment issues are solved by reading the 'stdout' logs.",
  "Not using 'const' or 'readonly': Immutability makes code easier to reason about.",
  "Poor Error Handling: Showing raw stack traces to users is a security risk.",
  "Neglecting Unit Tests: Relying only on manual 'F5' testing leads to buggy production code.",
];

export default function AspNetRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The ASP.NET Core Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most powerful enterprise-grade framework. From C# foundations to building global-scale microservices, real-time apps, and secure cloud infrastructure.
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your GitHub portfolio.</CardDescription>
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
            <CardDescription>Pick a timeline that matches your availability and goals.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream .NET role.</CardDescription>
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
                    {['ASP.NET Core', 'C#', 'EF Core', 'MVC', 'Razor Pages', 'Web API', 'JWT', 'SQL Server', 'Azure', 'Docker', 'SignalR', 'Microservices', 'Clean Architecture', 'DI'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Deploy your projects to Azure or a similar cloud provider.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write clear README files explaining your architectural decisions.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Enterprise Web</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            ASP.NET Core is the framework of choice for massive, reliable applications. Mastering it opens doors to top-tier engineering roles. Stay consistent, embrace the clean architecture patterns, and remember: Every expert architect started with their first 'dotnet run'. Your journey starts now!
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
