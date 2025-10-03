"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GigCard from "@/components/gigs/GigCard";

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
];

const GigsPage = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Student Freelance & Gigs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find or offer services to your fellow students. From tutoring to design, discover opportunities to earn or get help!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyGigs.map((gig) => (
          <GigCard key={gig.id} {...gig} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild>
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default GigsPage;