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
  ArrowLeft,
  ArrowRight,
  Terminal,
  Code,
  Monitor,
} from "lucide-react";
import Link from "next/link";

const stages = [
    {
        title: "Beginner Stage: Python Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to Python",
                why: "Understand what Python is, its design philosophy (readability and simplicity), and its wide range of applications (web development, data science, automation).",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Python for Everybody (YouTube)", url: "https://www.youtube.com/watch?v=8DvywoWv6fI" },
                    { name: "Official Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
                ],
                practice: "Install Python and VS Code. Write and run a 'Hello, World!' program.",
            },
            {
                what: "Variables and Basic Data Types",
                why: "To store and manage data. Learn about integers, floats, strings, and booleans.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "freeCodeCamp - Python Variables", url: "https://www.freecodecamp.org/news/python-variables-a-beginners-guide-to-name-your-variables-in-python/" },
                ],
                practice: "Create a script that declares variables for your name, age, and height, and then prints them.",
            },
            {
                what: "Basic Operators",
                why: "To perform operations on your data, such as arithmetic, comparisons, and logical checks.",
                time: "1 Week",
                prereqs: "Variables",
                resources: [
                     { name: "Python Operators (W3Schools)", url: "https://www.w3schools.com/python/python_operators.asp" },
                ],
                practice: "Write a program that takes two numbers as input and prints their sum, difference, product, and quotient.",
            },
            {
                what: "Control Flow (If/Else)",
                why: "To make decisions in your code and execute different blocks based on conditions.",
                time: "1 Week",
                prereqs: "Operators",
                resources: [
                    { name: "Python If...Else (W3Schools)", url: "https://www.w3schools.com/python/python_conditions.asp" },
                ],
                practice: "Write a program that checks if a number is positive, negative, or zero.",
            },
            {
                what: "Data Structures: Lists and Tuples",
                why: "To store collections of items. Lists are mutable (changeable), and tuples are immutable (unchangeable).",
                time: "1 Week",
                prereqs: "Data Types",
                resources: [
                     { name: "Python Lists", url: "https://www.w3schools.com/python/python_lists.asp" },
                     { name: "Python Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" },
                ],
                practice: "Create a list of your favorite movies. Add a new movie to the list, then print the third movie.",
            },
            {
                what: "Loops (For and While)",
                why: "To automate repetitive tasks and iterate over data structures.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Python Loops (W3Schools)", url: "https://www.w3schools.com/python/python_for_loops.asp" },
                ],
                practice: "Use a `for` loop to print each movie from your list of favorite movies. Use a `while` loop to count from 1 to 10.",
            },
            {
                what: "Data Structures: Dictionaries and Sets",
                why: "Dictionaries store key-value pairs for fast lookups. Sets store unique, unordered items.",
                time: "1 Week",
                prereqs: "Data Structures",
                resources: [
                    { name: "Python Dictionaries", url: "https://realpython.com/python-dicts/" },
                    { name: "Python Sets", url: "https://www.w3schools.com/python/python_sets.asp" },
                ],
                practice: "Create a dictionary to store information about a user (name, email, city).",
            },
            {
                what: "Functions",
                why: "To organize your code into reusable blocks, making it more modular and readable.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Python Functions (W3Schools)", url: "https://www.w3schools.com/python/python_functions.asp" },
                ],
                practice: "Write a function that takes a name as an argument and returns a personalized greeting.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building Robust Applications",
        level: "Intermediate",
        steps: [
            {
                what: "Object-Oriented Programming (OOP)",
                why: "A powerful paradigm for structuring complex applications. Learn about classes, objects, inheritance, and polymorphism.",
                time: "2 Weeks",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "Python OOP Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
                    { name: "Real Python - OOP in Python 3", url: "https://realpython.com/python3-object-oriented-programming/" },
                ],
                practice: "Create a `Car` class with attributes like `make`, `model`, and `year`, and methods like `start_engine()`.",
            },
            {
                what: "File I/O",
                why: "To read from and write to files, allowing your programs to persist data.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Reading and Writing Files in Python", url: "https://realpython.com/read-write-files-python/" },
                ],
                practice: "Write a script that reads content from a text file, counts the number of words, and writes the result to a new file.",
            },
            {
                what: "Modules and Packages",
                why: "To organize your code into different files and directories, making large projects manageable.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Python Modules and Packages", url: "https://realpython.com/python-modules-packages/" },
                ],
                practice: "Create a `utils.py` file with a helper function and import it into your main script.",
            },
            {
                what: "Virtual Environments",
                why: "To create isolated environments for your projects, managing dependencies and avoiding conflicts.",
                time: "1 Week",
                prereqs: "Modules",
                resources: [
                     { name: "Python Virtual Environments (Real Python)", url: "https://realpython.com/python-virtual-environments-a-primer/" },
                ],
                practice: "Create a new virtual environment for a project, activate it, and install a package like `requests`.",
            },
            {
                what: "Error and Exception Handling",
                why: "To handle unexpected errors gracefully without crashing your program.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Python Exceptions (W3Schools)", url: "https://www.w3schools.com/python/python_try_except.asp" },
                ],
                practice: "Write a script that asks the user for a number and handles the error if they enter text instead.",
            },
            {
                what: "Comprehensions",
                why: "A concise and readable way to create lists, dictionaries, and sets.",
                time: "1 Week",
                prereqs: "Data Structures",
                resources: [
                    { name: "Python Comprehensions (Real Python)", url: "https://realpython.com/list-comprehension-python/" },
                ],
                practice: "Use a list comprehension to create a list of the squares of numbers from 1 to 10.",
            },
            {
                what: "Working with APIs",
                why: "To fetch data from external services on the web. Essential for most modern applications.",
                time: "1 Week",
                prereqs: "File I/O, Dictionaries",
                resources: [
                    { name: "APIs for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=GZvSYJDk-us" },
                ],
                practice: "Use the `requests` library to fetch data from a free public API (like JSONPlaceholder) and print it.",
            },
            {
                what: "Introduction to Testing",
                why: "To ensure your code works as expected and to prevent regressions.",
                time: "1 Week",
                prereqs: "Functions, OOP",
                resources: [
                    { name: "Getting Started With Testing in Python", url: "https://realpython.com/python-testing/" },
                ],
                practice: "Write a simple unit test for a function you've written using the built-in `unittest` or `pytest` library.",
            },
        ],
    },
    {
        title: "Advanced Stage: Specialization and Mastery",
        level: "Advanced",
        steps: [
            {
                what: "Decorators",
                why: "A powerful way to modify or enhance functions without changing their code. Used for logging, timing, and more.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                     { name: "Python Decorators (Real Python)", url: "https://realpython.com/primer-on-python-decorators/" },
                ],
                practice: "Write a decorator that logs the time a function takes to execute.",
            },
            {
                what: "Generators",
                why: "To work with large datasets efficiently by yielding items one at a time, saving memory.",
                time: "1 Week",
                prereqs: "Functions, Loops",
                resources: [
                    { name: "Python Generators (Real Python)", url: "https://realpython.com/introduction-to-python-generators/" },
                ],
                practice: "Create a generator function that yields the Fibonacci sequence.",
            },
            {
                what: "Concurrency",
                why: "To run multiple tasks seemingly at the same time, improving performance for I/O-bound operations.",
                time: "2 Weeks",
                prereqs: "Functions",
                resources: [
                    { name: "Async IO in Python", url: "https://realpython.com/async-io-python/" },
                ],
                practice: "Use `asyncio` to fetch data from multiple URLs concurrently.",
            },
            {
                what: "Web Framework (Django or Flask)",
                why: "To build robust and scalable web applications and APIs.",
                time: "3-4 Weeks",
                prereqs: "OOP, Modules",
                resources: [
                    { name: "Django Tutorial (Official)", url: "https://docs.djangoproject.com/en/stable/intro/tutorial01/" },
                    { name: "Flask Tutorial (Official)", url: "https://flask.palletsprojects.com/en/latest/tutorial/" },
                ],
                practice: "Build a simple blog application with a web framework.",
            },
            {
                what: "Data Analysis (Pandas, NumPy)",
                why: "Essential for data science and machine learning. Pandas for data manipulation, NumPy for numerical operations.",
                time: "2-3 Weeks",
                prereqs: "Data Structures",
                resources: [
                    { name: "freeCodeCamp - Data Analysis with Python", url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
                ],
                practice: "Use Pandas to read a CSV file, clean the data, and calculate basic statistics.",
            },
             {
                what: "Databases & ORMs",
                why: "To store and retrieve application data persistently. ORMs like SQLAlchemy allow you to interact with databases using Python objects.",
                time: "2 Weeks",
                prereqs: "Web Framework",
                resources: [
                    { name: "SQLAlchemy 2.0 Tutorial", url: "https://docs.sqlalchemy.org/en/20/tutorial/" },
                ],
                practice: "Integrate a SQLite database into your blog application using an ORM.",
            },
            {
                what: "Packaging and Deployment",
                why: "To share your Python applications with others and deploy them to servers.",
                time: "1 Week",
                prereqs: "Virtual Environments",
                resources: [
                    { name: "Packaging Python Projects", url: "https://packaging.python.org/en/latest/tutorials/packaging-projects/" },
                ],
                practice: "Package a simple script you've written into a distributable package and publish it to TestPyPI.",
            },
             {
                what: "Best Practices (PEP 8)",
                why: "To write clean, readable, and maintainable Python code that follows community standards.",
                time: "Ongoing",
                prereqs: "All",
                resources: [
                    { name: "PEP 8 Style Guide", url: "https://peps.python.org/pep-0008/" },
                ],
                practice: "Use a linter like Flake8 or Black in your code editor to automatically check and format your code.",
            },
        ],
    },
];

