"use client";

// This comment explains that this hook is used for managing component state.
import { useState } from "react";
// Import the Next.js Link component for client-side navigation.
import Link from "next/link";
// Import UI components from the project's design system.
import {
  Card, // A container component with a border and shadow.
  CardContent, // The main content area of a Card.
} from "@/components/ui/card";
// Import the input component for the search bar.
import { Input } from "@/components/ui/input";
// Import the Search icon from the lucide-react library.
import { Search, Code, Library, Briefcase, BrainCircuit } from "lucide-react";
// Import the mock data for learning paths.
import { learningPaths } from "@/lib/learning-paths-data";
// Import a component to protect the route, ensuring only authenticated users can see it.
import { AuthGuard } from "@/components/auth/auth-guard";
// Import Tabs components for the new layout.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


// An array of vibrant background color classes to be applied to the learning path cards.
const cardColors = [
  "bg-amber-400 hover:bg-amber-500 text-amber-950 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 dark:text-amber-100 border-amber-500/20",
  "bg-sky-400 hover:bg-sky-500 text-sky-950 dark:bg-sky-900/40 dark:hover:bg-sky-900/60 dark:text-sky-100 border-sky-500/20",
  "bg-emerald-400 hover:bg-emerald-500 text-emerald-950 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 dark:text-emerald-100 border-emerald-500/20",
  "bg-indigo-400 hover:bg-indigo-500 text-indigo-950 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 dark:text-indigo-100 border-indigo-500/20",
  "bg-rose-400 hover:bg-rose-500 text-rose-950 dark:bg-rose-900/40 dark:hover:bg-rose-900/60 dark:text-rose-100 border-rose-500/20",
];

