
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
            "Learn about the history of Python and its key features.",
            "Understand why Python is a popular choice for various applications.",
            "Set up your Python development environment on your local machine.",
        ],
        resources: [
            { name: "Official Python Website", url: "https://python.org" },
            { name: "The Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
        ]
      },
      {
        title: "Python Fundamentals",
        points: [
            "Learn about variables and different data types (integers, floats, strings, booleans).",
            "Handle user input and display output to the console.",
            "Perform basic operations on numbers and strings.",
        ],
        resources: [
            { name: "W3Schools Python Tutorial", url: "https://w3schools.com/python/" },
            { name: "GeeksforGeeks Python Basics", url: "https://geeksforgeeks.org/python-basics/" },
        ]
      },
      {
        title: "Python Flow Control",
        points: [
            "Control program flow using conditional statements (if, elif, else).",
            "Create loops (for, while) to execute code repeatedly.",
            "Use 'break' and 'continue' to control loop behavior.",
        ],
        resources: [
            { name: "Python Control Flow Documentation", url: "https://docs.python.org/3/tutorial/controlflow.html" },
        ]
      },
      {
        title: "Python Data Types",
        points: [
            "Work with lists to store ordered collections of items.",
            "Use tuples for immutable sequences of data.",
            "Understand dictionaries for key-value pair storage and sets for unique elements.",
        ],
        resources: [
            { name: "Python Data Structures Documentation", url: "https://docs.python.org/3/tutorial/datastructures.html" },
        ]
      },
      {
        title: "Python Functions",
        points: [
            "Define and call your own custom functions.",
            "Pass arguments to functions and return values.",
            "Understand variable scope (local vs. global) and lambda functions.",
        ],
        resources: [
            { name: "Real Python Functions Guide", url: "https://realpython.com/defining-your-own-python-function/" },
        ]
      },
      {
        title: "Python Files",
        points: [
            "Read data from text files.",
            "Write data to text files.",
            "Understand file handling modes and best practices for working with files.",
        ],
        resources: [
            { name: "Python File I/O Tutorial", url: "https://realpython.com/read-write-files-python/" },
        ]
      },
      {
        title: "Python Exception Handling",
        points: [
            "Use try-except blocks to handle errors gracefully.",
            "Catch specific exceptions to handle different error types.",
            "Use 'finally' to execute cleanup code.",
        ],
        resources: [
            { name: "Python Errors and Exceptions", url: "https://docs.python.org/3/tutorial/errors.html" },
        ]
      },
      {
        title: "Python Object and Class",
        points: [
            "Learn the principles of Object-Oriented Programming (OOP).",
            "Define classes and create objects (instances).",
            "Understand concepts like inheritance, encapsulation, and polymorphism.",
        ],
        resources: [
            { name: "Python Classes Documentation", url: "https://docs.python.org/3/tutorial/classes.html" },
        ]
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
                "Understand the role of JavaScript in web development.",
                "Learn how JavaScript runs in the browser.",
                "Write your first 'Hello, World!' script and use the browser console.",
            ],
            resources: [
                { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                { name: "freeCodeCamp JavaScript Course", url: "https://freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
            ]
        },
        {
            title: "Variables and Data Types",
            points: [
                "Declare variables using var, let, and const.",
                "Learn about JavaScript data types: String, Number, Boolean, Null, Undefined, and Object.",
                "Work with arrays to store lists of data.",
            ],
            resources: [
                { name: "MDN JavaScript data types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" },
            ]
        },
        {
            title: "Operators and Expressions",
            points: [
                "Use arithmetic operators for calculations.",
                "Understand assignment, comparison, and logical operators.",
                "Combine expressions to create complex logic.",
            ],
            resources: [
                { name: "MDN Expressions and operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators" },
            ]
        },
        {
            title: "Control Flow (If/Else, Loops)",
            points: [
                "Make decisions in your code with if/else statements.",
                "Execute code blocks multiple times using for and while loops.",
                "Iterate over arrays and other iterable objects.",
            ],
            resources: [
                { name: "MDN Control flow and error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
            ]
        },
        {
            title: "Functions",
            points: [
                "Create reusable blocks of code with functions.",
                "Understand function declarations, expressions, and arrow functions.",
                "Pass parameters to functions and use the return statement.",
            ],
            resources: [
                { name: "MDN Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
            ]
        },
        {
            title: "Objects and Arrays",
            points: [
                "Create and manipulate objects to store complex data.",
                "Access object properties using dot and bracket notation.",
                "Use common array methods like push, pop, forEach, and map.",
            ],
            resources: [
                { name: "MDN Working with objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" },
                { name: "MDN Indexed collections (Arrays)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections" },
            ]
        },
        {
            title: "DOM Manipulation",
            points: [
                "Select HTML elements using querySelector and getElementById.",
                "Change the content, style, and attributes of elements.",
                "Create and append new elements to the page dynamically.",
            ],
            resources: [
                { name: "MDN Introduction to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" },
            ]
        },
        {
            title: "Asynchronous JavaScript (Promises, async/await)",
            points: [
                "Understand the concept of asynchronous programming.",
                "Use Promises to handle operations that take time to complete.",
                "Write cleaner asynchronous code with async/await syntax.",
            ],
            resources: [
                { name: "MDN Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
            ]
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
                "Learn the basic structure of an HTML document.",
                "Use semantic tags like <header>, <nav>, <main>, and <footer>.",
                "Create forms with input fields, labels, and buttons.",
            ],
            resources: [
                { name: "MDN HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
            ]
        },
        {
            title: "CSS3: Styling and Layouts",
            points: [
                "Apply styles to HTML elements using CSS selectors.",
                "Understand the box model (margin, border, padding, content).",
                "Style text with properties for font, color, and spacing.",
            ],
            resources: [
                { name: "MDN CSS first steps", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" },
            ]
        },
        {
            title: "Responsive Design with Flexbox and Grid",
            points: [
                "Build layouts that adapt to different screen sizes.",
                "Use Flexbox for one-dimensional layouts (rows or columns).",
                "Use CSS Grid for complex two-dimensional layouts.",
            ],
            resources: [
                { name: "CSS-Tricks: A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
                { name: "CSS-Tricks: A Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
            ]
        },
        {
            title: "Introduction to React",
            points: [
                "Understand the component-based architecture of React.",
                "Set up a new React project using tools like Create React App.",
                "Learn JSX syntax to write HTML-like code in JavaScript.",
            ],
            resources: [
                { name: "Official React Tutorial", url: "https://react.dev/learn" },
            ]
        },
        {
            title: "Components, Props, and State",
            points: [
                "Create reusable UI components.",
                "Pass data down to child components using props.",
                "Manage component-specific data with the useState hook.",
            ],
            resources: [
                { name: "React Docs: Your First Component", url: "https://react.dev/learn/your-first-component" },
                { name: "React Docs: Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component" },
                { name: "React Docs: State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" },
            ]
        },
        {
            title: "React Hooks",
            points: [
                "Use the useEffect hook to handle side effects like data fetching.",
                "Manage global state with the useContext hook.",
                "Learn about other essential hooks like useRef and useReducer.",
            ],
            resources: [
                { name: "React Docs: Hooks", url: "https://react.dev/reference/react" },
            ]
        },
        {
            title: "Building a Simple Web App",
            points: [
                "Plan the structure and features of your application.",
                "Combine components to build a complete user interface.",
                "Fetch data from a public API and display it in your app.",
            ],
            resources: [
                { name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" },
            ]
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
            "Build complex user interfaces with React.",
            "Learn Next.js for features like server-side rendering and routing.",
            "Manage application state with tools like Redux or Zustand.",
        ],
        resources: [
            { name: "Next.js Docs", url: "https://nextjs.org/docs" },
            { name: "Zustand Docs", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
        ]
      },
      {
        title: "Backend Development (Node.js, Express)",
        points: [
            "Create a server using Node.js.",
            "Build a RESTful API with the Express framework.",
            "Handle HTTP requests and responses.",
        ],
        resources: [
            { name: "Node.js Guides", url: "https://nodejs.org/en/docs/guides" },
            { name: "Express.js 'Hello World' example", url: "https://expressjs.com/en/starter/hello-world.html" },
        ]
      },
      {
        title: "Databases (SQL, NoSQL)",
        points: [
            "Understand the differences between SQL and NoSQL databases.",
            "Learn basic SQL commands for relational databases (e.g., PostgreSQL).",
            "Work with a NoSQL database like MongoDB.",
        ],
        resources: [
            { name: "PostgreSQL Tutorial", url: "https://postgresqltutorial.com/" },
            { name: "MongoDB University", url: "https://learn.mongodb.com/" },
        ]
      },
      {
        title: "APIs and RESTful services",
        points: [
            "Design and build robust APIs following REST principles.",
            "Understand HTTP methods (GET, POST, PUT, DELETE).",
            "Create endpoints for your frontend to consume.",
        ],
        resources: [
            { name: "Introduction to REST APIs", url: "https://restapitutorial.com/" },
        ]
      },
      {
        title: "Authentication and Authorization",
        points: [
            "Implement user login and registration systems.",
            "Secure your API using JSON Web Tokens (JWT).",
            "Create protected routes that require authentication.",
        ],
        resources: [
            { name: "JWT Introduction", url: "https://jwt.io/introduction" },
            { name: "OAuth 2.0", url: "https://oauth.net/2/" },
        ]
      },
      {
        title: "Deployment and Hosting",
        points: [
            "Deploy your frontend application to platforms like Vercel or Netlify.",
            "Host your backend server on a cloud provider like Heroku or AWS.",
            "Set up a production database.",
        ],
        resources: [
            { name: "Vercel Docs", url: "https://vercel.com/docs" },
            { name: "AWS Getting Started", url: "https://aws.amazon.com/getting-started/" },
        ]
      },
      {
        title: "Version Control with Git",
        points: [
            "Track changes in your codebase using Git.",
            "Collaborate with others using GitHub or GitLab.",
            "Learn essential Git commands like commit, push, pull, and branch.",
        ],
        resources: [
            { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        ]
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
            "Compare native development (Swift/Kotlin) with cross-platform (React Native/Flutter).",
            "Understand the mobile app ecosystem.",
            "Choose the right technology stack for your project.",
        ],
        resources: [
            { name: "React Native vs. Flutter", url: "https://developer.android.com/stories/cross-platform/react-native-vs-flutter" },
        ]
      },
      {
        title: "React Native or Flutter Fundamentals",
        points: [
            "Set up your development environment for your chosen framework.",
            "Build layouts and user interfaces with pre-built components.",
            "Handle user input and touch gestures.",
        ],
        resources: [
            { name: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
            { name: "Flutter Docs", url: "https://docs.flutter.dev/" },
        ]
      },
      {
        title: "State Management",
        points: [
            "Learn how to manage the state of your application.",
            "Use state management libraries like Redux, MobX, or Riverpod.",
            "Keep your UI in sync with your application data.",
        ],
        resources: [
            { name: "Flutter State Management", url: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" },
        ]
      },
      {
        title: "Navigation",
        points: [
            "Implement navigation between different screens in your app.",
            "Use stack, tab, and drawer navigators to create user-friendly flows.",
            "Pass data between screens.",
        ],
        resources: [
            { name: "React Navigation", url: "https://reactnavigation.org/" },
            { name: "Flutter Navigation and routing", url: "https://docs.flutter.dev/ui/navigation" },
        ]
      },
      {
        title: "Working with APIs",
        points: [
            "Fetch data from a backend server using HTTP requests.",
            "Handle API responses and display the data in your app.",
            "Manage loading and error states.",
        ],
        resources: [
            { name: "Fetching data from the internet", url: "https://docs.flutter.dev/cookbook/networking/fetch-data" },
        ]
      },
      {
        title: "Push Notifications",
        points: [
            "Implement push notifications to engage users.",
            "Use services like Firebase Cloud Messaging (FCM).",
            "Handle incoming notifications when the app is in different states.",
        ],
        resources: [
            { name: "Firebase Cloud Messaging", url: "https://firebase.google.com/docs/cloud-messaging" },
        ]
      },
      {
        title: "Publishing to App Stores",
        points: [
            "Prepare your app for release.",
            "Follow the guidelines for the Apple App Store and Google Play Store.",
            "Build and submit your app for review.",
        ],
        resources: [
            { name: "Apple App Store Review Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" },
            { name: "Google Play Developer Policy Center", url: "https://support.google.com/googleplay/android-developer/answer/9859455" },
        ]
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
            "Understand the principles of Continuous Integration and Continuous Delivery.",
            "Automate the build, test, and deployment processes.",
            "Create pipelines using tools like Jenkins or GitHub Actions.",
        ],
        resources: [
            { name: "Jenkins Documentation", url: "https://www.jenkins.io/doc/" },
            { name: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
        ]
      },
      {
        title: "Infrastructure as Code (Terraform, Ansible)",
        points: [
            "Manage your infrastructure using code.",
            "Use Terraform to provision cloud resources (servers, databases, etc.).",
            "Use Ansible for configuration management and automation.",
        ],
        resources: [
            { name: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform/docs" },
            { name: "Ansible Documentation", url: "https://docs.ansible.com/" },
        ]
      },
      {
        title: "Containerization (Docker, Kubernetes)",
        points: [
            "Package applications into lightweight, portable containers with Docker.",
            "Orchestrate and manage containers at scale with Kubernetes.",
            "Understand container networking and storage.",
        ],
        resources: [
            { name: "Docker Documentation", url: "https://docs.docker.com/" },
            { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
        ]
      },
      {
        title: "Cloud Platforms (AWS, GCP, Azure)",
        points: [
            "Gain expertise in a major cloud provider.",
            "Learn about core services for compute, storage, networking, and databases.",
            "Understand cloud security and cost management.",
        ],
        resources: [
            { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
            { name: "Google Cloud Documentation", url: "https://cloud.google.com/docs" },
            { name: "Microsoft Azure Documentation", url: "https://learn.microsoft.com/en-us/azure/" },
        ]
      },
      {
        title: "Monitoring and Logging",
        points: [
            "Monitor the health and performance of your systems.",
            "Use tools like Prometheus for metrics and Grafana for visualization.",
            "Centralize logs with the ELK Stack (Elasticsearch, Logstash, Kibana).",
        ],
        resources: [
            { name: "Prometheus Documentation", url: "https://prometheus.io/docs/introduction/overview/" },
            { name: "Grafana Documentation", url: "https://grafana.com/docs/" },
            { name: "Elastic Stack", url: "https://www.elastic.co/elastic-stack" },
        ]
      },
      {
        title: "Scripting (Bash, Python)",
        points: [
            "Automate repetitive tasks using scripts.",
            "Write Bash scripts for system administration.",
            "Use Python for more complex automation and scripting needs.",
        ],
        resources: [
            { name: "Bash Scripting Tutorial", url: "https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" },
            { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
        ]
      },
      {
        title: "Networking Fundamentals",
        points: [
            "Understand core networking concepts (TCP/IP, DNS, HTTP/S).",
            "Configure virtual private clouds (VPCs) and subnets.",
            "Secure your network with firewalls and security groups.",
        ],
        resources: [
            { name: "An Introduction to Computer Networks", url: "https://intronetworks.cs.princeton.edu/" },
        ]
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
                        <ul className="list-disc pl-5 space-y-2">
                            {topic.points.map((point, i) => (
                                <li key={i}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        {topic.resources && topic.resources.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold text-foreground mb-2">Resources:</h4>
                                <ul className="space-y-1">
                                    {topic.resources.map((resource, i) => (
                                        <li key={i} className="flex items-start">
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                                                <Link className="h-4 w-4 shrink-0" />
                                                <span>{resource.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