const projects = [
  { level: "Beginner", title: "Number Guessing Game", teaches: "User input, control flow, loops, and random numbers.", tech: "Python" },
  { level: "Beginner", title: "Simple Calculator", teaches: "Functions, user input, and basic arithmetic operations.", tech: "Python" },
  { level: "Beginner", title: "Contact Book", teaches: "Dictionaries, file I/O, and basic CRUD operations.", tech: "Python" },
  { level: "Intermediate", title: "Web Scraper", teaches: "Working with external libraries (`requests`, `BeautifulSoup`), HTML parsing.", tech: "Python, Requests, BeautifulSoup" },
  { level: "Intermediate", title: "Weather App API", teaches: "Building a simple API with Flask, working with external APIs.", tech: "Python, Flask, Requests" },
  { level: "Intermediate", title: "To-Do List Web App", teaches: "Web framework basics, database interaction, CRUD operations.", tech: "Python, Flask/Django, SQLAlchemy" },
  { level: "Intermediate", title: "CSV Data Analyzer", teaches: "Data manipulation, basic statistics, and file I/O with a popular library.", tech: "Python, Pandas" },
  { level: "Advanced", title: "Blog Web Application", teaches: "Full-stack development, user authentication, database design.", tech: "Python, Django, PostgreSQL" },
  { level: "Advanced", title: "Real-time Chat Application", teaches: "WebSockets, concurrency, and advanced backend development.", tech: "Python, Flask/Django, WebSockets" },
  { level: "Advanced", title: "Twitter Bot", teaches: "Interacting with APIs, automation, and deployment.", tech: "Python, Tweepy" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan focused on mastering the fundamentals and building your first project.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Cover Intermediate topics: OOP, File I/O, Virtual Environments, and working with APIs.",
            "Days 21-30: Build a project from the Intermediate list, like the 'Web Scraper' or 'Weather App API'.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach covering fundamentals and intermediate topics with more depth.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage, building all practice tasks.",
            "Days 21-40: Complete the entire Intermediate Stage, including an introduction to testing.",
            "Days 41-60: Learn a web framework (Flask or Django basics) and build a complete To-Do List Web App with a database.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 31-60: Deep dive into a web framework (Django) and a data analysis library (Pandas).",
            "Days 61-75: Learn advanced topics like concurrency, decorators, and database ORMs.",
            "Days 76-90: Build an advanced project like the 'Blog Web Application' and prepare for interviews.",
        ]
    }
];

