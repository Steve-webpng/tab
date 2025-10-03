"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GigsPage = () => {
  return (
    <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Student Freelance & Gigs</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is where students can offer and find services. More features coming soon!
      </p>
      <Button asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default GigsPage;