import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h1 className="text-2xl font-bold">Project Builder</h1>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>AI-Guided Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The Project Builder is under construction. Soon, you'll be able to choose a project and build it step-by-step with AI assistance.</p>
        </CardContent>
      </Card>
    </div>
  );
}