const interviewTopics = [
    "Difference between a list and a tuple.",
    "Explain Python's Global Interpreter Lock (GIL).",
    "What are decorators and how do they work?",
    "Describe OOP concepts in Python (Inheritance, Encapsulation).",
    "How does memory management work in Python?",
    "What are list/dict comprehensions?",
    "Explain the difference between `==` and `is`.",
    "What is `*args` and `**kwargs`?",
    "What are generators?",
    "How do you handle exceptions in Python?",
];

const codingQuestions = [
    { question: "Reverse a string in Python without using built-in slicing.", topic: "String Manipulation" },
    { question: "Given a list of numbers, find the two that add up to a specific target.", topic: "Arrays/Dictionaries" },
    { question: "Check if a string is a palindrome.", topic: "String Manipulation" },
];

const mcqs = [
    { question: "Which of the following is an immutable data type in Python?", options: ["List", "Dictionary", "Set", "Tuple"], answer: "Tuple" },
    { question: "What is the output of `print(2 ** 3)`?", options: ["6", "8", "9", "12"], answer: "8" },
    { question: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "define"], answer: "def" },
];

const mistakes = [
    "Using mutable default arguments in functions.",
    "Not understanding the difference between `==` and `is`.",
    "Modifying a list while iterating over it.",
    "Ignoring virtual environments, leading to dependency hell.",
    "Thinking Python is slow without understanding how to use optimized libraries like NumPy.",
    "Not following the PEP 8 style guide, making code harder to read.",
    "Re-inventing the wheel instead of using Python's extensive standard library.",
    "Using floating-point numbers for financial calculations without using the `Decimal` type.",
    "Ignoring the power and readability of list comprehensions.",
    "Not handling exceptions, leading to fragile programs."
];

export default function PythonRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Brain className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Python Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Python, from fundamentals to advanced specialization.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Popular and Widely Used Languages">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Languages
          </Link>
        </Button>

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
                <CardDescription>Key topics, questions, and resume tips to land the job.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2"><Monitor className="h-5 w-5 mr-2 inline-block text-primary"/>Sample Coding Questions</h3>
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
                        {['Python', 'Django', 'Flask', 'Pandas', 'NumPy', 'SQL', 'REST APIs', 'Object-Oriented Programming (OOP)', 'Git', 'Data Structures', 'Algorithms'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, installation steps, and usage examples.</li>
                        <li>Include a `requirements.txt` file listing all project dependencies.</li>
                        <li>Ensure your code is clean, well-commented, and follows PEP 8 style guidelines.</li>
                        <li>Write a clean and well-organized commit history.</li>
                        <li>If it's a web application, include a link to the live deployed version.</li>
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
                Python is a versatile and powerful language that opens doors to many career paths. This roadmap is a guide, but true mastery comes from consistent practice and building projects you're passionate about. Stay curious, be persistent, and enjoy the process. Happy coding!
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
