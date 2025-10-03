"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditListingForm from "@/components/forms/EditListingForm";
import { getProducts, updateProduct } from "@/data/appData"; // Import centralized data functions
import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/button";

const EditProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [productToEdit, setProductToEdit] = useState<ProductCardProps | undefined>(undefined);

  useEffect(() => {
    const products = getProducts();
    setProductToEdit(products.find((p) => p.id === id));
  }, [id]);

  const handleSaveProduct = (productId: string, updatedData: any) => {
    // The actual update to appData happens in EditListingForm.
    // Here, we just update the local state to reflect changes immediately.
    setProductToEdit(prev => prev ? { ...prev, ...updatedData } : undefined);
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
              category: productToEdit.category, // Ensure category is passed
            }}
            onSave={handleSaveProduct}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductPage;