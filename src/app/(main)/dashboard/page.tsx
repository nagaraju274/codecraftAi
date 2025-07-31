import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This is your dashboard. It's currently under construction, but soon you'll be able to see your progress and recent activity here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
