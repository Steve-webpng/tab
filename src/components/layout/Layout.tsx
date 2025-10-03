"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster here
import { Toaster as Sonner } from "@/components/ui/sonner"; // Import Sonner here

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster /> {/* Render Toaster here */}
      <Sonner /> {/* Render Sonner here */}
    </div>
  );
};

export default Layout;