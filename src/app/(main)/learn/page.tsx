import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const learningPaths = [
  {
    title: "Beginner's Guide to Python",
    description: "These tutorials will provide you with a solid foundation in Python and prepare you for your career goals.",
    topics: [
      "Introduction",
      "Python Fundamentals",
      "Python Flow Control",
      "Python Data Types",
      "Python Functions",
      "Python Files",
      "Python Exception Handling",
      "Python Object and Class",
    ],
  },
  {
    title: "JavaScript for Beginners",
    description: "Start your web development journey by mastering the fundamentals of JavaScript, the language of the web.",
    topics: [
        "Introduction to JavaScript",
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Flow (If/Else, Loops)",
        "Functions",
        "Objects and Arrays",
        "DOM Manipulation",
        "Asynchronous JavaScript (Promises, async/await)",
    ],
  },
  {
    title: "Web Development Foundations",
    description: "Learn the core technologies for building modern websites and web applications.",
    topics: [
        "HTML5: Structuring the Web",
        "CSS3: Styling and Layouts",
        "Responsive Design with Flexbox and Grid",
        "Introduction to React",
        "Components, Props, and State",
        "React Hooks",
        "Building a Simple Web App",
    ],
  },
];


export default function LearnPage() {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h1 className="text-3xl font-bold">Learning Paths</h1>
        <p className="text-muted-foreground">
          Our structured learning paths will help you master new skills.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {learningPaths.map((path) => (
          <Card key={path.title}>
            <CardHeader>
              <CardTitle>{path.title}</CardTitle>
              <p className="text-muted-foreground pt-2">{path.description}</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {path.topics.map((topic, index) => (
                  <AccordionItem value={`item-${index}`} key={topic}>
                    <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:hidden">
                       <div className="flex items-center gap-2">
                        <ChevronRight className="h-5 w-5" />
                        <span>{topic}</span>
                       </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Detailed lesson for "{topic}" is coming soon!
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
