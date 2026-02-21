
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
  Bug,
  Globe,
  Database,
  Server,
  Layers,
  ArrowLeft,
  ArrowRight,
  History,
  Activity,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Perl Scripting Fundamentals",
    level: "Beginner",
    steps: [
      {
        what: "Introduction, Installation & 'Hello World'",
        why: "To understand Perl's history in text processing and systems administration, and set up your environment with 'perlbrew' or 'plenv'.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Perl Introduction (learn.perl.org)", url: "https://learn.perl.org/library/beginning_perl/" },
          { name: "Perl Tutorial for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=W6Z_ovXAnNo" },
        ],
        practice: "Install Perl. Run 'perl -v' to check the version. Write a script that prints a welcome message and the current system time.",
      },
      {
        what: "Scalars: Strings & Numbers",
        why: "Scalars ($var) are the most basic data type. Understanding context (string vs numeric) is critical in Perl.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Perl Scalar Variables", url: "https://perldoc.perl.org/perldata#Scalar-values" },
        ],
        practice: "Create a script that performs basic math operations and string concatenations using user input via <STDIN>.",
      },
      {
        what: "Arrays & List Context",
        why: "Arrays (@list) store ordered data. Mastering list context is what makes Perl unique and powerful.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Perl Arrays Guide", url: "https://www.tutorialspoint.com/perl/perl_arrays.htm" },
        ],
        practice: "Create a list of server names. Practice push, pop, shift, and unshift operations. Use 'scalar(@array)' to get the length.",
      },
      {
        what: "Hashes (Key-Value Pairs)",
        why: "Hashes (%map) are essential for managing structured data like configurations or dictionary-like information.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "Perl Hashes (TutorialsPoint)", url: "https://www.tutorialspoint.com/perl/perl_hashes.htm" },
        ],
        practice: "Create a hash mapping employee names to their IDs. Add, update, and delete entries. Iterate using 'keys' and 'values'.",
      },
      {
        what: "Control Flow (if, unless, loops)",
        why: "To control the execution of your scripts based on conditions and perform repetitive tasks.",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Perl Control Structures", url: "https://perldoc.perl.org/perlsyn#Compound-Statements" },
        ],
        practice: "Write a script that categorizes a file size as 'Small', 'Medium', or 'Large' using 'if-elsif-else' and 'foreach' loops.",
      },
      {
        what: "Regular Expressions (The Core Strength)",
        why: "Perl's regex engine is legendary. It is the primary reason many choose Perl for data extraction.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "Perl Regular Expressions (Official)", url: "https://perldoc.perl.org/perlretut" },
          { name: "Regex One - General Practice", url: "https://regexone.com/" },
        ],
        practice: "Write a script that extracts email addresses and phone numbers from a text block using =~ and m// operators.",
      },
      {
        what: "File I/O & Filehandles",
        why: "Scripts often need to read logs or write reports. Mastering 'open', 'close', and the 'die' function is vital.",
        time: "4 Days",
        prereqs: "Step 5",
        resources: [
          { name: "File Handling in Perl", url: "https://www.geeksforgeeks.org/file-handling-in-perl/" },
        ],
        practice: "Read a system log file line-by-line and write only the lines containing 'ERROR' to a new file.",
      },
      {
        what: "Subroutines & Scoping",
        why: "To keep your code modular. Understanding 'my' vs 'our' vs 'local' prevents variable leakage.",
        time: "5 Days",
        prereqs: "Step 5",
        resources: [
          { name: "Perl Subroutines", url: "https://perldoc.perl.org/perlsub" },
        ],
        practice: "Create a module of math functions. Pass arguments via @_ and return calculated values.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Professional Data Handling",
    level: "Intermediate",
    steps: [
      {
        what: "References & Complex Data Structures",
        why: "To store arrays within hashes or create multi-dimensional data models. References ($ref) are the gateway to complexity.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Perl References Tutorial", url: "https://perldoc.perl.org/perlreftut" },
          { name: "Data::Dumper for Debugging", url: "https://metacpan.org/dist/Data-Dumper/view/Dumper.pm" },
        ],
        practice: "Create a 'Database' using a hash of arrays. Store several users and their associated login times. Print it using Data::Dumper.",
      },
      {
        what: "CPAN & Module Management",
        why: "The Comprehensive Perl Archive Network (CPAN) has over 200,000 modules. Use 'cpanm' to stand on the shoulders of giants.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "MetaCPAN", url: "https://metacpan.org/" },
        ],
        practice: "Install 'LWP::UserAgent' and use it to fetch the HTML of a website.",
      },
      {
        what: "Object-Oriented Perl (Traditional)",
        why: "Understand 'bless', packages, and the classic way Perl handles objects before learning modern wrappers.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Perl OO Introduction", url: "https://perldoc.perl.org/perlootut" },
        ],
        practice: "Create a 'Server' class with attributes (IP, hostname) and methods (restart, shutdown).",
      },
      {
        what: "Modern OO with Moose/Moo",
        why: "Moose is the industry standard for Perl OO, providing sugar for attributes, types, and roles.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "Moose Manual", url: "https://metacpan.org/dist/Moose/view/lib/Moose/Manual.pod" },
        ],
        practice: "Rewrite your 'Server' class using Moose. Add validation to the IP address attribute.",
      },
      {
        what: "Error Handling & Exception Management",
        why: "Go beyond simple 'or die'. Use Try::Tiny or Feature::Try for cleaner, more robust error management.",
        time: "4 Days",
        prereqs: "Step 8",
        resources: [
          { name: "Try::Tiny on MetaCPAN", url: "https://metacpan.org/pod/Try::Tiny" },
        ],
        practice: "Wrap a database connection attempt in a try/catch block to handle failures gracefully.",
      },
      {
        what: "Database Interaction (DBI)",
        why: "The Database Interface (DBI) is the standard way Perl talks to SQL databases like SQLite, MySQL, and PostgreSQL.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Perl DBI Tutorial", url: "https://www.perl.com/pub/1999/10/dbi.html/" },
        ],
        practice: "Connect to a local SQLite database. Create a table, insert rows, and perform a JOIN query.",
      },
      {
        what: "Automated Testing (Test::More)",
        why: "Perl has a strong culture of testing. Learning TAP (Test Anything Protocol) ensures your code works as expected.",
        time: "1 Week",
        prereqs: "Step 8",
        resources: [
          { name: "Test::More Documentation", url: "https://metacpan.org/pod/Test::More" },
        ],
        practice: "Write a test suite for your math module using 'ok', 'is', and 'like' functions.",
      },
      {
        what: "Web Programming: Dancer2 or Mojolicious",
        why: "To build modern web applications and REST APIs using lightweight, fast frameworks.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Dancer2 Tutorial", url: "https://metacpan.org/pod/Dancer2::Manual::Tutorial" },
          { name: "Mojolicious Guides", url: "https://docs.mojolicious.org/mojolicious/guides/tutorial" },
        ],
        practice: "Create a 'To-Do' API that returns tasks in JSON format using a simple route.",
      },
    ],
  },
  {
    title: "Advanced Stage: Mastery & Systems Performance",
    level: "Advanced",
    steps: [
      {
        what: "Performance Profiling (Devel::NYTProf)",
        why: "To identify bottlenecks in slow scripts. NYTProf is widely considered the best profiler in any language.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Devel::NYTProf Guide", url: "https://metacpan.org/pod/Devel::NYTProf" },
        ],
        practice: "Profile a script that processes a large text file and find which line takes the most time.",
      },
      {
        what: "Advanced Regex: Recursion & Backtracking",
        why: "To parse complex nested structures (like HTML or nested brackets) that standard regex cannot handle.",
        time: "1 Week",
        prereqs: "Step 6",
        resources: [
          { name: "Mastering Regular Expressions (Book excerpt)", url: "https://www.oreilly.com/library/view/mastering-regular-expressions/0596528124/" },
        ],
        practice: "Write a regex that matches nested parentheses to any depth.",
      },
      {
        what: "Concurrency & Multithreading",
        why: "Handle heavy parallel tasks using 'threads' or 'Parallel::ForkManager' for high-throughput systems.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Parallel::ForkManager", url: "https://metacpan.org/pod/Parallel::ForkManager" },
        ],
        practice: "Write a script that pings 50 servers simultaneously using multiple forks.",
      },
      {
        what: "Metaprogramming in Perl",
        why: "To write code that writes code. Understanding typeglobs and the symbol table (*) is key to advanced framework dev.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "Perl Metaprogramming (Advanced)", url: "https://www.perl.com/pub/2005/03/31/metaprogramming.html/" },
        ],
        practice: "Create a function that dynamically adds methods to a class at runtime.",
      },
      {
        what: "BioPerl or Specialized Frameworks",
        why: "Perl is dominant in fields like Bioinformatics. BioPerl is a must-know for scientists.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "BioPerl Project", url: "https://bioperl.org/how_to_help/tutorial.html" },
        ],
        practice: "Use BioPerl to parse a FASTA file and find the GC content of a sequence.",
      },
      {
        what: "Security: Taint Mode & Best Practices",
        why: "To build secure CGI or system scripts by strictly isolating user-provided data from system commands.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Perl Security (Official)", url: "https://perldoc.perl.org/perlsec" },
        ],
        practice: "Run a script with the -T flag and try to pass a shell command through an environment variable to see the security block.",
      },
      {
        what: "Legacy Migration & Refactoring",
        why: "Many Perl jobs involve maintaining and modernizing old Perl 4/5 codebases. Learn to use 'Perl::Critic'.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Perl::Critic", url: "https://metacpan.org/pod/Perl::Critic" },
        ],
        practice: "Take a piece of 'messy' Perl code and refactor it to meet modern standards (strict, warnings, Moose).",
      },
      {
        what: "Deployment with Carton & Docker",
        why: "To ensure your Perl environment is reproducible across production servers.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Carton - Perl Module Dependency Manager", url: "https://metacpan.org/pod/Carton" },
        ],
        practice: "Create a 'cpanfile', run 'carton install', and build a Docker image for a simple Dancer2 app.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Automated Log Cleaner", teaches: "File handles, string regex, and file system management.", tech: "Perl, unlink, regex" },
  { level: "Beginner", title: "CLI Dictionary App", teaches: "Hashes, user input, and modularizing functions.", tech: "Perl, hashes" },
  { level: "Beginner", title: "Directory File Search", teaches: "Recursion, file testing operators (-f, -d), and arrays.", tech: "Perl, opendir" },
  { level: "Intermediate", title: "API Data Consumer", teaches: "LWP::UserAgent, JSON parsing, and references.", tech: "Perl, JSON::MaybeXS, CPAN" },
  { level: "Intermediate", title: "Database Schema Manager", teaches: "DBI, SQL, and creating configuration modules.", tech: "Perl, DBI, SQLite" },
  { level: "Intermediate", title: "Unit Test Suite for a Library", teaches: "Test::More, logic isolation, and TAP output.", tech: "Perl, Test::More" },
  { level: "Intermediate", title: "Markdown to HTML Converter", teaches: "Advanced regex substitution and string processing.", tech: "Perl, regex" },
  { level: "Advanced", title: "Dancer2 Content Management", teaches: "Web routing, templates, session management, and DB persistent storage.", tech: "Perl, Dancer2, Template Toolkit" },
  { level: "Advanced", title: "Multi-threaded Web Scraper", teaches: "Concurrency, HTTP headers, and high-volume data storage.", tech: "Perl, Parallel::ForkManager, Mojo::UserAgent" },
  { level: "Advanced", title: "Bioinformatics Pipeline", teaches: "BioPerl, processing large genomic datasets, and system pipelines.", tech: "Perl, Bio::SeqIO" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Focus on syntax and regex to handle system scripts and text processing tasks.",
    schedule: [
      "Days 1-7: Scalars, Arrays, Hashes, and Loops.",
      "Days 8-15: Master Perl Regular Expressions (Regex).",
      "Days 16-23: File Handles, Subroutines, and Basic File I/O.",
      "Days 24-30: Build the 'Automated Log Cleaner' and learn CPAN basics.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced path for building professional tools and modular libraries.",
    schedule: [
      "Days 1-20: Complete Beginner Stage + 3 projects.",
      "Days 21-45: References, complex data structures, and OO (Moose).",
      "Days 46-60: Databases (DBI), Testing (Test::More), and a full 'API Consumer' project.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional systems and web developer readiness.",
    schedule: [
      "Days 1-30: Core Perl & Data structures fundamentals.",
      "Days 31-60: Professional OO, Security, and DBI.",
      "Days 61-90: Dancer2 web framework, Profiling (NYTProf), and final 'CMS' project.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between 'my' and 'local'.",
  "What is the default variable '$_' and how is it used?",
  "Explain Scalar vs List context.",
  "What is a reference and why is it used?",
  "How do you handle regex backtracking issues?",
  "What is the 'bless' function in Perl?",
  "Explain the purpose of 'use strict' and 'use warnings'.",
  "How does Perl's garbage collection work?",
  "What are typeglobs and the symbol table?",
  "How do you install modules from CPAN?",
];

const codingQuestions = [
  { question: "Write a script to reverse the order of lines in a file without loading the whole file into memory (if possible).", topic: "File I/O" },
  { question: "Using a regex, extract the domain name from an array of 100 email addresses.", topic: "Regex" },
  { question: "Count the frequency of each word in a text file using a hash.", topic: "Hashes" },
  { question: "Create a reference to a hash containing an array of integers and access the 3rd element.", topic: "References" },
];

const mcqs = [
  { question: "Which symbol denotes an array in Perl?", options: ["$", "@", "%", "&"], answer: "@" },
  { question: "Which function is used to remove the last character of a string if it's a newline?", options: ["chop", "trim", "chomp", "cut"], answer: "chomp" },
  { question: "What does CPAN stand for?", options: ["Central Perl Access Network", "Comprehensive Perl Archive Network", "Common Perl API Network", "Coding Perl Application Nodes"], answer: "Comprehensive Perl Archive Network" },
];

const mistakes = [
  "Not using 'use strict;' and 'use warnings;' in every script.",
  "Ignoring the difference between scalar and list context.",
  "Using legacy 'chop' instead of 'chomp' for newlines.",
  "Trying to parse HTML/XML with regex instead of specialized modules.",
  "Forgetting to check the return value of 'open' using 'or die'.",
  "Overusing global variables instead of 'my' scoped variables.",
  "Not using a version manager like 'perlbrew', resulting in library conflicts with the OS Perl.",
  "Confusing the string comparison operator 'eq' with the numeric '=='.",
  "Hardcoding paths instead of using the 'File::Spec' module for cross-platform support.",
  "Writing procedural code for large projects instead of leveraging Moose/OO.",
];

export default function PerlRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Perl Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the "Swiss Army Chainsaw" of the web. From powerful text processing and system automation to high-performance web frameworks.
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
            <CardDescription>Apply your knowledge with these hands-on Perl projects.</CardDescription>
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
                    <Code className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Choose a path that fits your current needs.</CardDescription>
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
            <CardDescription>Proven tips to help you land your next Perl-based role.</CardDescription>
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
                    {['Perl 5', 'Regex', 'DBI', 'Moose', 'CPAN', 'Dancer2', 'Mojolicious', 'Linux Systems', 'Automation', 'Unit Testing', 'Profiling', 'Taint Mode'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Server className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Ensure your code follows 'Perl Best Practices' by Damien Conway.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Showcase modularity by hosting your own mini-modules on GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with performance tuning using NYTProf.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">There's More Than One Way To Do It</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Perl's "TIMTOWTDI" philosophy gives you immense freedom. It's a language built for productivity and the joy of solving problems. Stay consistent, embrace the community, and soon you'll be manipulating data and systems with ease. Your journey into the heart of the web starts today!
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
