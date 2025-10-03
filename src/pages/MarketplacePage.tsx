"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MarketplacePage = () => {
  return (
    <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Campus Marketplace</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is where students can buy and sell items. More features coming soon!
      </p>
      <Button asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default MarketplacePage;