
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
  LineChart,
  Table,
  Microscope,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: MATLAB Core & Linear Algebra",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & Desktop Environment",
        why: "To understand the MATLAB interface (Command Window, Workspace, Current Folder) and the role of .m files (Scripts vs. Functions).",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "MATLAB Onramp (Official Free Course)", url: "https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted" },
          { name: "MATLAB Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=T_test_matlab_intro" },
        ],
        practice: "Open MATLAB. Use the Command Window as a calculator. Create and save your first script 'hello_world.m'.",
      },
      {
        what: "Variables & Data Types",
        why: "Everything in MATLAB is a Matrix. Understanding numeric types (double, int), characters, and strings is essential.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "MATLAB Variables & Types", url: "https://www.mathworks.com/help/matlab/data-types.html" },
        ],
        practice: "Declare variables for physical constants (G, speed of light). Use 'whos' to inspect memory usage.",
      },
      {
        what: "Matrices & Arrays (The Soul of MATLAB)",
        why: "To master the language's core strength. Learn creation, indexing (1-based!), and the colon operator (:).",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Matrix Indexing in MATLAB", url: "https://www.mathworks.com/company/newsletters/articles/matrix-indexing-in-matlab.html" },
        ],
        practice: "Create a 5x5 identity matrix. Extract the 3rd row and all columns except the first.",
      },
      {
        what: "Array Operations vs. Matrix Operations",
        why: "Crucial for avoiding logic errors. Understanding '.*' (element-wise) vs '*' (matrix multiplication) is vital.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Array vs. Matrix Operations", url: "https://www.mathworks.com/help/matlab/matlab_prog/array-vs-matrix-operations.html" },
        ],
        practice: "Square every element in a 3x3 matrix using the dot operator (.^2).",
      },
      {
        what: "Basic 2D Plotting (plot, xlabel, ylabel)",
        why: "Visualization is the primary use case for MATLAB. Learn to generate and label graphs.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Basic Plotting Tutorial", url: "https://www.mathworks.com/help/matlab/learn_matlab/plots.html" },
        ],
        practice: "Plot a Sine wave from 0 to 2π. Add a title and axis labels.",
      },
      {
        what: "Control Flow: If, Switch & Loops",
        why: "To add logic and repetition. While loops are common, 'for' loops are used for iteration across matrices.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "MATLAB Control Flow", url: "https://www.mathworks.com/help/matlab/control-flow.html" },
        ],
        practice: "Write a loop that prints only the odd numbers in a randomly generated 10-element vector.",
      },
      {
        what: "User-Defined Functions",
        why: "To modularize code. Functions in MATLAB must match their filename and handle input/output parameters clearly.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Functions in MATLAB", url: "https://www.mathworks.com/help/matlab/functions.html" },
        ],
        practice: "Create a function 'calculate_bmi(height, weight)' that returns the BMI value.",
      },
      {
        what: "Working with Data Files (CSV, Excel)",
        why: "Real analysis starts with importing data. Learn 'readtable', 'writematrix', and the Import Wizard.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Importing Data into MATLAB", url: "https://www.mathworks.com/help/matlab/import_export/ways-to-import-data.html" },
        ],
        practice: "Import a CSV file of weather data and calculate the average temperature.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Toolboxes & Engineering Math",
    level: "Intermediate",
    steps: [
      {
        what: "Vectorization (Performance Optimization)",
        why: "To write high-performance code. In MATLAB, replacing loops with vectorized array operations is 10-100x faster.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Vectorization Guide", url: "https://www.mathworks.com/help/matlab/matlab_prog/vectorization.html" },
        ],
        practice: "Take a script with a nested loop and refactor it to use purely vectorized operations.",
      },
      {
        what: "Linear Algebra & Solving Systems",
        why: "MATLAB stands for MATrix LABoratory. Solve Ax=B using the backslash (\) operator.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Linear Algebra in MATLAB", url: "https://www.mathworks.com/help/matlab/linear-algebra.html" },
        ],
        practice: "Solve a system of 3 linear equations using matrix inversion and the backslash operator. Compare the accuracy.",
      },
      {
        what: "Signal Processing Basics",
        why: "A massive field for MATLAB. Learn FFT (Fast Fourier Transform) and basic filtering.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Signal Processing Onramp", url: "https://matlabacademy.mathworks.com/details/signal-processing-onramp/signal" },
        ],
        practice: "Generate a noisy signal and use a low-pass filter to clean it.",
      },
      {
        what: "Introduction to Simulink",
        why: "Simulink is the block-diagram environment for multi-domain simulation and Model-Based Design.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Simulink Onramp", url: "https://matlabacademy.mathworks.com/details/simulink-onramp/simulink" },
        ],
        practice: "Model a simple mass-spring-damper system and simulate its displacement over time.",
      },
      {
        what: "Data Analysis & Statistics",
        why: "To find trends in engineering data. Master distributions, hypothesis testing, and regression.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Statistics and Machine Learning Toolbox", url: "https://www.mathworks.com/products/statistics.html" },
        ],
        practice: "Perform a linear regression on a dataset and plot the residuals to verify fit.",
      },
      {
        what: "Image Processing Basics",
        why: "To manipulate pixels. Learn 'imread', 'imshow', 'imresize', and edge detection.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Image Processing Onramp", url: "https://matlabacademy.mathworks.com/details/image-processing-onramp/imageprocessing" },
        ],
        practice: "Build a script that converts a colored image to grayscale and identifies all circles in the image.",
      },
      {
        what: "Debugging & Error Analysis",
        why: "To identify logic bugs. Learn to use breakpoints, the 'Step' command, and the Variable Inspector.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging MATLAB Code", url: "https://www.mathworks.com/help/matlab/matlab_prog/debugging-process-and-tools.html" },
        ],
        practice: "Intentionally break a loop and use breakpoints to find where the variable goes out of range.",
      },
      {
        what: "Advanced Plotting: 3D & Surface Plots",
        why: "To visualize complex datasets (e.g. heatmaps, topographic maps). Learn mesh, surf, and slice.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "3D Visualization in MATLAB", url: "https://www.mathworks.com/help/matlab/visualizing-data.html" },
        ],
        practice: "Create a 3D surface plot of the 'peaks' function and customize the colormap.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems, AI & Deployment",
    level: "Advanced",
    steps: [
      {
        what: "App Designer (Building GUIs)",
        why: "To create professional standalone applications with buttons, gauges, and interactive charts.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "App Designer Overview", url: "https://www.mathworks.com/products/matlab/app-designer.html" },
        ],
        practice: "Build a GUI for your 'Calculate BMI' function with a visual gauge for the result.",
      },
      {
        what: "Deep Learning with MATLAB",
        why: "MATLAB makes AI accessible. Learn to build, train, and test neural networks without deep math knowledge.",
        time: "2 Weeks",
        prereqs: "Step 13, Step 14",
        resources: [
          { name: "Deep Learning Onramp", url: "https://matlabacademy.mathworks.com/details/deep-learning-onramp/deeplearning" },
        ],
        practice: "Use a pre-trained network (GoogLeNet) to classify objects from your computer's webcam.",
      },
      {
        what: "Parallel Computing (Multithreading)",
        why: "To speed up heavy simulations. Learn 'parfor' loops and GPU computing basics.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Parallel Computing Toolbox", url: "https://www.mathworks.com/products/parallel-computing.html" },
        ],
        practice: "Benchmark a large matrix calculation using 'for' vs 'parfor'.",
      },
      {
        what: "Hardware Interfacing (Arduino/Raspberry Pi)",
        why: "To connect your code to the physical world for robotics and IoT.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "MATLAB Support for Arduino", url: "https://www.mathworks.com/hardware-support/arduino-matlab.html" },
        ],
        practice: "Read a temperature sensor from an Arduino and plot it in real-time in MATLAB.",
      },
      {
        what: "Symbolic Math Toolbox",
        why: "To solve mathematical equations analytically (exact answers) instead of numerically (approximations).",
        time: "5 Days",
        prereqs: "Calculus",
        resources: [
          { name: "Symbolic Math Basics", url: "https://www.mathworks.com/products/symbolic.html" },
        ],
        practice: "Solve an integral analytically and find the derivative of a complex expression.",
      },
      {
        what: "Object-Oriented Programming (OOP) in MATLAB",
        why: "To build large, maintainable software systems. Essential for professional tool development.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "Object-Oriented Programming Guide", url: "https://www.mathworks.com/help/matlab/object-oriented-programming.html" },
        ],
        practice: "Refactor a sensor management script into a class-based system.",
      },
      {
        what: "MATLAB Coder & Deployment",
        why: "To convert your MATLAB code into C/C++ for embedded devices or standalone executables.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "MATLAB Coder Docs", url: "https://www.mathworks.com/products/matlab-coder.html" },
        ],
        practice: "Generate C code for a simple matrix multiplication function.",
      },
      {
        what: "Final Mastery Project",
        why: "To synthesize all skills: UI, Data, AI, and Simulation into a professional-grade tool.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build an 'Autonomous Drone Flight Simulator' or a 'Real-time Heart Rate Monitor' with a GUI.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Scientific Calculator GUI", teaches: "App Designer, basic math, and callbacks.", tech: "MATLAB App Designer" },
  { level: "Beginner", title: "Weather Station CSV Analyzer", teaches: "Data import, stats, and 2D plotting.", tech: "MATLAB Base" },
  { level: "Beginner", title: "Image Color Filter", teaches: "Matrix indexing and basic image processing.", tech: "MATLAB, Image Processing" },
  { level: "Intermediate", title: "Digital Audio Equalizer", teaches: "Signal processing, filters, and FFT.", tech: "MATLAB, Signal Processing Toolbox" },
  { level: "Intermediate", title: "Simulink PID Controller", teaches: "Control systems, block diagrams, and feedback loops.", tech: "Simulink" },
  { level: "Intermediate", title: "Automated Stock Trend Predictor", teaches: "Regression, financial data fetching, and time-series.", tech: "MATLAB, Stats Toolbox" },
  { level: "Intermediate", title: "Handwritten Digit Recognizer", teaches: "Neural networks and data normalization.", tech: "MATLAB, Deep Learning" },
  { level: "Advanced", title: "Autonomous Vehicle Simulation", teaches: "System design, sensors, and complex logic.", tech: "Simulink, Robotics System Toolbox" },
  { level: "Advanced", title: "Real-time EEG Signal Processor", teaches: "Hardware interfacing, high-speed DSP, and UI.", tech: "MATLAB, Instrument Control" },
  { level: "Advanced", title: "Face Recognition Door Lock", teaches: "Computer vision, deep learning, and Arduino interop.", tech: "MATLAB, Computer Vision, Arduino" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Data Explorer",
    description: "Focus on syntax, matrix operations, and plotting to handle engineering data.",
    schedule: [
      "Days 1-7: Installation, Environment, and Matrix Indexing.",
      "Days 8-15: Basic Plotting, Scripting, and Functions.",
      "Days 16-23: Data Import (CSV/Excel) and Vectorization.",
      "Days 24-30: Build 2 beginner projects and learn basic Debugging.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Dev",
    description: "Balanced path covering Simulink, Signal Processing, and basic AI.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Simulink, DSP, and Statistics mastery.",
      "Days 46-60: Image processing and building 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The MATLAB Architect",
    description: "Comprehensive path for professional R&D, AI, and deployment roles.",
    schedule: [
      "Days 1-30: Core Language & Tooling fundamentals.",
      "Days 31-60: Professional Toolboxes (Control, Optimization, Vision).",
      "Days 61-90: App Designer, Deep Learning, Hardware interop, and final capstone.",
    ]
  }
];

