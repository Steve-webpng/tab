"use client";

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditListingForm from "@/components/forms/EditListingForm";
import { sellerProducts as initialSellerProducts } from "@/data/sellerListings";
import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EditProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductCardProps[]>(initialSellerProducts);

  const productToEdit = products.find((p) => p.id === id);

  const handleSaveProduct = (productId: string, updatedData: any) => {
    setProducts(products.map(p => p.id === productId ? { ...p, ...updatedData } : p));
    // In a real app, you'd update the backend here.
    console.log("Updated product:", updatedData);
  };

  if (!productToEdit) {
    return (
      <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The product you are trying to edit does not exist.
        </p>
        <Button asChild>
          <Link to="/seller-dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Edit Product Listing</CardTitle>
          <CardDescription>
            Update the details for your product.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditListingForm
            type="product"
            initialData={{
              id: productToEdit.id,
              title: productToEdit.title,
              description: productToEdit.description,
              price: productToEdit.price,
              image: productToEdit.image,
            }}
            onSave={handleSaveProduct}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductPage;