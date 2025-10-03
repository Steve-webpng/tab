"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Re-defining dummy products for the detail page for simplicity
const dummyProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Used Calculus Textbook",
    price: 35.00,
    description: "Barely used Calculus textbook, 8th edition. Great condition, no highlights or notes. Essential for any math student. This edition covers single-variable calculus, including limits, derivatives, integrals, and sequences and series. Perfect for self-study or as a supplement to your course material. ISBN: 978-0495011607.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1526178613543-cca70d76678c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mini Fridge",
    price: 80.00,
    description: "Compact mini fridge, perfect for dorm rooms. Keeps drinks and snacks cool. Minor wear and tear, fully functional. Features a small freezer compartment and adjustable shelving. Dimensions: 18\" H x 17\" W x 19\" D. Energy efficient and quiet operation. Ideal for keeping beverages and snacks handy during late-night study sessions.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa607037dc?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stylish Winter Jacket",
    price: 50.00,
    description: "Warm and stylish winter jacket, size M. Only worn a few times, excellent condition. Perfect for cold campus days. Features a detachable hood, multiple pockets, and a water-resistant outer shell. Color: Navy Blue. Suitable for temperatures down to 0°C. A must-have for the colder months.",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gaming Monitor",
    price: 150.00,
    description: "24-inch gaming monitor, 144Hz refresh rate. Great for competitive gaming or extended study sessions. Comes with all cables. Full HD (1920x1080) resolution, 1ms response time. Features FreeSync technology for smooth gameplay. Perfect for eSports enthusiasts or anyone needing a high-performance display. Brand: AOC.",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The product you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-3xl font-bold">{product.title}</CardTitle>
              <CardDescription className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-base text-muted-foreground">{product.description}</p>
            </CardContent>
          </div>
          <div className="mt-6 flex flex-col space-y-4">
            <Button className="w-full">Contact Seller</Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/marketplace">Back to Marketplace</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailPage;