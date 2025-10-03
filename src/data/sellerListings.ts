import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { GigCardProps } from "@/components/gigs/GigCard";

// Dummy data for products posted by the current seller
export const sellerProducts: ProductCardProps[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Used Calculus Textbook",
    price: 35.00,
    description: "Barely used Calculus textbook, 8th edition. Great condition, no highlights or notes. Essential for any math student.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1526178613543-cca70d76678c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mini Fridge",
    price: 80.00,
    description: "Compact mini fridge, perfect for dorm rooms. Keeps drinks and snacks cool. Minor wear and tear, fully functional.",
  },
];

// Dummy data for gigs posted by the current seller
export const sellerGigs: GigCardProps[] = [
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
];