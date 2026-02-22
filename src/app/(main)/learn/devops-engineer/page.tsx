
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Systems & Networking Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Linux Fundamentals & CLI",
        why: "90% of the world's servers run on Linux. Mastering the command line is the non-negotiable first step for any DevOps engineer.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
          { name: "Linux for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
        ],
        practice: "Install Ubuntu on a VM or WSL. Practice navigating the file system, managing permissions (chmod/chown), and editing files with Vim/Nano.",
      },
      {
        what: "Bash Scripting & Automation",
        why: "DevOps is about automating repetitive tasks. Bash is the glue that allows you to automate server configurations and deployments.",
        time: "1 Week",
        prereqs: "Linux Basics",
        resources: [
          { name: "Bash Scripting Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4" },
        ],
        practice: "Write a script that automates the creation of a new user and sets up their SSH directory.",
      },
      {
        what: "Git & Version Control Mastery",
        why: "Everything in DevOps is code (Infrastructure as Code, Pipeline as Code). Git is how we track and manage all those changes.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Git for Professionals (YouTube)", url: "https://www.youtube.com/watch?v=Uszj_k0DGsg" },
          { name: "GitHub Skills", url: "https://skills.github.com/" },
        ],
        practice: "Create a repository, practice branching, and resolve a merge conflict manually.",
      },
      {
        what: "Networking Fundamentals (TCP/IP, DNS)",
        why: "You can't secure or scale what you don't understand. Knowledge of IP addressing, routing, and DNS is critical for troubleshooting.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Networking Fundamentals (YouTube)", url: "https://www.youtube.com/playlist?list=PLIhvC56v6yrKAsPp_Y6AtSTlsbe6-REec" },
        ],
        practice: "Use 'dig' or 'nslookup' to trace a DNS record. Use 'netstat' or 'ss' to view active network connections.",
      },
      {
        what: "HTTP/HTTPS & SSL/TLS",
        why: "DevOps engineers manage web traffic. Understanding how certificates work and how to secure connections is a daily requirement.",
        time: "3 Days",
        prereqs: "Networking Basics",
        resources: [
          { name: "HTTP/HTTPS Explained", url: "https://www.youtube.com/watch?v=iYM2zFP3W2s" },
        ],
        practice: "Generate a self-signed SSL certificate using OpenSSL.",
      },
      {
        what: "Web Server Basics (Nginx/Apache)",
        why: "To learn how to serve static and dynamic content, and the basics of reverse proxies and load balancing.",
        time: "4 Days",
        prereqs: "Linux Basics",
        resources: [
          { name: "Nginx for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=7VAI73roXaY" },
        ],
        practice: "Install Nginx and configure a basic website. Set up a reverse proxy to point to a simple Node.js app.",
      },
      {
        what: "SSH & Remote Management",
        why: "Safe and secure remote access is fundamental. You must master key-based authentication and SSH tunneling.",
        time: "2 Days",
        prereqs: "Linux Basics",
        resources: [
          { name: "SSH Keys Tutorial", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04" },
        ],
        practice: "Set up passwordless SSH between two virtual machines.",
      },
      {
        what: "Programming for DevOps (Python/Go)",
        why: "To write custom automation scripts, interact with APIs, and build internal tools. Python is the industry standard for scripting.",
        time: "Ongoing",
        prereqs: "Logic Basics",
        resources: [
          { name: "Python for Everybody", url: "https://www.py4e.com/" },
        ],
        practice: "Write a Python script that uses the 'requests' library to check if a website is up and alerts you if it's down.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Containers & Orchestration",
    level: "Intermediate",
    steps: [
      {
        what: "Docker & Containerization",
        why: "Containers ensure your code runs the same way in dev, test, and production. It's the building block of modern DevOps.",
        time: "2 Weeks",
        prereqs: "Linux, Networking",
        resources: [
          { name: "Docker Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
          { name: "Official Docker Docs", url: "https://docs.docker.com/get-started/" },
        ],
        practice: "Create a Dockerfile for a simple web app. Build the image and run it as a container. Use Docker Compose to run an app and a database.",
      },
      {
        what: "CI/CD Foundations (GitHub Actions/Jenkins)",
        why: "To automate the building, testing, and deployment of code. Continuous Integration/Deployment is the 'heart' of DevOps.",
        time: "2 Weeks",
        prereqs: "Git, Docker",
        resources: [
          { name: "CI/CD Explained (YouTube)", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
          { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiY-9E" },
        ],
        practice: "Create a GitHub Action that automatically runs tests whenever you push code to a repository.",
      },
      {
        what: "Infrastructure as Code (Terraform)",
        why: "To manage your cloud infrastructure using code rather than manual clicks. This ensures consistency and repeatability.",
        time: "2 Weeks",
        prereqs: "Cloud Basics",
        resources: [
          { name: "Terraform Course (YouTube)", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
          { name: "Terraform Registry", url: "https://registry.terraform.io/" },
        ],
        practice: "Use Terraform to provision a simple EC2 instance or an S3 bucket on AWS.",
      },
      {
        what: "Configuration Management (Ansible)",
        why: "To manage the internal configuration of your servers (installing packages, updating software) at scale.",
        time: "1 Week",
        prereqs: "Linux, SSH",
        resources: [
          { name: "Ansible for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=gocwRvLhDfI" },
        ],
        practice: "Write an Ansible playbook to install Nginx and copy a config file to three different servers.",
      },
      {
        what: "Cloud Platforms (AWS/GCP/Azure)",
        why: "Most modern infrastructure lives in the cloud. You must master at least one major provider's core services (EC2, S3, VPC, IAM).",
        time: "3 Weeks",
        prereqs: "Networking",
        resources: [
          { name: "AWS Cloud Practitioner (Official)", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
        ],
        practice: "Set up a VPC with public and private subnets. Launch a web server in the public subnet.",
      },
      {
        what: "Monitoring & Observability Basics",
        why: "You can't fix what you can't see. Learn to collect metrics and logs to understand system health.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Monitoring vs Observability", url: "https://www.youtube.com/watch?v=look-up-obs" },
        ],
        practice: "Install 'htop' and 'glances' on a server to monitor real-time resource usage.",
      },
      {
        what: "Cloud Security & IAM",
        why: "Security is a shared responsibility. Mastering Identity and Access Management (IAM) is vital for protecting cloud resources.",
        time: "1 Week",
        prereqs: "Cloud Basics",
        resources: [
          { name: "AWS IAM Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
        ],
        practice: "Create an IAM role with the 'Principle of Least Privilege' for a specific service.",
      },
      {
        what: "Advanced CI/CD Patterns",
        why: "To learn Blue/Green, Canary, and Rolling deployments for zero-downtime releases.",
        time: "1 Week",
        prereqs: "CI/CD Basics",
        resources: [
          { name: "Deployment Strategies Explained", url: "https://www.youtube.com/watch?v=Deployment-Strategies" },
        ],
        practice: "Implement a manual approval step in a CI/CD pipeline.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scale, Security & SRE",
    level: "Advanced",
    steps: [
      {
        what: "Kubernetes (K8s) Orchestration",
        why: "The industry standard for managing containerized applications at scale. High learning curve but massive demand.",
        time: "4 Weeks",
        prereqs: "Docker, Networking",
        resources: [
          { name: "Kubernetes Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
          { name: "Interactive K8s Tutorials", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        ],
        practice: "Set up a local cluster with Minikube. Deploy a multi-container app with a Service and an Ingress.",
      },
      {
        what: "Helm: The K8s Package Manager",
        why: "To manage complex Kubernetes applications using reusable charts, significantly simplifying deployments.",
        time: "1 Week",
        prereqs: "Kubernetes Basics",
        resources: [
          { name: "Helm Introduction", url: "https://helm.sh/docs/intro/quickstart/" },
        ],
        practice: "Use Helm to install a pre-made chart like Prometheus or Grafana onto your cluster.",
      },
      {
        what: "Advanced Monitoring (Prometheus & Grafana)",
        why: "To build professional dashboards and alerting systems that detect issues before users do.",
        time: "2 Weeks",
        prereqs: "Monitoring Basics",
        resources: [
          { name: "Prometheus & Grafana Tutorial", url: "https://www.youtube.com/watch?v=h4Sl21AK9f8" },
        ],
        practice: "Build a Grafana dashboard that visualizes CPU, Memory, and Disk usage for your K8s cluster.",
      },
      {
        what: "Centralized Logging (ELK Stack)",
        why: "To search and analyze logs from hundreds of servers in one place. Crucial for debugging production issues.",
        time: "2 Weeks",
        prereqs: "Linux Basics",
        resources: [
          { name: "ELK Stack Tutorial", url: "https://www.elastic.co/guide/index.html" },
        ],
        practice: "Set up a Filebeat agent to send logs from Nginx to an Elasticsearch instance.",
      },
      {
        what: "DevSecOps (Security Scanning)",
        why: "To integrate security checks (vulnerability scanning, secret detection) directly into your CI/CD pipeline.",
        time: "1 Week",
        prereqs: "CI/CD Basics",
        resources: [
          { name: "Snyk for Container Security", url: "https://snyk.io/" },
        ],
        practice: "Integrate a tool like Snyk or Trivy into a GitHub Action to scan your Docker images for vulnerabilities.",
      },
      {
        what: "Site Reliability Engineering (SRE)",
        why: "To learn the principles of reliability: SLIs, SLOs, and Error Budgets. Move from 'deploying' to 'managing' reliable systems.",
        time: "2 Weeks",
        prereqs: "Monitoring, Advanced Logic",
        resources: [
          { name: "Google SRE Book (Free Online)", url: "https://sre.google/sre-book/table-of-contents/" },
        ],
        practice: "Define an SLO (Service Level Objective) for a hypothetical app and calculate its Error Budget.",
      },
      {
        what: "Serverless & Managed Services",
        why: "To build applications without managing servers using AWS Lambda or Google Cloud Functions.",
        time: "1 Week",
        prereqs: "Cloud Basics",
        resources: [
          { name: "Serverless Framework Guide", url: "https://www.serverless.com/framework/docs/getting-started" },
        ],
        practice: "Deploy a simple Python function to AWS Lambda that triggers on an S3 upload.",
      },
      {
        what: "System Design for DevOps",
        why: "To understand high availability, disaster recovery, and global scalability from an infrastructure perspective.",
        time: "Ongoing",
        prereqs: "All previous steps",
        resources: [
          { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        ],
        practice: "Architect a multi-region deployment strategy for a global e-commerce site.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated Backup Script", teaches: "Linux file system, Bash scripting, Cron jobs.", tech: "Bash, Linux" },
  { level: "Beginner", title: "Static Web Server", teaches: "Nginx configuration, Linux service management.", tech: "Nginx, Linux" },
  { level: "Beginner", title: "Git Collaborative Lab", teaches: "Branching, Pull Requests, Merge Conflict resolution.", tech: "Git, GitHub" },
  { level: "Intermediate", title: "Dockerized Full-Stack App", teaches: "Containerization, networking, multi-container orchestration.", tech: "Docker, Docker Compose" },
  { level: "Intermediate", title: "CI/CD Pipeline for Web App", teaches: "Automation, automated testing, continuous deployment.", tech: "GitHub Actions, Node.js" },
  { level: "Intermediate", title: "AWS VPC Architecture", teaches: "Cloud networking, subnets, routing, IAM.", tech: "AWS, Terraform" },
  { level: "Intermediate", title: "Ansible Server Hardening", teaches: "Security, configuration management at scale.", tech: "Ansible, Linux" },
  { level: "Advanced", title: "Kubernetes Microservices Cluster", teaches: "Orchestration, scaling, self-healing, Ingress.", tech: "Kubernetes, Helm" },
  { level: "Advanced", title: "Production Monitoring Suite", teaches: "Metrics, Dashboards, Alerting, Logs.", tech: "Prometheus, Grafana, ELK Stack" },
  { level: "Advanced", title: "Zero-Downtime Deployment Lab", teaches: "Canary/Blue-Green strategies, advanced K8s patterns.", tech: "Kubernetes, GitHub Actions" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Foundation",
    description: "Focus on the absolute core: Linux, Git, and basic server management to handle small deployments.",
    schedule: [
      "Days 1-7: Linux Command Line & Permission Mastery.",
      "Days 8-15: Bash Scripting & Automation tasks.",
      "Days 16-23: Git Workflow & GitHub Collaboration.",
      "Days 24-30: Basic Web Server (Nginx) & Networking setup.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Modern Engineer",
    description: "Balanced path covering containers, CI/CD, and basic Cloud infrastructure.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: Docker Containerization & CI/CD with GitHub Actions.",
      "Days 41-60: Infrastructure as Code (Terraform) & basic AWS.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The DevOps Architect",
    description: "Comprehensive path including Kubernetes, advanced monitoring, and SRE principles for high-level roles.",
    schedule: [
      "Days 1-30: Core Linux, Git, and Container fundamentals.",
      "Days 31-60: CI/CD Pipelines, Terraform, and Cloud Security.",
      "Days 61-90: Kubernetes, Prometheus/Grafana, and SRE best practices.",
    ]
  }
];

const interviewTopics = [
  "Explain the SDLC and the role of DevOps in it.",
  "Difference between a Container and a Virtual Machine.",
  "How does a CI/CD pipeline improve software quality?",
  "What is Infrastructure as Code (IaC)? Why is it important?",
  "Explain the difference between a Rolling deployment and a Canary deployment.",
  "Describe the 'Three Ways' of DevOps (Flow, Feedback, Continuous Learning).",
  "How do you handle a production server being completely down?",
  "What is the role of a Load Balancer? Name different types.",
  "Explain the 'C' in ACID for database transactions in a distributed system.",
  "How do you ensure security in a DevOps pipeline (DevSecOps)?",
];

const codingQuestions = [
  { question: "Write a Bash script to find and delete logs older than 30 days.", topic: "Scripting" },
  { question: "Create a Dockerfile for a basic Python Flask application.", topic: "Containers" },
  { question: "Write a simple Terraform script to create an S3 bucket.", topic: "IaC" },
  { question: "Write a Python script to check the HTTP status of a list of URLs.", topic: "Automation" },
];

const mcqs = [
  { question: "Which protocol is used for remote shell access?", options: ["HTTP", "FTP", "SSH", "SMTP"], answer: "SSH" },
  { question: "What is the primary tool for container orchestration?", options: ["Docker", "Kubernetes", "Ansible", "Terraform"], answer: "Kubernetes" },
  { question: "Which Git command is used to move a file?", options: ["git cp", "git mv", "git change", "git rm"], answer: "git mv" },
];

const mistakes = [
  "Not learning Linux first: Trying to learn K8s without knowing basic Linux is a recipe for frustration.",
  "Manual changes in Production: Never change something manually on a server; use code (IaC/Ansible).",
  "Hardcoding secrets: Never put API keys or passwords in Git or code files.",
  "Ignoring logs: Logs are the first place to look when something goes wrong.",
  "Over-engineering pipelines: Start simple and add complexity only when necessary.",
  "Neglecting Soft Skills: DevOps is about culture and communication as much as tools.",
  "Not monitoring everything: If you don't measure it, you can't improve it.",
  "Forgetting backups: Always have a disaster recovery plan for both data and code.",
  "Ignoring Security: Security shouldn't be the final step; it should be integrated from the start.",
  "Not practicing troubleshooting: Build things, break them, and then learn how to fix them.",
];

export default function DevopsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The DevOps Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the intersection of software development and IT operations. Build, scale, and secure the modern web.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional DevOps Engineer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream DevOps role.</CardDescription>
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
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live CLI & Logic Challenges</h3>
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
                    {['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Ansible', 'AWS', 'Python', 'Prometheus', 'Grafana', 'IAM', 'SRE', 'Microservices'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include high-quality GIF recordings of your automated pipelines in action.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose Terraform over CloudFormation').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight cost-optimization achievements (e.g. 'Reduced AWS spend by 20%').</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Automate Your Success</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            DevOps is more than just tools; it's a culture of continuous improvement and reliability. Stay curious, never stop automating, and always build with scale and security in mind. The world runs on infrastructure—go build something amazing.
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
