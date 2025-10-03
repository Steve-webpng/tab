"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GigCard from "@/components/gigs/GigCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dummyGigs = [
  {
    id: "g1",
    title: "Math Tutoring (Calculus I)",
    description: "Need help with Calculus I? I offer one-on-one tutoring sessions. Experienced in explaining complex topics clearly. Flexible hours.",
    priceRange: "$20-30/hour",
    category: "Academics",
  },
  {
    id: "g2",
    title: "Essay Proofreading & Editing",
    description: "Professional proofreading and editing services for essays, research papers, and assignments. Improve your grades with polished writing.",
    priceRange: "$15-25/page",
    category: "Academics",
  },
  {
    id: "g3",
    title: "Graphic Design for Club Posters",
    description: "Looking for a designer to create eye-catching posters for your club events? I specialize in event promotion graphics.",
    priceRange: "$50-100/project",
    category: "Creative",
  },
  {
    id: "g4",
    title: "Help Moving Dorm Furniture",
    description: "Need an extra pair of hands to move furniture into or out of your dorm? I'm strong and reliable!",
    priceRange: "$30-50/hour",
    category: "Labor",
  },
  {
    id: "g5",
    title: "Event Photography Services",
    description: "Capturing memories at your campus events! High-quality photos for parties, ceremonies, and club gatherings.",
    priceRange: "$75-150/event",
    category: "Creative",
  },
  {
    id: "g6",
    title: "Web Development Assistant",
    description: "Seeking a junior web developer to assist with a small project. Basic knowledge of React and Tailwind CSS required.",
    priceRange: "$25-40/hour",
    category: "Tech",
  },
  {
    id: "g7",
    title: "Chemistry Lab Report Help",
    description: "Struggling with chemistry lab reports? I can help you structure, write, and review your reports for clarity and accuracy.",
    priceRange: "$25-35/hour",
    category: "Academics",
  },
  {
    id: "g8",
    title: "Social Media Content Creator",
    description: "Need engaging content for your club's social media? I create graphics, short videos, and compelling captions.",
    priceRange: "$40-80/project",
    category: "Creative",
  },
];

const gigCategories = ["All", "Academics", "Creative", "Tech", "Labor", "Event Support", "Other"];

const GigsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGigs = dummyGigs.filter((gig) => {
    const matchesSearch = gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          gig.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || gig.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Student Freelance & Gigs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find or offer services to your fellow students. From tutoring to design, discover opportunities to earn or get help!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search gigs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select onValueChange={setSelectedCategory} value={selectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {gigCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredGigs.length === 0 ? (
        <p className="text-center text-muted-foreground text-xl mt-10">No gigs found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} {...gig} />
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Button asChild>
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default GigsPage;