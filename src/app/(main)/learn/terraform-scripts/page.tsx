
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
  Cloud,
  Lock,
  Anchor,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Infrastructure Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to IaC & Terraform",
        why: "To understand why we manage infrastructure with code (automation, versioning, consistency) and how Terraform differs from Ansible or CloudFormation.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "What is Terraform? (Official)", url: "https://developer.hashicorp.com/terraform/intro" },
          { name: "Terraform for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=h970Z6E6ByA" },
        ],
        practice: "Install Terraform CLI. Run 'terraform version' and 'terraform help'.",
      },
      {
        what: "HCL Syntax & Block Structure",
        why: "HCL (HashiCorp Configuration Language) is the primary syntax for Terraform. You must master Blocks, Arguments, and Identifiers.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "HCL Syntax Documentation", url: "https://developer.hashicorp.com/terraform/language/syntax/configuration" },
        ],
        practice: "Write a simple HCL block representing a local file resource.",
      },
      {
        what: "Providers & Plugins",
        why: "Providers (AWS, Azure, GCP) are the plugins that allow Terraform to interact with cloud APIs.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Terraform Providers Guide", url: "https://developer.hashicorp.com/terraform/language/providers" },
        ],
        practice: "Configure an AWS provider block and run 'terraform init' to download the plugin.",
      },
      {
        what: "Resources & Data Sources",
        why: "Resources are things you build; Data Sources are things you read from the cloud. This is the 'What' of your scripts.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Resources vs Data Sources", url: "https://developer.hashicorp.com/terraform/language/data-sources" },
        ],
        practice: "Define an AWS S3 bucket as a resource and fetch the latest Ubuntu AMI as a data source.",
      },
      {
        what: "Variables & Input Handling",
        why: "To make your scripts dynamic and reusable. Hardcoded values make scripts brittle.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Input Variables", url: "https://developer.hashicorp.com/terraform/language/values/variables" },
        ],
        practice: "Create a 'variables.tf' file and pass a 'region' and 'bucket_name' variable to your resources.",
      },
      {
        what: "Output Values",
        why: "To extract information (like an IP address or ARN) after infrastructure is created for use in other systems.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Output Values Docs", url: "https://developer.hashicorp.com/terraform/language/values/outputs" },
        ],
        practice: "Define an output that returns the website endpoint of an S3 bucket.",
      },
      {
        what: "The Core CLI Workflow",
        why: "Mastering init, plan, apply, and destroy is the daily ritual of a cloud engineer.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Terraform CLI Commands", url: "https://developer.hashicorp.com/terraform/cli/commands" },
        ],
        practice: "Perform a full lifecycle: init -> plan -> apply -> destroy on a simple local-file resource.",
      },
      {
        what: "The State File (.tfstate)",
        why: "The state file is Terraform's memory. Understanding how it maps your code to real-world resources is critical.",
        time: "3 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Understanding State", url: "https://developer.hashicorp.com/terraform/language/state" },
        ],
        practice: "Inspect a 'terraform.tfstate' file after an apply. Use 'terraform show' to read it cleanly.",
      },
      {
        what: "Local Values (Locals)",
        why: "To define constants or complex expressions once and reuse them, making your scripts DRY (Don't Repeat Yourself).",
        time: "2 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Local Values Guide", url: "https://developer.hashicorp.com/terraform/language/values/locals" },
        ],
        practice: "Create a local variable that generates standard resource tags based on 'project' and 'owner'.",
      },
      {
        what: "Provisioners: Remote & Local Exec",
        why: "To run scripts on your machine or the remote server during resource creation. (Use sparingly!)",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Terraform Provisioners", url: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax" },
        ],
        practice: "Use a local-exec provisioner to save the public IP of a created instance to a text file.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Scaling & Modular Logic",
    level: "Intermediate",
    steps: [
      {
        what: "Terraform Modules: Reusability",
        why: "The most important architectural skill. Modules allow you to package and version infrastructure for your entire team.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Creating Modules", url: "https://developer.hashicorp.com/terraform/language/modules/develop" },
        ],
        practice: "Build a reusable 'Network' module that sets up a VPC and subnets, then call it from a 'Main' project.",
      },
      {
        what: "Loops: count & for_each",
        why: "To create multiple resources without duplicating code blocks. Essential for scaling.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Count and For_Each (YouTube)", url: "https://www.youtube.com/watch?v=look-up-tf-loops" },
        ],
        practice: "Use 'for_each' to create a list of 5 different IAM users from a single map variable.",
      },
      {
        what: "Dynamic Blocks",
        why: "To generate repeated nested blocks (like security group rules) dynamically based on a variable list.",
        time: "5 Days",
        prereqs: "Step 12",
        resources: [
          { name: "Dynamic Blocks Documentation", url: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks" },
        ],
        practice: "Create a security group where the allowed ports are generated from a list using a dynamic block.",
      },
      {
        what: "Built-in Functions",
        why: "To perform complex string, list, and map transformations directly in your scripts.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Terraform Function Reference", url: "https://developer.hashicorp.com/terraform/language/functions" },
        ],
        practice: "Use 'lookup', 'merge', and 'format' to dynamically generate resource names.",
      },
      {
        what: "Workspaces",
        why: "To manage different environments (Dev, Staging, Prod) using the same code but separate state files.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Terraform Workspaces", url: "https://developer.hashicorp.com/terraform/language/state/workspaces" },
        ],
        practice: "Create 'dev' and 'prod' workspaces and observe how they maintain independent states.",
      },
      {
        what: "Remote Backends & State Locking",
        why: "In teams, you cannot store state locally. Learn to use S3/GCS backends with locking (DynamoDB) to prevent corruption.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Backend Configuration", url: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration" },
        ],
        practice: "Configure an S3 backend for your project and verify that state is uploaded to the cloud.",
      },
      {
        what: "Dependency Management (depends_on)",
        why: "Terraform usually figures out order, but sometimes you must explicitly tell it which resource to build first.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Resource Dependencies", url: "https://developer.hashicorp.com/terraform/language/resources/behavior#dependencies" },
        ],
        practice: "Create an IAM policy that must be created *before* an EC2 instance that uses it.",
      },
      {
        what: "Lifecycle Meta-Arguments",
        why: "To control how resources are updated or deleted (e.g., prevent_destroy, create_before_destroy).",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "The lifecycle Meta-Argument", url: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle" },
        ],
        practice: "Apply 'prevent_destroy' to a production database resource to ensure it's never deleted by accident.",
      },
      {
        what: "Importing Existing Infrastructure",
        why: "Most real jobs involve bringing existing, manually created cloud resources under Terraform control.",
        time: "5 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Importing Infrastructure", url: "https://developer.hashicorp.com/terraform/language/import" },
        ],
        practice: "Manually create an S3 bucket in the AWS console and then use 'terraform import' to manage it.",
      },
      {
        what: "Taint & Replace Commands",
        why: "Sometimes resources get 'stuck'. Learning to force a recreation of a specific resource is a vital troubleshooting skill.",
        time: "2 Days",
        prereqs: "Step 7",
        resources: [
          { name: "Tainting Resources", url: "https://developer.hashicorp.com/terraform/cli/commands/taint" },
        ],
        practice: "Mark an instance as tainted and observe how the next 'apply' replaces it.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Security",
    level: "Advanced",
    steps: [
      {
        what: "Terragrunt: Advanced DRY",
        why: "Terragrunt is the industry standard for managing large-scale Terraform projects across multiple accounts and regions.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Terragrunt Getting Started", url: "https://terragrunt.gruntwork.io/docs/getting-started/quick-start/" },
        ],
        practice: "Set up a Terragrunt project that calls your modules for 'Staging' and 'Prod' with zero code duplication.",
      },
      {
        what: "Sentinel & OPA (Policy as Code)",
        why: "To enforce security and compliance rules (e.g., 'no public S3 buckets') before any code is applied.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "HashiCorp Sentinel", url: "https://www.hashicorp.com/sentinel" },
          { name: "Rego/OPA for Terraform", url: "https://www.openpolicyagent.org/docs/latest/terraform/" },
        ],
        practice: "Write a simple policy that prevents the creation of any instance larger than 't3.medium'.",
      },
      {
        what: "Advanced State Recovery",
        why: "To fix a corrupted state file or manually move resources between states. High-risk, high-reward skill.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Manipulating State", url: "https://developer.hashicorp.com/terraform/cli/state" },
        ],
        practice: "Use 'terraform state mv' to move a resource from one module to another without recreating it.",
      },
      {
        what: "Custom Providers (Go SDK)",
        why: "When a cloud service doesn't have a provider, you build it yourself. Essential for building internal platforms.",
        time: "3 Weeks",
        prereqs: "Go Programming Basics",
        resources: [
          { name: "Terraform Plugin Framework", url: "https://developer.hashicorp.com/terraform/tutorials/providers-plugin-framework" },
        ],
        practice: "Build a 'Hello World' provider that manages a simple key-value file on your computer.",
      },
      {
        what: "Security Hardening (HashiCorp Vault)",
        why: "To manage sensitive secrets (passwords, keys) instead of putting them in .tfvars files.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Vault Terraform Provider", url: "https://registry.terraform.io/providers/hashicorp/vault/latest/docs" },
        ],
        practice: "Configure Terraform to fetch its AWS credentials directly from a dynamic Vault role.",
      },
      {
        what: "Performance: Graph & Parallelism",
        why: "To optimize build times for 1000+ resources. Learn how to read the resource dependency graph.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Resource Graph", url: "https://developer.hashicorp.com/terraform/cli/commands/graph" },
        ],
        practice: "Use 'terraform graph' and Graphviz to visualize the dependencies of a complex project.",
      },
      {
        what: "CI/CD for Terraform (GitHub Actions)",
        why: "To automate infrastructure delivery. Every PR should run a plan, and every merge should run an apply.",
        time: "1 Week",
        prereqs: "Git Basics",
        resources: [
          { name: "Automating Terraform with GitHub Actions", url: "https://developer.hashicorp.com/terraform/tutorials/automation/github-actions" },
        ],
        practice: "Set up a pipeline that comments the 'terraform plan' output back onto a GitHub Pull Request.",
      },
      {
        what: "Drift Detection & Remediation",
        why: "To identify when someone manually changed something in the cloud console and bring it back to the 'desired state'.",
        time: "4 Days",
        prereqs: "Step 19",
        resources: [
          { name: "Drift Detection Strategies", url: "https://www.youtube.com/watch?v=look-up-tf-drift" },
        ],
        practice: "Manually change a bucket tag in AWS and use 'terraform plan' to detect and fix the drift.",
      },
      {
        what: "Multi-Cloud Strategies",
        why: "To build architecture that spans AWS and Azure or GCP, using a single consistent tool.",
        time: "1 Week",
        prereqs: "All Stage 1 & 2",
        resources: [
          { name: "Multi-cloud with Terraform", url: "https://www.hashicorp.com/resources/multi-cloud-infrastructure-management-with-terraform" },
        ],
        practice: "Build a project that triggers a Lambda in AWS based on a change in a Google Cloud Storage bucket.",
      },
      {
        what: "Final Mastery Project: Enterprise Cloud",
        why: "To synthesize all skills: Modules, Remote State, Security, and CI/CD into a production-grade system.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Design and build a 'Production Ready Landing Zone' with VPCs, IAM roles, and centralized logging—all managed via CI/CD.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Static Website Infrastructure", teaches: "Providers, S3 buckets, and public policies.", tech: "Terraform, AWS S3" },
  { level: "Beginner", title: "IAM User Manager", teaches: "Lists, variables, and security resources.", tech: "Terraform, AWS IAM" },
  { level: "Beginner", title: "VPC Networking Lab", teaches: "Subnets, routing, and basic CIDR math.", tech: "Terraform, AWS VPC" },
  { level: "Intermediate", title: "Modular Web Server Suite", teaches: "Modules, outputs, and cross-module references.", tech: "Terraform, EC2, SG" },
  { level: "Intermediate", title: "Auto-Scaling RDS Cluster", teaches: "Complex types, dynamic blocks, and secrets.", tech: "Terraform, AWS RDS" },
  { level: "Intermediate", title: "Multi-Region Gateway", teaches: "Data sources, provider aliasing, and regions.", tech: "Terraform, VPN" },
  { level: "Intermediate", title: "Lambda Image Processor", teaches: "Cloud functions, event triggers, and permissions.", tech: "Terraform, AWS Lambda" },
  { level: "Advanced", title: "Multi-Cloud K8s Blueprint", teaches: "Terragrunt, DDP-like state sync, and orchestration.", tech: "Terragrunt, EKS, GKE" },
  { level: "Advanced", title: "Compliance-Locked Platform", teaches: "Sentinel, custom validation, and RBAC.", tech: "Terraform, Sentinel" },
  { level: "Advanced", title: "Zero-Downtime SaaS Pipeline", teaches: "CI/CD, blue-green deployments, and state recovery.", tech: "GitHub Actions, Terraform" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Cloud Scripter",
    description: "Focus on core syntax and basic resource management.",
    schedule: [
      "Days 1-7: HCL Syntax, Providers, and S3 resources.",
      "Days 8-15: Variables, Outputs, and basic VPC networking.",
      "Days 16-23: Introduction to State and Backends.",
      "Days 24-30: Build 2 Beginner projects and learn basic CLI.",
    ]
  },
  {
    title: "60-Day Standard Plan: The DevOps Pro",
    description: "Balanced path covering modularity, loops, and professional state handling.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Loops (for_each), Modules, and Data Sources.",
      "Days 41-60: Remote State, Dynamic Blocks, and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Architect",
    description: "Comprehensive path for enterprise-level scaling and security.",
    schedule: [
      "Days 1-30: Core Terraform and Relational Foundations.",
      "Days 31-60: Professional Systems (Terragrunt, Testing, CI/CD).",
      "Days 61-90: Sentinel, Advanced Logic, and final capstone project.",
    ]
  }
];

const interviewTopics = [
  "What is Terraform and how does it compare to Ansible?",
  "Explain the Terraform State file and why it is crucial.",
  "Difference between a Module and a Resource.",
  "How do you handle secrets in Terraform?",
  "What is the difference between 'count' and 'for_each'?",
  "Explain the purpose of 'Data Sources'.",
  "How do you resolve a state lock issue?",
  "What are 'Lifecycle' blocks and when would you use them?",
  "Describe the 'Desired State' vs 'Current State' concept.",
  "What is Terragrunt and what problem does it solve?",
];

const codingQuestions = [
  { question: "Write a for_each loop to create security groups for a list of ports.", topic: "Loops" },
  { question: "Create a module that outputs the public IP of an instance.", topic: "Modules" },
  { question: "Write a validation rule for a variable that must be 'dev' or 'prod'.", topic: "Validation" },
  { question: "How would you call a module located in a separate Git repository?", topic: "Modules" },
];

const mcqs = [
  { question: "Which command is used to download provider plugins?", options: ["terraform plan", "terraform init", "terraform apply", "terraform get"], answer: "terraform init" },
  { question: "What is the standard file extension for Terraform scripts?", options: [".tf", ".hcl", ".yaml", ".json"], answer: ".tf" },
  { question: "Which join returns all records when there is a match in either table?", options: ["Inner", "Left", "Right", "Full Outer"], answer: "Full Outer" },
];

const mistakes = [
  "Hardcoding values instead of using variables.",
  "Committing sensitive secrets (API keys) to Git.",
  "Ignoring the lock file (.terraform.lock.hcl).",
  "Not using 'terraform fmt' to keep code clean.",
  "Massive root modules (split them up!).",
  "Using 'count' for complex lists (causes destroy/recreate bugs).",
  "Manual changes in the cloud console (causes drift).",
  "Neglecting 'terraform plan' reviews before applying.",
  "Poor naming conventions for resources.",
  "Not using remote state locking in team environments.",
];

export default function TerraformRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Anchor className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The Terraform Scripts Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of automating the cloud. From writing your first .tf file to architecting global-scale infrastructure blueprints for the modern enterprise.
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
            <CardDescription>Expert guidance to help you land your dream Infrastructure role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Scripting Challenges</h3>
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
                    {['Terraform', 'Infrastructure as Code (IaC)', 'HCL', 'State Management', 'Modules', 'Terragrunt', 'Sentinel', 'Drift Detection', 'Multi-Cloud', 'GitHub Actions', 'AWS/Azure/GCP', 'Immutable Infrastructure'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Emphasize your understanding of 'Idempotency' and 'Declarative Code'.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include 'Plan' outputs in your project documentation to show accuracy.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with modular and reusable infrastructure designs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <AlertTriangle className="h-6 w-6"/>
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
            Terraform is the bridge between your logic and massive cloud clusters. It rewards the organized, the secure, and the automated. Stay consistent, read the plan twice, and remember: The most stable clouds in the world are built on the foundations you're learning today. Your infrastructure journey starts now!
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
