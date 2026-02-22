
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
  Code,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Monitor,
  Workflow,
  Server,
  History,
  Activity,
  Search,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: The Rails Philosophy & Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Ruby Language Fundamentals",
        why: "Rails is written in Ruby. You cannot master the framework without understanding blocks, symbols, modules, and Ruby's object-oriented nature.",
        time: "1 Week",
        prereqs: "Basic Programming Logic",
        resources: [
          { name: "Ruby in 20 Minutes", url: "https://www.ruby-lang.org/en/documentation/quickstart/" },
          { name: "Ruby Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=t_ispmWfV3c" },
        ],
        practice: "Solve 20 logic problems on Exercism's Ruby track. Focus on array methods like .map, .select, and .reduce.",
      },
      {
        what: "Environment Setup & CLI",
        why: "Rails development relies heavily on the terminal. Learning to use version managers (rbenv/rvm) and Rails CLI is the 'entry ticket'.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Rails Install Guide", url: "https://guides.rubyonrails.org/v7.1/getting_started.html#installing-rails" },
        ],
        practice: "Install Ruby and Rails. Run 'rails new my_app' and start the server. Explore the directory structure.",
      },
      {
        what: "The MVC Architecture",
        why: "Rails strictly follows Model-View-Controller. Understanding the flow of a request through these layers is critical.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Rails Guides: MVC Overview", url: "https://guides.rubyonrails.org/getting_started.html#the-mvc-architecture" },
        ],
        practice: "Draw a diagram showing how a URL request reaches a controller, interacts with a model, and renders a view.",
      },
      {
        what: "Routing & RESTful Design",
        why: "To map URLs to specific controller actions. Learning REST ensures your app follows industry standards.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Rails Routing from the Outside In", url: "https://guides.rubyonrails.org/routing.html" },
        ],
        practice: "Define resources in routes.rb and use 'rails routes' to see the generated path helpers.",
      },
      {
        what: "Active Record Basics & Migrations",
        why: "To interact with databases using Ruby instead of SQL. Migrations are how you evolve your database schema safely.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Active Record Migrations", url: "https://guides.rubyonrails.org/active_record_migrations.html" },
        ],
        practice: "Generate a migration to create a 'Posts' table. Run 'rails db:migrate' and inspect the schema.rb file.",
      },
      {
        what: "Controllers & CRUD Operations",
        why: "Controllers are the 'brains'. They handle logic, fetch data from models, and pass it to views.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Action Controller Overview", url: "https://guides.rubyonrails.org/action_controller_overview.html" },
        ],
        practice: "Manually build the 7 standard RESTful actions (Index, Show, New, Create, Edit, Update, Destroy) for a resource.",
      },
      {
        what: "Views with ERB & Layouts",
        why: "To render dynamic HTML. Layouts and Partials prevent code duplication in your user interface.",
        time: "3 Days",
        prereqs: "HTML/CSS Basics",
        resources: [
          { name: "Layouts and Rendering", url: "https://guides.rubyonrails.org/layouts_and_rendering.html" },
        ],
        practice: "Create a shared navbar as a partial and include it in your application layout.",
      },
      {
        what: "Scaffolding & Rapid Prototyping",
        why: "Scaffolding generates all MVC layers instantly. It's great for learning patterns and building fast MVPs.",
        time: "2 Days",
        prereqs: "Steps 1-7",
        resources: [
          { name: "Rails Scaffold Guide", url: "https://guides.rubyonrails.org/getting_started.html#getting-up-and-running-quickly-with-scaffolding" },
        ],
        practice: "Generate a 'Task' scaffold. Study the generated code to see how Rails structures a professional resource.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Power & Complexity",
    level: "Intermediate",
    steps: [
      {
        what: "Database Associations (1:N, N:N)",
        why: "Real apps have related data. Master 'has_many', 'belongs_to', and 'has_many :through'.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Active Record Associations", url: "https://guides.rubyonrails.org/association_basics.html" },
        ],
        practice: "Model a 'Blog' where a Post has many Comments, and a User has many Posts.",
      },
      {
        what: "Validations & Callbacks",
        why: "To ensure data integrity and automate logic (like sending an email after a user is created).",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Active Record Validations", url: "https://guides.rubyonrails.org/active_record_validations.html" },
        ],
        practice: "Add presence and uniqueness validations to a User model. Prevent a Post from being saved without a title.",
      },
      {
        what: "Authentication with Devise",
        why: "Don't reinvent the wheel. Devise is the industry standard for managing user logins and passwords.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Devise Getting Started", url: "https://github.com/heartcombo/devise#getting-started" },
        ],
        practice: "Integrate Devise into a project. Create a restricted area that only logged-in users can access.",
      },
      {
        what: "File Uploads with Active Storage",
        why: "Modern apps need images and files. Active Storage makes it easy to handle uploads to S3 or local disks.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Active Storage Overview", url: "https://guides.rubyonrails.org/active_storage_overview.html" },
        ],
        practice: "Allow users to upload an avatar image to their profile page.",
      },
      {
        what: "Automated Testing (RSpec & Capybara)",
        why: "Professional Rails development requires tests. RSpec is the most popular testing framework for Ruby.",
        time: "1 Week",
        prereqs: "Ruby Basics",
        resources: [
          { name: "RSpec for Beginners", url: "https://www.codewithjason.com/rspec-tutorial/" },
        ],
        practice: "Write unit tests for a model and a feature test using Capybara to simulate a user login.",
      },
      {
        what: "API Development with Rails",
        why: "To power mobile apps or frontend frameworks like React. Learn 'rails new --api' and Jbuilder.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Using Rails for API-only Apps", url: "https://guides.rubyonrails.org/api_app.html" },
        ],
        practice: "Build an API that returns a list of products in JSON format.",
      },
      {
        what: "Hotwire: Turbo & Stimulus",
        why: "The modern 'Rails way' to build fast, reactive UIs without using heavy JavaScript frameworks.",
        time: "1 Week",
        prereqs: "HTML/JS Basics",
        resources: [
          { name: "Hotwire Handbook", url: "https://hotwired.dev/" },
          { name: "Introduction to Stimulus", url: "https://stimulus.hotwired.dev/handbook/introduction" },
        ],
        practice: "Build a 'Like' button that updates the count instantly using Turbo Streams without a full page refresh.",
      },
      {
        what: "Asset Pipeline & Import Maps",
        why: "To understand how Rails manages CSS and JS files for optimal performance in the browser.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Asset Pipeline Guide", url: "https://guides.rubyonrails.org/asset_pipeline.html" },
        ],
        practice: "Add a custom CSS library or a JS package using Import Maps.",
      },
    ],
  },
  {
    title: "Advanced Stage: Scale, Speed & Professionalism",
    level: "Advanced",
    steps: [
      {
        what: "Background Jobs (Sidekiq & Redis)",
        why: "To keep the app responsive. Offload slow tasks like sending emails or processing images to background workers.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Active Job Basics", url: "https://guides.rubyonrails.org/active_job_basics.html" },
          { name: "Sidekiq Documentation", url: "https://github.com/sidekiq/sidekiq/wiki" },
        ],
        practice: "Implement a job that sends a daily digest email to users at 8 AM using Sidekiq.",
      },
      {
        what: "Real-time Updates with Action Cable",
        why: "To build features like live chat or notifications using WebSockets natively in Rails.",
        time: "1 Week",
        prereqs: "Step 15",
        resources: [
          { name: "Action Cable Overview", url: "https://guides.rubyonrails.org/action_cable_overview.html" },
        ],
        practice: "Build a simple group chat room where messages appear instantly for all connected users.",
      },
      {
        what: "Performance & Caching",
        why: "To handle high traffic. Learn Fragment Caching, Russian Doll Caching, and Query Optimization (avoiding N+1).",
        time: "1 Week",
        prereqs: "Active Record Mastery",
        resources: [
          { name: "Caching with Rails", url: "https://guides.rubyonrails.org/caching_with_rails.html" },
        ],
        practice: "Identify an N+1 query in your project and fix it using '.includes()'.",
      },
      {
        what: "Advanced Active Record Queries",
        why: "To handle complex data reports. Master scopes, joins, and raw SQL where necessary.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Active Record Query Interface", url: "https://guides.rubyonrails.org/active_record_querying.html" },
        ],
        practice: "Write a complex report query that filters and aggregates data from 3 related tables.",
      },
      {
        what: "Security Best Practices",
        why: "Protect your app from CSRF, XSS, and SQL injection. Rails does a lot by default, but you must know the gaps.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Securing Rails Applications", url: "https://guides.rubyonrails.org/security.html" },
        ],
        practice: "Audit your app's parameters using Strong Parameters. Sanitize any user-provided HTML.",
      },
      {
        what: "Custom Engines & Metaprogramming",
        why: "To build highly modular applications or contribute to the Rails framework itself.",
        time: "2 Weeks",
        prereqs: "Advanced Ruby",
        resources: [
          { name: "Getting Started with Engines", url: "https://guides.rubyonrails.org/engines.html" },
        ],
        practice: "Extract a reusable piece of logic (like a simple blog) into a separate Rails Engine.",
      },
      {
        what: "Docker for Rails Development",
        why: "To ensure your development and production environments are identical, making deployment seamless.",
        time: "1 Week",
        prereqs: "Linux Basics",
        resources: [
          { name: "Dockerize a Rails App", url: "https://docs.docker.com/samples/rails/" },
        ],
        practice: "Create a Dockerfile and a docker-compose.yml file to run your Rails app and its database.",
      },
      {
        what: "Deployment (Heroku, Render, AWS)",
        why: "The final step. Learn how to manage environment variables, database migrations, and SSL in production.",
        time: "1 Week",
        prereqs: "Completed App",
        resources: [
          { name: "Deploying Rails to Render", url: "https://docs.render.com/deploy-rails" },
        ],
        practice: "Deploy your portfolio project to a live URL using Render or Heroku.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Personal Blog", teaches: "CRUD, Routing, and basic Views.", tech: "Rails, SQLite" },
  { level: "Beginner", title: "To-Do List", teaches: "Form handling, state, and simple logic.", tech: "Rails, Bootstrap" },
  { level: "Beginner", title: "Contact Manager", teaches: "Migrations, Models, and basic validation.", tech: "Rails" },
  { level: "Intermediate", title: "Instagram Clone", teaches: "File uploads, associations, and authentication.", tech: "Rails, Devise, Active Storage" },
  { level: "Intermediate", title: "Event Marketplace", teaches: "Search, complex associations, and nested forms.", tech: "Rails, PostgreSQL" },
  { level: "Intermediate", title: "RESTful Task API", teaches: "JSON responses, API tokens, and testing.", tech: "Rails API, RSpec" },
  { level: "Intermediate", title: "Knowledge Base (Wiki)", teaches: "History tracking, markdown rendering, and hierarchy.", tech: "Rails, Stimulus" },
  { level: "Advanced", title: "Real-time Chat App", teaches: "WebSockets, Action Cable, and presence tracking.", tech: "Rails, Action Cable, Redis" },
  { level: "Advanced", title: "SaaS Platform", teaches: "Subscriptions, Multi-tenancy, and background jobs.", tech: "Rails, Stripe, Sidekiq" },
  { level: "Advanced", title: "Social Network with Notifications", teaches: "Activity feeds, real-time alerts, and performance tuning.", tech: "Rails, Hotwire, Docker" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Web Builder",
    description: "Focus on syntax and core MVC to build functional dynamic websites quickly.",
    schedule: [
      "Days 1-7: Ruby Basics and Rails Environment Setup.",
      "Days 8-15: Routing, Controllers, and basic CRUD.",
      "Days 16-23: Active Record, Migrations, and Associations.",
      "Days 24-30: Build a Blog and deploy to Render.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Full-Stack Dev",
    description: "Balanced path covering professional authentication, testing, and UI interactivity.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Authentication (Devise), Active Storage, and RSpec testing.",
      "Days 46-60: Introduction to Hotwire (Turbo/Stimulus) and API design.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Rails Professional",
    description: "Comprehensive journey for professional readiness, focusing on scaling and performance.",
    schedule: [
      "Days 1-30: Core Rails and Database fundamentals.",
      "Days 31-60: Intermediate Features, Testing, and UI Interactivity.",
      "Days 61-90: Background Jobs, Action Cable, Performance, and Docker.",
    ]
  }
];

