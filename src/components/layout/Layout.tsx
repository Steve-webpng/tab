"use client";

import React from "react";
import { Outlet } from "react-router-dom";
// Temporarily remove Header, Footer, and Sonner to isolate the error
// import Header from "./Header";
// import Footer from "./Footer";
// import { Toaster as Sonner } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1 p-4"> {/* Added padding for visibility */}
        <Outlet />
      </main>
      {/* <Footer /> */}
      {/* <Sonner /> */}
    </div>
  );
};

export default Layout;