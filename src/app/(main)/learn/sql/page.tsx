
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
  Database,
  Table,
  Search,
  Code,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Activity,
  History,
  Workflow,
  Monitor,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: SQL Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to Databases & RDBMS",
        why: "To understand how data is stored in tables and the role of Relational Database Management Systems (like MySQL, PostgreSQL, SQL Server).",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "Database Basics (YouTube - freeCodeCamp)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { name: "What is a Relational Database?", url: "https://aws.amazon.com/relational-database/" },
        ],
        practice: "Explain the difference between a spreadsheet and a database to a friend. Research the top 3 most popular SQL databases.",
      },
      {
        what: "Environment Setup (MySQL or PostgreSQL)",
        why: "You need a sandbox to run your queries. Learning to install a local server or use a cloud-based IDE is the required starting point.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "Setting up PostgreSQL", url: "https://www.postgresql.org/download/" },
          { name: "MySQL Workbench Installation Guide", url: "https://dev.mysql.com/doc/workbench/en/wb-installing.html" },
        ],
        practice: "Install PostgreSQL or MySQL on your computer. Connect to the server using a GUI tool like pgAdmin or MySQL Workbench.",
      },
      {
        what: "Basic Queries (SELECT, FROM)",
        why: "The most fundamental skill: retrieving data from a specific table.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "SQL SELECT Statement (W3Schools)", url: "https://www.w3schools.com/sql/sql_select.asp" },
        ],
        practice: "Write a query to retrieve all columns from a 'Users' table. Then, write a query to retrieve only 'FirstName' and 'Email'.",
      },
      {
        what: "Filtering Data (WHERE & Logical Operators)",
        why: "To extract only the records that meet specific criteria using =, <>, AND, OR, and NOT.",
        time: "2 Days",
        prereqs: "Step 3",
        resources: [
          { name: "SQL WHERE Clause", url: "https://www.w3schools.com/sql/sql_where.asp" },
        ],
        practice: "Filter a 'Products' table to find items with a price greater than 100 AND category 'Electronics'.",
      },
      {
        what: "Sorting & Limiting (ORDER BY, LIMIT/TOP)",
        why: "To organize results (e.g., newest first) and handle pagination by returning a specific number of rows.",
        time: "1 Day",
        prereqs: "Step 3",
        resources: [
          { name: "SQL ORDER BY", url: "https://www.w3schools.com/sql/sql_orderby.asp" },
        ],
        practice: "Sort an 'Employees' list by salary in descending order and return only the top 5 earners.",
      },
      {
        what: "Data Types & Nulls",
        why: "Understanding String, Numeric, and Date types is crucial for data integrity. Learning to handle NULL (missing) values is a daily task.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "SQL Data Types Guide", url: "https://www.w3schools.com/sql/sql_datatypes.asp" },
          { name: "Handling NULL values", url: "https://www.w3schools.com/sql/sql_null_values.asp" },
        ],
        practice: "Identify which columns in a table can be NULL. Use 'IS NULL' to find users without a phone number.",
      },
      {
        what: "CRUD: INSERT, UPDATE, DELETE",
        why: "To modify data. These commands (Create, Read, Update, Delete) are the foundation of all data manipulation.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "SQL INSERT INTO", url: "https://www.w3schools.com/sql/sql_insert.asp" },
          { name: "SQL UPDATE", url: "https://www.w3schools.com/sql/sql_update.asp" },
        ],
        practice: "Insert a new user, update their email address, and then delete that specific user from the database.",
      },
      {
        what: "Aggregate Functions (COUNT, SUM, AVG)",
        why: "To perform calculations on multiple rows and return a single summary value.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "SQL Aggregate Functions", url: "https://www.w3schools.com/sql/sql_count_avg_sum.asp" },
        ],
        practice: "Calculate the total number of orders, the average order value, and the maximum price in a 'Sales' table.",
      },
      {
        what: "Grouping Data (GROUP BY & HAVING)",
        why: "To organize results into buckets (e.g., total sales per category) and filter those buckets using HAVING.",
        time: "3 Days",
        prereqs: "Step 8",
        resources: [
          { name: "SQL GROUP BY Statement", url: "https://www.w3schools.com/sql/sql_groupby.asp" },
        ],
        practice: "Find all categories that have more than 10 products using GROUP BY and HAVING.",
      },
      {
        what: "Basic Joins (INNER, LEFT)",
        why: "Data is often split across tables. Joins allow you to combine related data into a single result set.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "SQL Joins Explained (YouTube)", url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw" },
          { name: "Visual SQL Joins", url: "https://sql-joins.leozhu.me/" },
        ],
        practice: "Join a 'Users' table with an 'Orders' table to show the names of users who made purchases.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Relational Power",
    level: "Intermediate",
    steps: [
      {
        what: "Advanced Joins (RIGHT, FULL, SELF)",
        why: "To handle complex data relationships where records might exist in one table but not the other, or when a table relates to itself.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "SQL Joins Deep Dive", url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/" },
        ],
        practice: "Write a SELF JOIN to find employees and their managers from the same 'Employees' table.",
      },
      {
        what: "Subqueries & Scalar Functions",
        why: "To use the result of one query inside another query. Scalar functions allow for complex string and math transformations.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "SQL Subqueries Guide", url: "https://www.geeksforgeeks.org/sql-subquery/" },
        ],
        practice: "Find all products whose price is above the average price of all products using a subquery.",
      },
      {
        what: "Common Table Expressions (CTEs)",
        why: "CTEs make complex queries readable and reusable. They are the professional alternative to deeply nested subqueries.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "SQL CTEs (WITH Clause)", url: "https://www.essentialsql.com/introduction-to-common-table-expressions-ctes/" },
        ],
        practice: "Refactor a complex subquery into a clean, named CTE using the WITH clause.",
      },
      {
        what: "Database Design & Normalization",
        why: "To structure data efficiently, prevent redundancy, and ensure data integrity. Learn 1NF, 2NF, and 3NF.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Database Normalization (YouTube)", url: "https://www.youtube.com/watch?v=UrYLYV7WSHM" },
        ],
        practice: "Design a schema for an online library. Identify the entities and their relationships (Many-to-Many, etc.).",
      },
      {
        what: "Constraints (Primary & Foreign Keys)",
        why: "To enforce rules at the database level, ensuring that relationships between tables stay valid (referential integrity).",
        time: "3 Days",
        prereqs: "Step 14",
        resources: [
          { name: "SQL Constraints", url: "https://www.w3schools.com/sql/sql_constraints.asp" },
        ],
        practice: "Create a 'Orders' table with a Foreign Key that points back to a 'Customers' table.",
      },
      {
        what: "Indexing for Performance",
        why: "Indexes make your queries run hundreds of times faster. Understanding B-Trees and Unique indexes is a senior-level skill.",
        time: "4 Days",
        prereqs: "Step 14",
        resources: [
          { name: "SQL Indexing Guide", url: "https://use-the-index-luke.com/" },
        ],
        practice: "Add an index to a large table and use 'EXPLAIN' to see the difference in query execution time.",
      },
      {
        what: "Transactions & ACID Properties",
        why: "To ensure data safety. Transactions allow you to group multiple steps so they either all succeed or all fail together.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "SQL Transactions (COMMIT & ROLLBACK)", url: "https://www.tutorialspoint.com/sql/sql-transactions.htm" },
        ],
        practice: "Simulate a bank transfer: subtract money from one account and add it to another within a single transaction.",
      },
      {
        what: "Window Functions (RANK, ROW_NUMBER)",
        why: "To perform calculations across a set of rows related to the current row without using GROUP BY.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "PostgreSQL Window Functions", url: "https://www.postgresqltutorial.com/postgresql-window-function/" },
        ],
        practice: "Rank products by sales volume within each region using RANK() OVER (PARTITION BY region).",
      },
      {
        what: "Working with Dates & Time",
        why: "Time-series data is everywhere. Master intervals, formatting, and time zones.",
        time: "4 Days",
        prereqs: "Step 6",
        resources: [
          { name: "SQL Date Functions", url: "https://www.w3schools.com/sql/sql_dates.asp" },
        ],
        practice: "Write a query to find all users who signed up in the last 30 days.",
      },
      {
        what: "Stored Procedures & UDFs",
        why: "To store logic directly in the database for reuse and better security/performance.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Stored Procedures in SQL", url: "https://www.w3schools.com/sql/sql_stored_procedures.asp" },
        ],
        practice: "Create a stored procedure that accepts a category ID and returns the total inventory value for that category.",
      },
    ],
  },
  {
    title: "Advanced Stage: Optimization & Architecture",
    level: "Advanced",
    steps: [
      {
        what: "Triggers & Recursive Queries",
        why: "Triggers automate actions on data changes. Recursive CTEs allow you to traverse hierarchical data (like org charts).",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "SQL Triggers Tutorial", url: "https://www.sqltutorial.org/sql-triggers/" },
          { name: "Recursive CTEs Explained", url: "https://learnsql.com/blog/what-is-recursive-cte/" },
        ],
        practice: "Build a recursive query to display an organizational hierarchy from an 'Employees' table.",
      },
      {
        what: "Query Optimization & Execution Plans",
        why: "To find and fix slow queries by analyzing how the database engine actually processes your SQL.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Understanding Execution Plans", url: "https://www.red-gate.com/simple-talk/sql/performance/execution-plans-basics/" },
        ],
        practice: "Analyze a complex query using EXPLAIN ANALYZE and identify if it's doing a full table scan or using an index.",
      },
      {
        what: "Database Security & Permissions",
        why: "To protect sensitive data. Learn the principle of least privilege using GRANT and REVOKE commands.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "SQL Data Control Language (DCL)", url: "https://www.geeksforgeeks.org/sql-dcl-commands/" },
        ],
        practice: "Create a read-only user that can only access the 'Public' schema but cannot delete any data.",
      },
      {
        what: "NoSQL vs SQL & Distributed Systems",
        why: "To understand when to use a relational database and when a NoSQL database (like MongoDB) is a better fit.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "SQL vs NoSQL (YouTube)", url: "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y" },
        ],
        practice: "Write a short report on why a social media app might use both SQL (for billing) and NoSQL (for feed data).",
      },
      {
        what: "SQL for Big Data (BigQuery/Snowflake)",
        why: "Standard SQL changes slightly when working with petabytes of data in analytical warehouses.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Google BigQuery SQL Docs", url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/introduction" },
        ],
        practice: "Sign up for a BigQuery free tier and run a query on a public dataset (like Wikipedia page views).",
      },
      {
        what: "Data Warehousing (OLAP vs OLTP)",
        why: "To understand the architecture differences between a transactional database (app backend) and an analytical warehouse.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "OLTP vs OLAP Explained", url: "https://www.integrate.io/blog/oltp-vs-olap/" },
        ],
        practice: "Identify which system in your project is the OLTP (the source) and where the OLAP (the dashboard) would live.",
      },
      {
        what: "JSON in SQL & Advanced Types",
        why: "Modern SQL databases handle semi-structured data (JSONB) natively. Mastering this allows for hybrid architectures.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Working with JSON in PostgreSQL", url: "https://www.postgresqltutorial.com/postgresql-json/" },
        ],
        practice: "Query a column containing JSON data to extract a specific nested field.",
      },
      {
        what: "Final Capstone Project",
        why: "To synthesize everything you've learned into a production-ready database schema and query library.",
        time: "2 Weeks",
        prereqs: "All previous steps",
        resources: [],
        practice: "Design, normalize, and populate a complex database for a SaaS platform. Write 20 complex analytical queries for it.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Inventory Management DB", teaches: "Tables, CRUD, and basic filtering.", tech: "MySQL / PostgreSQL" },
  { level: "Beginner", title: "Library Catalog System", teaches: "Relationships, SELECT, and Sorting.", tech: "SQLite" },
  { level: "Beginner", title: "Personal Expense Tracker", teaches: "Aggregates (SUM), GROUP BY, and Dates.", tech: "PostgreSQL" },
  { level: "Intermediate", title: "E-commerce Analytical Dashboard", teaches: "Joins, Window Functions, and CTEs.", tech: "PostgreSQL / MySQL" },
  { level: "Intermediate", title: "University Result Management", teaches: "Normalization, Views, and Constraints.", tech: "SQL Server" },
  { level: "Intermediate", title: "HR System with Hierarchy", teaches: "Self-joins and recursive queries.", tech: "PostgreSQL" },
  { level: "Intermediate", title: "Social Media Follower System", teaches: "Many-to-Many relationships and indexing.", tech: "MySQL" },
  { level: "Advanced", title: "Real-time Fraud Detection DB", teaches: "Query optimization, Execution plans, and Triggers.", tech: "PostgreSQL / Snowflake" },
  { level: "Advanced", title: "Global Sales Warehouse", teaches: "Data warehousing, Partitioning, and JSON types.", tech: "BigQuery / Redshift" },
  { level: "Advanced", title: "Multi-tenant SaaS DB", teaches: "Schema design, Security permissions, and Scaling.", tech: "PostgreSQL" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Analyst",
    description: "Focus on data retrieval and reporting for business roles.",
    schedule: [
      "Days 1-7: Basic SELECT, WHERE, and Ordering.",
      "Days 8-15: Aggregates, GROUP BY, and HAVING.",
      "Days 16-23: INNER & LEFT JOINS and Subqueries.",
      "Days 24-30: Build an Analytical Dashboard project and learn basic Excel integration.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Developer",
    description: "Balanced path for backend developers building applications.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + CRUD.",
      "Days 21-45: Database Design, Normalization, and CTEs.",
      "Days 46-60: Indexing, Transactions, and a full E-commerce project.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Database Architect",
    description: "Comprehensive path for Data Engineers and DBAs.",
    schedule: [
      "Days 1-30: Core SQL and Relational Foundations.",
      "Days 31-60: Advanced logic: Window Functions, Procedures, and Triggers.",
      "Days 61-90: Optimization, Big Data, Cloud Warehousing, and final Capstone.",
    ]
  }
];

