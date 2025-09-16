
"use client";

// Import all necessary components and libraries from React and other modules.
import * as React from "react"; // Import the main React library for creating components.

// Import UI components from the project's design system.
import {
  Card, // A container component with a border and shadow.
  CardContent, // The main content area of a Card.
  CardDescription, // A description text component for a Card.
  CardHeader, // The header section of a Card.
  CardTitle, // The title text component for a Card.
  CardFooter, // The footer section of a Card.
} from "@/components/ui/card"; // Path to the card components.
import {
  Accordion, // The main container for an accordion.
  AccordionContent, // The content that expands/collapses within an accordion item.
  AccordionItem, // A single item within the accordion.
  AccordionTrigger, // The button that toggles the accordion item.
} from "@/components/ui/accordion"; // Path to the accordion components.
import {
  Carousel, // The main container for a carousel/slider.
  CarouselContent, // The content area that holds the carousel items.
  CarouselItem, // A single item within the carousel.
  CarouselNext, // The button to navigate to the next item.
  CarouselPrevious, // The button to navigate to the previous item.
} from "@/components/ui/carousel"; // Path to the carousel components.
import { Button } from "@/components/ui/button"; // A standard button component.
import { AuthGuard } from "@/components/auth/auth-guard"; // A component to protect the route, ensuring only authenticated users can see it.
import { ArrowRight, Book, BrainCircuit, Bot, FileText, Medal, Video, Target } from "lucide-react"; // Import specific icons from the lucide-react library.
import Link from "next/link"; // Import the Next.js Link component for client-side navigation.
import { learningPaths } from "@/lib/learning-paths-data"; // Import mock data for learning paths.
import { successStories } from "@/lib/success-stories-data"; // Import mock data for success stories.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Import components for displaying user avatars.

// Filter the learningPaths data to get only the paths related to "On-Campus Service-Based" companies.
const onCampusServicePaths = learningPaths.filter(p => p.category === 'On-Campus Service-Based');
// Filter the learningPaths data to get only the paths related to "On-Campus Product-Based" companies.
const onCampusProductPaths = learningPaths.filter(p => p.category === 'On-Campus Product-Based');


// Define a reusable functional component named FeatureCard.
const FeatureCard = ({ title, icon, href = "#" } : { title: string, icon: React.ElementType, href?: string }) => (
    // The main card component with hover effects for better user experience.
    <Card className="hover:shadow-md transition-shadow">
        {/* Card header section containing the icon and title. */}
        <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
            {/* A styled container for the icon. */}
            <div className="bg-primary/10 p-2 rounded-full">
                {/* Dynamically create an icon element using the 'icon' prop. */}
                {React.createElement(icon, { className: "h-6 w-6 text-primary" })}
            </div>
            {/* The title of the feature card. */}
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        {/* Card content section containing the link to view more. */}
        <CardContent>
             
                {/* A link styled as a button. */}
                <Button asChild variant="link" className="p-0">
                    {/* The Next.js Link component for client-side navigation. */}
                    <Link href={href}>
                        {/* Text for the link. */}
                        View Content 
                        {/* An arrow icon to indicate navigation. */}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
             
        </CardContent>
    </Card>
);

