
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
        title: "Beginner Stage: Java Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to Java and JVM",
                why: "To understand Java's 'Write Once, Run Anywhere' philosophy and its role in building robust, large-scale applications.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "What is Java? (Official)", url: "https://www.java.com/en/download/help/whatis_java.html" },
                    { name: "Java Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=A74TOX803D0" },
                ],
                practice: "Install the Java Development Kit (JDK) and an IDE like IntelliJ IDEA or VS Code. Compile and run a 'Hello, World!' program.",
            },
            {
                what: "Variables, Data Types, and Operators",
                why: "These are the fundamental building blocks for storing and manipulating data in any program.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "Java Variables (W3Schools)", url: "https://www.w3schools.com/java/java_variables.asp" },
                    { name: "Java Data Types (W3Schools)", url: "https://www.w3schools.com/java/java_data_types.asp" },
                ],
                practice: "Write a program that declares variables for your name (String), age (int), and GPA (double), and then prints them out.",
            },
            {
                what: "Control Flow (If/Else, Loops)",
                why: "To make decisions and repeat actions, which is essential for creating any non-trivial logic.",
                time: "1 Week",
                prereqs: "Variables & Data Types",
                resources: [
                    { name: "Java If...Else (W3Schools)", url: "https://www.w3schools.com/java/java_if_else.asp" },
                    { name: "Java For Loop (W3Schools)", url: "https://www.w3schools.com/java/java_for_loop.asp" },
                ],
                practice: "Write a program that prints all even numbers from 1 to 100 using a for loop and an if statement.",
            },
            {
                what: "Arrays",
                why: "To store and manage collections of elements of the same type.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Java Arrays (W3Schools)", url: "https://www.w3schools.com/java/java_arrays.asp" },
                ],
                practice: "Create an array of your favorite movie titles (as Strings). Write a loop to print each title to the console.",
            },
            {
                what: "Functions / Methods",
                why: "To break down your code into smaller, reusable, and more manageable pieces.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Java Methods (W3Schools)", url: "https://www.w3schools.com/java/java_methods.asp" },
                ],
                practice: "Write a function that takes two integers as input and returns their sum.",
            },
            {
                what: "Introduction to Object-Oriented Programming (OOP)",
                why: "To understand the core paradigm of Java. Learn the basics of classes and objects.",
                time: "1-2 Weeks",
                prereqs: "Functions",
                resources: [
                    { name: "Java Classes and Objects (W3Schools)", url: "https://www.w3schools.com/java/java_classes.asp" },
                    { name: "OOP in Java (freeCodeCamp)", url: "https://www.freecodecamp.org/news/object-oriented-programming-in-java/" },
                ],
                practice: "Create a `Dog` class with properties like `name` and `breed` and a method called `bark()`.",
            },
            {
                what: "Constructors and `this` Keyword",
                why: "To properly initialize objects when they are created.",
                time: "3-4 Days",
                prereqs: "Intro to OOP",
                resources: [
                    { name: "Java Constructors (W3Schools)", url: "https://www.w3schools.com/java/java_constructors.asp" },
                ],
                practice: "Add a constructor to your `Dog` class that sets the `name` and `breed` when a new `Dog` object is created.",
            },
            {
                what: "Basic Input/Output",
                why: "To make your programs interactive by reading user input from the console.",
                time: "2-3 Days",
                prereqs: "Variables",
                resources: [
                    { name: "Java User Input (Scanner)", url: "https://www.w3schools.com/java/java_user_input.asp" },
                ],
                practice: "Write a program that asks the user for their name and then prints a personalized greeting.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building Robust Applications",
        level: "Intermediate",
        steps: [
            {
                what: "OOP Principles (Inheritance, Polymorphism, Encapsulation)",
                why: "To write flexible, scalable, and maintainable object-oriented code.",
                time: "2 Weeks",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "Java Inheritance (W3Schools)", url: "https://www.w3schools.com/java/java_inheritance.asp" },
                    { name: "Java Polymorphism (W3Schools)", url: "https://www.w3schools.com/java/java_polymorphism.asp" },
                ],
                practice: "Create an `Animal` parent class and have your `Dog` class inherit from it. Override a `makeSound()` method in the `Dog` class.",
            },
            {
                what: "Abstract Classes and Interfaces",
                why: "To define contracts and create blueprints for your classes, a key part of designing large applications.",
                time: "1 Week",
                prereqs: "OOP Principles",
                resources: [
                    { name: "Java Abstraction (W3Schools)", url: "https://www.w3schools.com/java/java_abstract.asp" },
                    { name: "Java Interfaces (W3Schools)", url: "https://www.w3schools.com/java/java_interface.asp" },
                ],
                practice: "Create a `Shape` interface with a method `calculateArea()`. Implement this interface in `Circle` and `Square` classes.",
            },
            {
                what: "The Java Collections Framework",
                why: "To efficiently store and manipulate groups of objects using powerful, pre-built data structures.",
                time: "2 Weeks",
                prereqs: "Arrays, OOP",
                resources: [
                    { name: "Java ArrayList (W3Schools)", url: "https://www.w3schools.com/java/java_arraylist.asp" },
                    { name: "Java HashMap (W3Schools)", url: "https://www.w3schools.com/java/java_hashmap.asp" },
                ],
                practice: "Use an `ArrayList` to store a list of `Dog` objects. Use a `HashMap` to store phone numbers, with names as keys and numbers as values.",
            },
            {
                what: "Exception Handling",
                why: "To build robust applications that can handle errors gracefully without crashing.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Java Try...Catch (W3Schools)", url: "https://www.w3schools.com/java/java_try_catch.asp" },
                ],
                practice: "Write a program that divides two numbers. Use a try-catch block to handle the `ArithmeticException` that occurs when dividing by zero.",
            },
            {
                what: "File I/O (Input/Output)",
                why: "To read data from and write data to files, allowing your application to persist information.",
                time: "1 Week",
                prereqs: "Exception Handling",
                resources: [
                    { name: "Java File Handling (W3Schools)", url: "https://www.w3schools.com/java/java_files.asp" },
                ],
                practice: "Write a program that writes a short message to a file named 'output.txt', then reads the message back and prints it to the console.",
            },
            {
                what: "Generics",
                why: "To write flexible, reusable, and type-safe code that can work with any data type.",
                time: "1 Week",
                prereqs: "Collections Framework",
                resources: [
                    { name: "Java Generics (Baeldung)", url: "https://www.baeldung.com/java-generics" },
                ],
                practice: "Create a generic `Box` class that can hold an object of any type. Instantiate it to hold an Integer and then a String.",
            },
            {
                what: "Build Tools (Maven/Gradle)",
                why: "To automate the build process and manage project dependencies.",
                time: "1 Week",
                prereqs: "Java Fundamentals",
                resources: [
                    { name: "Introduction to Maven (Baeldung)", url: "https://www.baeldung.com/maven" },
                    { name: "Introduction to Gradle (Baeldung)", url: "https://www.baeldung.com/gradle" },
                ],
                practice: "Create a new Maven or Gradle project. Add a dependency like Google's Guava library and use a function from it in your code.",
            },
            {
                what: "Unit Testing (JUnit)",
                why: "To verify that individual units of your code work correctly, preventing bugs and regressions.",
                time: "1 Week",
                prereqs: "Functions, OOP",
                resources: [
                    { name: "JUnit 5 Tutorial (Baeldung)", url: "https://www.baeldung.com/junit-5" },
                ],
                practice: "Write a JUnit test for the `sum()` function you created in the beginner stage. Add tests for positive numbers, negative numbers, and zero.",
            },
        ],
    },
    {
        title: "Advanced Stage: Specialization and Enterprise",
        level: "Advanced",
        steps: [
            {
                what: "Lambda Expressions and Streams API",
                why: "To write modern, concise, and functional-style code for processing collections of data.",
                time: "1-2 Weeks",
                prereqs: "Collections Framework",
                resources: [
                    { name: "Java Lambda Expressions (W3Schools)", url: "https://www.w3schools.com/java/java_lambda.asp" },
                    { name: "Java Stream API Tutorial (Baeldung)", url: "https://www.baeldung.com/java-8-streams" },
                ],
                practice: "Given a list of numbers, use the Stream API to filter out the odd numbers, square the remaining even numbers, and then find their sum.",
            },
            {
                what: "Concurrency and Multithreading",
                why: "To build high-performance applications that can perform multiple tasks simultaneously.",
                time: "2 Weeks",
                prereqs: "OOP",
                resources: [
                    { name: "Java Threads (W3Schools)", url: "https://www.w3schools.com/java/java_threads.asp" },
                    { name: "Java Concurrency Tutorial (Baeldung)", url: "https://www.baeldung.com/java-concurrency" },
                ],
                practice: "Create a simple program where two threads run concurrently, each printing a message to the console 10 times.",
            },
            {
                what: "Networking (Sockets, HTTP)",
                why: "To build applications that communicate over a network, like client-server applications or web services.",
                time: "1 Week",
                prereqs: "File I/O",
                resources: [
                    { name: "Socket Programming in Java (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/socket-programming-in-java/" },
                    { name: "Java HTTP Client (Baeldung)", url: "https://www.baeldung.com/java-9-http-client" },
                ],
                practice: "Use Java's built-in HTTP client to make a GET request to the JSONPlaceholder API and print the response.",
            },
            {
                what: "Introduction to Spring Framework & Spring Boot",
                why: "Spring is the dominant framework in the enterprise Java ecosystem for building robust, large-scale applications.",
                time: "3-4 Weeks",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "What Is Spring Boot? (Spring.io)", url: "https://spring.io/guides/gs/spring-boot/" },
                    { name: "Spring Boot Tutorial (Baeldung)", url: "https://www.baeldung.com/spring-boot-tutorial" },
                ],
                practice: "Use the Spring Initializr to create a new Spring Boot project. Create a simple REST controller that returns 'Hello, Spring!' at a `/hello` endpoint.",
            },
            {
                what: "Building a REST API with Spring Boot",
                why: "To build web services that can communicate with front-end applications and other services.",
                time: "2 Weeks",
                prereqs: "Spring Boot Intro",
                resources: [
                    { name: "Building a RESTful Web Service (Spring.io)", url: "https://spring.io/guides/gs/rest-service/" },
                ],
                practice: "Create a REST API for your `Dog` class with endpoints to get all dogs (GET), get a single dog (GET), and add a new dog (POST).",
            },
            {
                what: "Databases with Spring Data JPA",
                why: "To easily connect your Spring application to a relational database and perform CRUD operations.",
                time: "2 Weeks",
                prereqs: "Spring Boot, SQL basics",
                resources: [
                    { name: "Accessing Data with JPA (Spring.io)", url: "https://spring.io/guides/gs/accessing-data-jpa/" },
                ],
                practice: "Connect your Spring Boot API to an in-memory database (like H2). Use Spring Data JPA to save and retrieve `Dog` entities from the database.",
            },
            {
                what: "Spring Security",
                why: "To secure your web applications and APIs with authentication and authorization.",
                time: "1-2 Weeks",
                prereqs: "Spring Boot",
                resources: [
                    { name: "Securing a Web Application (Spring.io)", url: "https://spring.io/guides/gs/securing-web/" },
                ],
                practice: "Add basic HTTP Basic authentication to your Spring Boot API to protect your endpoints.",
            },
            {
                what: "Containerization with Docker",
                why: "To package your Java application and its dependencies into a portable container for easy deployment.",
                time: "1 Week",
                prereqs: "Basic Command Line",
                resources: [
                    { name: "Dockerize a Java Application (Docker Docs)", url: "https://docs.docker.com/language/java/build-image/" },
                ],
                practice: "Write a `Dockerfile` for your Spring Boot application, build a Docker image, and run it as a container.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Simple Calculator", teaches: "User input, control flow, functions, basic arithmetic.", tech: "Java, Scanner" },
    { level: "Beginner", title: "Contact Management System", teaches: "OOP (classes/objects), ArrayList, basic file I/O for saving contacts.", tech: "Java, ArrayList, File I/O" },
    { level: "Beginner", title: "Number Guessing Game", teaches: "Random number generation, loops, user input, conditional logic.", tech: "Java, Scanner, Math.random" },
    { level: "Intermediate", title: "Library Management System", teaches: "Advanced OOP, collections (HashMap), exception handling, file I/O.", tech: "Java, HashMap, File I/O" },
    { level: "Intermediate", title: "Basic Web Scraper", teaches: "HTTP requests, HTML parsing, string manipulation.", tech: "Java, Jsoup library" },
    { level: "Intermediate", title: "Unit Converter", teaches: "GUI programming with Swing or JavaFX, event handling.", tech: "Java, Swing/JavaFX" },
    { level: "Intermediate", title: "Simple Chat Application (Client-Server)", teaches: "Networking with sockets, multithreading for handling multiple clients.", tech: "Java, Sockets, Threads" },
    { level: "Advanced", title: "To-Do List REST API", teaches: "Building APIs, Spring Boot, Spring Data JPA, connecting to a database.", tech: "Java, Spring Boot, H2/PostgreSQL" },
    { level: "Advanced", title: "URL Shortener Service", teaches: "API design, hashing algorithms, database management, HTTP redirects.", tech: "Java, Spring Boot, Database" },
    { level: "Advanced", title: "Blog Platform with User Authentication", teaches: "Full-stack development, API security, database relationships (users to posts).", tech: "Java, Spring Boot, Spring Security, Database" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to master the fundamentals and build your first object-oriented application.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Intermediate OOP (Inheritance, Polymorphism) and the Collections Framework (ArrayList, HashMap).",
            "Days 21-30: Build the 'Contact Management System' project and learn basic JUnit testing.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in Java and an introduction to the enterprise ecosystem.",
        schedule: [
            "Days 1-20: Complete the entire Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Learn modern Java features (Lambdas, Streams) and build tools (Maven/Gradle).",
            "Days 36-50: Get started with Spring Boot and build the 'To-Do List REST API' project with an in-memory database.",
            "Days 51-60: Learn about containerization with Docker and deploy your Spring Boot application.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on OOP and collections.",
            "Days 31-60: Complete the entire Advanced Stage, building a full REST API with Spring Boot, Spring Data JPA, and Spring Security.",
            "Days 61-75: Build the advanced 'Blog Platform' project, focusing on database relationships and user authentication.",
            "Days 76-90: Focus on concurrency, performance tuning, and preparing for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the four main principles of OOP.",
    "What is the difference between an `abstract class` and an `interface`?",
    "Describe the JVM, JRE, and JDK.",
    "What is the difference between `==` and `.equals()` for objects?",
    "Explain the Java Collections Framework (List, Set, Map).",
    "What is the difference between a `HashMap` and a `TreeMap`?",
    "What are checked vs. unchecked exceptions?",
    "Explain how `try-catch-finally` works.",
    "What is multithreading? Explain the `synchronized` keyword.",
    "What are lambda expressions and the Stream API?",
];

const codingQuestions = [
    { question: "Reverse a string in Java without using any built-in reverse functions.", topic: "String Manipulation" },
    { question: "Given a list of integers, find if it contains any duplicates. Use a `HashSet` for an efficient solution.", topic: "Collections" },
    { question: "Implement a function to check if a linked list is a palindrome.", topic: "Data Structures" },
];

const mcqs = [
    { question: "Which of these is NOT a primitive data type in Java?", options: ["int", "String", "boolean", "char"], answer: "String" },
    { question: "Which collection class allows you to store key-value pairs?", options: ["ArrayList", "HashSet", "HashMap", "LinkedList"], answer: "HashMap" },
    { question: "What keyword is used to prevent a method from being overridden by subclasses?", options: ["static", "final", "private", "abstract"], answer: "final" },
];

const mistakes = [
    "Comparing strings using `==` instead of `.equals()`. `==` checks for reference equality, not content equality.",
    "Forgetting to handle `NullPointerException`. Always check for null before calling methods on an object.",
    "Ignoring checked exceptions. Java forces you to handle them for a reason.",
    "Using `String` concatenation in a loop, which is inefficient. Use `StringBuilder` instead.",
    "Not understanding the difference between `List`, `Set`, and `Map`, and choosing the wrong one for the job.",
    "Modifying a collection while iterating over it with a for-each loop, which can cause a `ConcurrentModificationException`.",
    "Making all class members public, which breaks the principle of encapsulation.",
    "Not overriding `hashCode()` when you override `equals()`. This can cause issues when using objects in HashMaps or HashSets.",
    "Forgetting that Java is pass-by-value, even for objects (the value being the reference to the object).",
    "Not using a build tool like Maven or Gradle for dependency management in larger projects."
];

export default function JavaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Java Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Java, the robust, object-oriented language that powers enterprise systems, Android apps, and large-scale applications.
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
                <CardDescription>Key topics, questions, and resume tips to land a Java developer job.</CardDescription>
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
                        {['Java', 'Spring Boot', 'OOP', 'Data Structures', 'Algorithms', 'SQL', 'REST APIs', 'JUnit', 'Maven', 'Git', 'Multithreading', 'Microservices'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, and setup instructions (including build commands).</li>
                        <li>Include a `pom.xml` or `build.gradle` file so others can easily build your project.</li>
                        <li>Ensure your code is well-structured into packages (e.g., `com.example.controller`, `com.example.service`).</li>
                        <li>Write clean code that follows Java conventions, and include Javadoc comments for public methods.</li>
                        <li>If it's a web application, provide a link to a live demo if possible.</li>
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
                Java is a powerful and vast language that opens doors to many stable and high-paying careers. This roadmap is your guide, but true mastery comes from building, experimenting, and consistently solving problems. Stay curious, be persistent, and enjoy the process of becoming a proficient Java developer. Good luck!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
