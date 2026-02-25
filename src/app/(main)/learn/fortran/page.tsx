
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
  Infinity as InfinityIcon,
  FlaskConical,
  Microscope,
  Waves,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Syntax & Scientific Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & GFortran Setup",
        why: "To set up the GNU Fortran compiler and understand why Fortran remains the gold standard for numerical weather prediction and physical simulations.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Fortran-lang.org - Getting Started", url: "https://fortran-lang.org/learn/quickstart/" },
          { name: "Install GFortran (Guide)", url: "https://gcc.gnu.org/wiki/GFortranBinaries" },
        ],
        practice: "Install GFortran. Create a 'hello.f90' file and run 'gfortran hello.f90 -o hello && ./hello'.",
      },
      {
        what: "The 'Implicit None' Rule",
        why: "Legacy Fortran assumed types by the first letter of variables (I-N were integers). 'Implicit None' is the mandatory first line of modern Fortran to prevent bugs.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "Why Implicit None?", url: "https://stevelionel.com/drfortran/2012/01/05/doctor-it-hurts-when-i-do-this/" },
        ],
        practice: "Write a script that intentionally fails to compile because a variable was used without declaration.",
      },
      {
        what: "Variables, Constants & Precision",
        why: "In science, precision matters. Learn INTEGER, REAL (Float), COMPLEX, and how to specify bit-size using 'KIND'.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Fortran Types and Kind", url: "https://fortran-lang.org/learn/quickstart/variables/" },
        ],
        practice: "Declare a high-precision constant for the speed of light and use it in a calculation.",
      },
      {
        what: "Control Flow: IF, THEN, ELSE",
        why: "To handle logic branching. Fortran syntax is clean and designed to resemble mathematical notation.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Control Flow in Fortran", url: "https://fortran-lang.org/learn/quickstart/control_flow/" },
        ],
        practice: "Write a program that checks if a chemical reaction is exothermic or endothermic based on energy input.",
      },
      {
        what: "Iterative Logic: The DO Loop",
        why: "Numerical methods require repetition. The 'DO' loop is the workhorse of Fortran, optimized for high-speed calculation.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Loops in Fortran", url: "https://fortran-lang.org/learn/quickstart/control_flow/#loops" },
        ],
        practice: "Write a loop that calculates the sum of the first 100 natural numbers.",
      },
      {
        what: "Arrays & 1-Based Indexing",
        why: "Fortran uses 1-based indexing (like math) and 'Column-Major' order. This is critical for efficient matrix manipulation.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Fortran Arrays Guide", url: "https://fortran-lang.org/learn/quickstart/arrays/" },
        ],
        practice: "Create a 5x5 identity matrix. Extract the 3rd row using slicing syntax (arr(3, :)).",
      },
      {
        what: "Subroutines vs. Functions",
        why: "To modularize code. Functions return a single value; Subroutines perform actions and return multiple values via arguments.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Procedures in Fortran", url: "https://fortran-lang.org/learn/quickstart/procedures/" },
        ],
        practice: "Create a function to calculate gravity and a subroutine to update a particle's position.",
      },
      {
        what: "Formatted I/O (Read & Write)",
        why: "Scientific data needs precise formatting (e.g., exponential notation). Master the 'FORMAT' statement.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Input/Output in Fortran", url: "https://fortran-lang.org/learn/quickstart/io/" },
        ],
        practice: "Print a table of planetary data where columns are perfectly aligned using format descriptors like '(A10, F12.2)'.",
      },
      {
        what: "Modules & Program Structure",
        why: "The 'Module' is the modern way to organize Fortran code, acting as a container for related data and procedures.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Modules and Scoping", url: "https://fortran-lang.org/learn/quickstart/modules/" },
        ],
        practice: "Move your math functions into a 'PhysicsUtils' module and import them into a main program using 'use'.",
      },
      {
        what: "Basic Error Handling (IOSTAT)",
        why: "To handle file errors or input issues without the program crashing during a long simulation.",
        time: "2 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Error Handling in Fortran", url: "https://fortran-lang.org/learn/quickstart/io/#error-handling" },
        ],
        practice: "Write a script that attempts to open a file and prints a friendly message if the file doesn't exist.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Vectorization & Data Management",
    level: "Intermediate",
    steps: [
      {
        what: "Array Slicing & Vectorization",
        why: "The #1 reason Fortran is fast. Operations on whole arrays (A = B + C) are automatically optimized by the compiler.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Array Programming in Fortran", url: "https://fortran-lang.org/learn/quickstart/arrays/#array-syntax" },
        ],
        practice: "Refactor a nested loop matrix addition into a single line of array syntax.",
      },
      {
        what: "Dynamic Memory: Allocatable Arrays",
        why: "To handle datasets that are too large for the stack or whose size is determined at runtime.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Memory Management", url: "https://fortran-lang.org/learn/quickstart/arrays/#allocatable-arrays" },
        ],
        practice: "Write a program that asks for a matrix size, allocates memory, fills it, and correctly deallocates it.",
      },
      {
        what: "Derived Types (Structs)",
        why: "To group heterogeneous data (e.g., a 'FluidCell' containing pressure, density, and temperature).",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Derived Types Guide", url: "https://fortran-lang.org/learn/quickstart/derived_types/" },
        ],
        practice: "Model a 'Star' system with properties like mass, luminosity, and spectral type using derived types.",
      },
      {
        what: "Pointers & Targets",
        why: "Rust-like safety features. Pointers in Fortran must point to 'Targets', reducing common memory bugs found in C.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Fortran Pointers", url: "https://www.tutorialspoint.com/fortran/fortran_pointers.htm" },
        ],
        practice: "Build a simple linked-list node structure using pointers and derived types.",
      },
      {
        what: "Interface Blocks",
        why: "To define how external procedures should be called, ensuring type safety when linking to other files or languages.",
        time: "5 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Interfaces in Fortran", url: "https://fortran-lang.org/learn/quickstart/procedures/#interfaces" },
        ],
        practice: "Define an abstract interface for a solver function that takes a real array and returns a real value.",
      },
      {
        what: "Math Libraries: BLAS & LAPACK",
        why: "Don't reinvent the wheel. These industry-standard libraries provide the world's fastest matrix operations.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "LAPACK Official Site", url: "http://www.netlib.org/lapack/" },
          { name: "Using LAPACK with Fortran", url: "https://www.youtube.com/watch?v=look-up-lapack" },
        ],
        practice: "Link your project to LAPACK and use the 'DGESV' routine to solve a system of linear equations.",
      },
      {
        what: "File I/O: Binary & Direct Access",
        why: "To store massive scientific datasets efficiently without the overhead of text files.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Unformatted I/O Guide", url: "https://fortran-lang.org/learn/quickstart/io/#unformatted-io" },
        ],
        practice: "Write 1 million data points to a binary file and read them back using direct access.",
      },
      {
        what: "Modular Programming: Private & Public",
        why: "To encapsulate logic. Encapsulation prevents external code from accidentally modifying internal module data.",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Visibility in Modules", url: "https://fortran-lang.org/learn/quickstart/modules/#visibility" },
        ],
        practice: "Refactor a project so only the primary API functions are 'public', hiding all helper functions.",
      },
      {
        what: "Standard Intrinsics Deep Dive",
        why: "Fortran has hundreds of built-in math and system functions. Mastering these prevents duplicate work.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Intrinsic Procedures List", url: "https://gcc.gnu.org/onlinedocs/gfortran/Intrinsic-Procedures.html" },
        ],
        practice: "Use 'matmul', 'transpose', and 'dot_product' to perform complex matrix calculations.",
      },
      {
        what: "Build Tools: FPM (Fortran Package Manager)",
        why: "Modernizing Fortran. FPM is the cargo/npm equivalent for Fortran, handling dependencies and builds effortlessly.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Fortran Package Manager", url: "https://fpm.fortran-lang.org/" },
        ],
        practice: "Initialize a new project with 'fpm new' and add a dependency from GitHub.",
      },
    ],
  },
  {
    title: "Advanced Stage: HPC & Parallel Systems",
    level: "Advanced",
    steps: [
      {
        what: "Parallelism with Coarrays",
        why: "Native parallel programming built into the language. Coarrays allow data to be shared across multiple CPU cores without MPI.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Coarray Fortran Introduction", url: "https://fortran-lang.org/learn/quickstart/coarrays/" },
        ],
        practice: "Implement a parallel heat diffusion simulation where each 'image' handles a section of the grid.",
      },
      {
        what: "OpenMP for Shared Memory",
        why: "To utilize all cores of a single supercomputer node using compiler directives.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "OpenMP with Fortran", url: "https://www.openmp.org/resources/tutorials/" },
        ],
        practice: "Parallelize a heavy matrix multiplication loop using the '!$omp parallel do' directive.",
      },
      {
        what: "MPI for Distributed Systems",
        why: "To run simulations across thousands of connected computers (clusters). The standard for world-class HPC.",
        time: "2 Weeks",
        prereqs: "Networking Basics",
        resources: [
          { name: "MPI Tutorial (LLNL)", url: "https://hpc.llnl.gov/training/tutorials/introduction-parallel-computing-tutorial" },
        ],
        practice: "Build a 'Ping-Pong' message passing script between two MPI processes.",
      },
      {
        what: "Interfacing with C (ISO_C_BINDING)",
        why: "To use high-speed C/C++ libraries or expose Fortran logic to other languages like Python.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "C Interoperability Guide", url: "https://fortran-lang.org/learn/quickstart/c_interop/" },
        ],
        practice: "Import the C 'printf' function into Fortran and call it correctly.",
      },
      {
        what: "Performance Profiling (Gprof)",
        why: "To identify why a simulation is slow. Optimization requires knowing where the CPU spends its time.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling with Gprof", url: "https://sourceware.org/binutils/docs/gprof/" },
        ],
        practice: "Generate a profile for a complex math project and optimize the slowest procedure.",
      },
      {
        what: "Object-Oriented Fortran (Classes)",
        why: "Learn how modern Fortran handles Type Extension, Methods, and Polymorphism for complex system design.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Object-Oriented Programming in Fortran", url: "https://fortran-lang.org/learn/quickstart/oop/" },
        ],
        practice: "Create a 'Particle' class and extend it into 'ChargedParticle' with extra methods.",
      },
      {
        what: "Abstract Interfaces & Generic Programming",
        why: "To write libraries that work with any precision or type using 'Select Type' and 'Class(*)'.",
        time: "1 Week",
        prereqs: "Step 15, Step 26",
        resources: [
          { name: "Abstract Types & Interfaces", url: "https://j3-fortran.org/doc/standing/links/007.pdf" },
        ],
        practice: "Implement a generic 'List' that can hold any object extending a base 'Node' class.",
      },
      {
        what: "Mixed-Language Programming (Python/F2PY)",
        why: "To build 'Fast Python' modules. F2PY allows you to wrap Fortran routines for use in NumPy and SciPy.",
        time: "1 Week",
        prereqs: "Python Basics",
        resources: [
          { name: "F2PY Users Guide", url: "https://numpy.org/doc/stable/f2py/" },
        ],
        practice: "Wrap a Fortran matrix solver and call it from a Jupyter Notebook.",
      },
      {
        what: "GPU Computing (CUDA Fortran / OpenACC)",
        why: "To offload heavy mathematical kernels to NVIDIA GPUs for massive speed gains.",
        time: "2 Weeks",
        prereqs: "Step 22",
        resources: [
          { name: "Introduction to OpenACC", url: "https://www.openacc.org/resources" },
        ],
        practice: "Use OpenACC directives to run a simple vector addition on a GPU.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Modules, High-Precision, and Parallelism into a professional tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a '3D Fluid Dynamics Solver' or a 'Parallel N-Body Gravitational Sim' using Coarrays.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Atmospheric Unit Converter", teaches: "Precision, I/O, and Modules.", tech: "Fortran 90+" },
  { level: "Beginner", title: "Prime Sieve Generator", teaches: "Loops, Arrays, and Performance.", tech: "GFortran" },
  { level: "Beginner", title: "Trajectory Calculator", teaches: "Physics math and Functions.", tech: "Fortran" },
  { level: "Intermediate", title: "ODE Solver (Runge-Kutta)", teaches: "Numerical methods, Allocatable arrays.", tech: "Fortran, FPM" },
  { level: "Intermediate", title: "Monte Carlo Pi Calculator", teaches: "Random numbers, Statistics.", tech: "Fortran" },
  { level: "Intermediate", title: "Heat Equation Simulation", teaches: "2D Arrays, Finite difference methods.", tech: "Fortran, Plots" },
  { level: "Intermediate", title: "Binary Data Archiver", teaches: "Direct access files, binary streams.", tech: "Fortran" },
  { level: "Advanced", title: "Parallel CFD Solver", teaches: "Coarrays, Ghost cells, Fluid math.", tech: "Fortran, Coarrays" },
  { level: "Advanced", title: "Molecular Dynamics Engine", teaches: "MPI, Domain decomposition, high-perf I/O.", tech: "Fortran, MPI" },
  { level: "Advanced", title: "Linear Solver Wrapper", teaches: "C Interop, LAPACK integration, OOP.", tech: "Fortran, LAPACK, C" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Science Student",
    description: "Focus on syntax and core numerical tasks to solve academic problems.",
    schedule: [
      "Days 1-7: Installation, Variables, Implicit None, and Loops.",
      "Days 8-15: Arrays (1-based), Slicing, and Vectorized operations.",
      "Days 16-23: Functions, Subroutines, and Module structure.",
      "Days 24-30: Build the 'Trajectory Calculator' and learn basic I/O.",
    ]
  },
  {
    title: "60-Day Standard Plan: The R&D Engineer",
    description: "Balanced path covering professional data management and basic parallelism.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Allocatable memory, Derived types, and File I/O.",
      "Days 46-60: OpenMP basics and building 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The HPC Architect",
    description: "Comprehensive path for professional supercomputing and simulation roles.",
    schedule: [
      "Days 1-30: Core Language & Numerical foundations.",
      "Days 31-60: Professional Systems (MPI, Coarrays, Testing).",
      "Days 61-90: GPU Computing, C Interop, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Why is Fortran still used today in science? (Vectorization, Pointer safety).",
  "Explain Column-Major order and why it affects loop nesting.",
  "What is the difference between a Function and a Subroutine?",
  "What does 'Implicit None' do and why is it mandatory?",
  "Explain the difference between 'Intent(in)', 'Intent(out)', and 'Intent(inout)'.",
  "How do Coarrays handle parallelism natively?",
  "What is KIND and how does it relate to portability?",
  "Explain Array Slicing syntax [A:B:C].",
  "What are Allocatable arrays and how do you prevent memory leaks?",
  "Difference between Static and Dynamic linking in scientific libraries.",
];

const codingQuestions = [
  { question: "Write a function to calculate the Dot Product of two vectors using array syntax.", topic: "Vectorization" },
  { question: "Implement a recursive procedure to calculate the Nth term of a sequence.", topic: "Recursion" },
  { question: "Create a module that defines a custom 'Time' type and a method to add seconds.", topic: "OOP/Modules" },
  { question: "Write code to read a CSV of 3 columns and store it in an allocatable matrix.", topic: "File I/O" },
];

const mcqs = [
  { question: "What is the default starting index of a Fortran array?", options: ["0", "1", "-1", "Depends on KIND"], answer: "1" },
  { question: "Which keyword is used to make a module variable accessible to other modules?", options: ["export", "public", "visible", "shared"], answer: "public" },
  { question: "Which file extension is used for free-form Fortran 90+ code?", options: [".f", ".for", ".f90", ".cpp"], answer: ".f90" },
];

const mistakes = [
  "Forgetting 'Implicit None', leading to misspelled variables becoming new 'ghost' variables.",
  "Looping rows before columns: column-major order means inner loops should iterate columns.",
  "Using 0-based indexing (Python habit) which leads to array boundary errors.",
  "Ignoring 'Intent' attributes: Leaving parameters as default can cause side effects.",
  "Tutorial Hell: Reading old F77 tutorials when you should be using F90/2003+ syntax.",
  "Not deallocating arrays: Causing memory leaks in long-running simulations.",
  "Fixed vs Free form confusion: Mixing column-based F77 with modern free-form code.",
  "Using legacy 'GOTO' or labels instead of modern DO and CYCLE.",
  "Manual loops for simple array tasks that 'Array Syntax' can do faster.",
  "Ignoring the compiler flags (-Wall, -Wextra) that find hidden precision issues.",
];

export default function FortranRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Waves className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Fortran Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of the supercomputer. From your first 'DO' loop to building industrial-scale fluid solvers, climate models, and high-performance parallel architectures.
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
              <CardDescription>Master the pillars of the {stage.level} level.</CardDescription>
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
            <CardDescription>Build these 10 projects to showcase your expertise in scientific computing.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream role in R&D or Aerospace.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Numerical Logic Challenges</h3>
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
                    {['Fortran 90+', 'HPC', 'MPI', 'OpenMP', 'Coarrays', 'LAPACK', 'BLAS', 'Scientific Computing', 'Numerical Analysis', 'FPM', 'C Interop', 'GPU Computing'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight the 'Convergence' and 'Accuracy' of your numerical solvers.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase parallel scaling plots (speedup vs. cores) in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Mention experience with specific supercomputing clusters if applicable.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Formula</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Fortran is the unseen heart of modern engineering. From predicting hurricanes to designing fuel-efficient engines, your code will solve the world's hardest mathematical problems. Stay consistent, trust the formula, and remember: The most powerful simulations in history are built on the foundations you're learning today. Your numerical journey starts now!
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