// Define the main component for the Placement Preparation page.
export default function PlacementPage() {
  // Return the JSX structure of the component.
  return (
    // Use the AuthGuard to protect this page from unauthenticated access.
    <AuthGuard>
      {/* The main container for the page with vertical spacing between sections. */}
      <div className="container mx-auto py-10 space-y-12">
        {/* The main header section of the page. */}
        <header className="text-center">
          {/* The main heading of the page. */}
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Placement Preparation
          </h1>
          {/* A paragraph describing the purpose of the page. */}
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to cracking interviews for both service-based and product-based companies, on-campus and off-campus.
          </p>
        </header>

        {/* A prominent card for the placement assessment feature. */}
        <Card className="bg-primary/10 text-center">
            {/* Header for the assessment card. */}
            <CardHeader>
                {/* Title for the assessment feature, including an icon. */}
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    {/* Target icon for visual representation. */}
                    <Target className="h-8 w-8 text-primary"/>
                    {/* Title text. */}
                    Job Ready Placement Assessment
                </CardTitle>
                {/* Description for the assessment feature. */}
                <CardDescription className="text-base">
                    Test your skills across aptitude, reasoning, and technical knowledge to see where you stand.
                </CardDescription>
            </CardHeader>
            {/* Content section of the assessment card. */}
            <CardContent>
                {/* A large button that links to the assessment page. */}
                <Button asChild size="lg">
                    {/* Next.js Link for navigation. */}
                    <Link href="/placement/assessment">
                        {/* Button text. */}
                        Start Assessment 
                        {/* Arrow icon to indicate action. */}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

        {/* An accordion component to organize the on-campus and off-campus sections. */}
        <Accordion type="multiple" defaultValue={["item-1"]} className="w-full space-y-8">
            {/* The first accordion item for "On-Campus Placements". */}
            <AccordionItem value="item-1">
                 {/* The trigger button to expand/collapse the "On-Campus Placements" section. */}
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    On-Campus Placements
                </AccordionTrigger>
                {/* The content that appears when the accordion item is expanded. */}
                <AccordionContent className="pt-6">
                    {/* A grid layout to hold the cards for service-based and product-based companies. */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* A card dedicated to service-based company preparation. */}
                        <Card className="flex flex-col">
                            {/* Header for the service-based card. */}
                            <CardHeader>
                                {/* Title of the card. */}
                                <CardTitle>Service-Based Companies</CardTitle>
                                {/* Description of the preparation path. */}
                                <CardDescription>Build essential skills in aptitude, problem-solving, and communication, along with strong technical fundamentals in programming, databases, and computer networks.</CardDescription>
                            </CardHeader>
                            {/* Content section of the service-based card. */}
                            <CardContent className="space-y-4 flex-grow">
                                {/* Map over the service-based learning paths and render a FeatureCard for each. */}
                                {onCampusServicePaths.map(path => (
                                    <FeatureCard key={path.id} title={path.title} icon={Book} href={`/learn/${path.id}`} />
                                ))}
                                {/* A FeatureCard for Mock Tests specific to service-based companies. */}
                                <FeatureCard title="Mock Tests" icon={BrainCircuit} href="/placement/mock-tests?type=service" />
                                {/* A FeatureCard for Company-Wise Questions specific to service-based companies. */}
                                <FeatureCard title="Company-Wise Questions" icon={Bot} href="/placement/company-questions?type=service" />
                                {/* A FeatureCard for Interview Prep Materials specific to service-based companies. */}
                                <FeatureCard title="Interview Prep Materials" icon={FileText} href="/placement/interview-prep?type=service" />
                            </CardContent>
                        </Card>
                         {/* A card dedicated to product-based company preparation. */}
                         <Card className="flex flex-col">
                            {/* Header for the product-based card. */}
                            <CardHeader>
                                {/* Title of the card. */}
                                <CardTitle>Product-Based Companies</CardTitle>
                                {/* Description of the preparation path. */}
                                <CardDescription>Develop advanced skills in data structures, algorithms, and system design to excel in rigorous technical interviews at top product companies.</CardDescription>
                            </CardHeader>
                            {/* Content section of the product-based card. */}
                            <CardContent className="space-y-4 flex-grow">
                                {/* Map over the product-based learning paths and render a FeatureCard for each. */}
                                {onCampusProductPaths.map(path => (
                                    <FeatureCard key={path.id} title={path.title} icon={Book} href={`/learn/${path.id}`} />
                                ))}
                                {/* A FeatureCard for Mock Tests specific to product-based companies. */}
                                <FeatureCard title="Mock Tests" icon={BrainCircuit} href="/placement/mock-tests?type=product" />
                                {/* A FeatureCard for Company-Wise Questions specific to product-based companies. */}
                                <FeatureCard title="Company-Wise Questions" icon={Bot} href="/placement/company-questions?type=product" />
                                {/* A FeatureCard for System Design Basics. */}
                                <FeatureCard title="System Design Basics" icon={FileText} href="/placement/system-design" />
                            </CardContent>
                        </Card>
                    </div>
                </AccordionContent>
            </AccordionItem>
            
            {/* The second accordion item for "Off-Campus Placements". */}
            <AccordionItem value="item-2">
                 {/* The trigger button to expand/collapse the "Off-Campus Placements" section. */}
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    Off-Campus Placements
                </AccordionTrigger>
                {/* The content that appears when the accordion item is expanded. */}
                <AccordionContent className="pt-6">
                     {/* A grid layout to hold the cards for service-based and product-based companies. */}
                     <div className="grid lg:grid-cols-2 gap-8">
                        {/* A card dedicated to off-campus service-based company preparation. */}
                        <Card className="flex flex-col">
                            {/* Header for the card. */}
                            <CardHeader>
                                {/* Title of the card. */}
                                <CardTitle>Service-Based Companies</CardTitle>
                                {/* Description of the preparation path, emphasizing off-campus specifics. */}
                                <CardDescription>Sharpen your resume-building and communication skills, and master the aptitude tests required for job portals and referral drives.</CardDescription>
                            </CardHeader>
                            {/* Content section of the card. */}
                            <CardContent className="space-y-4 flex-grow">
                                {/* A FeatureCard for the Resume Building Guide, tailored for service-based roles. */}
                                <FeatureCard title="Resume Building Guide" icon={FileText} href="/placement/resume-builder-guide?type=service" />
                                {/* A FeatureCard for Aptitude & Reasoning Practice. */}
                                <FeatureCard title="Aptitude & Reasoning Practice" icon={BrainCircuit} href="/placement/mock-tests?type=service" />
                                {/* A FeatureCard for Common HR & Technical Questions. */}
                                <FeatureCard title="Common HR & Technical Questions" icon={Bot} href="/placement/company-questions?type=service" />
                            </CardContent>
                        </Card>
                         {/* A card dedicated to off-campus product-based company preparation. */}
                         <Card className="flex flex-col">
                            {/* Header for the card. */}
                            <CardHeader>
                                {/* Title of the card. */}
                                <CardTitle>Product-Based Companies</CardTitle>
                                {/* Description of the preparation path, emphasizing advanced skills for off-campus roles. */}
                                <CardDescription>Build advanced DSA, system design, and company-specific problem-solving skills for competitive hiring challenges and referrals.</CardDescription>
                            </CardHeader>
                            {/* Content section of the card. */}
                            <CardContent className="space-y-4 flex-grow">
                                {/* A FeatureCard for the Resume Building Guide, tailored for product-based roles. */}
                                <FeatureCard title="Resume Building Guide" icon={FileText} href="/placement/resume-builder-guide?type=product" />
                                {/* A FeatureCard for Advanced DSA Problems. */}
                                <FeatureCard title="Advanced DSA Problems" icon={Book} href="/dsa-problems" />
                                {/* A FeatureCard for Company-Specific Question Banks. */}
                                <FeatureCard title="Company-Specific Question Banks" icon={Bot} href="/placement/company-questions?type=product" />
                                {/* A FeatureCard for a deeper dive into System Design. */}
                                <FeatureCard title="System Design Deep Dive" icon={FileText} href="/placement/system-design" />
                                {/* A FeatureCard for Advanced Mock Tests. */}
                                <FeatureCard title="Advanced Mock Tests" icon={BrainCircuit} href="/placement/mock-tests?type=product" />
                            </CardContent>
                        </Card>
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* The third accordion item for "Success Stories". */}
            <AccordionItem value="item-3">
                 {/* The trigger button to expand/collapse the "Success Stories" section. */}
                 <AccordionTrigger className="text-2xl font-bold tracking-tight mb-4 hover:no-underline py-4 px-6 bg-muted rounded-lg">
                    Success Stories
                </AccordionTrigger>
                {/* The content that appears when the accordion item is expanded. */}
                <AccordionContent className="pt-6">
                    {/* A carousel component to display success stories. */}
                    <Carousel
                        // Options for the carousel behavior.
                        opts={{
                            align: "start", // Align items to the start.
                        }}
                        className="w-full" // Styling for the carousel container.
                        >
                        {/* The content area of the carousel that holds the items. */}
                        <CarouselContent>
                            {/* Map over the successStories data array. */}
                            {successStories.map((story) => (
                            // Each item in the carousel.
                            <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
                                {/* Padding for the item. */}
                                <div className="p-1">
                                {/* A card to display the individual success story. */}
                                <Card className="h-full">
                                    {/* Content section of the story card. */}
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                         {/* Avatar for the person in the story. */}
                                         <Avatar className="h-20 w-20 mb-4">
                                            {/* The image for the avatar. */}
                                            <AvatarImage src={story.avatar} alt={`${story.name}'s avatar`} data-ai-hint="person portrait" />
                                            {/* A fallback display if the image fails to load. */}
                                            <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        {/* The name of the person. */}
                                        <h3 className="font-semibold text-lg">{story.name}</h3>
                                        {/* The person's role and company. */}
                                        <p className="text-sm text-primary">{story.role} at {story.company}</p>
                                        {/* A blockquote for the testimonial. */}
                                        <blockquote className="mt-4 border-l-2 pl-4 italic text-muted-foreground">
                                           {story.quote}
                                        </blockquote>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* The 'Previous' button for the carousel. */}
                        <CarouselPrevious />
                        {/* The 'Next' button for the carousel. */}
                        <CarouselNext />
                    </Carousel>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

      </div>
    </AuthGuard>
  );
}