// A reusable component for rendering a section of learning paths within a Tab.
const Section = ({ paths }: { paths: typeof learningPaths }) => {
  // This is the JSX that will be rendered for the Section component.
  return (
    // This div is a responsive grid that holds the learning path cards.
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
      {/* This line maps over the filtered learning paths to create a card for each one. */}
      {paths.map((path, index) => (
        // This Link component makes the entire card a clickable link to the specific learning path page.
        <Link href={`/learn/${path.id}`} key={path.id}>
          {/* This Card component is the visual container for each learning path. */}
          <Card className={`flex items-center justify-center h-32 transition-all duration-300 shadow-lg hover:shadow-xl border-2 ${cardColors[index % cardColors.length]}`}>
            {/* This is the content area inside the card. */}
            <CardContent className="p-4">
              {/* This heading displays the title of the learning path. */}
              <h2 className="text-lg font-bold text-center leading-tight">{path.title}</h2>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};


// The main component for the Learning Paths page.
export default function LearnPage() {
  // This line initializes a state variable 'searchQuery' to hold the user's search input.
  const [searchQuery, setSearchQuery] = useState("");

  const filterPaths = (category: string) =>
    learningPaths.filter(path =>
      (path.category === category) &&
      (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       path.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  const jobRoles = learningPaths.filter(path =>
    path.category === 'Job Roles' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     path.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const programmingLanguages = learningPaths.filter(path =>
    path.category === 'Programming Languages' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     path.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const frameworks = learningPaths.filter(path =>
    path.category === 'Frameworks & Libraries' &&
    (path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     path.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const jobRoleSubCategories = [
    "Core Software Development",
    "Data & AI",
    "Web & UI",
    "Cybersecurity",
    "DevOps & Cloud",
    "Embedded / IoT / Robotics",
    "Testing & QA",
    "Product & Management",
    "Research & Academia",
    "Miscellaneous / Emerging",
  ];

  const languageSubCategories = [
    "General-Purpose Languages",
    "Web Development Languages",
    "Scripting & Automation",
    "Data Science & Analytics",
    "Systems & Embedded Programming",
    "Functional Programming",
    "Mobile App Development",
    "Blockchain & Smart Contracts",
  ];
  
  const frameworkSubCategories = [
    "Frontend Web Frameworks",
    "Backend Web Frameworks",
    "Mobile Frameworks",
    "Game Development Engines",
    "Data Science & ML Libraries",
    "DevOps & Infrastructure Tools",
    "Cloud SDKs",
    "Blockchain/Smart Contract Tools"
  ];

  const groupedJobRoles = jobRoleSubCategories.map(subCategory => ({
    name: subCategory,
    paths: jobRoles.filter(path => path.subCategory === subCategory)
  }));

  const groupedLanguages = languageSubCategories.map(subCategory => ({
    name: subCategory,
    paths: programmingLanguages.filter(path => path.subCategory === subCategory)
  }));
  
  const groupedFrameworks = frameworkSubCategories.map(subCategory => ({
    name: subCategory,
    paths: frameworks.filter(path => path.subCategory === subCategory)
  }));


  // This line filters the 'learningPaths' array to get only the paths for each category.
  const dsa = filterPaths("Data Structures & Algorithms");

  const allFilteredPaths = [...programmingLanguages, ...frameworks, ...jobRoles, ...dsa];

  // The main JSX structure for the page.
  return (
    // This component ensures that only authenticated users can view this page.
    <AuthGuard>
      {/* This is the main container for the page layout, with vertical spacing. */}
      <div className="flex flex-col h-full gap-4">
        {/* This section contains the page title and description. */}
        <div className="space-y-2">
          {/* The main heading for the page. */}
          <h1 className="text-3xl font-extrabold tracking-tight">Roadmaps</h1>
          {/* A paragraph describing the page's purpose. */}
          <p className="text-muted-foreground text-lg">
            Choose a path and master the skills you need to build the future.
          </p>
        </div>
        {/* This container holds the search input field. */}
        <div className="relative">
          {/* The Search icon positioned inside the input field. */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          {/* The input field for searching learning paths. */}
          <Input
            // The input type is 'search', which can provide a clear button in some browsers.
            type="search"
            // The placeholder text shown when the input is empty.
            placeholder="Search all roadmaps..."
            // The CSS classes for styling the input, including padding to make space for the icon.
            className="pl-10 w-full h-12 text-lg shadow-sm border-2 focus:border-primary transition-all"
            // The value of the input is bound to the 'searchQuery' state variable.
            value={searchQuery}
            // The 'onChange' event handler updates the 'searchQuery' state as the user types.
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* This div allows the main content area to scroll vertically if it overflows. */}
        <div className="flex-1 overflow-y-auto pr-4">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto md:h-14 gap-2 bg-muted/50 p-1.5 rounded-xl border-2">
                <TabsTrigger value="languages" className="py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"><Code className="mr-2"/>Programming</TabsTrigger>
                <TabsTrigger value="frameworks" className="py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"><Library className="mr-2"/>Frameworks</TabsTrigger>
                <TabsTrigger value="roles" className="py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"><Briefcase className="mr-2"/>Job Roles</TabsTrigger>
                <TabsTrigger value="dsa" className="py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"><BrainCircuit className="mr-2"/>DSA</TabsTrigger>
              </TabsList>
              <TabsContent value="languages">
                <div className="pt-6">
                    <Accordion type="multiple" defaultValue={['item-General-Purpose Languages']} className="w-full space-y-4">
                        {groupedLanguages.map(group => (
                            <AccordionItem value={`item-${group.name}`} key={group.name} className="border-2 rounded-xl overflow-hidden shadow-sm">
                                <AccordionTrigger className="p-4 text-lg font-bold hover:no-underline bg-muted/20">
                                    {group.name}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 pt-0">
                                  {group.paths.length > 0 ? (
                                    <Section paths={group.paths} />
                                  ) : (
                                    <div className="text-center py-10">
                                        <p className="text-muted-foreground">No roadmaps available for this category yet.</p>
                                    </div>
                                  )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="frameworks">
                 <div className="pt-6">
                    <Accordion type="multiple" defaultValue={['item-Frontend Web Frameworks']} className="w-full space-y-4">
                        {groupedFrameworks.map(group => (
                            <AccordionItem value={`item-${group.name}`} key={group.name} className="border-2 rounded-xl overflow-hidden shadow-sm">
                                <AccordionTrigger className="p-4 text-lg font-bold hover:no-underline bg-muted/20">
                                    {group.name}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 pt-0">
                                  {group.paths.length > 0 ? (
                                    <Section paths={group.paths} />
                                  ) : (
                                    <div className="text-center py-10">
                                        <p className="text-muted-foreground">No roadmaps available for this category yet.</p>
                                    </div>
                                  )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                 </div>
              </TabsContent>
              <TabsContent value="roles">
                 <div className="pt-6">
                    <Accordion type="multiple" defaultValue={['item-Core Software Development']} className="w-full space-y-4">
                        {groupedJobRoles.map(group => (
                            <AccordionItem value={`item-${group.name}`} key={group.name} className="border-2 rounded-xl overflow-hidden shadow-sm">
                                <AccordionTrigger className="p-4 text-lg font-bold hover:no-underline bg-muted/20">
                                    {group.name}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 pt-0">
                                  {group.paths.length > 0 ? (
                                    <Section paths={group.paths} />
                                  ) : (
                                    <div className="text-center py-10">
                                        <p className="text-muted-foreground">No roadmaps available for this category yet.</p>
                                    </div>
                                  )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                 </div>
              </TabsContent>
              <TabsContent value="dsa">
                 {dsa.length > 0 ? (
                    <Section paths={dsa} />
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-muted-foreground">No roadmaps available for this category yet.</p>
                    </div>
                  )}
              </TabsContent>
            </Tabs>
            
           {/* This block checks if the search returned no results and displays a message if true. */}
           {searchQuery && allFilteredPaths.length === 0 && (
            // A container for the "no results" message, centered and styled.
            <div className="col-span-full text-center py-20">
                {/* The text to display when no learning paths match the search query. */}
                <p className="text-xl font-semibold text-muted-foreground">No roadmaps found for "{searchQuery}".</p>
                <p className="text-muted-foreground mt-2">Try searching for a different term or browse categories.</p>
            </div>
           )}
        </div>
      </div>
    </AuthGuard>
  );
}