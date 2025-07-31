
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const learningPaths = [
  {
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    topics: [
      { title: "Introduction", content: "Learn about the history of Python, its key features, and why it's a popular choice for beginners and experts alike. We'll also guide you through setting up your Python development environment." },
      { title: "Python Fundamentals", content: "Get started with the basics. This module covers variables, data types (integers, floats, strings, booleans), and how to handle user input and output." },
      { title: "Python Flow Control", content: "Learn how to control the flow of your programs using conditional statements (if, elif, else) and loops (for, while). Understand concepts like break and continue." },
      { title: "Python Data Types", content: "Dive deeper into Python's versatile data structures: lists, tuples, sets, and dictionaries. Learn how to create them, access their elements, and use their methods." },
      { title: "Python Functions", content: "Understand how to define and call your own functions, pass arguments, and return values. Learn about function scope and lambda functions." },
      { title: "Python Files", content: "Learn how to read from and write to files in Python. This is essential for working with data and creating persistent applications." },
      { title: "Python Exception Handling", content: "Discover how to handle errors and exceptions gracefully using try, except, else, and finally blocks to make your code more robust." },
      { title: "Python Object and Class", content: "An introduction to Object-Oriented Programming (OOP) in Python. Learn about classes, objects, inheritance, and polymorphism." },
    ],
  },
  {
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    topics: [
        { title: "Introduction to JavaScript", content: "Explore what JavaScript is, its role in web development, and how it runs in the browser. Learn to write your first 'Hello, World!' script." },
        { title: "Variables and Data Types", content: "Understand how to declare variables with var, let, and const, and learn about JavaScript's data types like numbers, strings, booleans, objects, and arrays." },
        { title: "Operators and Expressions", content: "Learn about arithmetic, assignment, comparison, and logical operators to perform operations and make decisions in your code." },
        { title: "Control Flow (If/Else, Loops)", content: "Master conditional logic with if/else statements and handle repetitive tasks with for and while loops." },
        { title: "Functions", content: "Learn to write reusable blocks of code with functions. Understand function declarations, expressions, and arrow functions." },
        { title: "Objects and Arrays", content: "Dive into two of JavaScript's most important data structures. Learn to create, manipulate, and iterate over objects and arrays." },
        { title: "DOM Manipulation", content: "Discover how to interact with HTML and CSS using JavaScript. Learn to select elements, change styles, and respond to user events." },
        { title: "Asynchronous JavaScript (Promises, async/await)", content: "Understand the event loop and learn how to handle asynchronous operations with callbacks, Promises, and the modern async/await syntax." },
    ],
  },
  {
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
    topics: [
        { title: "HTML5: Structuring the Web", content: "Master the building blocks of the web. Learn about semantic HTML tags, forms, and how to structure a webpage for accessibility and SEO." },
        { title: "CSS3: Styling and Layouts", content: "Bring your websites to life with CSS. Learn about selectors, the box model, colors, typography, and backgrounds." },
        { title: "Responsive Design with Flexbox and Grid", content: "Build websites that look great on any device. Master modern CSS layout techniques with Flexbox and CSS Grid." },
        { title: "Introduction to React", content: "Get started with the most popular JavaScript library for building user interfaces. Understand the component-based architecture and JSX syntax." },
        { title: "Components, Props, and State", content: "Learn the core concepts of React. Build reusable components, pass data with props, and manage component-specific data with state." },
        { title: "React Hooks", content: "Unlock the power of functional components with Hooks. Learn to use useState, useEffect, useContext, and other essential hooks." },
        { title: "Building a Simple Web App", content: "Apply your knowledge by building a complete single-page application with React, from setup to deployment." },
    ],
  },
  {
    title: "Full Stack Web Development",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    topics: [
      { title: "Frontend Frameworks (React, Next.js)", content: "Deepen your knowledge of React and learn Next.js for server-side rendering, static site generation, and optimized performance." },
      { title: "Backend Development (Node.js, Express)", content: "Build the server-side of your applications. Learn to create a server, handle requests, and build APIs using Node.js and the Express framework." },
      { title: "Databases (SQL, NoSQL)", content: "Learn how to store and retrieve data. Get an overview of relational databases like PostgreSQL (SQL) and document databases like MongoDB (NoSQL)." },
      { title: "APIs and RESTful services", content: "Design and build robust APIs. Understand REST principles, HTTP methods, and how to create endpoints for your frontend to consume." },
      { title: "Authentication and Authorization", content: "Secure your applications. Implement user login, registration, and protected routes using techniques like JWT (JSON Web Tokens) and sessions." },
      { title: "Deployment and Hosting", content: "Take your applications live. Learn to deploy your full-stack applications to cloud platforms like Vercel, Netlify, or AWS." },
      { title: "Version Control with Git", content: "Master the most popular version control system. Learn to use Git and GitHub to manage your codebase, collaborate with others, and track changes." },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    topics: [
      { title: "Introduction to Mobile Development", content: "Explore the mobile app landscape, compare native vs. cross-platform development, and choose the right technology for your project." },
      { title: "React Native or Flutter Fundamentals", content: "Choose a framework and learn its core concepts. We'll cover building layouts, handling user input, and creating basic components." },
      { title: "State Management", content: "Learn how to manage application state effectively in a mobile environment using tools like Redux, MobX, or Flutter's BLoC pattern." },
      { title: "Navigation", content: "Implement multi-screen navigation in your app. Learn about stack, tab, and drawer navigators to create intuitive user flows." },
      { title: "Working with APIs", content: "Connect your mobile app to a backend server. Learn how to fetch data from APIs and display it within your application." },
      { title: "Push Notifications", content: "Engage your users by implementing push notifications. Learn to set up services like Firebase Cloud Messaging to send alerts." },
      { title: "Publishing to App Stores", content: "Learn the final steps to get your app in the hands of users. We'll guide you through the process of building, signing, and submitting your app to the Apple App Store and Google Play Store." },
    ],
  },
  {
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    topics: [
      { title: "CI/CD Pipelines (Jenkins, GitHub Actions)", content: "Automate your build, test, and deployment processes. Learn to create continuous integration and continuous delivery pipelines." },
      { title: "Infrastructure as Code (Terraform, Ansible)", content: "Manage and provision your infrastructure through code. Learn to use Terraform for provisioning cloud resources and Ansible for configuration management." },
      { title: "Containerization (Docker, Kubernetes)", content: "Package your applications into containers with Docker and orchestrate them at scale with Kubernetes for consistent and reliable deployments." },
      { title: "Cloud Platforms (AWS, GCP, Azure)", content: "Gain expertise in a major cloud provider. Learn about core services for compute, storage, networking, and databases." },
      { title: "Monitoring and Logging", content: "Ensure the health and performance of your systems. Learn to use tools like Prometheus, Grafana, and the ELK Stack to monitor metrics and analyze logs." },
      { title: "Scripting (Bash, Python)", content: "Automate repetitive tasks and write custom scripts. Master shell scripting and Python for system administration and automation." },
      { title: "Networking Fundamentals", content: "Understand the core concepts of networking, including TCP/IP, DNS, HTTP/S, and how they apply in a cloud environment." },
    ],
  },
];


export default function LearnPage() {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground">
          Our structured learning paths will help you master new skills and advance your career.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((path) => (
          <Card key={path.title} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{path.title}</CardTitle>
              <p className="text-muted-foreground pt-2 text-sm">{path.description}</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {path.topics.map((topic, index) => (
                  <AccordionItem value={`item-${index}`} key={topic.title}>
                    <AccordionTrigger>
                        {topic.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {topic.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
