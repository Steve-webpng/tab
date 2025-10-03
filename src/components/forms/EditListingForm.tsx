"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showSuccess, showError } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

type ListingType = "product" | "gig";

interface EditListingFormProps {
  type: ListingType;
  initialData: {
    id: string;
    title: string;
    description: string;
    price?: number; // For products
    priceRange?: string; // For gigs
    category?: string;
    image?: string; // For products
  };
  onSave: (id: string, updatedData: any) => void;
}

const EditListingForm: React.FC<EditListingFormProps> = ({ type, initialData, onSave }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [price, setPrice] = useState(initialData.price ? initialData.price.toString() : initialData.priceRange || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [imageUrl, setImageUrl] = useState(initialData.image || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(initialData.title);
    setDescription(initialData.description);
    setPrice(initialData.price ? initialData.price.toString() : initialData.priceRange || "");
    setCategory(initialData.category || "");
    setImageUrl(initialData.image || "");
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = type === "product"
      ? { title, description, price: parseFloat(price), category, image: imageUrl }
      : { title, description, priceRange: price, category };

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSave(initialData.id, updatedData);
      showSuccess(`${type === "product" ? "Product" : "Gig"} updated successfully!`);
      if (type === "product") {
        navigate("/seller-dashboard");
      } else {
        navigate("/seller-dashboard");
      }
    }, 1500);
  };

  const categories = type === "product"
    ? ["Textbooks", "Electronics", "Apparel", "Dorm Essentials", "Other"]
    : ["Academics", "Creative", "Tech", "Labor", "Event Support", "Other"];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          placeholder={`e.g., Used Calculus Textbook ${type === "gig" ? "or Math Tutoring" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder={`Provide a detailed description of your ${type}.`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">{type === "product" ? "Price ($)" : "Price Range (e.g., $20-30/hour)"}</Label>
        <Input
          id="price"
          type="text"
          placeholder={type === "product" ? "e.g., 35.00" : "e.g., $20-30/hour"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={setCategory} value={category} required>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {type === "product" && (
        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            type="url"
            placeholder="e.g., https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
      )}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Saving..." : `Save ${type === "product" ? "Product" : "Gig"}`}
      </Button>
    </form>
  );
};

export default EditListingForm;