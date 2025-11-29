
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
        title: "Beginner Stage: Core Web Technologies",
        level: "Beginner",
        steps: [
            {
                what: "HTML Fundamentals",
                why: "HTML (HyperText Markup Language) is the backbone of every webpage. It provides the essential structure for your content.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" },
                    { name: "freeCodeCamp - HTML Full Course", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
                ],
                practice: "Build a simple single-page website for a fictional business, using only HTML. Include headings, paragraphs, lists, and images.",
            },
            {
                what: "CSS Fundamentals",
                why: "CSS (Cascading Style Sheets) is used to style and visually format your HTML, making your websites look good.",
                time: "2 Weeks",
                prereqs: "HTML",
                resources: [
                    { name: "MDN Web Docs - CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" },
                    { name: "freeCodeCamp - CSS Full Course", url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
                ],
                practice: "Style the HTML page you built previously. Add colors, change fonts, and control spacing with margin and padding.",
            },
            {
                what: "Responsive Design & Flexbox/Grid",
                why: "To ensure your websites look good and function well on all devices, from desktops to mobile phones.",
                time: "2 Weeks",
                prereqs: "CSS",
                resources: [
                    { name: "CSS-Tricks - A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
                    { name: "CSS-Tricks - A Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
                    { name: "freeCodeCamp - Responsive Design Tutorial", url: "https://www.youtube.com/watch?v=srvUrASV_5c" },
                ],
                practice: "Make the website you built responsive. Use Flexbox and Grid to create a flexible layout that adapts to different screen sizes.",
            },
            {
                what: "JavaScript Fundamentals",
                why: "JavaScript is the programming language of the web, used to add interactivity and dynamic behavior to your websites.",
                time: "3-4 Weeks",
                prereqs: "HTML, CSS",
                resources: [
                    { name: "MDN Web Docs - JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                    { name: "freeCodeCamp - JavaScript for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
                ],
                practice: "Create a simple tip calculator or a basic to-do list application using vanilla JavaScript.",
            },
            {
                what: "DOM Manipulation",
                why: "To interact with and dynamically change the content, structure, and style of your HTML document using JavaScript.",
                time: "1-2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "MDN Web Docs - Intro to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" },
                ],
                practice: "Build a simple modal window or an image gallery where clicking thumbnails changes the main image, all using DOM manipulation.",
            },
            {
                what: "Version Control with Git",
                why: "Git is essential for tracking changes in your code, collaborating with others, and managing different versions of your projects.",
                time: "1 Week",
                prereqs: "None",
                resources: [
                    { name: "Git Official Documentation", url: "https://git-scm.com/doc" },
                    { name: "freeCodeCamp - Git and GitHub for Beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
                ],
                practice: "Create a GitHub account, initialize a Git repository for one of your projects, and practice making commits, creating branches, and pushing your code to GitHub.",
            },
            {
                what: "Asynchronous JavaScript (AJAX, Promises, async/await)",
                why: "To fetch data from servers without freezing the user interface, which is crucial for modern web applications.",
                time: "1-2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "MDN Web Docs - Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
                ],
                practice: "Build a simple weather app that fetches data from a free weather API (like OpenWeatherMap) and displays the current weather for a city.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Frameworks and Tools",
        level: "Intermediate",
        steps: [
            {
                what: "Learn a JavaScript Framework (React)",
                why: "Frameworks like React provide a structured and efficient way to build complex, component-based user interfaces.",
                time: "4-6 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "React Official Docs", url: "https://react.dev/" },
                    { name: "freeCodeCamp - React Course for Beginners", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
                ],
                practice: "Rebuild the to-do list or weather app you created with vanilla JavaScript, but this time using React components and state.",
            },
            {
                what: "Package Managers (npm/yarn)",
                why: "To manage the third-party libraries and dependencies in your projects efficiently.",
                time: "1 Week",
                prereqs: "Basic Command Line",
                resources: [
                    { name: "npm Official Docs", url: "https://docs.npmjs.com/" },
                ],
                practice: "Initialize a new project using `npm init` and install a package like `axios` to use for API requests.",
            },
            {
                what: "Styling in React (CSS-in-JS, CSS Modules)",
                why: "To style your components in a modular and scoped way, avoiding global style conflicts.",
                time: "1-2 Weeks",
                prereqs: "React",
                resources: [
                    { name: "React Docs - Styling", url: "https://react.dev/learn/sharing-state-between-components#styling-a-component" },
                    { name: "Styled Components", url: "https://styled-components.com/" },
                ],
                practice: "Create a React component for a button and give it unique styles using CSS Modules or a library like Styled Components.",
            },
            {
                what: "React Router",
                why: "To handle client-side routing and enable navigation between different 'pages' in a single-page application (SPA).",
                time: "1 Week",
                prereqs: "React",
                resources: [
                    { name: "React Router Docs", url: "https://reactrouter.com/en/main" },
                ],
                practice: "Build a simple multi-page application with a home page, an about page, and a contact page using React Router.",
            },
            {
                what: "State Management (Context API, Redux/Zustand)",
                why: "To manage application-wide state that needs to be shared across many components, without passing props down through many levels.",
                time: "2-3 Weeks",
                prereqs: "React",
                resources: [
                    { name: "React Context API", url: "https://react.dev/learn/passing-data-deeply-with-context" },
                    { name: "Redux Toolkit Tutorial", url: "https://redux-toolkit.js.org/tutorials/quick-start" },
                ],
                practice: "Implement a dark/light mode theme switcher for your application using React's Context API.",
            },
            {
                what: "Introduction to TypeScript",
                why: "To add static typing to JavaScript, which helps catch errors early, improves code quality, and makes large codebases more maintainable.",
                time: "2-3 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
                ],
                practice: "Convert a small JavaScript project you've built into TypeScript, adding types to your variables and function parameters.",
            },
            {
                what: "Using Build Tools (Vite/Webpack)",
                why: "To automate the process of bundling your code, optimizing assets, and preparing your application for deployment.",
                time: "1 Week",
                prereqs: "Basic Command Line",
                resources: [
                    { name: "Vite Docs", url: "https://vitejs.dev/guide/" },
                    { name: "Webpack Docs", url: "https://webpack.js.org/guides/getting-started/" },
                ],
                practice: "Create a new React project from scratch using Vite.",
            },
            {
                what: "Web Accessibility (a11y)",
                why: "To ensure that your websites are usable by people with disabilities, which is both a legal requirement in many places and an ethical responsibility.",
                time: "1 Week",
                prereqs: "HTML, CSS",
                resources: [
                    { name: "MDN Web Docs - Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
                ],
                practice: "Use a screen reader (like VoiceOver on Mac or NVDA on Windows) to navigate a website you've built. Identify and fix any accessibility issues.",
            },
        ],
    },
    {
        title: "Advanced Stage: Specialization and Optimization",
        level: "Advanced",
        steps: [
            {
                what: "Advanced React Framework (Next.js)",
                why: "To build production-ready applications with features like server-side rendering (SSR), static site generation (SSG), and file-based routing for better performance and SEO.",
                time: "3-4 Weeks",
                prereqs: "React",
                resources: [
                    { name: "Next.js by Vercel - The React Framework", url: "https://nextjs.org/docs" },
                ],
                practice: "Rebuild one of your React projects using Next.js. Create a blog where the posts are pre-rendered as static pages for fast loading.",
            },
            {
                what: "Testing (Jest, React Testing Library)",
                why: "To write automated tests for your code, ensuring its reliability and preventing regressions as you add new features.",
                time: "2-3 Weeks",
                prereqs: "React",
                resources: [
                    { name: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
                    { name: "React Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/" },
                ],
                practice: "Write unit tests for a simple React component (e.g., a counter) to verify its behavior.",
            },
            {
                what: "Web Performance Optimization",
                why: "To make your websites faster, which improves user experience and SEO rankings.",
                time: "2 Weeks",
                prereqs: "Web Fundamentals",
                resources: [
                    { name: "Google's web.dev - Performance", url: "https://web.dev/learn/performance/" },
                ],
                practice: "Use Google Lighthouse to audit one of your projects. Identify and fix performance bottlenecks, such as optimizing images or using code splitting.",
            },
            {
                what: "Web Security Fundamentals",
                why: "To understand and prevent common web vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).",
                time: "1-2 Weeks",
                prereqs: "Web Fundamentals",
                resources: [
                    { name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
                ],
                practice: "Review a form on one of your projects and ensure you are properly sanitizing user input to prevent XSS attacks.",
            },
            {
                what: "GraphQL",
                why: "An alternative to REST APIs that allows clients to request exactly the data they need, which can be more efficient.",
                time: "2 Weeks",
                prereqs: "API Basics",
                resources: [
                    { name: "Introduction to GraphQL", url: "https://graphql.org/learn/" },
                ],
                practice: "Connect a front-end application to a public GraphQL API (like the SpaceX API) and fetch data.",
            },
            {
                what: "Progressive Web Apps (PWAs)",
                why: "To build web apps that can be 'installed' on a user's device and work offline, providing a more native app-like experience.",
                time: "1-2 Weeks",
                prereqs: "JavaScript",
                resources: [
                    { name: "MDN Web Docs - Progressive web apps (PWAs)", url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" },
                ],
                practice: "Add a service worker and a web app manifest to a simple project to make it a basic PWA.",
            },
            {
                what: "Web Sockets",
                why: "To enable real-time, two-way communication between a client and a server, which is essential for applications like chat apps or live notifications.",
                time: "1 Week",
                prereqs: "JavaScript",
                resources: [
                    { name: "MDN Web Docs - WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
                ],
                practice: "Build a very simple chat application where messages sent from one browser window appear instantly in another.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Personal Portfolio Website", teaches: "HTML structure, CSS styling, and responsive design with Flexbox/Grid.", tech: "HTML, CSS" },
    { level: "Beginner", title: "JavaScript Quiz App", teaches: "DOM manipulation, event handling, and basic JavaScript logic.", tech: "HTML, CSS, JavaScript" },
    { level: "Beginner", title: "Simple Weather App", teaches: "Fetching data from a third-party API, handling asynchronous operations, and displaying data.", tech: "HTML, CSS, JavaScript, API" },
    { level: "Intermediate", title: "React To-Do List", teaches: "Component-based architecture, state management with `useState`, and handling user input.", tech: "React" },
    { level: "Intermediate", title: "Movie Browser with React", teaches: "Fetching data in a React app, client-side routing with React Router, and component composition.", tech: "React, React Router, API" },
    { level: "Intermediate", title: "E-commerce Product Page", teaches: "Complex state management (e.g., shopping cart), passing props, and building a more complex UI.", tech: "React, State Management Library (Context or Redux)" },
    { level: "Intermediate", title: "Markdown Previewer", teaches: "Handling text input, real-time UI updates, and integrating a third-party library (`marked` or `react-markdown`).", tech: "React" },
    { level: "Advanced", title: "Full-Stack Blog with Next.js", teaches: "Server-side rendering (SSR), static site generation (SSG), dynamic routing, and API routes.", tech: "Next.js, React" },
    { level: "Advanced", title: "Real-time Chat Application", teaches: "WebSockets, advanced state management, and handling real-time events.", tech: "React, Node.js (for backend), WebSockets (e.g., Socket.IO)" },
    { level: "Advanced", title: "Kanban Board (Trello Clone)", teaches: "Complex UI state, drag-and-drop functionality, and potentially saving state to a backend.", tech: "React, `react-beautiful-dnd`" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan focused on building a solid foundation and creating a visible project quickly.",
        schedule: [
            "Days 1-7: HTML & CSS Fundamentals. Build a simple static portfolio page.",
            "Days 8-15: JavaScript Fundamentals & DOM Manipulation. Add interactivity to your portfolio.",
            "Days 16-23: React Fundamentals. Rebuild your portfolio using React components.",
            "Days 24-30: Asynchronous React & Deployment. Fetch project data from a public API (like the GitHub API) and deploy your React portfolio to Netlify or Vercel.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach that covers core technologies and gets you ready for junior developer roles.",
        schedule: [
            "Days 1-20: Complete the entire Beginner Stage thoroughly, building all the practice projects.",
            "Days 21-35: Dive deep into React, learning about hooks, routing, and basic state management.",
            "Days 36-50: Learn TypeScript and a CSS framework like Tailwind CSS. Build an intermediate-level project, like the Movie Browser app.",
            "Days 51-60: Focus on web performance, accessibility, and preparing your portfolio for job applications.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages, focusing on understanding the 'why' behind each technology.",
            "Days 31-60: Learn an advanced framework like Next.js and build a full-stack project with it. Dive into testing your components.",
            "Days 61-75: Explore advanced topics like GraphQL, PWAs, or WebSockets by building a small project with one of them.",
            "Days 76-90: Contribute to an open-source project, refine your portfolio, and focus heavily on interview preparation (data structures, algorithms, and behavioral questions).",
        ]
    }
];

const interviewTopics = [
    "Explain the CSS box model.",
    "What's the difference between `let`, `const`, and `var` in JavaScript?",
    "What is the DOM?",
    "Explain the concept of 'hoisting' in JavaScript.",
    "What are closures in JavaScript?",
    "Describe what `async/await` is and how it improves on Promises.",
    "What is the difference between a class component and a functional component in React?",
    "Explain the purpose of the `useEffect` hook in React.",
    "What is prop drilling in React and how can you avoid it?",
    "What are the benefits of using a framework like Next.js over vanilla React?",
];

const mcqs = [
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<li>", "<ul>", "<list>"], answer: "<ul>" },
    { question: "Which CSS property is used to change the text color of an element?", options: ["font-color", "text-color", "color", "font-style"], answer: "color" },
    { question: "In JavaScript, which of the following is NOT a primitive data type?", options: ["String", "Number", "Object", "Boolean"], answer: "Object" },
];

const mistakes = [
    "Focusing too much on learning many frameworks instead of mastering the fundamentals (HTML, CSS, JS).",
    "Not understanding how JavaScript works asynchronously, leading to bugs with API calls.",
    "Writing large, monolithic components in React instead of breaking them down into smaller, reusable ones.",
    "Ignoring CSS fundamentals and relying entirely on a framework like Bootstrap, which can limit your ability to create custom designs.",
    "Not building enough projects. Tutorial-hopping without applying the knowledge is a common trap.",
    "Failing to make projects responsive for mobile devices from the start.",
    "Ignoring web accessibility (a11y) best practices, making your site unusable for many people.",
    "Not using version control (Git) for personal projects, which is a missed opportunity to practice an essential skill.",
    "Mutating state directly in React, which can lead to unpredictable behavior and bugs.",
    "Not learning how to use browser developer tools effectively for debugging."
];

export default function FrontEndDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Front-End Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to building beautiful, interactive, and user-friendly websites and applications.
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
                <CardDescription>Key topics, questions, and resume tips to land a front-end developer job.</CardDescription>
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
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Responsive Design', 'Git', 'REST APIs', 'UI/UX', 'Performance', 'Accessibility', 'Tailwind CSS'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">How to Showcase Projects on GitHub</h3>
                     <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Create a clear `README.md` with a project overview, installation steps, and a live demo link.</li>
                        <li>Include animated GIFs or screenshots to quickly demonstrate what your project does.</li>
                        <li>Ensure your code is well-commented and follows a consistent style.</li>
                        <li>Write a clean and well-organized commit history.</li>
                        <li>Deploy your projects to a live URL using services like Vercel or Netlify.</li>
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
                Building for the web is a creative and rewarding skill. This roadmap provides the structure, but the real learning happens when you start building. Stay curious, practice consistently, and never stop learning. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
