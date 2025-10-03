"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showSuccess, showError } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

type ListingType = "product" | "gig";

interface CreateListingFormProps {
  type: ListingType;
}

const CreateListingForm: React.FC<CreateListingFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real app, you would send this data to a backend API.
    // For now, we'll just simulate a successful submission.
    console.log(`Submitting new ${type}:`, { title, description, price, category, imageUrl });

    setTimeout(() => {
      setLoading(false);
      showSuccess(`${type === "product" ? "Product" : "Gig"} created successfully!`);
      if (type === "product") {
        navigate("/marketplace");
      } else {
        navigate("/gigs");
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
        <Select onValueChange={setCategory} required>
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
        {loading ? "Submitting..." : `Post ${type === "product" ? "Product" : "Gig"}`}
      </Button>
    </form>
  );
};

export default CreateListingForm;