const interviewTopics = [
  "Vectorization: Why is it better than for-loops in MATLAB?",
  "Difference between Array operations (.*) and Matrix operations (*).",
  "How does MATLAB handle memory management? (Copy-on-write).",
  "Explain the role of the '.m', '.mat', and '.fig' file extensions.",
  "How do you resolve a 'Mismatched Dimensions' error?",
  "What is the difference between a Script and a Function?",
  "Explain the purpose of the 'Simulink' environment.",
  "How does 'Logical Indexing' work?",
  "Describe how to pass multiple output arguments from a function.",
  "What are 'Handle Objects' in MATLAB OOP?",
];

const codingQuestions = [
  { question: "Write a one-liner to replace all negative numbers in a matrix with zero.", topic: "Indexing" },
  { question: "Implement a function that returns both the mean and median of a vector without built-ins.", topic: "Logic" },
  { question: "How would you combine two images side-by-side using matrix manipulation?", topic: "Image Processing" },
  { question: "Solve a set of 3 linear equations using the backslash operator.", topic: "Linear Algebra" },
];

const mcqs = [
  { question: "What is the starting index of a MATLAB array?", options: ["0", "1", "-1", "0 or 1"], answer: "1" },
  { question: "Which command clears the command window?", options: ["clear", "clc", "clean", "reset"], answer: "clc" },
  { question: "Which operator is used for element-wise multiplication?", options: ["*", ".*", "x", "^"], answer: ".*" },
];

