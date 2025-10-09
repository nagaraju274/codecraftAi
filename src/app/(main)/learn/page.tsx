
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


// An array of background color classes to be applied to the learning path cards for visual variety.
const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70 dark:bg-yellow-800/20 dark:hover:bg-yellow-800/40",
  "bg-gray-300/50 hover:bg-gray-300/70 dark:bg-gray-700/20 dark:hover:bg-gray-700/40",
  "bg-green-200/50 hover:bg-green-200/70 dark:bg-green-800/20 dark:hover:bg-green-800/40",
  "bg-cyan-200/50 hover:bg-cyan-200/70 dark:bg-cyan-800/20 dark:hover:bg-cyan-800/40",
  "bg-pink-200/50 hover:bg-pink-200/70 dark:bg-pink-800/20 dark:hover:bg-pink-800/40",
];

// A reusable component for rendering a section of learning paths within a Tab.
const Section = ({ paths }: { paths: typeof learningPaths }) => {
  // If there are no matching paths, this section will not be rendered.
  if (paths.length === 0) {
      return (
          <div className="text-center py-20">
              <p className="text-muted-foreground">No roadmaps found for this category.</p>
          </div>
      );
  }

  // This is the JSX that will be rendered for the Section component.
  return (
    // This div is a responsive grid that holds the learning path cards.
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
      {/* This line maps over the filtered learning paths to create a card for each one. */}
      {paths.map((path, index) => (
        // This Link component makes the entire card a clickable link to the specific learning path page.
        <Link href={`/learn/${path.id}`} key={path.id}>
          {/* This Card component is the visual container for each learning path. */}
          <Card className={`flex items-center justify-center h-32 transition-all duration-300 ${cardColors[index % cardColors.length]}`}>
            {/* This is the content area inside the card. */}
            <CardContent className="p-4">
              {/* This heading displays the title of the learning path. */}
              <h2 className="text-lg font-semibold text-foreground text-center">{path.title}</h2>
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

  const groupedJobRoles = jobRoleSubCategories.map(subCategory => ({
    name: subCategory,
    paths: jobRoles.filter(path => path.subCategory === subCategory)
  })).filter(group => group.paths.length > 0);


  // This line filters the 'learningPaths' array to get only the paths for each category.
  const languages = filterPaths("Programming Languages");
  const frameworks = filterPaths("Frameworks & Libraries");
  const dsa = filterPaths("Data Structures & Algorithms");

  const allFilteredPaths = [...languages, ...frameworks, ...jobRoles, ...dsa];

  // The main JSX structure for the page.
  return (
    // This component ensures that only authenticated users can view this page.
    <AuthGuard>
      {/* This is the main container for the page layout, with vertical spacing. */}
      <div className="flex flex-col h-full gap-4">
        {/* This section contains the page title and description. */}
        <div className="space-y-2">
          {/* The main heading for the page. */}
          <h1 className="text-3xl font-bold tracking-tight">Roadmap</h1>
          {/* A paragraph describing the page's purpose. */}
          <p className="text-muted-foreground">
            Our structured learning paths will help you master new skills and advance your career.
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
            className="pl-10 w-full"
            // The value of the input is bound to the 'searchQuery' state variable.
            value={searchQuery}
            // The 'onChange' event handler updates the 'searchQuery' state as the user types.
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* This div allows the main content area to scroll vertically if it overflows. */}
        <div className="flex-1 overflow-y-auto pr-4">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto md:h-12">
                <TabsTrigger value="languages" className="py-2.5"><Code className="mr-2"/>Programming Languages</TabsTrigger>
                <TabsTrigger value="frameworks" className="py-2.5"><Library className="mr-2"/>Frameworks & Libraries</TabsTrigger>
                <TabsTrigger value="roles" className="py-2.5"><Briefcase className="mr-2"/>Job Roles</TabsTrigger>
                <TabsTrigger value="dsa" className="py-2.5"><BrainCircuit className="mr-2"/>DSA</TabsTrigger>
              </TabsList>
              <TabsContent value="languages">
                <Section paths={languages} />
              </TabsContent>
              <TabsContent value="frameworks">
                 <Section paths={frameworks} />
              </TabsContent>
              <TabsContent value="roles">
                 <div className="pt-6">
                    {jobRoles.length > 0 ? (
                        <Accordion type="multiple" defaultValue={groupedJobRoles.length > 0 ? [`item-${groupedJobRoles[0].name}`] : []} className="w-full space-y-4">
                            {jobRoleSubCategories.map(groupName => {
                                const group = groupedJobRoles.find(g => g.name === groupName);
                                if (!group) return null; // Don't render if no roadmaps match search

                                return (
                                    <AccordionItem value={`item-${group.name}`} key={group.name} className="border rounded-lg">
                                        <AccordionTrigger className="p-4 text-lg font-semibold hover:no-underline">
                                            {group.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="p-4 pt-0">
                                            <Section paths={group.paths} />
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    ) : (
                         <div className="text-center py-20">
                            <p className="text-muted-foreground">No roadmaps found for this category.</p>
                        </div>
                    )}
                 </div>
              </TabsContent>
              <TabsContent value="dsa">
                 <Section paths={dsa} />
              </TabsContent>
            </Tabs>
            
           {/* This block checks if the search returned no results and displays a message if true. */}
           {allFilteredPaths.length === 0 && searchQuery && (
            // A container for the "no results" message, centered and styled.
            <div className="col-span-full text-center py-20">
                {/* The text to display when no learning paths match the search query. */}
                <p className="text-muted-foreground">No roadmaps found for "{searchQuery}".</p>
            </div>
           )}
        </div>
      </div>
    </AuthGuard>
  );
}
