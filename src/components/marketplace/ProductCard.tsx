"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  category?: string; // Added category for consistency with other components
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price, description }) => {
  return (
    <Card className="flex flex-col overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">UGX {price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/marketplace/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;