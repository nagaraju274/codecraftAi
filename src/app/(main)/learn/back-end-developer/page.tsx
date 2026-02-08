
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
        title: "Beginner Stage: Server & Language Foundations",
        level: "Beginner",
        steps: [
            {
                what: "Choose a Language & Learn its Basics",
                why: "This is the language you will use to write all of your server-side logic. Python and JavaScript (Node.js) are excellent beginner-friendly choices.",
                time: "2-3 Weeks",
                prereqs: "None",
                resources: [
                    { name: "Node.js (JavaScript) - Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" },
                    { name: "Python for Everybody - Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=8DvywoWv6fI" },
                ],
                practice: "Solve basic algorithm challenges on platforms like LeetCode or HackerRank in your chosen language.",
            },
            {
                what: "Data Structures & Algorithms",
                why: "Understanding DSA is crucial for writing efficient, scalable code and passing technical interviews.",
                time: "3-4 Weeks",
                prereqs: "Programming Language Basics",
                resources: [
                    { name: "Data Structures Easy to Advanced (freeCodeCamp)", url: "https://www.youtube.com/watch?v=RZE9u933Qso" },
                    { name: "GeeksforGeeks - Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
                ],
                practice: "Implement a Linked List and a Binary Search Tree from scratch in your chosen language.",
            },
            {
                what: "Version Control with Git",
                why: "Essential for tracking code changes, collaborating with others, and managing your projects.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Git and GitHub for Beginners - Crash Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
                ],
                practice: "Create a GitHub repository for a small project, make a few commits, create a new branch, make a change, and merge it back.",
            },
            {
                what: "How the Internet Works",
                why: "To be a back-end developer, you must understand the environment your code runs in.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "How Does the Internet Work? (YouTube)", url: "https://www.youtube.com/watch?v=x3c1ih2NJEg" },
                    { name: "HTTP Crash Course (YouTube)", url: "https://www.youtube.com/watch?v=iYM2zFP3W2s" },
                ],
                practice: "Use your browser's developer tools (Network tab) to inspect the HTTP requests and responses when you visit a website.",
            },
            {
                what: "Introduction to Databases",
                why: "Almost every application needs to store data. Understanding the difference between database types is fundamental.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "SQL vs. NoSQL Explained (YouTube)", url: "https://www.youtube.com/watch?v= başkan" },
                ],
                practice: "Write a short summary comparing when you might choose a SQL database versus a NoSQL database.",
            },
            {
                what: "Basic SQL",
                why: "SQL is the universal language for interacting with relational databases.",
                time: "2 Weeks",
                prereqs: "Database Concepts",
                resources: [
                    { name: "SQL for Beginners - Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
                ],
                practice: "On an online platform like SQL Fiddle, write queries to create a table, insert data, and select specific data with a WHERE clause.",
            },
            {
                what: "Your First Web Server/Framework",
                why: "Frameworks provide the tools to handle requests, manage routes, and build APIs efficiently.",
                time: "1 Week",
                prereqs: "Language Basics",
                resources: [
                    { name: "Express.js (Node.js) - Hello World", url: "https://expressjs.com/en/starter/hello-world.html" },
                    { name: "Flask (Python) - Quickstart", url: "https://flask.palletsprojects.com/en/latest/quickstart/" },
                ],
                practice: "Create a simple web server in Express or Flask that responds with 'Hello, World!' when you visit it in your browser.",
            },
            {
                what: "Understanding APIs",
                why: "APIs are how your back-end communicates with the front-end and other services.",
                time: "1 Week",
                prereqs: "Web Server Basics",
                resources: [
                    { name: "What is a REST API? (YouTube)", url: "https://www.youtube.com/watch?v=lsMQRaeKNDk" },
                ],
                practice: "Design a simple API on paper for a blog. What endpoints would you need to get all posts, get a single post, and create a new post?",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building and Securing APIs",
        level: "Intermediate",
        steps: [
            {
                what: "RESTful API Design",
                why: "To learn the conventions for creating clean, predictable, and scalable APIs.",
                time: "1 Week",
                prereqs: "Beginner Stage",
                resources: [
                    { name: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" },
                ],
                practice: "Refactor the blog API you designed to follow RESTful principles (e.g., using correct HTTP verbs like GET, POST, PUT, DELETE).",
            },
            {
                what: "Connecting to a Database",
                why: "To move beyond in-memory storage and persist your application's data permanently.",
                time: "2 Weeks",
                prereqs: "Databases, Frameworks",
                resources: [
                    { name: "Node.js with PostgreSQL (Tutorial)", url: "https://www.freecodecamp.org/news/build-a-rest-api-with-node-js-and-postgresql/" },
                ],
                practice: "Create a 'users' table in a local PostgreSQL database. Write code in your Express/Flask app to connect to it and retrieve all users.",
            },
            {
                what: "Object-Relational Mapping (ORM)",
                why: "ORMs allow you to interact with your database using your chosen programming language, abstracting away raw SQL for more readable and maintainable code.",
                time: "2 Weeks",
                prereqs: "Connecting to Database",
                resources: [
                    { name: "Sequelize (Node.js) Docs", url: "https://sequelize.org/docs/v6/getting-started/" },
                    { name: "SQLAlchemy (Python) 2.0 Tutorial", url: "https://docs.sqlalchemy.org/en/20/tutorial/" },
                ],
                practice: "Refactor your database connection code to use an ORM. Define a 'User' model and use the ORM's methods to fetch users.",
            },
            {
                what: "Authentication (Stateless with JWT)",
                why: "To secure your API and manage user-specific data. JWT is the modern standard for stateless authentication in APIs.",
                time: "1-2 Weeks",
                prereqs: "API Design",
                resources: [
                    { name: "JWT Explained (YouTube)", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
                ],
                practice: "Implement '/register' and '/login' endpoints. On successful login, generate a JWT. Create a protected route that requires a valid JWT to access.",
            },
            {
                what: "Password Hashing",
                why: "You must NEVER store passwords in plain text. Hashing is the process of securely scrambling passwords before storing them.",
                time: "2 Days",
                prereqs: "Authentication",
                resources: [
                    { name: "bcrypt (npm package for Node.js)", url: "https://www.npmjs.com/package/bcrypt" },
                ],
                practice: "Integrate a library like bcrypt into your registration logic to hash user passwords before saving them to the database.",
            },
            {
                what: "Middleware",
                why: "Middleware functions run between the request and the response. They are used for logging, error handling, authentication, and more.",
                time: "1 Week",
                prereqs: "Framework Basics",
                resources: [
                    { name: "Express.js - Writing middleware", url: "https://expressjs.com/en/guide/writing-middleware.html" },
                ],
                practice: "Write a middleware function that checks for a valid JWT in the request headers. Apply this middleware to your protected routes.",
            },
            {
                what: "Environment Variables",
                why: "To keep sensitive information (database passwords, API keys, JWT secrets) separate from your source code.",
                time: "2 Days",
                prereqs: "None",
                resources: [
                    { name: "dotenv (npm package for Node.js)", url: "https://www.npmjs.com/package/dotenv" },
                ],
                practice: "Create a `.env` file to store your database connection string and JWT secret. Use a library like `dotenv` to load them into your application.",
            },
            {
                what: "API Testing",
                why: "To ensure your API works as expected and to catch bugs before they reach production.",
                time: "1 Week",
                prereqs: "API Design",
                resources: [
                    { name: "Testing Express.js APIs with Jest and Supertest", url: "https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/" },
                ],
                practice: "Write an automated test for your '/login' endpoint to verify that it returns a JWT with correct credentials and an error with incorrect ones.",
            },
        ],
    },
    {
        title: "Advanced Stage: Deployment & Scalability",
        level: "Advanced",
        steps: [
            {
                what: "Containerization with Docker",
                why: "To package your application and its dependencies into a portable, reproducible container that can run anywhere.",
                time: "1 Week",
                prereqs: "Intermediate Stage",
                resources: [
                    { name: "Docker for Beginners (YouTube)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
                ],
                practice: "Write a Dockerfile for your back-end application. Use Docker Compose to run your app and its database together.",
            },
            {
                what: "Deployment to the Cloud",
                why: "To make your application accessible on the internet.",
                time: "1-2 Weeks",
                prereqs: "Docker",
                resources: [
                    { name: "Deploying Node.js to Heroku", url: "https://devcenter.heroku.com/articles/deploying-nodejs" },
                    { name: "Introduction to AWS EC2", url: "https://aws.amazon.com/ec2/getting-started/" },
                ],
                practice: "Deploy your containerized application to a platform like Heroku or DigitalOcean App Platform.",
            },
            {
                what: "CI/CD (Continuous Integration/Continuous Deployment)",
                why: "To automate your testing and deployment process, enabling faster and more reliable releases.",
                time: "1 Week",
                prereqs: "Deployment, Testing",
                resources: [
                    { name: "GitHub Actions for CI/CD", url: "https://www.youtube.com/watch?v=R8_veQiY-9E" },
                ],
                practice: "Set up a GitHub Actions workflow that automatically runs your tests on every push and deploys your main branch to your hosting provider.",
            },
            {
                what: "Caching with Redis",
                why: "To improve your application's performance by storing frequently accessed data in a fast, in-memory database.",
                time: "1 Week",
                prereqs: "Databases",
                resources: [
                    { name: "Intro to Redis (YouTube)", url: "https://www.youtube.com/watch?v=G1rOthIU-uo" },
                ],
                practice: "Add a Redis cache to an endpoint that fetches data from your database. On the first request, fetch from the DB and store in Redis. On subsequent requests, serve the data directly from Redis.",
            },
            {
                what: "WebSockets",
                why: "To enable real-time, two-way communication between the client and server for features like chat and live notifications.",
                time: "1 Week",
                prereqs: "Server Basics",
                resources: [
                    { name: "Socket.IO - Get Started", url: "https://socket.io/get-started/chat" },
                ],
                practice: "Integrate Socket.IO into your Express app to build a simple chat application where messages are broadcast to all connected clients.",
            },
            {
                what: "Architecture Patterns (Microservices vs. Monolith)",
                why: "To understand different ways of structuring large applications and the trade-offs involved.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Microservices vs Monolith (YouTube)", url: "https://www.youtube.com/watch?v=r4290n_I_tU" },
                ],
                practice: "On paper, design a simple e-commerce application first as a monolith, then break it down into potential microservices (e.g., Users, Products, Orders).",
            },
            {
                what: "Message Queues (e.g., RabbitMQ)",
                why: "To decouple services and handle long-running tasks asynchronously, improving application resilience and scalability.",
                time: "1 Week",
                prereqs: "Architecture",
                resources: [
                    { name: "RabbitMQ in 5 minutes (YouTube)", url: "https://www.youtube.com/watch?v=T1-O8g_8-cM" },
                ],
                practice: "Design a system where a user signup triggers a 'welcome email' task. Instead of sending the email directly in the request, publish a message to a queue, and have a separate worker service process it.",
            },
            {
                what: "Monitoring & Logging",
                why: "To observe your application's health in production, diagnose problems, and get alerted to issues.",
                time: "1 Week",
                prereqs: "Deployment",
                resources: [
                    { name: "Prometheus & Grafana Tutorial", url: "https://www.youtube.com/watch?v=7gW5pSM666A" },
                ],
                practice: "Integrate a logging library (like Winston for Node.js) into your app to log errors to a file. Set up a basic Prometheus instance to scrape a `/metrics` endpoint from your app.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Personal Link Tree API", teaches: "Basic routing, serving static JSON data.", tech: "Node.js, Express" },
    { level: "Beginner", title: "Quote of the Day API", teaches: "Creating GET endpoints, arrays, and random logic.", tech: "Node.js, Express" },
    { level: "Beginner", title: "URL Shortener Service", teaches: "Handling redirects, basic data storage (in-memory), and string manipulation.", tech: "Node.js, Express" },
    { level: "Intermediate", title: "To-Do List API", teaches: "Full CRUD operations, database connection (SQL or NoSQL), and REST principles.", tech: "Node.js, Express, PostgreSQL/MongoDB" },
    { level: "Intermediate", title: "Blog API", teaches: "User authentication (JWT), protected routes, password hashing, and data modeling.", tech: "Node.js, Express, PostgreSQL, bcrypt, JWT" },
    { level: "Intermediate", title: "Book Review API", teaches: "Relational data (Users, Books, Reviews), advanced queries, and API testing.", tech: "Node.js, Express, Sequelize/Prisma, Jest" },
    { level: "Intermediate", title: "Weather API Proxy", teaches: "Consuming external APIs, caching results with Redis.", tech: "Node.js, Express, Redis" },
    { level: "Advanced", title: "E-commerce API", teaches: "Complex data models (Products, Orders), handling transactions, and integrating payment gateways (Stripe).", tech: "Node.js, Express, PostgreSQL, Stripe" },
    { level: "Advanced", title: "Real-time Chat App Backend", teaches: "WebSockets, managing connections, broadcasting events.", tech: "Node.js, Express, Socket.IO" },
    { level: "Advanced", title: "Microservice-based Job Board", teaches: "Breaking down a monolith, inter-service communication (REST or Message Queue), containerization.", tech: "Node.js, Express, Docker, RabbitMQ" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you building a functional API quickly.",
        schedule: [
            "Days 1-10: Language, DSA, and Git fundamentals.",
            "Days 11-20: Beginner Stage (Steps 4-8), focusing on building a simple Express server and a basic REST API.",
            "Days 21-30: Learn to connect to a database and build the 'To-Do List API' project.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach to become proficient in building robust and secure back-end services.",
        schedule: [
            "Days 1-15: Complete the entire Beginner Stage thoroughly.",
            "Days 16-35: Complete the Intermediate Stage, focusing on database integration, ORMs, and authentication.",
            "Days 36-50: Build the 'Blog API' project, including user registration and protected endpoints.",
            "Days 51-60: Learn about testing and deployment. Dockerize and deploy your project to a cloud service.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on security and testing.",
            "Days 31-60: Cover the Advanced Stage, mastering containerization, CI/CD, and caching with Redis.",
            "Days 61-75: Build an advanced project, such as the 'Real-time Chat App Backend', focusing on WebSockets.",
            "Days 76-90: Explore architecture patterns, message queues, and prepare for interviews with system design practice.",
        ]
    }
];

const interviewTopics = [
    "Explain the request-response cycle in a web application.",
    "What is a REST API? Describe the principles of REST.",
    "Difference between SQL and NoSQL databases.",
    "How does authentication work? Explain sessions vs. JWTs.",
    "What is middleware in the context of a web framework like Express?",
    "What is the 'event loop' in Node.js?",
    "How do you prevent SQL injection?",
    "Explain database indexing and why it's important.",
    "What is the N+1 query problem and how do you solve it?",
    "High-level system design: How would you design a URL shortener / a simple social media feed?",
];

const codingQuestions = [
    { question: "Implement a function to validate a JWT without using an external library.", topic: "Authentication" },
    { question: "Write a SQL query to find all users who have placed more than 10 orders.", topic: "SQL" },
    { question: "Design the database schema for a simple blogging platform (Users, Posts, Comments).", topic: "Database Design" },
];

const mcqs = [
    { question: "Which HTTP status code indicates a resource was successfully created?", options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"], answer: "201 Created" },
    { question: "Which of the following is NOT a principle of REST?", options: ["Stateless", "Client-Server", "Stateful", "Cacheable"], answer: "Stateful" },
    { question: "What is the primary purpose of a message queue like RabbitMQ?", options: ["To store user data permanently", "To improve performance by caching data", "To enable asynchronous communication between services", "To serve static files"], answer: "To enable asynchronous communication between services" },
];

const mistakes = [
    "Not handling errors properly, leading to server crashes.",
    "Blocking the event loop with long-running synchronous code in Node.js.",
    "Storing sensitive information (like API keys and passwords) directly in source code instead of using environment variables.",
    "Not hashing passwords, or using weak hashing algorithms like MD5.",
    "Writing raw SQL queries that are vulnerable to SQL injection.",
    "Not using a database connection pool, leading to performance bottlenecks.",
    "Failing to validate and sanitize user input on the server side.",
    "Designing 'chatty' APIs that require many round trips to get necessary data.",
    "Ignoring the importance of logging, making it impossible to debug issues in production.",
    "Not writing any automated tests for the API.",
];

export default function BackEndDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Back-End Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering the server-side, from databases and APIs to deployment and scalability.
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
                <CardDescription>Key topics, questions, and resume tips to land a back-end developer job.</CardDescription>
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
                        {['Node.js', 'Express', 'Python', 'Django', 'REST API', 'SQL', 'PostgreSQL', 'MongoDB', 'Authentication', 'Docker', 'AWS', 'CI/CD'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, API documentation (endpoints, request/response formats), and setup instructions.</li>
                        <li>Include a `.env.example` file to show what environment variables are needed.</li>
                        <li>Ensure your code is well-structured, with clear separation of concerns (e.g., routes, controllers, services).</li>
                        <li>Write clean and well-organized commit history.</li>
                        <li>If possible, provide a link to a live, deployed version of the API, or a link to a Postman collection.</li>
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
                The back-end is the engine of the web. This roadmap is your guide, but true mastery comes from building robust systems, solving complex problems, and never stop learning about how to make them more secure and scalable. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
