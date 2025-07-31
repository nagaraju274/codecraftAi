
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, ChevronRight } from "lucide-react";

const learningPaths = [
  {
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    topics: [
      {
        title: "Introduction",
        points: [
            { text: "Explore the origins of Python, its evolution since the late 1980s, and understand its design philosophy emphasizing code readability and simplicity. Discover key features like dynamic typing, automatic memory management, and its extensive standard library.", resources: [{ name: "Python History", url: "https://en.wikipedia.org/wiki/History_of_Python" }] },
            { text: "Delve into the reasons for Python's widespread adoption, including its versatility in web development, data science, AI, and automation. Learn about its large and supportive community.", resources: [{ name: "Why Python?", url: "https://www.python.org/doc/essays/blurb/" }] },
            { text: "Get everything you need to start coding in Python on your computer. This includes installing the Python interpreter and setting up a code editor like VS Code with helpful extensions.", resources: [{ name: "Download Python", url: "https://www.python.org/downloads/" }, { name: "VS Code Setup", url: "https://code.visualstudio.com/docs/python/python-tutorial" }] },
        ],
      },
      {
        title: "Python Fundamentals",
        points: [
            { text: "Understand how to store and manage different kinds of information. You'll learn about fundamental data types such as integers for whole numbers, floats for decimal numbers, strings for text, and booleans for true/false values.", resources: [{ name: "Data Types", url: "https://www.w3schools.com/python/python_datatypes.asp" }] },
            { text: "Learn to make your programs interactive by getting input from the user and displaying information back to them in the console.", resources: [{ name: "Input and Output", url: "https://www.geeksforgeeks.org/taking-input-in-python/" }] },
            { text: "Master the basic building blocks of Python expressions. This includes arithmetic operators (+, -, *, /), string concatenation, and comparison operators (==, !=, <, >).", resources: [{ name: "Operators", url: "https://www.w3schools.com/python/python_operators.asp" }] },
        ],
      },
      {
        title: "Python Flow Control",
        points: [
            { text: "Learn how to make decisions in your code. Use 'if', 'elif' (else if), and 'else' statements to execute different blocks of code based on specific conditions.", resources: [{ name: "If...Else", url: "https://www.w3schools.com/python/python_conditions.asp" }] },
            { text: "Discover how to perform repetitive tasks efficiently. You'll learn about 'for' loops, which are great for iterating over a sequence of items, and 'while' loops, which continue as long as a condition is true.", resources: [{ name: "For Loops", url: "https://www.w3schools.com/python/python_for_loops.asp" }, { name: "While Loops", url: "https://www.w3schools.com/python/python_while_loops.asp" }] },
            { text: "Gain more control over your loops. The 'break' statement allows you to exit a loop early, while 'continue' lets you skip the current iteration and move to the next.", resources: [{ name: "Break and Continue", url: "https://www.w3schools.com/python/python_for_loops.asp" }] },
        ],
      },
      {
        title: "Python Data Types",
        points: [
            { text: "Learn to use lists to store collections of items that can be changed (mutable). You'll practice adding, removing, and accessing elements in a list.", resources: [{ name: "Lists", url: "https://www.w3schools.com/python/python_lists.asp" }] },
            { text: "Understand tuples, which are similar to lists but cannot be changed (immutable). They are useful for storing data that should not be modified.", resources: [{ name: "Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" }] },
            { text: "Explore dictionaries for storing data in key-value pairs, allowing for fast lookups. Also, learn about sets for storing unique elements and performing mathematical set operations.", resources: [{ name: "Dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" }, { name: "Sets", url: "https://www.w3schools.com/python/python_sets.asp" }] },
        ],
      },
      {
        title: "Python Functions",
        points: [
            { text: "Learn to write reusable blocks of code called functions. This helps in organizing your code and making it more modular and readable.", resources: [{ name: "Functions", url: "https://www.w3schools.com/python/python_functions.asp" }] },
            { text: "Understand how to pass information into functions using arguments and how to get results back using return values.", resources: [{ name: "Function Arguments", url: "https://www.w3schools.com/python/python_functions.asp#Arguments" }] },
            { text: "Grasp the concept of variable scope, which determines where variables can be accessed. Also, learn about lambda functions for creating small, anonymous functions.", resources: [{ name: "Scope", url: "https://www.w3schools.com/python/python_scope.asp" }, { name: "Lambda", url: "https://www.w3schools.com/python/python_lambda.asp" }] },
        ],
      },
      {
        title: "Python Files",
        points: [
            { text: "Learn how to open and read data from text files, allowing your programs to work with external data sources.", resources: [{ name: "Read Files", url: "https://www.w3schools.com/python/python_file_read.asp" }] },
            { text: "Discover how to write new data to files or append content to existing ones, enabling you to save program output and create logs.", resources: [{ name: "Write/Create Files", url: "https://www.w3schools.com/python/python_file_write.asp" }] },
            { text: "Understand the different modes for file handling (read, write, append) and learn best practices, such as using the 'with' statement to ensure files are closed properly.", resources: [{ name: "File Handling", url: "https://www.w3schools.com/python/python_file_handling.asp" }] },
        ],
      },
      {
        title: "Python Exception Handling",
        points: [
            { text: "Learn to anticipate and manage errors in your code using 'try...except' blocks. This prevents your program from crashing and allows you to handle issues gracefully.", resources: [{ name: "Try...Except", url: "https://www.w3schools.com/python/python_try_except.asp" }] },
            { text: "Go beyond generic error handling by catching specific types of exceptions. This allows you to respond differently to different error scenarios.", resources: [{ name: "Exception Handling", url: "https://realpython.com/python-exceptions/" }] },
            { text: "Understand the 'finally' clause, which lets you execute cleanup code (like closing a file) regardless of whether an error occurred or not.", resources: [{ name: "Finally", url: "https://www.w3schools.com/python/python_try_except.asp#Finally" }] },
        ],
      },
      {
        title: "Python Object and Class",
        points: [
            { text: "Get an introduction to the core principles of Object-Oriented Programming (OOP), a powerful paradigm for structuring your code.", resources: [{ name: "Python OOP", url: "https://www.w3schools.com/python/python_oop.asp" }] },
            { text: "Learn how to define your own custom data types using classes and how to create instances of those classes, called objects.", resources: [{ name: "Classes/Objects", url: "https://www.w3schools.com/python/python_classes.asp" }] },
            { text: "Explore advanced OOP concepts like inheritance (creating new classes from existing ones), encapsulation (bundling data and methods), and polymorphism (using a single interface for different data types).", resources: [{ name: "Inheritance", url: "https://www.w3schools.com/python/python_inheritance.asp" }] },
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
                { text: "Grasp the essential role JavaScript plays in creating interactive and dynamic web pages, making the modern web possible.", resources: [{ name: "What is JavaScript?", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" }] },
                { text: "Understand how JavaScript code is executed by the browser's engine and how it interacts with HTML and CSS.", resources: [{ name: "How JavaScript works", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" }] },
                { text: "Get hands-on by writing your first line of JavaScript and learn how to use the browser's developer console for debugging and testing.", resources: [{ name: "Hello World", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Hello_world" }] },
            ],
        },
        {
            title: "Variables and Data Types",
            points: [
                { text: "Learn the differences between `var`, `let`, and `const` and when to use each for declaring variables in your code.", resources: [{ name: "Variables", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" }] },
                { text: "Explore the fundamental data types in JavaScript, including strings, numbers, booleans, and the special values null and undefined.", resources: [{ name: "Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" }] },
                { text: "Master working with arrays, which are special variables that can hold more than one value at a time.", resources: [{ name: "Arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }] },
            ],
        },
        {
            title: "Operators and Expressions",
            points: [
                { text: "Perform mathematical calculations in your code using arithmetic operators like `+`, `-`, `*`, and `/`.", resources: [{ name: "Arithmetic Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators" }] },
                { text: "Learn how to assign values, compare them, and use logical operators (`&&`, `||`, `!`) to create conditions in your code.", resources: [{ name: "Comparison and Logical Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators" }] },
                { text: "Combine variables, values, and operators to create expressions that evaluate to a single value, forming the building blocks of your program's logic.", resources: [] },
            ],
        },
        {
            title: "Control Flow (If/Else, Loops)",
            points: [
                { text: "Use `if...else` statements to control the flow of your program and execute different code blocks based on conditions.", resources: [{ name: "if...else", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" }] },
                { text: "Learn to use `for` and `while` loops to repeat actions, saving you from writing the same code over and over.", resources: [{ name: "for loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" }, { name: "while loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" }] },
                { text: "Discover efficient ways to loop through arrays and other data structures to process each item individually.", resources: [{ name: "Iterating over arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" }] },
            ],
        },
        {
            title: "Functions",
            points: [
                { text: "Define and call functions to encapsulate reusable pieces of code, making your programs more organized and maintainable.", resources: [{ name: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }] },
                { text: "Learn the modern ES6 arrow function syntax as well as traditional function declarations and expressions.", resources: [{ name: "Arrow functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" }] },
                { text: "Understand how to pass data into functions via parameters and how to get data out using the `return` statement.", resources: [] },
            ],
        },
        {
            title: "Objects and Arrays",
            points: [
                { text: "Learn to use objects to group related data and functions together, representing real-world entities in your code.", resources: [{ name: "Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" }] },
                { text: "Access and modify the properties of an object using both dot notation (`.`) and bracket notation (`[]`).", resources: [{ name: "Property accessors", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors" }] },
                { text: "Explore powerful built-in methods for arrays, such as `push`, `pop`, `forEach`, and `map`, to manipulate and transform data.", resources: [{ name: "Array methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods" }] },
            ],
        },
        {
            title: "DOM Manipulation",
            points: [
                { text: "Learn how to select and target specific HTML elements on your page using various methods like `querySelector` and `getElementById`.", resources: [{ name: "Introduction to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }] },
                { text: "Dynamically change the text content, CSS styles, and HTML attributes of elements in response to user actions.", resources: [{ name: "Modifying the document", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" }] },
                { text: "Create new HTML elements from scratch using JavaScript and add them to the webpage, building dynamic interfaces.", resources: [{ name: "createElement", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" }, { name: "appendChild", url: "https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild" }] },
            ],
        },
        {
            title: "Asynchronous JavaScript (Promises, async/await)",
            points: [
                { text: "Understand why asynchronous programming is crucial for tasks like fetching data from a server without freezing the user interface.", resources: [{ name: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }] },
                { text: "Learn to use Promises to manage asynchronous operations and handle their success or failure gracefully.", resources: [{ name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }] },
                { text: "Master the modern `async/await` syntax, which allows you to write asynchronous code that looks and reads like synchronous code.", resources: [{ name: "async/await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" }] },
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
          { text: "Learn the fundamental boilerplate required for every HTML page, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags.", resources: [{ name: "HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
          { text: "Use semantic tags like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` to give your web content meaning and improve SEO.", resources: [{ name: "Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning" }] },
          { text: "Build interactive forms to collect user data using various input types, labels for accessibility, and buttons for submission.", resources: [{ name: "HTML Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" }] },
        ],
      },
      {
        title: "CSS3: Styling and Layouts",
        points: [
          { text: "Target HTML elements with CSS using a variety of selectors, including class, ID, attribute, and pseudo-class selectors.", resources: [{ name: "CSS Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" }] },
          { text: "Grasp the core concept of the CSS box model, understanding how margin, border, padding, and content work together to size and space elements.", resources: [{ name: "The Box Model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" }] },
          { text: "Learn to control the appearance of text on your website, including font families, sizes, colors, and spacing.", resources: [{ name: "Styling text", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" }] },
        ],
      },
      {
        title: "Responsive Design with Flexbox and Grid",
        points: [
          { text: "Learn the principles of responsive design and use media queries to create websites that look great on desktops, tablets, and mobile devices.", resources: [{ name: "Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }] },
          { text: "Master Flexbox for creating efficient, one-dimensional layouts. Align and distribute items in a row or a column with ease.", resources: [{ name: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }] },
          { text: "Use CSS Grid to build complex, two-dimensional layouts, allowing you to control the position of items in both rows and columns simultaneously.", resources: [{ name: "CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" }] },
        ],
      },
      {
        title: "Introduction to React",
        points: [
          { text: "Understand the core philosophy of React: building user interfaces by breaking them down into small, reusable pieces called components.", resources: [{ name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }] },
          { text: "Get your development environment ready for React development. Learn about modern build tools like Vite and the classic Create React App.", resources: [{ name: "Start a New React Project", url: "https://react.dev/learn/start-a-new-react-project" }] },
          { text: "Learn JSX, a syntax extension for JavaScript that allows you to write HTML-like markup inside your JavaScript code.", resources: [{ name: "Writing Markup with JSX", url: "https://react.dev/learn/writing-markup-with-jsx" }] },
        ],
      },
      {
        title: "Components, Props, and State",
        points: [
          { text: "Learn to create and compose your own React components, which are the fundamental building blocks of a React application.", resources: [{ name: "Your First Component", url: "https://react.dev/learn/your-first-component" }] },
          { text: "Understand how to pass data from a parent component to a child component using 'props', making your components dynamic and reusable.", resources: [{ name: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component" }] },
          { text: "Manage data that changes over time within a component using the `useState` hook. Learn how state triggers re-renders to update the UI.", resources: [{ name: "State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" }] },
        ],
      },
      {
        title: "React Hooks",
        points: [
          { text: "Use the `useEffect` hook to perform side effects in your components, such as fetching data from an API or setting up subscriptions.", resources: [{ name: "useEffect", url: "https://react.dev/reference/react/useEffect" }] },
          { text: "Manage application-wide state that needs to be shared between many components without prop drilling by using the `useContext` hook.", resources: [{ name: "useContext", url: "https://react.dev/reference/react/useContext" }] },
          { text: "Explore other essential hooks like `useRef` for accessing DOM elements directly and `useReducer` for managing complex state logic.", resources: [{ name: "useRef", url: "https://react.dev/reference/react/useRef" }, { name: "useReducer", url: "https://react.dev/reference/react/useReducer" }] },
        ],
      },
      {
        title: "Building a Simple Web App",
        points: [
          { text: "Before writing code, learn to plan your application by breaking down the UI into a component hierarchy.", resources: [] },
          { text: "Combine your individual components to build out the full user interface of your application, from simple buttons to complex pages.", resources: [] },
          { text: "Learn how to make HTTP requests from your React app to a public API to fetch and display dynamic data.", resources: [{ name: "Fetching data in React", url: "https://www.robinwieruch.de/react-fetching-data/" }] },
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
            { text: "Build dynamic and interactive user interfaces using the component-based architecture of React.", resources: [{ name: "React Docs", url: "https://react.dev/" }] },
            { text: "Learn Next.js, a powerful React framework that adds features like server-side rendering, static site generation, and file-based routing.", resources: [{ name: "Next.js Docs", url: "https://nextjs.org/docs" }] },
            { text: "Explore state management solutions like Zustand (simple) or Redux (for large-scale apps) to handle complex application state.", resources: [{ name: "Zustand", url: "https://zustand-demo.pmnd.rs/" }, { name: "Redux", url: "https://redux.js.org/" }] },
        ],
      },
      {
        title: "Backend Development (Node.js, Express)",
        points: [
            { text: "Use the Node.js runtime environment to build fast and scalable server-side applications with JavaScript.", resources: [{ name: "Node.js Intro", url: "https://nodejs.org/en/about" }] },
            { text: "Build robust and flexible RESTful APIs using Express, a minimal and unopinionated web framework for Node.js.", resources: [{ name: "Express.js", url: "https://expressjs.com/" }] },
            { text: "Understand the request/response cycle and how to handle different HTTP methods (GET, POST, PUT, DELETE) on your server.", resources: [{ name: "HTTP Requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }] },
        ],
      },
      {
        title: "Databases (SQL, NoSQL)",
        points: [
            { text: "Learn the fundamental differences between relational (SQL) and non-relational (NoSQL) databases and when to choose one over the other.", resources: [{ name: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" }] },
            { text: "Get hands-on with a SQL database like PostgreSQL, learning essential commands for creating tables, querying data, and establishing relationships.", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }] },
            { text: "Explore a popular NoSQL database like MongoDB, understanding its document-based data model and flexible schema.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }] },
        ],
      },
      {
        title: "APIs and RESTful services",
        points: [
            { text: "Learn the principles of REST (Representational State Transfer) to design clean, predictable, and scalable APIs.", resources: [{ name: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/" }] },
            { text: "Master the standard HTTP verbs (GET, POST, PUT, DELETE) and status codes to create a well-defined API.", resources: [{ name: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" }] },
            { text: "Create the API endpoints (routes) that your frontend application will communicate with to fetch, create, update, and delete data.", resources: [] },
        ],
      },
      {
        title: "Authentication and Authorization",
        points: [
            { text: "Implement secure user registration and login functionality, including password hashing and session management.", resources: [{ name: "Authentication Guide", url: "https://supertokens.com/blog/the-best-way-to-secure-your-website-with-http-only-cookies" }] },
            { text: "Use JSON Web Tokens (JWT) as a stateless, secure way to authenticate users and protect your API endpoints.", resources: [{ name: "JWT", url: "https://jwt.io/" }] },
            { text: "Create middleware to protect specific routes in your application, ensuring that only authenticated and authorized users can access them.", resources: [] },
        ],
      },
      {
        title: "Deployment and Hosting",
        points: [
            { text: "Deploy your frontend React/Next.js application to a global CDN for optimal performance using platforms like Vercel or Netlify.", resources: [{ name: "Vercel", url: "https://vercel.com/" }, { name: "Netlify", url: "https://www.netlify.com/" }] },
            { text: "Host your Node.js backend server on a cloud platform like Heroku, AWS (EC2, Lambda), or Google Cloud Run.", resources: [{ name: "Heroku", url: "https://www.heroku.com/" }, { name: "AWS", url: "https://aws.amazon.com/" }] },
            { text: "Set up and manage a production-ready database using cloud services like Amazon RDS, MongoDB Atlas, or Heroku Postgres.", resources: [] },
        ],
      },
      {
        title: "Version Control with Git",
        points: [
            { text: "Learn the fundamentals of Git, a distributed version control system, to track changes in your code over time.", resources: [{ name: "Git Introduction", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }] },
            { text: "Use platforms like GitHub or GitLab to host your Git repositories, collaborate with other developers, and manage projects.", resources: [{ name: "GitHub", url: "https://github.com/" }, { name: "GitLab", url: "https://about.gitlab.com/" }] },
            { text: "Master essential Git commands like `commit`, `push`, `pull`, `branch`, and `merge` to effectively manage your codebase.", resources: [{ name: "Basic Git commands", url: "https://www.atlassian.com/git/tutorials/setting-up-a-repository" }] },
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
            { text: "Understand the pros and cons of native development (Swift for iOS, Kotlin for Android) versus cross-platform frameworks like React Native or Flutter.", resources: [{ name: "Native vs Cross-Platform", url: "https://www.geeksforgeeks.org/native-vs-cross-platform-app-development/" }] },
            { text: "Get an overview of the mobile app landscape, including app stores, design guidelines (Material Design, Human Interface Guidelines), and monetization strategies.", resources: [] },
            { text: "Learn how to evaluate project requirements to choose the most suitable technology stack for your mobile app.", resources: [] },
        ],
      },
      {
        title: "React Native or Flutter Fundamentals",
        points: [
            { text: "Install the necessary tools, SDKs, and emulators/simulators for your chosen framework (React Native or Flutter).", resources: [{ name: "React Native Setup", url: "https://reactnative.dev/docs/environment-setup" }, { name: "Flutter Setup", url: "https://docs.flutter.dev/get-started/install" }] },
            { text: "Learn the core concepts of building UIs. In React Native, you'll use components like `<View>` and `<Text>`. In Flutter, you'll work with widgets.", resources: [{ name: "React Native Components", url: "https://reactnative.dev/docs/components-and-apis" }, { name: "Flutter Widgets", url: "https://docs.flutter.dev/ui" }] },
            { text: "Implement touch controls and gestures to make your app interactive and responsive to user input.", resources: [{ name: "React Native Gestures", url: "https://reactnative.dev/docs/handling-touches" }, { name: "Flutter Gestures", url: "https://docs.flutter.dev/development/ui/advanced/gestures" }] },
        ],
      },
      {
        title: "State Management",
        points: [
            { text: "Grasp the concept of state in a mobile app and why it's crucial for building dynamic and interactive UIs.", resources: [{ name: "React State", url: "https://react.dev/learn/managing-state" }, { name: "Flutter State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" }] },
            { text: "Explore popular state management libraries like Redux or Zustand for React Native, and Riverpod or Provider for Flutter.", resources: [{ name: "Redux", url: "https://redux.js.org/" }, { name: "Riverpod", url: "https://riverpod.dev/" }] },
            { text: "Learn techniques to ensure your UI automatically updates whenever the underlying application data changes.", resources: [] },
        ],
      },
      {
        title: "Navigation",
        points: [
            { text: "Learn to manage navigation between different screens using libraries like React Navigation for React Native or Flutter's built-in Navigator.", resources: [{ name: "React Navigation", url: "https://reactnavigation.org/" }, { name: "Flutter Navigation", url: "https://docs.flutter.dev/ui/navigation" }] },
            { text: "Implement common navigation patterns like stack navigators (for sequential screens), tab navigators (for bottom tabs), and drawer navigators (for side menus).", resources: [] },
            { text: "Understand how to pass data and parameters between different screens in your application.", resources: [] },
        ],
      },
      {
        title: "Working with APIs",
        points: [
            { text: "Use libraries like `fetch` or `axios` in React Native, or `http` in Flutter, to make network requests to a backend server.", resources: [{ name: "React Native Networking", url: "https://reactnative.dev/docs/network" }, { name: "Flutter Networking", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" }] },
            { text: "Learn how to parse JSON responses from an API and display the data in your app's UI.", resources: [] },
            { text: "Implement loading indicators and error messages to provide a smooth user experience while fetching data.", resources: [] },
        ],
      },
      {
        title: "Push Notifications",
        points: [
            { text: "Learn the importance of push notifications for user engagement and retention.", resources: [] },
            { text: "Integrate services like Firebase Cloud Messaging (FCM) to send and receive push notifications on both iOS and Android.", resources: [{ name: "Firebase Cloud Messaging", url: "https://firebase.google.com/docs/cloud-messaging" }] },
            { text: "Learn to handle user interactions with notifications, whether the app is in the foreground, background, or closed.", resources: [] },
        ],
      },
      {
        title: "Publishing to App Stores",
        points: [
            { text: "Generate the necessary build artifacts (APK/AAB for Android, IPA for iOS) and prepare app store listings with screenshots and descriptions.", resources: [{ name: "React Native Publishing", url: "https://reactnative.dev/docs/publishing-to-app-store" }, { name: "Flutter Publishing", url: "https://docs.flutter.dev/deployment/android" }] },
            { text: "Familiarize yourself with the specific review guidelines and policies for both the Apple App Store and Google Play Store to avoid rejection.", resources: [{ name: "App Store Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" }, { name: "Play Store Policies", url: "https://play.google.com/about/developer-distribution-agreement.html" }] },
            { text: "Go through the process of creating a developer account, submitting your app for review, and managing its release.", resources: [] },
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
            { text: "Learn the core DevOps principles of Continuous Integration (CI) and Continuous Delivery/Deployment (CD) to improve development velocity and quality.", resources: [{ name: "What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }] },
            { text: "Create automated workflows that build, test, and deploy your applications whenever code is pushed to a repository.", resources: [] },
            { text: "Get hands-on experience with popular CI/CD tools like the versatile GitHub Actions or the industry-standard Jenkins.", resources: [{ name: "Jenkins", url: "https://www.jenkins.io/" }, { name: "GitHub Actions", url: "https://github.com/features/actions" }] },
        ],
      },
      {
        title: "Infrastructure as Code (Terraform, Ansible)",
        points: [
            { text: "Understand the benefits of Infrastructure as Code (IaC) for managing and provisioning infrastructure through machine-readable definition files.", resources: [{ name: "What is IaC?", url: "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac" }] },
            { text: "Use Terraform to declaratively define and provision cloud and on-prem resources across multiple providers (AWS, GCP, Azure).", resources: [{ name: "Terraform", url: "https://www.terraform.io/" }] },
            { text: "Use Ansible for configuration management, application deployment, and task automation, using YAML-based playbooks.", resources: [{ name: "Ansible", url: "https://www.ansible.com/" }] },
        ],
      },
      {
        title: "Containerization (Docker, Kubernetes)",
        points: [
            { text: "Learn to use Docker to package applications and their dependencies into standardized, portable units called containers.", resources: [{ name: "Docker", url: "https://www.docker.com/" }] },
            { text: "Master Kubernetes (K8s) to automate the deployment, scaling, and management of containerized applications at a massive scale.", resources: [{ name: "Kubernetes", url: "https://kubernetes.io/" }] },
            { text: "Understand how containers communicate with each other (networking) and how they handle persistent data (storage) in a Kubernetes environment.", resources: [] },
        ],
      },
      {
        title: "Cloud Platforms (AWS, GCP, Azure)",
        points: [
            { text: "Develop proficiency in one of the major cloud providers: Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.", resources: [{ name: "AWS", url: "https://aws.amazon.com/" }, { name: "GCP", url: "https://cloud.google.com/" }, { name: "Azure", url: "https://azure.microsoft.com/" }] },
            { text: "Learn about essential cloud services for compute (like EC2, VMs), storage (like S3, Blob Storage), networking, and databases.", resources: [] },
            { text: "Grasp the fundamentals of cloud security best practices, identity and access management (IAM), and strategies for managing cloud costs effectively.", resources: [] },
        ],
      },
      {
        title: "Monitoring and Logging",
        points: [
            { text: "Learn the importance of monitoring system health, performance, and application metrics to ensure reliability and identify issues proactively.", resources: [] },
            { text: "Use Prometheus for time-series data monitoring and alerting, and Grafana to create powerful, interactive dashboards for visualization.", resources: [{ name: "Prometheus", url: "https://prometheus.io/" }, { name: "Grafana", url: "https://grafana.com/" }] },
            { text: "Implement a centralized logging solution using the ELK Stack (Elasticsearch, Logstash, Kibana) to collect, process, and search logs from all your services.", resources: [{ name: "ELK Stack", url: "https://www.elastic.co/what-is/elk-stack" }] },
        ],
      },
      {
        title: "Scripting (Bash, Python)",
        points: [
            { text: "Develop scripting skills to automate routine administrative tasks, deployments, and other repetitive processes.", resources: [] },
            { text: "Learn Bash scripting for powerful command-line automation and system administration tasks on Linux-based systems.", resources: [{ name: "Bash Scripting", url: "https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" }] },
            { text: "Use Python for more advanced scripting, interacting with APIs, and building complex automation tools.", resources: [{ name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }] },
        ],
      },
      {
        title: "Networking Fundamentals",
        points: [
            { text: "Understand the basics of the TCP/IP protocol suite, how DNS resolution works, and the difference between HTTP and HTTPS.", resources: [{ name: "Computer Networking Tutorial", url: "https://www.geeksforgeeks.org/computer-network-tutorial/" }] },
            { text: "Learn to design and configure isolated network environments in the cloud using Virtual Private Clouds (VPCs) and subnets.", resources: [{ name: "VPC", url: "https://aws.amazon.com/vpc/" }] },
            { text: "Implement network security by configuring firewalls, network access control lists (ACLs), and security groups to control inbound and outbound traffic.", resources: [] },
        ],
      },
    ],
  },
  {
    title: "Front-End Developer",
    description: "Learn to build beautiful and interactive user interfaces for the web.",
    topics: [
      {
        title: "Core Web Technologies",
        points: [
            { text: "Master HTML for structuring web pages. This includes understanding tags, attributes, and the overall document structure.", resources: [{ name: "HTML Tutorial", url: "https://www.w3schools.com/html/" }, { name: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
            { text: "Learn CSS for styling web pages. This covers everything from colors and fonts to complex layouts and animations.", resources: [{ name: "CSS Tutorial", url: "https://www.w3schools.com/css/" }, { name: "MDN CSS First Steps", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" }] },
            { text: "Understand JavaScript for adding interactivity. Learn the fundamentals of the language to bring your web pages to life.", resources: [{ name: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" }, { name: "MDN JavaScript basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" }] },
        ],
      },
      {
        title: "Advanced CSS and Layout",
        points: [
            { text: "Learn modern layout techniques with Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts.", resources: [{ name: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }, { name: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }] },
            { text: "Master responsive design to ensure your websites look great on all devices, from mobile phones to desktops.", resources: [{ name: "Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }] },
            { text: "Explore CSS preprocessors like Sass or LESS to write more maintainable and powerful CSS with features like variables, nesting, and mixins.", resources: [{ name: "Sass Basics", url: "https://sass-lang.com/guide" }] },
        ],
      },
      {
        title: "JavaScript Deep Dive",
        points: [
            { text: "Grasp core JavaScript concepts like scope, closures, and the 'this' keyword to write more predictable and robust code.", resources: [{ name: "JavaScript Scope", url: "https://www.w3schools.com/js/js_scope.asp" }] },
            { text: "Learn how to manipulate the Document Object Model (DOM) to dynamically update the content and structure of your web pages.", resources: [{ name: "DOM Introduction", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }] },
            { text: "Understand asynchronous JavaScript using Promises and async/await to handle operations like API calls without blocking the main thread.", resources: [{ name: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }] },
        ],
      },
      {
        title: "Frameworks and Libraries",
        points: [
            { text: "Learn a modern front-end framework like React (the most popular), Angular, or Vue to build complex, component-based user interfaces.", resources: [{ name: "React", url: "https://reactjs.org/" }, { name: "Angular", url: "https://angular.io/" }, { name: "Vue.js", url: "https://vuejs.org/" }] },
            { text: "Explore component libraries and UI frameworks like Material-UI, Ant Design, or ShadCN UI to quickly build beautiful and consistent UIs.", resources: [{ name: "ShadCN UI", url: "https://ui.shadcn.com/" }] },
            { text: "Get comfortable with a CSS framework like Bootstrap or Tailwind CSS to streamline your styling workflow.", resources: [{ name: "Bootstrap", url: "https://getbootstrap.com/" }, { name: "Tailwind CSS", url: "https://tailwindcss.com/" }] },
        ],
      },
      {
        title: "Build Tools and Tooling",
        points: [
            { text: "Understand the role of package managers like npm or Yarn for managing project dependencies.", resources: [{ name: "npm Docs", url: "https://docs.npmjs.com/" }] },
            { text: "Learn to use build tools and bundlers like Vite or Webpack to compile, bundle, and optimize your code for production.", resources: [{ name: "Vite", url: "https://vitejs.dev/" }, { name: "Webpack", url: "https://webpack.js.org/" }] },
            { text: "Use linters like ESLint and formatters like Prettier to enforce code quality and maintain a consistent style across your projects.", resources: [{ name: "ESLint", url: "https://eslint.org/" }, { name: "Prettier", url: "https://prettier.io/" }] },
        ],
      },
      {
        title: "Web Performance and Accessibility",
        points: [
            { text: "Learn techniques for optimizing website performance, such as code splitting, lazy loading, and image optimization.", resources: [{ name: "Web Performance", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance" }] },
            { text: "Understand the importance of web accessibility (a11y) and learn how to write semantic HTML and use ARIA attributes to make your sites usable for everyone.", resources: [{ name: "Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" }] },
        ],
      },
    ],
  },
  {
    title: "Back-End Developer",
    description: "Learn to build the server-side logic and infrastructure that powers web applications.",
    topics: [
        {
            title: "Choose a Language and Framework",
            points: [
                { text: "Select a primary back-end programming language. Popular choices include Node.js (JavaScript), Python, Java, Ruby, Go, and PHP. Your choice will influence the frameworks and libraries you use.", resources: [{ name: "Back-End Developer Languages", url: "https://www.geeksforgeeks.org/best-backend-web-development-frameworks/" }] },
                { text: "Learn a corresponding framework for your chosen language to streamline development. Examples: Express for Node.js, Django or Flask for Python, Spring for Java, Ruby on Rails for Ruby.", resources: [{ name: "Express.js", url: "https://expressjs.com/" }, { name: "Django", url: "https://www.djangoproject.com/" }, { name: "Spring", url: "https://spring.io/" }] },
            ],
        },
        {
            title: "Databases",
            points: [
                { text: "Understand the fundamentals of relational databases (SQL) and learn how to model data with tables, columns, and relationships.", resources: [{ name: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }] },
                { text: "Gain practical experience with a specific SQL database like PostgreSQL or MySQL. Learn to write queries to create, read, update, and delete data (CRUD).", resources: [{ name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }] },
                { text: "Explore non-relational (NoSQL) databases like MongoDB to understand document-based data models, which are often used in modern web applications.", resources: [{ name: "MongoDB University", url: "https://learn.mongodb.com/" }] },
                { text: "Learn about Object-Relational Mapping (ORM) or Object-Document Mapping (ODM) libraries (e.g., Sequelize for Node.js, SQLAlchemy for Python) to interact with databases using your programming language.", resources: [{ name: "Sequelize", url: "https://sequelize.org/" }, { name: "SQLAlchemy", url: "https://www.sqlalchemy.org/" }] },
            ],
        },
        {
            title: "APIs (Application Programming Interfaces)",
            points: [
                { text: "Learn the principles of REST (Representational State Transfer) to design clean, scalable, and predictable APIs.", resources: [{ name: "What is REST?", url: "https://www.redhat.com/en/topics/api/what-is-rest-api" }] },
                { text: "Master the use of standard HTTP methods (GET, POST, PUT, DELETE) to represent CRUD operations and understand HTTP status codes for communicating request outcomes.", resources: [{ name: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" }] },
                { text: "Build API endpoints (routes) that your front-end application or other services can use to access and manipulate data.", resources: [] },
                { text: "Explore alternative API architectures like GraphQL, which allows clients to request exactly the data they need.", resources: [{ name: "GraphQL", url: "https://graphql.org/" }] },
            ],
        },
        {
            title: "Authentication and Security",
            points: [
                { text: "Implement secure user registration and login systems. Learn to hash and salt user passwords to protect them from breaches.", resources: [{ name: "Password Storage", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }] },
                { text: "Understand authentication strategies like session-based authentication (using cookies) and token-based authentication (using JSON Web Tokens - JWT).", resources: [{ name: "JWT Introduction", url: "https://jwt.io/introduction" }] },
                { text: "Learn how to create protected routes that require users to be authenticated and authorized to access specific resources.", resources: [] },
                { text: "Familiarize yourself with common web security vulnerabilities (like SQL injection, XSS) and how to prevent them.", resources: [{ name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }] },
            ],
        },
        {
            title: "Deployment and DevOps",
            points: [
                { text: "Learn to use containerization tools like Docker to package your application and its dependencies into a portable container.", resources: [{ name: "Docker Overview", url: "https://docs.docker.com/get-started/overview/" }] },
                { text: "Get comfortable with a cloud hosting platform like AWS (Amazon Web Services), Google Cloud Platform (GCP), or Heroku to deploy your back-end application.", resources: [{ name: "Deploying with Heroku", url: "https://devcenter.heroku.com/start" }] },
                { text: "Understand the basics of setting up a web server like Nginx or Apache to act as a reverse proxy for your application.", resources: [{ name: "Nginx Beginner's Guide", url: "https://nginx.org/en/docs/beginners_guide.html" }] },
                { text: "Learn about Continuous Integration and Continuous Deployment (CI/CD) to automate the process of testing and deploying your code.", resources: [{ name: "What is CI/CD?", url: "https://aws.amazon.com/devops/what-is-cicd/" }] },
            ],
        },
    ],
  },
  {
    title: "Database Administrator",
    description: "Learn to manage and maintain databases to ensure data is secure, accessible, and performs efficiently.",
    topics: [
      {
        title: "Database Fundamentals",
        points: [
          { text: "Understand the core concepts of relational databases, including tables, keys, and relationships, and how they differ from non-relational (NoSQL) models.", resources: [{ name: "Database Concepts", url: "https://www.tutorialspoint.com/dbms/dbms_overview.htm" }] },
          { text: "Learn data modeling techniques to design efficient and logical database structures.", resources: [{ name: "Data Modeling", url: "https://www.vertabelo.com/blog/data-modeling-basics/" }] },
          { text: "Master database normalization (1NF, 2NF, 3NF) to organize data, reduce redundancy, and improve data integrity.", resources: [{ name: "Database Normalization", url: "https://www.guru99.com/database-normalization.html" }] },
        ],
      },
      {
        title: "Proficiency in SQL",
        points: [
          { text: "Become an expert in writing complex SQL queries, including advanced joins, subqueries, and window functions.", resources: [{ name: "Advanced SQL", url: "https://www.sql-tutorial.ru/en/book" }] },
          { text: "Learn Data Definition Language (DDL) to create and manage database objects and Data Manipulation Language (DML) for data handling.", resources: [{ name: "SQL DDL and DML", url: "https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/" }] },
          { text: "Write and optimize stored procedures and triggers to automate tasks and enforce business rules at the database level.", resources: [{ name: "Stored Procedures", url: "https://www.postgresqltutorial.com/postgresql-stored-procedures/" }] },
        ],
      },
      {
        title: "Database Management Systems (DBMS)",
        points: [
          { text: "Gain deep knowledge of a major relational DBMS like PostgreSQL, MySQL, SQL Server, or Oracle, including their specific architecture and features.", resources: [{ name: "PostgreSQL", url: "https://www.postgresql.org/" }, { name: "MySQL", url: "https://www.mysql.com/" }] },
          { text: "Get familiar with a leading NoSQL database like MongoDB or Cassandra to handle unstructured data and large-scale applications.", resources: [{ name: "MongoDB", url: "https://www.mongodb.com/" }, { name: "Cassandra", url: "https://cassandra.apache.org/_/index.html" }] },
        ],
      },
      {
        title: "Backup and Recovery",
        points: [
          { text: "Design and implement robust backup strategies (full, differential, incremental) to prevent data loss.", resources: [{ name: "Backup and Recovery", url: "https://www.sqlshack.com/sql-server-backup-and-restore-strategies/" }] },
          { text: "Master database recovery techniques to restore data quickly and efficiently in case of failure.", resources: [{ name: "Recovery Models", url: "https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/recovery-models-sql-server" }] },
          { text: "Regularly test your backup and recovery procedures to ensure they are reliable and meet business requirements (RTO/RPO).", resources: [] },
        ],
      },
      {
        title: "Database Security",
        points: [
          { text: "Implement strong user authentication and access control measures to protect sensitive data.", resources: [{ name: "Database Security", url: "https://www.geeksforgeeks.org/database-security/" }] },
          { text: "Learn to manage database permissions and roles to enforce the principle of least privilege.", resources: [{ name: "Database Roles", url: "https://www.postgresql.org/docs/current/database-roles.html" }] },
          { text: "Conduct regular security audits to identify and address vulnerabilities. Learn about data encryption for data at rest and in transit.", resources: [{ name: "OWASP Database Security", url: "https://owasp.org/www-community/Database_Security_Cheat_Sheet" }] },
        ],
      },
      {
        title: "Performance Tuning and Optimization",
        points: [
          { text: "Learn how to read and interpret query execution plans to identify performance bottlenecks.", resources: [{ name: "Query Optimization", url: "https://www.red-gate.com/simple-talk/databases/sql-server/performance-sql-server/query-optimization-techniques-in-sql-server-the-basics/" }] },
          { text: "Master the art of index management—creating, using, and maintaining indexes to speed up query performance.", resources: [{ name: "Database Indexes", url: "https://www.essentialsql.com/what-is-a-database-index/" }] },
          { text: "Proactively monitor database performance using system views and specialized monitoring tools. Learn how to configure server parameters for optimal efficiency.", resources: [] },
        ],
      },
      {
        title: "Cloud Database Management",
        points: [
          { text: "Gain experience with managed cloud database services like Amazon RDS, Azure SQL Database, or Google Cloud SQL.", resources: [{ name: "Amazon RDS", url: "https://aws.amazon.com/rds/" }, { name: "Google Cloud SQL", url: "https://cloud.google.com/sql" }] },
          { text: "Understand the architecture and benefits of Database-as-a-Service (DBaaS).", resources: [{ name: "What is DBaaS?", url: "https://www.oracle.com/database/what-is-dbaas/" }] },
          { text: "Learn to manage databases in a cloud environment, focusing on scalability, high availability, and disaster recovery.", resources: [] },
        ],
      },
    ],
  },
  {
    title: "Git Version Control",
    description: "Master Git for tracking changes in your code and collaborating with others.",
    topics: [
        {
            title: "Git Basics",
            points: [
                { text: "Understand what version control is and why Git is the most popular system for it. Learn about the difference between centralized and distributed version control.", resources: [{ name: "About Version Control", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }] },
                { text: "Install Git on your operating system and perform initial configuration of your user name and email.", resources: [{ name: "Getting Started - Installing Git", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" }] },
                { text: "Create your first local repository with `git init` and learn the fundamental workflow of staging changes with `git add` and committing them with `git commit`.", resources: [{ name: "Git Basics - Getting a Git Repository", url: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository" }] },
                { text: "Use `git status` to check the state of your working directory and staging area, and `git log` to view the history of commits.", resources: [{ name: "Git Basics - Recording Changes", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" }] },
            ],
        },
        {
            title: "Branching and Merging",
            points: [
                { text: "Grasp the concept of branching, which allows you to diverge from the main line of development and work on new features or fixes in isolation.", resources: [{ name: "Git Branching - Branches in a Nutshell", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" }] },
                { text: "Learn how to create new branches with `git branch`, switch between them with `git checkout` (or the newer `git switch`), and merge changes from one branch into another with `git merge`.", resources: [{ name: "Basic Branching and Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" }] },
                { text: "Understand what merge conflicts are, why they happen, and learn the process for manually resolving them when they occur.", resources: [{ name: "Basic Merge Conflicts", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts" }] },
            ],
        },
        {
            title: "Working with Remote Repositories",
            points: [
                { text: "Learn how to connect your local repository to a remote one (like on GitHub or GitLab) using `git remote add`.", resources: [{ name: "Working with Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" }] },
                { text: "Use `git clone` to create a local copy of a remote repository on your machine.", resources: [{ name: "Cloning an Existing Repository", url: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_cloning_an_existing_repository" }] },
                { text: "Use `git push` to upload your local commits to a remote repository, and `git pull` (which is a `git fetch` followed by a `git merge`) to download and integrate changes from a remote repository.", resources: [{ name: "Pushing to Your Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_pushing_to_your_remotes" }, { name: "Fetching and Pulling", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling_from_your_remotes" }] },
            ],
        },
        {
            title: "Inspecting History and Undoing Changes",
            points: [
                { text: "Learn advanced `git log` options to view commit history in various formats, filter by author or date, and visualize the branch history.", resources: [{ name: "Viewing the Commit History", url: "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History" }] },
                { text: "Use `git diff` to see the exact changes between commits, branches, or your working directory and the staging area.", resources: [{ name: "git-diff Documentation", url: "https://git-scm.com/docs/git-diff" }] },
                { text: "Understand how to undo changes. Use `git checkout -- <file>` to discard changes in your working directory, `git reset` to unstage files or reset a branch to a previous commit, and `git revert` to create a new commit that undoes the changes of a previous one.", resources: [{ name: "Undoing Things", url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things" }] },
            ],
        },
        {
            title: "Advanced Git",
            points: [
                { text: "Learn to use `git rebase` as an alternative to merging for integrating changes, allowing you to maintain a cleaner, more linear project history.", resources: [{ name: "Git Branching - Rebasing", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing" }] },
                { text: "Use `git stash` to temporarily save changes that are not ready to be committed, so you can switch branches and work on something else.", resources: [{ name: "Git Tools - Stashing and Cleaning", url: "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning" }] },
                { text: "Learn to use `git tag` to create permanent markers for specific commits, typically used for version releases.", resources: [{ name: "Git Basics - Tagging", url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging" }] },
            ],
        },
    ],
  },
  {
    title: "SQL",
    description: "Learn the standard language for managing and querying relational databases.",
    topics: [
      {
        title: "Introduction to SQL and Databases",
        points: [
          { text: "Understand the role of SQL as the standard language for relational database management systems (RDBMS).", resources: [{ name: "What is SQL?", url: "https://www.codecademy.com/articles/what-is-sql" }] },
          { text: "Learn about the core concepts of relational databases: tables, rows (records), columns (attributes), primary keys, and foreign keys.", resources: [{ name: "Relational Database Concepts", url: "https://www.oracle.com/database/what-is-a-relational-database/" }] },
          { text: "Set up a local SQL database environment (like PostgreSQL or SQLite) or use an online SQL playground to practice your queries.", resources: [{ name: "SQL Fiddle", url: "http://sqlfiddle.com/" }, { name: "DB Fiddle", url: "https://www.db-fiddle.com/" }] },
        ],
      },
      {
        title: "Basic Queries with SELECT",
        points: [
          { text: "Master the `SELECT` statement to retrieve data from one or more columns in a table.", resources: [{ name: "SQL SELECT Statement", url: "https://www.w3schools.com/sql/sql_select.asp" }] },
          { text: "Use `WHERE` to filter records based on specific conditions, allowing you to fetch only the data you need.", resources: [{ name: "SQL WHERE Clause", url: "https://www.w3schools.com/sql/sql_where.asp" }] },
          { text: "Learn to combine filtering conditions using `AND`, `OR`, and `NOT` to create more complex and precise queries.", resources: [{ name: "SQL AND, OR and NOT Operators", url: "https://www.w3schools.com/sql/sql_and_or.asp" }] },
        ],
      },
      {
        title: "Sorting and Limiting Results",
        points: [
          { text: "Use `ORDER BY` to sort the results of your query in ascending (ASC) or descending (DESC) order based on one or more columns.", resources: [{ name: "SQL ORDER BY Keyword", url: "https://www.w3schools.com/sql/sql_orderby.asp" }] },
          { text: "Learn to use `LIMIT` (or `TOP` / `FETCH FIRST` in other SQL dialects) to restrict the number of rows returned by your query.", resources: [{ name: "SQL LIMIT Clause", url: "https://www.w3schools.com/sql/sql_top.asp" }] },
        ],
      },
      {
        title: "Aggregate Functions",
        points: [
          { text: "Understand how to use aggregate functions to perform a calculation on a set of values and return a single summary value.", resources: [{ name: "SQL Aggregate Functions", url: "https://www.datacamp.com/tutorial/sql-aggregate-functions" }] },
          { text: "Learn to use `COUNT` to count the number of rows, `SUM` to get the total sum of a numeric column, and `AVG` to calculate the average.", resources: [{ name: "SQL COUNT, AVG and SUM Functions", url: "https://www.w3schools.com/sql/sql_count_avg_sum.asp" }] },
          { text: "Use `MIN` and `MAX` to find the smallest and largest values in a column, respectively.", resources: [{ name: "SQL MIN and MAX Functions", url: "https://www.w3schools.com/sql/sql_min_max.asp" }] },
        ],
      },
      {
        title: "Grouping Data",
        points: [
          { text: "Master the `GROUP BY` statement to group rows that have the same values in specified columns into summary rows.", resources: [{ name: "SQL GROUP BY Statement", url: "https://www.w3schools.com/sql/sql_groupby.asp" }] },
          { text: "Learn to use `HAVING` to filter groups based on conditions, which is like a `WHERE` clause for `GROUP BY`.", resources: [{ name: "SQL HAVING Clause", url: "https://www.w3schools.com/sql/sql_having.asp" }] },
        ],
      },
      {
        title: "Joining Tables",
        points: [
          { text: "Understand the concept of joining tables to combine rows from two or more tables based on a related column between them.", resources: [{ name: "SQL Joins", url: "https://www.w3schools.com/sql/sql_join.asp" }] },
          { text: "Learn `INNER JOIN` to retrieve records that have matching values in both tables.", resources: [{ name: "SQL INNER JOIN", url: "https://www.w3schools.com/sql/sql_join_inner.asp" }] },
          { text: "Use `LEFT JOIN` (or `LEFT OUTER JOIN`) to retrieve all records from the left table, and the matched records from the right table. The result is NULL from the right side if there is no match.", resources: [{ name: "SQL LEFT JOIN", url: "https://www.w3schools.com/sql/sql_join_left.asp" }] },
          { text: "Use `RIGHT JOIN` (or `RIGHT OUTER JOIN`) to retrieve all records from the right table, and the matched records from the left table. The result is NULL from the left side when there is no match.", resources: [{ name: "SQL RIGHT JOIN", url: "https://www.w3schools.com/sql/sql_join_right.asp" }] },
          { text: "Learn `FULL OUTER JOIN` to return all records when there is a match in either left or right table records.", resources: [{ name: "SQL FULL OUTER JOIN", url: "https://www.w3schools.com/sql/sql_join_full.asp" }] },
        ],
      },
      {
        title: "Subqueries and CTEs",
        points: [
          { text: "Learn to write subqueries (a query nested inside another query) to perform more complex data retrieval.", resources: [{ name: "SQL Subqueries", url: "https://www.essentialsql.com/sql-subquery/" }] },
          { text: "Understand Common Table Expressions (CTEs) using the `WITH` clause to create temporary result sets that you can reference within another SQL statement, improving readability and organization.", resources: [{ name: "SQL WITH Clause (CTEs)", url: "https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/" }] },
        ],
      },
      {
        title: "Data Manipulation (DML)",
        points: [
          { text: "Use the `INSERT INTO` statement to add new rows of data to a table.", resources: [{ name: "SQL INSERT INTO Statement", url: "https://www.w3schools.com/sql/sql_insert.asp" }] },
          { text: "Learn the `UPDATE` statement to modify existing records in a table.", resources: [{ name: "SQL UPDATE Statement", url: "https://www.w3schools.com/sql/sql_update.asp" }] },
          { text: "Master the `DELETE` statement to remove existing records from a table.", resources: [{ name: "SQL DELETE Statement", url: "https://www.w3schools.com/sql/sql_delete.asp" }] },
        ],
      },
      {
        title: "Data Definition (DDL)",
        points: [
          { text: "Learn `CREATE TABLE` to create a new table in your database, defining its columns and data types.", resources: [{ name: "SQL CREATE TABLE", url: "https://www.w3schools.com/sql/sql_create_table.asp" }] },
          { text: "Use `ALTER TABLE` to add, delete, or modify columns in an existing table.", resources: [{ name: "SQL ALTER TABLE", url: "https://www.w3schools.com/sql/sql_alter.asp" }] },
          { text: "Understand `DROP TABLE` to remove a table from the database.", resources: [{ name: "SQL DROP TABLE", url: "https://www.w3schools.com/sql/sql_drop_table.asp" }] },
          { text: "Learn about constraints like `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, and `CHECK` to enforce rules on the data in a table.", resources: [{ name: "SQL Constraints", url: "https://www.w3schools.com/sql/sql_constraints.asp" }] },
        ],
      },
      {
        title: "Advanced SQL",
        points: [
          { text: "Explore window functions (like `ROW_NUMBER`, `RANK`, `LEAD`, `LAG`) that perform calculations across a set of table rows that are somehow related to the current row.", resources: [{ name: "SQL Window Functions", url: "https://learnsql.com/blog/sql-window-functions-tutorial/" }] },
          { text: "Understand what database transactions are and learn the importance of `COMMIT` and `ROLLBACK` for ensuring data integrity.", resources: [{ name: "SQL Transactions", url: "https://www.geeksforgeeks.org/sql-transaction/" }] },
          { text: "Learn about database indexing and how `CREATE INDEX` can significantly speed up the performance of your queries.", resources: [{ name: "SQL Indexing", url: "https://www.tutorialspoint.com/sql/sql-indexes.htm" }] },
        ],
      },
    ],
  },
  {
    title: "C",
    description: "Learn the foundational C programming language, known for its performance and low-level memory access.",
    topics: [
      {
        title: "Introduction to C",
        points: [
          { text: "Discover the history of C, its influence on other languages, and its common use cases in systems programming, embedded systems, and high-performance computing.", resources: [{ name: "History of C", url: "https://en.wikipedia.org/wiki/C_(programming_language)#History" }] },
          { text: "Set up a C development environment by installing a compiler like GCC (GNU Compiler Collection) and a text editor or IDE like VS Code.", resources: [{ name: "GCC, the GNU Compiler Collection", url: "https://gcc.gnu.org/" }, { name: "C/C++ for Visual Studio Code", url: "https://code.visualstudio.com/docs/languages/cpp" }] },
          { text: "Compile and run your first 'Hello, World!' program to understand the basic structure of a C program and the compilation process.", resources: [{ name: "C - Hello, World!", url: "https://www.geeksforgeeks.org/c-hello-world-program/" }] },
        ],
      },
      {
        title: "C Fundamentals",
        points: [
          { text: "Learn about C's basic syntax, including statements, comments, and the importance of the semicolon.", resources: [{ name: "C - Basic Syntax", url: "https://www.tutorialspoint.com/cprogramming/c_basic_syntax.htm" }] },
          { text: "Understand how to declare variables and use C's fundamental data types, such as `int`, `char`, `float`, `double`, and their modifiers (`short`, `long`, `signed`, `unsigned`).", resources: [{ name: "C - Data Types", url: "https://www.geeksforgeeks.org/c-data-types/" }] },
          { text: "Master C's operators, including arithmetic, relational, logical, bitwise, and assignment operators.", resources: [{ name: "C - Operators", url: "https://www.w3schools.com/c/c_operators.php" }] },
        ],
      },
      {
        title: "Control Flow",
        points: [
          { text: "Control the flow of your program with conditional statements like `if`, `else`, and `else if` to execute different code blocks based on conditions.", resources: [{ name: "C - if...else Statement", url: "https://www.w3schools.com/c/c_if_else.php" }] },
          { text: "Use the `switch` statement for multi-way branching, providing a clean alternative to a series of `if-else if` statements.", resources: [{ name: "C - switch Statement", url: "https://www.w3schools.com/c/c_switch.php" }] },
          { text: "Learn how to repeat actions using `for`, `while`, and `do-while` loops.", resources: [{ name: "C - for Loop", url: "https://www.w3schools.com/c/c_for_loop.php" }, { name: "C - while Loop", url: "https://www.w3schools.com/c/c_while_loop.php" }] },
          { text: "Control loop behavior with the `break` statement to exit a loop early and the `continue` statement to skip to the next iteration.", resources: [{ name: "C - break and continue", url: "https://www.w3schools.com/c/c_break_continue.php" }] },
        ],
      },
      {
        title: "Functions",
        points: [
          { text: "Learn how to define and call functions to create modular, reusable code. Understand the purpose of function prototypes.", resources: [{ name: "C - Functions", url: "https://www.geeksforgeeks.org/c-functions/" }] },
          { text: "Understand variable scope (local vs. global) and how it affects a variable's visibility and lifetime within a program.", resources: [{ name: "Scope Rules in C", url: "https://www.geeksforgeeks.org/scope-rules-in-c/" }] },
          { text: "Explore recursion, where a function calls itself to solve a problem. Understand the base case and recursive step.", resources: [{ name: "Recursion in C", url: "https://www.w3schools.com/c/c_recursion.php" }] },
        ],
      },
      {
        title: "Arrays and Strings",
        points: [
          { text: "Learn how to declare, initialize, and access elements in one-dimensional and multi-dimensional arrays.", resources: [{ name: "C - Arrays", url: "https://www.w3schools.com/c/c_arrays.php" }] },
          { text: "Understand how strings are represented in C as null-terminated character arrays and learn to use common string manipulation functions from the `<string.h>` library.", resources: [{ name: "C - Strings", url: "https://www.w3schools.com/c/c_strings.php" }] },
        ],
      },
      {
        title: "Pointers",
        points: [
          { text: "Grasp the core concept of pointers: variables that store memory addresses. Learn how to declare, initialize, and dereference pointers.", resources: [{ name: "C - Pointers", url: "https://www.w3schools.com/c/c_pointers.php" }] },
          { text: "Understand the close relationship between pointers and arrays, and learn how to use pointer arithmetic to navigate arrays.", resources: [{ name: "C - Pointers and Arrays", url: "https://www.geeksforgeeks.org/c-pointers-and-arrays/" }] },
          { text: "Explore function pointers, which allow you to treat functions as arguments to other functions, enabling dynamic function calls.", resources: [{ name: "Function Pointer in C", url: "https://www.geeksforgeeks.org/function-pointer-in-c/" }] },
        ],
      },
      {
        title: "Memory Management",
        points: [
          { text: "Learn to allocate memory dynamically on the heap using `malloc`, `calloc`, and `realloc`.", resources: [{ name: "Dynamic Memory Allocation in C", url: "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/" }] },
          { text: "Understand the importance of freeing dynamically allocated memory using `free` to prevent memory leaks.", resources: [] },
          { text: "Learn about the stack and heap, the two main memory regions where a C program stores its data.", resources: [{ name: "Stack vs Heap Memory Allocation", url: "https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/" }] },
        ],
      },
      {
        title: "Structures and Unions",
        points: [
          { text: "Learn how to use `struct` to group different data types together into a single, custom data type.", resources: [{ name: "C - struct", url: "https://www.w3schools.com/c/c_structs.php" }] },
          { text: "Understand `union`, which allows you to store different data types in the same memory location (but not at the same time).", resources: [{ name: "C - union", url: "https://www.geeksforgeeks.org/union-in-c/" }] },
          { text: "Use `typedef` to create aliases for complex data types, making your code more readable.", resources: [{ name: "C - typedef", url: "https://www.w3schools.com/c/c_typedef.php" }] },
        ],
      },
      {
        title: "File I/O",
        points: [
          { text: "Learn how to perform file operations, including opening a file with `fopen`, reading with `fscanf` or `fgets`, writing with `fprintf` or `fputs`, and closing with `fclose`.", resources: [{ name: "C - Files I/O", url: "https://www.w3schools.com/c/c_files.php" }] },
          { text: "Understand how to handle file-related errors by checking the return values of I/O functions and using `perror` and `errno`.", resources: [{ name: "Error Handling in C", url: "https://www.tutorialspoint.com/cprogramming/c_error_handling.htm" }] },
        ],
      },
      {
        title: "The Preprocessor",
        points: [
          { text: "Learn about the C preprocessor and how it processes your source code before compilation.", resources: [{ name: "The C Preprocessor", url: "https://www.geeksforgeeks.org/the-c-preprocessor/" }] },
          { text: "Use preprocessor directives like `#include` to add header files, `#define` to create macros and symbolic constants, and conditional directives like `#ifdef` and `#endif` for conditional compilation.", resources: [{ name: "C - Preprocessors", url: "https://www.tutorialspoint.com/cprogramming/c_preprocessors.htm" }] },
        ],
      },
    ],
  },
  {
    title: "R",
    description: "Learn R, the premier language for statistical computing, data analysis, and graphical representation.",
    topics: [
      {
        title: "Foundations of R (Beginner)",
        points: [
          { text: "Install R and RStudio, the premier integrated development environment (IDE) that makes working with R much more efficient.", resources: [{ name: "Install R", url: "https://cran.r-project.org/" }, { name: "Install RStudio", url: "https://posit.co/download/rstudio-desktop/" }] },
          { text: "Familiarize yourself with the RStudio interface, including the console, script editor, environment pane, and plots pane.", resources: [{ name: "RStudio IDE", url: "https://r-for-beginners.com/rstudio-ide" }] },
          { text: "Learn to execute basic commands and run scripts.", resources: [{ name: "R Basic Syntax", url: "https://www.tutorialspoint.com/r/r_basic_syntax.htm" }] },
          { text: "Understand variables and R's main data types, including numeric, character, and logical.", resources: [{ name: "R Data Types", url: "https://www.w3schools.com/r/r_data_types.asp" }] },
          { text: "Master R's fundamental data structures: vectors, lists, matrices, arrays, and factors.", resources: [{ name: "R Data Structures", url: "https://www.datamentor.io/r-programming/data-structures/" }] },
          { text: "Learn to use arithmetic, logical, and relational operators to perform calculations and comparisons.", resources: [{ name: "R Operators", url: "https://www.w3schools.com/r/r_operators.asp" }] },
        ],
      },
      {
        title: "Control Flow and Functions",
        points: [
          { text: "Control program execution with conditional statements like `if`, `else`, and `ifelse`.", resources: [{ name: "R if...else", url: "https://www.w3schools.com/r/r_if_else.asp" }] },
          { text: "Learn to use `for`, `while`, and `repeat` loops to iterate and perform repetitive tasks.", resources: [{ name: "R Loops", url: "https://www.w3schools.com/r/r_for_loop.asp" }] },
          { text: "Use `break` and `next` to control loop execution.", resources: [{ name: "R break/next", url: "https://www.w3schools.com/r/r_break.asp" }] },
          { text: "Write your own custom functions to make your code modular. Understand function arguments and return values.", resources: [{ name: "R Functions", url: "https://www.w3schools.com/r/r_functions.asp" }] },
        ],
      },
      {
        title: "Data Input & Output",
        points: [
          { text: "Learn to read data from various file formats like CSV, Excel, and JSON.", resources: [] },
          { text: "Use functions like `read.csv()`, `read.table()`, `readxl::read_excel()`, and `jsonlite::fromJSON()` to import data.", resources: [{ name: "Data Import", url: "https://r-coder.com/data-import-r/" }] },
          { text: "Learn to save your data into different formats using functions like `write.csv()`.", resources: [{ name: "Data Export", url: "https://r-coder.com/data-export-r/" }] },
        ],
      },
      {
        title: "Data Manipulation (Intermediate)",
        points: [
          { text: "Master the use of Data Frames and Tibbles, the primary data structures for analysis in R.", resources: [{ name: "R Data Frames", url: "https://www.w3schools.com/r/r_data_frames.asp" }] },
          { text: "Learn the core verbs of the `dplyr` package for data manipulation: `filter()`, `select()`, `mutate()`, `arrange()`, `summarise()`, and `group_by()`.", resources: [{ name: "dplyr Tutorial", url: "https://www.datacamp.com/tutorial/dplyr-tutorial-for-beginners" }] },
          { text: "Use the `tidyr` package to reshape your data with functions like `pivot_longer()` and `pivot_wider()`.", resources: [{ name: "Tidy Data", url: "https://tidyr.tidyverse.org/" }] },
          { text: "Clean your data by handling missing values (`na.omit()`, `is.na()`) and performing string operations with `stringr`.", resources: [{ name: "stringr", url: "https://stringr.tidyverse.org/" }] },
          { text: "Handle date and time data effectively using the `lubridate` package.", resources: [{ name: "lubridate", url: "https://lubridate.tidyverse.org/" }] },
        ],
      },
      {
        title: "Data Visualization",
        points: [
          { text: "Learn the basics of plotting with R's built-in plotting functions.", resources: [{ name: "Base R Plotting", url: "https://www.datacamp.com/tutorial/r-base-plot" }] },
          { text: "Master `ggplot2` and its 'Grammar of Graphics' to create complex, layered visualizations.", resources: [{ name: "ggplot2", url: "https://ggplot2.tidyverse.org/" }] },
          { text: "Learn to use various geoms like `geom_point()`, `geom_bar()`, and `geom_histogram()`, and facet your plots with `facet_wrap()`.", resources: [{ name: "ggplot2 Geoms", url: "https://ggplot2.tidyverse.org/reference/index.html#section-geoms" }] },
        ],
      },
      {
        title: "Statistical Analysis & ML (Advanced)",
        points: [
          { text: "Calculate descriptive statistics to summarize your data.", resources: [{ name: "Descriptive Statistics", url: "http://www.sthda.com/english/articles/2-r-basics/28-r-basics-easy-and-fast/" }] },
          { text: "Perform hypothesis testing, including t-tests and chi-square tests, and conduct Analysis of Variance (ANOVA).", resources: [{ name: "Hypothesis Testing", url: "https://www.datacamp.com/tutorial/hypothesis-testing-in-r" }] },
          { text: "Build linear and logistic regression models to understand relationships in your data.", resources: [{ name: "Linear Regression", url: "http://www.sthda.com/english/articles/40-regression-analysis/167-simple-linear-regression-in-r/" }] },
          { text: "Get introduced to machine learning in R using frameworks like `caret` or `tidymodels`.", resources: [{ name: "tidymodels", url: "https://www.tidymodels.org/" }] },
          { text: "Build supervised models (Random Forest, SVM) and unsupervised models (k-means clustering, PCA).", resources: [{ name: "Machine Learning in R", url: "https://www.datacamp.com/tutorial/machine-learning-in-r" }] },
          { text: "Evaluate your models using metrics like the confusion matrix, ROC curves, and AUC.", resources: [{ name: "Model Evaluation", url: "https://www.datacamp.com/tutorial/roc-curves-and-auc-r" }] },
        ],
      },
      {
        title: "Specializations & Projects",
        points: [
          { text: "Build interactive web applications directly from your R code using the `Shiny` package.", resources: [{ name: "Shiny", url: "https://shiny.posit.co/" }] },
          { text: "Learn to create dynamic reports and documents with R Markdown and `knitr`.", resources: [{ name: "R Markdown", url: "https://rmarkdown.rstudio.com/" }] },
          { text: "Explore using R with big data technologies like Apache Spark via `sparklyr`.", resources: [{ name: "sparklyr", url: "https://spark.rstudio.com/" }] },
          { text: "Apply your skills to real-world datasets. Perform an Exploratory Data Analysis (EDA), build a predictive model, and create a data visualization dashboard.", resources: [{ name: "Kaggle", url: "https://www.kaggle.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Java",
    description: "Learn the robust, object-oriented Java programming language, a mainstay in enterprise-level applications, Android development, and large-scale systems.",
    topics: [
      {
        title: "Introduction to Java",
        points: [
          { text: "Understand the 'Write Once, Run Anywhere' philosophy of Java, thanks to the Java Virtual Machine (JVM). Learn its history and why it's a top choice for enterprise applications.", resources: [{ name: "What is Java?", url: "https://www.oracle.com/java/what-is-java/" }] },
          { text: "Set up your development environment by installing the Java Development Kit (JDK) and an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse.", resources: [{ name: "Install Java JDK", url: "https://www.oracle.com/java/technologies/downloads/" }, { name: "IntelliJ IDEA", url: "https://www.jetbrains.com/idea/" }] },
          { text: "Compile and run your first 'Hello, World!' application to understand the basic syntax, the `public static void main(String[] args)` method, and the compilation process.", resources: [{ name: "Your First Java Program", url: "https://www.geeksforgeeks.org/java-hello-world-program/" }] },
        ],
      },
      {
        title: "Java Fundamentals",
        points: [
          { text: "Learn about primitive data types (e.g., `int`, `double`, `boolean`, `char`) for storing simple values and reference types for objects.", resources: [{ name: "Java Data Types", url: "https://www.w3schools.com/java/java_data_types.asp" }] },
          { text: "Understand how to declare and initialize variables. Learn about operators for performing arithmetic, relational, and logical operations.", resources: [{ name: "Variables", url: "https://www.w3schools.com/java/java_variables.asp" }, { name: "Operators", url: "https://www.w3schools.com/java/java_operators.asp" }] },
          { text: "Master control flow statements like `if-else`, `switch`, `for`, `while`, and `do-while` loops to make decisions and repeat actions in your code.", resources: [{ name: "Java If...Else", url: "https://www.w3schools.com/java/java_if_else.asp" }, { name: "Java Loops", url: "https://www.w3schools.com/java/java_while_loop.asp" }] },
        ],
      },
      {
        title: "Object-Oriented Programming (OOP) in Java",
        points: [
          { text: "Learn to define your own data types by creating classes. Understand how to instantiate objects from classes and the role of constructors.", resources: [{ name: "Java Classes/Objects", url: "https://www.w3schools.com/java/java_classes.asp" }] },
          { text: "Grasp the four pillars of OOP: Encapsulation (bundling data and methods), Inheritance (creating a new class from an existing one), Polymorphism (an object taking many forms), and Abstraction (hiding complex implementation details).", resources: [{ name: "OOP Concepts", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }] },
          { text: "Understand how to use interfaces and abstract classes to define contracts and create flexible, extensible code designs.", resources: [{ name: "Interfaces", url: "https://www.w3schools.com/java/java_interface.asp" }, { name: "Abstract Classes", url: "https://www.w3schools.com/java/java_abstract.asp" }] },
        ],
      },
      {
        title: "The Collections Framework",
        points: [
          { text: "Learn to use the `List` interface and its implementations like `ArrayList` and `LinkedList` for ordered collections of elements.", resources: [{ name: "Java ArrayList", url: "https://www.w3schools.com/java/java_arraylist.asp" }] },
          { text: "Understand the `Set` interface and its implementations like `HashSet` for storing unique, unordered elements.", resources: [{ name: "Java HashSet", url: "https://www.w3schools.com/java/java_hashset.asp" }] },
          { text: "Explore the `Map` interface and its implementations like `HashMap` for storing key-value pairs, allowing for efficient data retrieval.", resources: [{ name: "Java HashMap", url: "https://www.w3schools.com/java/java_hashmap.asp" }] },
        ],
      },
      {
        title: "Exception Handling",
        points: [
          { text: "Learn to manage runtime errors gracefully using `try-catch` blocks to prevent your application from crashing.", resources: [{ name: "Java Try...Catch", url: "https://www.w3schools.com/java/java_try_catch.asp" }] },
          { text: "Understand the difference between checked exceptions (which must be handled) and unchecked exceptions (runtime errors).", resources: [{ name: "Checked vs. Unchecked Exceptions", url: "https://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/" }] },
          { text: "Use the `finally` block to ensure that critical cleanup code (like closing a file or database connection) is always executed, whether an exception occurred or not.", resources: [] },
        ],
      },
      {
        title: "Java I/O",
        points: [
          { text: "Learn to read from and write to files using classes from the `java.io` package, such as `FileReader`, `FileWriter`, and the more modern `Files` and `Paths` classes.", resources: [{ name: "Java Files", url: "https://www.w3schools.com/java/java_files.asp" }] },
          { text: "Understand how to work with input and output streams for handling data flow from various sources, not just files.", resources: [{ name: "I/O Streams", url: "https://docs.oracle.com/javase/tutorial/essential/io/streams.html" }] },
        ],
      },
      {
        title: "Concurrency and Multithreading",
        points: [
          { text: "Grasp the fundamentals of multithreading by extending the `Thread` class or implementing the `Runnable` interface to perform multiple operations simultaneously.", resources: [{ name: "Java Threads", url: "https://www.w3schools.com/java/java_threads.asp" }] },
          { text: "Learn about thread synchronization and how to use the `synchronized` keyword to prevent race conditions and ensure data consistency in concurrent applications.", resources: [{ name: "Synchronization", url: "https://www.baeldung.com/java-synchronization" }] },
        ],
      },
      {
        title: "Modern Java (Lambda & Streams)",
        points: [
          { text: "Learn to use lambda expressions, a key feature from Java 8, to write more concise and functional code, especially with collections.", resources: [{ name: "Java Lambda Expressions", url: "https://www.w3schools.com/java/java_lambda.asp" }] },
          { text: "Master the Stream API to perform powerful, SQL-like operations on collections of data. Learn to use methods like `filter`, `map`, and `reduce` to write clean and efficient code.", resources: [{ name: "Java Stream API Tutorial", url: "https://www.baeldung.com/java-8-streams" }] },
        ],
      },
    ],
  },
  {
    title: "C#",
    description: "Learn the modern, object-oriented C# language from Microsoft.",
    topics: [
      {
        title: "Stage 1: Beginner - C# and .NET Foundations",
        points: [
          { text: "Understand the .NET ecosystem (including .NET Core/5+), the Common Language Runtime (CLR), and how C# code is compiled and executed.", resources: [{ name: ".NET introduction", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" }] },
          { text: "Set up your environment with the .NET SDK and an IDE like Visual Studio or VS Code with the C# extension.", resources: [{ name: "Install .NET SDK", url: "https://dotnet.microsoft.com/en-us/download" }, { name: "Visual Studio", url: "https://visualstudio.microsoft.com/" }] },
          { text: "Write your first 'Hello, World!' console application. Learn about the `Main` method, namespaces, and basic program structure.", resources: [{ name: "C# Hello World", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/hello-world" }] },
          { text: "Master variables, built-in value types (`int`, `double`, `bool`), and reference types (`string`, `object`).", resources: [{ name: "C# Data Types", url: "https://www.w3schools.com/cs/cs_data_types.php" }] },
          { text: "Learn control flow statements like `if-else`, `switch`, and loops (`for`, `foreach`, `while`) to add logic to your applications.", resources: [{ name: "Control Flow", url: "https://www.w3schools.com/cs/cs_if_else.php" }] },
        ],
      },
      {
        title: "Stage 2: Intermediate - Object-Oriented Programming",
        points: [
          { text: "Deeply understand classes and objects. Learn about constructors, properties, methods, and the `this` keyword.", resources: [{ name: "Classes and Objects", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes" }] },
          { text: "Master the four pillars of OOP: Inheritance (creating class hierarchies), Encapsulation (controlling access to data), Polymorphism (using virtual methods and interfaces), and Abstraction.", resources: [{ name: "OOP in C#", url: "https://www.tutorialsteacher.com/csharp/csharp-object-oriented-programming" }] },
          { text: "Learn to use interfaces to define contracts for classes and abstract classes for creating base classes that cannot be instantiated.", resources: [{ name: "Interfaces", url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface" }] },
          { text: "Understand how to handle runtime errors gracefully using `try-catch-finally` blocks.", resources: [{ name: "Exception Handling", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/" }] },
        ],
      },
      {
        title: "Stage 3: Advanced - Modern C# and .NET Core",
        points: [
          { text: "Master Language Integrated Query (LINQ) to write powerful, declarative queries over collections and databases.", resources: [{ name: "LINQ Tutorial", url: "https://www.tutorialsteacher.com/linq/linq-tutorials" }] },
          { text: "Learn asynchronous programming with `async` and `await` to write responsive and non-blocking I/O operations.", resources: [{ name: "Async/Await", url: "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios" }] },
          { text: "Understand delegates and events, which form the basis for event-driven programming in .NET.", resources: [{ name: "Delegates", url: "https://www.w3schools.com/cs/cs_delegates.php" }] },
          { text: "Learn about generics to create reusable, type-safe classes and methods that can work with any data type.", resources: [{ name: "Generics", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics" }] },
          { text: "Get familiar with NuGet, the package manager for .NET, to add third-party libraries to your projects.", resources: [{ name: "Intro to NuGet", url: "https://learn.microsoft.com/en-us/nuget/what-is-nuget" }] },
        ],
      },
      {
        title: "Stage 4: Specializations & Frameworks",
        points: [
          { text: "Build web applications and APIs with ASP.NET Core MVC and Razor Pages.", resources: [{ name: "ASP.NET Core", url: "https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core" }] },
          { text: "Learn to build interactive client-side web UI with C# using Blazor.", resources: [{ name: "Blazor", url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" }] },
          { text: "Use Entity Framework (EF) Core, an object-relational mapper (ORM), to interact with databases using C# objects.", resources: [{ name: "EF Core", url: "https://learn.microsoft.com/en-us/ef/core/" }] },
          { text: "Build cross-platform desktop and mobile apps with .NET MAUI.", resources: [{ name: "MAUI", url: "https://dotnet.microsoft.com/en-us/apps/maui" }] },
          { text: "Explore game development by learning the Unity engine, which uses C# for scripting.", resources: [{ name: "Unity Learn", url: "https://learn.unity.com/" }] },
        ],
      },
    ],
  },
  {
    title: "TypeScript",
    description: "Learn TypeScript to add static types to your JavaScript projects.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand basic types, interfaces, classes, and modules.", resources: [{ name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }] },
          { text: "Learn about generics, decorators, and advanced types.", resources: [{ name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }] },
        ],
      },
    ],
  },
  {
    title: "Swift",
    description: "Learn Swift, the modern language for building apps for Apple platforms.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Swift syntax, optionals, and control flow.", resources: [{ name: "A Swift Tour", url: "https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html" }] },
          { text: "Learn about UIKit/SwiftUI for building user interfaces.", resources: [{ name: "Hacking with Swift", url: "https://www.hackingwithswift.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Kotlin",
    description: "Learn Kotlin, the modern language for building Android apps.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand Kotlin syntax, null safety, and coroutines for async programming.", resources: [{ name: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" }] },
          { text: "Learn to build Android apps with Kotlin.", resources: [{ name: "Android Kotlin Fundamentals", url: "https://developer.android.com/kotlin/fundamentals" }] },
        ],
      },
    ],
  },
  {
    title: "PHP",
    description: "Learn the popular server-side scripting language for web development.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand PHP syntax, variables, and control structures.", resources: [{ name: "PHP The Right Way", url: "https://phptherightway.com/" }] },
          { text: "Learn about working with databases and a framework like Laravel or Symfony.", resources: [{ name: "Laravel", url: "https://laravel.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Ruby",
    description: "Learn the dynamic, open-source programming language with a focus on simplicity and productivity.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Ruby syntax and its object-oriented nature.", resources: [{ name: "Ruby in 20 Minutes", url: "https://www.ruby-lang.org/en/documentation/quickstart/" }] },
          { text: "Learn the Ruby on Rails framework for web development.", resources: [{ name: "Ruby on Rails Guides", url: "https://guides.rubyonrails.org/" }] },
        ],
      },
    ],
  },
  {
    title: "Rust",
    description: "Learn Rust for building reliable and efficient software.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand ownership, borrowing, and lifetimes.", resources: [{ name: "The Rust Book", url: "https://doc.rust-lang.org/book/" }] },
          { text: "Learn about concurrency, error handling, and building command-line tools.", resources: [{ name: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/" }] },
        ],
      },
    ],
  },
  {
    title: "Dart",
    description: "Learn Dart, the language for building mobile, desktop, and web applications with Flutter.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Dart syntax, types, and asynchronous programming.", resources: [{ name: "A Tour of the Dart Language", url: "https://dart.dev/guides/language/language-tour" }] },
          { text: "Learn about building UIs with Flutter.", resources: [{ name: "Flutter Docs", url: "https://docs.flutter.dev/" }] },
        ],
      },
    ],
  },
  {
    title: "HTML",
    description: "Learn the standard markup language for creating web pages.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand elements, tags, and attributes.", resources: [{ name: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }] },
          { text: "Learn about semantic HTML, forms, and multimedia.", resources: [{ name: "HTML Dog", url: "https://htmldog.com/guides/html/beginner/" }] },
        ],
      },
    ],
  },
  {
    title: "CSS",
    description: "Learn the language for styling and laying out web pages.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand selectors, the box model, and typography.", resources: [{ name: "MDN CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" }] },
          { text: "Learn about Flexbox, Grid, and responsive design.", resources: [{ name: "CSS-Tricks", url: "https://css-tricks.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Bash/Shell Scripting",
    description: "Learn to automate tasks on the command line.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand commands, pipes, and redirection.", resources: [{ name: "The Bash Guide", url: "https://guide.bash.academy/" }] },
          { text: "Learn to write scripts with variables, loops, and conditional logic.", resources: [{ name: "Learn Shell", url: "https://www.learnshell.org/" }] },
        ],
      },
    ],
  },
  {
    title: "Perl",
    description: "Learn the versatile, high-level programming language.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand Perl syntax, regular expressions, and data structures.", resources: [{ name: "Learn Perl", url: "https://www.learn-perl.org/" }] },
        ],
      },
    ],
  },
  {
    title: "PowerShell",
    description: "Learn the command-line shell and scripting language from Microsoft.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand cmdlets, pipelines, and the object-based nature of PowerShell.", resources: [{ name: "PowerShell Docs", url: "https://docs.microsoft.com/en-us/powershell/" }] },
        ],
      },
    ],
  },
  {
    title: "MATLAB",
    description: "Learn the programming platform for engineers and scientists.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand matrices, plotting, and writing scripts and functions.", resources: [{ name: "MATLAB Onramp", url: "https://www.mathworks.com/learn/tutorials/matlab-onramp.html" }] },
        ],
      },
    ],
  },
  {
    title: "SAS",
    description: "Learn the software suite for advanced analytics and data management.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand the DATA step, procedures, and the SAS macro language.", resources: [{ name: "SAS Tutorials", url: "https://www.sas.com/en_us/training/offers/free-sas-training.html" }] },
        ],
      },
    ],
  },
  {
    title: "SPSS",
    description: "Learn the software package for statistical analysis.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand data entry, variable types, and running statistical tests through the UI and syntax.", resources: [{ name: "SPSS Tutorials", url: "https://www.spss-tutorials.com/" }] },
        ],
      },
    ],
  },
  {
    title: "Prolog",
    description: "Learn the logic programming language.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand facts, rules, and queries.", resources: [{ name: "Learn Prolog Now!", url: "http://www.learnprolognow.org/" }] },
        ],
      },
    ],
  },
  {
    title: "TensorFlow",
    description: "Learn the open-source library for machine learning and artificial intelligence.",
    topics: [
      {
        title: "Basics",
        points: [
          { text: "Understand tensors, building models with Keras, and training/evaluation.", resources: [{ name: "TensorFlow Core", url: "https://www.tensorflow.org/guide" }] },
        ],
      },
    ],
  },
  {
    title: "PyTorch",
    description: "Learn the open-source machine learning library based on the Torch library.",
    topics: [
      {
        title: "Fundamentals",
        points: [
          { text: "Understand tensors, building neural networks with `torch.nn`, and automatic differentiation.", resources: [{ name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }] },
        ],
      },
    ],
  },
  {
    title: "Flutter",
    description: "Learn Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    topics: [
      {
        title: "Core Concepts",
        points: [
          { text: "Understand widgets, layouts, and state management.", resources: [{ name: "Flutter Docs", url: "https://docs.flutter.dev/" }] },
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
          <Card key={path.title} className="hover:shadow-md transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{path.title}</CardTitle>
              <p className="text-muted-foreground pt-2 text-sm">{path.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <Accordion type="single" collapsible className="w-full">
                {path.topics.map((topic, index) => (
                  <AccordionItem value={`item-${index}`} key={topic.title}>
                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                        <div className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
                            {topic.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pl-8">
                        <ul className="list-disc pl-5 space-y-4">
                            {topic.points.map((point, i) => (
                                <li key={i}>
                                    <span className="text-sm">{point.text}</span>
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
