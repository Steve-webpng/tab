"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface GigCardProps {
  id: string;
  title: string;
  description: string;
  priceRange?: string;
  category?: string;
}

const GigCard: React.FC<GigCardProps> = ({ id, title, description, priceRange, category }) => {
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
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/gigs/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GigCard;