const mistakes = [
  "Using 0-based indexing: Remember, MATLAB starts counting at 1.",
  "Forgetting the dot operator ('.') for element-wise math, leading to dimension errors.",
  "Using 'clear all' in functions (it slows down performance; use 'clear' or nothing).",
  "Writing long scripts instead of small, reusable functions.",
  "Ignoring Vectorization and using nested for-loops for simple tasks.",
  "Hardcoding paths: Use 'fullfile' for cross-platform compatibility.",
  "Not using semi-colons (;) at the end of lines, cluttering the console.",
  "Tutorial Hell: Watching videos without typing code in the Command Window.",
  "Ignoring the official documentation (F1 is your best friend).",
  "Not pre-allocating large matrices, which leads to massive memory fragmentation.",
];

export default function MatlabRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <LineChart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The MATLAB Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of numerical computing and engineering simulation. From matrix math and data visualization to professional system design with Simulink and Deep Learning.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional MATLAB/Simulink Engineer.</CardDescription>
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
            <CardDescription>Master the topics required to land a role in Engineering R&D, Aerospace, or Automotive industries.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Matrix Challenges</h3>
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
                    {['MATLAB', 'Simulink', 'Vectorization', 'Digital Signal Processing', 'Image Processing', 'Control Systems', 'App Designer', 'Deep Learning', 'Embedded Coder', 'Stateflow', 'Numerical Analysis', 'Linear Algebra'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Table className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Numerical Stability' and 'Performance Tuning'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase Simulink model screenshots and block diagrams in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with hardware-in-the-loop (HIL) testing if applicable.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Simulate the Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            MATLAB is more than just a tool; it's the language of modern engineering. It empowers you to bridge the gap between theoretical math and physical systems. Stay consistent, read the official MathWorks blogs, and remember: The most complex rockets and cars were designed using the foundations you're mastering today. Your engineering journey starts now!
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
