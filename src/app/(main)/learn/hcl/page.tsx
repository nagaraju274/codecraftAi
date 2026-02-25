
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
  ShieldAlert,
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
  Cloud,
  Lock,
  Anchor,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Syntax & Core Infrastructure",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to HCL & HashiCorp Ecosystem",
        why: "HCL is the industry standard for defining infrastructure as code. Understanding its role in tools like Terraform and Packer is the first step.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "HCL Syntax Specification", url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md" },
          { name: "Terraform Intro (YouTube)", url: "https://www.youtube.com/watch?v=h970Z6E6ByA" },
        ],
        practice: "Install Terraform CLI. Create a 'main.tf' file and explain the basic structure of a block.",
      },
      {
        what: "Block Syntax & Attributes",
        why: "HCL is built on 'Blocks' (containers) and 'Attributes' (key-value pairs). Mastering this structure is vital for any configuration.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "HCL Configuration Syntax", url: "https://developer.hashicorp.com/terraform/language/syntax/configuration" },
        ],
        practice: "Write a YAML-to-HCL comparison for a simple server configuration.",
      },
      {
        what: "Arguments & Comments",
        why: "To provide metadata and document your infrastructure decisions. Clear comments are essential for team collaboration.",
        time: "1 Day",
        prereqs: "Step 2",
        resources: [
          { name: "Terraform Style Guide", url: "https://developer.hashicorp.com/terraform/language/syntax/style" },
        ],
        practice: "Document a resource block using both '#' and '/* */' comment styles.",
      },
      {
        what: "Providers & Resource Blocks",
        why: "Providers (AWS, Azure, GCP) allow HCL to talk to the cloud. Resource blocks define the physical components you want to build.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Terraform Providers Guide", url: "https://developer.hashicorp.com/terraform/language/providers" },
        ],
        practice: "Configure an AWS provider and define a simple S3 bucket resource.",
      },
      {
        what: "Variables & Input handling",
        why: "To make your HCL dynamic. Instead of hardcoding values, you use variables to make code reusable across environments.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Input Variables", url: "https://developer.hashicorp.com/terraform/language/values/variables" },
        ],
        practice: "Create a 'variables.tf' file and pass a 'region' variable to your provider.",
      },
      {
        what: "Output Values",
        why: "Outputs allow you to extract information about your infrastructure (like an IP address) after it has been created.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Output Values Guide", url: "https://developer.hashicorp.com/terraform/language/values/outputs" },
        ],
        practice: "Define an output that returns the ARN of the S3 bucket you created in Step 4.",
      },
      {
        what: "Basic Types (String, Number, Bool)",
        why: "To ensure type safety in your configurations. Mastering primitive types prevents runtime errors during deployment.",
        time: "2 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Type Constraints", url: "https://developer.hashicorp.com/terraform/language/expressions/types" },
        ],
        practice: "Add type constraints to all variables in a project to ensure 'count' is always a number.",
      },
      {
        what: "Local Values (Locals)",
        why: "To define intermediate constants or complex expressions once and reuse them, making your HCL DRY (Don't Repeat Yourself).",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Local Values Documentation", url: "https://developer.hashicorp.com/terraform/language/values/locals" },
        ],
        practice: "Define a local variable that combines a 'project_name' and 'environment' into a standard tag.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Logic & Modularization",
    level: "Intermediate",
    steps: [
      {
        what: "HCL Expressions & Interpolation",
        why: "To build complex values dynamically using variables and mathematical operations within your strings.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Expressions Guide", url: "https://developer.hashicorp.com/terraform/language/expressions" },
        ],
        practice: "Create a resource name dynamically using a string interpolation of three different variables.",
      },
      {
        what: "HCL Functions (Built-in)",
        why: "Tcl-style functions for string manipulation, math, and encoding (e.g., base64encode, lookup, format).",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Terraform Function Reference", url: "https://developer.hashicorp.com/terraform/language/functions" },
        ],
        practice: "Use the 'lookup' function to find a specific AMI ID from a map based on a region variable.",
      },
      {
        what: "Conditional Expressions (Ternary)",
        why: "To make decisions in your code (e.g., create a specific resource only if 'environment' is 'prod').",
        time: "4 Days",
        prereqs: "Step 9",
        resources: [
          { name: "Conditionals in HCL", url: "https://developer.hashicorp.com/terraform/language/expressions/conditionals" },
        ],
        practice: "Set the instance size to 't3.large' if env is prod, otherwise 't3.micro' using a ternary operator.",
      },
      {
        what: "Loops: for_each & count",
        why: "To create multiple instances of a resource without duplicating code. This is essential for scaling infrastructure.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Count vs For Each (YouTube)", url: "https://www.youtube.com/watch?v=look-up-terraform-loops" },
        ],
        practice: "Use 'for_each' to create 3 different IAM users from a single list variable.",
      },
      {
        what: "Data Sources",
        why: "To fetch information from existing infrastructure outside of your current HCL project (e.g., finding the latest Ubuntu AMI).",
        time: "5 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Data Sources Guide", url: "https://developer.hashicorp.com/terraform/language/data-sources" },
        ],
        practice: "Use a data source to find the VPC ID of an existing network in your cloud account.",
      },
      {
        what: "Modules: Reusable Infrastructure",
        why: "The #1 architectural skill. Modules allow you to package and version infrastructure components for your entire team.",
        time: "2 Weeks",
        prereqs: "Intermediate Logic",
        resources: [
          { name: "Creating Modules", url: "https://developer.hashicorp.com/terraform/language/modules/develop" },
        ],
        practice: "Package your S3 bucket and its policies into a reusable module and call it from a 'dev' project.",
      },
      {
        what: "State Management & Backends",
        why: "HCL only describes what you want; the 'State' file is the source of truth for what actually exists. Mastering backends prevents data loss.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "State Management Overview", url: "https://developer.hashicorp.com/terraform/language/state" },
        ],
        practice: "Configure an S3 backend with DynamoDB locking to store your state file securely.",
      },
      {
        what: "Dynamic Blocks",
        why: "To generate nested configuration blocks (like security group rules) based on a variable list.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Dynamic Blocks Guide", url: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks" },
        ],
        practice: "Create a security group where the ingress rules are generated from a list of port numbers.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Enterprise Scaling",
    level: "Advanced",
    steps: [
      {
        what: "Complex Types & Validation",
        why: "To build bulletproof enterprise modules. Learn about object types, tuples, and custom variable validation rules.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Custom Validation Rules", url: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules" },
        ],
        practice: "Write a validation rule that ensures a variable string starts with 'prod-' and has at least 10 characters.",
      },
      {
        what: "Terragrunt: Keeping HCL DRY",
        why: "Terragrunt is the standard wrapper for managing thousands of HCL files across multiple accounts and regions.",
        time: "2 Weeks",
        prereqs: "Modules, Backends",
        resources: [
          { name: "Terragrunt Getting Started", url: "https://terragrunt.gruntwork.io/docs/getting-started/quick-start/" },
        ],
        practice: "Set up a Terragrunt project that calls your S3 module for 'Dev', 'Staging', and 'Prod' with zero code duplication.",
      },
      {
        what: "Sentinel: Policy as Code",
        why: "To enforce security and compliance rules (e.g., 'no public buckets'). Sentinel ensures HCL meets corporate standards.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "HashiCorp Sentinel Docs", url: "https://www.hashicorp.com/sentinel" },
        ],
        practice: "Write a simple Sentinel policy that prevents the creation of instances larger than 't3.medium'.",
      },
      {
        what: "HCL in Packer & Waypoint",
        why: "To broaden your skills. HCL isn't just for Terraform; it's used to define images (Packer) and application lifecycles (Waypoint).",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Packer HCL Introduction", url: "https://developer.hashicorp.com/packer/tutorials/docker-get-started/get-started-hcl-template" },
        ],
        practice: "Write a Packer HCL template to build a basic Amazon Linux 2 AMI with Nginx installed.",
      },
      {
        what: "Performance: Parallelism & Targeting",
        why: "Large HCL projects take a long time to plan. Learn to use '-parallelism' and '-target' for surgery-like updates.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Plan & Apply Tuning", url: "https://developer.hashicorp.com/terraform/cli/commands/plan" },
        ],
        practice: "Measure the plan time of a large project and use targeting to update only one specific resource.",
      },
      {
        what: "CI/CD Pipelines for HCL (ArgoCD / GitHub Actions)",
        why: "To automate infrastructure delivery. Learn about 'Plan' PR reviews and automated 'Apply' steps.",
        time: "1 Week",
        prereqs: "Git Basics",
        resources: [
          { name: "GitHub Actions for Terraform", url: "https://github.com/marketplace/actions/hashicorp-setup-terraform" },
        ],
        practice: "Set up a GitHub Action that runs 'terraform plan' and comments the output on every Pull Request.",
      },
      {
        what: "Custom Providers (Theory & SDK)",
        why: "When a cloud service doesn't have a provider, you build it in Go. Essential for internal platforms.",
        time: "2 Weeks",
        prereqs: "Go Basics",
        resources: [
          { name: "Call for Providers", url: "https://developer.hashicorp.com/terraform/tutorials/providers-plugin-framework/providers-plugin-framework-introduction" },
        ],
        practice: "Research the 'Terraform Provider Framework' and map how HCL blocks map to Go functions.",
      },
      {
        what: "Final Mastery Project: The Enterprise Landing Zone",
        why: "To synthesize all skills: Modules, Terragrunt, Security, and CI/CD into a production-grade environment.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Build a complete 'AWS Landing Zone' with VPCs, IAM roles, and centralized logging—all managed via a CI/CD pipeline.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Static Website Infrastructure", teaches: "Providers, S3 buckets, and public policies.", tech: "HCL, AWS S3" },
  { level: "Beginner", title: "IAM User Manager", teaches: "Lists, variables, and security resources.", tech: "HCL, AWS IAM" },
  { level: "Beginner", title: "VPC Networking Lab", teaches: "Basic CIDR math, subnets, and routing.", tech: "HCL, AWS VPC" },
  { level: "Intermediate", title: "Modular Web Server Suite", teaches: "Modules, outputs, and cross-module referencing.", tech: "HCL, EC2, SG" },
  { level: "Intermediate", title: "Auto-Scaling RDS Cluster", teaches: "Complex types, dynamic blocks, and secrets management.", tech: "HCL, AWS RDS" },
  { level: "Intermediate", title: "Multi-Region VPN Gateway", teaches: "Data sources, providers, and region-aliasing.", tech: "HCL, VPN" },
  { level: "Intermediate", title: "Lambda Image Processor", teaches: "File paths, permissions, and event triggers.", tech: "HCL, AWS Lambda" },
  { level: "Advanced", title: "Multi-Cloud K8s Blueprint", teaches: "Terragrunt, DDP-like state sync, and cluster orchestration.", tech: "Terragrunt, EKS, GKE" },
  { level: "Advanced", title: "Compliance-Locked Platform", teaches: "Sentinel policies, custom validation, and RBAC.", tech: "HCL, Sentinel" },
  { level: "Advanced", title: "Zero-Downtime SaaS Pipeline", teaches: "CI/CD integration, blue-green deployments, and state recovery.", tech: "GitHub Actions, Terraform" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Cloud Scripter",
    description: "Focus on syntax and basic resource management to build simple cloud components.",
    schedule: [
      "Days 1-7: HCL Syntax, Providers, and S3 resources.",
      "Days 8-15: Variables, Outputs, and basic VPC networking.",
      "Days 16-23: Introduction to State and Backends.",
      "Days 24-30: Build the 'Static Website' project and learn basic CLI.",
    ]
  },
  {
    title: "60-Day Standard Plan: The DevOps Pro",
    description: "Balanced path covering modularity, logic loops, and professional state handling.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Loops (for_each), Modules, and Data Sources.",
      "Days 41-60: Remote State, Dynamic Blocks, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Infrastructure Architect",
    description: "Comprehensive path for enterprise-level scaling, security, and multi-tool orchestration.",
    schedule: [
      "Days 1-30: Core HCL & Terraform fundamentals.",
      "Days 31-60: Professional Systems (Terragrunt, Testing, CI/CD).",
      "Days 61-90: Sentinel Policies, Advanced Logic, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "What is HCL and how does it compare to JSON or YAML?",
  "Explain the difference between a Module and a Resource.",
  "What is 'Terraform State' and why is it crucial?",
  "Difference between 'count' and 'for_each' for resource creation.",
  "What are 'Data Sources' and when would you use them?",
  "How do you handle secrets (passwords) in HCL safely?",
  "Explain the purpose of 'lifecycle' blocks (prevent_destroy, ignore_changes).",
  "What is a 'Merge Key' and how does it help with inheritance?",
  "Describe the 'Dry' principle in the context of Terragrunt.",
  "How do you resolve a state lock in a shared environment?",
];

const codingQuestions = [
  { question: "Write a for_each loop that creates a security group for a list of port numbers.", topic: "Loops" },
  { question: "Create a module that outputs the public IP of an EC2 instance.", topic: "Outputs" },
  { question: "Write a validation block for a variable that must be one of 'dev', 'test', or 'prod'.", topic: "Validation" },
  { question: "How would you call a module located in a separate GitHub repository?", topic: "Modules" },
];

const mcqs = [
  { question: "Which file extension is standard for HCL configuration?", options: [".hcl", ".tf", ".conf", ".yaml"], answer: ".tf (for Terraform)" },
  { question: "Which command is used to format HCL code automatically?", options: ["terraform style", "terraform fmt", "hcl clean", "terraform tidy"], answer: "terraform fmt" },
  { question: "What happens when you run 'terraform apply'?", options: ["It only plans changes", "It builds the infrastructure described", "It deletes everything", "It installs providers only"], answer: "It builds the infrastructure described" },
];

const mistakes = [
  "Hardcoding values instead of using variables - makes code brittle.",
  "Committing sensitive secrets (API keys) to Git - use .env or Vault instead.",
  "Ignoring the lock file (.terraform.lock.hcl) - leads to version drift across machines.",
  "Not using 'terraform fmt' - makes code messy and hard to review.",
  "Massive root modules - break logic into smaller, focused sub-modules.",
  "Using 'count' for complex lists - changing list order can destroy and recreate resources unexpectedly.",
  "Manual changes in the cloud console - the database and code will become out of sync (drift).",
  "Neglecting 'terraform plan' reviews - always inspect the plan before applying.",
  "Poor naming conventions - use descriptive, consistent names for resources.",
  "Not using remote state locking - multiple users can corrupt the state file simultaneously.",
];

export default function HclRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Anchor className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The HCL Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the language of the modern cloud. From basic infrastructure definitions to building global-scale, secure blueprints for Terraform, Packer, and beyond.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn/languages?section=item-DevOps / Configuration / Infra-as-Code">
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your DevOps portfolio.</CardDescription>
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
                    <Cloud className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Choose a timeline that fits your schedule.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream DevOps or Cloud Engineer role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live HCL Challenges</h3>
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
                    {['HCL', 'Terraform', 'Infrastructure as Code (IaC)', 'Terragrunt', 'Sentinel', 'Packer', 'Cloud Provisioning', 'State Management', 'Modules', 'CI/CD Pipelines', 'AWS/Azure/GCP', 'Drift Detection'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Idempotency' and 'Declarative' code.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include 'Plan' outputs in your project documentation to show accuracy.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with modular and reusable infrastructure blueprints.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate the Entire Cloud.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            HCL is the bridge between human logic and massive cloud clusters. It rewards the organized, the secure, and the automated. Stay consistent, read the plan twice, and remember: The most stable clouds in the world are built on the foundations you're learning today. Your infrastructure journey starts now!
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
