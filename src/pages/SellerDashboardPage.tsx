"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellerProductCard from "@/components/seller/SellerProductCard";
import SellerGigCard from "@/components/seller/SellerGigCard";
import { getProducts, getGigs, deleteProduct, deleteGig, updateProduct, updateGig } from "@/data/appData"; // Import centralized data functions
import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { GigCardProps } from "@/components/gigs/GigCard";

const SellerDashboardPage = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [gigs, setGigs] = useState<GigCardProps[]>([]);

  useEffect(() => {
    setProducts(getProducts());
    setGigs(getGigs());
  }, []);

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setProducts(getProducts()); // Re-fetch updated list
  };

  const handleDeleteGig = (id: string) => {
    deleteGig(id);
    setGigs(getGigs()); // Re-fetch updated list
  };

  // This onSave is passed to EditListingForm to update local state after an edit
  const handleSaveListing = (id: string, updatedData: any) => {
    // The actual update to appData happens in EditListingForm.
    // Here, we just re-fetch to ensure the dashboard reflects the latest state.
    setProducts(getProducts());
    setGigs(getGigs());
  };

  return (
    <div className="container py-12 md:py-16">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Seller Dashboard</CardTitle>
          <CardDescription>Manage your active product listings and posted gigs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="products">My Products</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              {products.length === 0 ? (
                <p className="text-center text-muted-foreground">You have no products listed yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <SellerProductCard key={product.id} {...product} onDelete={handleDeleteProduct} />
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsTrigger value="gigs">My Gigs</TabsTrigger>
            <TabsContent value="gigs">
              {gigs.length === 0 ? (
                <p className="text-center text-muted-foreground">You have no gigs posted yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gigs.map((gig) => (
                    <SellerGigCard key={gig.id} {...gig} onDelete={handleDeleteGig} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerDashboardPage;