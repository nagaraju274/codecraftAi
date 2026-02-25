
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Syntax & Basic Structure",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to YAML & Environment Setup",
        why: "YAML is the human-readable data serialization standard used by almost all DevOps tools. Setting up VS Code with the YAML extension is your first step to error-free coding.",
        time: "1 Day",
        prereqs: "Basic Terminal usage",
        resources: [
          { name: "YAML Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=1uFVr15xDGg" },
          { name: "YAML Official Specs", url: "https://yaml.org/spec/1.2.2/" },
        ],
        practice: "Install VS Code and the Red Hat YAML extension. Create a 'test.yaml' file and write your first key-value pair.",
      },
      {
        what: "Key-Value Pairs & Basic Scalars",
        why: "To store data. You must learn how YAML handles Strings, Integers, Floats, and Booleans without quotes.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "YAML Syntax Guide (W3Schools)", url: "https://www.w3schools.io/yaml/syntax/" },
        ],
        practice: "Create a YAML file representing a simple user profile with name (string), age (int), and is_active (bool).",
      },
      {
        what: "Indentation & Spacing (The Golden Rule)",
        why: "YAML uses indentation to define structure. One extra space can break an entire Kubernetes cluster. You must master the 2-space standard.",
        time: "2 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Understanding YAML Indentation", url: "https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started" },
        ],
        practice: "Build a nested YAML structure (e.g., Address -> Street, City, ZIP) and verify it with a linter.",
      },
      {
        what: "Lists & Sequences (The Dash Syntax)",
        why: "To manage collections of data. Lists are used for everything from server IPs to package names.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "YAML Lists & Arrays", url: "https://www.tutorialspoint.com/yaml/yaml_lists.htm" },
        ],
        practice: "Create a list of your top 5 favorite programming languages using the dash (-) syntax.",
      },
      {
        what: "Dictionaries & Maps (Nested Objects)",
        why: "To model complex objects. This is the foundation of Docker Compose and Kubernetes configurations.",
        time: "3 Days",
        prereqs: "Step 3, Step 4",
        resources: [
          { name: "YAML Maps & Dictionaries", url: "https://www.tutorialspoint.com/yaml/yaml_dictionaries.htm" },
        ],
        practice: "Build a YAML file for a 'Company' that contains a list of 'Departments', each having a list of 'Employees'.",
      },
      {
        what: "Multi-line Strings (| vs >)",
        why: "Configurations often need long descriptions or scripts. Mastering the Literal (|) and Folded (>) block scalars is vital.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "YAML Multi-line Strings", url: "https://yaml-multiline.info/" },
        ],
        practice: "Write a YAML file containing a multiline shell script using the '|' operator.",
      },
      {
        what: "Comments & Document Headers (---)",
        why: "To document your configurations and separate multiple YAML documents within a single file (standard in K8s).",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "YAML Documents & Comments", url: "https://www.geeksforgeeks.org/yaml-basic-components/" },
        ],
        practice: "Create a single file containing two separate YAML documents separated by '---', each with descriptive comments.",
      },
      {
        what: "Validation Tools (Yamllint)",
        why: "To catch syntax errors before they hit production. 'yamllint' is the industry-standard tool for CI/CD pipelines.",
        time: "2 Days",
        prereqs: "Terminal Basics",
        resources: [
          { name: "Yamllint Documentation", url: "https://yamllint.readthedocs.io/" },
        ],
        practice: "Install yamllint and run it against all the YAML files you've created so far. Fix all warnings and errors.",
      },
      {
        what: "YAML vs JSON vs XML",
        why: "To understand when to choose YAML. It's more readable than JSON but more sensitive to white space.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Comparison: YAML vs JSON", url: "https://www.json2yaml.com/blog/difference-between-json-and-yaml" },
        ],
        practice: "Take a JSON object and manually convert it into a YAML document.",
      },
      {
        what: "Quotes & Special Characters",
        why: "Sometimes strings need quotes (e.g., if they start with a dash or contain colons). Learn when to use single vs double quotes.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Quoting in YAML", url: "https://www.baeldung.com/yaml-multi-line" },
        ],
        practice: "Declare a string that looks like a boolean (e.g. 'yes') and force the compiler to treat it as a string using quotes.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Advanced Config & Orchestration",
    level: "Intermediate",
    steps: [
      {
        what: "Anchors & Aliases (& and *)",
        why: "The #1 feature for DRY (Don't Repeat Yourself) YAML. Reuse large blocks of configuration across your file.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "YAML Anchors & Aliases", url: "https://medium.com/@kingcrest/yaml-anchors-and-aliases-a-beginners-guide-680000ed6084" },
        ],
        practice: "Create a server config where 5 different environments share the same base database configuration using anchors.",
      },
      {
        what: "Merge Keys (<<)",
        why: "To extend an anchored block with extra fields. Essential for managing complex Docker or K8s setups.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "YAML Merge Keys Guide", url: "https://yaml.org/type/merge.html" },
        ],
        practice: "Use a merge key to create a 'Prod' environment that inherits from 'Dev' but overrides the API URL.",
      },
      {
        what: "Explicit Data Types (Tags)",
        why: "To force a specific data type (e.g., !!str, !!int, !!timestamp). Prevents the 'Norway Problem' (country code NO being interpreted as false).",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "YAML Tags & Types", url: "https://yaml.org/spec/1.2.2/#1021-tags" },
        ],
        practice: "Define a list of country codes including 'NO' and use !!str to ensure it's not treated as a boolean.",
      },
      {
        what: "YAML in Docker Compose",
        why: "The primary way to define multi-container applications. You must master volume mapping and environment variable syntax.",
        time: "1 Week",
        prereqs: "Docker Basics",
        resources: [
          { name: "Docker Compose File Reference", url: "https://docs.docker.com/compose/compose-file/" },
        ],
        practice: "Write a docker-compose.yml file that links a Web app, a Database, and a Redis cache.",
      },
      {
        what: "YAML in GitHub Actions",
        why: "CI/CD pipelines are defined in YAML. Learn to structure steps, jobs, and secrets.",
        time: "1 Week",
        prereqs: "Git Basics",
        resources: [
          { name: "GitHub Actions Workflow Syntax", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions" },
        ],
        practice: "Create a '.github/workflows/main.yml' that runs a simple 'echo' command on every code push.",
      },
      {
        what: "YAML in Kubernetes (Manifests)",
        why: "K8s is the largest consumer of YAML. Master Pods, Services, and Deployments. Understanding 'apiVersion' and 'kind' is vital.",
        time: "2 Weeks",
        prereqs: "Step 5",
        resources: [
          { name: "K8s Manifests for Beginners", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
        ],
        practice: "Write a Kubernetes Deployment manifest for an Nginx server with 3 replicas.",
      },
      {
        what: "Python/JS YAML Libraries",
        why: "To read and write YAML data programmatically. Learn PyYAML (Python) or js-yaml (Node.js).",
        time: "1 Week",
        prereqs: "Python or JS Basics",
        resources: [
          { name: "PyYAML Tutorial", url: "https://realpython.com/python-yaml/" },
        ],
        practice: "Write a script that reads a YAML config file and prints a specific nested value.",
      },
      {
        what: "Complex Keys & Set Syntax",
        why: "Sometimes you need a mapping or list as a key. Rare but essential for advanced data modeling.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Complex YAML Keys", url: "https://yaml.org/spec/1.2.2/#742-complex-keys" },
        ],
        practice: "Create a YAML document where a key is an array [Lat, Long] and the value is a city name.",
      },
      {
        what: "JSON Schema for YAML",
        why: "To validate that your YAML follows a specific structure (e.g. ensuring a 'version' key always exists).",
        time: "5 Days",
        prereqs: "Step 8",
        resources: [
          { name: "JSON Schema Official Site", url: "https://json-schema.org/" },
        ],
        practice: "Write a JSON schema that validates your 'User Profile' YAML from Step 2.",
      },
      {
        what: "Env Var Interpolation",
        why: "To make YAML dynamic by injecting system variables (e.g. ${DB_PASSWORD}). Common in Compose and GitLab CI.",
        time: "3 Days",
        prereqs: "Step 14",
        resources: [
          { name: "Interpolation in Docker Compose", url: "https://docs.docker.com/compose/environment-variables/variable-substitution/" },
        ],
        practice: "Write a YAML file that uses '${USER}' to dynamically greet the current OS user.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems Engineering & Safety",
    level: "Advanced",
    steps: [
      {
        what: "Helm Charts & Templating",
        why: "Helm is the package manager for K8s. It uses Go templates inside YAML to create reusable infrastructure.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "Helm Chart Tutorial", url: "https://helm.sh/docs/chart_template_guide/getting_started/" },
        ],
        practice: "Create a Helm chart where the number of replicas is a variable defined in 'values.yaml'.",
      },
      {
        what: "Ansible Playbooks (Infrastructure as YAML)",
        why: "Ansible is the king of configuration management. Its entire logic (loops, conditions) is written in YAML.",
        time: "2 Weeks",
        prereqs: "Linux Basics",
        resources: [
          { name: "Ansible for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=gocwRvLhDfI" },
        ],
        practice: "Write an Ansible playbook that installs Nginx and copies a file to a remote server.",
      },
      {
        what: "Security: YAML Injection & Safe Loading",
        why: "Vulnerable YAML parsers can allow Remote Code Execution (RCE). You MUST learn to use 'yaml.safe_load()' in your apps.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Security: YAML Deserialization Attacks", url: "https://medium.com/@swathi.mohandas/vulnerability-of-yaml-deserialization-af6080000000" },
        ],
        practice: "Audit a Python script to ensure it doesn't use the unsafe 'yaml.load()' on untrusted input.",
      },
      {
        what: "Large File Architecture: Modular YAML",
        why: "Managing a 5,000 line YAML file is impossible. Learn to split files using !include (if supported) or tool-specific includes.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Modularizing Large YAML Files", url: "https://github.com/dreftymir/yaml-include" },
        ],
        practice: "Split a massive Docker Compose file into multiple smaller files using an include mechanism.",
      },
      {
        what: "Custom Tags & Type Casting",
        why: "To teach your YAML parser how to handle custom domain objects directly from text.",
        time: "1 Week",
        prereqs: "Step 17",
        resources: [
          { name: "Python PyYAML: Custom Tags", url: "https://pyyaml.org/wiki/PyYAMLDocumentation#constructors-representers-resolvers" },
        ],
        practice: "Create a custom tag '!Encrypt' that automatically encrypts a value when it's parsed by your Python script.",
      },
      {
        what: "CloudFormation & ARM Templates",
        why: "To define entire AWS or Azure clouds in single YAML files. Essential for senior DevOps roles.",
        time: "2 Weeks",
        prereqs: "Cloud Basics",
        resources: [
          { name: "AWS CloudFormation Intro", url: "https://aws.amazon.com/cloudformation/getting-started/" },
        ],
        practice: "Provision a VPC and an S3 bucket using an AWS CloudFormation YAML template.",
      },
      {
        what: "Advanced K8s: CRDs & ConfigMaps",
        why: "Custom Resource Definitions (CRDs) allow you to extend the Kubernetes API with your own YAML schemas.",
        time: "2 Weeks",
        prereqs: "Step 16",
        resources: [
          { name: "K8s Custom Resources", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" },
        ],
        practice: "Define a 'DatabaseBackup' custom resource in YAML and apply it to a cluster.",
      },
      {
        what: "Parsing Performance & Benchmarking",
        why: "At scale, parsing speed matters. Learn to benchmark different YAML libraries (e.g. LibYAML vs pure Python).",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Benchmarking YAML Parsers", url: "https://github.com/yaml/pyyaml/issues/323" },
        ],
        practice: "Compare the time taken to parse a 100MB YAML file using different libraries.",
      },
      {
        what: "OpenAPI & Swagger Documentation",
        why: "API documentation is written in YAML. Mastering this allows you to build self-documenting APIs.",
        time: "1 Week",
        prereqs: "API Basics",
        resources: [
          { name: "Swagger Editor (Interactive)", url: "https://editor.swagger.io/" },
        ],
        practice: "Document a simple 'To-Do' API using the OpenAPI 3.0 YAML format.",
      },
      {
        what: "Final Mastery Project: The Infrastructure Blueprint",
        why: "To synthesize all skills: Anchors, K8s, CI/CD, and Security into a single professional artifact.",
        time: "Ongoing",
        prereqs: "All stages",
        resources: [],
        practice: "Design a full production environment: GitHub Action (YAML) -> Docker Compose (YAML) -> K8s Manifest (YAML) with shared Secrets (Vault YAML).",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Resume YAML", teaches: "Scalars, Lists, and basic Spacing.", tech: "YAML, Yamllint" },
  { level: "Beginner", title: "Home Server Config", teaches: "Nested dictionaries and Booleans.", tech: "YAML" },
  { level: "Beginner", title: "Recipe Book Schema", teaches: "Arrays of objects and multiline text.", tech: "YAML" },
  { level: "Intermediate", title: "MERN Stack Docker Compose", teaches: "Environment variables and volume mapping.", tech: "Docker, YAML" },
  { level: "Intermediate", title: "Global CI/CD Workflow", teaches: "GitHub Actions syntax and matrix builds.", tech: "YAML, Git" },
  { level: "Intermediate", title: "Reusable K8s Template", teaches: "Anchors, Aliases, and Merge keys.", tech: "Kubernetes, YAML" },
  { level: "Intermediate", title: "Python Config Manager", teaches: "Programmatic reading/writing of YAML files.", tech: "Python, PyYAML" },
  { level: "Advanced", title: "Custom Helm Chart Library", teaches: "Advanced Go-templating within YAML.", tech: "Helm, Kubernetes" },
  { level: "Advanced", title: "Server Hardening Playbook", teaches: "Ansible logic, loops, and conditions in YAML.", tech: "Ansible, YAML" },
  { level: "Advanced", title: "OpenAPI 3.0 Specs Suite", teaches: "API documentation and Schema validation.", tech: "Swagger, YAML" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Essential DevOps User",
    description: "Focus on syntax and Docker/GitHub usage to be productive in a modern dev team.",
    schedule: [
      "Days 1-7: Installation, Scalars, Lists, and Maps.",
      "Days 8-15: Indentation mastery and multiline strings.",
      "Days 16-23: Introduction to Docker Compose and GitHub Actions.",
      "Days 24-30: Build 2 beginner projects and learn basic Linting.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Automation Pro",
    description: "Balanced path for solid infrastructure configuration and K8s readiness.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Anchors, Merge keys, and Kubernetes manifests.",
      "Days 41-60: Python automation, API documentation (OpenAPI), and 3 projects.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Infrastructure Architect",
    description: "Comprehensive path for professional systems and cloud engineering roles.",
    schedule: [
      "Days 1-30: Core YAML & Tooling fundamentals.",
      "Days 31-60: Intermediate Orchestration (Docker/K8s/CI).",
      "Days 61-90: Helm, Ansible, CloudFormation, and Performance tuning.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between YAML and JSON. When is one better?",
  "What is the 'Norway Problem' and how do you solve it?",
  "How do Anchors (&) and Aliases (*) improve YAML maintenance?",
  "What is the purpose of the '---' and '...' markers?",
  "Explain the difference between Literal (|) and Folded (>) scalars.",
  "How does YAML handle indentation? Are tabs allowed?",
  "What is a Merge Key (<<) and how is it used in Docker Compose?",
  "Describe how to securely load a YAML file in Python.",
  "What is a Tag (!!str, !!int) and why is it useful?",
  "How do you handle multiple documents within a single YAML file?",
];

const codingQuestions = [
  { question: "Write a YAML snippet using an anchor to reuse a common database configuration.", topic: "Dryness" },
  { question: "Create a list of 3 items where each item is a dictionary containing a 'name' and 'score'.", topic: "Nesting" },
  { question: "Fix a provided YAML snippet that contains a tab character instead of spaces.", topic: "Syntax" },
  { question: "Write an OpenAPI YAML snippet defining a GET request that returns a string.", topic: "Specs" },
];

const mcqs = [
  { question: "Which character is used to denote a list item in YAML?", options: ["*", "-", ">", "!"], answer: "-" },
  { question: "Are tabs allowed for indentation in YAML?", options: ["Yes", "No", "Only in strings", "Only in comments"], answer: "No" },
  { question: "What is the primary way to separate multiple documents in one file?", options: ["---", "===", "###", "..."], answer: "---" },
];

const mistakes = [
  "Using Tabs: YAML strictly forbids tabs for indentation—always use spaces.",
  "Inconsistent Indentation: Mixing 2-space and 4-space indentation in the same file.",
  "Duplicate Keys: Defining the same key twice in a dictionary leads to undefined behavior.",
  "The Norway Problem: Entering 'NO' (Norway) as a country code—it's interpreted as 'false'.",
  "Tutorial Hell: Reading about syntax without building a real Docker or K8s file.",
  "Ignoring Linters: Checking into Git without running 'yamllint' first.",
  "Hardcoding Secrets: Putting plain-text passwords in YAML files (use Env vars!).",
  "Confusing Lists and Maps: Not understanding when to use '-' vs 'key: value'.",
  "Incorrect Multi-line syntax: Using '>' when you need newlines preserved (|).",
  "Unsafe Loading: Using `yaml.load()` on user data, which can lead to RCE.",
];

export default function YamlRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Braces className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The YAML Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the "Ground Truth" of configuration. From simple key-value pairs to building global-scale infrastructure blueprints for Kubernetes, Ansible, and Cloud clouds.
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
            <CardDescription>Apply your knowledge with these hands-on projects designed for your GitHub portfolio.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream DevOps or Automation role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live CLI Challenges</h3>
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
                    {['YAML 1.2', 'Configuration Management', 'Infrastructure as Code', 'Docker Compose', 'Kubernetes Manifests', 'GitHub Actions', 'Ansible Playbooks', 'Helm Charts', 'OpenAPI', 'CloudFormation', 'Data Serialization', 'CI/CD'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Maintain a 'Config Library' repo on GitHub with production-ready YAML samples.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase your ability to use 'Anchors' and 'Merge Keys' for clean code.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with YAML-based security auditing.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Language of Clouds</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            YAML is the quiet force that coordinates the entire modern web. It rewards the precise and the organized. Stay consistent, read the linter output carefully, and remember: The most complex clouds in the world are built on the foundations you're learning today. Your automation journey starts now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Config Projects
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
