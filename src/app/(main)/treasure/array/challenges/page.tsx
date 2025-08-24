
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArrayChallengesPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
        <Button asChild variant="ghost" className="mb-4 self-start">
            <Link href="/treasure/array">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Arrays
            </Link>
        </Button>
        <Card>
            <CardHeader>
                <CardTitle>Array: Interactive Mini-Challenges</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground py-20">
                <p className="text-lg">Interactive challenges are coming soon!</p>
                <p className="text-sm mt-2">Get ready to test your knowledge with hands-on exercises.</p>
            </CardContent>
        </Card>
    </div>
  );
}
