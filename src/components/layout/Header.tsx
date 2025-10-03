"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Store, Briefcase } from "lucide-react";

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
              <Home className="mr-2 h-4 w-4" /> Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/marketplace">
              <Store className="mr-2 h-4 w-4" /> Marketplace
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/gigs">
              <Briefcase className="mr-2 h-4 w-4" /> Gigs
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;