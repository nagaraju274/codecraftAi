
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
  LineChart,
  Table,
  Database,
  Search,
  Code,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  FileText,
  Layout,
  Monitor,
  History,
  Activity,
  Cpu,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: R Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to R & RStudio Setup",
        why: "R is built for data. RStudio is the industry-standard IDE that makes writing R code, managing data, and viewing plots seamless.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "R Programming for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=_V8eKsto3Ug" },
          { name: "RStudio Desktop Download", url: "https://posit.co/download/rstudio-desktop/" },
        ],
        practice: "Install R and RStudio. Use the console as a calculator. Create a script and run a basic plot like 'plot(1:10)'.",
      },
      {
        what: "Variables & Basic Data Types",
        why: "To store and manipulate information. Understanding Numeric, Character, Logical, and Complex types is the base of every analysis.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "R Data Types (W3Schools)", url: "https://www.w3schools.com/r/r_datatypes.asp" },
        ],
        practice: "Declare variables for a student's record. Use 'class()' to verify the types.",
      },
      {
        what: "Vectors: The Atomic Building Block",
        why: "R is vectorized. Almost every operation in R is applied to a vector of values rather than a single value.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "R Vectors Guide", url: "https://www.tutorialspoint.com/r/r_vectors.htm" },
        ],
        practice: "Create a vector of heights. Perform operations like adding 5 to all heights or finding the mean without using a loop.",
      },
      {
        what: "Data Structures (Lists & Matrices)",
        why: "To manage multi-dimensional data and collections of objects with different types.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "R Matrices and Lists", url: "https://www.statmethods.net/input/datatypes.html" },
        ],
        practice: "Create a 3x3 matrix. Create a list containing a vector, a matrix, and a string.",
      },
      {
        what: "Factors (Categorical Data)",
        why: "R handles categories (like 'Male/Female' or 'High/Medium/Low') specially. Mastering factors is vital for statistical modeling.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Factors in R (swirl)", url: "https://swirlstats.com/help.html" },
        ],
        practice: "Convert a character vector of months into an ordered factor.",
      },
      {
        what: "Data Frames (Introduction)",
        why: "The primary way to store datasets in R. It's essentially a table where columns can have different types.",
        time: "1 Week",
        prereqs: "Steps 3-5",
        resources: [
          { name: "R Data Frames (MDN-style Guide)", url: "https://www.geeksforgeeks.org/r-data-frames/" },
        ],
        practice: "Create a data frame of 5 employees with columns for Name, Salary, and Start Date.",
      },
      {
        what: "Basic Plotting (Base R)",
        why: "To quickly visualize data trends without loading extra libraries.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "R Base Graphics (official)", url: "https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/00Index.html" },
        ],
        practice: "Use 'hist()' and 'boxplot()' on the built-in 'mtcars' dataset.",
      },
      {
        what: "Reading & Writing Data",
        why: "Data science starts with importing data from CSV, Excel, or text files.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Importing Data into R", url: "https://www.datacamp.com/tutorial/importing-data-r" },
        ],
        practice: "Import a CSV file from a URL or your computer and view the first 10 rows using 'head()'.",
      },
      {
        what: "Control Flow & Loops",
        why: "To add logic and repetitive tasks to your scripts, though vectorized operations are preferred in R.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "R Conditionals and Loops", url: "https://www.w3schools.com/r/r_conditions.asp" },
        ],
        practice: "Write a loop that prints the square of every number in a vector if the number is greater than 10.",
      },
      {
        what: "Functions & Scoping",
        why: "To write clean, reusable, and modular code.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "R Functions (Official Docs)", url: "https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Writing-your-own-functions" },
        ],
        practice: "Write a function that takes a numeric vector and returns its standard deviation without using the built-in 'sd()' function.",
      },
    ],
  },
  {
    title: "Intermediate Stage: The Tidyverse & Data Wrangling",
    level: "Intermediate",
    steps: [
      {
        what: "The Tidyverse Ecosystem",
        why: "A collection of R packages designed for data science. It transforms how you write R code to be more readable and powerful.",
        time: "2 Days",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Introduction to Tidyverse", url: "https://www.tidyverse.org/" },
          { name: "R for Data Science (Online Book)", url: "https://r4ds.hadley.nz/" },
        ],
        practice: "Install the tidyverse using 'install.packages(\"tidyverse\")' and load it.",
      },
      {
        what: "Data Manipulation with 'dplyr'",
        why: "The most important library for data wrangling. Master select, filter, mutate, arrange, and summarize.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "dplyr Overview", url: "https://dplyr.tidyverse.org/" },
        ],
        practice: "Take a dataset and find the average salary per department for employees over age 30.",
      },
      {
        what: "Tidy Data with 'tidyr'",
        why: "To reshape data between wide and long formats, making it ready for analysis or plotting.",
        time: "4 Days",
        prereqs: "Step 12",
        resources: [
          { name: "tidyr Cheat Sheet", url: "https://raw.githubusercontent.com/rstudio/cheatsheets/main/tidyr.pdf" },
        ],
        practice: "Use 'pivot_longer()' to transform a wide dataset into a format suitable for ggplot2.",
      },
      {
        what: "Visualizing Data with 'ggplot2'",
        why: "The gold standard for data visualization. Learn the 'Grammar of Graphics'.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "ggplot2 Tutorial", url: "https://ggplot2.tidyverse.org/" },
          { name: "Data Visualization Course (YouTube)", url: "https://www.youtube.com/watch?v=h29g21z0a68" },
        ],
        practice: "Create a scatter plot with a smooth trend line and custom labels.",
      },
      {
        what: "Strings & Dates (stringr, lubridate)",
        why: "Cleaning text and handling time-series data are daily tasks for a data scientist.",
        time: "5 Days",
        prereqs: "Step 11",
        resources: [
          { name: "stringr Guide", url: "https://stringr.tidyverse.org/" },
          { name: "lubridate Guide", url: "https://lubridate.tidyverse.org/" },
        ],
        practice: "Extract year and month from a 'YYYY-MM-DD' character string and calculate the difference between two dates.",
      },
      {
        what: "Functional Programming with 'purrr'",
        why: "To replace complex loops with cleaner, faster list-mapping functions.",
        time: "1 Week",
        prereqs: "Step 10, Step 11",
        resources: [
          { name: "purrr Tutorial", url: "https://purrr.tidyverse.org/" },
        ],
        practice: "Use 'map()' to apply a summary function to multiple columns of a data frame simultaneously.",
      },
      {
        what: "Exploratory Data Analysis (EDA)",
        why: "The systematic process of checking for missing data, outliers, and patterns before modeling.",
        time: "1 Week",
        prereqs: "Steps 12-14",
        resources: [
          { name: "EDA with R", url: "https://r4ds.had.co.nz/exploratory-data-analysis.html" },
        ],
        practice: "Perform a full EDA on the 'diamonds' or 'iris' dataset and document your findings with plots.",
      },
      {
        what: "Statistics with R",
        why: "R was made by statisticians. Learn to perform T-tests, ANOVA, and Chi-square tests with ease.",
        time: "1 Week",
        prereqs: "Basic Stats",
        resources: [
          { name: "Statistics in R (YouTube)", url: "https://www.youtube.com/watch?v=look-up-stats-r" },
        ],
        practice: "Determine if there is a significant difference in MPG between 4-cylinder and 6-cylinder cars in the 'mtcars' dataset.",
      },
      {
        what: "Linear & Logistic Regression",
        why: "The foundation of predictive modeling and machine learning.",
        time: "1 Week",
        prereqs: "Step 18",
        resources: [
          { name: "Linear Modeling in R", url: "https://www.statmethods.net/stats/regression.html" },
        ],
        practice: "Build a linear model to predict car price based on mileage and age. Interpret the p-values and R-squared.",
      },
    ],
  },
  {
    title: "Advanced Stage: Modeling, Apps & Deployment",
    level: "Advanced",
    steps: [
      {
        what: "R Markdown & Quarto (Reporting)",
        why: "To generate dynamic, professional reports in PDF, HTML, or Word that combine code, plots, and text.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Quarto Guide", url: "https://quarto.org/docs/get-started/hello/rstudio.html" },
        ],
        practice: "Create a Quarto document that analyzes a dataset and hide the code in the final HTML output.",
      },
      {
        what: "Shiny: Interactive Web Apps",
        why: "To build interactive dashboards that allow non-programmers to explore your data analysis results.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Shiny Tutorial (Official)", url: "https://shiny.posit.co/r/getstarted/shiny-basics/lesson1/" },
        ],
        practice: "Build a Shiny app where users can select a column from a dataset to see its distribution in a histogram.",
      },
      {
        what: "Connecting to Databases (DBI, dbplyr)",
        why: "Real data is often too large for memory. Learn to query SQL databases directly from R without writing SQL.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "Databases using R", url: "https://db.rstudio.com/" },
        ],
        practice: "Connect to a local SQLite database and use 'dplyr' verbs to manipulate data inside the database.",
      },
      {
        what: "Machine Learning with 'tidymodels'",
        why: "A modern, unified framework for the entire ML lifecycle: preprocessing, fitting, and evaluating models.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "tidymodels Official Site", url: "https://www.tidymodels.org/" },
        ],
        practice: "Build a Random Forest classifier using tidymodels to predict Titanic passenger survival.",
      },
      {
        what: "Performance & Parallel Computing",
        why: "To handle large-scale data by running computations on multiple CPU cores.",
        time: "1 Week",
        prereqs: "Advanced Logic",
        resources: [
          { name: "Parallel Processing in R", url: "https://bookdown.org/rdpeng/rprogmsgs/parallel-processing.html" },
        ],
        practice: "Use the 'parallel' package to speed up a slow bootstrapping simulation.",
      },
      {
        what: "Rcpp: Interop with C++",
        why: "When R is too slow, move critical performance loops to C++ for massive speed gains.",
        time: "1 Week",
        prereqs: "C++ Basics",
        resources: [
          { name: "Rcpp Official Site", url: "https://www.rcpp.org/" },
        ],
        practice: "Write a simple C++ function to calculate Fibonacci numbers and call it from R.",
      },
      {
        what: "Web Scraping & APIs",
        why: "To gather data from the web using 'rvest' or interact with REST APIs using 'httr2'.",
        time: "1 Week",
        prereqs: "HTML Basics",
        resources: [
          { name: "Web Scraping with rvest", url: "https://rvest.tidyverse.org/" },
        ],
        practice: "Scrape a table of stock prices from a financial website and clean the data for analysis.",
      },
      {
        what: "Package Development",
        why: "To share your code with the world or within a company. Learn 'devtools' and 'roxygen2'.",
        time: "2 Weeks",
        prereqs: "Step 10",
        resources: [
          { name: "R Packages (Online Book)", url: "https://r-pkgs.org/" },
        ],
        practice: "Create your own mini R package containing three utility functions and full documentation.",
      },
      {
        what: "Deployment (Shiny Server, Posit Connect)",
        why: "To put your models and dashboards into production for the whole world to use.",
        time: "Ongoing",
        prereqs: "Advanced Stage",
        resources: [
          { name: "ShinyApps.io Deployment", url: "https://www.shinyapps.io/" },
        ],
        practice: "Deploy your first Shiny dashboard to shinyapps.io for free.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Budget Analyzer", teaches: "Reading CSVs, math, basic data frames, and summary stats.", tech: "Base R" },
  { level: "Beginner", title: "Grade Curve Calculator", teaches: "Vectors, functions, and basic histograms.", tech: "Base R" },
  { level: "Beginner", title: "Dice Roll Simulator", teaches: "Randomness, probability, and loops.", tech: "Base R" },
  { level: "Intermediate", title: "COVID-19 Trend Tracker", teaches: "dplyr, ggplot2, and lubridate for time-series.", tech: "Tidyverse" },
  { level: "Intermediate", title: "Movie Recommendation EDA", teaches: "Data cleaning, merging tables, and faceted plots.", tech: "Tidyverse" },
  { level: "Intermediate", title: "Automated Weekly Report", teaches: "Quarto/R Markdown, parameterized reporting.", tech: "Quarto" },
  { level: "Intermediate", title: "Gapminder Data Exploration", teaches: "Complex visualizations and grouping logic.", tech: "ggplot2, dplyr" },
  { level: "Advanced", title: "Interactive Portfolio Dashboard", teaches: "Shiny, reactive programming, and dashboard layout.", tech: "Shiny, bslib" },
  { level: "Advanced", title: "Churn Prediction Model", teaches: "Feature engineering, tidymodels, and ROC/AUC evaluation.", tech: "tidymodels" },
  { level: "Advanced", title: "Twitter/X Sentiment Scraper", teaches: "APIs, string manipulation, and sentiment analysis.", tech: "rtweet, stringr" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Data Explorer",
    description: "Focus on reading, cleaning, and plotting data to be productive in a business setting.",
    schedule: [
      "Days 1-7: R Basics, Vectors, and Data Frames.",
      "Days 8-15: Master dplyr for data cleaning.",
      "Days 16-23: Learn ggplot2 for professional visualizations.",
      "Days 24-30: Build a full EDA project and a Quarto report.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Analyst",
    description: "Balanced path for a solid foundation in statistics and reporting.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Mastering the Tidyverse and basic statistics.",
      "Days 46-60: Learn R Markdown and build 3 intermediate projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Data Scientist",
    description: "Comprehensive path for professional data science and machine learning roles.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals.",
      "Days 31-60: Advanced Modeling, Shiny Apps, and Database Interop.",
      "Days 61-90: tidymodels, Package development, and performance optimization.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between a Vector and a List.",
  "What is the 'Tidy' data format?",
  "How does R handle missing values (NA) in calculations?",
  "What is the difference between 'apply()', 'lapply()', and 'sapply()'?",
  "Explain the components of a ggplot2 plot (Aesthetics, Geoms, Facets).",
  "What are the benefits of using a data frame vs a matrix?",
  "How do you handle a dataset that is too large for memory?",
  "Explain what a 'Closure' is in R.",
  "How do you perform a join in dplyr vs Base R?",
  "What is Reactive programming in the context of Shiny?",
];

const codingQuestions = [
  { question: "Given a data frame, find the percentage of missing values in each column.", topic: "Cleaning" },
  { question: "Merge two data frames by an ID column and handle non-matching cases.", topic: "Wrangling" },
  { question: "Write a function to remove outliers using the IQR method.", topic: "Logic" },
  { question: "Using ggplot2, create a plot showing three variables at once (X, Y, and Color).", topic: "Visuals" },
];

const mcqs = [
  { question: "Which symbol is the assignment operator in R?", options: ["=", "<-", "=>", ":="], answer: "<-" },
  { question: "Which function is used to combine elements into a vector?", options: ["combine()", "v()", "c()", "list()"], answer: "c()" },
  { question: "What is the result of 'typeof(c(1, \"a\"))'?", options: ["double", "list", "character", "mixed"], answer: "character" },
];

const mistakes = [
  "Using '=' instead of '<-' for assignment (it works, but it's not idiomatic).",
  "Using loops (for/while) when a vectorized function (like sum or mean) is available.",
  "Forgetting that R is 1-indexed, not 0-indexed like Python.",
  "Ignoring the 'stringsAsFactors = FALSE' setting in older R versions.",
  "Not using RProjects (.Rproj) to manage working directories.",
  "Copy-pasting data frames instead of using dplyr pipes (%>%).",
  "Ignoring warnings from the console about data type coercion.",
  "Not using ggplot2 for complex visuals, making Base R code unreadable.",
  "Over-complicating list access ($ vs [[ ]]).",
  "Failing to document data cleaning steps in a reproducible way (no script, just console).",
];

export default function RRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <LineChart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The R Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the most powerful language for data science, statistics, and visualization.
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
            <CardDescription>Apply your knowledge with these hands-on data science projects.</CardDescription>
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
                    <Table className="h-3 w-3"/> {p.tech}
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
            <CardDescription>Expert guidance to help you land your dream R developer role.</CardDescription>
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
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Workflow className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['R', 'Tidyverse', 'dplyr', 'ggplot2', 'Quarto', 'Shiny', 'Statistics', 'Regression', 'tidymodels', 'Data Visualization', 'SQL Interop', 'Machine Learning'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layout className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Host your Shiny apps on shinyapps.io.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Publish analysis reports using GitHub Pages or Quarto Pub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use GitHub Gists to share useful snippets of cleaning code.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Let the Data Speak</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            R isn't just a language; it's a window into the truth behind numbers. Mastering it allows you to find stories in spreadsheets and insights in noise. Stay consistent, keep graphing, and always remember: The best data scientist is the one who never stops asking "Why?". Your journey into the heart of data starts today!
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
