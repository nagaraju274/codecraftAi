
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-20">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Community Forum</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <CardDescription className="text-lg text-muted-foreground">
            Join the conversation! Our community forum is the perfect place to ask questions, share your projects, and connect with other developers.
          </CardDescription>
          <div>
            <Button size="lg" disabled>
              Coming Soon!
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Our forum is currently under construction. Please check back later!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
