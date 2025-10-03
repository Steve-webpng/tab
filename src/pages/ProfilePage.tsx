"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

const ProfilePage = () => {
  // Dummy user data for demonstration
  const user = {
    name: "John Doe",
    email: "john.doe@campus.edu",
    avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=JohnDoe", // Placeholder avatar
    bio: "Student at Campus University, passionate about technology and helping others. Selling old textbooks and offering web development services.",
    memberSince: "August 2023",
  };

  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">My Profile</CardTitle>
          <CardDescription>View and manage your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback><User className="h-12 w-12" /></AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">About Me</h3>
              <p className="text-muted-foreground">{user.bio}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Member Since</h3>
              <p className="text-muted-foreground">{user.memberSince}</p>
            </div>
          </div>
          {/* Future: Add edit profile button or other actions */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;