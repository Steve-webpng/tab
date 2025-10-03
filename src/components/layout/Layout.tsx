"use client";

import React from "react";
import { Outlet } from "react-router-dom";
// Temporarily remove Header, Footer, Toaster, Sonner imports for debugging
// import Header from "./Header";
// import Footer from "./Footer";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Temporarily removed Header, Footer, Toaster, Sonner */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;