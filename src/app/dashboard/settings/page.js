"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { userProfile } from "@/lib/data";

export default function SettingsPage() {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [notificationSettings, setNotificationSettings] = useState(
    userProfile.notificationSettings
  );
  const [privacySettings, setPrivacySettings] = useState(
    userProfile.privacySettings
  );

  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleNotificationChange = (id, checked) => {
    setNotificationSettings((prev) => ({ ...prev, [id]: checked }));
  };

  const handlePrivacyChange = (id, value) => {
    setPrivacySettings((prev) => ({ ...prev, [id]: value }));
  };

  const handleSavePassword = () => {
    // Simulate API call
    if (
      passwordForm.newPassword !== passwordForm.confirmNewPassword ||
      passwordForm.newPassword === ""
    ) {
      alert("New passwords do not match or are empty.");
      return;
    }
    alert("Password updated! (Mock Save)");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
  };

  const handleSaveNotifications = () => {
    alert("Notification settings updated! (Mock Save)");
    // Simulate API call
  };

  const handleSavePrivacy = () => {
    alert("Privacy settings updated! (Mock Save)");
    // Simulate API call
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deleted! (Mock Action)");
      // In a real app, initiate account deletion and redirect to login/home
      // router.push("/auth/login");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Account Settings</h1>

      {/* Change Password Card */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password for security.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <Input
              id="confirmNewPassword"
              type="password"
              value={passwordForm.confirmNewPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <Button onClick={handleSavePassword}>Save Password</Button>
        </CardContent>
      </Card>

      {/* Notification Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Manage your email and push notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="emailNotifications">Email Notifications</Label>
            <Switch
              id="emailNotifications"
              checked={notificationSettings.emailNotifications}
              onCheckedChange={(checked) =>
                handleNotificationChange("emailNotifications", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="pushNotifications">Push Notifications</Label>
            <Switch
              id="pushNotifications"
              checked={notificationSettings.pushNotifications}
              onCheckedChange={(checked) =>
                handleNotificationChange("pushNotifications", checked)
              }
            />
          </div>
          <Button onClick={handleSaveNotifications}>Save Notifications</Button>
        </CardContent>
      </Card>

      {/* Privacy Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>
            Control your profile visibility and data sharing.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="profileVisibility">Profile Visibility</Label>
            <Select
              value={privacySettings.profileVisibility}
              onValueChange={(value) =>
                handlePrivacyChange("profileVisibility", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dataSharing">Data Sharing</Label>
            <Switch
              id="dataSharing"
              checked={privacySettings.dataSharing}
              onCheckedChange={(checked) =>
                handlePrivacyChange("dataSharing", checked)
              }
            />
          </div>
          <Button onClick={handleSavePrivacy}>Save Privacy Settings</Button>
        </CardContent>
      </Card>

      {/* Delete Account Card */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Delete Account</CardTitle>
          <CardDescription>
            Permanently delete your account and all your data. This action
            cannot be undone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}