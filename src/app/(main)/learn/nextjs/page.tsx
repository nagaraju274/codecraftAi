
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
        title: "Beginner Stage: Foundations",
        level: "Beginner",
        steps: [
            {
                what: "React Fundamentals",
                why: "Next.js is a React framework. A strong understanding of React's core concepts is non-negotiable.",
                time: "1-2 Weeks",
                prereqs: "HTML, CSS, JavaScript (ES6+)",
                resources: [
                    { name: "React Official Docs (New)", url: "https://react.dev/learn" },
                    { name: "freeCodeCamp - React Course", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
                ],
                practice: "Build a simple to-do list or a counter app using only React with useState and props.",
            },
            {
                what: "Introduction to Next.js & App Router",
                why: "To understand the core value proposition of Next.js and its primary routing mechanism.",
                time: "2 Days",
                prereqs: "React Basics",
                resources: [
                    { name: "Next.js Official Docs - From React to Next.js", url: "https://nextjs.org/learn/react-foundations" },
                    { name: "Next.js App Router in 100 Seconds (YouTube)", url: "https://www.youtube.com/watch?v=sUKptmEhgXo" },
                ],
                practice: "Run `npx create-next-app@latest` to initialize a new project. Explore the generated folder structure, especially the `app` directory.",
            },
            {
                what: "Pages and Layouts",
                why: "These are the fundamental building blocks for creating your UI and routing.",
                time: "2-3 Days",
                prereqs: "Next.js Project Setup",
                resources: [
                    { name: "Next.js Docs - Pages and Layouts", url: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" },
                    { name: "Vercel - App Router Explained (YouTube)", url: "https://www.youtube.com/watch?v=S2Y73p2h3x4" },
                ],
                practice: "Create a main `layout.tsx` with a shared header and footer. Create two new pages (e.g., `/about` and `/contact`) with basic content.",
            },
            {
                what: "Routing & Linking",
                why: "To enable client-side navigation between pages for a fast, single-page application feel.",
                time: "1-2 Days",
                prereqs: "Pages and Layouts",
                resources: [
                    { name: "Next.js Docs - Linking and Navigating", url: "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating" },
                ],
                practice: "Use the `<Link>` component in your header to navigate between the home, about, and contact pages you created.",
            },
            {
                what: "Styling: Global CSS & CSS Modules",
                why: "To style your application effectively while avoiding class name collisions.",
                time: "2-3 Days",
                prereqs: "CSS Basics",
                resources: [
                    { name: "Next.js Docs - Styling", url: "https://nextjs.org/docs/app/building-your-application/styling" },
                ],
                practice: "Style your header in `layout.tsx` using global CSS. Create a unique button style for your `/contact` page using CSS Modules.",
            },
            {
                what: "Static Assets: Images & Fonts",
                why: "To learn how to handle static files and leverage Next.js's built-in optimizations.",
                time: "1-2 Days",
                prereqs: "Next.js Project Setup",
                resources: [
                    { name: "Next.js Docs - Image Component", url: "https://nextjs.org/docs/app/building-your-application/optimizing/images" },
                    { name: "Next.js Docs - Fonts", url: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts" },
                ],
                practice: "Add a logo to your header using the `<Image>` component. Use `next/font` to apply a custom Google Font to your entire application.",
            },
            {
                what: "Server Components vs. Client Components",
                why: "This is the most fundamental concept in the App Router. Mastering it is key to building performant apps.",
                time: "3-4 Days",
                prereqs: "React Basics",
                resources: [
                    { name: "React Docs - Server vs. Client Components", url: "https://react.dev/learn/start-a-new-react-project#server-and-client-components" },
                    { name: "Next.js Docs - Server and Client Components", url: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns" },
                ],
                practice: "Create a counter button component. Since it needs `useState`, mark it with `'use client'`. Import and use this Client Component within a Server Component page.",
            },
        ],
    },
    {
        title: "Intermediate Stage: Data & Rendering",
        level: "Intermediate",
        steps: [
            {
                what: "Data Fetching",
                why: "To populate your application with data from external APIs and databases.",
                time: "1 Week",
                prereqs: "Server vs. Client Components",
                resources: [
                    { name: "Next.js Docs - Data Fetching", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching" },
                    { name: "Vercel - Data Fetching with Server Components (YouTube)", url: "https://www.youtube.com/watch?v=j-mfltBCgYk" },
                ],
                practice: "Fetch a list of blog posts from a public API (like JSONPlaceholder) on a Server Component page and display the titles.",
            },
            {
                what: "Rendering Strategies: SSR, SSG, ISR",
                why: "To optimize your app for performance and SEO by choosing the right rendering strategy for each page.",
                time: "1 Week",
                prereqs: "Data Fetching",
                resources: [
                    { name: "Next.js Docs - Rendering", url: "https://nextjs.org/docs/app/building-your-application/rendering" },
                    { name: "Next.js Rendering Explained (YouTube)", url: "https://www.youtube.com/watch?v=gS6dLLa_a5I" },
                ],
                practice: "Create three pages: one that is statically generated (SSG), one that is server-side rendered (SSR), and one that uses Incremental Static Regeneration (ISR) with a revalidation time.",
            },
            {
                what: "Dynamic Routes",
                why: "To create pages programmatically based on data, like individual blog posts or product pages.",
                time: "3-4 Days",
                prereqs: "Data Fetching, Routing",
                resources: [
                    { name: "Next.js Docs - Dynamic Routes", url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes" },
                ],
                practice: "Create a dynamic route `app/posts/[slug]/page.tsx`. On the main posts page, link each title to its corresponding dynamic page.",
            },
            {
                what: "Loading UI & Streaming",
                why: "To improve user experience by showing instant loading states while data is being fetched on the server.",
                time: "2-3 Days",
                prereqs: "Data Fetching",
                resources: [
                    { name: "Next.js Docs - Loading UI and Streaming", url: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming" },
                ],
                practice: "Add a `loading.tsx` file inside your dynamic posts directory to show an instant loading skeleton while a post is being fetched.",
            },
            {
                what: "Error Handling",
                why: "To gracefully handle errors and show meaningful fallback UI to users.",
                time: "2-3 Days",
                prereqs: "Routing",
                resources: [
                    { name: "Next.js Docs - Error Handling", url: "https://nextjs.org/docs/app/building-your-application/routing/error-handling" },
                ],
                practice: "Create an `error.tsx` file in your app directory. Inside a page, throw an error to see the error boundary in action.",
            },
            {
                what: "Route Handlers (API Routes)",
                why: "To build your own backend API endpoints directly within your Next.js application.",
                time: "4-5 Days",
                prereqs: "Node.js/Backend Basics",
                resources: [
                    { name: "Next.js Docs - Route Handlers", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" },
                ],
                practice: "Create a route handler at `app/api/hello/route.ts` that returns a JSON object with a 'message' property.",
            },
            {
                what: "Server Actions",
                why: "A modern way to handle form submissions and data mutations on the server without manually creating API endpoints.",
                time: "3-4 Days",
                prereqs: "React `use server` directive",
                resources: [
                    { name: "Next.js Docs - Server Actions", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations" },
                    { name: "Vercel - Server Actions Explained (YouTube)", url: "https://www.youtube.com/watch?v=O13a-y4t-V0" },
                ],
                practice: "Create a simple form on a page. When submitted, have it call a Server Action that logs the form data to the console.",
            },
        ],
    },
    {
        title: "Advanced Stage: Optimization & Deployment",
        level: "Advanced",
        steps: [
            {
                what: "Authentication",
                why: "To secure your application and manage user-specific data.",
                time: "1 Week",
                prereqs: "Route Handlers / Server Actions",
                resources: [
                    { name: "Next.js Docs - Authentication", url: "https://nextjs.org/docs/app/building-your-application/authentication" },
                    { name: "NextAuth.js Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=1sD-t1n1e-w" },
                ],
                practice: "Integrate NextAuth.js into your application to add Google or GitHub authentication.",
            },
            {
                what: "Metadata API",
                why: "To dynamically manage your page's `<head>` tags for optimal SEO.",
                time: "2-3 Days",
                prereqs: "Dynamic Routes",
                resources: [
                    { name: "Next.js Docs - Metadata", url: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata" },
                ],
                practice: "In your dynamic post page, use the `generateMetadata` function to set the page title and description based on the post's data.",
            },
            {
                what: "Middleware",
                why: "To run code before a request is completed, useful for authentication, redirection, and more.",
                time: "2-3 Days",
                prereqs: "Basic Backend Knowledge",
                resources: [
                    { name: "Next.js Docs - Middleware", url: "https://nextjs.org/docs/app/building-your-application/routing/middleware" },
                ],
                practice: "Create a `middleware.ts` file to redirect users from a temporary URL to a permanent one.",
            },
            {
                what: "Advanced Caching",
                why: "To fine-tune how data is cached, balancing performance with data freshness.",
                time: "3-4 Days",
                prereqs: "Data Fetching",
                resources: [
                    { name: "Next.js Docs - Caching", url: "https://nextjs.org/docs/app/building-your-application/caching" },
                ],
                practice: "Use `unstable_cache` or route segment configs to apply different caching strategies to various parts of your application.",
            },
            {
                what: "Internationalization (i18n)",
                why: "To build applications that support multiple languages.",
                time: "4-5 Days",
                prereqs: "Routing",
                resources: [
                    { name: "Next.js Docs - Internationalization", url: "https://nextjs.org/docs/app/building-your-application/internationalization" },
                ],
                practice: "Set up a basic project with English and Spanish locales, using a library like `next-intl` to manage translations.",
            },
            {
                what: "Deployment & Infrastructure",
                why: "To get your application live on the internet.",
                time: "1 Week",
                prereqs: "All previous concepts",
                resources: [
                    { name: "Next.js Docs - Deployment", url: "https://nextjs.org/docs/deployment" },
                    { name: "Deploying to Vercel (Official Guide)", url: "https://vercel.com/docs/frameworks/nextjs" },
                ],
                practice: "Deploy a Next.js project to Vercel. Set up environment variables for a database or API keys.",
            },
        ],
    },
];

const projects = [
    { level: "Beginner", title: "Personal Portfolio Website", teaches: "Basic routing, styling, static assets (`Image` component), and deployment.", tech: "Next.js, CSS Modules" },
    { level: "Beginner", title: "Simple Blog", teaches: "Static Site Generation (SSG), dynamic routes for posts, and Markdown rendering.", tech: "Next.js, `gray-matter`, `remark`" },
    { level: "Beginner", title: "Recipe Finder", teaches: "Client Components, `useState`, handling user input, and filtering data.", tech: "Next.js, React" },
    { level: "Intermediate", title: "Full-Stack To-Do App", teaches: "Server Actions, database integration (e.g., Vercel Postgres), and data mutations.", tech: "Next.js, Server Actions, Drizzle ORM" },
    { level: "Intermediate", title: "Weather Forecast App", teaches: "Data fetching from a third-party API, Server-Side Rendering (SSR), and error handling.", tech: "Next.js, Route Handlers" },
    { level: "Intermediate", title: "E-commerce Product Showcase", teaches: "Dynamic routes, SSG with `generateStaticParams`, and advanced layouts.", tech: "Next.js" },
    { level: "Intermediate", title: "User Authentication System", teaches: "Authentication patterns, protected routes, Middleware, and database integration.", tech: "Next.js, NextAuth.js" },
    { level: "Advanced", title: "Real-time Chat Application", teaches: "WebSocket integration, state management, and real-time updates.", tech: "Next.js, Socket.io or Pusher" },
    { level: "Advanced", title: "Multi-language Documentation Site", teaches: "Internationalization (i18n), advanced routing, and static generation.", tech: "Next.js, `next-intl`" },
    { level: "Advanced", title: "SaaS Application with Subscriptions", teaches: "User authentication, database management, payment gateway integration (Stripe), and protected API routes.", tech: "Next.js, Stripe, NextAuth.js, Prisma/Drizzle" },
];

const plans = [
    {
        title: "30-Day Fast Track",
        description: "An intensive plan focused on getting you from zero to a deployed, data-driven application.",
        schedule: [
            "Days 1-7: React Fundamentals & Next.js Beginner Stage (Steps 1-4).",
            "Days 8-15: Beginner Stage (Steps 5-7) & start the 'Simple Blog' project.",
            "Days 16-23: Intermediate Stage (Steps 1-3) & implement dynamic routes for the blog.",
            "Days 24-30: Intermediate Stage (Steps 4-7), focusing on Server Actions for a contact form. Deploy the blog to Vercel.",
        ]
    },
    {
        title: "60-Day Standard Plan",
        description: "A balanced approach covering all concepts with more time for practice and deeper understanding.",
        schedule: [
            "Days 1-15: Complete the entire Beginner Stage, including all practice tasks.",
            "Days 16-30: Build two beginner projects (Portfolio and Blog).",
            "Days 31-45: Complete the entire Intermediate Stage, focusing on different rendering strategies and data fetching methods.",
            "Days 46-60: Build an intermediate project (e.g., Full-Stack To-Do App) and deploy it.",
        ]
    },
    {
        title: "90-Day Mastery Plan",
        description: "A comprehensive plan for in-depth knowledge, specialization, and production-readiness.",
        schedule: [
            "Days 1-30: Complete the Beginner and Intermediate stages thoroughly.",
            "Days 31-45: Build a complex intermediate project that involves a database and authentication.",
            "Days 46-60: Cover the Advanced Stage concepts (Auth, Metadata, Middleware).",
            "Days 61-75: Cover remaining Advanced topics (Caching, i18n, Deployment).",
            "Days 76-90: Build an Advanced project (e.g., SaaS app) and prepare for interviews.",
        ]
    }
];

const interviewTopics = [
    "Explain the difference between Server Components and Client Components.",
    "Describe the various rendering methods in Next.js (SSG, SSR, ISR, CSR) and when you would use each.",
    "How does file-based routing work in the App Router?",
    "What are Route Handlers and when are they useful?",
    "What is a Server Action and how does it differ from a traditional API endpoint?",
    "How does the Next.js `<Image>` component optimize images?",
    "Explain the purpose of `layout.tsx`, `page.tsx`, `loading.tsx`, and `error.tsx`.",
    "How do you fetch data in a Server Component?",
    "What is the purpose of Next.js Middleware?",
    "How would you implement a protected route that requires authentication?",
];

const mcqs = [
    { question: "Which file is used to define a UI that is shared across multiple pages?", options: ["page.tsx", "layout.tsx", "template.tsx", "route.ts"], answer: "layout.tsx" },
    { question: "What directive must be at the top of a file to make it a Client Component?", options: ["'use server'", "'use strict'", "'use client'", "'use component'"], answer: "'use client'" },
    { question: "Which data fetching method in Next.js builds the page at request time?", options: ["Static Site Generation (SSG)", "Server-Side Rendering (SSR)", "Client-Side Rendering (CSR)", "Incremental Static Regeneration (ISR)"], answer: "Server-Side Rendering (SSR)" },
];

const mistakes = [
    "Overusing Client Components: Putting `'use client'` on everything, defeating the purpose of Server Components.",
    "Fetching Data on the Client When It Can Be Done on the Server: This leads to slower load times and unnecessary loading spinners.",
    "Misunderstanding Caching: Not knowing how and when Next.js caches data can lead to stale content.",
    "Large `page.tsx` Files: Not breaking down UI into smaller, reusable components.",
    "Ignoring the Image Component: Using the standard `<img>` tag misses out on crucial performance optimizations.",
    "Manual API Routes for Simple Mutations: Using a Route Handler for a simple form submission when a Server Action is a better fit.",
    "Prop-drilling: Not using layouts or context to share state between components efficiently.",
    "Forgetting `'use client'` for Interactive Components: Components with hooks like `useState` or `useEffect` must be Client Components.",
    "Not Using Loading UI: Failing to add `loading.tsx` files makes navigation feel slow for data-heavy pages.",
    "Modifying `next.config.js` Unnecessarily: Relying on the robust defaults before attempting complex custom configurations."
];

export default function NextJsRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Next.js Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to mastering Next.js, the React framework for production web applications.
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
                <CardDescription>Key topics, questions, and resume tips to land a Next.js developer job.</CardDescription>
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
                        {['Next.js', 'React', 'Server Components', 'App Router', 'SSR', 'SSG', 'ISR', 'Vercel', 'Server Actions', 'Route Handlers', 'TypeScript', 'Tailwind CSS'].map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
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
                Next.js is a powerful and rewarding framework to learn. This roadmap is your guide, but the real learning happens when you build. Stay consistent, be curious, and don't be afraid to experiment. Happy coding!
            </p>
        </div>

      </div>
    </AuthGuard>
  );
}
