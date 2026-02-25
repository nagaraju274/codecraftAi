
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
    title: "Beginner Stage: Core Syntax & Matrix Math",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & CLI Setup",
        why: "To set up the GNU Octave environment and understand the difference between the GUI and the Command Line Interface (CLI).",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "GNU Octave Official Download", url: "https://www.gnu.org/software/octave/download" },
          { name: "Octave for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-octave-intro" },
        ],
        practice: "Install Octave. Use the command window as a basic calculator. Run your first script 'hello.m'.",
      },
      {
        what: "Variables & Data Types",
        why: "To store and manage information. Octave is dynamically typed but primarily treats everything as a double-precision matrix.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Octave Types & Variables", url: "https://docs.octave.org/v9.2.0/Data-Types.html" },
        ],
        practice: "Declare variables for physical constants. Use 'whos' to inspect your workspace memory.",
      },
      {
        what: "Matrices & Vectors (The Core)",
        why: "Octave stands for 'Matrix Laboratory' logic. You must master 1-based indexing, the colon operator (:), and matrix creation.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Matrix Manipulation in Octave", url: "https://en.wikibooks.org/wiki/Octave_Programming_Tutorial/Matrices_and_vectors" },
        ],
        practice: "Create a 4x4 magic square. Extract the 2nd row and the last column using indexing.",
      },
      {
        what: "Array vs. Matrix Operations",
        why: "Crucial for preventing logic errors. Learn the difference between '*' (matrix product) and '.*' (element-wise product).",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Arithmetic Ops in Octave", url: "https://docs.octave.org/v9.2.0/Arithmetic-Ops.html" },
        ],
        practice: "Take two 3x3 matrices and perform both matrix and element-wise multiplication to see the difference.",
      },
      {
        what: "Basic 2D Plotting",
        why: "Visualization is the primary use of Octave. Learn to use 'plot', 'title', 'xlabel', and 'legend'.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Plotting in Octave Tutorial", url: "https://docs.octave.org/v9.2.0/Two_002dDimensional-Plots.html" },
        ],
        practice: "Plot a Sine wave and a Cosine wave on the same axis with different colors.",
      },
      {
        what: "Control Flow: If, Switch & Loops",
        why: "To add logic and iteration. While loops are flexible, but 'for' loops are the standard for matrix iteration.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Control Structures Guide", url: "https://docs.octave.org/v9.2.0/Statements.html" },
        ],
        practice: "Write a script that iterates through a vector and replaces all negative numbers with zero.",
      },
      {
        what: "Functions & Script Files",
        why: "To write reusable and modular code. Functions in Octave should generally match their filename.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Writing Functions in Octave", url: "https://docs.octave.org/v9.2.0/Functions-and-Scripts.html" },
        ],
        practice: "Create a function 'calc_resistance(v, i)' that returns the resistance using Ohm's Law.",
      },
      {
        what: "Data I/O (CSV, Excel, MAT)",
        why: "Real analysis starts with importing data. Learn 'load', 'save', 'csvread', and 'csvwrite'.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Input and Output in Octave", url: "https://docs.octave.org/v9.2.0/Input-and-Output.html" },
        ],
        practice: "Import a CSV of sensor data and calculate the mean and standard deviation.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Toolboxes & Engineering Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Vectorization (Performance)",
        why: "The #1 rule of Octave performance. Replacing loops with vectorized operations can make code 100x faster.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Vectorization Tips", url: "https://wiki.octave.org/Vectorization_guide" },
        ],
        practice: "Refactor a nested 'for' loop calculation into a single-line vectorized matrix operation.",
      },
      {
        what: "Linear Algebra & Systems",
        why: "To solve Ax = B systems. Master matrix inversion, LU decomposition, and eigenvalues.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Linear Algebra in Octave", url: "https://docs.octave.org/v9.2.0/Linear-Algebra.html" },
        ],
        practice: "Solve a system of 4 linear equations using the backslash operator (\\).",
      },
      {
        what: "Signal Processing Basics",
        why: "Essential for engineering. Learn about FFT (Fast Fourier Transform), convolution, and filtering.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Signal Processing Package", url: "https://octave.sourceforge.io/signal/" },
        ],
        practice: "Perform an FFT on a noisy audio signal and identify the primary frequencies.",
      },
      {
        what: "Octave Forge: Packages",
        why: "To extend Octave's capabilities. Learn to use 'pkg load' for Signal, Image, and Control toolboxes.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Octave Forge Home", url: "https://octave.sourceforge.io/packages.php" },
        ],
        practice: "Install and load the 'image' package to perform an edge detection on a photo.",
      },
      {
        what: "Polynomials & Interpolation",
        why: "To fit curves to experimental data points and predict values between them.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Polynomials in Octave", url: "https://docs.octave.org/v9.2.0/Polynomial-Manipulations.html" },
        ],
        practice: "Use 'polyfit' to find a 2nd degree curve that matches a set of noisy data points.",
      },
      {
        what: "Structures & Cell Arrays",
        why: "To store heterogeneous data (e.g. strings and numbers in the same container).",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Cell Arrays Explained", url: "https://docs.octave.org/v9.2.0/Cell-Arrays.html" },
        ],
        practice: "Build a database of students where each entry is a struct containing a name and an array of grades.",
      },
      {
        what: "Debugging & Profiling",
        why: "To find logic bugs and identify slow sections of code using 'dbstop' and 'profile'.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging Octave Code", url: "https://docs.octave.org/v9.2.0/Debugging.html" },
        ],
        practice: "Use the profiler to find why a large matrix calculation is taking too long.",
      },
      {
        what: "Numerical Integration & ODEs",
        why: "To solve physics and calculus problems numerically using 'quad' and 'lsode'.",
        time: "1 Week",
        prereqs: "Calculus Basics",
        resources: [
          { name: "Solving Differential Equations", url: "https://docs.octave.org/v9.2.0/Differential-Equations.html" },
        ],
        practice: "Solve the differential equation for a simple pendulum and plot its swing over time.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Deployment",
    level: "Advanced",
    steps: [
      {
        what: "Control Systems Toolbox",
        why: "For automation and feedback loop analysis. Learn transfer functions, step responses, and Bode plots.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Control Systems Package", url: "https://octave.sourceforge.io/control/" },
        ],
        practice: "Design a PID controller for a motor and analyze its stability using a root locus plot.",
      },
      {
        what: "GUI Development (Qt/ZMQ)",
        why: "To build interactive dashboards for your tools using internal and external GUI libraries.",
        time: "2 Weeks",
        prereqs: "Step 7",
        resources: [
          { name: "Octave UI Programming", url: "https://docs.octave.org/v9.2.0/UI-Elements.html" },
        ],
        practice: "Build a GUI with sliders that adjust the frequency of a real-time wave plot.",
      },
      {
        what: "C++ Integration (OCT Files)",
        why: "For maximum performance. Write performance-critical loops in C++ and call them from Octave.",
        time: "2 Weeks",
        prereqs: "C++ Basics",
        resources: [
          { name: "External C++ API", url: "https://docs.octave.org/v9.2.0/External-Code-Interface.html" },
        ],
        practice: "Write a C++ extension that performs a fast image convolution and use it in Octave.",
      },
      {
        what: "Optimization (fminunc/fmincon)",
        why: "To solve complex engineering optimization problems, like minimizing cost or weight.",
        time: "1 Week",
        prereqs: "Calculus",
        resources: [
          { name: "Optimization in Octave", url: "https://docs.octave.org/v9.2.0/Optimization.html" },
        ],
        practice: "Find the dimensions of a box that minimize surface area for a fixed volume.",
      },
      {
        what: "AI & Machine Learning basics",
        why: "Octave is the original language for the world's most famous ML course (Andrew Ng's).",
        time: "2 Weeks",
        prereqs: "Linear Algebra",
        resources: [
          { name: "Machine Learning with Octave (Classic)", url: "https://www.coursera.org/learn/machine-learning" },
        ],
        practice: "Implement Gradient Descent from scratch to solve a linear regression problem.",
      },
      {
        what: "Parallel Computing (Multicore)",
        why: "To speed up heavy simulations by utilizing all CPU cores.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Parallel Package", url: "https://octave.sourceforge.io/parallel/" },
        ],
        practice: "Distribute a large Monte Carlo simulation across 4 CPU cores using 'parcellfun'.",
      },
      {
        what: "Financial Analytics",
        why: "Octave is used in finance for risk modeling and time-series forecasting.",
        time: "1 Week",
        prereqs: "Stats Stage",
        resources: [
          { name: "Financial Package", url: "https://octave.sourceforge.io/financial/" },
        ],
        practice: "Calculate the Black-Scholes option price for a stock.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: Signal processing, UI, Data, and System Analysis.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a 'Real-time Audio Equalizer' with a GUI that visualizes frequencies and allows live filtering.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Scientific Calculator CLI", teaches: "Input, Math, and Control flow.", tech: "Octave Base" },
  { level: "Beginner", title: "Weather Data Plotter", teaches: "CSV loading, 2D Plotting, and Stats.", tech: "Octave Base" },
  { level: "Beginner", title: "Unit Converter Library", teaches: "Functions, Multi-file organization.", tech: "Octave Base" },
  { level: "Intermediate", title: "Image Edge Detector", teaches: "Matrix logic, 2D Convolution, Image Forge.", tech: "Octave, Image Toolbox" },
  { level: "Intermediate", title: "Digital Guitar Tuner", teaches: "FFT, Signal Processing, Audio I/O.", tech: "Octave, Signal Toolbox" },
  { level: "Intermediate", title: "Population Growth Model", teaches: "ODE Solvers (lsode), Plotting.", tech: "Octave Base" },
  { level: "Intermediate", title: "Student Record Database", teaches: "Cell arrays, Structs, and File I/O.", tech: "Octave Base" },
  { level: "Advanced", title: "Neural Network from Scratch", teaches: "Linear Algebra, Backpropagation, Matrix speed.", tech: "Octave Base" },
  { level: "Advanced", title: "Autonomous Drone Stabilizer", teaches: "Control systems, PID, Simulink-like logic.", tech: "Octave, Control Toolbox" },
  { level: "Advanced", title: "High-Perf C++ Extension", teaches: "OCT files, memory management, C++ interop.", tech: "Octave, C++" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Data Analyst",
    description: "Focus on syntax, matrix operations, and plotting to handle engineering data.",
    schedule: [
      "Days 1-7: Environment, Variables, and Matrix Indexing.",
      "Days 8-15: Plotting, Scripting, and Basic Control Flow.",
      "Days 16-23: Data Import (CSV) and Vectorization.",
      "Days 24-30: Build 2 beginner projects and learn basic Statistics.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering toolboxes, signal processing, and basic modeling.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Signal Processing, Image processing, and ODEs.",
      "Days 41-60: Cell arrays, Structs, and building 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Octave Architect",
    description: "Comprehensive path for professional R&D, AI, and performance tuning roles.",
    schedule: [
      "Days 1-30: Core Language & Matrix fundamentals.",
      "Days 31-60: Professional Toolboxes (Control, Optimization, Signal).",
      "Days 61-90: C++ Extensions, GUI development, AI basics, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Vectorization: Why is it preferred over for-loops in Octave?",
  "Difference between Matrix multiplication (*) and Element-wise (.*).",
  "1-Based Indexing: How does it affect algorithm design?",
  "What is the role of Octave Forge?",
  "Explain the difference between a Script and a Function file.",
  "How do you handle memory management in Octave? (Copy-on-write).",
  "Describe how to call a C++ function from Octave.",
  "What is an 'OCT' file?",
  "How do you perform a Fast Fourier Transform (FFT)?",
  "Explain Logical Indexing and why it is powerful.",
];

const codingQuestions = [
  { question: "Write a one-liner to normalize a matrix (subtract mean, divide by std).", topic: "Vectorization" },
  { question: "Implement a function that returns the Nth Fibonacci number recursively.", topic: "Logic" },
  { question: "Given a noisy signal, how do you plot its frequency spectrum?", topic: "DSP" },
  { question: "Solve a system of 3 equations using the backslash operator.", topic: "Linear Algebra" },
];

const mcqs = [
  { question: "What is the starting index of an Octave array?", options: ["0", "1", "-1", "0 or 1"], answer: "1" },
  { question: "Which command lists all variables in the current workspace?", options: ["ls", "dir", "who", "var"], answer: "who" },
  { question: "Which operator is used for element-wise power?", options: ["^", "**", ".^", ".*"], answer: ".^" },
];

const mistakes = [
  "Using 0-based indexing: Leads to 'out of bounds' errors immediately.",
  "Forgetting the dot operator: Leads to dimension errors in math operations.",
  "Writing Java-style loops: This makes Octave extremely slow.",
  "Not using semi-colons: The console will be flooded with unnecessary output.",
  "Hardcoding paths: Use project-relative paths for portability.",
  "Ignoring Octave Forge: Trying to reinvent complex math from scratch.",
  "Tutorial Hell: Watching videos without typing code into the console.",
  "Not pre-allocating matrices: Leads to slow execution and memory fragmentation.",
  "Ignoring compiler warnings: They usually hint at type or dimension issues.",
  "Failing to document function signatures correctly.",
];

export default function OctaveRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <FlaskConical className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Octave Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the most powerful open-source tool for numerical computation. From matrix math and signal processing to advanced AI modeling and C++ integration.
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
              <CardDescription>Master the foundations and progress to the {stage.level} level.</CardDescription>
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
            <CardDescription>Apply your knowledge with these 10 hands-on projects designed for your GitHub portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream R&D or scientific role.</CardDescription>
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
                    {['Octave', 'MATLAB Compatible', 'Numerical Analysis', 'Signal Processing', 'Linear Algebra', 'Vectorization', 'Simulink Logic', 'FFT', 'Optimization', 'C++ Extensions', 'Image Processing', 'Monte Carlo'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Numerical Stability' and 'Complexity'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality plots and data visualizations in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cross-functional skills (e.g. 'Optimized algorithm runtime by 80% using vectorization').</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Mathematical Soul</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Octave is more than just a tool; it's a bridge to understanding the physical and mathematical laws of the universe. It rewards the precise and the curious. Stay consistent, read the manual (and the Octave Forge docs!), and remember: The most advanced rockets and medical devices were simulated using the foundations you're mastering today. Your numerical journey starts now!
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
