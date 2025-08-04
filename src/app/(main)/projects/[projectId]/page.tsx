
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectBuildPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 text-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Under Construction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            The AI-guided project builder for "{params.projectId}" is coming soon! 
            You'll be able to build this project step-by-step right here.
          </p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
