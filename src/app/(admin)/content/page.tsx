
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContentManagementPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
        <CardDescription>
          Here you can manage all the learning roadmaps, resources, and glossary terms for your platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This section is under development. Soon you'll be able to add, edit, and remove content.
        </p>
      </CardContent>
    </Card>
  );
}
