
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function GrowthMindsetPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="mt-4 text-3xl">Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Growth Mindset & Motivation resources are under construction. Please check back later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
