"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellerProductCard from "@/components/seller/SellerProductCard";
import SellerGigCard from "@/components/seller/SellerGigCard";
import { getProducts, getGigs, deleteProduct, deleteGig } from "@/data/appData";
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
  const handleSaveListing = () => {
    // The actual update to appData happens in EditListingForm.
    // Here, we just re-fetch to ensure the dashboard reflects the latest state.
    setProducts(getProducts());
    setGigs(getGigs());
  };

  // Combine and sort all listings for the "My Listings" tab
  const allListings = [...products, ...gigs].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="container py-12 md:py-16">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Seller Dashboard</CardTitle>
          <CardDescription>Manage your active product listings and posted gigs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all-listings" className="w-full">
            <TabsList className="grid w-full grid-cols-1 mb-6"> {/* Changed to 1 column */}
              <TabsTrigger value="all-listings">My Listings</TabsTrigger>
            </TabsList>
            <TabsContent value="all-listings">
              {allListings.length === 0 ? (
                <p className="text-center text-muted-foreground">You have no listings yet. Go create one!</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allListings.map((listing) => {
                    if (listing.id.startsWith("p")) {
                      const product = listing as ProductCardProps;
                      return (
                        <SellerProductCard
                          key={product.id}
                          id={product.id}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          description={product.description}
                          onDelete={handleDeleteProduct}
                        />
                      );
                    } else {
                      const gig = listing as GigCardProps;
                      return (
                        <SellerGigCard
                          key={gig.id}
                          id={gig.id}
                          title={gig.title}
                          description={gig.description}
                          priceRange={gig.priceRange}
                          category={gig.category}
                          onDelete={handleDeleteGig}
                        />
                      );
                    }
                  })}
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