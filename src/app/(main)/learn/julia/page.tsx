
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
  LineChart,
  Table,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Syntax & The Julia Mindset",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Julia REPL Setup",
        why: "To understand Julia's 'Just-In-Time' (JIT) compilation and set up the REPL (Read-Eval-Print Loop) environment for instant feedback.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Julia Academy - Intro to Julia", url: "https://juliaacademy.com/p/intro-to-julia" },
          { name: "Julia for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=sE67Bp2_H90" },
        ],
        practice: "Install Julia. Open the REPL. Use '?' for help and ';' for shell mode. Print 'Hello, Scientific World!'.",
      },
      {
        what: "Variables & Basic Types",
        why: "Julia is dynamically typed but has a powerful type system. Understanding Float64, Int64, and Strings is essential.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Julia Documentation: Variables", url: "https://docs.julialang.org/en/v1/manual/variables/" },
        ],
        practice: "Declare variables for physical constants. Use 'typeof()' to inspect how Julia infers types.",
      },
      {
        what: "Arithmetic & Math Functions",
        why: "Julia was built by mathematicians. It supports Unicode symbols (like π or √) and vectorized math out of the box.",
        time: "3 Days",
        prereqs: "Basic Math",
        resources: [
          { name: "Mathematical Operations in Julia", url: "https://docs.julialang.org/en/v1/manual/mathematical-operations/" },
        ],
        practice: "Calculate the roots of a quadratic equation. Use the 'dot' operator (e.g., .^) for element-wise exponentiation.",
      },
      {
        what: "Arrays & 1-Based Indexing",
        why: "Matrices are first-class citizens in Julia. Note: Julia uses 1-based indexing, which is standard in mathematics but different from Python/C.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Julia Arrays Guide", url: "https://docs.julialang.org/en/v1/manual/arrays/" },
        ],
        practice: "Create a 5x5 identity matrix. Extract the 3rd column. Filter values greater than 0.5 from a random vector.",
      },
      {
        what: "Control Flow: If, For, While",
        why: "Logic branching and iteration allow you to build algorithms. Julia's 'for' loops are as fast as C's.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Julia Control Flow", url: "https://docs.julialang.org/en/v1/manual/control-flow/" },
        ],
        practice: "Write a loop that implements the Collatz conjecture for a given input number.",
      },
      {
        what: "Functions & Multiple Dispatch",
        why: "Multiple Dispatch is Julia's most important feature. It allows functions to have different behaviors based on the types of ALL arguments.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "The Power of Multiple Dispatch (YouTube)", url: "https://www.youtube.com/watch?v=kc9HwsxE1OY" },
        ],
        practice: "Define a function 'area' that handles different shapes (circles, squares) using type-specific definitions.",
      },
      {
        what: "The Package Manager (Pkg.jl)",
        why: "To leverage thousands of open-source libraries. Learn 'add', 'update', and 'activate' environments.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Pkg.jl Documentation", url: "https://pkgdocs.julialang.org/v1/getting-started/" },
        ],
        practice: "Create a new project environment. Install the 'Plots' package and 'BenchmarkTools'.",
      },
      {
        what: "Basic Plotting (Plots.jl)",
        why: "Visualization is the primary way to understand scientific results. Learn the GR and Plotly backends.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Plots.jl Tutorial", url: "http://docs.juliaplots.org/latest/tutorial/" },
        ],
        practice: "Plot a Sine and Cosine wave on the same graph with labels, legends, and a custom title.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Data, Performance & Types",
    level: "Intermediate",
    steps: [
      {
        what: "Composite Types: Structs",
        why: "To define your own custom objects. Learn the difference between 'struct' (immutable) and 'mutable struct'.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Types in Julia", url: "https://docs.julialang.org/en/v1/manual/types/" },
        ],
        practice: "Create a 'Satellite' struct with properties like mass, velocity, and position.",
      },
      {
        what: "The Type System & Hierarchies",
        why: "To write fast code, you must understand Abstract vs. Concrete types and how to use type annotations effectively.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Advanced Type System", url: "https://docs.julialang.org/en/v1/manual/types/#Type-Hierarchies" },
        ],
        practice: "Build a hierarchy where 'Bird' and 'Fish' are subtypes of an abstract 'Animal' type.",
      },
      {
        what: "Data Manipulation (DataFrames.jl)",
        why: "DataFrames is the Julia equivalent of Pandas. Master filtering, joining, and aggregating tabular data.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "DataFrames.jl Documentation", url: "https://dataframes.juliadata.org/stable/" },
        ],
        practice: "Load a CSV of stock prices. Calculate the 7-day moving average using DataFramesMeta.jl.",
      },
      {
        what: "Performance: Type Stability",
        why: "The #1 reason Julia is fast. Learn to use '@code_warntype' to find 'Type Instabilities' that slow down your code.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Performance Tips (Official)", url: "https://docs.julialang.org/en/v1/manual/performance-tips/" },
        ],
        practice: "Identify and fix a type instability in a simple calculation function using BenchmarkTools.jl.",
      },
      {
        what: "Metaprogramming & Macros",
        why: "To write code that generates other code. Macros (like @time or @bind) are powerful tools for DSL construction.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Metaprogramming in Julia", url: "https://docs.julialang.org/en/v1/manual/metaprogramming/" },
        ],
        practice: "Write a simple macro that prints the time a block of code takes to execute.",
      },
      {
        what: "Linear Algebra (LinearAlgebra.jl)",
        why: "To perform high-speed matrix decompositions (LU, QR, SVD) and solve linear systems efficiently.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Linear Algebra Module", url: "https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/" },
        ],
        practice: "Solve a system of 100 linear equations. Compare the time taken by inversion vs. backslash operator.",
      },
      {
        what: "Unit Testing (Test.jl)",
        why: "Professional scientific code must be verifiable. Learn '@test', '@testset', and '@test_throws'.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Test.jl Standard Library", url: "https://docs.julialang.org/en/v1/stdlib/Test/" },
        ],
        practice: "Write a test suite for your math library, covering edge cases like division by zero.",
      },
      {
        what: "File I/O & Serialization",
        why: "To store models and large datasets. Learn to use JLD2.jl or BSON.jl for persistent storage.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "JLD2 Documentation", url: "https://juliaio.github.io/JLD2.jl/stable/" },
        ],
        practice: "Save a trained ' satellite' object to a file and reload it in a different session.",
      },
    ],
  },
  {
    title: "Advanced Stage: Parallelism & Deep Learning",
    level: "Advanced",
    steps: [
      {
        what: "Multi-Threading (Threads.@threads)",
        why: "To utilize all cores of a modern CPU for heavy numeric simulations.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Multi-threading in Julia", url: "https://docs.julialang.org/en/v1/manual/multi-threading/" },
        ],
        practice: "Parallelize a Monte Carlo simulation to calculate the value of Pi using 10 million samples.",
      },
      {
        what: "Distributed Computing (Distributed.jl)",
        why: "To run code across a cluster of multiple computers or cloud instances.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Distributed Computing Guide", url: "https://docs.julialang.org/en/v1/manual/distributed-computing/" },
        ],
        practice: "Set up two local Julia worker nodes and distribute a heavy task between them.",
      },
      {
        what: "Deep Learning with Flux.jl",
        why: "Flux is the leading Julia ML library. It's 'pure Julia', meaning you can see the source code of every layer.",
        time: "2 Weeks",
        prereqs: "Step 12, Step 14",
        resources: [
          { name: "Flux.jl Quick Start", url: "https://fluxml.ai/Flux.jl/stable/models/quickstart/" },
        ],
        practice: "Build and train a simple neural network to classify digits from the MNIST dataset.",
      },
      {
        what: "Differential Equations (DiffEq.jl)",
        why: "Julia's killer app. This library is faster and more feature-rich than anything in Python or MATLAB.",
        time: "2 Weeks",
        prereqs: "Calculus, Step 14",
        resources: [
          { name: "DifferentialEquations.jl Tutorial", url: "https://docs.sciml.ai/DiffEqDocs/stable/tutorials/ode_example/" },
        ],
        practice: "Simulate the movement of a pendulum or the growth of a population using an ODE solver.",
      },
      {
        what: "Interfacing with Python & C (PyCall / Ccall)",
        why: "To use existing Python libraries (like Matplotlib or SciPy) or high-perf C code without leaving Julia.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "PyCall Documentation", url: "https://github.com/JuliaPy/PyCall.jl" },
        ],
        practice: "Call the Python 'scipy.optimize' function from within a Julia script.",
      },
      {
        what: "Web Development: Genie.jl",
        why: "To build high-performance web APIs or dashboards for your scientific models.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Genie.jl Framework", url: "https://genieframework.com/docs/" },
        ],
        practice: "Create a REST API that accepts two numbers and returns the result of a complex Julia simulation.",
      },
      {
        what: "Optimization (JuMP.jl)",
        why: "To solve linear, quadratic, and nonlinear optimization problems commonly found in logistics and finance.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "JuMP Quick Start", url: "https://jump.dev/JuMP.jl/stable/tutorials/getting_started/" },
        ],
        practice: "Solve a 'diet problem' (minimizing cost while meeting nutritional goals) using JuMP.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Type systems, performance tuning, parallelism, and domain-specific libraries.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Climate Simulator' or a 'Distributed Financial Risk Engine' with a Genie.jl dashboard.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Atmospheric Unit Converter", teaches: "Multiple Dispatch, Variables, and I/O.", tech: "Julia Base" },
  { level: "Beginner", title: "Prime Sieve Visualizer", teaches: "Loops, Arrays, and Plots.jl.", tech: "Julia, Plots.jl" },
  { level: "Beginner", title: "CLI Grade Calculator", teaches: "Conditionals, Functions, and User Input.", tech: "Julia" },
  { level: "Intermediate", title: "COVID-19 Growth Tracker", teaches: "DataFrames, CSV parsing, and Time-series plots.", tech: "DataFrames.jl, Plots.jl" },
  { level: "Intermediate", title: "Handwritten Digit Recognizer (MLP)", teaches: "Neural networks from scratch, matrix math.", tech: "LinearAlgebra.jl" },
  { level: "Intermediate", title: "Physics-based Falling Ball Sim", teaches: "Structs, Euler integration, and simple UI.", tech: "Julia" },
  { level: "Intermediate", title: "Automated CSV Cleaner", teaches: "Error handling, Regex, and File I/O.", tech: "Julia, CSV.jl" },
  { level: "Advanced", title: "Lorenz Attractor Simulation", teaches: "ODE Solvers, chaotic systems, and high-perf visualization.", tech: "DifferentialEquations.jl, Makie.jl" },
  { level: "Advanced", title: "Distributed Web Scraper", teaches: "Parallelism, Networking, and JSON handling.", tech: "Distributed.jl, HTTP.jl" },
  { level: "Advanced", title: "Stock Price Prediction API", teaches: "Flux.jl (LSTMs), Genie.jl (Web), and deployment.", tech: "Flux.jl, Genie.jl" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Data Explorer",
    description: "Focus on syntax, Multiple Dispatch, and DataFrames to be productive in a research environment.",
    schedule: [
      "Days 1-7: Installation, REPL, and Basic Logic.",
      "Days 8-15: Master Multiple Dispatch and Arrays.",
      "Days 16-23: DataFrames.jl and basic Plotting.",
      "Days 24-30: Build 2 beginner projects and learn simple File I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Scientific Dev",
    description: "Balanced path covering performance tuning, Linear Algebra, and basic ML.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Type Stability, Structs, and Advanced Data Manipulation.",
      "Days 46-60: Linear Algebra, Unit Testing, and build an Intermediate project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Julia Architect",
    description: "Comprehensive path for professional high-performance computing and AI roles.",
    schedule: [
      "Days 1-30: Core Language & Type System fundamentals.",
      "Days 31-60: Parallelism, Metaprogramming, and Stats.",
      "Days 61-90: Flux.jl, DiffEq.jl, Web APIs, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Multiple Dispatch: How does it differ from OOP Overloading?",
  "What is the 'Two-Language Problem' and how does Julia solve it?",
  "Explain Type Stability and why it's critical for performance.",
  "1-Based Indexing: Pros and Cons.",
  "Difference between a Struct and a Mutable Struct.",
  "How does Julia's JIT (Just-In-Time) compilation work?",
  "What is a Macro in Julia? Give an example.",
  "Explain the 'dot' operator for vectorization (e.g. sin.(x)).",
  "How do you handle missing values in DataFrames.jl?",
  "Explain the significance of the 'const' keyword for global variables.",
];

const codingQuestions = [
  { question: "Write a function that calculates the Dot Product of two vectors manually.", topic: "Linear Algebra" },
  { question: "Implement a recursive Fibonacci function and optimize it with memoization.", topic: "Recursion" },
  { question: "Use multiple dispatch to define a function 'add' that handles both Numbers and Strings differently.", topic: "Multiple Dispatch" },
  { question: "Write a one-liner to square every element in a matrix that is greater than 10.", topic: "Vectorization" },
];

const mcqs = [
  { question: "What is the starting index of a Julia array?", options: ["0", "1", "-1", "Depends on the type"], answer: "1" },
  { question: "Which macro is used to check for type stability?", options: ["@time", "@profile", "@code_warntype", "@bench"], answer: "@code_warntype" },
  { question: "What is the primary library for solving differential equations in Julia?", options: ["JuMP.jl", "DifferentialEquations.jl", "Flux.jl", "Optim.jl"], answer: "DifferentialEquations.jl" },
];

const mistakes = [
  "Using 0-based indexing (Python habit) which leads to 'BoundsError'.",
  "Using global variables inside performance-critical loops (kills performance).",
  "Ignoring Type Stability: Using variables that change types (e.g. starting as int, becoming float).",
  "Not using the 'dot' notation for vectorization, writing slow manual loops instead.",
  "Tutorial Hell: Watching videos without typing code into the REPL.",
  "Over-using mutable structs where immutable ones would suffice.",
  "Neglecting the built-in package manager and trying to install libs manually.",
  "Hardcoding paths instead of using the project-relative 'Pkg.activate('.')'.",
  "Forgetting to 'export' functions from custom modules.",
  "Ignoring '@code_warntype' when a function feels unexpectedly slow.",
];

export default function JuliaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <FlaskConical className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Julia Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language that solves the 'Two-Language Problem'. From high-level mathematical syntax to C-level performance, become an expert in the future of scientific computing and AI.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-Data Science / Stats / Math-Oriented">
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Julia Developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Julia role in research or finance.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Coding Challenges</h3>
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
                    {['Julia', 'Multiple Dispatch', 'Type Stability', 'DataFrames.jl', 'Flux.jl', 'DifferentialEquations.jl', 'Pkg.jl', 'Parallel Computing', 'JuMP.jl', 'Scientific Computing', 'Performance Tuning'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Solving the Two-Language Problem'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase benchmark results (using BenchmarkTools.jl) in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with domain-specific solvers (like SciML).</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Unleash the Power of Science</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Julia is more than just a language; it's a tool for discovery. It empowers you to build simulations and models that were previously too slow or too complex. Stay consistent, read the 'Julia Discourse' and 'Slack' communities, and remember: The most advanced science in the world is being coded in the language you're mastering today. Your research journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Science
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
