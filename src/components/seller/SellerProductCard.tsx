"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

interface SellerProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  onDelete: (id: string) => void;
}

const SellerProductCard: React.FC<SellerProductCardProps> = ({ id, image, title, price, description, onDelete }) => {
  const handleDelete = () => {
    // In a real app, this would call an API to delete the product
    console.log(`Deleting product with ID: ${id}`);
    onDelete(id);
    showSuccess("Product deleted successfully!");
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">${price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button asChild className="w-full">
          <Link to={`/seller-dashboard/products/${id}/edit`}>Edit Details</Link>
        </Button>
        <Button variant="destructive" className="w-full" onClick={handleDelete}>
          Delete Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SellerProductCard;