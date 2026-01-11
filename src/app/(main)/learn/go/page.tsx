
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
        title: "Beginner Stage: Go Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to Go",
                why: "Understand Go's design philosophy: simplicity, concurrency, and performance. Learn why it's popular for backend services, cloud computing, and DevOps tools.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "A Tour of Go", url: "https://go.dev/tour/welcome/1" },
                    { name: "Go Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=un6ZyFkqFKo" },
                ],
                practice: "Install Go and set up your workspace. Write and run a 'Hello, World!' program.",
            },
            {
                what: "Variables, Data Types, and Packages",
                why: "To learn the basic building blocks of any Go program.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "Go by Example: Variables", url: "https://gobyexample.com/variables" },
                    { name: "Go by Example: Basic Types", url: "https://gobyexample.com/values" },
                ],
                practice: "Declare variables of different types (int, float64, string, bool) and print them using the `fmt` package.",
            },
            {
                what: "Control Flow (If/Else, Switch, Loops)",
                why: "To make decisions and repeat actions in your code.",
                time: "1 Week",
                prereqs: "Variables",
                resources: [
                    { name: "Go by Example: If/Else", url: "https://gobyexample.com/if-else" },
                    { name: "Go by Example: For", url: "https://gobyexample.com/for" },
                ],
                practice: "Write a program that prints numbers from 1 to 100, but for multiples of 3 print 'Fizz', for 5 print 'Buzz', and for both print 'FizzBuzz'.",
            },
            {
                what: "Collections: Arrays, Slices, and Maps",
                why: "To store and manage collections of data. Slices are Go's powerful and flexible take on dynamic arrays.",
                time: "1-2 Weeks",
                prereqs: "Control Flow",
                resources: [
                    { name: "Go by Example: Slices", url: "https://gobyexample.com/slices" },
                    { name: "Go by Example: Maps", url: "https://gobyexample.com/maps" },
                ],
                practice: "Create a slice of strings. Use a `for...range` loop to iterate over it and print each item. Create a map to store user names and ages.",
            },
            {
                what: "Functions",
                why: "To organize your code into reusable blocks. Go supports multiple return values, which is a key feature.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Go by Example: Functions", url: "https://gobyexample.com/functions" },
                    { name: "Go by Example: Multiple Return Values", url: "https://gobyexample.com/multiple-return-values" },
                ],
                practice: "Write a function that takes two integers and returns both their sum and their product.",
            },
            {
                what: "Structs and Pointers",
                why: "To create your own custom data types by grouping fields together, and to understand how to share data without copying it.",
                time: "1 Week",
                prereqs: "Data Types",
                resources: [
                    { name: "Go by Example: Structs", url: "https://gobyexample.com/structs" },
                    { name: "Go by Example: Pointers", url: "https://gobyexample.com/pointers" },
                ],
                practice: "Define a `Person` struct with `name` and `age` fields. Write a function that takes a pointer to a `Person` struct and increments their age.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Concurrency and Interfaces",
        level: "Intermediate",
        steps: [
            {
                what: "Methods and Interfaces",
                why: "To define behavior for your structs and to create flexible, decoupled code by defining contracts that different types can implement.",
                time: "1-2 Weeks",
                prereqs: "Structs",
                resources: [
                    { name: "Go by Example: Methods", url: "https://gobyexample.com/methods" },
                    { name: "Go by Example: Interfaces", url: "https://gobyexample.com/interfaces" },
                ],
                practice: "Create a `Shape` interface with an `area()` method. Implement the `Shape` interface for `Circle` and `Rectangle` structs.",
            },
            {
                what: "Error Handling",
                why: "Go has a unique and explicit approach to error handling by returning `error` values from functions, which makes code more robust.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Go by Example: Errors", url: "https://gobyexample.com/errors" },
                    { name: "Error handling in Go (Official Blog)", url: "https://go.dev/blog/error-handling-and-go" },
                ],
                practice: "Write a function that divides two numbers but returns an error if the denominator is zero. Call this function and check the error before printing the result.",
            },
            {
                what: "Goroutines",
                why: "This is Go's killer feature for concurrency. Goroutines are lightweight threads managed by the Go runtime, making it easy to run functions concurrently.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Go by Example: Goroutines", url: "https://gobyexample.com/goroutines" },
                ],
                practice: "Write a program that launches several goroutines, each printing a message. Observe how their execution is interleaved.",
            },
            {
                what: "Channels",
                why: "Channels are the primary way to communicate between goroutines, allowing them to safely send and receive data without explicit locks.",
                time: "1-2 Weeks",
                prereqs: "Goroutines",
                resources: [
                    { name: "Go by Example: Channels", url: "https://gobyexample.com/channels" },
                    { name: "Go Concurrency Patterns (Official Blog)", url: "https://go.dev/blog/pipelines" },
                ],
                practice: "Create a program where one goroutine generates numbers and sends them over a channel, and another goroutine receives and prints them.",
            },
            {
                what: "Testing",
                why: "Go has a built-in testing framework that makes it simple to write and run unit tests for your code.",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Go by Example: Testing", url: "https://gobyexample.com/testing-and-benchmarking" },
                ],
                practice: "Write a unit test for the function that calculates the sum of two numbers.",
            },
            {
                what: "Building a Simple Web Server",
                why: "To apply your knowledge to a real-world problem by building a basic HTTP server using Go's standard library (`net/http`).",
                time: "1 Week",
                prereqs: "Functions",
                resources: [
                    { name: "Writing Web Applications (Official)", url: "https://go.dev/doc/articles/wiki/" },
                ],
                practice: "Create a simple web server that listens on port 8080 and responds with 'Hello, Web!' for all requests.",
            },
        ],
    },
    {
        title: "Advanced Stage: Building Production Systems",
        level: "Advanced",
        steps: [
            {
                what: "Advanced Concurrency Patterns",
                why: "To build more complex and robust concurrent systems using patterns like worker pools, rate limiting, and cancellation.",
                time: "1-2 Weeks",
                prereqs: "Channels",
                resources: [
                    { name: "Go by Example: Worker Pools", url: "https://gobyexample.com/worker-pools" },
                    { name: "Go by Example: Rate Limiting", url: "https://gobyexample.com/rate-limiting" },
                ],
                practice: "Implement a worker pool to process a list of jobs concurrently.",
            },
            {
                what: "Context",
                why: "The `context` package is crucial for managing cancellation, deadlines, and request-scoped values across API boundaries and between goroutines.",
                time: "1 Week",
                prereqs: "Concurrency",
                resources: [
                    { name: "Go Concurrency Patterns: Context (Official Blog)", url: "https://go.dev/blog/context" },
                ],
                practice: "Modify a long-running function to accept a `context.Context` and listen for a cancellation signal to stop its work early.",
            },
            {
                what: "Web Frameworks and Routers",
                why: "While the standard library is powerful, frameworks like Gin or routers like chi can simplify building complex REST APIs.",
                time: "1 Week",
                prereqs: "Web Servers",
                resources: [
                    { name: "Gin Web Framework", url: "https://gin-gonic.com/docs/" },
                    { name: "Chi Router", url: "https://github.com/go-chi/chi" },
                ],
                practice: "Rebuild your simple web server using Gin, creating separate handlers for different routes.",
            },
            {
                what: "Interacting with Databases",
                why: "To store and retrieve data from SQL databases in your Go applications.",
                time: "1-2 Weeks",
                prereqs: "SQL Basics",
                resources: [
                    { name: "Accessing a relational database (Official)", url: "https://go.dev/doc/tutorial/database-access" },
                ],
                practice: "Write a Go application that connects to a local SQLite database, inserts a record, and then reads it back.",
            },
            {
                what: "Building and Deploying",
                why: "To learn how to cross-compile Go binaries for different operating systems and deploy your applications.",
                time: "1 Week",
                prereqs: "Command Line",
                resources: [
                    { name: "Go Command Tutorial", url: "https://go.dev/doc/tutorial/create-module" },
                    { name: "Build and Deploy a Go app with Docker", url: "https://docs.docker.com/language/golang/build-images/" },
                ],
                practice: "Build a Linux executable of your web server on your local machine. Then, write a Dockerfile to containerize it.",
            },
            {
                what: "gRPC",
                why: "To learn a high-performance RPC (Remote Procedure Call) framework that is a popular alternative to REST for service-to-service communication.",
                time: "1 Week",
                prereqs: "Protocol Buffers",
                resources: [
                    { name: "gRPC Basics - Go (Official)", url: "https://grpc.io/docs/languages/go/basics/" },
                ],
                practice: "Create a simple 'Greeter' service using gRPC with a client and server.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "CLI To-Do List", teaches: "Structs, slices, functions, and basic command-line argument parsing.", tech: "Go, os package" },
    { level: "Beginner", title: "Simple Web Scraper", teaches: "Making HTTP requests, parsing HTML (using a package like `goquery`).", tech: "Go, net/http, goquery" },
    { level: "Beginner", title: "URL Checker", teaches: "Goroutines, channels, and making HTTP requests concurrently.", tech: "Go, Goroutines, Channels" },
    { level: "Intermediate", title: "REST API for a Blog", teaches: "Building a web server, routing, JSON handling, and database interaction.", tech: "Go, Gin/Chi, database/sql" },
    { level: "Intermediate", title: "Load Balancer", teaches: "Advanced networking, reverse proxies, and concurrency.", tech: "Go, net/http, net/http/httputil" },
    { level: "Intermediate", title: "Distributed Key-Value Store", teaches: "Concurrency, networking (TCP), and data synchronization.", tech: "Go" },
    { level: "Intermediate", title: "Real-time Chat Server", teaches: "WebSockets, concurrency, and managing client connections.", tech: "Go, Gorilla WebSocket" },
    { level: "Advanced", title: "gRPC Microservice", teaches: "gRPC, Protocol Buffers, and inter-service communication.", tech: "Go, gRPC" },
    { level: "Advanced", title: "A Custom Build Tool", teaches: "File system operations, command execution, and dependency management.", tech: "Go, os/exec, io/ioutil" },
    { level: "Advanced", title: "A Blockchain Implementation", teaches: "Cryptography, data structures, P2P networking, and concurrency.", tech: "Go" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you productive with Go's core features.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Interfaces, Goroutines, and Channels from the Intermediate Stage.",
            "Days 21-30: Build the 'URL Checker' and 'Simple Web Server' projects.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in Go and its concurrent programming model.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Build the 'REST API for a Blog' project, including database integration.",
            "Days 36-50: Learn about testing, context, and web frameworks.",
            "Days 51-60: Containerize and deploy your blog API.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and readiness for building production systems.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on concurrency.",
            "Days 31-60: Cover the Advanced Stage, building a gRPC microservice and a more complex concurrent application.",
            "Days 61-75: Contribute to an open-source Go project or build an advanced project from the list.",
            "Days 76-90: Focus on performance tuning, learning Go's internals, and preparing for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain what a goroutine is and how it differs from a traditional thread.",
    "What are channels used for? Explain buffered vs. unbuffered channels.",
    "What is the `select` statement and how is it used?",
    "Explain Go's error handling philosophy.",
    "What is the difference between a slice and an array?",
    "What is an interface in Go? How does it enable polymorphism?",
    "What does `defer` do?",
    "Explain the difference between `new()` and `make()`.",
    "What is the `context` package used for?",
    "How does the Go garbage collector work at a high level?",
];

const codingQuestions = [
    { question: "Implement a worker pool using goroutines and channels.", topic: "Concurrency" },
    { question: "Given a slice of integers, find the two that add up to a specific target.", topic: "Slices/Maps" },
    { question: "Write a function that concurrently fetches multiple URLs and returns the first one to respond.", topic: "Concurrency" },
];

const mcqs = [
    { question: "How do you start a new concurrent process in Go?", options: ["thread.start()", "go myFunction()", "new goroutine()", "async myFunction()"], answer: "go myFunction()" },
    { question: "Which of the following is the idiomatic way to handle errors in Go?", options: ["try/catch blocks", "Returning an error value alongside the result", "Throwing exceptions", "Using assert"], answer: "Returning an error value alongside the result" },
    { question: "Which built-in function is used to get the number of elements in a slice or map?", options: ["size()", "count()", "len()", "length()"], answer: "len()" },
];

const mistakes = [
    "Not checking for errors returned from functions.",
    "Communicating between goroutines by sharing memory instead of sharing data via channels.",
    "Creating race conditions by accessing shared data from multiple goroutines without synchronization (e.g., mutexes).",
    "Forgetting to close channels, which can lead to deadlocks if goroutines are waiting to receive.",
    "Using pointers unnecessarily when passing a copy of a struct would be simpler and safer.",
    "Confusing `nil` slices with empty slices.",
    "Ignoring the `context` package for handling cancellation in long-running operations.",
    "Not using `go fmt` to automatically format code.",
    "Creating very large stacks by passing large structs by value instead of by pointer.",
    "Not running tests with the `-race` flag to detect race conditions."
];

export default function GoRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Go (Golang) Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Go, the simple, reliable, and efficient language for building modern cloud-native applications.
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
                <CardDescription>Key topics, questions, and resume tips to land a Go developer job.</CardDescription>
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
                        {['Go', 'Golang', 'Concurrency', 'Goroutines', 'Channels', 'Microservices', 'REST API', 'gRPC', 'Docker', 'Kubernetes', 'Cloud'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, features, and setup/run instructions.</li>
                        <li>Include build commands and usage examples.</li>
                        <li>Ensure your code is well-structured using Go's package conventions.</li>
                        <li>Comment on non-obvious parts of your code and explain your concurrency strategy if applicable.</li>
                        <li>Include unit tests and show the test coverage if possible.</li>
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
                Go offers a unique combination of performance and simplicity that makes it a joy to work with. This roadmap will guide you, but true understanding comes from building concurrent programs and thinking in terms of channels. Embrace the simplicity, and happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
