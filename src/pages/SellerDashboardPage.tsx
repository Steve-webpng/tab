"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellerProductCard from "@/components/seller/SellerProductCard";
import SellerGigCard from "@/components/seller/SellerGigCard";
import { sellerProducts as initialSellerProducts, sellerGigs as initialSellerGigs } from "@/data/sellerListings";
import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { GigCardProps } from "@/components/gigs/GigCard";

const SellerDashboardPage = () => {
  const [products, setProducts] = useState<ProductCardProps[]>(initialSellerProducts);
  const [gigs, setGigs] = useState<GigCardProps[]>(initialSellerGigs);

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleDeleteGig = (id: string) => {
    setGigs(gigs.filter(g => g.id !== id));
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
              <TabsTrigger value="gigs">My Gigs</TabsTrigger>
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