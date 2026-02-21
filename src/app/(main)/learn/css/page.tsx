
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Code,
  Layout,
  Palette,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Monitor,
  Layers,
  Wind,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: CSS Core & Visuals",
    level: "Beginner",
    steps: [
      {
        what: "Introduction & How CSS Works",
        why: "Understanding how CSS connects to HTML (External, Internal, Inline) and how browsers parse styles is fundamental.",
        time: "2 Days",
        prereqs: "Basic HTML",
        resources: [
          { name: "CSS First Steps (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" },
          { name: "CSS Full Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
        ],
        practice: "Create an HTML file and link an external style.css. Change the background color of the body.",
      },
      {
        what: "Selectors & Specificity",
        why: "To target specific elements correctly. Learning Classes, IDs, and the 'Cascade' prevents style conflicts.",
        time: "3 Days",
        prereqs: "Step 1",
        resources: [
          { name: "CSS Selectors (W3Schools)", url: "https://www.w3schools.com/css/css_selectors.asp" },
          { name: "Specificity Calculator", url: "https://specificity.keegan.st/" },
        ],
        practice: "Style a list where only the even items are red using pseudo-classes like :nth-child(even).",
      },
      {
        what: "The Box Model (The Most Important Step)",
        why: "Every element is a box. Content, Padding, Border, and Margin are what define layout and spacing.",
        time: "1 Week",
        prereqs: "Step 2",
        resources: [
          { name: "The Box Model (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" },
          { name: "Box Model Explained (YouTube)", url: "https://www.youtube.com/watch?v=rIO5326FgPE" },
        ],
        practice: "Create a box with a border, inner padding, and outer margin. Use box-sizing: border-box.",
      },
      {
        what: "Colors & Backgrounds",
        why: "To make your sites visually appealing. Master Hex, RGB, HSL, and background images.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "CSS Colors (W3Schools)", url: "https://www.w3schools.com/css/css_colors.asp" },
        ],
        practice: "Set a full-page background image that doesn't repeat and stays centered.",
      },
      {
        what: "Typography & Fonts",
        why: "Readable text is the goal of most websites. Learn font-family, weight, line-height, and Google Fonts.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "Styling Text (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text" },
        ],
        practice: "Import a font from Google Fonts and apply different weights to headings and paragraphs.",
      },
      {
        what: "CSS Units (px, em, rem, %)",
        why: "To build scalable and responsive sites. Understanding relative units like 'rem' is professional standard.",
        time: "4 Days",
        prereqs: "Step 3",
        resources: [
          { name: "CSS Units Explained (YouTube)", url: "https://www.youtube.com/watch?v=_-aDOAMmDHI" },
        ],
        practice: "Build a card layout where font sizes and padding are defined using 'rem' for better scaling.",
      },
      {
        what: "Display Property (Block vs Inline)",
        why: "The display property controls how elements sit next to each other. It's the foundation of layout.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "CSS Display (W3Schools)", url: "https://www.w3schools.com/css/css_display_visibility.asp" },
        ],
        practice: "Convert inline links into a block-level vertical menu using CSS.",
      },
      {
        what: "Positioning (Static, Relative, Absolute, Fixed)",
        why: "To take elements out of the normal document flow for overlays, sticky headers, or precise placement.",
        time: "5 Days",
        prereqs: "Step 7",
        resources: [
          { name: "CSS Position (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position" },
        ],
        practice: "Create a 'Back to Top' button that stays fixed in the bottom right corner of the screen.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Modern Layouts & Responsiveness",
    level: "Intermediate",
    steps: [
      {
        what: "Flexbox: One-Dimensional Layouts",
        why: "The industry standard for aligning items in rows or columns. It solves 90% of alignment issues.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Flexbox Froggy (Game)", url: "https://flexboxfroggy.com/" },
          { name: "A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
        ],
        practice: "Build a navigation bar with a logo on the left and links on the right using 'justify-content: space-between'.",
      },
      {
        what: "CSS Grid: Two-Dimensional Layouts",
        why: "For complex page structures. Grid allows you to control both columns and rows simultaneously.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Grid Garden (Game)", url: "https://cssgridgarden.com/" },
          { name: "A Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
        ],
        practice: "Create a photo gallery grid where images span different numbers of columns and rows.",
      },
      {
        what: "Responsive Design & Media Queries",
        why: "To ensure your website works on everything from an iPhone to a 4K monitor.",
        time: "1 Week",
        prereqs: "Step 9, Step 10",
        resources: [
          { name: "Responsive Design (web.dev)", url: "https://web.dev/learn/design/" },
        ],
        practice: "Build a 3-column layout that collapses into 1 column on mobile screens.",
      },
      {
        what: "Transitions & Transforms",
        why: "To add subtle animations and interactivity (like scaling a button on hover) for a premium feel.",
        time: "4 Days",
        prereqs: "None",
        resources: [
          { name: "CSS Transitions (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" },
        ],
        practice: "Animate a card to lift up and show a shadow when the user hovers over it.",
      },
      {
        what: "Pseudo-classes & Pseudo-elements",
        why: "To style elements based on state (:hover, :focus) or add decorative content (::before, ::after).",
        time: "5 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Pseudo-classes (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" },
        ],
        practice: "Add a custom icon before every list item using the ::before pseudo-element.",
      },
      {
        what: "CSS Variables (Custom Properties)",
        why: "To create maintainable themes. Change one variable to update colors across the entire site.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "CSS Variables Guide", url: "https://www.youtube.com/watch?v=PHO6TBq_auI" },
        ],
        practice: "Create a theme where you can switch between 'Light' and 'Dark' by changing CSS variable values.",
      },
      {
        what: "Advanced Selectors (Combinators)",
        why: "To target elements based on their relationship to others (e.g., adjacent siblings, direct children).",
        time: "3 Days",
        prereqs: "Step 2",
        resources: [
          { name: "CSS Combinators (W3Schools)", url: "https://www.w3schools.com/css/css_combinators.asp" },
        ],
        practice: "Style only the paragraph that immediately follows a heading.",
      },
      {
        what: "Forms & Styling Inputs",
        why: "Default browser inputs look dated. Learning to style forms is a key skill for UI designers.",
        time: "5 Days",
        prereqs: "Step 3, Step 7",
        resources: [
          { name: "Styling Web Forms (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms" },
        ],
        practice: "Create a beautiful login form with custom borders, focus states, and placeholder styles.",
      },
    ],
  },
  {
    title: "Advanced Stage: Architecture & Animations",
    level: "Advanced",
    steps: [
      {
        what: "CSS Animations (@keyframes)",
        why: "To build complex, multi-step animations that run automatically or on trigger.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "CSS Animations (W3Schools)", url: "https://www.w3schools.com/css/css3_animations.asp" },
        ],
        practice: "Build a loading spinner and a bouncing ball animation using @keyframes.",
      },
      {
        what: "CSS Methodologies (BEM, SMACSS)",
        why: "To write scalable CSS for large teams. BEM (Block Element Modifier) is the most popular naming convention.",
        time: "1 Week",
        prereqs: "All previous",
        resources: [
          { name: "BEM Introduction", url: "http://getbem.com/introduction/" },
        ],
        practice: "Refactor a small project's CSS to follow the BEM naming convention.",
      },
      {
        what: "Sass (SCSS Preprocessor)",
        why: "To add features like nesting, mixins, and functions to CSS, making it much more powerful and organized.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Sass Guide (Official)", url: "https://sass-lang.com/guide" },
        ],
        practice: "Set up a project with Sass and use @mixin to create reusable button styles.",
      },
      {
        what: "Tailwind CSS & Utility-First",
        why: "The most popular modern CSS framework. It speeds up development by using utility classes directly in HTML.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Tailwind CSS Course", url: "https://www.youtube.com/watch?v=ft30zcMlFao" },
          { name: "Official Documentation", url: "https://tailwindcss.com/docs" },
        ],
        practice: "Rebuild a landing page using only Tailwind CSS utility classes.",
      },
      {
        what: "Advanced Grid: minmax, clamp & repeat",
        why: "To create truly fluid layouts that adapt without needing hundreds of media queries.",
        time: "1 Week",
        prereqs: "Step 10",
        resources: [
          { name: "Advanced Grid Layouts (YouTube)", url: "https://www.youtube.com/watch?v=705XCEruZfs" },
        ],
        practice: "Build an auto-fitting card grid using 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))'.",
      },
      {
        what: "Container Queries",
        why: "The future of responsive design. Styles react to the size of the parent container rather than the browser viewport.",
        time: "1 Week",
        prereqs: "Step 11",
        resources: [
          { name: "CSS Container Queries (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries" },
        ],
        practice: "Create a component that changes its layout when placed in a sidebar vs. a main content area.",
      },
      {
        what: "CSS Performance & Critical CSS",
        why: "To make your site load instantly. Learn to audit styles and minimize layout shifts.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "CSS Performance (web.dev)", url: "https://web.dev/articles/css-performance" },
        ],
        practice: "Use Google Lighthouse to audit a page and remove unused CSS.",
      },
      {
        what: "CSS-in-JS (Styled Components)",
        why: "Common in React development. It allows you to write CSS scoped to specific components.",
        time: "1 Week",
        prereqs: "React Basics",
        resources: [
          { name: "Styled Components Guide", url: "https://styled-components.com/docs/basics" },
        ],
        practice: "Build a small React app where component styles are defined using Styled Components.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Recipe Card", teaches: "Box model, typography, colors, and border-radius.", tech: "HTML, CSS" },
  { level: "Beginner", title: "Personal Bio Page", teaches: "Headings, background images, and basic layout positioning.", tech: "HTML, CSS" },
  { level: "Beginner", title: "Survey Form", teaches: "Form inputs, labels, button styling, and focus states.", tech: "HTML, CSS" },
  { level: "Intermediate", title: "Business Landing Page", teaches: "Flexbox, Grid, navigation bars, and responsive media queries.", tech: "HTML, CSS" },
  { level: "Intermediate", title: "Animated Image Gallery", teaches: "Grid layout, transitions, hover effects, and object-fit.", tech: "HTML, CSS" },
  { level: "Intermediate", title: "Pricing Table", teaches: "Flexbox alignment, shadows, hover state transitions, and badges.", tech: "HTML, CSS" },
  { level: "Intermediate", title: "Glassmorphism UI Kit", teaches: "Backdrop-filter, transparency, glass effects, and modern CSS variables.", tech: "HTML, CSS" },
  { level: "Advanced", title: "Fully Animated SaaS Hero", teaches: "Keyframe animations, complex transforms, and SVG styling.", tech: "CSS, SVG" },
  { level: "Advanced", title: "Next.js Dashboard (Tailwind)", teaches: "Utility-first CSS, dark mode support, component architecture.", tech: "Next.js, Tailwind CSS" },
  { level: "Advanced", title: "CSS-Only Tooltip Library", teaches: "Pseudo-elements (::before/::after), positioning, and advanced selectors.", tech: "CSS" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan to get productive with modern CSS layouts and Tailwind.",
    schedule: [
      "Days 1-7: Core Syntax, Box Model, and Selectors.",
      "Days 8-15: Master Flexbox and Responsive Design.",
      "Days 16-23: Learn CSS Grid and basic Transitions.",
      "Days 24-30: Intro to Tailwind CSS and build a Landing Page.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "Balanced path for solid visual foundations and architectural mastery.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage + 3 projects.",
      "Days 21-45: Deep dive into Grid, Flexbox, Variables, and Forms.",
      "Days 46-60: Learn BEM methodology and Sass basics.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional UI engineering and performance optimization.",
    schedule: [
      "Days 1-30: Fundamentals and Intermediate Layouts.",
      "Days 31-60: Advanced Animations, SVG, and modern Frameworks.",
      "Days 61-90: Performance auditing, Container Queries, and CSS-in-JS.",
    ]
  }
];

