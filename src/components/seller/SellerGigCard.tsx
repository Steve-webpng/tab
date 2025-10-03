"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

interface SellerGigCardProps {
  id: string;
  title: string;
  description: string;
  priceRange?: string;
  category?: string;
  onDelete: (id: string) => void;
}

const SellerGigCard: React.FC<SellerGigCardProps> = ({ id, title, description, priceRange, category, onDelete }) => {
  const handleDelete = () => {
    // In a real app, this would call an API to delete the gig
    console.log(`Deleting gig with ID: ${id}`);
    onDelete(id);
    showSuccess("Gig deleted successfully!");
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {category && <CardDescription className="text-sm text-muted-foreground">{category}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        {priceRange && <p className="mt-2 text-md font-semibold text-secondary-foreground">Budget: {priceRange}</p>}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button asChild className="w-full">
          <Link to={`/seller-dashboard/gigs/${id}/edit`}>Edit Details</Link>
        </Button>
        <Button variant="destructive" className="w-full" onClick={handleDelete}>
          Delete Gig
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SellerGigCard;