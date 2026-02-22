
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
  Database,
  Server,
  Layers,
  ArrowLeft,
  ArrowRight,
  Activity,
  Cpu,
  Table,
  FileText,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: SAS Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to SAS & Environment Setup",
        why: "To understand SAS architecture and set up 'SAS OnDemand for Academics', the free cloud-based learning platform.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "SAS Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=look-up-sas-intro" },
          { name: "Access SAS OnDemand for Academics", url: "https://welcome.oda.sas.com/" },
        ],
        practice: "Set up your account, log in to SAS Studio, and run a simple 'proc print' on a built-in dataset like SASHELP.CARS.",
      },
      {
        what: "SAS Program Structure (DATA & PROC)",
        why: "Every SAS program is built from two types of blocks: DATA steps (to manage data) and PROC steps (to analyze data).",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "DATA vs PROC Steps Explained", url: "https://support.sas.com/resources/papers/proceedings12/160-2012.pdf" },
        ],
        practice: "Write a script with a clear separation between a DATA step and a PROC PRINT step.",
      },
      {
        what: "Reading Data (INFILE, INPUT, LIBNAME)",
        why: "To bring data into SAS from external files (CSV, TXT) or create persistent links to data folders using libraries.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Reading Data into SAS", url: "https://www.tutorialspoint.com/sas/sas_reading_data_sets.htm" },
        ],
        practice: "Create a LIBNAME reference to a folder on your cloud drive and read a small CSV file using the INFILE statement.",
      },
      {
        what: "SAS Data Types & Formats",
        why: "SAS has only two data types: Numeric and Character. Understanding formats is vital for displaying dates and currencies correctly.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Formats and Informats in SAS", url: "https://www.lexjansen.com/wuss/2005/tutorials/TUT-Form.pdf" },
        ],
        practice: "Apply the 'DOLLAR10.2' format to a numeric column and 'DATE9.' to a date column.",
      },
      {
        what: "Basic Data Step Logic (If/Then, Where)",
        why: "To filter rows and create new variables based on conditions, which is the core of data cleaning.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Conditional Processing in SAS", url: "https://www.w3schools.blog/sas-if-then-else-statement" },
        ],
        practice: "Create a new dataset that only includes cars with a price greater than 30,000 using a WHERE statement.",
      },
      {
        what: "Sorting & Basic Procedures (PROC SORT, CONTENTS)",
        why: "To organize your data and inspect the metadata (column names, types, labels).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "PROC SORT Documentation", url: "https://support.sas.com/documentation/cdl/en/proc/61895/HTML/default/viewer.htm#a000146840.htm" },
        ],
        practice: "Sort a dataset by 'Make' and 'Model', then run PROC CONTENTS to see the variable properties.",
      },
      {
        what: "Descriptive Statistics (PROC MEANS, FREQ)",
        why: "To quickly calculate sums, averages, and frequencies for categorical and continuous data.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Generating Summary Statistics", url: "https://www.youtube.com/watch?v=sas-means-freq" },
        ],
        practice: "Find the average horsepower of cars by 'Origin' using PROC MEANS with a CLASS statement.",
      },
      {
        what: "The Output Delivery System (ODS)",
        why: "To export your SAS results into professional formats like PDF, Excel, or HTML.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "ODS Basics", url: "https://support.sas.com/rnd/base/ods/template/ods_tutorial.pdf" },
        ],
        practice: "Export your PROC FREQ results to an Excel file using 'ODS EXCEL'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Professional Data Manipulation",
    level: "Intermediate",
    steps: [
      {
        what: "Merging & Joining Datasets",
        why: "To combine data from different sources using the SET and MERGE statements. This is a primary task in real-world projects.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Merging Data Sets in SAS", url: "https://www.lexjansen.com/nesug/nesug01/ps/ps4012.pdf" },
        ],
        practice: "Merge a 'Customer' table with an 'Orders' table using a common 'CustomerID' with PROC SORT and MERGE.",
      },
      {
        what: "SQL in SAS (PROC SQL)",
        why: "Many data tasks are easier in SQL. SAS provides a powerful SQL interface that allows you to join tables and aggregate data easily.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "PROC SQL for Beginners", url: "https://www.youtube.com/watch?v=sas-proc-sql" },
        ],
        practice: "Rewrite your previous MERGE task using a SQL join inside PROC SQL.",
      },
      {
        what: "SAS Macro Variables (%LET)",
        why: "To automate programs by substituting hardcoded values with dynamic variables.",
        time: "4 Days",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Introduction to SAS Macros", url: "https://www.lexjansen.com/pnwsug/2008/IntroMacros.pdf" },
        ],
        practice: "Create a macro variable for a year and use it in a TITLE statement and a WHERE clause.",
      },
      {
        what: "Creating Custom Formats (PROC FORMAT)",
        why: "To bucket continuous values or map code values to meaningful labels (e.g., 1 = 'Male', 2 = 'Female').",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "PROC FORMAT Tutorial", url: "https://support.sas.com/resources/papers/proceedings/proceedings/sugi29/241-29.pdf" },
        ],
        practice: "Create a format that groups ages into 'Child', 'Adult', and 'Senior'.",
      },
      {
        what: "Date and Time Functions",
        why: "Handling dates is notoriously tricky. Master INTNX, INTCK, and internal SAS date representation (days since Jan 1, 1960).",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "SAS Date Functions", url: "https://www.lexjansen.com/wuss/2006/tutorials/TUT-Date.pdf" },
        ],
        practice: "Calculate the age of a person in years using their birthdate and the current date.",
      },
      {
        what: "Array Processing in the DATA Step",
        why: "To perform the same operation on multiple columns simultaneously, greatly reducing code length.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Using Arrays in SAS", url: "https://www.lexjansen.com/wuss/2005/tutorials/TUT-Arrays.pdf" },
        ],
        practice: "Write an array to replace all values of -999 with missing (.) across 10 different numeric columns.",
      },
      {
        what: "SAS Functions (Character & Numeric)",
        why: "Mastering functions like SUBSTR, SCAN, FIND, ROUND, and CEIL is essential for data cleaning.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Common SAS Functions", url: "https://support.sas.com/documentation/cdl/en/lefunctionsref/63354/HTML/default/viewer.htm#p18nkpv0sqnm6fn1sh66afsq0mqo.htm" },
        ],
        practice: "Extract the first word from a long address string using the SCAN function.",
      },
      {
        what: "Data Transposition (PROC TRANSPOSE)",
        why: "To reshape data from 'Wide' format to 'Long' format (or vice versa), which is often required for modeling.",
        time: "5 Days",
        prereqs: "Step 9",
        resources: [
          { name: "PROC TRANSPOSE Explained", url: "https://www.lexjansen.com/wuss/2005/tutorials/TUT-Trans.pdf" },
        ],
        practice: "Take a dataset with sales for 12 months in separate columns and transpose it so months are rows.",
      },
    ],
  },
  {
    title: "Advanced Stage: Macros & Analytics",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Macro Programming (%MACRO)",
        why: "To build full-scale automated reporting systems and reusable tools.",
        time: "2 Weeks",
        prereqs: "Step 11",
        resources: [
          { name: "Mastering SAS Macros", url: "https://www.youtube.com/watch?v=advanced-sas-macros" },
        ],
        practice: "Write a macro that takes a dataset name as an argument and generates a PDF report with summary stats.",
      },
      {
        what: "The CALL SYMPUT Routine",
        why: "The most powerful way to pass data values from a DATA step into macro variables for later use.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "SYMPUT and SYMPUTX Guide", url: "https://www.lexjansen.com/nesug/nesug07/cc/cc01.pdf" },
        ],
        practice: "Use CALL SYMPUT to find the total sum of a column and use that sum in a later TITLE statement.",
      },
      {
        what: "Linear & Logistic Regression",
        why: "To perform predictive modeling using standard procedures like PROC REG and PROC LOGISTIC.",
        time: "2 Weeks",
        prereqs: "Step 7, Stats Basics",
        resources: [
          { name: "Regression Analysis in SAS", url: "https://support.sas.com/resources/papers/proceedings17/SAS0443-2017.pdf" },
        ],
        practice: "Build a logistic regression model to predict the probability of a binary outcome (e.g., pass/fail).",
      },
      {
        what: "ANOVA & Advanced Stats (PROC GLM)",
        why: "To compare means across multiple groups and perform complex experimental designs.",
        time: "1 Week",
        prereqs: "Step 19",
        resources: [
          { name: "Analysis of Variance with SAS", url: "https://www.lexjansen.com/wuss/2004/analytical_statistics/a_stat_analysis_of_variance.pdf" },
        ],
        practice: "Use PROC GLM to see if there is a significant difference in fuel efficiency across different car types.",
      },
      {
        what: "Statistical Graphics (PROC SGPLOT)",
        why: "To create publication-quality charts and plots for data visualization.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "PROC SGPLOT Guide", url: "https://support.sas.com/resources/papers/proceedings16/SAS5240-2016.pdf" },
        ],
        practice: "Create a grouped bar chart and a scatter plot with a regression line using SGPLOT.",
      },
      {
        what: "Hash Objects in the DATA Step",
        why: "A high-performance alternative to merging for lookups in very large datasets, stored entirely in memory.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "SAS Hash Objects Tutorial", url: "https://www.lexjansen.com/wuss/2006/tutorials/TUT-Hash.pdf" },
        ],
        practice: "Perform a lookup of a small reference table against a large transaction table using a Hash object.",
      },
      {
        what: "Introduction to CDISC Standards (Clinical)",
        why: "Essential for SAS jobs in the pharmaceutical industry. Learn about SDTM and ADaM datasets.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "CDISC for SAS Programmers", url: "https://www.cdisc.org/standards/foundational" },
        ],
        practice: "Research the basic structure of an SDTM DM (Demographics) dataset.",
      },
      {
        what: "Performance Tuning & Efficiency",
        why: "When working with billions of rows, saving CPU time and memory is critical. Learn about BUFSIZE and COMPRESS.",
        time: "1 Week",
        prereqs: "Advanced Stage",
        resources: [
          { name: "Efficiency in SAS Programming", url: "https://support.sas.com/resources/papers/proceedings/proceedings/sugi29/242-29.pdf" },
        ],
        practice: "Compare the execution time of a large data step with and without the COMPRESS=YES option.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Monthly Expense Tracker", teaches: "DATA step logic, basic formats, and PROC PRINT.", tech: "SAS Base" },
  { level: "Beginner", title: "Student Grade Reporter", teaches: "Conditional logic (If/Then), PROC MEANS, and sorting.", tech: "SAS Base" },
  { level: "Beginner", title: "Customer Contact Audit", teaches: "Reading CSV files, string cleaning functions, and PROC CONTENTS.", tech: "SAS Base" },
  { level: "Intermediate", title: "Retail Sales Dashboard", teaches: "PROC SQL, joining multiple tables, and ODS export to Excel.", tech: "SAS, SQL" },
  { level: "Intermediate", title: "Employee Salary Benchmark", teaches: "Custom formats (PROC FORMAT), grouped stats (CLASS), and visualization.", tech: "SAS, SGPLOT" },
  { level: "Intermediate", title: "Log File Analyzer", teaches: "Advanced string manipulation (SCAN, SUBSTR) and file I/O.", tech: "SAS Base" },
  { level: "Intermediate", title: "Time-Series Financial Trends", teaches: "Lubridate-like date handling, INTNX, and plotting.", tech: "SAS Base, SGPLOT" },
  { level: "Advanced", title: "Predictive Real Estate Model", teaches: "Feature engineering, PROC REG, and validation sets.", tech: "SAS/STAT" },
  { level: "Advanced", title: "Automated Clinical Table Generator", teaches: "SAS Macros, dynamic reporting, and data standard compliance.", tech: "SAS Macros" },
  { level: "Advanced", title: "Bank Fraud Detection Pipeline", teaches: "Hash objects for high-speed lookups and logistic regression.", tech: "Advanced SAS, Hash Objects" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on syntax, data reading, and descriptive reporting.",
    schedule: [
      "Days 1-7: SAS Environment and the DATA step basics.",
      "Days 8-15: Reading external files and applying formats.",
      "Days 16-23: Mastering PROC PRINT, MEANS, and FREQ.",
      "Days 24-30: Build the 'Grade Reporter' project and learn ODS export.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Analyst",
    description: "Balanced path for solid data wrangling and SQL integration.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-45: Advanced merging, PROC SQL, and Macro basics.",
      "Days 46-60: Data cleaning functions, date handling, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The SAS Professional",
    description: "Comprehensive path for high-paying roles in Pharma or Finance.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals.",
      "Days 31-60: Advanced Macros, Statistical modeling, and SGPLOT.",
      "Days 61-90: CDISC standards, Performance tuning, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "Difference between the WHERE statement and the IF statement.",
  "What is the difference between a LIBNAME and a FILENAME?",
  "How do you remove duplicate records in SAS? (PROC SORT NODUPKEY).",
  "Explain the difference between a Merge and a Join.",
  "What are Macro variables and how do you define them?",
  "Explain the significance of the _N_ and _ERROR_ automatic variables.",
  "How does the SET statement differ from the MERGE statement?",
  "What is the purpose of the RETAIN statement?",
  "How do you handle missing values in a numeric calculation?",
  "Describe the three main sections of a PROC SQL step.",
];

const codingQuestions = [
  { question: "Write a SAS program to find the second highest salary without using PROC SQL.", topic: "Logic" },
  { question: "Create a macro variable that stores today's date in 'DDMMMYYYY' format.", topic: "Macros" },
  { question: "Given two datasets A and B, perform a left join where only unmatched records from A are kept.", topic: "Merging" },
  { question: "Use a single array to convert 5 columns of weights from kg to lbs.", topic: "Arrays" },
];

const mcqs = [
  { question: "Which symbol must end every SAS statement?", options: [".", ":", ";", "/"], answer: ";" },
  { question: "Which automatic variable tracks the iteration number of the DATA step?", options: ["_COUNT_", "_ITER_", "_N_", "_STEP_"], answer: "_N_" },
  { question: "What does the 'NODUPKEY' option in PROC SORT do?", options: ["Sorts in reverse", "Removes duplicate observations based on the BY variables", "Checks for missing values", "Indexes the dataset"], answer: "Removes duplicate observations based on the BY variables" },
];

const mistakes = [
  "Forgetting the semicolon (;) at the end of a statement (the #1 error).",
  "Using single quotes for macro variables (they won't resolve; use double quotes).",
  "Failing to sort datasets before attempting a MERGE statement.",
  "Confusing formats (how it looks) with informats (how it's read).",
  "Using IF-THEN for filtering large datasets instead of WHERE (which is more efficient).",
  "Not checking the SAS Log file for warnings and errors after every run.",
  "Hardcoding paths instead of using LIBNAME for portability.",
  "Ignoring the difference between missing numeric (.) and missing character ('').",
  "Over-complicating logic when a built-in procedure (like PROC SUMMARY) already exists.",
  "Failing to document complex macro logic with comments.",
];

export default function SasRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Database className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The SAS Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive path to mastering the statistical analysis power-tool. From your first DATA step to advanced macro-driven analytical pipelines.
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
            <CardDescription>Apply your knowledge with these hands-on analytical projects.</CardDescription>
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
            <CardDescription>Choose a timeline that fits your career path.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your first role as a SAS Programmer.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live SAS Challenges</h3>
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
                    {['SAS Base', 'SAS Macro', 'PROC SQL', 'DATA Step', 'CDISC', 'SDTM', 'ADaM', 'Statistical Modeling', 'PROC REG', 'ODS', 'Data Validation', 'Clinical Programming'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your Base SAS Global Certification if you have it.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with domain-specific standards (e.g., Clinical Trials).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide examples of how you automated manual data tasks using Macros.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Data Powerhouse</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            SAS is the trusted spine of research and finance. Mastering it gives you access to some of the most stable and impactful analytical roles in the world. Stay consistent with your scripts, read every log carefully, and remember that every expert was once a beginner fighting their first missing semicolon. Your analytical future starts today!
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
