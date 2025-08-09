
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you. Reach out to us at <a href="mailto:support@codecraft.ai" className="text-primary underline">support@codecraft.ai</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
