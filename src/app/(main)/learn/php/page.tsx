
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
  Server,
  Layers,
  Globe,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: PHP Fundamentals",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Environment Setup",
        why: "To run PHP code, you need a local server. Learning to use tools like XAMPP, MAMP, or Laravel Herd is the first step.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "PHP Introduction (W3Schools)", url: "https://www.w3schools.com/php/php_intro.asp" },
          { name: "How to Install XAMPP", url: "https://www.apachefriends.org/index.html" },
          { name: "PHP Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=OK_JCtrrv-c" },
        ],
        practice: "Install XAMPP. Create a 'hello.php' file in htdocs and run it in your browser via localhost.",
      },
      {
        what: "Basic Syntax & Variables",
        why: "Understanding tags (<?php ?>), variables ($name), and case sensitivity is core to writing any script.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "PHP Variables", url: "https://www.php.net/manual/en/language.variables.basics.php" },
        ],
        practice: "Declare variables for a user's name, age, and city. Print them using 'echo' and 'print'.",
      },
      {
        what: "Data Types & Operators",
        why: "Learn about Strings, Integers, Floats, Booleans, and how to perform arithmetic and comparisons.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "PHP Data Types Guide", url: "https://www.w3schools.com/php/php_datatypes.asp" },
        ],
        practice: "Create a simple math script that calculates the area of a circle and concatenates strings.",
      },
      {
        what: "Control Flow (If/Else, Switch)",
        why: "Logic allows your program to make decisions based on user input or data.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "PHP If...Else", url: "https://www.w3schools.com/php/php_if_else.asp" },
        ],
        practice: "Write a script that checks if a user is old enough to vote based on their birth year.",
      },
      {
        what: "Loops (For, While, Foreach)",
        why: "Iteration is essential for processing arrays and repeating tasks automatically.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Loops in PHP", url: "https://www.php.net/manual/en/language.control-structures.foreach.php" },
        ],
        practice: "Generate an HTML <ul> list of numbers from 1 to 20 using a for loop.",
      },
      {
        what: "Arrays (Indexed & Associative)",
        why: "Arrays are the most common way to store multiple values in a single variable in PHP.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "PHP Arrays (Official)", url: "https://www.php.net/manual/en/language.types.array.php" },
        ],
        practice: "Create an associative array representing a car (brand, model, price) and print the details.",
      },
      {
        what: "Functions: Creating Reusable Code",
        why: "Functions group logic together, preventing code duplication and making scripts modular.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "PHP Functions Guide", url: "https://www.w3schools.com/php/php_functions.asp" },
        ],
        practice: "Write a function that accepts a name and returns a personalized greeting string.",
      },
      {
        what: "Superglobals: GET & POST",
        why: "This is how PHP interacts with users via HTML forms—the absolute heart of web development.",
        time: "1 Week",
        prereqs: "Step 7, HTML Basics",
        resources: [
          { name: "GET vs POST", url: "https://www.w3schools.com/php/php_forms.asp" },
        ],
        practice: "Build a simple HTML form that sends data to a PHP script to be displayed.",
      },
      {
        what: "Include & Require",
        why: "Learn to split your code into multiple files (header, footer, config) for better organization.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Include Files in PHP", url: "https://www.w3schools.com/php/php_includes.asp" },
        ],
        practice: "Create a website template with separate 'header.php' and 'footer.php' files.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Databases & OOP",
    level: "Intermediate",
    steps: [
      {
        what: "SQL & MySQL Basics",
        why: "Most PHP apps need a database. Learn to create tables, insert rows, and select data.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "MySQL Tutorial for Beginners", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
        ],
        practice: "Design a database for a simple blog with a 'posts' table.",
      },
      {
        what: "PHP Data Objects (PDO)",
        why: "PDO is the modern, secure way to connect PHP to databases, preventing SQL Injection.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "PHP PDO Tutorial", url: "https://phpdelusions.net/pdo" },
        ],
        practice: "Connect your PHP script to MySQL using PDO and fetch data from your 'posts' table.",
      },
      {
        what: "Sessions & Cookies",
        why: "Essential for building login systems and remembering users across different pages.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "PHP Sessions", url: "https://www.w3schools.com/php/php_sessions.asp" },
        ],
        practice: "Build a simple login page that stores the username in a session variable.",
      },
      {
        what: "Object-Oriented Programming (OOP)",
        why: "Modern PHP is fully object-oriented. Learn classes, objects, properties, and methods.",
        time: "2 Weeks",
        prereqs: "Step 7",
        resources: [
          { name: "OOP PHP for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=Anz0Aa3shCQ" },
        ],
        practice: "Create a 'User' class with registration and login methods.",
      },
      {
        what: "Inheritance & Interfaces",
        why: "Reuse code by extending classes and defining contracts for your code to follow.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "PHP OOP Inheritance", url: "https://www.php.net/manual/en/language.oop5.inheritance.php" },
        ],
        practice: "Create a base 'Employee' class and extended 'Manager' and 'Developer' classes.",
      },
      {
        what: "Composer: Package Management",
        why: "Composer is the standard tool for managing external libraries in PHP projects.",
        time: "3 Days",
        prereqs: "Terminal Basics",
        resources: [
          { name: "Composer Official Site", url: "https://getcomposer.org/" },
        ],
        practice: "Install Composer and add a package like 'Carbon' for date manipulation.",
      },
      {
        what: "REST APIs with PHP",
        why: "Learn to output JSON and handle different HTTP methods (PUT, DELETE) for mobile or JS apps.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Building a REST API in PHP", url: "https://www.youtube.com/watch?v=WpM_68UXov8" },
        ],
        practice: "Build an API endpoint that returns your blog posts in JSON format.",
      },
      {
        what: "Error Handling & Exceptions",
        why: "Write resilient code that doesn't show ugly error messages to users.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "PHP Exceptions", url: "https://www.w3schools.com/php/php_exceptions.asp" },
        ],
        practice: "Wrap a database connection in a try-catch block to handle errors gracefully.",
      },
    ],
  },
  {
    title: "Advanced Stage: Frameworks & Scaling",
    level: "Advanced",
    steps: [
      {
        what: "Introduction to Laravel",
        why: "Laravel is the most popular PHP framework, providing elegant syntax and powerful tools.",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Laravel from Scratch (Laracasts)", url: "https://laracasts.com/series/laravel-8-from-scratch" },
          { name: "Laravel Official Docs", url: "https://laravel.com/docs" },
        ],
        practice: "Install Laravel and build a basic 'Landing Page' with a database connection.",
      },
      {
        what: "Eloquent ORM & Migrations",
        why: "Manage your database tables and records using PHP code instead of raw SQL.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Eloquent Documentation", url: "https://laravel.com/docs/eloquent" },
        ],
        practice: "Create a 'Products' migration and use Eloquent to perform CRUD operations.",
      },
      {
        what: "Middleware & Authentication",
        why: "Secure your Laravel apps using built-in authentication systems (Breeze/Jetstream).",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Laravel Starter Kits", url: "https://laravel.com/docs/starter-kits" },
        ],
        practice: "Set up Laravel Breeze to provide full login and registration functionality instantly.",
      },
      {
        what: "Security Best Practices",
        why: "Protect your apps from XSS, CSRF, and Brute Force attacks. Essential for production apps.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "PHP Security Guide", url: "https://phpsecurity.org/" },
        ],
        practice: "Implement CSRF protection and data sanitization in a vanilla PHP form.",
      },
      {
        what: "Unit Testing with PHPUnit",
        why: "Automated tests ensure your code remains stable as your project grows.",
        time: "2 Weeks",
        prereqs: "OOP Basics",
        resources: [
          { name: "PHPUnit Official Documentation", url: "https://phpunit.de/" },
        ],
        practice: "Write a test case for a simple calculator class in your project.",
      },
      {
        what: "Caching with Redis",
        why: "Improve performance drastically by caching frequently accessed data in memory.",
        time: "1 Week",
        prereqs: "Server Basics",
        resources: [
          { name: "Redis Guide for PHP", url: "https://github.com/phpredis/phpredis" },
        ],
        practice: "Set up a local Redis instance and cache the results of a slow database query.",
      },
      {
        what: "Design Patterns in PHP",
        why: "Learn professional patterns like Singleton, Factory, and Repository for scalable architecture.",
        time: "2 Weeks",
        prereqs: "OOP Mastery",
        resources: [
          { name: "Design Patterns in PHP (Refactoring.Guru)", url: "https://refactoring.guru/design-patterns/php" },
        ],
        practice: "Implement the 'Repository' pattern in a small Laravel application.",
      },
      {
        what: "Deployment & CI/CD",
        why: "Get your app online using services like Laravel Forge, DigitalOcean, or AWS.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "Deploying PHP Applications", url: "https://laravel.com/docs/deployment" },
        ],
        practice: "Deploy a small PHP app to a live server using GitHub Actions for automation.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Simple Contact Form", teaches: "HTML integration, POST requests, data validation.", tech: "PHP, HTML, CSS" },
  { level: "Beginner", title: "Personal Portfolio", teaches: "Template parts (include), simple routing, clean UI.", tech: "PHP, HTML, Tailwind" },
  { level: "Beginner", title: "Student Grade Calculator", teaches: "Variables, math, conditionals, user input.", tech: "PHP" },
  { level: "Intermediate", title: "CMS Blog with MySQL", teaches: "CRUD, database design, PDO, admin panels.", tech: "PHP, MySQL, Bootstrap" },
  { level: "Intermediate", title: "User Auth System", teaches: "Sessions, password hashing, database checks.", tech: "PHP, MySQL" },
  { level: "Intermediate", title: "Weather App via API", teaches: "JSON parsing, cURL or file_get_contents, external APIs.", tech: "PHP, OpenWeather API" },
  { level: "Intermediate", title: "Inventory Manager", teaches: "Filtering, sorting, associative arrays, DB joins.", tech: "PHP, MySQL" },
  { level: "Advanced", title: "E-commerce Site (Laravel)", teaches: "Framework patterns, Eloquent, carts, payments.", tech: "Laravel, Vue/Livewire, Stripe" },
  { level: "Advanced", title: "Real-time Support Chat", teaches: "WebSockets, Pusher, real-time events.", tech: "Laravel, Echo, Pusher" },
  { level: "Advanced", title: "Full-scale CRM", teaches: "Complex relationships, RBAC (Roles), Reports, Exports.", tech: "Laravel, MySQL, Redis" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and basic CRUD to build your first dynamic site.",
    schedule: [
      "Days 1-7: PHP Syntax, Loops, and Functions.",
      "Days 8-15: Forms (GET/POST) and Basic MySQL.",
      "Days 16-23: Sessions, Cookies, and building a Login system.",
      "Days 24-30: Build a complete CRUD Blog project.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path covering core language and framework foundations.",
    schedule: [
      "Days 1-20: Beginner Stage thorough coverage.",
      "Days 21-45: OOP, Databases (PDO), and Package management.",
      "Days 46-60: Introduction to Laravel and a small framework project.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive journey for professional PHP/Laravel developer readiness.",
    schedule: [
      "Days 1-30: Core PHP & Database fundamentals.",
      "Days 31-60: Professional OOP, Security, and REST APIs.",
      "Days 61-90: Laravel Mastery, Testing, and Final Advanced Project.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between '==' and '===' in PHP?",
  "How do you handle SQL Injection in PHP?",
  "Difference between 'include', 'include_once', 'require', and 'require_once'.",
  "What are Traits in PHP?",
  "Explain the MVC architecture in the context of Laravel.",
  "What is PSR-4 and why is autoloading important?",
  "Difference between sessions and cookies.",
  "How does dependency injection work in Laravel?",
  "What is an abstract class vs an interface in PHP?",
  "Explain what middleware does in a web application.",
];

const codingQuestions = [
  { question: "Reverse a string without using built-in strrev().", topic: "String Manipulation" },
  { question: "Write a function to check if a number is prime.", topic: "Logic" },
  { question: "Merge two sorted arrays into one sorted array.", topic: "Arrays" },
  { question: "Implement a Singleton design pattern in PHP.", topic: "Design Patterns" },
];

const mcqs = [
  { question: "Which superglobal is used to access form data sent via POST?", options: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"], answer: "$_POST" },
  { question: "What is the default extension for PHP files?", options: [".html", ".js", ".php", ".py"], answer: ".php" },
  { question: "Which operator is used for string concatenation in PHP?", options: ["+", "&", ".", ","], answer: "." },
];

const mistakes = [
  "Leaving error reporting on in production (huge security risk).",
  "Not sanitizing user input (vulnerable to SQL injection and XSS).",
  "Using legacy mysql_* functions instead of PDO or MySQLi.",
  "Hardcoding database credentials instead of using environment variables.",
  "Not using a version manager or Composer, leading to dependency issues.",
  "Forgetting the semicolon at the end of statements.",
  "Mixing logic and presentation (PHP inside HTML everywhere).",
  "Ignoring PSR (PHP Standards Recommendations) for code style.",
  "Not understanding the difference between pass-by-value and pass-by-reference.",
  "Failing to use namespaces, leading to class name collisions.",
];

export default function PhpRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The PHP Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive guide to mastering PHP, the server-side language that powers over 75% of the web.
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
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded">
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
            <CardDescription>Expert guidance to help you land your dream PHP/Laravel role.</CardDescription>
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
                    {['PHP 8', 'Laravel', 'MySQL', 'PDO', 'Eloquent ORM', 'Composer', 'MVC', 'REST APIs', 'PHPUnit', 'Redis', 'Nginx', 'Docker'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Deploy your projects to a live URL using a platform like Heroku or DigitalOcean.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with modern PHP (versions 7.4 or 8+).</li>
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
            PHP has evolved into a modern, high-performance language. With frameworks like Laravel, it's never been faster or easier to build world-class applications. Stay consistent, keep building projects, and remember that every expert was once a beginner.
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
