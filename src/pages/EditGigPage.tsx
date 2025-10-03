"use client";

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditListingForm from "@/components/forms/EditListingForm";
import { sellerGigs as initialSellerGigs } from "@/data/sellerListings";
import { GigCardProps } from "@/components/gigs/GigCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EditGigPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [gigs, setGigs] = useState<GigCardProps[]>(initialSellerGigs);

  const gigToEdit = gigs.find((g) => g.id === id);

  const handleSaveGig = (gigId: string, updatedData: any) => {
    setGigs(gigs.map(g => g.id === gigId ? { ...g, ...updatedData } : g));
    // In a real app, you'd update the backend here.
    console.log("Updated gig:", updatedData);
  };

  if (!gigToEdit) {
    return (
      <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Gig Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The gig you are trying to edit does not exist.
        </p>
        <Button asChild>
          <Link to="/seller-dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Edit Gig Listing</CardTitle>
          <CardDescription>
            Update the details for your gig.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditListingForm
            type="gig"
            initialData={{
              id: gigToEdit.id,
              title: gigToEdit.title,
              description: gigToEdit.description,
              priceRange: gigToEdit.priceRange,
              category: gigToEdit.category,
            }}
            onSave={handleSaveGig}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditGigPage;