"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// Removed Toaster import as it's not used by the application's toast utility
// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Keeping only Sonner as it's used by src/utils/toast.ts */}
      <Sonner />
    </div>
  );
};

export default Layout;