const interviewTopics = [
  "Explain the CSS Box Model in detail.",
  "What is the difference between 'em' and 'rem'?",
  "How does Specificity work? Rank ID, Class, and Element selectors.",
  "Explain Flexbox vs. CSS Grid. When would you use one over the other?",
  "What are pseudo-elements and pseudo-classes? Give examples.",
  "How do you optimize a website for mobile responsiveness?",
  "Explain the 'Cascade' in Cascading Style Sheets.",
  "What is BEM and why is it useful?",
  "How do you center an element perfectly in its container? (Flex vs Grid).",
  "Explain the 'z-index' property and stacking contexts.",
];

const codingQuestions = [
  { question: "Center a <div> vertically and horizontally using Flexbox.", topic: "Layout" },
  { question: "Create a 3-column layout where the middle column is fixed and the others are fluid.", topic: "Grid" },
  { question: "Build a button that changes color over 0.5s when hovered.", topic: "Transitions" },
  { question: "Write a media query that applies styles only to devices between 768px and 1024px.", topic: "Responsive" },
];

const mcqs = [
  { question: "Which property is used to change the space between characters?", options: ["letter-spacing", "line-height", "word-spacing", "text-indent"], answer: "letter-spacing" },
  { question: "What is the default value of the 'position' property?", options: ["absolute", "relative", "fixed", "static"], answer: "static" },
  { question: "Which unit is relative to the font-size of the root element?", options: ["em", "rem", "vh", "vw"], answer: "rem" },
];

