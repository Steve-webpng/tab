"use client";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Store, Briefcase, PlusCircle, LayoutDashboard, LogIn, LogOut, UserCircle } from "lucide-react"; // Added UserCircle icon
import { useAuth } from "@/context/AuthContext";
import { showSuccess } from "@/utils/toast";

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
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-lg">Campus Hub</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/">
              <span><Home className="mr-2 h-4 w-4" /> Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/marketplace">
              <span><Store className="mr-2 h-4 w-4" /> Marketplace</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
            <Link to="/gigs">
              <span><Briefcase className="mr-2 h-4 w-4" /> Gigs</span>
            </Link>
          </Button>
          {isLoggedIn && (
            <>
              <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
                <Link to="/seller-dashboard">
                  <span><LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
                <Link to="/profile"> {/* New Profile link */}
                  <span><UserCircle className="mr-2 h-4 w-4" /> Profile</span>
                </Link>
              </Button>
              <Button asChild className="transition-colors hover:bg-primary/90">
                <Link to="/create-listing">
                  <span><PlusCircle className="mr-2 h-4 w-4" /> Post Listing</span>
                </Link>
              </Button>
            </>
          )}
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout} className="transition-colors hover:bg-accent hover:text-accent-foreground">
              <span><LogOut className="mr-2 h-4 w-4" /> Logout</span>
            </Button>
          ) : (
            <Button variant="ghost" asChild className="transition-colors hover:bg-accent hover:text-accent-foreground">
              <Link to="/login">
                <span><LogIn className="mr-2 h-4 w-4" /> Login</span>
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;