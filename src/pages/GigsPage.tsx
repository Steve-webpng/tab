"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GigCard from "@/components/gigs/GigCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getGigs } from "@/data/appData"; // Import centralized data functions

const gigCategories = ["All", "Academics", "Creative", "Tech", "Labor", "Event Support", "Other"];

const GigsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allGigs, setAllGigs] = useState(getGigs()); // Initialize with centralized data

  // Re-fetch gigs if the data changes (e.g., after creating a new gig)
  useEffect(() => {
    setAllGigs(getGigs());
  }, []); // Empty dependency array means this runs once on mount

  const filteredGigs = allGigs.filter((gig) => {
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