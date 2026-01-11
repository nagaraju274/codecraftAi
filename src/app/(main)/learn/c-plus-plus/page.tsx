
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
        title: "Beginner Stage: C++ and OOP Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to C++",
                why: "Understand C++'s history as an extension of C, its performance benefits, and its widespread use in game development, high-frequency trading, and systems programming.",
                time: "1 Week",
                prereqs: "Basic C knowledge is helpful but not required.",
                resources: [
                    { name: "C++ Tutorial (W3Schools)", url: "https://www.w3schools.com/cpp/" },
                    { name: "C++ Full Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
                ],
                practice: "Install a C++ compiler (like G++ or Clang) and a code editor (like VS Code). Write, compile, and run a 'Hello, World!' program.",
            },
            {
                what: "Variables, Data Types, and Operators",
                why: "These are the fundamental building blocks for storing and manipulating data.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "C++ Data Types", url: "https://www.w3schools.com/cpp/cpp_data_types.asp" },
                    { name: "C++ Operators", url: "https://www.w3schools.com/cpp/cpp_operators.asp" },
                ],
                practice: "Write a program that asks for the radius of a circle and calculates its area.",
            },
            {
                what: "Control Flow (If/Else, Switch, Loops)",
                why: "To make decisions and repeat actions in your code.",
                time: "1 Week",
                prereqs: "Variables & Operators",
                resources: [
                    { name: "C++ Conditions", url: "https://www.w3schools.com/cpp/cpp_conditions.asp" },
                    { name: "C++ Loops", url: "https://www.w3schools.com/cpp/cpp_for_loop.asp" },
                ],
                practice: "Write a program that prints a multiplication table from 1 to 10.",
            },
            {
                what: "Functions",
                why: "To break down your code into smaller, reusable, and more manageable pieces. Learn about function overloading.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C++ Functions", url: "https://www.w3schools.com/cpp/cpp_functions.asp" },
                ],
                practice: "Write a function `max()` that takes two integers and returns the larger of the two.",
            },
            {
                what: "Arrays and Strings",
                why: "To store collections of data. Understand the difference between C-style arrays/strings and `std::vector`/`std::string`.",
                time: "1 Week",
                prereqs: "Data Types, Loops",
                resources: [
                    { name: "C++ Arrays", url: "https://www.w3schools.com/cpp/cpp_arrays.asp" },
                    { name: "C++ Strings", url: "https://www.w3schools.com/cpp/cpp_strings.asp" },
                ],
                practice: "Write a program that reverses a `std::string` without using any built-in reverse functions.",
            },
            {
                what: "Pointers and References",
                why: "To understand memory management and efficiently pass large objects to functions.",
                time: "1-2 Weeks",
                prereqs: "Variables",
                resources: [
                    { name: "C++ Pointers", url: "https://www.w3schools.com/cpp/cpp_pointers.asp" },
                    { name: "C++ References", url: "https://www.w3schools.com/cpp/cpp_references.asp" },
                ],
                practice: "Write a function that swaps the values of two variables using pointers, and another that does the same using references.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Object-Oriented Programming and STL",
        level: "Intermediate",
        steps: [
            {
                what: "Classes and Objects",
                why: "To define your own custom types, bundling data and behavior together. This is the core of OOP.",
                time: "1 Week",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "C++ Classes and Objects", url: "https://www.w3schools.com/cpp/cpp_classes.asp" },
                ],
                practice: "Create a `Book` class with member variables for `title`, `author`, and `pages`. Create a method to display the book's details.",
            },
            {
                what: "Constructors and Destructors",
                why: "To control how objects are created and destroyed, which is crucial for managing resources like memory or file handles.",
                time: "1 Week",
                prereqs: "Classes and Objects",
                resources: [
                    { name: "C++ Constructors", url: "https://www.w3schools.com/cpp/cpp_constructors.asp" },
                ],
                practice: "Add a constructor to your `Book` class to initialize its members when a new object is created.",
            },
            {
                what: "Core OOP Principles (Inheritance, Polymorphism, Encapsulation)",
                why: "To write flexible, scalable, and maintainable object-oriented code.",
                time: "2 Weeks",
                prereqs: "Constructors",
                resources: [
                    { name: "C++ Inheritance", url: "https://www.w3schools.com/cpp/cpp_inheritance.asp" },
                    { name: "C++ Polymorphism", url: "https://www.w3schools.com/cpp/cpp_polymorphism.asp" },
                ],
                practice: "Create a base `Shape` class with a virtual `area()` method. Create derived `Circle` and `Square` classes that override `area()`.",
            },
            {
                what: "The Standard Template Library (STL): Containers",
                why: "To use powerful, pre-built data structures. Master `std::vector`, `std::list`, `std::stack`, `std::queue`.",
                time: "1-2 Weeks",
                prereqs: "Pointers",
                resources: [
                    { name: "C++ STL Containers (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/containers-in-c-stl/" },
                ],
                practice: "Use a `std::vector` to store a list of integers and a `std::map` to count the frequency of each integer.",
            },
            {
                what: "The Standard Template Library (STL): Algorithms and Iterators",
                why: "To perform common operations like sorting, searching, and transforming data in your containers efficiently.",
                time: "1 Week",
                prereqs: "STL Containers",
                resources: [
                    { name: "C++ STL Algorithms (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/c-magicians-stl-algorithms/" },
                ],
                practice: "Use `std::sort` to sort a vector of numbers. Use `std::find` to search for a specific value in the vector.",
            },
            {
                what: "Exception Handling",
                why: "To build robust applications that can handle runtime errors gracefully without crashing.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "C++ Exceptions", url: "https://www.w3schools.com/cpp/cpp_exceptions.asp" },
                ],
                practice: "Write a function that divides two numbers and throws an exception if the denominator is zero. Use a `try-catch` block to handle the exception.",
            },
        ],
    },
    {
        title: "Advanced Stage: Modern C++ and Systems",
        level: "Advanced",
        steps: [
            {
                what: "Smart Pointers",
                why: "To manage dynamic memory automatically and prevent memory leaks, a core principle of modern C++ (RAII).",
                time: "1 Week",
                prereqs: "Pointers, OOP",
                resources: [
                    { name: "Smart Pointers in C++ (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/smart-pointers-cpp/" },
                ],
                practice: "Refactor a class that uses a raw pointer (`new`/`delete`) to use `std::unique_ptr` or `std::shared_ptr`.",
            },
            {
                what: "Move Semantics and Rvalue References",
                why: "To optimize performance by avoiding unnecessary copies of large objects.",
                time: "1 Week",
                prereqs: "Pointers, OOP",
                resources: [
                    { name: "Move Semantics (learncpp.com)", url: "https://www.learncpp.com/cpp-tutorial/move-constructors-and-move-assignment/" },
                ],
                practice: "Implement a move constructor for a simple class that contains a dynamically allocated resource.",
            },
            {
                what: "Concurrency",
                why: "To write multithreaded applications that can perform multiple tasks simultaneously and take advantage of multi-core processors.",
                time: "1-2 Weeks",
                prereqs: "Functions",
                resources: [
                    { name: "C++ Multithreading (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/multithreading-in-cpp/" },
                ],
                practice: "Write a program that uses `std::thread` to concurrently calculate the sum of two different halves of a large array.",
            },
            {
                what: "Build Systems (CMake)",
                why: "To manage complex projects with multiple files and dependencies in a cross-platform way.",
                time: "1 Week",
                prereqs: "Command Line Basics",
                resources: [
                    { name: "CMake Tutorial", url: "https://cmake.org/cmake/help/latest/guide/tutorial/index.html" },
                ],
                practice: "Create a simple C++ project with a main file and a separate class file. Write a `CMakeLists.txt` to build the project.",
            },
            {
                what: "Templates and Generic Programming",
                why: "To write flexible, reusable code that can work with any data type, similar to generics in other languages.",
                time: "1-2 Weeks",
                prereqs: "Functions, Classes",
                resources: [
                    { name: "C++ Templates", url: "https://www.w3schools.com/cpp/cpp_templates.asp" },
                ],
                practice: "Write a template function `max()` that can find the maximum of two values of any type.",
            },
            {
                what: "Lambda Expressions (C++11)",
                why: "A concise way to create anonymous functions, widely used with STL algorithms.",
                time: "3-4 Days",
                prereqs: "Functions, STL",
                resources: [
                    { name: "Lambda Expressions in C++", url: "https://www.geeksforgeeks.org/lambda-expression-in-c/" },
                ],
                practice: "Use a lambda expression with `std::find_if` to find the first even number in a vector.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Simple Address Book", teaches: "Structs or classes, `std::vector`, and basic I/O operations.", tech: "C++" },
    { level: "Beginner", title: "Text File Word Counter", teaches: "File I/O (`fstream`), `std::string` manipulation, and using `std::map`.", tech: "C++, fstream, map" },
    { level: "Beginner", title: "Banking Account Manager", teaches: "Classes, objects, encapsulation, and methods.", tech: "C++" },
    { level: "Intermediate", title: "Generic Sorting Algorithm", teaches: "Templates, function pointers or lambdas for custom comparison.", tech: "C++, Templates" },
    { level: "Intermediate", title: "Implementation of a Dynamic Array", teaches: "Pointers, dynamic memory management (`new`, `delete`), and class design.", tech: "C++" },
    { level: "Intermediate", title: "Student Record System", teaches: "Classes, `std::vector`, file I/O, and sorting algorithms.", tech: "C++, fstream" },
    { level: "Intermediate", title: "C++ Linked List Implementation", teaches: "Pointers, structs/classes, and dynamic memory management.", tech: "C++" },
    { level: "Advanced", title: "Multithreaded Prime Number Finder", teaches: "Concurrency with `std::thread`, mutexes for shared data.", tech: "C++, <thread>, <mutex>" },
    { level: "Advanced", title: "A Simple Key-Value Store", teaches: "Hash tables (`std::unordered_map`), file serialization, and class design.", tech: "C++" },
    { level: "Advanced", title: "Basic HTTP Client", teaches: "Socket programming (or a library like Boost.Asio), string manipulation, and understanding HTTP.", tech: "C++, Networking library" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you comfortable with C++ syntax and OOP.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Intermediate OOP (Classes, Inheritance) and basic STL containers (`vector`, `string`).",
            "Days 21-30: Build the 'Simple Address Book' and 'Banking Account Manager' projects.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in C++ and the STL.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Master STL containers (`map`, `set`) and algorithms (`sort`, `find`).",
            "Days 36-50: Build an intermediate project like the 'Student Record System'.",
            "Days 51-60: Learn about smart pointers and basic exception handling.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and readiness for performance-critical roles.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on OOP and STL.",
            "Days 31-60: Cover the Advanced Stage, mastering templates, concurrency, and modern C++ features.",
            "Days 61-75: Build an advanced project, such as the 'Multithreaded Prime Number Finder'.",
            "Days 76-90: Learn a build system like CMake and prepare for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the four main principles of OOP.",
    "What is the difference between a `struct` and a `class` in C++?",
    "Describe the difference between a pointer and a reference.",
    "What is `RAII` (Resource Acquisition Is Initialization)?",
    "Explain virtual functions and polymorphism.",
    "What is the difference between `std::vector` and a C-style array?",
    "What are smart pointers (`unique_ptr`, `shared_ptr`) and why are they used?",
    "What is the 'Rule of Three/Five/Zero'?",
    "Explain the difference between stack and heap memory.",
    "What does the `const` keyword do in different contexts (variable, method, parameter)?",
];

const codingQuestions = [
    { question: "Implement a function to reverse a linked list.", topic: "Pointers/Data Structures" },
    { question: "Check if a string is a palindrome.", topic: "Strings" },
    { question: "Given a vector of integers, find the two that add up to a specific target.", topic: "Arrays/Hash Maps" },
];

const mcqs = [
    { question: "Which STL container provides O(1) average time for insertion and lookup?", options: ["std::vector", "std::list", "std::unordered_map", "std::map"], answer: "std::unordered_map" },
    { question: "What is the primary mechanism for polymorphism in C++?", options: ["Templates", "Function Overloading", "Virtual Functions", "Operator Overloading"], answer: "Virtual Functions" },
    { question: "Which keyword is used to deallocate memory allocated with `new`?", options: ["remove", "free", "delete", "dealloc"], answer: "delete" },
];

const mistakes = [
    "Forgetting to `delete` memory allocated with `new`, leading to memory leaks.",
    "Using raw pointers when smart pointers (`unique_ptr`, `shared_ptr`) would be safer.",
    "Including `.cpp` files instead of header files.",
    "Putting `using namespace std;` in a header file, which can cause name clashes.",
    "Passing large objects by value instead of by reference or const reference.",
    "Not understanding the difference between stack and heap allocation.",
    "Accessing an array or vector out of bounds.",
    "Forgetting to make a base class destructor virtual, which can lead to resource leaks in polymorphic hierarchies.",
    "Trying to modify a string literal.",
    "Ignoring compiler warnings, which often indicate serious potential issues."
];

export default function CppRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The C++ Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering C++, the high-performance language for game development, systems programming, and finance.
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
                <CardDescription>Key topics, questions, and resume tips to land a C++ developer job.</CardDescription>
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
                        {['C++', 'OOP', 'STL', 'Data Structures', 'Algorithms', 'Memory Management', 'Pointers', 'Templates', 'Concurrency', 'CMake'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, and build/run instructions.</li>
                        <li>Include a `CMakeLists.txt` or Makefile so others can easily compile your project.</li>
                        <li>Ensure your code is clean, well-commented, and follows modern C++ best practices.</li>
                        <li>Use smart pointers and RAII to demonstrate good memory management.</li>
                        <li>If possible, include unit tests for your code.</li>
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
                C++ is a deep and powerful language that rewards a solid understanding of computer science fundamentals. This roadmap is your guide. Be patient, write lots of code, and embrace the control and performance that C++ offers. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

