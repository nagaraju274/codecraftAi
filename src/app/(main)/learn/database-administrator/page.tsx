
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
  ShieldCheck,
  Workflow,
  Terminal,
  HardDrive,
  Lock,
  Activity,
  Cloud,
  Layers,
  Search,
  Code,
  Table,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Monitor,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Relational Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to RDBMS & Data Modeling",
        why: "To understand how data is structured in tables and the relational model that powers 90% of business systems.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Database Systems - Full Course (YouTube)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { name: "Relational Data Model Docs", url: "https://www.geeksforgeeks.org/relational-model-in-dbms/" },
        ],
        practice: "Draw an Entity-Relationship (ER) diagram for a simple 'College Management System' on paper.",
      },
      {
        what: "SQL Fundamentals (DDL & DML)",
        why: "SQL is the language of databases. You must master creating tables (DDL) and manipulating data (DML).",
        time: "2 Weeks",
        prereqs: "Step 1",
        resources: [
          { name: "SQL Tutorial (W3Schools)", url: "https://www.w3schools.com/sql/" },
          { name: "SQLBolt - Interactive Practice", url: "https://sqlbolt.com/" },
        ],
        practice: "Build a database with 'Users' and 'Posts' tables. Practice SELECT, INSERT, UPDATE, and DELETE queries.",
      },
      {
        what: "Installation & Environment Setup",
        why: "A DBA must know how to install and configure the database engine (MySQL or PostgreSQL) from scratch.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Installing PostgreSQL", url: "https://www.postgresql.org/download/" },
          { name: "MySQL Workbench Guide", url: "https://dev.mysql.com/doc/workbench/en/wb-installing.html" },
        ],
        practice: "Install PostgreSQL on your local machine. Create your first database and a superuser.",
      },
      {
        what: "Normalization (1NF, 2NF, 3NF)",
        why: "To prevent data redundancy and ensure logical consistency in your tables.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Normalization Explained (YouTube)", url: "https://www.youtube.com/watch?v=UrYLYV7WSHM" },
        ],
        practice: "Take a flat Excel sheet and break it down into 3NF normalized tables.",
      },
      {
        what: "Data Integrity & Constraints",
        why: "To enforce business rules at the database level using Primary Keys, Foreign Keys, and Unique constraints.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "SQL Constraints Guide", url: "https://www.w3schools.com/sql/sql_constraints.asp" },
        ],
        practice: "Create a 'Orders' table that enforces a link to a 'Customers' table using Foreign Keys.",
      },
      {
        what: "Basic Security: Users & Permissions",
        why: "DBAs are the gatekeepers of data. You must learn the principle of least privilege.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "PostgreSQL Role Management", url: "https://www.postgresql.org/docs/current/user-manag.html" },
        ],
        practice: "Create a 'ReadOnly' user that can only see data but cannot modify it.",
      },
      {
        what: "Intro to NoSQL (MongoDB)",
        why: "Modern DBAs often manage hybrid environments. Learn how document stores differ from relational ones.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "MongoDB University (Free)", url: "https://university.mongodb.com/" },
        ],
        practice: "Install MongoDB and insert a complex JSON document representing a product.",
      },
      {
        what: "Basic Command Line Tools",
        why: "GUI tools are nice, but a pro DBA lives in the terminal using 'psql' or 'mysql' CLI.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Terminal Basics for DBAs", url: "https://linuxjourney.com/" },
        ],
        practice: "Export a database to a .sql file and restore it using only terminal commands.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Management & Tuning",
    level: "Intermediate",
    steps: [
      {
        what: "Indexing Deep Dive",
        why: "Indexing is the #1 tool for performance. You must know when to use B-Tree, Hash, and GIST indexes.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Use The Index, Luke!", url: "https://use-the-index-luke.com/" },
        ],
        practice: "Create a table with 1 million rows. Benchmark a query before and after adding an index.",
      },
      {
        what: "Backup & Recovery Strategies",
        why: "If data is lost, it's the DBA's fault. Master Logical (pg_dump) and Physical backups.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "PostgreSQL Backup & Restore", url: "https://www.postgresql.org/docs/current/backup.html" },
        ],
        practice: "Schedule a daily cron job that backups your database and sends a success notification.",
      },
      {
        what: "Query Performance & Execution Plans",
        why: "To fix slow apps, you must read execution plans (EXPLAIN ANALYZE) to find bottlenecks.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Understanding EXPLAIN", url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-explain/" },
        ],
        practice: "Find a slow query in your project and optimize it by analyzing its execution path.",
      },
      {
        what: "Transactions & ACID Properties",
        why: "To ensure data safety during crashes. Atomicity, Consistency, Isolation, and Durability are non-negotiable.",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "ACID Explained (YouTube)", url: "https://www.youtube.com/watch?v=look-up-acid" },
        ],
        practice: "Simulate a bank transfer: subtract from one row and add to another within a single transaction.",
      },
      {
        what: "Stored Procedures & UDFs",
        why: "To move logic into the database for performance and security.",
        time: "1 Week",
        prereqs: "SQL Basics",
        resources: [
          { name: "PL/pgSQL Tutorial", url: "https://www.postgresqltutorial.com/postgresql-plpgsql/" },
        ],
        practice: "Write a stored procedure that calculates monthly sales reports from a raw transactions table.",
      },
      {
        what: "Database Triggers & Views",
        why: "Triggers automate data audits, and Views simplify complex queries for developers.",
        time: "5 Days",
        prereqs: "Step 13",
        resources: [
          { name: "SQL Views & Triggers", url: "https://www.w3schools.com/sql/sql_view.asp" },
        ],
        practice: "Create an 'AuditLog' table and a trigger that records every change made to the 'Users' table.",
      },
      {
        what: "Linux for DBAs",
        why: "90% of databases run on Linux. You must master SSH, file permissions, and system resource monitoring.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Linux for DBAs (Blog)", url: "https://linuxjourney.com/lesson/monitor-processes" },
        ],
        practice: "Set up a Linux VM and monitor CPU/RAM usage while running heavy queries.",
      },
      {
        what: "Monitoring & Alerting",
        why: "Proactive DBAs fix problems before they happen. Learn to use tools like Prometheus or Grafana.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "DB Monitoring Basics", url: "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-postgresql/" },
        ],
        practice: "Set up a dashboard that alerts you if disk space falls below 10%.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scaling & Security",
    level: "Advanced",
    steps: [
      {
        what: "High Availability & Replication",
        why: "To ensure zero downtime. Master Master-Slave replication and Failover clusters.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "PostgreSQL Replication Guide", url: "https://www.postgresql.org/docs/current/high-availability.html" },
        ],
        practice: "Set up two database servers where the second one stays in sync with the first automatically.",
      },
      {
        what: "Cloud Database Services (AWS RDS/GCP)",
        why: "Modern apps use managed services. Learn to migrate local DBs to RDS, Cloud SQL, or BigQuery.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "AWS RDS Getting Started", url: "https://aws.amazon.com/rds/getting-started/" },
        ],
        practice: "Deploy a small PostgreSQL instance on AWS free tier and connect to it remotely.",
      },
      {
        what: "Database Sharding & Partitioning",
        why: "When one server isn't enough. Learn to split large tables across multiple disks or servers.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Sharding vs Partitioning", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
        ],
        practice: "Implement table partitioning on a 'Logs' table based on the year of entry.",
      },
      {
        what: "Data Security & Encryption",
        why: "Protecting PII (Personally Identifiable Information). Learn SSL/TLS and encryption at rest.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "DB Security Best Practices", url: "https://www.postgresql.org/docs/current/client-authentication.html" },
        ],
        practice: "Enable SSL connections for your local database and enforce password complexity.",
      },
      {
        what: "Compliance & Auditing (GDPR/HIPAA)",
        why: "DBAs must ensure data handling meets legal standards for privacy and retention.",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "GDPR for DBAs", url: "https://www.red-gate.com/blog/database-development/gdpr-guide-for-dbas" },
        ],
        practice: "Write a data retention script that automatically deletes records older than 7 years.",
      },
      {
        what: "Automation with Python/Bash",
        why: "Manually doing things is for amateurs. Pro DBAs automate patching, backups, and monitoring.",
        time: "2 Weeks",
        prereqs: "Step 8, Step 15",
        resources: [
          { name: "Python for DBAs", url: "https://realpython.com/prevent-python-sql-injection/" },
        ],
        practice: "Write a Python script that analyzes the log file and sends a summary report via email.",
      },
      {
        what: "Data Warehousing Basics",
        why: "Understand the difference between OLTP (App DB) and OLAP (Analytical DB) like Snowflake.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Intro to Data Warehousing", url: "https://www.snowflake.com/guides/what-data-warehouse" },
        ],
        practice: "Design a simple Star Schema for a retail sales analysis database.",
      },
      {
        what: "Disaster Recovery Planning",
        why: "To create a 'Runbook' for what happens when the primary data center goes offline.",
        time: "1 Week",
        prereqs: "All previous steps",
        resources: [
          { name: "Disaster Recovery for DBs", url: "https://aws.amazon.com/blogs/database/disaster-recovery-strategies-for-databases-on-aws/" },
        ],
        practice: "Write a 2-page recovery plan for a simulated database crash.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Library Management DB", teaches: "Relationships, Normalization, Basic CRUD.", tech: "PostgreSQL / MySQL" },
  { level: "Beginner", title: "Personal Finance DB", teaches: "Aggregations, GROUP BY, and data types.", tech: "SQLite" },
  { level: "Beginner", title: "E-commerce Product Catalog", teaches: "Indexing, Search, and Constraints.", tech: "MySQL" },
  { level: "Intermediate", title: "Automated Daily Backup Tool", teaches: "Scripting, CLI, Cron jobs.", tech: "Bash, pg_dump" },
  { level: "Intermediate", title: "Slow Query Optimizer", teaches: "EXPLAIN ANALYZE, Profiling, Indexing strategy.", tech: "PostgreSQL" },
  { level: "Intermediate", title: "Multi-user Permission System", teaches: "RBAC, Roles, Security audit.", tech: "PostgreSQL" },
  { level: "Intermediate", title: "Real-time Sales Dashboard DB", teaches: "Views, Triggers, and Stored Procedures.", tech: "SQL, Grafana" },
  { level: "Advanced", title: "High Availability DB Cluster", teaches: "Replication, Load balancing, Failover.", tech: "PostgreSQL, HAProxy" },
  { level: "Advanced", title: "Fraud Detection Engine", teaches: "Complex triggers, Audit trails, Advanced logic.", tech: "PostgreSQL, Python" },
  { level: "Advanced", title: "Cloud Migration Pipeline", teaches: "ETL, Cloud DBs, Data transfer safety.", tech: "AWS DMS, S3, RDS" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundational DBA",
    description: "Focus on SQL, Design, and basic installation to handle small application databases.",
    schedule: [
      "Days 1-7: Relational Model, ER Diagrams, and basic SQL.",
      "Days 8-15: Normalization, Constraints, and DB Installation.",
      "Days 16-23: Basic Security, Users, and CRUD operations.",
      "Days 24-30: Build the 'Library Management' project and learn simple Backups.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Production DBA",
    description: "Balanced path for professional server management and performance optimization.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Indexing, Performance Tuning, and Linux mastery.",
      "Days 41-60: Stored Procedures, Triggers, and Automated Backups.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Database Architect",
    description: "Comprehensive path including Replication, Cloud, and Compliance for senior roles.",
    schedule: [
      "Days 1-30: Core SQL and Relational Foundations.",
      "Days 31-60: Management, Optimization, and Monitoring.",
      "Days 61-90: High Availability, Cloud, Security, and Disaster Recovery.",
    ]
  }
];