const interviewTopics = [
  "SQL Joins (Inner, Left, Right, Full, Self, Cross).",
  "Difference between WHERE and HAVING.",
  "What is Normalization? Explain 1NF, 2NF, 3NF.",
  "Explain ACID properties in Transactions.",
  "Primary Key vs Unique Key vs Foreign Key.",
  "What is an Index? How does it improve performance?",
  "What is a CTE (Common Table Expression)? Why use it?",
  "Explain Window Functions like ROW_NUMBER() and RANK().",
  "Delete vs Truncate vs Drop.",
  "SQL Injection: What is it and how do you prevent it?",
];

const codingQuestions = [
  { question: "Find the 2nd highest salary from an Employees table.", topic: "Subqueries/Limit" },
  { question: "Find duplicate records based on an email column.", topic: "Grouping" },
  { question: "Query to show the total spending of each customer, including those with zero orders.", topic: "Joins" },
  { question: "Find the top 3 selling products per category using Window Functions.", topic: "Advanced SQL" },
];

const mcqs = [
  { question: "Which command is used to remove all records from a table without deleting the table structure?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], answer: "TRUNCATE" },
  { question: "What does the 'C' in ACID stand for?", options: ["Concurrency", "Consistency", "Clarity", "Connection"], answer: "Consistency" },
  { question: "Which join returns all records when there is a match in either left or right table?", options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"], answer: "FULL OUTER JOIN" },
];

const mistakes = [
  "Not using 'LIMIT' on massive tables (can crash your IDE or server).",
  "Forgetting the WHERE clause in a DELETE or UPDATE statement (devastating).",
  "Using 'SELECT *' in production code instead of specific column names.",
  "Assuming results are sorted without using an explicit 'ORDER BY'.",
  "Ignoring NULL values in calculations (e.g., averages exclude nulls).",
  "Poor table naming conventions (use plurals and snake_case consistently).",
  "Not indexing columns used in JOINs or filters.",
  "Storing everything in one giant table (lack of normalization).",
  "Ignoring query performance until the app slows to a crawl.",
  "Not backing up data before running complex migration scripts.",
];

export default function SqlRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Database className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The SQL Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the language of data. From your first SELECT statement to advanced analytical window functions and query optimization.
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
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
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded">
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
            <CardDescription>Expert guidance to help you land your first data-centric role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live SQL Challenges</h3>
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
                    {['SQL', 'PostgreSQL', 'MySQL', 'Database Design', 'Normalization', 'Query Optimization', 'ETL', 'Indexing', 'CTE', 'Window Functions', 'ACID', 'NoSQL', 'BigQuery'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Activity className="h-5 w-5 text-primary"/> Showcase Your Skill</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide an Entity-Relationship Diagram (ERD) for your major projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include a 'Queries' folder in your GitHub repo with commented SQL scripts.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with different RDBMS types.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Unlock the Power of Data</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            SQL is the universal language of the information age. Mastering it doesn't just mean knowing how to join tables; it means knowing how to extract meaning from chaos. Stay consistent, practice your design skills, and always keep performance in mind. Your future as a data-driven expert starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start SQL Projects
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
