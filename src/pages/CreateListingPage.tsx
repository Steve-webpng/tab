"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateListingForm from "@/components/forms/CreateListingForm";

const CreateListingPage = () => {
  return (
    <div className="container py-12 md:py-16 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Create New Listing</CardTitle>
          <CardDescription>
            Post a new item for sale in the marketplace or offer a service as a gig.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="product" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="product">New Product</TabsTrigger>
              <TabsTrigger value="gig">New Gig</TabsTrigger>
            </TabsList>
            <TabsContent value="product">
              <CreateListingForm type="product" />
            </TabsContent>
            <TabsContent value="gig">
              <CreateListingForm type="gig" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateListingPage;