"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getGigs } from "@/data/appData"; // Import centralized data functions
import { GigCardProps } from "@/components/gigs/GigCard";

const GigDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [gig, setGig] = useState<GigCardProps | undefined>(undefined);

  useEffect(() => {
    const gigs = getGigs();
    setGig(gigs.find((g) => g.id === id));
  }, [id]);

  if (!gig) {
    return (
      <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Gig Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The gig you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to="/gigs">Back to Gigs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{gig.title}</CardTitle>
          {gig.category && <CardDescription className="text-lg text-muted-foreground">{gig.category}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground mb-4">{gig.description}</p>
          {gig.priceRange && <p className="text-xl font-semibold text-primary">Budget: {gig.priceRange}</p>}
        </CardContent>
        <div className="p-6 pt-0 flex flex-col space-y-4">
          <Button className="w-full">Contact Student</Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/gigs">Back to Gigs</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GigDetailPage;