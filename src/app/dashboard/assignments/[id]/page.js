"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Textarea } from "@/app/components/ui/textarea";
import { Input } from "@/app/components/ui/input";
import { detailedAssignments } from "@/lib/data";
import { CheckCircle, Upload, FileText } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

export default function AssignmentDetailsPage() {
  const { id } = useParams();
  const [submissionFile, setSubmissionFile] = useState(null);
  const [submissionText, setSubmissionText] = useState("");

  const assignment = detailedAssignments.find((a) => a.id === id);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const handleFileChange = (e) => {
    setSubmissionFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSubmissionFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = () => {
    // In a real application, you would send submissionFile or submissionText to a backend.
    const submissionData = {
      fileName: submissionFile ? submissionFile.name : "Text submission",
      text: submissionText,
      timestamp: new Date().toISOString(),
    };

    alert(`Submitting assignment: ${submissionData.fileName}`);

    // In a real app, this would be an API call to save the submission
    // For now, we just reset the form
    setSubmissionFile(null);
    setSubmissionText("");
    alert("Assignment submitted successfully!");
  };

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
    <div className="flex flex-col gap-6">
      {/* Assignment Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{assignment.title}</h1>
          <p className="text-muted-foreground">Course: {assignment.course}</p>
          <p className="text-sm text-muted-foreground">
            Due: {assignment.dueDate}
          </p>
          <Badge
            variant={getStatusBadgeVariant(assignment.status)}
            className="mt-2"
          >
            Status: {assignment.status}
          </Badge>
        </div>
        {assignment.status === "Graded" && (
          <div className="text-right">
            <p className="text-2xl font-bold">Score: {assignment.score}/100</p>
            <p className="text-sm text-muted-foreground">
              Feedback: {assignment.feedback}
            </p>
          </div>
        )}
      </div>

      {/* Assignment Details */}
      <Card>
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{assignment.instructions}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2">
            {assignment.requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {assignment.supportingFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Supporting Files</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2">
              {assignment.supportingFiles.map((file, index) => (
                <li key={index}>
                  <Link href={file.url} className="flex items-center gap-2 underline">
                    <FileText className="h-4 w-4" />
                    {file.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Submission */}
      {assignment.status !== "Graded" && (
        <Card>
          <CardHeader>
            <CardTitle>Submit Assignment</CardTitle>
            <CardDescription>
              Upload your file or type your submission below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary"
            >
              <Upload className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Drag and drop your file here, or click to select
              </p>
              <Input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="mt-2">
                <Button variant="outline">Browse Files</Button>
              </label>
              {submissionFile && (
                <p className="mt-2 text-sm text-primary">
                  Selected file: {submissionFile.name}
                </p>
              )}
            </div>
            <p className="text-center text-muted-foreground my-4">OR</p>
            <Textarea
              placeholder="Type your submission here..."
              value={submissionText}
              onChange={(e) => setSubmissionText(e.target.value)}
              rows={5}
            />
            <Button onClick={handleSubmit} className="mt-4 w-full">
              Submit Assignment
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Submission History */}
      <Card>
        <CardHeader>
          <CardTitle>Submission History</CardTitle>
        </CardHeader>
        <CardContent>
          {assignment.submissionHistory.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Feedback</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignment.submissionHistory.map((submission, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {new Date(submission.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell>{submission.fileName}</TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusBadgeVariant(submission.status)}
                      >
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {submission.score ? submission.score : "-"}
                    </TableCell>
                    <TableCell>
                      {submission.feedback ? submission.feedback : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground">No submissions yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}