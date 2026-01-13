"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import { assignments } from "@/lib/data";

export default function AssignmentsPage() {
  const assignmentStatuses = ["All", "Pending", "Submitted", "Graded"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeTab === "All") {
      return true;
    }
    return assignment.status === activeTab;
  });

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Submitted":
        return "outline";
      case "Graded":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <Tabs defaultValue="All" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          {assignmentStatuses.map((status) => (
            <TabsTrigger key={status} value={status}>
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
        {assignmentStatuses.map((status) => (
          <TabsContent key={status} value={status}>
            <Card>
              <CardHeader>
                <CardTitle>{status} Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell>{assignment.title}</TableCell>
                        <TableCell>{assignment.course}</TableCell>
                        <TableCell>{assignment.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {assignment.score ? assignment.score : "-"}
                        </TableCell>
                        <TableCell>
                          <Link href={`/dashboard/assignments/${assignment.id}`}>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}