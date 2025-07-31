
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const learningPaths = [
  {
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    topics: [
      {
        title: "Introduction",
        points: [
            { text: "Learn about the history of Python and its key features.", resources: [{ name: "Python History", url: "https://en.wikipedia.org/wiki/History_of_Python" }] },
            { text: "Understand why Python is a popular choice for various applications.", resources: [{ name: "Why Python?", url: "https://www.python.org/doc/essays/blurb/" }] },
            { text: "Set up your Python development environment on your local machine.", resources: [{ name: "Download Python", url: "https://www.python.org/downloads/" }, { name: "VS Code Setup", url: "https://code.visualstudio.com/docs/python/python-tutorial" }] },
        ],
      },
      {
        title: "Python Fundamentals",
        points: [
            { text: "Learn about variables and different data types (integers, floats, strings, booleans).", resources: [{ name: "Data Types", url: "https://www.w3schools.com/python/python_datatypes.asp" }] },
            { text: "Handle user input and display output to the console.", resources: [{ name: "Input and Output", url: "https://www.geeksforgeeks.org/taking-input-in-python/" }] },
            { text: "Perform basic operations on numbers and strings.", resources: [{ name: "Operators", url: "https://www.w3schools.com/python/python_operators.asp" }] },
        ],
      },
      {
        title: "Python Flow Control",
        points: [
            { text: "Control program flow using conditional statements (if, elif, else).", resources: [{ name: "If...Else", url: "https://www.w3schools.com/python/python_conditions.asp" }] },
            { text: "Create loops (for, while) to execute code repeatedly.", resources: [{ name: "For Loops", url: "https://www.w3schools.com/python/python_for_loops.asp" }, { name: "While Loops", url: "https://www.w3schools.com/python/python_while_loops.asp" }] },
            { text: "Use 'break' and 'continue' to control loop behavior.", resources: [{ name: "Break and Continue", url: "https://www.w3schools.com/python/python_for_loops.asp" }] },
        ],
      },
      {
        title: "Python Data Types",
        points: [
            { text: "Work with lists to store ordered collections of items.", resources: [{ name: "Lists", url: "https://www.w3schools.com/python/python_lists.asp" }] },
            { text: "Use tuples for immutable sequences of data.", resources: [{ name: "Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" }] },
            { text: "Understand dictionaries for key-value pair storage and sets for unique elements.", resources: [{ name: "Dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" }, { name: "Sets", url: "https://www.w3schools.com/python/python_sets.asp" }] },
        ],
      },
      {
        title: "Python Functions",
        points: [
            { text: "Define and call your own custom functions.", resources: [{ name: "Functions", url: "https://www.w3schools.com/python/python_functions.asp" }] },
            { text: "Pass arguments to functions and return values.", resources: [{ name: "Function Arguments", url: "https://www.w3schools.com/python/python_functions.asp#Arguments" }] },
            { text: "Understand variable scope (local vs. global) and lambda functions.", resources: [{ name: "Scope", url: "https://www.w3schools.com/python/python_scope.asp" }, { name: "Lambda", url: "https://www.w3schools.com/python/python_lambda.asp" }] },
        ],
      },
      {
        title: "Python Files",
        points: [
            { text: "Read data from text files.", resources: [{ name: "Read Files", url: "https://www.w3schools.com/python/python_file_read.asp" }] },
            { text: "Write data to text files.", resources: [{ name: "Write/Create Files", url: "https://www.w3schools.com/python/python_file_write.asp" }] },
            { text: "Understand file handling modes and best practices for working with files.", resources: [{ name: "File Handling", url: "https://www.w3schools.com/python/python_file_handling.asp" }] },
        ],
      },
      {
        title: "Python Exception Handling",
        points: [
            { text: "Use try-except blocks to handle errors gracefully.", resources: [{ name: "Try...Except", url: "https://www.w3schools.com/python/python_try_except.asp" }] },
            { text: "Catch specific exceptions to handle different error types.", resources: [{ name: "Exception Handling", url: "https://realpython.com/python-exceptions/" }] },
            { text: "Use 'finally' to execute cleanup code.", resources: [{ name: "Finally", url: "https://www.w3schools.com/python/python_try_except.asp#Finally" }] },
        ],
      },
      {
        title: "Python Object and Class",
        points: [
            { text: "Learn the principles of Object-Oriented Programming (OOP).", resources: [{ name: "Python OOP", url: "https://www.w3schools.com/python/python_oop.asp" }] },
            { text: "Define classes and create objects (instances).", resources: [{ name: "Classes/Objects", url: "https://www.w3schools.com/python/python_classes.asp" }] },
            { text: "Understand concepts like inheritance, encapsulation, and polymorphism.", resources: [{ name: "Inheritance", url: "https://www.w3schools.com/python/python_inheritance.asp" }] },
        ],
      },
    ],
  },
  {
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    topics: [
        {
            title: "Introduction to JavaScript",
            points: [
                { text: "Understand the role of JavaScript in web development.", resources: [{ name: "What is JavaScript?", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" }] },
                { text: "Learn how JavaScript runs in the browser.", resources: [{ name: "How JavaScript works", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" }] },
                { text: "Write your first 'Hello, World!' script and use the browser console.", resources: [{ name: "Hello World", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Hello_world" }] },
            ],
        },
        {
            title: "Variables and Data Types",
            points: [
                { text: "Declare variables using var, let, and const.", resources: [{ name: "Variables", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" }] },
                { text: "Learn about JavaScript data types: String, Number, Boolean, Null, Undefined, and Object.", resources: [{ name: "Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" }] },
                { text: "Work with arrays to store lists of data.", resources: [{ name: "Arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }] },
            ],
        },
        {
            title: "Operators and Expressions",
            points: [
                { text: "Use arithmetic operators for calculations.", resources: [{ name: "Arithmetic Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators" }] },
                { text: "Understand assignment, comparison, and logical operators.", resources: [{ name: "Comparison and Logical Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators" }] },
                { text: "Combine expressions to create complex logic.", resources: [] },
            ],
        },
        {
            title: "Control Flow (If/Else, Loops)",
            points: [
                { text: "Make decisions in your code with if/else statements.", resources: [{ name: "if...else", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" }] },
                { text: "Execute code blocks multiple times using for and while loops.", resources: [{ name: "for loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" }, { name: "while loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" }] },
                { text: "Iterate over arrays and other iterable objects.", resources: [{ name: "Iterating over arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" }] },
            ],
        },
        {
            title: "Functions",
            points: [
                { text: "Create reusable blocks of code with functions.", resources: [{ name: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }] },
                { text: "Understand function declarations, expressions, and arrow functions.", resources: [{ name: "Arrow functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" }] },
                { text: "Pass parameters to functions and use the return statement.", resources: [] },
            ],
        },
        {
            title: "Objects and Arrays",
            points: [
                { text: "Create and manipulate objects to store complex data.", resources: [{ name: "Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" }] },
                { text: "Access object properties using dot and bracket notation.", resources: [{ name: "Property accessors", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors" }] },
                { text: "Use common array methods like push, pop, forEach, and map.", resources: [{ name: "Array methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods" }] },
            ],
        },
        {
            title: "DOM Manipulation",
            points: [
                { text: "Select HTML elements using querySelector and getElementById.", resources: [{ name: "Introduction to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }] },
                { text: "Change the content, style, and attributes of elements.", resources: [{ name: "Modifying the document", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" }] },
                { text: "Create and append new elements to the page dynamically.", resources: [{ name: "createElement", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" }, { name: "appendChild", url: "https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild" }] },
            ],
        },
        {
            title: "Asynchronous JavaScript (Promises, async/await)",
            points: [
                { text: "Understand the concept of asynchronous programming.", resources: [{ name: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }] },
                { text: "Use Promises to handle operations that take time to complete.", resources: [{ name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }] },
                { text: "Write cleaner asynchronous code with async/await syntax.", resources: [{ name: "async/await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" }] },
            ],
        },
    ],
  },
  {
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
    topics: [
        {
            title: "HTML5: Structuring the Web",
            points: [
                { text: "Learn the basic structure of an HTML document.", resources: [{ name: "HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
                { text: "Use semantic tags like <header>, <nav>, <main>, and <footer>.", resources: [{ name: "Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning" }] },
                { text: "Create forms with input fields, labels, and buttons.", resources: [{ name: "HTML Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" }] },
            ],
        },
        {
            title: "CSS3: Styling and Layouts",
            points: [
                { text: "Apply styles to HTML elements using CSS selectors.", resources: [{ name: "CSS Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" }] },
                { text: "Understand the box model (margin, border, padding, content).", resources: [{ name: "The Box Model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" }] },
                { text: "Style text with properties for font, color, and spacing.", resources: [{ name: "Styling text", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" }] },
            ],
        },
        {
            title: "Responsive Design with Flexbox and Grid",
            points: [
                { text: "Build layouts that adapt to different screen sizes.", resources: [{ name: "Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }] },
                { text: "Use Flexbox for one-dimensional layouts (rows or columns).", resources: [{ name: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }] },
                { text: "Use CSS Grid for complex two-dimensional layouts.", resources: [{ name: "CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" }] },
            ],
        },
        {
            title: "Introduction to React",
            points: [
                { text: "Understand the component-based architecture of React.", resources: [{ name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }] },
                { text: "Set up a new React project using tools like Create React App.", resources: [{ name: "Start a New React Project", url: "https://react.dev/learn/start-a-new-react-project" }] },
                { text: "Learn JSX syntax to write HTML-like code in JavaScript.", resources: [{ name: "Writing Markup with JSX", url: "https://react.dev/learn/writing-markup-with-jsx" }] },
            ],
        },
        {
            title: "Components, Props, and State",
            points: [
                { text: "Create reusable UI components.", resources: [{ name: "Your First Component", url: "https://react.dev/learn/your-first-component" }] },
                { text: "Pass data down to child components using props.", resources: [{ name: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component" }] },
                { text: "Manage component-specific data with the useState hook.", resources: [{ name: "State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" }] },
            ],
        },
        {
            title: "React Hooks",
            points: [
                { text: "Use the useEffect hook to handle side effects like data fetching.", resources: [{ name: "useEffect", url: "https://react.dev/reference/react/useEffect" }] },
                { text: "Manage global state with the useContext hook.", resources: [{ name: "useContext", url: "https://react.dev/reference/react/useContext" }] },
                { text: "Learn about other essential hooks like useRef and useReducer.", resources: [{ name: "useRef", url: "https://react.dev/reference/react/useRef" }, { name: "useReducer", url: "https://react.dev/reference/react/useReducer" }] },
            ],
        },
        {
            title: "Building a Simple Web App",
            points: [
                { text: "Plan the structure and features of your application.", resources: [] },
                { text: "Combine components to build a complete user interface.", resources: [] },
                { text: "Fetch data from a public API and display it in your app.", resources: [{ name: "Fetching data in React", url: "https://www.robinwieruch.de/react-fetching-data/" }] },
            ],
        },
    ],
  },
  {
    title: "Full Stack Web Development",
    description: "Become a full-stack developer by mastering both front-end and back-end technologies.",
    topics: [
      {
        title: "Frontend Frameworks (React, Next.js)",
        points: [
            { text: "Build complex user interfaces with React.", resources: [{ name: "React Docs", url: "https://react.dev/" }] },
            { text: "Learn Next.js for features like server-side rendering and routing.", resources: [{ name: "Next.js Docs", url: "https://nextjs.org/docs" }] },
            { text: "Manage application state with tools like Redux or Zustand.", resources: [{ name: "Zustand", url: "https://zustand-demo.pmnd.rs/" }, { name: "Redux", url: "https://redux.js.org/" }] },
        ],
      },
      {
        title: "Backend Development (Node.js, Express)",
        points: [
            { text: "Create a server using Node.js.", resources: [{ name: "Node.js Intro", url: "https://nodejs.org/en/about" }] },
            { text: "Build a RESTful API with the Express framework.", resources: [{ name: "Express.js", url: "https://expressjs.com/" }] },
            { text: "Handle HTTP requests and responses.", resources: [{ name: "HTTP Requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }] },
        ],
      },
      {
        title: "Databases (SQL, NoSQL)",
        points: [
            { text: "Understand the differences between SQL and NoSQL databases.", resources: [{ name: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" }] },
            { text: "Learn basic SQL commands for relational databases (e.g., PostgreSQL).", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }] },
            { text: "Work with a NoSQL database like MongoDB.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }] },
        ],
      },
      {
        title: "APIs and RESTful services",
        points: [
            { text: "Design and build robust APIs following REST principles.", resources: [{ name: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" }] },
            { text: "Understand HTTP methods (GET, POST, PUT, DELETE).", resources: [{ name: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" }] },
            { text: "Create endpoints for your frontend to consume.", resources: [] },
        ],
      },
      {
        title: "Authentication and Authorization",
        points: [
            { text: "Implement user login and registration systems.", resources: [{ name: "Authentication Guide", url: "https://supertokens.com/blog/the-best-way-to-secure-your-website-with-http-only-cookies" }] },
            { text: "Secure your API using JSON Web Tokens (JWT).", resources: [{ name: "JWT", url: "https://jwt.io/" }] },
            { text: "Create protected routes that require authentication.", resources: [] },
        ],
      },
      {
        title: "Deployment and Hosting",
        points: [
            { text: "Deploy your frontend application to platforms like Vercel or Netlify.", resources: [{ name: "Vercel", url: "https://vercel.com/" }, { name: "Netlify", url: "https://www.netlify.com/" }] },
            { text: "Host your backend server on a cloud provider like Heroku or AWS.", resources: [{ name: "Heroku", url: "https://www.heroku.com/" }, { name: "AWS", url: "https://aws.amazon.com/" }] },
            { text: "Set up a production database.", resources: [] },
        ],
      },
      {
        title: "Version Control with Git",
        points: [
            { text: "Track changes in your codebase using Git.", resources: [{ name: "Git Introduction", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }] },
            { text: "Collaborate with others using GitHub or GitLab.", resources: [{ name: "GitHub", url: "https://github.com/" }, { name: "GitLab", url: "https://about.gitlab.com/" }] },
            { text: "Learn essential Git commands like commit, push, pull, and branch.", resources: [{ name: "Basic Git commands", url: "https://www.atlassian.com/git/tutorials/setting-up-a-repository" }] },
        ],
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Build applications for iOS and Android using modern cross-platform frameworks.",
    topics: [
      {
        title: "Introduction to Mobile Development",
        points: [
            { text: "Compare native development (Swift/Kotlin) with cross-platform (React Native/Flutter).", resources: [{ name: "Native vs Cross-Platform", url: "https://www.geeksforgeeks.org/native-vs-cross-platform-app-development/" }] },
            { text: "Understand the mobile app ecosystem.", resources: [] },
            { text: "Choose the right technology stack for your project.", resources: [] },
        ],
      },
      {
        title: "React Native or Flutter Fundamentals",
        points: [
            { text: "Set up your development environment for your chosen framework.", resources: [{ name: "React Native Setup", url: "https://reactnative.dev/docs/environment-setup" }, { name: "Flutter Setup", url: "https://docs.flutter.dev/get-started/install" }] },
            { text: "Build layouts and user interfaces with pre-built components.", resources: [{ name: "React Native Components", url: "https://reactnative.dev/docs/components-and-apis" }, { name: "Flutter Widgets", url: "https://docs.flutter.dev/ui" }] },
            { text: "Handle user input and touch gestures.", resources: [{ name: "React Native Gestures", url: "https://reactnative.dev/docs/handling-touches" }, { name: "Flutter Gestures", url: "https://docs.flutter.dev/development/ui/advanced/gestures" }] },
        ],
      },
      {
        title: "State Management",
        points: [
            { text: "Learn how to manage the state of your application.", resources: [{ name: "React State", url: "https://react.dev/learn/managing-state" }, { name: "Flutter State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" }] },
            { text: "Use state management libraries like Redux, MobX, or Riverpod.", resources: [{ name: "Redux", url: "https://redux.js.org/" }, { name: "Riverpod", url: "https://riverpod.dev/" }] },
            { text: "Keep your UI in sync with your application data.", resources: [] },
        ],
      },
      {
        title: "Navigation",
        points: [
            { text: "Implement navigation between different screens in your app.", resources: [{ name: "React Navigation", url: "https://reactnavigation.org/" }, { name: "Flutter Navigation", url: "https://docs.flutter.dev/ui/navigation" }] },
            { text: "Use stack, tab, and drawer navigators to create user-friendly flows.", resources: [] },
            { text: "Pass data between screens.", resources: [] },
        ],
      },
      {
        title: "Working with APIs",
        points: [
            { text: "Fetch data from a backend server using HTTP requests.", resources: [{ name: "React Native Networking", url: "https://reactnative.dev/docs/network" }, { name: "Flutter Networking", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" }] },
            { text: "Handle API responses and display the data in your app.", resources: [] },
            { text: "Manage loading and error states.", resources: [] },
        ],
      },
      {
        title: "Push Notifications",
        points: [
            { text: "Implement push notifications to engage users.", resources: [] },
            { text: "Use services like Firebase Cloud Messaging (FCM).", resources: [{ name: "Firebase Cloud Messaging", url: "https://firebase.google.com/docs/cloud-messaging" }] },
            { text: "Handle incoming notifications when the app is in different states.", resources: [] },
        ],
      },
      {
        title: "Publishing to App Stores",
        points: [
            { text: "Prepare your app for release.", resources: [{ name: "React Native Publishing", url: "https://reactnative.dev/docs/publishing-to-app-store" }, { name: "Flutter Publishing", url: "https://docs.flutter.dev/deployment/android" }] },
            { text: "Follow the guidelines for the Apple App Store and Google Play Store.", resources: [{ name: "App Store Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" }, { name: "Play Store Policies", url: "https://play.google.com/about/developer-distribution-agreement.html" }] },
            { text: "Build and submit your app for review.", resources: [] },
        ],
      },
    ],
  },
  {
    title: "DevOps Engineer",
    description: "Learn the practices and tools to automate and streamline the software development lifecycle.",
    topics: [
      {
        title: "CI/CD Pipelines (Jenkins, GitHub Actions)",
        points: [
            { text: "Understand the principles of Continuous Integration and Continuous Delivery.", resources: [{ name: "What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }] },
            { text: "Automate the build, test, and deployment processes.", resources: [] },
            { text: "Create pipelines using tools like Jenkins or GitHub Actions.", resources: [{ name: "Jenkins", url: "https://www.jenkins.io/" }, { name: "GitHub Actions", url: "https://github.com/features/actions" }] },
        ],
      },
      {
        title: "Infrastructure as Code (Terraform, Ansible)",
        points: [
            { text: "Manage your infrastructure using code.", resources: [{ name: "What is IaC?", url: "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac" }] },
            { text: "Use Terraform to provision cloud resources (servers, databases, etc.).", resources: [{ name: "Terraform", url: "https://www.terraform.io/" }] },
            { text: "Use Ansible for configuration management and automation.", resources: [{ name: "Ansible", url: "https://www.ansible.com/" }] },
        ],
      },
      {
        title: "Containerization (Docker, Kubernetes)",
        points: [
            { text: "Package applications into lightweight, portable containers with Docker.", resources: [{ name: "Docker", url: "https://www.docker.com/" }] },
            { text: "Orchestrate and manage containers at scale with Kubernetes.", resources: [{ name: "Kubernetes", url: "https://kubernetes.io/" }] },
            { text: "Understand container networking and storage.", resources: [] },
        ],
      },
      {
        title: "Cloud Platforms (AWS, GCP, Azure)",
        points: [
            { text: "Gain expertise in a major cloud provider.", resources: [{ name: "AWS", url: "https://aws.amazon.com/" }, { name: "GCP", url: "https://cloud.google.com/" }, { name: "Azure", url: "https://azure.microsoft.com/" }] },
            { text: "Learn about core services for compute, storage, networking, and databases.", resources: [] },
            { text: "Understand cloud security and cost management.", resources: [] },
        ],
      },
      {
        title: "Monitoring and Logging",
        points: [
            { text: "Monitor the health and performance of your systems.", resources: [] },
            { text: "Use tools like Prometheus for metrics and Grafana for visualization.", resources: [{ name: "Prometheus", url: "https://prometheus.io/" }, { name: "Grafana", url: "https://grafana.com/" }] },
            { text: "Centralize logs with the ELK Stack (Elasticsearch, Logstash, Kibana).", resources: [{ name: "ELK Stack", url: "https://www.elastic.co/what-is/elk-stack" }] },
        ],
      },
      {
        title: "Scripting (Bash, Python)",
        points: [
            { text: "Automate repetitive tasks using scripts.", resources: [] },
            { text: "Write Bash scripts for system administration.", resources: [{ name: "Bash Scripting", url: "https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" }] },
            { text: "Use Python for more complex automation and scripting needs.", resources: [{ name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }] },
        ],
      },
      {
        title: "Networking Fundamentals",
        points: [
            { text: "Understand core networking concepts (TCP/IP, DNS, HTTP/S).", resources: [{ name: "Computer Networking Tutorial", url: "https://www.geeksforgeeks.org/computer-network-tutorial/" }] },
            { text: "Configure virtual private clouds (VPCs) and subnets.", resources: [{ name: "VPC", url: "https://aws.amazon.com/vpc/" }] },
            { text: "Secure your network with firewalls and security groups.", resources: [] },
        ],
      },
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
                        <ul className="list-disc pl-5 space-y-4">
                            {topic.points.map((point, i) => (
                                <li key={i}>
                                    <span>{point.text}</span>
                                    {point.resources && point.resources.length > 0 && (
                                        <div className="mt-2 space-x-4">
                                            {point.resources.map((resource, j) => (
                                                <a href={resource.url} key={j} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                                                    <Link className="h-3 w-3 shrink-0" />
                                                    {resource.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
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
