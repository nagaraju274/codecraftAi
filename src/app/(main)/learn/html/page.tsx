
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
  Globe,
  ShieldCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Terminal,
  FileText,
  Layers,
  Search,
  Monitor,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: HTML Foundations",
    level: "Beginner",
    steps: [
      {
        what: "Introduction to HTML & Setup",
        why: "Understanding what HTML is (HyperText Markup Language) and setting up a basic file with the correct extension (.html) is the very first step.",
        time: "1 Day",
        prereqs: "None",
        resources: [
          { name: "HTML Introduction (W3Schools)", url: "https://www.w3schools.com/html/html_intro.asp" },
          { name: "HTML Full Course for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
        ],
        practice: "Create your first 'index.html' file and open it in a browser. Try writing some text without any tags first.",
      },
      {
        what: "Document Structure & Boilerplate",
        why: "Every HTML page needs a standard set of tags (DOCTYPE, html, head, body) to be recognized correctly by browsers.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "HTML Basic Structure (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document" },
        ],
        practice: "Type out the HTML5 boilerplate manually without using shortcuts to memorize the order of tags.",
      },
      {
        what: "The <head> & Metadata",
        why: "The 'head' section contains crucial information like the page title, character set, and links to external files that aren't visible on the page.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "The head element (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML" },
        ],
        practice: "Create a page with a specific title and add a meta description for search engines.",
      },
      {
        what: "Text Basics: Headings & Paragraphs",
        why: "To structure content logically using h1-h6 tags for hierarchy and p tags for general text.",
        time: "2 Days",
        prereqs: "Step 2",
        resources: [
          { name: "HTML Text Fundamentals", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals" },
        ],
        practice: "Write a short article with one main title, several subtitles, and multiple paragraphs.",
      },
      {
        what: "Lists: Ordered & Unordered",
        why: "Lists are used everywhere in web development, from simple bullet points to navigation menus.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "HTML Lists Guide", url: "https://www.w3schools.com/html/html_lists.asp" },
        ],
        practice: "Create a grocery list (unordered) and a set of instructions for a recipe (ordered).",
      },
      {
        what: "Hyperlinks: Connecting the Web",
        why: "The 'anchor' tag (<a>) is what makes the web 'HyperText'. It allows you to link to other pages and sites.",
        time: "3 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Creating Hyperlinks (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" },
        ],
        practice: "Create a navigation bar with links to external sites like Google and internal links to sections on your own page.",
      },
      {
        what: "Images & Media",
        why: "Visuals are essential for engagement. Learn to use the <img> tag and the critical 'alt' attribute for accessibility.",
        time: "3 Days",
        prereqs: "Step 6",
        resources: [
          { name: "Images in HTML (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" },
        ],
        practice: "Embed an image from a URL and a local file. Add a caption using <figure> and <figcaption>.",
      },
      {
        what: "Tables: Structuring Data",
        why: "To present data in a grid format using table, tr, th, and td tags.",
        time: "3 Days",
        prereqs: "Step 5",
        resources: [
          { name: "HTML Table Basics", url: "https://www.w3schools.com/html/html_tables.asp" },
        ],
        practice: "Build a weekly class schedule or a simple financial statement table.",
      },
      {
        what: "Semantic HTML Elements",
        why: "Modern HTML uses tags like <header>, <nav>, <main>, and <footer> to describe the content's purpose to browsers and screen readers.",
        time: "4 Days",
        prereqs: "Step 2",
        resources: [
          { name: "Semantic HTML (freeCodeCamp)", url: "https://www.freecodecamp.org/news/semantic-html5-guide/" },
        ],
        practice: "Take a simple page you've built and replace generic <div> tags with semantic structural tags.",
      },
      {
        what: "HTML Attributes (id, class, data)",
        why: "Attributes provide additional information about elements and are the primary way CSS and JS target specific parts of the page.",
        time: "2 Days",
        prereqs: "Step 4",
        resources: [
          { name: "HTML Attributes Guide", url: "https://www.w3schools.com/html/html_attributes.asp" },
        ],
        practice: "Add unique IDs to your headings and classes to your paragraphs to prepare for styling.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Forms & Interactivity",
    level: "Intermediate",
    steps: [
      {
        what: "HTML Forms: The Basics",
        why: "Forms are the primary way users interact with your application by sending data.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Your First HTML Form (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form" },
        ],
        practice: "Create a simple contact form with name, email, and message fields.",
      },
      {
        what: "Form Labels & Fieldsets",
        why: "To group related fields and provide accessible labels, which is critical for a professional user experience.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "How to Structure a Web Form", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form" },
        ],
        practice: "Group 'Personal Information' and 'Account Settings' in a registration form using <fieldset>.",
      },
      {
        what: "Select, Textarea & Buttons",
        why: "Master more complex input types like dropdowns, large text areas, and different button types.",
        time: "3 Days",
        prereqs: "Step 11",
        resources: [
          { name: "The Other Form Controls", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls" },
        ],
        practice: "Add a country selector (dropdown) and a multi-line 'About Me' field to your form.",
      },
      {
        what: "Native Form Validation",
        why: "HTML can validate inputs (required, minlength, type='email') without needing JavaScript, providing instant feedback.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Client-side Form Validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" },
        ],
        practice: "Create a form that prevents submission if an email is invalid or a password is too short.",
      },
      {
        what: "Advanced Tables",
        why: "Learn to merge cells (colspan, rowspan) and structure large tables with header, body, and footer sections.",
        time: "3 Days",
        prereqs: "Step 8",
        resources: [
          { name: "HTML Advanced Tables", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced" },
        ],
        practice: "Build a complex spreadsheet-like table with merged cells for categories.",
      },
      {
        what: "Embeds & Iframes",
        why: "To integrate third-party content like YouTube videos, Google Maps, or external widgets into your site.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Other Content Embedding (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies" },
        ],
        practice: "Embed a YouTube video and a custom Google Map on a 'Contact' page.",
      },
      {
        what: "HTML Entities & Special Characters",
        why: "Some characters have special meaning in HTML (like < and >). You need entities to display them correctly.",
        time: "1 Day",
        prereqs: "Step 1",
        resources: [
          { name: "HTML Entities List", url: "https://www.w3schools.com/html/html_entities.asp" },
        ],
        practice: "Write a page that displays snippets of HTML code using entities so they aren't rendered as tags.",
      },
      {
        what: "SVG Basics",
        why: "Scalable Vector Graphics (SVG) are the gold standard for icons and diagrams because they never lose quality when zoomed.",
        time: "4 Days",
        prereqs: "Step 7",
        resources: [
          { name: "SVG Tutorial (W3Schools)", url: "https://www.w3schools.com/graphics/svg_intro.asp" },
        ],
        practice: "Draw a simple circle and a square using inline <svg> code.",
      },
      {
        what: "Favicons & Social Sharing Tags",
        why: "To add small icons to the browser tab and control how your site looks when shared on social media (Open Graph).",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "The Guide to Open Graph", url: "https://ogp.me/" },
        ],
        practice: "Add a favicon to your page and meta tags for a custom preview image on Twitter/Facebook.",
      },
      {
        what: "Connecting CSS & JavaScript",
        why: "Learn how to correctly link external styles and scripts to your HTML to add style and logic.",
        time: "2 Days",
        prereqs: "None",
        resources: [
          { name: "Linking Styles & Scripts", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_css_and_javascript" },
        ],
        practice: "Create a CSS file and a JS file, link them to your HTML, and make a background change on click.",
      },
    ],
  },
  {
    title: "Advanced Stage: Accessibility & SEO",
    level: "Advanced",
    steps: [
      {
        what: "Web Accessibility (A11y) & ARIA",
        why: "Ensuring your site is usable for everyone, including people using screen readers, is a requirement for professional developers.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Accessibility Basics (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility" },
          { name: "W3C ARIA Authoring Practices", url: "https://www.w3.org/WAI/ARIA/apg/" },
        ],
        practice: "Use a screen reader (VoiceOver/NVDA) to navigate your site. Add ARIA labels where needed.",
      },
      {
        what: "SEO Best Practices",
        why: "Master the tags that help search engines understand and rank your content effectively.",
        time: "1 Week",
        prereqs: "Step 9",
        resources: [
          { name: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
        ],
        practice: "Audit a page for heading hierarchy, alt text, and descriptive link text.",
      },
      {
        what: "HTML5 Canvas API",
        why: "To render dynamic graphics and animations directly in the browser using script-driven drawing.",
        time: "2 Weeks",
        prereqs: "JavaScript Basics",
        resources: [
          { name: "Canvas API Tutorial", url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial" },
        ],
        practice: "Build a simple drawing app where users can draw on a canvas with their mouse.",
      },
      {
        what: "Video & Audio API",
        why: "Go beyond simple embeds to build your own custom media players with play/pause/seek controls.",
        time: "1 Week",
        prereqs: "Step 16",
        resources: [
          { name: "Video & Audio API (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs" },
        ],
        practice: "Build a video player with custom buttons instead of the default browser controls.",
      },
      {
        what: "Web Components: <template> & <slot>",
        why: "To create reusable, encapsulated UI components that can be used across different pages.",
        time: "1 Week",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "Web Components Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components" },
        ],
        practice: "Define a reusable 'User Card' template and instantiate it multiple times with different data.",
      },
      {
        what: "Microdata & Structured Data",
        why: "Use attributes like 'itemscope' and 'itemtype' to help search engines display rich snippets (like star ratings) for your site.",
        time: "4 Days",
        prereqs: "Step 22",
        resources: [
          { name: "Introduction to Structured Data", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        ],
        practice: "Add Schema.org markup to a recipe page or a product page.",
      },
      {
        what: "PWA Manifest & Mobile Meta",
        why: "To make your web app feel like a native mobile app when added to a home screen.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "Web App Manifests", url: "https://developer.mozilla.org/en-US/docs/Web/Manifest" },
        ],
        practice: "Create a 'manifest.json' and link it to your HTML to enable 'Add to Home Screen'.",
      },
      {
        what: "Performance: Loading Strategies",
        why: "Optimize your head section with 'preload', 'prefetch', and 'async/defer' for scripts to make your site load faster.",
        time: "1 Week",
        prereqs: "Step 20",
        resources: [
          { name: "Preload, Prefetch and Priorities", url: "https://web.dev/articles/preload-prefetch-priorities" },
        ],
        practice: "Analyze a slow page and add preload tags for critical assets like fonts.",
      },
      {
        what: "Internationalization (i18n) Tags",
        why: "Learn to handle right-to-left languages and specify language codes for a global audience.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "Language Information in HTML", url: "https://www.w3.org/International/questions/qa-html-language-declarations" },
        ],
        practice: "Create a page that supports both English and Arabic, correctly handling text direction.",
      },
      {
        what: "Future of HTML (Emerging Specs)",
        why: "Stay ahead of the curve by learning about experimental features and upcoming standards.",
        time: "Ongoing",
        prereqs: "All Stages",
        resources: [
          { name: "What's New in HTML (Google I/O)", url: "https://web.dev/" },
        ],
        practice: "Experiment with a new browser feature (like the <dialog> element) before it's widely used.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Tribute Page", teaches: "Document structure, headings, paragraphs, and basic linking.", tech: "Basic HTML" },
  { level: "Beginner", title: "Personal Landing Page", teaches: "Semantic tags, images, and navigation menus.", tech: "Semantic HTML" },
  { level: "Beginner", title: "University Survey Form", teaches: "Forms, labels, inputs, and basic validation.", tech: "HTML Forms" },
  { level: "Intermediate", title: "Multi-page Recipe Portal", teaches: "Internal linking, advanced lists, and media embedding.", tech: "HTML5" },
  { level: "Intermediate", title: "Tech Documentation Site", teaches: "Table of contents, sidebars, and code snippets.", tech: "Semantic HTML" },
  { level: "Intermediate", title: "Financial Dashboard Table", teaches: "Complex table structures, rowspan, and colspan.", tech: "HTML Tables" },
  { level: "Intermediate", title: "Product Feature Comparison", teaches: "Comparison tables and SVG icons integration.", tech: "HTML, SVG" },
  { level: "Advanced", title: "Fully Accessible Portfolio", teaches: "ARIA roles, keyboard navigation, and screen reader optimization.", tech: "HTML, A11y" },
  { level: "Advanced", title: "Custom Video Dashboard", teaches: "Video/Audio APIs and custom controls implementation.", tech: "HTML5 APIs" },
  { level: "Advanced", title: "SEO-Optimized Blog Architecture", teaches: "Metadata, Structured data, and semantic hierarchy.", tech: "SEO, HTML5" },
];

