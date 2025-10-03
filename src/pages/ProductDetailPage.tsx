"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProducts } from "@/data/appData"; // Import centralized data functions
import { ProductCardProps } from "@/components/marketplace/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductCardProps | undefined>(undefined);

  useEffect(() => {
    const products = getProducts();
    setProduct(products.find((p) => p.id === id));
  }, [id]);

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