
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const stages = [
    {
        title: "Beginner Stage: Ruby Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Introduction to Ruby",
                why: "Understand Ruby's philosophy of programmer happiness, its dynamic nature, and its use in web development (Ruby on Rails) and scripting.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Ruby in Twenty Minutes (Official)", url: "https://www.ruby-lang.org/en/documentation/quickstart/" },
                    { name: "Ruby Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=t_ispmWfV3c" },
                ],
                practice: "Install Ruby (using a version manager like rbenv or RVM). Write and run a 'Hello, World!' program. Experiment in the interactive Ruby shell (IRB).",
            },
            {
                what: "Variables, Data Types, and Operators",
                why: "To learn the basic building blocks for storing and manipulating data.",
                time: "1 Week",
                prereqs: "Introduction",
                resources: [
                    { name: "Ruby Variables (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_variables.htm" },
                    { name: "Ruby Basic Literals (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_basic_literals.htm" },
                ],
                practice: "Create a script that declares variables for your name, age, and hobbies, and prints them using string interpolation.",
            },
            {
                what: "Control Flow (if/else, unless, case)",
                why: "To make decisions in your code and execute different blocks based on conditions.",
                time: "1 Week",
                prereqs: "Variables",
                resources: [
                    { name: "Ruby - if...else, ...unless (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_if_else.htm" },
                ],
                practice: "Write a program that checks if a number is positive, negative, or zero.",
            },
            {
                what: "Collections: Arrays and Hashes",
                why: "To store and manage collections of data. Arrays for ordered lists, Hashes for key-value pairs.",
                time: "1 Week",
                prereqs: "Data Types",
                resources: [
                    { name: "Ruby Arrays (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_arrays.htm" },
                    { name: "Ruby Hashes (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_hashes.htm" },
                ],
                practice: "Create an array of your favorite songs. Create a hash to store a user's profile information (name, email, city).",
            },
            {
                what: "Loops and Iterators",
                why: "To automate repetitive tasks. Ruby's block-based iterators (like `.each`) are a core and elegant feature.",
                time: "1 Week",
                prereqs: "Control Flow, Collections",
                resources: [
                    { name: "Ruby Loops (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/ruby-loops-for-while-do-while-until/" },
                    { name: "Ruby Iterators (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_iterators.htm" },
                ],
                practice: "Use the `.each` iterator to print each song from your array. Use a `while` loop to count down from 10.",
            },
            {
                what: "Methods (Functions)",
                why: "To organize your code into reusable blocks, making it more modular and readable.",
                time: "1 Week",
                prereqs: "Control Flow",
                resources: [
                    { name: "Ruby Methods (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_methods.htm" },
                ],
                practice: "Write a method that takes a name as an argument and returns a personalized greeting.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Object-Oriented Ruby",
        level: "Intermediate",
        steps: [
            {
                what: "Classes and Objects",
                why: "To define your own custom types, bundling data (instance variables) and behavior (methods) together. In Ruby, everything is an object.",
                time: "1 Week",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "Ruby - Classes and Objects (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_classes.htm" },
                ],
                practice: "Create a `Cat` class with attributes like `name` and `color`. Add an `initialize` method (constructor) and a `meow` method.",
            },
            {
                what: "Inheritance",
                why: "To create class hierarchies and share behavior from a parent (superclass) to a child (subclass).",
                time: "1 Week",
                prereqs: "Classes and Objects",
                resources: [
                    { name: "Ruby Inheritance (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/ruby-inheritance/" },
                ],
                practice: "Create a parent `Animal` class with a `speak` method. Create `Cat` and `Dog` classes that inherit from `Animal` and override the `speak` method.",
            },
            {
                what: "Modules and Mixins",
                why: "To share functionality between unrelated classes. This is Ruby's powerful alternative to multiple inheritance.",
                time: "1 Week",
                prereqs: "Classes",
                resources: [
                    { name: "Ruby Modules (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_modules.htm" },
                ],
                practice: "Create a `Swimmable` module with a `swim` method. Include this module in two different classes, like `Fish` and `Duck`.",
            },
            {
                what: "Blocks, Procs, and Lambdas",
                why: "To master one of Ruby's most distinctive and powerful features for writing flexible and expressive code.",
                time: "1-2 Weeks",
                prereqs: "Methods, Iterators",
                resources: [
                    { name: "Ruby Blocks, Procs, and Lambdas (RubyGuides)", url: "https://www.rubyguides.com/2016/02/ruby-blocks-procs-lambdas/" },
                ],
                practice: "Write a method that takes a block as an argument and yields to it. Create a Proc and a Lambda and observe the difference in their behavior with `return`.",
            },
            {
                what: "File I/O",
                why: "To read from and write to files on the file system.",
                time: "1 Week",
                prereqs: "Methods",
                resources: [
                    { name: "Ruby - File I/O (TutorialsPoint)", url: "https://www.tutorialspoint.com/ruby/ruby_input_output.htm" },
                ],
                practice: "Write a script that reads the content of a text file, counts the number of lines, and prints the count.",
            },
            {
                what: "RubyGems and Bundler",
                why: "To manage third-party libraries (gems) and dependencies in your projects.",
                time: "1 Week",
                prereqs: "Command Line Basics",
                resources: [
                    { name: "RubyGems Guides", url: "https://guides.rubygems.org/" },
                    { name: "Bundler", url: "https://bundler.io/" },
                ],
                practice: "Create a `Gemfile`, add a gem like `colorize`, run `bundle install`, and use the gem to print colored text to the console.",
            },
        ],
    },
    {
        title: "Advanced Stage: Web Development and Metaprogramming",
        level: "Advanced",
        steps: [
            {
                what: "Introduction to a Web Framework (Sinatra)",
                why: "To learn the basics of web development in Ruby with a lightweight framework before moving to Rails.",
                time: "1 Week",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "Sinatra: Getting Started", url: "https://sinatrarb.com/intro.html" },
                ],
                practice: "Build a simple Sinatra app with two routes: a home page that says 'Hello' and an `/about` page.",
            },
            {
                what: "Ruby on Rails",
                why: "The most popular and powerful web framework for Ruby, known for its convention-over-configuration philosophy and rapid development.",
                time: "3-4 Weeks",
                prereqs: "Sinatra",
                resources: [
                    { name: "Ruby on Rails Guides", url: "https://guides.rubyonrails.org/" },
                    { name: "The Odin Project - Ruby on Rails", url: "https://www.theodinproject.com/paths/full-stack-ruby-on-rails" },
                ],
                practice: "Generate a new Rails project and create a simple blog application using scaffolds.",
            },
            {
                what: "Testing with RSpec",
                why: "To write automated tests for your Ruby and Rails applications, ensuring code quality and preventing regressions.",
                time: "1-2 Weeks",
                prereqs: "Ruby",
                resources: [
                    { name: "RSpec Official Docs", url: "https://rspec.info/documentation/" },
                ],
                practice: "Write a simple RSpec test for a Ruby method you've created to verify its return value.",
            },
            {
                what: "Metaprogramming",
                why: "To understand how Ruby code can write or modify other code at runtime. This is the 'magic' behind frameworks like Rails.",
                time: "1 Week",
                prereqs: "OOP, Blocks",
                resources: [
                    { name: "Ruby Metaprogramming for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=D-S8240a2sI" },
                ],
                practice: "Use `define_method` to dynamically create a method on a class.",
            },
            {
                what: "Concurrency",
                why: "To understand how Ruby handles running multiple tasks, using Threads and Fibers.",
                time: "1 Week",
                prereqs: "Methods",
                resources: [
                    { name: "Ruby Concurrency and Parallelism (Book)", url: "https://www.oreilly.com/library/view/ruby-concurrency-and/9781491905390/" },
                ],
                practice: "Write a simple script that uses `Thread.new` to perform two tasks concurrently.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "CLI Address Book", teaches: "Hashes, arrays, user input, and file I/O to save contacts.", tech: "Ruby" },
    { level: "Beginner", title: "Number Guessing Game", teaches: "Control flow, loops, random number generation, and methods.", tech: "Ruby" },
    { level: "Beginner", title: "Simple Text Analyzer", teaches: "String manipulation, file I/O, and using hashes to count word frequency.", tech: "Ruby" },
    { level: "Intermediate", title: "Web Scraper", teaches: "Using gems (like Nokogiri), making HTTP requests, and parsing HTML.", tech: "Ruby, Nokogiri, HTTParty" },
    { level: "Intermediate", title: "Basic Sinatra API", teaches: "Web server basics, routing, and handling JSON.", tech: "Ruby, Sinatra" },
    { level: "Intermediate", title: "Command-Line To-Do List with Classes", teaches: "OOP principles, file storage, and class design.", tech: "Ruby" },
    { level: "Intermediate", title: "Blogging Platform with Rails", teaches: "Rails MVC, Active Record, CRUD operations, and views.", tech: "Ruby on Rails" },
    { level: "Advanced", title: "Twitter Clone with Rails", teaches: "User authentication, database associations (follows), and building a feed.", tech: "Ruby on Rails" },
    { level: "Advanced", title: "Create Your Own Gem", teaches: "Ruby packaging, modules, and publishing to RubyGems.", tech: "Ruby, Bundler" },
    { level: "Advanced", title: "Real-time Chat App", teaches: "WebSockets, concurrency, and advanced Rails features (Action Cable).", tech: "Ruby on Rails, Action Cable" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get comfortable with Ruby syntax and OOP.",
        schedule: [
            "Days 1-10: Complete the entire Beginner Stage.",
            "Days 11-20: Focus on Intermediate OOP (Classes, Inheritance, Modules).",
            "Days 21-30: Learn about RubyGems/Bundler and build the 'CLI Address Book' and 'Text Analyzer' projects.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach for a strong foundation in Ruby and an introduction to web development.",
        schedule: [
            "Days 1-20: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 21-35: Learn the basics of Sinatra and build a simple API.",
            "Days 36-50: Start learning Ruby on Rails, focusing on the MVC pattern and Active Record.",
            "Days 51-60: Build the 'Blogging Platform with Rails' project.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and readiness for a Rails developer role.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on blocks and iterators.",
            "Days 31-60: Master Ruby on Rails, including associations, validations, and testing with RSpec.",
            "Days 61-75: Build an advanced project, like the 'Twitter Clone'.",
            "Days 76-90: Dive into metaprogramming, performance tuning, and prepare for technical interviews.",
        ]
    }
];

const interviewTopics = [
    "What is the difference between a `class` and a `module`?",
    "Explain the difference between `nil` and `false` in Ruby.",
    "What are Ruby blocks, and how do they differ from Procs and Lambdas?",
    "Describe the difference between `include` and `extend`.",
    "What is `self` in Ruby?",
    "Explain what a `Symbol` is and why you would use it over a `String`.",
    "What is the difference between `==`, `===`, `eql?`, and `equal?`?",
    "What is the asset pipeline in Ruby on Rails?",
    "Explain the MVC architecture in the context of Rails.",
    "What is Active Record?",
];

const codingQuestions = [
    { question: "Write a Ruby method to check if a string is a palindrome.", topic: "Strings" },
    { question: "Given an array of numbers, use `.map` to return a new array with each number squared.", topic: "Iterators" },
    { question: "Implement a `Person` class with a `name` and `age`, and a method to introduce themselves.", topic: "OOP" },
];

const mcqs = [
    { question: "In Ruby, which of the following is used to create a key-value pair collection?", options: ["Array", "Set", "Hash", "Tuple"], answer: "Hash" },
    { question: "Which method is commonly used to iterate over an array in Ruby?", options: [".for", ".loop", ".each", ".iterate"], answer: ".each" },
    { question: "What does 'TMTOWTDI' stand for in the context of Ruby?", options: ["There's More Than One Way To Do It", "To Make The Only Way To Do It", "The Main Thing Opens Windows To Do It"], answer: "There's More Than One Way To Do It" },
];

const mistakes = [
    "Mutating an object while iterating over it.",
    "Not understanding the difference between `nil` and `false` (only these two are 'falsy').",
    "Using parentheses for method calls when they are not needed, making code less idiomatic.",
    "Confusing Procs and Lambdas, especially their different handling of the `return` keyword.",
    "Ignoring the benefits of using `Hash` with default values.",
    "Not using block-based iterators (`.each`, `.map`) and instead using traditional `for` loops.",
    "Overusing inheritance when a module (mixin) would be a better fit for sharing behavior.",
    "Forgetting that almost everything in Ruby has a return value.",
    "Not using Bundler to manage gem dependencies, leading to version conflicts.",
    "Writing long, procedural methods instead of breaking logic into smaller, single-responsibility methods."
];

export default function RubyRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Ruby Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Ruby, the language of programmer happiness, and its powerful web framework, Ruby on Rails.
          </p>
        </header>

        {stages.map((stage) => (
          <Card key={stage.title}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                {stage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold">
                      Step {index + 1}: {step.what}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <p><strong>Why it’s important:</strong> {step.why}</p>
                        <p><strong>Time to complete:</strong> {step.time}</p>
                        <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                        <h4 className="font-semibold">Free Resources:</h4>
                        <ul>
                          {step.resources.map(res => (
                            <li key={res.url}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.name}</a></li>
                          ))}
                        </ul>
                         <h4 className="font-semibold">Practice Tasks:</h4>
                        <p>{step.practice}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
                <CardDescription>Apply your knowledge with these hands-on projects, from beginner to advanced.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                     <Card key={p.title}>
                        <CardHeader>
                            <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                            <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4"><strong>What it teaches:</strong> {p.teaches}</p>
                            <p className="text-sm"><strong>Tech:</strong> {p.tech}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
                <CardDescription>Choose a plan that fits your schedule and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {plans.map((plan, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{plan.title}</AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                             <ul className="list-disc pl-5 space-y-2">
                                {plan.schedule.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
                <CardDescription>Key topics, questions, and resume tips to land a Ruby developer job.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Coding Questions</h3>
                     {codingQuestions.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">[{q.topic}] {q.question}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Sample Multiple Choice Questions (MCQs)</h3>
                     {mcqs.map(q => (
                        <div key={q.question} className="p-3 border rounded-md mb-2">
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-muted-foreground">Correct Answer: {q.answer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Resume Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Ruby', 'Ruby on Rails', 'MVC', 'REST API', 'Active Record', 'RSpec', 'SQL', 'OOP', 'Gems', 'Bundler'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, setup instructions (`bundle install`, `rails db:migrate`), and a link to a live demo if available.</li>
                        <li>Include your `Gemfile` and `Gemfile.lock`.</li>
                        <li>Ensure your code is clean, follows Ruby style guides, and is well-structured within the Rails conventions.</li>
                        <li>Write meaningful commit messages.</li>
                        <li>If you have tests, include them and show the test coverage.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/>10 Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    {mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
                </ol>
            </CardContent>
        </Card>

        <div className="text-center pt-8">
            <h2 className="text-2xl font-bold">Your Journey Starts Now</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Ruby is a delightful language that prioritizes making developers happy and productive. This roadmap is your guide, but the real magic comes from embracing its elegant syntax and building amazing applications. Stay curious, have fun, and happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}

