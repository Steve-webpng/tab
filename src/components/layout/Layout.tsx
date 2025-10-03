"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; 
import { Toaster as Sonner } from "@/components/ui/sonner"; 

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      {/* <Footer /> */} {/* Commenting out Footer */}
      {/* <Sonner /> */} {/* Commenting out Sonner */}
    </div>
  );
};

export default Layout;