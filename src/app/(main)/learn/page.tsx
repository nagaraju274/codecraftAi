
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
      { title: "Introduction", content: "• Learn about the history of Python and its key features.\n• Understand why Python is a popular choice for various applications.\n• Set up your Python development environment on your local machine." },
      { title: "Python Fundamentals", content: "• Learn about variables and different data types (integers, floats, strings, booleans).\n• Handle user input and display output to the console.\n• Perform basic operations on numbers and strings." },
      { title: "Python Flow Control", content: "• Control program flow using conditional statements (if, elif, else).\n• Create loops (for, while) to execute code repeatedly.\n• Use 'break' and 'continue' to control loop behavior." },
      { title: "Python Data Types", content: "• Work with lists to store ordered collections of items.\n• Use tuples for immutable sequences of data.\n• Understand dictionaries for key-value pair storage and sets for unique elements." },
      { title: "Python Functions", content: "• Define and call your own custom functions.\n• Pass arguments to functions and return values.\n• Understand variable scope (local vs. global) and lambda functions." },
      { title: "Python Files", content: "• Read data from text files.\n• Write data to text files.\n• Understand file handling modes and best practices for working with files." },
      { title: "Python Exception Handling", content: "• Use try-except blocks to handle errors gracefully.\n• Catch specific exceptions to handle different error types.\n• Use 'finally' to execute cleanup code." },
      { title: "Python Object and Class", content: "• Learn the principles of Object-Oriented Programming (OOP).\n• Define classes and create objects (instances).\n• Understand concepts like inheritance, encapsulation, and polymorphism." },
    ],
  },
  {
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    topics: [
        { title: "Introduction to JavaScript", content: "• Understand the role of JavaScript in web development.\n• Learn how JavaScript runs in the browser.\n• Write your first 'Hello, World!' script and use the browser console." },
        { title: "Variables and Data Types", content: "• Declare variables using var, let, and const.\n• Learn about JavaScript data types: String, Number, Boolean, Null, Undefined, and Object.\n• Work with arrays to store lists of data." },
        { title: "Operators and Expressions", content: "• Use arithmetic operators for calculations.\n• Understand assignment, comparison, and logical operators.\n• Combine expressions to create complex logic." },
        { title: "Control Flow (If/Else, Loops)", content: "• Make decisions in your code with if/else statements.\n• Execute code blocks multiple times using for and while loops.\n• Iterate over arrays and other iterable objects." },
        { title: "Functions", content: "• Create reusable blocks of code with functions.\n• Understand function declarations, expressions, and arrow functions.\n• Pass parameters to functions and use the return statement." },
        { title: "Objects and Arrays", content: "• Create and manipulate objects to store complex data.\n• Access object properties using dot and bracket notation.\n• Use common array methods like push, pop, forEach, and map." },
        { title: "DOM Manipulation", content: "• Select HTML elements using querySelector and getElementById.\n• Change the content, style, and attributes of elements.\n• Create and append new elements to the page dynamically." },
        { title: "Asynchronous JavaScript (Promises, async/await)", content: "• Understand the concept of asynchronous programming.\n• Use Promises to handle operations that take time to complete.\n• Write cleaner asynchronous code with async/await syntax." },
    ],
  },
  {
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
    topics: [
        { title: "HTML5: Structuring the Web", content: "• Learn the basic structure of an HTML document.\n• Use semantic tags like <header>, <nav>, <main>, and <footer>.\n• Create forms with input fields, labels, and buttons." },
        { title: "CSS3: Styling and Layouts", content: "• Apply styles to HTML elements using CSS selectors.\n• Understand the box model (margin, border, padding, content).\n• Style text with properties for font, color, and spacing." },
        { title: "Responsive Design with Flexbox and Grid", content: "• Build layouts that adapt to different screen sizes.\n• Use Flexbox for one-dimensional layouts (rows or columns).\n• Use CSS Grid for complex two-dimensional layouts." },
        { title: "Introduction to React", content: "• Understand the component-based architecture of React.\n• Set up a new React project using tools like Create React App.\n• Learn JSX syntax to write HTML-like code in JavaScript." },
        { title: "Components, Props, and State", content: "• Create reusable UI components.\n• Pass data down to child components using props.\n• Manage component-specific data with the useState hook." },
        { title: "React Hooks", content: "• Use the useEffect hook to handle side effects like data fetching.\n• Manage global state with the useContext hook.\n• Learn about other essential hooks like useRef and useReducer." },
        { title: "Building a Simple Web App", content: "• Plan the structure and features of your application.\n• Combine components to build a complete user interface.\n• Fetch data from a public API and display it in your app." },
    ],
  },
  {
    title: "Full Stack Web Development",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    topics: [
      { title: "Frontend Frameworks (React, Next.js)", content: "• Build complex user interfaces with React.\n• Learn Next.js for features like server-side rendering and routing.\n• Manage application state with tools like Redux or Zustand." },
      { title: "Backend Development (Node.js, Express)", content: "• Create a server using Node.js.\n• Build a RESTful API with the Express framework.\n• Handle HTTP requests and responses." },
      { title: "Databases (SQL, NoSQL)", content: "• Understand the differences between SQL and NoSQL databases.\n• Learn basic SQL commands for relational databases (e.g., PostgreSQL).\n• Work with a NoSQL database like MongoDB." },
      { title: "APIs and RESTful services", content: "• Design and build robust APIs following REST principles.\n• Understand HTTP methods (GET, POST, PUT, DELETE).\n• Create endpoints for your frontend to consume." },
      { title: "Authentication and Authorization", content: "• Implement user login and registration systems.\n• Secure your API using JSON Web Tokens (JWT).\n• Create protected routes that require authentication." },
      { title: "Deployment and Hosting", content: "• Deploy your frontend application to platforms like Vercel or Netlify.\n• Host your backend server on a cloud provider like Heroku or AWS.\n• Set up a production database." },
      { title: "Version Control with Git", content: "• Track changes in your codebase using Git.\n• Collaborate with others using GitHub or GitLab.\n• Learn essential Git commands like commit, push, pull, and branch." },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    topics: [
      { title: "Introduction to Mobile Development", content: "• Compare native development (Swift/Kotlin) with cross-platform (React Native/Flutter).\n• Understand the mobile app ecosystem.\n• Choose the right technology stack for your project." },
      { title: "React Native or Flutter Fundamentals", content: "• Set up your development environment for your chosen framework.\n• Build layouts and user interfaces with pre-built components.\n• Handle user input and touch gestures." },
      { title: "State Management", content: "• Learn how to manage the state of your application.\n• Use state management libraries like Redux, MobX, or Riverpod.\n• Keep your UI in sync with your application data." },
      { title: "Navigation", content: "• Implement navigation between different screens in your app.\n• Use stack, tab, and drawer navigators to create user-friendly flows.\n• Pass data between screens." },
      { title: "Working with APIs", content: "• Fetch data from a backend server using HTTP requests.\n• Handle API responses and display the data in your app.\n• Manage loading and error states." },
      { title: "Push Notifications", content: "• Implement push notifications to engage users.\n• Use services like Firebase Cloud Messaging (FCM).\n• Handle incoming notifications when the app is in different states." },
      { title: "Publishing to App Stores", content: "• Prepare your app for release.\n• Follow the guidelines for the Apple App Store and Google Play Store.\n• Build and submit your app for review." },
    ],
  },
  {
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    topics: [
      { title: "CI/CD Pipelines (Jenkins, GitHub Actions)", content: "• Understand the principles of Continuous Integration and Continuous Delivery.\n• Automate the build, test, and deployment processes.\n• Create pipelines using tools like Jenkins or GitHub Actions." },
      { title: "Infrastructure as Code (Terraform, Ansible)", content: "• Manage your infrastructure using code.\n• Use Terraform to provision cloud resources (servers, databases, etc.).\n• Use Ansible for configuration management and automation." },
      { title: "Containerization (Docker, Kubernetes)", content: "• Package applications into lightweight, portable containers with Docker.\n• Orchestrate and manage containers at scale with Kubernetes.\n• Understand container networking and storage." },
      { title: "Cloud Platforms (AWS, GCP, Azure)", content: "• Gain expertise in a major cloud provider.\n• Learn about core services for compute, storage, networking, and databases.\n• Understand cloud security and cost management." },
      { title: "Monitoring and Logging", content: "• Monitor the health and performance of your systems.\n• Use tools like Prometheus for metrics and Grafana for visualization.\n• Centralize logs with the ELK Stack (Elasticsearch, Logstash, Kibana)." },
      { title: "Scripting (Bash, Python)", content: "• Automate repetitive tasks using scripts.\n• Write Bash scripts for system administration.\n• Use Python for more complex automation and scripting needs." },
      { title: "Networking Fundamentals", content: "• Understand core networking concepts (TCP/IP, DNS, HTTP/S).\n• Configure virtual private clouds (VPCs) and subnets.\n• Secure your network with firewalls and security groups." },
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
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
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
