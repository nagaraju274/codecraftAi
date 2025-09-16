// This directive marks this component as a Client Component, which means it will be rendered on the client-side.
"use client";

// Import UI components from the project's design system.
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Import icons from the lucide-react library.
import { MoreHorizontal, PlusCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge";

// Mock data for learning roadmaps.
const roadmaps = [
    { id: "1", title: "Web Development Foundations", topics: 7, status: "Published" },
    { id: "2", title: "Beginner's Guide to Python", topics: 8, status: "Draft" },
    { id: "3", title: "Full Stack Web Development", topics: 7, status: "Published" },
];

// Mock data for resources.
const resources = [
    { id: "1", title: "React Docs", url: "https://react.dev", type: "Official Documentation" },
    { id: "2", title: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Reference" },
    { id: "3", title: "CSS-Tricks", url: "https://css-tricks.com", type: "Blog/Tutorial" },
];

// Mock data for glossary terms.
const glossary = [
    { id: "1", term: "Component", definition: "A reusable, self-contained piece of UI...", status: "Published" },
    { id: "2", term: "State", definition: "Data that a component maintains over time.", status: "Published" },
    { id: "3", term: "Hook", definition: "A special function that lets you 'hook into' React features.", status: "Draft" },
];

// The main component for the Content Management page.
export default function ContentManagementPage() {
  // Return the JSX structure of the page.
  return (
    // The main Tabs component that wraps all content.
    <Tabs defaultValue="roadmaps" className="flex flex-col h-full">
        {/* Container for the page title and tab triggers. */}
        <div className="flex items-center">
            {/* Page title. */}
            <h1 className="text-2xl font-bold">Content Management</h1>
            {/* The list of tabs to switch between content types. */}
            <TabsList className="ml-auto">
                <TabsTrigger value="roadmaps">Learning Roadmaps</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="glossary">Glossary</TabsTrigger>
            </TabsList>
        </div>

        {/* Content for the "roadmaps" tab. */}
        <TabsContent value="roadmaps" className="flex-1 mt-6">
            {/* A card to contain the roadmaps table. */}
            <Card className="h-full flex flex-col">
                {/* Header section of the card. */}
                <CardHeader className="flex flex-row items-center">
                    {/* Container for the card title and description. */}
                    <div className="grid gap-2">
                        <CardTitle>Learning Roadmaps</CardTitle>
                        <CardDescription>Manage the structured learning paths for users.</CardDescription>
                    </div>
                    {/* A dialog for adding a new roadmap. */}
                    <Dialog>
                      {/* The button that triggers the dialog. */}
                      <DialogTrigger asChild>
                         <Button size="sm" className="ml-auto gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            {/* This text is hidden on small screens for a more compact UI. */}
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Roadmap
                            </span>
                        </Button>
                      </DialogTrigger>
                      {/* The content of the dialog. */}
                      <DialogContent>
                        {/* Header of the dialog. */}
                        <DialogHeader>
                          <DialogTitle>Add New Roadmap</DialogTitle>
                          <DialogDescription>
                            Fill in the details for the new learning roadmap.
                          </DialogDescription>
                        </DialogHeader>
                        {/* The form fields for adding a roadmap. */}
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                              Title
                            </Label>
                            <Input id="title" placeholder="E.g., Web Development Foundations" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                              Status
                            </Label>
                             <Select>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="draft">Draft</SelectItem>
                                  <SelectItem value="published">Published</SelectItem>
                                </SelectContent>
                              </Select>
                          </div>
                        </div>
                        {/* Footer of the dialog with the save button. */}
                        <DialogFooter>
                          <Button type="submit">Save Roadmap</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                </CardHeader>
                {/* The main content area of the card. */}
                <CardContent className="flex-1">
                    {/* The table to display the roadmaps. */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Topics</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Map over the mock data and create a table row for each roadmap. */}
                            {roadmaps.map(roadmap => (
                                <TableRow key={roadmap.id}>
                                    <TableCell className="font-medium">{roadmap.title}</TableCell>
                                    <TableCell>{roadmap.topics}</TableCell>
                                    <TableCell>
                                        {/* Display the status as a badge with different styling based on value. */}
                                        <Badge variant={roadmap.status === 'Published' ? 'default' : 'outline'}>{roadmap.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        {/* A dropdown menu for row-specific actions like edit and delete. */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        {/* Content for the "resources" tab. */}
        <TabsContent value="resources" className="flex-1 mt-6">
            <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Resources</CardTitle>
                        <CardDescription>Manage external links, articles, and documentation.</CardDescription>
                    </div>
                    {/* Button to add a new resource. */}
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <a href="#">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Resource
                            </span>
                        </a>
                    </Button>
                </CardHeader>
                <CardContent className="flex-1">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>URL</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Map over the mock data and create a table row for each resource. */}
                            {resources.map(resource => (
                                <TableRow key={resource.id}>
                                    <TableCell className="font-medium">{resource.title}</TableCell>
                                    <TableCell className="text-muted-foreground">{resource.url}</TableCell>
                                    <TableCell>{resource.type}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        {/* Content for the "glossary" tab. */}
        <TabsContent value="glossary" className="flex-1 mt-6">
            <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Glossary</CardTitle>
                        <CardDescription>Manage the definitions of key terms.</CardDescription>
                    </div>
                    {/* Button to add a new glossary term. */}
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <a href="#">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Term
                            </span>
                        </a>
                    </Button>
                </CardHeader>
                <CardContent className="flex-1">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Term</TableHead>
                                <TableHead>Definition</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Map over the mock data and create a table row for each glossary item. */}
                            {glossary.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.term}</TableCell>
                                    <TableCell className="text-muted-foreground">{item.definition}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === 'Published' ? 'default' : 'outline'}>{item.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

    </Tabs>
  );
}
