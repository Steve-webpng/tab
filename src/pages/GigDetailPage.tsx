"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Re-defining dummy gigs for the detail page for simplicity
const dummyGigs = [
  {
    id: "g1",
    title: "Math Tutoring (Calculus I)",
    description: "Need help with Calculus I? I offer one-on-one tutoring sessions. Experienced in explaining complex topics clearly. Flexible hours. I can help with homework, exam preparation, and understanding difficult concepts. Available evenings and weekends. Online sessions via Zoom or in-person on campus.",
    priceRange: "$20-30/hour",
    category: "Academics",
  },
  {
    id: "g2",
    title: "Essay Proofreading & Editing",
    description: "Professional proofreading and editing services for essays, research papers, and assignments. Improve your grades with polished writing. I focus on grammar, syntax, clarity, and flow. Quick turnaround times available. Confidentiality guaranteed. Send me your draft for a quote!",
    priceRange: "$15-25/page",
    category: "Academics",
  },
  {
    id: "g3",
    title: "Graphic Design for Club Posters",
    description: "Looking for a designer to create eye-catching posters for your club events? I specialize in event promotion graphics. From concept to final print-ready files, I'll make sure your event stands out. Portfolio available upon request. Let's make your next event a success!",
    priceRange: "$50-100/project",
    category: "Creative",
  },
  {
    id: "g4",
    title: "Help Moving Dorm Furniture",
    description: "Need an extra pair of hands to move furniture into or out of your dorm? I'm strong and reliable! Available for heavy lifting, packing assistance, and transportation within campus. Flexible scheduling to fit your move-in/move-out dates. Rates negotiable based on amount of work.",
    priceRange: "$30-50/hour",
    category: "Labor",
  },
  {
    id: "g5",
    title: "Event Photography Services",
    description: "Capturing memories at your campus events! High-quality photos for parties, ceremonies, and club gatherings. I use professional equipment and provide edited digital photos. Packages available for different event sizes and durations. Let's discuss your event's needs!",
    priceRange: "$75-150/event",
    category: "Creative",
  },
  {
    id: "g6",
    title: "Web Development Assistant",
    description: "Seeking a junior web developer to assist with a small project. Basic knowledge of React and Tailwind CSS required. This is a great opportunity to gain practical experience. Tasks include component development, styling, and bug fixes. Flexible hours, remote work possible.",
    priceRange: "$25-40/hour",
    category: "Tech",
  },
];

const GigDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const gig = dummyGigs.find((g) => g.id === id);

  if (!gig) {
    return (
      <div className="container min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Gig Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The gig you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to="/gigs">Back to Gigs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{gig.title}</CardTitle>
          {gig.category && <CardDescription className="text-lg text-muted-foreground">{gig.category}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground mb-4">{gig.description}</p>
          {gig.priceRange && <p className="text-xl font-semibold text-primary">Budget: {gig.priceRange}</p>}
        </CardContent>
        <div className="p-6 pt-0 flex flex-col space-y-4">
          <Button className="w-full">Contact Student</Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/gigs">Back to Gigs</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GigDetailPage;