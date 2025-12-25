
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
        title: "Beginner Stage: Express & Node.js Foundations",
        level: "Beginner",
        steps: [
            {
                what: "JavaScript Fundamentals (ES6+)",
                why: "Express.js is a JavaScript framework. A strong understanding of modern JavaScript is essential before you can write any backend code.",
                time: "2 Weeks",
                prereqs: "None",
                resources: [
                    { name: "MDN - JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                    { name: "freeCodeCamp - JS Algorithms & Data Structures", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
                ],
                practice: "Solve basic algorithm challenges on a platform like LeetCode or HackerRank using JavaScript.",
            },
            {
                what: "Node.js Basics",
                why: "Node.js is the JavaScript runtime environment where your Express app will run. You need to understand its core concepts.",
                time: "1 Week",
                prereqs: "JavaScript",
                resources: [
                    { name: "Node.js Official Documentation", url: "https://nodejs.org/en/docs" },
                    { name: "freeCodeCamp - Intro to Node.js", url: "https://www.freecodecamp.org/news/introduction-to-nodejs/" },
                ],
                practice: "Write a simple Node.js script that reads a file from the file system and prints its content to the console.",
            },
            {
                what: "NPM (Node Package Manager)",
                why: "NPM is how you'll manage your project's dependencies, including Express itself.",
                time: "2-3 Days",
                prereqs: "Node.js",
                resources: [
                    { name: "NPM Docs - Getting Started", url: "https://docs.npmjs.com/getting-started" },
                ],
                practice: "Initialize a new Node.js project using `npm init`. Install a package like `lodash` and use a function from it in a script.",
            },
            {
                what: "Setting Up Your First Express Server",
                why: "This is the 'Hello, World!' of Express. It teaches you the basic structure of an application.",
                time: "1 Day",
                prereqs: "Node.js, NPM",
                resources: [
                    { name: "Express.js - Hello world example", url: "https://expressjs.com/en/starter/hello-world.html" },
                ],
                practice: "Create a new project folder, initialize npm, install Express, and write a simple `server.js` file that listens on a port and responds with 'Hello, World!'.",
            },
            {
                what: "Routing Basics",
                why: "Routing determines how your application responds to a client request to a particular endpoint (URI). It's the most fundamental part of any web server.",
                time: "2-3 Days",
                prereqs: "Express Server Setup",
                resources: [
                    { name: "Express.js - Basic routing", url: "https://expressjs.com/en/starter/basic-routing.html" },
                ],
                practice: "Create routes for `/`, `/about`, and `/contact` that send back simple text responses.",
            },
            {
                what: "Handling HTTP Requests (GET, POST)",
                why: "Web applications need to handle different types of requests. GET is for retrieving data, and POST is for submitting data.",
                time: "2 Days",
                prereqs: "Routing",
                resources: [
                    { name: "HTTP Request Methods (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" },
                ],
                practice: "Create a GET route `/users` that returns a JSON array of users. Create a POST route `/users` that logs the incoming request body to the console.",
            },
            {
                what: "Working with JSON",
                why: "JSON is the standard format for data exchange in modern web APIs. You need to know how to send and receive it.",
                time: "1 Day",
                prereqs: "HTTP Requests",
                resources: [
                    { name: "res.json() documentation", url: "https://expressjs.com/en/api.html#res.json" },
                ],
                practice: "Modify your GET `/users` route to send a hardcoded JSON array of user objects.",
            },
            {
                what: "Intro to Middleware",
                why: "Middleware functions are the backbone of Express. They are functions that have access to the request and response objects, and can execute code, make changes, or end the request-response cycle.",
                time: "3-4 Days",
                prereqs: "Routing",
                resources: [
                    { name: "Express.js - Using middleware", url: "https://expressjs.com/en/guide/using-middleware.html" },
                ],
                practice: "Write a simple logger middleware that prints the request method and URL to the console for every incoming request.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Building APIs",
        level: "Intermediate",
        steps: [
            {
                what: "Route Parameters and Query Strings",
                why: "To create dynamic routes (e.g., `/users/123`) and handle optional parameters (e.g., `/search?q=books`).",
                time: "2 Days",
                prereqs: "Routing Basics",
                resources: [
                    { name: "Express.js - Routing Guide", url: "https://expressjs.com/en/guide/routing.html" },
                ],
                practice: "Create a route `/products/:id` that retrieves a product ID from the URL. Create a route `/items` that filters results based on a `category` query string.",
            },
            {
                what: "Using `express.Router`",
                why: "To organize your routes into modular, mountable files instead of having them all in your main server file.",
                time: "2 Days",
                prereqs: "Routing Basics",
                resources: [
                    { name: "express.Router() documentation", url: "https://expressjs.com/en/guide/routing.html#express-router" },
                ],
                practice: "Create a `routes/userRoutes.js` file. Move all user-related routes into it using `express.Router`, then import and use it in your main server file.",
            },
            {
                what: "Handling POST, PUT, and DELETE Requests",
                why: "To build full CRUD (Create, Read, Update, Delete) functionality for a REST API.",
                time: "3 Days",
                prereqs: "Routing Basics",
                resources: [
                    { name: "Building a REST API with Express", url: "https://www.digitalocean.com/community/tutorials/build-a-rest-api-with-node-js-and-express-js" },
                ],
                practice: "Create POST, PUT, and DELETE routes for a `/tasks` endpoint to manage a to-do list stored in an in-memory array.",
            },
            {
                what: "Middleware Deep Dive",
                why: "To understand built-in middleware (like `express.json()`), third-party middleware (like `cors`), and how to write your own custom middleware for tasks like authentication or logging.",
                time: "4 Days",
                prereqs: "Intro to Middleware",
                resources: [
                    { name: "Writing middleware for use in Express apps", url: "https://expressjs.com/en/guide/writing-middleware.html" },
                ],
                practice: "Add the `express.json()` middleware to your app to parse incoming JSON payloads. Write a custom middleware that adds a `requestTime` property to the `req` object.",
            },
            {
                what: "Error Handling",
                why: "To create a centralized way to catch and handle errors in your application, preventing crashes and sending meaningful error messages to the client.",
                time: "3 Days",
                prereqs: "Middleware",
                resources: [
                    { name: "Express.js - Error handling", url: "https://expressjs.com/en/guide/error-handling.html" },
                ],
                practice: "Create a custom error-handling middleware that catches errors and sends back a JSON response with a status code and error message.",
            },
            {
                what: "Connecting to a Database (e.g., MongoDB with Mongoose)",
                why: "To persist data beyond server restarts. Mongoose provides a simple, schema-based solution to model your application data for MongoDB.",
                time: "1 Week",
                prereqs: "CRUD Operations",
                resources: [
                    { name: "Mongoose ODM - Quick Start", url: "https://mongoosejs.com/docs/index.html" },
                ],
                practice: "Set up a local MongoDB database. Create a Mongoose schema and model for a `Post`. Refactor your API endpoints to use the model to save and retrieve posts from the database.",
            },
            {
                what: "Environment Variables",
                why: "To manage configuration and keep sensitive information (like database connection strings and API keys) out of your source code.",
                time: "2 Days",
                prereqs: "Basic Command Line",
                resources: [
                    { name: "Using environment variables in Node.js", url: "https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html" },
                ],
                practice: "Install the `dotenv` package. Create a `.env` file to store your port number and database URI. Load these variables into your application using `dotenv`.",
            },
            {
                what: "Basic API Security (CORS, Helmet)",
                why: "To protect your API from common web vulnerabilities.",
                time: "2 Days",
                prereqs: "Middleware",
                resources: [
                    { name: "CORS (Cross-Origin Resource Sharing)", url: "https://expressjs.com/en/resources/middleware/cors.html" },
                    { name: "Helmet - Secure your Express apps", url: "https://helmetjs.github.io/" },
                ],
                practice: "Install and use the `cors` middleware to allow requests from a different origin. Install and use `helmet` to set secure HTTP headers.",
            },
        ],
    },
    {
        title: "Advanced Stage: Production & Scalability",
        level: "Advanced",
        steps: [
            {
                what: "Authentication with JWT (JSON Web Tokens)",
                why: "To implement stateless authentication for your API, allowing you to secure endpoints and identify users.",
                time: "1 Week",
                prereqs: "Middleware, Databases",
                resources: [
                    { name: "JWT Introduction", url: "https://jwt.io/introduction" },
                    { name: "Securing Node.js RESTful APIs with JWTs", url: "https://www.digitalocean.com/community/tutorials/nodejs-jwt-express-mongodb" },
                ],
                practice: "Create `/register` and `/login` endpoints. Upon successful login, generate a JWT and send it back to the client. Create a protected route that can only be accessed with a valid JWT.",
            },
            {
                what: "File Uploads (Multer)",
                why: "To handle multipart/form-data, which is primarily used for uploading files.",
                time: "3 Days",
                prereqs: "Middleware, Routing",
                resources: [
                    { name: "Multer - npm", url: "https://www.npmjs.com/package/multer" },
                ],
                practice: "Create an endpoint that accepts a file upload using Multer and saves the file to a directory on the server.",
            },
            {
                what: "Validation (express-validator)",
                why: "To validate and sanitize incoming data from the client, ensuring data integrity and preventing security issues.",
                time: "3 Days",
                prereqs: "Middleware",
                resources: [
                    { name: "express-validator Documentation", url: "https://express-validator.github.io/docs/" },
                ],
                practice: "Add validation to your user registration endpoint to ensure the email is valid and the password meets a minimum length requirement.",
            },
            {
                what: "Testing with Jest & Supertest",
                why: "To write automated tests for your API endpoints, ensuring they work as expected and preventing regressions.",
                time: "1 Week",
                prereqs: "JavaScript",
                resources: [
                    { name: "Jest - Getting Started", url: "https://jestjs.io/docs/getting-started" },
                    { name: "Testing Express.js APIs with Supertest", url: "https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/" },
                ],
                practice: "Write a test suite for your user authentication endpoints. Test for successful registration, successful login, and failed login with incorrect credentials.",
            },
            {
                what: "WebSockets for Real-time Communication",
                why: "To build real-time features like chat applications, live notifications, or collaborative editing.",
                time: "1 Week",
                prereqs: "Node.js Basics",
                resources: [
                    { name: "Socket.IO - Get Started", url: "https://socket.io/get-started" },
                ],
                practice: "Integrate Socket.IO into an Express app to build a simple chat application where messages sent by one client are broadcast to all other connected clients.",
            },
            {
                what: "Deployment (Docker, Heroku/DigitalOcean)",
                why: "To make your application available on the internet.",
                time: "1 Week",
                prereqs: "Environment Variables",
                resources: [
                    { name: "Dockerizing a Node.js web app", url: "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/" },
                    { name: "Deploying Node.js to Heroku", url: "https://devcenter.heroku.com/articles/deploying-nodejs" },
                ],
                practice: "Write a Dockerfile for your Express application. Deploy it to a cloud platform like Heroku or a service like DigitalOcean App Platform.",
            },
            {
                what: "Performance & Optimization",
                why: "To ensure your application can handle traffic efficiently. This includes caching, rate limiting, and performance monitoring.",
                time: "4-5 Days",
                prereqs: "Deployment",
                resources: [
                    { name: "Node.js Performance Best Practices", url: "https://blog.logrocket.com/node-js-performance-best-practices/" },
                    { name: "API Caching with Redis", url: "https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-with-redis" },
                ],
                practice: "Implement a simple rate limiter using a package like `express-rate-limit`. Add basic caching for a frequently requested, non-critical endpoint.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Personal Website API", teaches: "Basic routing, serving static files, and creating simple GET endpoints.", tech: "Node.js, Express" },
    { level: "Beginner", title: "Quote of the Day API", teaches: "Creating GET routes, working with JSON, and using random logic.", tech: "Node.js, Express" },
    { level: "Beginner", title: "Simple Poll API", teaches: "Handling POST requests, working with in-memory data structures (arrays/objects).", tech: "Node.js, Express" },
    { level: "Intermediate", title: "To-Do List API", teaches: "Full CRUD operations, route parameters, and connecting to a database (MongoDB/Mongoose).", tech: "Node.js, Express, MongoDB" },
    { level: "Intermediate", title: "Blog API", teaches: "CRUD for posts and comments, data modeling, and using `express.Router` for organization.", tech: "Node.js, Express, MongoDB" },
    { level: "Intermediate", title: "URL Shortener Service", teaches: "Handling redirects, generating unique IDs, and database interaction.", tech: "Node.js, Express, Database" },
    { level: "Intermediate", title: "Book Review API", teaches: "User authentication (register/login), protected routes, and relational data (users, books, reviews).", tech: "Node.js, Express, Database, JWT" },
    { level: "Advanced", title: "E-commerce API", teaches: "Complex data models (products, orders, carts), handling payments (Stripe integration), advanced authentication.", tech: "Node.js, Express, Database, JWT, Stripe" },
    { level: "Advanced", title: "Real-time Chat Application", teaches: "WebSockets, user presence, broadcasting messages, and real-time event handling.", tech: "Node.js, Express, Socket.IO" },
    { level: "Advanced", title: "Job Board API with File Uploads", teaches: "Handling file uploads for resumes, advanced search and filtering, authentication for employers and job seekers.", tech: "Node.js, Express, Database, Multer" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan to get you building a functional API quickly.",
        schedule: [
            "Days 1-7: JavaScript & Node.js fundamentals, NPM.",
            "Days 8-15: Complete the Express Beginner Stage. Build the 'Quote of the Day' API.",
            "Days 16-23: Cover Intermediate topics: Routing, Middleware, and Error Handling.",
            "Days 24-30: Learn to connect to a database and build the 'To-Do List API' project.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach to become proficient in building robust back-end services.",
        schedule: [
            "Days 1-15: Complete the entire Beginner Stage thoroughly.",
            "Days 16-35: Complete the entire Intermediate Stage, including database integration and basic security.",
            "Days 36-50: Build an intermediate project like the 'Book Review API', focusing on authentication.",
            "Days 51-60: Learn about testing and deployment. Dockerize and deploy your project.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages with a deep focus on middleware and error handling.",
            "Days 31-60: Cover the Advanced Stage, mastering authentication, testing, and real-time communication with WebSockets.",
            "Days 61-75: Build an advanced project, such as the 'E-commerce API', focusing on complex logic and third-party integrations.",
            "Days 76-90: Focus on performance, optimization, and preparing your portfolio and resume for job applications.",
        ]
    }
];

const interviewTopics = [
    "What is Express.js and why is it used with Node.js?",
    "Explain the request-response cycle in Express.",
    "What is middleware? Give an example.",
    "Explain the difference between `app.use()` and `app.get()` (or other HTTP methods).",
    "How do you handle errors in an Express application?",
    "What is routing? How do you create modular routes with `express.Router`?",
    "Explain the difference between route parameters (`:id`) and query strings (`?key=value`).",
    "How do you handle authentication in an Express API? (Talk about JWT or sessions).",
    "What is CORS and why is it important?",
    "What is the purpose of environment variables in a Node.js/Express application?",
];

const mcqs = [
    { question: "Which function is used to add middleware to an Express application?", options: ["app.add()", "app.middleware()", "app.use()", "app.apply()"], answer: "app.use()" },
    { question: "What is the purpose of the `next()` function in Express middleware?", options: ["To end the request", "To send a response", "To pass control to the next middleware function", "To get the next request"], answer: "To pass control to the next middleware function" },
    { question: "Which built-in middleware is required to parse JSON request bodies?", options: ["express.json()", "express.urlencoded()", "express.static()", "express.body()"], answer: "express.json()" },
];

const mistakes = [
    "Blocking the event loop with synchronous code instead of using asynchronous patterns.",
    "Not handling errors, leading to server crashes.",
    "Forgetting to call `next()` in a middleware function, causing the request to hang.",
    "Not using environment variables for sensitive data like API keys and database strings.",
    "Writing all routes in a single large `server.js` file instead of using `express.Router`.",
    "Not validating or sanitizing user input, leading to security vulnerabilities.",
    "Directly manipulating the database in controller functions instead of abstracting logic into a service or model layer.",
    "Ignoring the importance of CORS, leading to API requests being blocked by the browser.",
    "Not creating a centralized error handler, resulting in duplicated error-handling code.",
    "Failing to write any automated tests for API endpoints."
];

export default function ExpressJsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Express.js Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Express.js, the fast, unopinionated, minimalist web framework for Node.js.
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
                <CardDescription>Key topics, questions, and resume tips to land a back-end developer job using Node.js and Express.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Important Interview Topics</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {interviewTopics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
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
                        {['Node.js', 'Express.js', 'REST API', 'Backend Development', 'JavaScript', 'MongoDB', 'PostgreSQL', 'JWT', 'Authentication', 'Middleware', 'NPM'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, API documentation (endpoints, request/response formats), and setup instructions.</li>
                        <li>Include a `.env.example` file to show what environment variables are needed.</li>
                        <li>Ensure your code is well-structured, with clear separation of routes, controllers, and models.</li>
                        <li>Write clean and well-organized commit history.</li>
                        <li>If possible, provide a link to a live, deployed version of the API.</li>
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
                Express.js is a powerful gateway into back-end development. This roadmap provides the structure, but the real learning happens when you start building and solving problems. Stay curious, build projects, and don't be afraid to break things. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