const interviewTopics = [
  "Convention over Configuration (CoC) and DRY principles.",
  "Difference between a Proc, Lambda, and Block in Ruby.",
  "Explain the Rails request-response cycle in detail.",
  "What is the difference between '.includes()', '.joins()', and '.preload()'?",
  "How does CSRF protection work in Rails?",
  "Explain the difference between a Class and a Module in Ruby.",
  "What are the benefits of using Turbo Streams over a full page reload?",
  "Describe the 'Asset Pipeline' and why it exists.",
  "How do you handle N+1 query problems in Active Record?",
  "What is the purpose of the 'schema.rb' file?",
];

const codingQuestions = [
  { question: "Implement a method to reverse a string without using '.reverse'.", topic: "Ruby Logic" },
  { question: "Write a scope in Active Record to find all 'published' posts from the last 7 days.", topic: "Querying" },
  { question: "Create a migration to add a 'user_id' foreign key to an existing 'posts' table.", topic: "Migrations" },
  { question: "Write a controller action that returns a 404 error if an object isn't found.", topic: "Controllers" },
];

const mcqs = [
  { question: "Which command generates a new controller?", options: ["rails new controller", "rails g controller", "rails make controller", "rails add controller"], answer: "rails g controller" },
  { question: "Which environment is Rails in by default?", options: ["Production", "Test", "Development", "Staging"], answer: "Development" },
  { question: "Which helper method is used to create a link in a view?", options: ["<a>", "link_to", "url_for", "route_to"], answer: "link_to" },
];

