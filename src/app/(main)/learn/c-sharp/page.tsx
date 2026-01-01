
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
        title: "Beginner Stage: C# and .NET Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to C# and .NET",
                why: "Understand the .NET ecosystem, the role of the Common Language Runtime (CLR), and why C# is a versatile, modern language for web, desktop, and game development.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: ".NET introduction and overview", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
                    { name: "C# Full Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY" },
                ],
                practice: "Install the .NET SDK and Visual Studio (or VS Code with the C# extension). Create, build, and run a 'Hello, World!' console application.",
            },
            {
                what: "Variables and Basic Data Types",
                why: "These are the fundamental building blocks for storing and manipulating data in any program.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "C# Data Types (W3Schools)", url: "https://www.w3schools.com/cs/cs_data_types.php" },
                    { name: "Built-in types (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types" },
                ],
                practice: "Write a program that declares variables for your name (string), age (int), and whether you are a student (bool), then print them to the console.",
            },
            {
                what: "Operators and Control Flow",
                why: "To perform operations and make decisions in your code, which is essential for creating any non-trivial logic.",
                time: "1-2 Weeks",
                prereqs: "Variables & Data Types",
                resources: [
                    { name: "C# Operators (W3Schools)", url: "https://www.w3schools.com/cs/cs_operators.php" },
                    { name: "Conditional Statements (if/else, switch)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements" },
                ],
                practice: "Write a simple calculator that takes two numbers and an operator (+, -, *, /) as input and prints the result.",
            },
            {
                what: "Arrays and Collections",
                why: "To store and manage groups of related data.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C# Arrays (W3Schools)", url: "https://www.w3schools.com/cs/cs_arrays.php" },
                    { name: "C# Lists (Generic Collection)", url: "https://www.tutorialsteacher.com/csharp/csharp-list" },
                ],
                practice: "Create a `List<string>` of your favorite hobbies. Write a `foreach` loop to print each hobby to the console.",
            },
            {
                what: "Methods (Functions)",
                why: "To break down your code into smaller, reusable, and more manageable pieces.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C# Methods (W3Schools)", url: "https://www.w3schools.com/cs/cs_methods.php" },
                ],
                practice: "Write a method that takes a string as input and returns the number of vowels in it.",
            },
            {
                what: "Introduction to Object-Oriented Programming (OOP)",
                why: "To understand the core paradigm of C#. Learn the basics of classes and objects.",
                time: "1-2 Weeks",
                prereqs: "Methods",
                resources: [
                    { name: "C# Classes and Objects (W3Schools)", url: "https://www.w3schools.com/cs/cs_classes.php" },
                    { name: "OOP in C# (freeCodeCamp)", url: "https://www.freecodecamp.org/news/object-oriented-programming-in-c/" },
                ],
                practice: "Create a `Book` class with properties like `Title`, `Author`, and `Pages`. Create a few instances (objects) of your `Book` class.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building Applications",
        level: "Intermediate",
        steps: [
            {
                what: "OOP Principles (Inheritance, Polymorphism, Encapsulation)",
                why: "To write flexible, scalable, and maintainable object-oriented code.",
                time: "2 Weeks",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "Inheritance in C# (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance" },
                    { name: "Polymorphism in C# (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism" },
                ],
                practice: "Create a base `Animal` class with a `MakeSound()` method. Create `Dog` and `Cat` classes that inherit from `Animal` and override the `MakeSound()` method.",
            },
            {
                what: "Interfaces and Abstract Classes",
                why: "To define contracts and create blueprints for your classes, a key part of designing larger applications.",
                time: "1 Week",
                prereqs: "OOP Principles",
                resources: [
                    { name: "C# Interfaces (W3Schools)", url: "https://www.w3schools.com/cs/cs_interface.php" },
                ],
                practice: "Create an `IShape` interface with a method `CalculateArea()`. Implement this interface in `Circle` and `Square` classes.",
            },
            {
                what: "Exception Handling",
                why: "To build robust applications that can handle errors gracefully without crashing.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Exceptions and Error Handling (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/" },
                ],
                practice: "Write a program that divides two numbers. Use a `try-catch` block to handle the `DivideByZeroException`.",
            },
            {
                what: "Language Integrated Query (LINQ)",
                why: "To write powerful, declarative queries to filter, sort, and manipulate collections of data in a readable way.",
                time: "2 Weeks",
                prereqs: "Collections",
                resources: [
                    { name: "Introduction to LINQ Queries (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries" },
                    { name: "LINQPad (Tool for practicing LINQ)", url: "https://www.linqpad.net/" },
                ],
                practice: "Given a list of `Person` objects, use LINQ to find all people older than 30 and order them by name.",
            },
            {
                what: "Asynchronous Programming (async/await)",
                why: "To write responsive applications that can perform long-running operations (like network requests or file I/O) without freezing the UI.",
                time: "2 Weeks",
                prereqs: "Methods",
                resources: [
                    { name: "Asynchronous programming with async and await (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios" },
                ],
                practice: "Write an `async` method that simulates downloading a file by using `Task.Delay()` and returns a string. `await` the result in your main method.",
            },
            {
                what: "Introduction to ASP.NET Core",
                why: "ASP.NET Core is the primary framework for building web applications and APIs with C#.",
                time: "2-3 Weeks",
                prereqs: "Intermediate C#",
                resources: [
                    { name: "Introduction to ASP.NET Core (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core" },
                    { name: "ASP.NET Core for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=lE8NdaX97m0" },
                ],
                practice: "Create a new ASP.NET Core Web API project. Build a simple 'Hello, World!' endpoint that returns a JSON response.",
            },
            {
                what: "Entity Framework Core (EF Core)",
                why: "The standard object-relational mapper (ORM) for .NET, allowing you to interact with databases using C# objects instead of writing raw SQL.",
                time: "2 Weeks",
                prereqs: "ASP.NET Core, SQL Basics",
                resources: [
                    { name: "Get Started with EF Core", url: "https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app" },
                ],
                practice: "Add EF Core to your Web API project. Define a simple model, create a database migration, and build API endpoints to perform CRUD operations on it.",
            },
        ],
    },
    {
        title: "Advanced Stage: Specialization and Deployment",
        level: "Advanced",
        steps: [
            {
                what: "Dependency Injection in ASP.NET Core",
                why: "To write loosely coupled, testable, and maintainable code by decoupling components from their concrete dependencies.",
                time: "1 Week",
                prereqs: "ASP.NET Core",
                resources: [
                    { name: "Dependency injection in ASP.NET Core (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection" },
                ],
                practice: "Create a service interface (e.g., `IMessageService`) and a concrete class. Register it in your application's service container and inject it into a controller.",
            },
            {
                what: "Authentication & Authorization in ASP.NET Core",
                why: "To secure your APIs and applications, ensuring only authenticated and authorized users can access resources.",
                time: "1-2 Weeks",
                prereqs: "ASP.NET Core",
                resources: [
                    { name: "Authentication and Authorization in ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/" },
                ],
                practice: "Implement JWT-based authentication in your Web API. Create a protected endpoint that requires a valid token to access.",
            },
            {
                what: "Unit and Integration Testing",
                why: "To ensure your code is reliable, works as expected, and to prevent regressions.",
                time: "2 Weeks",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "Unit testing C# with .NET Core", url: "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test" },
                    { name: "Integration tests in ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests" },
                ],
                practice: "Write unit tests for a simple C# class using xUnit or MSTest. Write an integration test for one of your API endpoints.",
            },
            {
                what: "Containerization with Docker",
                why: "To package your .NET application and its dependencies into a portable container for easy deployment and scaling.",
                time: "1 Week",
                prereqs: "Basic Command Line",
                resources: [
                    { name: "Dockerize a .NET application (Microsoft Docs)", url: "https://learn.microsoft.com/en-us/dotnet/core/docker/build-container" },
                ],
                practice: "Write a `Dockerfile` for your ASP.NET Core application, build a Docker image, and run it locally.",
            },
            {
                what: "Deployment to Azure",
                why: "To make your application available on the internet using Microsoft's cloud platform.",
                time: "1 Week",
                prereqs: "Docker",
                resources: [
                    { name: "Deploy an ASP.NET Core app to Azure App Service", url: "https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs" },
                ],
                practice: "Deploy your containerized ASP.NET Core application to Azure App Service or Azure Container Apps.",
            },
            {
                what: "Choose a Specialization",
                why: "To deepen your expertise in a specific area of .NET development.",
                time: "Ongoing",
                prereqs: "Advanced Stage",
                resources: [
                    { name: "Build web UI with Blazor", url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" },
                    { name: "Build cross-platform apps with .NET MAUI", url: "https://dotnet.microsoft.com/en-us/apps/maui" },
                    { name: "Game Development with Unity", url: "https://unity.com/learn" },
                ],
                practice: "Start a project in your chosen specialization, such as building a simple Blazor app or creating a basic game in Unity.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Console-Based Address Book", teaches: "Classes, objects, lists, and basic user input/output.", tech: "C#, .NET Console App" },
    { level: "Beginner", title: "Simple Text File Analyzer", teaches: "File I/O, string manipulation, and using dictionaries to count word frequencies.", tech: "C#, .NET Console App" },
    { level: "Beginner", title: "Number Guessing Game", teaches: "Control flow, random number generation, and methods.", tech: "C#, .NET Console App" },
    { level: "Intermediate", title: "To-Do List Web API", teaches: "ASP.NET Core, REST API principles, CRUD operations, and Entity Framework Core.", tech: "C#, ASP.NET Core, EF Core" },
    { level: "Intermediate", title: "Weather Forecast App", teaches: "Making HTTP requests to external APIs, async/await, and deserializing JSON.", tech: "C#, HttpClient" },
    { level: "Intermediate", title: "Simple E-commerce Inventory API", teaches: "Complex data modeling, API design, and handling relationships between entities (Products, Categories).", tech: "C#, ASP.NET Core, EF Core" },
    { level: "Intermediate", title: "LINQ Playground", teaches: "Advanced data manipulation and querying in-memory collections.", tech: "C#, LINQ" },
    { level: "Advanced", title: "Blog Platform with User Authentication", teaches: "Full-stack development concepts, authentication (JWT), authorization, and database management.", tech: "C#, ASP.NET Core, EF Core, Identity" },
    { level: "Advanced", title: "Dockerized Microservice", teaches: "Containerization, building APIs for a microservices architecture.", tech: "C#, ASP.NET Core, Docker" },
    { level: "Advanced", title: "Real-time Chat Application (with SignalR)", teaches: "WebSockets, real-time communication, and advanced backend development.", tech: "C#, ASP.NET Core, SignalR" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to master C# fundamentals and build your first application.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Intermediate OOP concepts and learn the basics of LINQ.",
            "Days 21-30: Build the 'Console-Based Address Book' and 'Text File Analyzer' projects.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in C# and an introduction to web development.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Learn ASP.NET Core basics and build the 'To-Do List Web API' project with an in-memory database.",
            "Days 36-50: Learn EF Core and integrate a real database into your API project.",
            "Days 51-60: Learn about testing and write unit tests for your application.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on OOP and LINQ.",
            "Days 31-60: Complete the entire Advanced Stage, building a full REST API with authentication and deploying it with Docker.",
            "Days 61-75: Choose a specialization (e.g., Blazor or MAUI) and build a small project.",
            "Days 76-90: Focus on design patterns, performance tuning, and preparing for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the four main principles of OOP.",
    "What is the difference between an `abstract class` and an `interface`?",
    "Describe the .NET CLR (Common Language Runtime).",
    "What is the difference between `==` and `.Equals()`?",
    "Explain the difference between a `class` and a `struct`.",
    "What is LINQ and what are its benefits?",
    "Explain `async` and `await` and how they work.",
    "What is dependency injection and why is it useful?",
    "What is the purpose of middleware in ASP.NET Core?",
    "What is an ORM, and what are the benefits of using one like EF Core?",
];

const codingQuestions = [
    { question: "Reverse a string in C# without using any built-in reverse functions.", topic: "String Manipulation" },
    { question: "Given a list of integers, find if it contains any duplicates. Use a `HashSet` for an efficient solution.", topic: "Collections" },
    { question: "Implement a function to check if a string is a palindrome.", topic: "String Manipulation" },
];

const mcqs = [
    { question: "Which of these is a value type in C#?", options: ["string", "object", "int", "class"], answer: "int" },
    { question: "Which keyword is used to inherit from a class in C#?", options: [":", "inherits", "extends", "implements"], answer: ":" },
    { question: "What is the primary purpose of LINQ?", options: ["To handle exceptions", "To query data from collections and databases", "To create user interfaces", "To manage memory"], answer: "To query data from collections and databases" },
];

const mistakes = [
    "Using `==` to compare strings for equality instead of `.Equals()`.",
    "Not using `async` and `await` for I/O operations, leading to blocked threads and unresponsive applications.",
    "Not disposing of unmanaged resources (like file streams or database connections), often by forgetting to use the `using` statement.",
    "Modifying a collection while iterating over it with a `foreach` loop.",
    "Overusing inheritance when composition would be a better choice.",
    "Ignoring dependency injection and tightly coupling classes, making code hard to test and maintain.",
    "Not understanding the difference between value types (structs) and reference types (classes).",
    "Fetching more data than necessary from a database instead of using filtering and projections in LINQ or SQL.",
    "Ignoring nullability and not handling potential `NullReferenceException`s, especially before C# 8's nullable reference types.",
    "Not writing unit tests, leading to fragile code that is difficult to refactor."
];

export default function CSharpRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The C# Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering C#, the powerful, modern language for building everything from web APIs and cloud services to desktop and mobile apps.
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
                <CardDescription>Key topics, questions, and resume tips to land a .NET developer job.</CardDescription>
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
                        {['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'LINQ', 'REST API', 'SQL Server', 'Azure', 'Docker', 'Unit Testing', 'OOP'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, and setup instructions (including any `.NET` commands).</li>
                        <li>Include a `.gitignore` file appropriate for a .NET project.</li>
                        <li>Ensure your code is clean, well-structured, and follows C# coding conventions.</li>
                        <li>If it's a web API, provide a link to a live, deployed version on a platform like Azure.</li>
                        <li>Include a link to your solution file (`.sln`) and explain the project structure.</li>
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
                C# is a fantastic and in-demand language that opens doors to many exciting career opportunities. This roadmap is your guide, but true mastery comes from consistent coding, building projects, and solving problems. Stay curious, be persistent, and happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