const mistakes = [
  "Not using 'box-sizing: border-box', leading to unexpected box widths.",
  "Hardcoding widths in 'px' instead of using relative units or percentages.",
  "Ignoring the Cascade and using !important to fix specificity issues.",
  "Not using a naming convention (like BEM), causing 'CSS Spaghetti'.",
  "Over-nesting in Sass, resulting in bloated and slow CSS files.",
  "Using ID selectors for styling instead of classes.",
  "Forgetting to check browser compatibility for new features (like clamp).",
  "Relying too much on frameworks without understanding the underlying CSS.",
  "Not optimizing images, leading to slow page loads and layout shifts.",
  "Ignoring Accessibility (colors with low contrast, no focus states).",
];

export default function CssRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Palette className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The CSS Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the visual language of the web. Learn to build beautiful, responsive, and high-performance user interfaces.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Apply your knowledge with these hands-on projects designed for your portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                <CardHeader className="pb-3">
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                    <Terminal className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Expert guidance to help you land your dream UI/Front-End role.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {interviewTopics.map(topic => (
                    <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Live Coding Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                      <p className="text-sm leading-relaxed">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'Sass/SCSS', 'Tailwind CSS', 'BEM', 'Animations', 'Variables', 'CSS-in-JS', 'Accessibility', 'PostCSS'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Wind className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use high-quality GIF recordings of hover states and animations.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain your architectural choices (e.g., 'Why I chose Tailwind').</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include 'before and after' optimization results.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <Lightbulb className="h-6 w-6"/>
              10 Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Paint the Web with Code</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            CSS is where logic meets art. Mastering it allows you to bring any vision to life. It's easy to learn but takes a lifetime to perfect. Stay consistent, keep experimenting with layouts, and always build with the user's experience in mind. You're on your way to becoming a UI expert!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
