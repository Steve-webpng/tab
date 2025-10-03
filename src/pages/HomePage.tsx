"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Briefcase } from "lucide-react";

const HomePage = () => {
  return (
    <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Welcome to Campus Hub!</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your one-stop platform for students to connect, buy, sell, and offer services within the campus community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="flex flex-col items-center text-center p-6">
          <CardHeader>
            <Store className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Campus Marketplace</CardTitle>
            <CardDescription>Buy and sell used textbooks, hostel items, clothes, and more with fellow students.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center text-center p-6">
          <CardHeader>
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Student Freelance & Gigs</CardTitle>
            <CardDescription>Hire or be hired for small tasks like tutoring, proofreading, design help, moving, and event support.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/gigs">Find Gigs & Services</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;