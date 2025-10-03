"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { updateProduct, updateGig } from "@/data/appData"; // Import centralized data functions

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
  onSave: (id: string, updatedData: any) => void; // Keep onSave for local state updates in parent
}

const productCategories = ["Textbooks", "Electronics", "Apparel", "Dorm Essentials", "Other"];
const gigCategories = ["Academics", "Creative", "Tech", "Labor", "Event Support", "Other"];

const formSchema = (type: ListingType) =>
  z.object({
    title: z.string().min(5, {
      message: "Title must be at least 5 characters.",
    }).max(100, {
      message: "Title must not be longer than 100 characters.",
    }),
    description: z.string().min(20, {
      message: "Description must be at least 20 characters.",
    }).max(500, {
      message: "Description must not be longer than 500 characters.",
    }),
    price: type === "product"
      ? z.string().regex(/^\d+(\.\d{1,2})?$/, {
          message: "Price must be a valid number (e.g., 35.00).",
        }).transform(Number)
      : z.string().min(5, {
          message: "Price range is required (e.g., $20-30/hour).",
        }).max(50, {
          message: "Price range must not be longer than 50 characters.",
        }),
    category: z.string().min(1, {
      message: "Please select a category.",
    }),
    imageUrl: type === "product"
      ? z.string().url({ message: "Must be a valid URL." }).optional().or(z.literal(""))
      : z.string().optional(), // Gigs don't have images
  });

const EditListingForm: React.FC<EditListingFormProps> = ({ type, initialData, onSave }) => {
  const navigate = useNavigate();
  const categories = type === "product" ? productCategories : gigCategories;

  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema(type)),
    defaultValues: {
      title: initialData.title,
      description: initialData.description,
      price: initialData.price ? initialData.price.toString() : initialData.priceRange || "",
      category: initialData.category || "",
      imageUrl: initialData.image || "",
    },
  });

  // Reset form with new initialData if it changes (e.g., navigating between edit pages)
  useEffect(() => {
    form.reset({
      title: initialData.title,
      description: initialData.description,
      price: initialData.price ? initialData.price.toString() : initialData.priceRange || "",
      category: initialData.category || "",
      imageUrl: initialData.image || "",
    });
  }, [initialData, form]);

  const onSubmit = (values: z.infer<ReturnType<typeof formSchema>>) => {
    const updatedData = type === "product"
      ? { ...values, price: values.price as number, image: values.imageUrl } // Ensure price is number for product
      : { ...values, priceRange: values.price as string }; // Ensure price is string for gig

    // Simulate API call
    setTimeout(() => {
      if (type === "product") {
        updateProduct(initialData.id, updatedData);
      } else {
        updateGig(initialData.id, updatedData);
      }
      onSave(initialData.id, updatedData); // Still call parent's onSave to update local state in dashboard
      showSuccess(`${type === "product" ? "Product" : "Gig"} updated successfully!`);
      navigate("/seller-dashboard"); // Navigate back to dashboard after saving
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder={`e.g., Used Calculus Textbook ${type === "gig" ? "or Math Tutoring" : ""}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Provide a detailed description of your ${type}.`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{type === "product" ? "Price ($)" : "Price Range (e.g., $20-30/hour)"}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={type === "product" ? "e.g., 35.00" : "e.g., $20-30/hour"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {type === "product" && (
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="e.g., https://example.com/image.jpg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Saving..." : `Save ${type === "product" ? "Product" : "Gig"}`}
        </Button>
      </form>
    </Form>
  );
};

export default EditListingForm;