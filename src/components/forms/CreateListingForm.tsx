"use client";

import React from "react";
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

type ListingType = "product" | "gig";

interface CreateListingFormProps {
  type: ListingType;
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

const CreateListingForm: React.FC<CreateListingFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const categories = type === "product" ? productCategories : gigCategories;

  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema(type)),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      imageUrl: "",
    },
  });

  const onSubmit = (values: z.infer<ReturnType<typeof formSchema>>) => {
    // In a real app, you would send this data to a backend API.
    console.log(`Submitting new ${type}:`, values);

    // Simulate API call
    setTimeout(() => {
      showSuccess(`${type === "product" ? "Product" : "Gig"} created successfully!`);
      if (type === "product") {
        navigate("/marketplace");
      } else {
        navigate("/gigs");
      }
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          {form.formState.isSubmitting ? "Submitting..." : `Post ${type === "product" ? "Product" : "Gig"}`}
        </Button>
      </form>
    </Form>
  );
};

export default CreateListingForm;