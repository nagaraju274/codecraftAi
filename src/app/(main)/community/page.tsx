
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Community Forum</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Join the conversation! Our community forum is the perfect place to ask questions, share your projects, and connect with other developers.
          </p>
          <Button size="lg" disabled>
            Coming Soon!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Our forum is currently under construction. Please check back later!</p>
        </CardContent>
      </Card>
    </div>
  );
}
