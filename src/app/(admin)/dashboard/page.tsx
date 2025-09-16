// Import UI components from the project's design system.
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Import icons from the lucide-react library.
import { DollarSign, Users, Activity, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
// Import the Next.js Link component for client-side navigation.
import Link from "next/link";
// Import the Button component.
import { Button } from "@/components/ui/button";

// Mock data for recent user sign-ups.
const recentSignups = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", date: "2023-11-20" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", date: "2023-11-19" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", date: "2023-11-18" },
    { name: "William Kim", email: "will@email.com", date: "2023-11-17" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", date: "2023-11-16" },
];

// The main component for the Admin Dashboard page.
export default function AdminDashboardPage() {
  // Return the JSX structure of the page.
  return (
    // Main container with vertical spacing.
    <div className="flex flex-col h-full gap-8">
      {/* Page header section. */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">A quick overview of your platform's stats.</p>
      </div>
      
      {/* Grid for displaying key statistics in cards. */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {/* Card for Total Users. */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,234</div>
            <p className="text-xs text-muted-foreground">+5.1% from last month</p>
          </CardContent>
        </Card>
        {/* Card for Active Users. */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
             <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+2.3% from last week</p>
          </CardContent>
        </Card>
         {/* Card for Total Revenue. */}
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        {/* Card for Roadmaps Completed. */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roadmaps Completed</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
      </div>

       {/* Card for displaying a table of recent sign-ups. */}
       <Card>
          <CardHeader>
            <CardTitle>Recent Sign-ups</CardTitle>
            <CardDescription>
              The latest users who have joined the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Sign-up Date</TableHead>
                   <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Map over the mock data and create a table row for each user. */}
                {recentSignups.map((user) => (
                    <TableRow key={user.email}>
                        <TableCell>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                        </TableCell>
                        <TableCell>{user.date}</TableCell>
                        <TableCell className="text-right">
                           {/* A button that links to the user management page. */}
                           <Button asChild size="sm" variant="outline">
                                <Link href="/admin/users">
                                    View Profile <ExternalLink className="ml-2 h-3 w-3" />
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}