const interviewTopics = [
  "Explain ACID properties and why they are important.",
  "Difference between Clustered and Non-Clustered Indexes.",
  "What is the difference between TRUNCATE, DELETE, and DROP?",
  "How do you resolve a Deadlock situation?",
  "Explain the CAP Theorem in the context of distributed databases.",
  "Describe the steps you take when a developer reports a 'slow query'.",
  "What is Normalization? Explain 1NF through 3NF with examples.",
  "How does a B-Tree index work under the hood?",
  "Describe the difference between Full, Differential, and Incremental backups.",
  "What is 'SQL Injection' and how do you prevent it as a DBA?",
];

const codingQuestions = [
  { question: "Write a query to find the second highest salary without using LIMIT.", topic: "SQL Logic" },
  { question: "Identify all duplicate records in a table based on email.", topic: "Grouping" },
  { question: "Write a SQL script to delete all rows older than 30 days.", topic: "Maintenance" },
  { question: "Create a stored procedure that updates stock count after an order.", topic: "Automation" },
];

const mcqs = [
  { question: "Which command is used to grant privileges to a user?", options: ["ALLOW", "PERMIT", "GRANT", "GIVE"], answer: "GRANT" },
  { question: "What is the default port for PostgreSQL?", options: ["3306", "5432", "1433", "1521"], answer: "5432" },
  { question: "Which constraint ensures that all values in a column are different?", options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "NOT NULL"], answer: "UNIQUE" },
];

