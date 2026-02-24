
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
  Server,
  Layers,
  Cloud,
  Container,
  Activity,
  ArrowLeft,
  ArrowRight,
  History,
  Cpu,
  Globe,
  Database,
  Infinity,
  Timer,
  Flame,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Systems & SRE Principles",
    level: "Beginner",
    steps: [
      {
        what: "Linux Internals & CLI Mastery",
        why: "SREs manage production environments, which are almost exclusively Linux. You must understand processes, file systems, and system calls.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
          { name: "Linux for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
        ],
        practice: "Set up a Linux VM. Practice process management (top, kill), disk usage (df, du), and networking tools (curl, netstat).",
      },
      {
        what: "Introduction to SRE: SLIs, SLOs, and SLAs",
        why: "SRE is defined by data-driven reliability. Service Level Indicators/Objectives are the metrics that define success.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Google SRE Book - Chapter 4", url: "https://sre.google/sre-book/service-level-objectives/" },
          { name: "SRE Foundations (YouTube)", url: "https://www.youtube.com/watch?v=look-up-sre-intro" },
        ],
        practice: "Define SLIs and SLOs for a simple hypothetical application (e.g., a login service).",
      },
      {
        what: "Scripting for Automation (Python or Go)",
        why: "SREs eliminate 'toil' (manual work) through code. Python is the most common language for automation and internal tools.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "Python for Everybody", url: "https://www.py4e.com/" },
          { name: "Automation with Python (YouTube)", url: "https://www.youtube.com/watch?v=pxo6Mra-SkA" },
        ],
        practice: "Write a Python script that monitors a log file and sends an alert if it sees more than 5 errors in 1 minute.",
      },
      {
        what: "Networking Fundamentals (TCP/IP & DNS)",
        why: "Troubleshooting distributed systems requires a deep understanding of how packets move and how names are resolved.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Networking Fundamentals Playlist", url: "https://www.youtube.com/playlist?list=PLIhvC56v6yrKAsPp_Y6AtSTlsbe6-REec" },
        ],
        practice: "Use 'dig' to inspect DNS records and 'tcpdump' to capture local network traffic.",
      },
      {
        what: "HTTP Protocol & Web Architecture",
        why: "Most SREs manage web-scale applications. Understanding headers, status codes, and the request-response cycle is vital.",
        time: "3 Days",
        prereqs: "Networking Basics",
        resources: [
          { name: "HTTP/HTTPS Explained", url: "https://www.youtube.com/watch?v=iYM2zFP3W2s" },
        ],
        practice: "Analyze web traffic using browser DevTools or 'curl -v' to see response headers.",
      },
      {
        what: "Version Control (Git)",
        why: "In SRE, 'Infrastructure is Code'. Git is where we store our configurations, scripts, and deployment logic.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
        ],
        practice: "Create a GitHub repository, practice branching, and write a clean commit history.",
      },
      {
        what: "Incident Response & Post-mortems",
        why: "Failure is inevitable. SREs learn from every outage via blameless post-mortems to improve future reliability.",
        time: "4 Days",
        prereqs: "SRE Intro",
        resources: [
          { name: "Google SRE - Postmortem Culture", url: "https://sre.google/sre-book/postmortem-culture/" },
        ],
        practice: "Read a public post-mortem (e.g., from Cloudflare or AWS) and summarize the root cause and resolution.",
      },
      {
        what: "Error Budgets & Toil Management",
        why: "To balance development speed with system stability. Error Budgets give teams permission to fail safely.",
        time: "3 Days",
        prereqs: "SRE Intro",
        resources: [
          { name: "Understanding Error Budgets", url: "https://www.youtube.com/watch?v=look-up-error-budgets" },
        ],
        practice: "Calculate an Error Budget for a 99.9% SLO over a 30-day period.",
      },
      {
        what: "Basic Monitoring (HTOP, Glances, Logs)",
        why: "To understand the health of a single machine before moving to distributed observability.",
        time: "3 Days",
        prereqs: "Linux Basics",
        resources: [
          { name: "Linux Performance Monitoring", url: "https://linuxjourney.com/lesson/monitor-processes" },
        ],
        practice: "Use 'htop' to find a high-memory process and 'journalctl' to read system logs.",
      },
      {
        what: "Database Basics (SQL vs NoSQL)",
        why: "Reliability often breaks at the data layer. You must understand ACID properties and basic queries.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "SQL vs NoSQL (YouTube)", url: "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y" },
        ],
        practice: "Install PostgreSQL and practice basic SELECT and JOIN operations.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Containers & Observability",
    level: "Intermediate",
    steps: [
      {
        what: "Docker & Containerization",
        why: "Containers are the unit of deployment in modern SRE. They ensure consistency from dev to prod.",
        time: "2 Weeks",
        prereqs: "Linux basics",
        resources: [
          { name: "Docker Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
        ],
        practice: "Create a Dockerfile for a multi-stage build of a Go or Node.js application.",
      },
      {
        what: "CI/CD Pipelines (GitHub Actions)",
        why: "To automate testing and deployment, reducing manual errors and increasing release frequency.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiY-9E" },
        ],
        practice: "Set up an automated pipeline that runs unit tests on every pull request.",
      },
      {
        what: "Observability: Metrics (Prometheus)",
        why: "Prometheus is the SRE standard for monitoring time-series data and alerting on SLO violations.",
        time: "2 Weeks",
        prereqs: "Docker",
        resources: [
          { name: "Prometheus & Grafana Tutorial", url: "https://www.youtube.com/watch?v=h4Sl21AK9f8" },
        ],
        practice: "Instrument a simple application to expose metrics and scrape them with Prometheus.",
      },
      {
        what: "Observability: Dashboards (Grafana)",
        why: "To visualize system health and identify trends or anomalies before they become outages.",
        time: "1 Week",
        prereqs: "Step 13",
        resources: [
          { name: "Grafana Getting Started", url: "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/" },
        ],
        practice: "Build a dashboard showing CPU, Memory, and Error Rates for your instrumented app.",
      },
      {
        what: "Centralized Logging (ELK / EFK)",
        why: "When managing 100+ servers, you cannot SSH into each one. Logging aggregates data for debugging.",
        time: "2 Weeks",
        prereqs: "Docker",
        resources: [
          { name: "ELK Stack Tutorial", url: "https://www.elastic.co/guide/index.html" },
        ],
        practice: "Set up a Filebeat agent to ship Nginx logs into an Elasticsearch cluster.",
      },
      {
        what: "Infrastructure as Code (Terraform)",
        why: "To manage cloud resources predictably and safely using code.",
        time: "2 Weeks",
        prereqs: "Cloud basics",
        resources: [
          { name: "Terraform Course (YouTube)", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
        ],
        practice: "Provision an S3 bucket and an EC2 instance on AWS using Terraform.",
      },
      {
        what: "Kubernetes (K8s) Foundations",
        why: "The primary platform for modern SRE. You must understand Pods, Services, and Deployments.",
        time: "3 Weeks",
        prereqs: "Docker",
        resources: [
          { name: "Kubernetes Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
        ],
        practice: "Deploy a highly available application to a local cluster using Minikube or Kind.",
      },
      {
        what: "Configuration Management (Ansible)",
        why: "To manage the internal state of servers (OS patching, user management) at scale.",
        time: "1 Week",
        prereqs: "SSH basics",
        resources: [
          { name: "Ansible for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=gocwRvLhDfI" },
        ],
        practice: "Write a playbook to install Nginx and configure a firewall on 3 different servers.",
      },
      {
        what: "Cloud Computing (AWS/GCP)",
        why: "SREs operate in the cloud. You must master core services like IAM, VPC, and Load Balancers.",
        time: "Ongoing",
        prereqs: "Networking",
        resources: [
          { name: "AWS Cloud Practitioner Training", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
        ],
        practice: "Configure a Multi-AZ VPC with public and private subnets.",
      },
      {
        what: "Load Balancing & Traffic Management",
        why: "To distribute traffic and ensure high availability. Learn about Nginx, Envoy, and Cloud LBs.",
        time: "1 Week",
        prereqs: "HTTP Basics",
        resources: [
          { name: "Load Balancing Explained", url: "https://www.youtube.com/watch?v=id-look-up-lb" },
        ],
        practice: "Configure an Nginx reverse proxy to load balance traffic across two backend app instances.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scale, Chaos & Design",
    level: "Advanced",
    steps: [
      {
        what: "Distributed Systems Design",
        why: "SREs must predict how systems fail at scale. Understanding consistency, availability, and partition tolerance (CAP) is key.",
        time: "3 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        ],
        practice: "Architect a global real-time notification system and identify potential points of failure.",
      },
      {
        what: "Chaos Engineering",
        why: "To build confidence in your system's resilience by intentionally injecting failures.",
        time: "2 Weeks",
        prereqs: "Monitoring, K8s",
        resources: [
          { name: "Chaos Engineering Guide (Principles)", url: "https://principlesofchaos.org/" },
          { name: "Chaos Mesh Tutorial", url: "https://chaos-mesh.org/docs/run-a-chaos-experiment/" },
        ],
        practice: "Run a 'Pod Kill' experiment on your K8s cluster and measure how long it takes to recover.",
      },
      {
        what: "Advanced Kubernetes (Helm & Operators)",
        why: "To manage complex, stateful applications (like databases) on Kubernetes automatically.",
        time: "2 Weeks",
        prereqs: "K8s Basics",
        resources: [
          { name: "Helm Introduction", url: "https://helm.sh/docs/intro/quickstart/" },
        ],
        practice: "Create a Helm chart for your full-stack application. Explore using a database operator like CloudNativePG.",
      },
      {
        what: "Service Mesh (Istio / Linkerd)",
        why: "To manage service-to-service communication, security (mTLS), and observability at high scale.",
        time: "2 Weeks",
        prereqs: "K8s Basics",
        resources: [
          { name: "Istio Getting Started", url: "https://istio.io/latest/docs/setup/getting-started/" },
        ],
        practice: "Implement mTLS and traffic splitting (canary releases) using Istio on your cluster.",
      },
      {
        what: "Capacity Planning & Cost Optimization",
        why: "SREs ensure systems aren't just reliable, but also cost-efficient. Learn to size resources correctly.",
        time: "1 Week",
        prereqs: "Cloud Basics",
        resources: [
          { name: "AWS Cost Optimization Best Practices", url: "https://aws.amazon.com/whitepapers/cost-optimization-pillar/" },
        ],
        practice: "Use a tool like Infracost to predict the price of a Terraform deployment before applying it.",
      },
      {
        what: "Disaster Recovery (DR) & Multi-region Failover",
        why: "To survive entire data center or region outages. This is the ultimate test of an SRE's skill.",
        time: "2 Weeks",
        prereqs: "Distributed Systems",
        resources: [
          { name: "AWS Disaster Recovery Strategies", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
        ],
        practice: "Simulate a region failure and automate the failover of a static website using DNS routing.",
      },
      {
        what: "SRE Security (DevSecOps)",
        why: "Reliability includes security. Learn about secrets management (Vault), encryption at rest, and vulnerability scanning.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "HashiCorp Vault Tutorial", url: "https://developer.hashicorp.com/vault/tutorials/getting-started" },
        ],
        practice: "Integrate HashiCorp Vault with your K8s app to manage sensitive database credentials.",
      },
      {
        what: "Performance Profiling & Tuning",
        why: "To identify CPU/Memory bottlenecks at the code level. SREs fix performance issues before they trigger alerts.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Brendan Gregg - Performance Tools", url: "https://www.brendangregg.com/linuxperf.html" },
        ],
        practice: "Generate a Flamegraph for a slow Python script to identify expensive function calls.",
      },
      {
        what: "On-call Best Practices & Burnout Prevention",
        why: "Human reliability is as important as system reliability. SRE is about sustainable engineering.",
        time: "Ongoing",
        prereqs: "None",
        resources: [
          { name: "Google SRE - Managing On-call", url: "https://sre.google/sre-book/on-call/" },
        ],
        practice: "Review your alert settings. Silence any alert that isn't 'actionable' during the night.",
      },
      {
        what: "Software Engineering for SRE (Go / Rust)",
        why: "For building high-performance, low-level SRE tools like custom exporters or sidecars.",
        time: "Ongoing",
        prereqs: "Logic Basics",
        resources: [
          { name: "Go for SREs", url: "https://www.youtube.com/watch?v=look-up-go-sre" },
        ],
        practice: "Build a custom Prometheus exporter in Go that exposes internal application stats.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated System Audit", teaches: "Shell scripting, cron jobs, and basic Linux diagnostics.", tech: "Bash, Linux" },
  { level: "Beginner", title: "Site Health Monitor", teaches: "HTTP codes, Python requests, and basic alerting (e.g. Email/Discord).", tech: "Python, Requests" },
  { level: "Beginner", title: "S3 Backup Automation", teaches: "Cloud storage, CLI interaction, and script safety.", tech: "Bash, AWS CLI" },
  { level: "Intermediate", title: "Production Observability Stack", teaches: "Docker Compose, Prometheus, and Grafana instrumentation.", tech: "Docker, Prometheus, Grafana" },
  { level: "Intermediate", title: "Terraform Infrastructure Lab", teaches: "IaC, Cloud networking (VPC), and state management.", tech: "Terraform, AWS/GCP" },
  { level: "Intermediate", title: "Kubernetes Auto-Scaler", teaches: "K8s HPA, metrics-server, and load testing.", tech: "Kubernetes, Locust" },
  { level: "Intermediate", title: "Centralized Log Search", teaches: "Log shipping (Filebeat) and full-text search (Elasticsearch).", tech: "ELK Stack, Docker" },
  { level: "Advanced", title: "Chaos Engineering Dashboard", teaches: "Resilience testing, K8s API, and metric analysis under load.", tech: "Chaos Mesh, Prometheus" },
  { level: "Advanced", title: "Zero-Downtime Deployment Suite", teaches: "Canary releases, Istio traffic management, and automated rollbacks.", tech: "Istio, ArgoCD, Kubernetes" },
  { level: "Advanced", title: "Multi-Region DR Automation", teaches: "DNS failover, database replication, and global traffic routing.", tech: "Route53, Terraform, RDS" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Reliability Explorer",
    description: "Focus on Linux, SRE Principles, and basic automation to contribute to an SRE team.",
    schedule: [
      "Days 1-7: Linux Command Line & System Diagnostics.",
      "Days 8-15: SRE Core (SLIs/SLOs) & Incident Post-mortems.",
      "Days 16-23: Python/Bash automation & Git workflow.",
      "Days 24-30: Basic Monitoring (HTOP) & Cloud foundations.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Modern SRE",
    description: "Balanced path covering containers, observability, and infrastructure automation.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Docker, CI/CD, and Prometheus/Grafana observability.",
      "Days 41-60: Infrastructure as Code (Terraform) & Kubernetes Basics.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Systems Architect",
    description: "Comprehensive path including Chaos Engineering, Advanced K8s, and Disaster Recovery.",
    schedule: [
      "Days 1-30: Core Development & System Foundations.",
      "Days 31-60: Containers, Cloud, and Professional Observability.",
      "Days 61-90: Chaos Engineering, Service Mesh, and Portfolio Readiness.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between SRE and DevOps.",
  "What is an Error Budget? How do you calculate it?",
  "Explain the CAP theorem and its impact on system design.",
  "Describe the 'Four Golden Signals' of monitoring.",
  "How would you handle a massive traffic spike during a major sale event?",
  "What is a 'Blameless Post-mortem' and why does it matter?",
  "Explain the difference between Vertical and Horizontal scaling.",
  "How does a Load Balancer decide which server to send a request to?",
  "What is toil, and how do you decide which toil to automate?",
  "How do you ensure a new deployment doesn't break production? (Canary vs. Blue/Green).",
];

const codingQuestions = [
  { question: "Write a script to find and aggregate the most frequent HTTP 500 errors in a log file.", topic: "Log Parsing" },
  { question: "Calculate the total downtime allowed per year for a service with 99.95% availability.", topic: "Math/Logic" },
  { question: "Implement a thread-safe rate limiter in Python or Go.", topic: "Concurreny" },
  { question: "Write a function to verify if a binary tree is balanced (important for system performance).", topic: "DSA" },
];

const mcqs = [
  { question: "Which of the following is NOT one of the 'Four Golden Signals'?", options: ["Latency", "Traffic", "Cost", "Saturation"], answer: "Cost" },
  { question: "What happens when an Error Budget is exhausted?", options: ["The service is shut down", "Manual releases are banned", "Feature development stops to focus on reliability", "The SRE team is fired"], answer: "Feature development stops to focus on reliability" },
  { question: "What is the primary benefit of a 'Blameless' culture?", options: ["Nobody gets fired", "Root causes are identified without fear", "Outages are ignored", "Documentation is shorter"], answer: "Root causes are identified without fear" },
];

const mistakes = [
  "Learning tools (K8s, Terraform) before understanding Linux/Networking fundamentals.",
  "Ignoring the 'Four Golden Signals' and monitoring vanity metrics (like uptime percentage only).",
  "Hardcoding alert thresholds instead of using dynamic SLO-based alerting.",
  "Automating a process before you understand it manually (leads to automated disasters).",
  "Putting too many alerts into a dashboard (Alert Fatigue).",
  "Neglecting soft skills: SRE is about communication and empathy during high-stress outages.",
  "Assuming Cloud providers handle all reliability (The Shared Responsibility Model).",
  "Failing to test backups regularly (A backup is only as good as its last successful restore).",
  "Over-engineering a simple system before it actually has users.",
  "Not practicing on-call scenarios in a safe environment (Game Days).",
];

export default function SreRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Activity className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            Site Reliability Engineer (SRE) Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the art of making software systems reliable, scalable, and efficient. Bridge the gap between engineering and operations.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Site Reliability Engineer.</CardDescription>
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
            <CardDescription>Master the topics and questions required to land a role as a Site Reliability Engineer.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Logic & Coding Challenges</h3>
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
                    {['SRE', 'SLO', 'Error Budget', 'Kubernetes', 'Prometheus', 'Grafana', 'Docker', 'Terraform', 'Distributed Systems', 'Chaos Engineering', 'Observability', 'Linux Internals', 'Automation'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide 'Before and After' reliability metrics for your projects.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include a 'Public Post-mortem' folder in your GitHub to show you learn from failure.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cross-functional collaboration with dev teams.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Master the Reliability Spectrum</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            SRE is more than a job title; it's a way of looking at systems through the lens of engineering and empathy. Stay curious, build systems that you trust, and never stop automating away the toil. The world depends on the reliability you are about to build. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Build SRE Projects
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
