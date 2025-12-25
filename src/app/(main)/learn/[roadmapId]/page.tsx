

"use client";

// This comment explains that this hook is used for managing component state.
import { useState } from "react";
// Import Next.js hooks and components for routing and handling "not found" states.
import { notFound, useParams } from "next/navigation";
// Import accordion components for creating collapsible sections.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Import the Button component.
import { Button } from "@/components/ui/button";
// Import card components for styling content containers.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import various icons from the lucide-react library.
import { Link as LinkIcon, CheckSquare, ArrowLeft } from "lucide-react";
// Import the ScrollArea component for creating scrollable containers.
import { ScrollArea } from "@/components/ui/scroll-area";
// Import a component to protect the route, ensuring only authenticated users can see it.
import { AuthGuard } from "@/components/auth/auth-guard";
// Import the mock data for learning paths.
import { learningPaths } from "@/lib/learning-paths-data";
// Import the Next.js Link component for client-side navigation.
import Link from "next/link";

// The main component for displaying a specific roadmap page.
export default function RoadmapPage() {
  // This hook gets the dynamic parameters from the URL.
  const params = useParams();
  // This line extracts the 'roadmapId' from the URL parameters.
  const roadmapId = params.roadmapId as string;
  // This line finds the specific learning path object from the data that matches the current roadmapId.
  const path = learningPaths.find(p => p.id === roadmapId);

  // If no learning path is found for the given ID, this function will render the 404 "Not Found" page.
  if (!path) {
    notFound();
  }

  // The main JSX structure for the page.
  return (
    // This component ensures that only authenticated users can view this page.
    <AuthGuard>
        {/* This div is the main container for the page content, with vertical spacing. */}
        <div className="space-y-2 p-4 md:p-0">
            {/* A "Back" button that links to the main learning paths page. */}
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/learn">
                {/* An arrow icon for the back button. */}
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Road maps
              </Link>
            </Button>
          {/* The main heading of the page, displaying the roadmap title. */}
          <h1 className="text-3xl font-bold tracking-tight">{path.title}</h1>
          {/* A paragraph displaying the roadmap's description. */}
          <p className="text-muted-foreground">
            {path.description}
          </p>
        </div>
        {/* A scrollable area for the main content of the roadmap. */}
        <ScrollArea className="flex-1">
          {/* A container for the roadmap topics with top padding. */}
          <div className="space-y-4 pt-4">
              {/* This div ensures the card takes up the available height. */}
              <div className="h-full">
                {/* A card component that contains the roadmap's topics. */}
                <Card className="hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                  {/* The content area of the card. */}
                  <CardContent className="flex-grow pt-6">
                    {/* The accordion component allows topics to be expanded and collapsed. */}
                    <Accordion type="single" collapsible className="w-full">
                      {/* This line maps over the 'topics' array to render each one. */}
                      {path.topics.map((topic, index) => (
                        // Each topic is an accordion item.
                        <AccordionItem value={`item-${index}`} key={topic.title}>
                          {/* A flex container for the trigger and the "Learn More" button. */}
                          <div className="flex justify-between items-center w-full pr-2">
                              {/* The clickable trigger to open/close the accordion item. */}
                              <AccordionTrigger className="text-base font-medium hover:no-underline py-3 flex-1 text-left">
                                  {/* The title of the topic. */}
                                  <span className="text-sm md:text-base whitespace-nowrap">{topic.title}</span>
                              </AccordionTrigger>
                          </div>
                          {/* The content that is revealed when the accordion item is open. */}
                          <AccordionContent className="text-muted-foreground pt-2 pl-8">
                              {/* A bulleted list for the key points of the topic. */}
                              <ul className="list-disc pl-5 space-y-4">
                                  {/* This line maps over the 'points' array for the current topic. */}
                                  {topic.points.map((point, i) => (
                                      <li key={i}>
                                          {/* The text of the key point. */}
                                          <span className="text-base">{point.text}</span>
                                          {/* This checks if there are any resources for this point. */}
                                          {point.resources && point.resources.length > 0 && (
                                              // A container for the resource links.
                                              <div className="mt-2 space-x-4">
                                                  {/* This line maps over the 'resources' array. */}
                                                  {point.resources.map((resource, j) => (
                                                      // An anchor tag for each resource link, opening in a new tab.
                                                      <a href={resource.url} key={j} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-base inline-flex items-center gap-1">
                                                          {/* A link icon. */}
                                                          <LinkIcon className="h-3 w-3 shrink-0" />
                                                          {/* The name of the resource. */}
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
                        {/* This checks if the roadmap has any practice assignments. */}
                        {path.assignments && path.assignments.length > 0 && (
                            // An accordion item specifically for assignments.
                            <AccordionItem value="assignments">
                                {/* The trigger for the assignments section. */}
                                <AccordionTrigger className="text-base font-medium hover:no-underline py-3 flex-1 text-left text-primary">
                                    {/* A container for the icon and text. */}
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="h-5 w-5" />
                                        <span>Practice Assignments</span>
                                    </div>
                                </AccordionTrigger>
                                {/* The content for the assignments section. */}
                                <AccordionContent className="text-muted-foreground pt-2 pl-8">
                                    {/* A numbered list for the assignments. */}
                                    <ul className="list-decimal pl-5 space-y-4">
                                        {/* This maps over the 'assignments' array. */}
                                        {path.assignments.map((assignment, i) => (
                                            <li key={i}>
                                                {/* The title of the assignment. */}
                                                <h4 className="font-semibold text-foreground">{assignment.title}</h4>
                                                {/* The description of the assignment. */}
                                                <p>{assignment.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
          </div>
        </ScrollArea>
    </AuthGuard>
  );
}
