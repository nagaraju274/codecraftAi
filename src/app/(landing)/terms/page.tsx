
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the placeholder for your Terms of Service.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
