"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { userProfile } from "@/lib/data";

export default function ProfilePage() {
  const [formData, setFormData] = useState(userProfile);
  const [avatarPreview, setAvatarPreview] = useState(userProfile.avatar);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        // In a real app, you would upload the file and get a new URL
        // setFormData((prevData) => ({ ...prevData, avatar: newImageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Profile changes saved! (Mock Save)");
    // In a real app, you would send formData to a backend
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Profile Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24">
              <Image
                src={avatarPreview}
                alt="User Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label htmlFor="avatar-upload">
                <Button variant="outline" size="sm">
                  Change Avatar
                </Button>
              </label>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={handleSave} className="mt-4">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}