const plans = [
  {
    title: "30-Day Fast Track",
    description: "Intensive plan to master the core syntax and build static layouts.",
    schedule: [
      "Days 1-10: Complete the entire Beginner Stage (Syntax, Tags, Lists, Images).",
      "Days 11-20: Master Forms and Tables from the Intermediate Stage.",
      "Days 21-30: Build 3 beginner projects and explore SEO basics.",
    ]
  },
  {
    title: "60-Day Standard Plan",
    description: "A balanced pace for deep understanding and semantic mastery.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage with extra practice.",
      "Days 21-45: Deep dive into Forms, Multimedia, and Embedding.",
      "Days 46-60: Build 2 intermediate projects and learn A11y fundamentals.",
    ]
  },
  {
    title: "90-Day Mastery Plan",
    description: "Comprehensive path for professional readiness and modern API mastery.",
    schedule: [
      "Days 1-30: Complete Beginner & Intermediate fundamentals with 5 projects.",
      "Days 31-60: Advanced Accessibility (A11y), SEO, and Structured Data.",
      "Days 61-90: Modern HTML5 APIs (Canvas, Media) and final advanced portfolio.",
    ]
  }
];

const interviewTopics = [
  "What is the difference between HTML4 and HTML5?",
  "Explain the purpose of Semantic HTML and give 5 examples.",
  "What is the 'alt' attribute and why is it mandatory for professional sites?",
  "How do you optimize a page for SEO using only HTML?",
  "What is the difference between a <div> and a <section>?",
  "Explain the difference between block-level and inline elements.",
  "How do you handle client-side form validation in HTML?",
  "What are ARIA roles and when should they be used?",
  "What is the purpose of the <head> section?",
  "Explain how the <picture> element works for responsive images.",
];

