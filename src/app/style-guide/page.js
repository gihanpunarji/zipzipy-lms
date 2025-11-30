"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/app/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Progress } from "@/app/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet";
import { Switch } from "@/app/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Textarea } from "@/app/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export default function StyleGuidePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Component Library</h1>

      {/* Accordion */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Accordion</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Badge */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Badge</h2>
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* Button */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Button</h2>
        <div className="flex gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Card */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Card</h2>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>
        </Card>
      </div>

      {/* Collapsible */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Collapsible</h2>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button>Toggle Collapsible</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p className="p-4 bg-muted rounded-md mt-2">This content is collapsible.</p>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Dialog */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            <p>This is the content of the dialog.</p>
          </DialogContent>
        </Dialog>
      </div>

      {/* DropdownMenu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Input */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Input</h2>
        <Input placeholder="Enter some text" />
      </div>
      
      {/* Label */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Label</h2>
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" placeholder="email@example.com" />
      </div>

      {/* Progress */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Progress Bar</h2>
        <Progress value={60} />
      </div>

      {/* Select */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Select</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sheet */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sheet</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
            </SheetHeader>
            <p>This is the content of the sheet.</p>
          </SheetContent>
        </Sheet>
      </div>

      {/* Switch */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Switch</h2>
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      {/* Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john.doe@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane.smith@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Textarea */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Textarea</h2>
        <Textarea placeholder="Type your message here." />
      </div>
      
      {/* Tabs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tabs</h2>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="p-4 bg-muted rounded-md mt-2">Account settings go here.</p>
          </TabsContent>
          <TabsContent value="password">
            <p className="p-4 bg-muted rounded-md mt-2">Password settings go here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
