
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TreasurePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Treasure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A curated collection of the best tools, articles, and resources for developers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