const codingQuestions = [
  { question: "Build a form with an email input, a password input, and a 'remember me' checkbox.", topic: "Forms" },
  { question: "Create a 3x3 table where the first row spans all three columns.", topic: "Tables" },
  { question: "Write the HTML code to embed a YouTube video that starts at a specific time.", topic: "Media" },
  { question: "Create a nested navigation menu using only lists and anchors.", topic: "Structure" },
];

const mcqs = [
  { question: "Which tag is used to specify a standard character encoding for the HTML document?", options: ["<meta charset='UTF-8'>", "<head encoding='UTF-8'>", "<script src='UTF-8'>", "<html lang='en'>"], answer: "<meta charset='UTF-8'>" },
  { question: "Which semantic tag represents content that is indirectly related to the main content?", options: ["<main>", "<aside>", "<article>", "<nav>"], answer: "<aside>" },
  { question: "Which attribute is used to open a link in a new tab?", options: ["target='_new'", "target='_blank'", "href='_blank'", "open='new'"], answer: "target='_blank'" },
];

const mistakes = [
  "Using <div> for everything instead of semantic tags like <header> or <article>.",
  "Forgetting to add 'alt' text to images, making them invisible to blind users.",
  "Using heading tags (h1-h6) purely for their font size instead of structure.",
  "Not using <label> for form inputs, making them hard to click and inaccessible.",
  "Nesting tags incorrectly (e.g., closing a tag inside another that was opened after it).",
  "Using inline styles (style='...') instead of external CSS files.",
  "Using multiple <h1> tags on a single page, which hurts SEO.",
  "Forgetting the <!DOCTYPE html> declaration, which can trigger 'quirks mode'.",
  "Not specifying the 'lang' attribute on the <html> tag.",
  "Using <br> tags to create vertical space between sections instead of using margin.",
];

export default function HtmlRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Layout className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The HTML Mastery Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your journey to mastering the foundation of the web. Learn to build structured, accessible, and high-performance websites.
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
            <CardDescription>Expert guidance to help you land your first junior web developer role.</CardDescription>
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
                    {['HTML5', 'Semantic Tags', 'Web Accessibility (A11y)', 'SEO', 'W3C Standards', 'Form Validation', 'ARIA Roles', 'SVG', 'Metadata', 'Structured Data', 'PWA'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Use a validator tool to show your code is error-free.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight your use of 'Semantic Tags' in project descriptions.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain how you prioritized Accessibility in your code.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Web's Foundation</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            HTML is where every great web application begins. It's simple to start, but mastering its nuances will make your sites more accessible, searchable, and professional. Stay consistent, keep practicing, and remember: The better your structure, the better your site.
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
