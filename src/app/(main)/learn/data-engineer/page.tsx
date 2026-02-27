
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
  FileCode,
  ShieldAlert,
  Braces,
  Sparkles,
  Server,
  Cloud,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Programming & Data Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Python for Data Engineering",
        why: "Python is the primary language for building data pipelines and interacting with modern data tools.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Everybody", url: "https://www.py4e.com/" },
          { name: "Real Python: Data Engineering with Python", url: "https://realpython.com/python-data-engineer/" },
        ],
        practice: "Solve 20+ problems on HackerRank focusing on dictionaries, lists, and file handling.",
      },
      {
        what: "SQL Mastery (DDL, DML, Joins)",
        why: "SQL is the language of data. You must be able to query, transform, and manage relational databases.",
        time: "2 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "SQLBolt - Interactive Tutorial", url: "https://sqlbolt.com/" },
          { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
        ],
        practice: "Complete all SQLBolt exercises. Build a complex multi-table JOIN query.",
      },
      {
        what: "Linux & Shell Scripting",
        why: "Data servers run on Linux. Mastering the CLI and Bash scripting is essential for automation.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
          { name: "Bash Scripting for Beginners", url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4" },
        ],
        practice: "Write a script to automate the moving and renaming of log files in a directory.",
      },
      {
        what: "Version Control (Git/GitHub)",
        why: "Engineering requires collaboration. Everything from pipeline code to infrastructure must be versioned.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
        ],
        practice: "Initialize a repository, create a branch, and resolve a merge conflict.",
      },
      {
        what: "Relational Database Design (PostgreSQL)",
        why: "Understanding how to structure data for efficiency and integrity using schemas and constraints.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "PostgreSQL Official Tutorial", url: "https://www.postgresqltutorial.com/" },
        ],
        practice: "Design and implement a normalized database for a simple e-commerce system.",
      },
      {
        what: "Data Serialization Formats",
        why: "Learn the pros/cons of JSON, CSV, Parquet, and Avro for different storage and processing needs.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Avro vs Parquet vs JSON", url: "https://www.databricks.com/blog/2018/05/30/databricks-delta-a-unified-transactional-storage-layer.html" },
        ],
        practice: "Convert a 1GB CSV file to Parquet using Python and measure the size reduction.",
      },
      {
        what: "Unit Testing & Code Quality",
        why: "Data pipelines are production software. Testing ensures data reliability and prevents pipeline breaks.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Getting Started with Pytest", url: "https://docs.pytest.org/en/stable/getting-started.html" },
        ],
        practice: "Write unit tests for a Python function that cleans and validates a dictionary of data.",
      },
      {
        what: "Intro to Cloud (AWS/GCP)",
        why: "Modern data engineering happens in the cloud. You must understand S3/GCS, IAM, and basic compute.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "AWS Cloud Practitioner Training", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
        ],
        practice: "Manually upload a file to S3 and configure public/private access settings.",
      },
      {
        what: "Containerization (Docker)",
        why: "To ensure your data jobs run consistently across dev, staging, and production environments.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Docker Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
        ],
        practice: "Dockerize a simple Python script that connects to a local PostgreSQL database.",
      },
      {
        what: "API Interaction (REST)",
        why: "Most data extraction involves pulling data from external APIs. You must master HTTP methods and headers.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Python Requests Tutorial", url: "https://realpython.com/python-requests/" },
        ],
        practice: "Build a script that pulls weather data from a public API and saves it to a local CSV.",
      },
    ],
  },
  {
    title: "Intermediate Stage: ETL & Distributed Systems",
    level: "Intermediate",
    steps: [
      {
        what: "Advanced SQL (Window Functions & Optimization)",
        why: "To perform complex analysis and reporting directly in the database with high performance.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Advanced SQL Window Functions", url: "https://mode.com/sql-tutorial/sql-window-functions/" },
        ],
        practice: "Write a query to calculate a 7-day rolling average of sales from a transaction table.",
      },
      {
        what: "Data Warehousing Concepts (Star Schema)",
        why: "To design analytical databases that are easy for BI tools to query. Learn Kimball vs. Inmon.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Star Schema vs Snowflake Schema", url: "https://www.databricks.com/glossary/star-schema" },
        ],
        practice: "Design a Star Schema for a retail business tracking sales, products, and stores.",
      },
      {
        what: "Data Orchestration (Apache Airflow)",
        why: "To schedule, monitor, and manage complex workflows of data tasks (DAGs).",
        time: "2 Weeks",
        prereqs: "Step 9, Step 1",
        resources: [
          { name: "Airflow Tutorial (Astronomer)", url: "https://docs.astronomer.io/learn/category/airflow-concepts" },
        ],
        practice: "Build an Airflow DAG that pulls data from an API every hour and saves it to a DB.",
      },
      {
        what: "Apache Spark (PySpark)",
        why: "The standard for processing large-scale data across a cluster. You must master RDDs and DataFrames.",
        time: "2 Weeks",
        prereqs: "Step 1, Step 11",
        resources: [
          { name: "Spark Quick Start (Databricks)", url: "https://www.databricks.com/spark/getting-started-with-apache-spark" },
        ],
        practice: "Process a 10GB dataset using PySpark to find the top 100 most frequent items.",
      },
      {
        what: "Cloud Data Warehouses (BigQuery/Snowflake)",
        why: "The modern home for analytical data. Learn how to manage massive scale without maintaining servers.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Google BigQuery Sandbox", url: "https://cloud.google.com/bigquery/docs/sandbox" },
        ],
        practice: "Load a large Parquet file into BigQuery and run an analytical query using the UI.",
      },
      {
        what: "Data Modeling with DBT",
        why: "DBT (Data Build Tool) allows you to manage data transformations using only SQL and version control.",
        time: "1 Week",
        prereqs: "Step 11, Step 12",
        resources: [
          { name: "dbt Fundamentals (Free Course)", url: "https://courses.getdbt.com/courses/fundamentals" },
        ],
        practice: "Build a dbt project that transforms raw tables into a 'clean' dimension table for reporting.",
      },
      {
        what: "NoSQL Databases (MongoDB/Redis)",
        why: "For handling unstructured data or providing high-speed in-memory lookups for pipelines.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "MongoDB University", url: "https://university.mongodb.com/" },
        ],
        practice: "Store a nested JSON object from an API into MongoDB and retrieve it using a query.",
      },
      {
        what: "Infrastructure as Code (Terraform)",
        why: "To automate the creation of data platforms. Every S3 bucket and DB should be created via code.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Terraform for Data Engineers", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
        ],
        practice: "Use Terraform to provision an RDS instance and an S3 bucket together.",
      },
      {
        what: "Message Queues (Kafka basics)",
        why: "The backbone of real-time data. Understanding Producers, Consumers, and Topics is vital.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Apache Kafka Intro (Confluent)", url: "https://developer.confluent.io/get-started/python/" },
        ],
        practice: "Set up a local Kafka broker and write a Python producer that sends messages every second.",
      },
      {
        what: "CI/CD for Data Pipelines",
        why: "To automate the testing and deployment of your data code whenever you push to GitHub.",
        time: "1 Week",
        prereqs: "Step 4, Step 7",
        resources: [
          { name: "GitHub Actions for Data Science", url: "https://docs.github.com/en/actions" },
        ],
        practice: "Create a GitHub Action that runs your Pytest suite on every commit to your pipeline repo.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scale, Streaming & Governance",
    level: "Advanced",
    steps: [
      {
        what: "Advanced Spark Optimization",
        why: "To fix slow jobs. Learn about Shuffling, Partitioning, and Memory management in Spark.",
        time: "2 Weeks",
        prereqs: "Step 14",
        resources: [
          { name: "Spark Performance Tuning", url: "https://spark.apache.org/docs/latest/tuning.html" },
        ],
        practice: "Analyze a Spark UI profile to find a 'skewed' partition and fix it using repartitioning.",
      },
      {
        what: "Real-time Streaming (Spark Streaming/Flink)",
        why: "To process data as it arrives (e.g., fraud detection or live dashboard updates).",
        time: "2 Weeks",
        prereqs: "Step 14, Step 19",
        resources: [
          { name: "Spark Structured Streaming", url: "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html" },
        ],
        practice: "Build a streaming app that calculates real-time windowed averages of Kafka messages.",
      },
      {
        what: "Data Lakehouses (Delta Lake/Iceberg)",
        why: "To bring ACID transactions and high-performance querying to low-cost cloud storage (Data Lakes).",
        time: "1 Week",
        prereqs: "Step 14, Step 15",
        resources: [
          { name: "Introduction to Delta Lake", url: "https://delta.io/" },
        ],
        practice: "Create a Delta table in S3 and perform an UPDATE and MERGE operation using PySpark.",
      },
      {
        what: "Data Quality & Observability",
        why: "If data is bad, the business fails. Learn tools to automatically detect data quality issues.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Great Expectations Docs", url: "https://docs.greatexpectations.io/docs/" },
        ],
        practice: "Write an expectation suite that validates a table has no nulls in the primary key column.",
      },
      {
        what: "Advanced Orchestration (K8s for Data)",
        why: "To manage massive clusters of data tools (Airflow, Spark, Kafka) in a cloud-native way.",
        time: "2 Weeks",
        prereqs: "Step 9",
        resources: [
          { name: "Kubernetes for Data Engineers", url: "https://www.youtube.com/watch?v=look-up-k8s-data" },
        ],
        practice: "Deploy a local Airflow instance onto a Kubernetes cluster using a Helm chart.",
      },
      {
        what: "Data Governance & Security",
        why: "Protecting sensitive PII data. Learn about data masking, encryption at rest, and GDPR/HIPAA compliance.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "AWS Lake Formation", url: "https://aws.amazon.com/lake-formation/" },
        ],
        practice: "Set up an IAM policy that allows a user to only read specific 'columns' in a Glue table.",
      },
      {
         what: "MLOps for Data Engineers",
        why: "Data engineers are the first half of the ML lifecycle. Learn to build Feature Stores and provide clean data for training.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Feature Store Foundations", url: "https://www.tecton.ai/blog/what-is-a-feature-store/" },
        ],
        practice: "Design a pipeline that generates and stores features for a recommendation model.",
      },
      {
        what: "System Design for Data Systems",
        why: "To architect platforms that handle petabytes. Learn about sharding, CAP Theorem, and high availability.",
        time: "2 Weeks",
        prereqs: "All Intermediate steps",
        resources: [
          { name: "System Design Primer (Data)", url: "https://github.com/donnemartin/system-design-primer" },
        ],
        practice: "Diagram the architecture for a real-time analytics platform serving 1 million concurrent users.",
      },
      {
        what: "Cost Optimization in Data Platforms",
        why: "Data jobs are expensive. Learn to optimize queries and storage to save thousands in cloud costs.",
        time: "1 Week",
        prereqs: "Step 15, Step 21",
        resources: [
          { name: "Snowflake Cost Optimization", url: "https://www.snowflake.com/en/resources/white-paper/cost-optimization/" },
        ],
        practice: "Identify a slow query in your warehouse and optimize it to use 50% less compute power.",
      },
      {
        what: "Final Capstone: Enterprise Platform",
        why: "To synthesize all skills into a professional-grade portfolio piece.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build an end-to-end platform: Kafka -> Spark Streaming -> Delta Lake -> dbt -> BigQuery -> Dashboard.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated Log Scraper", teaches: "Python, File I/O, Regex, Shell scripting.", tech: "Python, Linux" },
  { level: "Beginner", title: "Personal Finance SQLite DB", teaches: "SQL, DDL, normalization, basic JOINs.", tech: "SQL, SQLite" },
  { level: "Beginner", title: "Weather API to CSV Pipeline", teaches: "Requests, JSON parsing, error handling.", tech: "Python, Requests" },
  { level: "Intermediate", title: "Retail Sales Warehouse (Star Schema)", teaches: "Data modeling, PostgreSQL, Kimball design.", tech: "PostgreSQL, SQL" },
  { level: "Intermediate", title: "Crypto Tracker DAG", teaches: "Airflow, scheduling, API extraction, DB loading.", tech: "Apache Airflow, Python" },
  { level: "Intermediate", title: "GitHub Insights Processor", teaches: "Spark, distributed computing, large JSON parsing.", tech: "PySpark, GitHub Archive" },
  { level: "Intermediate", title: "Modular Cloud Infrastructure", teaches: "Infrastructure as Code, Cloud foundations.", tech: "Terraform, AWS" },
  { level: "Advanced", title: "Real-time Fraud Detection Engine", teaches: "Streaming, Kafka, Windowing, Flink/Spark.", tech: "Kafka, Spark Streaming" },
  { level: "Advanced", title: "Data Quality Guardian", teaches: "Observability, monitoring, automated validation.", tech: "Great Expectations, Prometheus" },
  { level: "Advanced", title: "Modern Lakehouse Platform", teaches: "Iceberg/Delta Lake, cloud warehouses, dbt, CI/CD.", tech: "Snowflake, dbt, Delta Lake" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on the core tools to land a data analyst or junior engineer role.",
    schedule: [
      "Days 1-7: Python & SQL fundamentals.",
      "Days 8-15: Linux CLI, Git, and Database Design.",
      "Days 16-23: Containerization (Docker) and Cloud (S3).",
      "Days 24-30: Build 2 beginner projects and learn API integration.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Pipeline Builder",
    description: "Balanced path covering orchestration, distributed systems, and modeling.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Airflow Orchestration and PySpark basics.",
      "Days 41-60: dbt Modeling, Data Warehousing (BigQuery), and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Data Architect",
    description: "Comprehensive path for professional readiness in high-scale data engineering.",
    schedule: [
      "Days 1-30: Core Development & Database foundations.",
      "Days 31-60: Professional Systems (Spark, Airflow, Terraform).",
      "Days 61-90: Streaming, Lakehouses, Performance, and final Capstone.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between ETL and ELT.",
  "What is a Star Schema and why is it used in data warehousing?",
  "Describe the CAP theorem and its relevance to data systems.",
  "How does Apache Spark handle data processing in a distributed way?",
  "What is an N+1 query problem and how do you solve it?",
  "Explain the difference between Batch and Stream processing.",
  "What is 'Normalization' and name the first three normal forms.",
  "Describe how you would handle 'Late Arriving' data in a pipeline.",
  "What is an Idempotent pipeline and why is it important?",
  "How do you ensure data quality in a high-volume pipeline?",
];

const codingQuestions = [
  { question: "Write a Python script to find and aggregate duplicate rows in a large CSV.", topic: "Python Logic" },
  { question: "Write a SQL query using a Window Function to find the top 3 customers per country.", topic: "Advanced SQL" },
  { question: "Write a PySpark script to join two large DataFrames efficiently.", topic: "Spark Engineering" },
  { question: "Implement a basic retry logic for an API call in Python.", topic: "Robustness" },
];

const mcqs = [
  { question: "Which file format is column-oriented and optimized for analytical queries?", options: ["CSV", "JSON", "Parquet", "Avro"], answer: "Parquet" },
  { question: "What is the core abstraction in Apache Spark?", options: ["RDD", "Node", "Pod", "Topic"], answer: "RDD" },
  { question: "Which tool is best suited for scheduling and monitoring complex data workflows?", options: ["Docker", "Terraform", "Airflow", "GitHub"], answer: "Airflow" },
];

const mistakes = [
  "Ignoring SQL fundamentals: Relying only on Python for data transformation is slow and inefficient.",
  "Hardcoding paths and keys: Use environment variables and relative paths from Day 1.",
  "Neglecting the State: Not understanding how tools like Airflow or Terraform track progress.",
  "Manual work (Toil): If you do it more than twice, automate it with code.",
  "Ignoring Data Quality: Assuming the source data is correct is the fastest way to break a system.",
  "Over-engineering: Using Spark for a dataset that fits in a small Python script.",
  "Neglecting the Log: Most pipeline errors are visible in logs long before they cause crashes.",
  "Hardcoding Secrets: Storing database passwords in GitHub—use a Secret Vault.",
  "Ignoring Costs: Running heavy cloud jobs without checking the price—data is expensive.",
  "Lack of Testing: Deploying code that hasn't been verified with unit tests.",
];

export default function DataEngineerRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Database className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Data Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the architecture of modern data. From building your first SQL query to architecting global-scale, real-time data lakehouses and distributed systems.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/roles?section=item-Data & Database Roles">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Roles
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Data Engineer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Data or Platform Engineering role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding & Logic Challenges</h3>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Apache Spark', 'Airflow', 'Kafka', 'Terraform', 'Docker', 'Snowflake', 'BigQuery', 'Data Modeling', 'ETL/ELT', 'Distributed Systems', 'CI/CD', 'AWS/GCP'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Scalability' and 'Data Reliability'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality architecture diagrams in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cost-optimization achievements (e.g. 'Reduced job cost by 30%').</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <ShieldAlert className="h-6 w-6"/>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Backbone of Intelligence</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Data Engineering is the engine room of the modern world. Without your pipelines, AI and analytics would have no fuel. Stay consistent, read the architecture papers, and remember: The most stable systems in the world are built on the foundations you're learning today. Your data journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Infrastructure
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
