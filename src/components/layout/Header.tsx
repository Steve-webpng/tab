"use client";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Store, Briefcase, PlusCircle, LayoutDashboard, LogIn, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { showSuccess } from "@/utils/toast";
import MobileNav from "./MobileNav";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center">
          <MobileNav />
          <Link to="/" className="flex items-center space-x-2 ml-4 md:ml-0">
            <span className="inline-block font-bold text-lg">Campus Hub</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/" className="flex flex-col items-center">
              <Home className="h-4 w-4 mb-1" /> <span>Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/marketplace" className="flex flex-col items-center">
              <Store className="h-4 w-4 mb-1" /> <span>Marketplace</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/gigs" className="flex flex-col items-center">
              <Briefcase className="h-4 w-4 mb-1" /> <span>Gigs</span>
            </Link>
          </Button>
          {isLoggedIn && (
            <>
              <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
                <Link to="/seller-dashboard" className="flex flex-col items-center">
                  <LayoutDashboard className="h-4 w-4 mb-1" /> <span>Dashboard</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
                <Link to="/profile" className="flex flex-col items-center">
                  <UserCircle className="h-4 w-4 mb-1" /> <span>Profile</span>
                </Link>
              </Button>
              <Button asChild className="transition-colors hover:bg-primary/90">
                <Link to="/create-listing" className="flex flex-col items-center">
                  <PlusCircle className="h-4 w-4 mb-1" /> <span>Post Listing</span>
                </Link>
              </Button>
            </>
          )}
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout} className="transition-colors hover:bg-accent hover:text-accent-foreground">
              <div className="flex flex-col items-center">
                <LogOut className="h-4 w-4 mb-1" /> <span>Logout</span>
              </div>
            </Button>
          ) : (
            <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
              <Link to="/login" className="flex flex-col items-center">
                <LogIn className="h-4 w-4 mb-1" /> <span>Login</span>
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;