const mistakes = [
  "Ignoring Ruby fundamentals: Trying to learn Rails without knowing Ruby is the #1 reason for failure.",
  "Writing logic in the View or Controller: Follow 'Fat Model, Skinny Controller' and use Service Objects.",
  "Ignoring N+1 queries: This is the primary reason Rails apps feel slow.",
  "Not using Migrations correctly: Manual database changes will break your production deployments.",
  "Putting secrets in Git: Use credentials.yml.enc or environment variables.",
  "Forgetting to run tests: Manual testing takes longer and misses bugs.",
  "Over-using Scaffolding: It's for learning, but professional apps require custom-built components.",
  "Neglecting Documentation: Always read the official Rails Guides first; they are excellent.",
  "Using the wrong associations: Understand the difference between has_one and belongs_to.",
  "Ignoring the Log file: The 'development.log' tells you exactly what is happening under the hood.",
];

export default function RailsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Layers className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Ruby on Rails Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the most productive full-stack framework. From Ruby basics to building scalable, high-performance web applications with Hotwire and Sidekiq.
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Rails developer.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream Rails developer role.</CardDescription>
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
                    {['Ruby on Rails', 'Active Record', 'PostgreSQL', 'Hotwire', 'Turbo', 'Stimulus', 'RSpec', 'Redis', 'Sidekiq', 'Action Cable', 'REST APIs', 'Docker', 'MVC'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Deploy your projects to a live URL using Render or Fly.io.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include unit tests to demonstrate code reliability.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Write clear READMEs explaining how your models relate to each other.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Web at the Speed of Thought</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Ruby on Rails is designed for developer happiness. It allows you to build complex, professional applications faster than almost any other tool. Stay consistent, keep building, and remember that every great software engineer was once a beginner. Your journey starts today!
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
