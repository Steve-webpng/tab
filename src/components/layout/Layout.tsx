"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // Uncommenting Footer import
import { Toaster as Sonner } from "@/components/ui/sonner"; // Uncommenting Sonner import

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer /> {/* Re-introducing Footer */}
      <Sonner /> {/* Re-introducing Sonner */}
    </div>
  );
};

export default Layout;