const mistakes = [
  "Not Testing Backups: A backup is useless if it cannot be restored.",
  "Neglecting the Log File: Most errors are visible in logs long before the system crashes.",
  "Hardcoding Credentials: Storing passwords in scripts instead of environment variables.",
  "Indexing Everything: Too many indexes slow down INSERT and UPDATE operations.",
  "Ignoring Hardware Limits: Databases are I/O intensive; slow disks = slow DB.",
  "Running Queries on Production: Never test a new query on a live server without LIMIT.",
  "Manual Changes only: Not documenting server config changes or schema updates.",
  "Poor Naming Conventions: Using names like 'Table1' or 'temp_var' makes maintenance impossible.",
  "Ignoring Security Patches: Failing to update the database engine regularly.",
  "Not Monitoring Slow Queries: Letting bad code pile up until the server is unresponsive.",
];

export default function DbaRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Database className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Database Administrator Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive path to mastering the art of data management. From your first ER diagram to managing global, high-availability cloud clusters.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional DBA.</CardDescription>
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
            <CardDescription>Master the topics and questions required to land a role as a Database Administrator.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> SQL & Logic Challenges</h3>
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
                    {['RDBMS', 'SQL', 'PostgreSQL', 'Performance Tuning', 'Replication', 'High Availability', 'Backup & Recovery', 'Database Design', 'Indexing', 'Cloud DBs', 'Linux Admin', 'Compliance'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Table className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'before and after' metrics for performance optimization projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include Entity-Relationship Diagrams (ERDs) in your project READMEs.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase your automation scripts (Python/Bash) on GitHub.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">The Keeper of the Data</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Database administration is a journey of precision and responsibility. You are the guardian of information. Stay consistent, read the execution plans, test your restores, and never stop learning how to make the system faster and more secure. Your future as a world-class DBA starts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start DB Projects
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
