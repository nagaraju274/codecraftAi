
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
import { Search } from "lucide-react";
// Import the mock data for learning paths.
import { learningPaths } from "@/lib/learning-paths-data";
// Import a component to protect the route, ensuring only authenticated users can see it.
import { AuthGuard } from "@/components/auth/auth-guard";
// Import accordion components for creating collapsible sections.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// An array of background color classes to be applied to the learning path cards for visual variety.
const cardColors = [
  "bg-yellow-200/50 hover:bg-yellow-200/70 dark:bg-yellow-800/20 dark:hover:bg-yellow-800/40",
  "bg-gray-300/50 hover:bg-gray-300/70 dark:bg-gray-700/20 dark:hover:bg-gray-700/40",
  "bg-green-200/50 hover:bg-green-200/70 dark:bg-green-800/20 dark:hover:bg-green-800/40",
  "bg-cyan-200/50 hover:bg-cyan-200/70 dark:bg-cyan-800/20 dark:hover:bg-cyan-800/40",
  "bg-pink-200/50 hover:bg-pink-200/70 dark:bg-pink-800/20 dark:hover:bg-pink-800/40",
];

// A reusable component for rendering a section of learning paths within an accordion.
const Section = ({ title, paths, searchQuery, value }: { title: string, paths: typeof learningPaths, searchQuery: string, value: string }) => {
  // This line filters the learning paths based on the user's search query.
  const filteredPaths = paths.filter(path =>
    // This line checks if the path's title includes the search query.
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // This line checks if the path's description includes the search query.
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If there are no matching paths after filtering and the user has typed a search query, this section will not be rendered.
  if (filteredPaths.length === 0 && searchQuery) {
    // This line returns null to prevent rendering an empty section.
    return null;
  }
  
  // This line checks if there are any paths to display in this section.
  if (filteredPaths.length === 0) {
      // This line returns null if there are no paths, effectively hiding the section.
      return null;
  }

  // This is the JSX that will be rendered for the Section component.
  return (
     // This line defines an item within the accordion.
     <AccordionItem value={value}>
      {/* This line creates the clickable header for the accordion section. */}
      <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline">
        {/* This line displays the title of the section. */}
        {title}
      </AccordionTrigger>
      {/* This line defines the content that is shown when the accordion item is expanded. */}
      <AccordionContent>
        {/* This div is a responsive grid that holds the learning path cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
          {/* This line maps over the filtered learning paths to create a card for each one. */}
          {filteredPaths.map((path, index) => (
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
      </AccordionContent>
    </AccordionItem>
  );
};


// The main component for the Learning Paths page.
export default function LearnPage() {
  // This line initializes a state variable 'searchQuery' to hold the user's search input.
  const [searchQuery, setSearchQuery] = useState("");

  // This line filters the 'learningPaths' array to get only the paths with the category "Programming Languages".
  const languages = learningPaths.filter(p => p.category === "Programming Languages");
  // This line filters for paths with the category "Frameworks & Libraries".
  const frameworks = learningPaths.filter(p => p.category === "Frameworks & Libraries");
  // This line filters for paths with the category "Job Roles".
  const roles = learningPaths.filter(p => p.category === "Job Roles");
  // This line filters for paths with the category "Data Structures & Algorithms".
  const dsa = learningPaths.filter(p => p.category === "Data Structures & Algorithms");

  // This line filters all learning paths based on the current search query, to be used for the "no results" message.
  const allFilteredPaths = learningPaths.filter(path =>
    // This checks if the path's title contains the search query (case-insensitive).
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // This checks if the path's description contains the search query (case-insensitive).
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // The main JSX structure for the page.
  return (
    // This component ensures that only authenticated users can view this page.
    <AuthGuard>
      {/* This is the main container for the page layout, with vertical spacing. */}
      <div className="flex flex-col h-full gap-4">
        {/* This section contains the page title and description. */}
        <div className="space-y-2">
          {/* The main heading for the page. */}
          <h1 className="text-3xl font-bold tracking-tight">Road maps</h1>
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
            placeholder="Search all learning paths..."
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
            {/* The Accordion component allows sections to be collapsed and expanded. */}
            <Accordion 
                // 'type="multiple"' allows more than one section to be open at the same time.
                type="multiple" 
                // 'defaultValue' sets which accordion items are open by default when the page loads.
                defaultValue={["item-1", "item-2", "item-3", "item-4"]} 
                // CSS classes for styling the accordion container.
                className="w-full space-y-4"
            >
                {/* Render the "Programming Languages" section using the reusable Section component. */}
                <Section title="Programming Languages" paths={languages} searchQuery={searchQuery} value="item-1" />
                {/* Render the "Frameworks & Libraries" section. */}
                <Section title="Frameworks & Libraries" paths={frameworks} searchQuery={searchQuery} value="item-2" />
                {/* Render the "Job Roles" section. */}
                <Section title="Job Roles" paths={roles} searchQuery={searchQuery} value="item-3" />
                {/* Render the "Data Structures & Algorithms" section. */}
                <Section title="Data Structures & Algorithms" paths={dsa} searchQuery={searchQuery} value="item-4" />
            </Accordion>
            
           {/* This block checks if the search returned no results and displays a message if true. */}
           {allFilteredPaths.length === 0 && (
            // A container for the "no results" message, centered and styled.
            <div className="col-span-full text-center py-20">
                {/* The text to display when no learning paths match the search query. */}
                <p className="text-muted-foreground">No learning paths found for "{searchQuery}".</p>
            </div>
           )}
        </div>
      </div>
    </AuthGuard>
  );
}
