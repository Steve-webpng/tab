"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// Removed: import { Toaster as Sonner } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Removed: <Sonner /> */}
    </div>
  );
};

export default Layout;