"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/marketplace/ProductCard";

const dummyProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Used Calculus Textbook",
    price: 35.00,
    description: "Barely used Calculus textbook, 8th edition. Great condition, no highlights or notes. Essential for any math student.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1526178613543-cca70d76678c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mini Fridge",
    price: 80.00,
    description: "Compact mini fridge, perfect for dorm rooms. Keeps drinks and snacks cool. Minor wear and tear, fully functional.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa607037dc?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stylish Winter Jacket",
    price: 50.00,
    description: "Warm and stylish winter jacket, size M. Only worn a few times, excellent condition. Perfect for cold campus days.",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gaming Monitor",
    price: 150.00,
    description: "24-inch gaming monitor, 144Hz refresh rate. Great for competitive gaming or extended study sessions. Comes with all cables.",
  },
];

const MarketplacePage = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Campus Marketplace</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse and discover items for sale by your fellow students. Find great deals on textbooks, electronics, and more!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild>
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketplacePage;