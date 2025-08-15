
"use client";

import { notFound, useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cheatsheetData } from "@/lib/cheatsheet-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


export default function CheatSheetPage() {
  const params = useParams();
  const cheatsheetId = params.cheatsheetId as string;
  const sheet = cheatsheetData.find((c) => c.id === cheatsheetId);

  if (!sheet) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full gap-4">
        <Button asChild variant="ghost" className="mb-4 self-start">
            <Link href="/cheatsheets">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cheat Sheets
            </Link>
        </Button>
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <sheet.icon className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>{sheet.title}</CardTitle>
                        <CardDescription>{sheet.description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[30%]">Command</TableHead>
                    <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sheet.items.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-mono bg-muted/50 rounded-md">
                        {item.command}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
