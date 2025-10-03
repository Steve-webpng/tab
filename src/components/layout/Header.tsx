"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Store, Briefcase, PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-lg">Campus Hub</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">
              <span><Home className="mr-2 h-4 w-4" /> Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/marketplace">
              <span><Store className="mr-2 h-4 w-4" /> Marketplace</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/gigs">
              <span><Briefcase className="mr-2 h-4 w-4" /> Gigs</span>
            </Link>
          </Button>
          <Button asChild>
            <Link to="/create-listing">
              <span><PlusCircle className="mr-2 h-4 w-4" /> Post Listing</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;