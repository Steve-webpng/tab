"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User, Edit } from "lucide-react";
import { getUserProfile, updateUserProfile, UserProfile } from "@/data/appData";
import EditProfileForm from "@/components/forms/EditProfileForm";

const ProfilePage = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    setUser(getUserProfile());
  }, []);

  const handleSaveProfile = (updatedData: Partial<UserProfile>) => {
    const updatedUser = updateUserProfile(updatedData);
    setUser(updatedUser);
    setIsEditing(false); // Exit edit mode after saving
  };

  if (!user) {
    return (
      <div className="container py-12 md:py-16 flex justify-center">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">My Profile</CardTitle>
          <CardDescription>
            {isEditing ? "Edit your personal information." : "View and manage your personal information."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <EditProfileForm
              initialData={user}
              onSave={handleSaveProfile}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
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
                  <p className="text-muted-foreground">{user.bio || "No bio provided."}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Member Since</h3>
                  <p className="text-muted-foreground">{user.memberSince}</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;