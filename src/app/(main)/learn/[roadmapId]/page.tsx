

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
// Import alert dialog components for showing modal pop-ups.
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
// Import the Button component.
import { Button } from "@/components/ui/button";
// Import card components for styling content containers.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import various icons from the lucide-react library.
import { Link as LinkIcon, Search, Sparkles, Loader, CheckSquare, ArrowLeft } from "lucide-react";
// Import the ScrollArea component for creating scrollable containers.
import { ScrollArea } from "@/components/ui/scroll-area";
// Import the ReactMarkdown component to render Markdown content as HTML.
import ReactMarkdown from "react-markdown";
// Import the AI flow function for explaining learning topics.
import { explainLearningTopic } from "@/ai/flows";
// Import the custom hook for showing toast notifications.
import { useToast } from "@/hooks/use-toast";
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

  // This state variable controls whether the "Learn More" dialog is open or closed.
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // This state variable stores the Markdown explanation fetched from the AI.
  const [explanation, setExplanation] = useState("");
  // This state variable stores the title for the "Learn More" dialog.
  const [explanationTitle, setExplanationTitle] = useState("");
  // This state variable tracks whether the AI is currently generating an explanation.
  const [isLoading, setIsLoading] = useState(false);
  // This hook provides the 'toast' function to show notifications.
  const { toast } = useToast();

  // If no learning path is found for the given ID, this function will render the 404 "Not Found" page.
  if (!path) {
    notFound();
  }

  // This asynchronous function is called when the user clicks the "Learn More" button for a topic.
  const handleExplainTopic = async (topic: (typeof path.topics)[0]) => {
    // This sets the loading state to true, which can be used to show a spinner.
    setIsLoading(true);
    // This clears any previous explanation content.
    setExplanation("");
    // This sets the title for the dialog to the current topic's title.
    setExplanationTitle(topic.title);
    // This opens the dialog.
    setIsDialogOpen(true);
    try {
      // This line calls the AI flow with the topic title and its key points.
      const result = await explainLearningTopic({
        topicTitle: topic.title,
        points: topic.points.map(p => p.text),
      });
      // This updates the state with the explanation received from the AI.
      setExplanation(result.explanation);
    } catch (e) {
      // If there's an error during the AI call, show a destructive toast notification.
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get explanation from AI.",
      });
      // This closes the dialog if an error occurs.
      setIsDialogOpen(false);
    } finally {
      // This sets the loading state back to false once the process is complete (either success or failure).
      setIsLoading(false);
    }
  };


  // The main JSX structure for the page.
  return (
    // This component ensures that only authenticated users can view this page.
    <AuthGuard>
        {/* This div is the main container for the page content, with vertical spacing. */}
        <div className="p-4 space-y-2">
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
        <ScrollArea className="flex-1 px-4">
          {/* A container for the roadmap topics with top padding. */}
          <div className="space-y-4 pt-4">
              {/* This div ensures the card takes up the available height. */}
              <div className="p-1 h-full">
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
                                  <span>{topic.title}</span>
                              </AccordionTrigger>
                              {/* The button that triggers the AI explanation dialog. */}
                              <Button size="sm" variant="ghost" onClick={() => handleExplainTopic(topic)} className="ml-4">
                                  Explain
                              </Button>
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
         {/* The dialog component for displaying the AI-generated explanation. */}
         <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {/* The content of the dialog. Added responsive classes for better mobile view. */}
          <AlertDialogContent className="max-w-3xl w-full max-h-[90vh]">
            {/* The header of the dialog. */}
            <AlertDialogHeader>
              {/* The title of the dialog, set dynamically. */}
              <AlertDialogTitle>{explanationTitle}</AlertDialogTitle>
              {/* The description area, which contains the scrollable content. */}
              <AlertDialogDescription asChild>
                  {/* A scrollable area for the explanation content, with a max height. */}
                  <ScrollArea className="max-h-[70vh] pr-4">
                    {/* This checks if the AI is currently loading. */}
                    {isLoading ? (
                      // If loading, display a centered spinner icon.
                      <div className="flex items-center justify-center py-8">
                        <Loader className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                      // If not loading, display the Markdown content.
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        {/* The component that renders the Markdown string as formatted HTML. */}
                        <ReactMarkdown>{explanation}</ReactMarkdown>
                      </div>
                    )}
                  </ScrollArea>
              </AlertDialogDescription>
            </AlertDialogHeader>
            {/* The footer of the dialog. */}
            <AlertDialogFooter>
              {/* A "Close" button to dismiss the dialog. */}
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </AuthGuard>
  );
}
