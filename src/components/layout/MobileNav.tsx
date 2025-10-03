"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Store, Briefcase, PlusCircle, LayoutDashboard, LogIn, LogOut, UserCircle, Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { showSuccess } from "@/utils/toast";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    setIsOpen(false); // Close the sheet on logout
    navigate("/");
  };

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] flex flex-col">
        <Link to="/" className="flex items-center space-x-2 mb-6" onClick={closeSheet}>
          <span className="inline-block font-bold text-lg">Campus Hub</span>
        </Link>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Home
            </Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
            <Link to="/marketplace">
              <Store className="mr-2 h-4 w-4" /> Marketplace
            </Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
            <Link to="/gigs">
              <Briefcase className="mr-2 h-4 w-4" /> Gigs
            </Link>
          </Button>
          {isLoggedIn && (
            <>
              <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
                <Link to="/seller-dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
                <Link to="/profile">
                  <UserCircle className="mr-2 h-4 w-4" /> Profile
                </Link>
              </Button>
              <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90" onClick={closeSheet}>
                <Link to="/create-listing">
                  <PlusCircle className="mr-2 h-4 w-4" /> Post Listing
                </Link>
              </Button>
            </>
          )}
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout} className="justify-start">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild className="justify-start" onClick={closeSheet}>
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;