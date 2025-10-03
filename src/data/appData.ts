import { ProductCardProps } from "@/components/marketplace/ProductCard";
import { GigCardProps } from "@/components/gigs/GigCard";

// Define a type for user profile data
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  memberSince: string;
}

// Initial dummy data for products
let _products: ProductCardProps[] = [
  {
    id: "p1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Used Calculus Textbook",
    price: 35.00,
    description: "Barely used Calculus textbook, 8th edition. Great condition, no highlights or notes. Essential for any math student.",
    category: "Textbooks",
  },
  {
    id: "p2",
    image: "https://images.unsplash.com/photo-1526178613543-cca70d76678c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mini Fridge",
    price: 80.00,
    description: "Compact mini fridge, perfect for dorm rooms. Keeps drinks and snacks cool. Minor wear and tear, fully functional.",
    category: "Dorm Essentials",
  },
  {
    id: "p3",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa607037dc?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stylish Winter Jacket",
    price: 50.00,
    description: "Warm and stylish winter jacket, size M. Only worn a few times, excellent condition. Perfect for cold campus days.",
    category: "Apparel",
  },
  {
    id: "p4",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gaming Monitor",
    price: 150.00,
    description: "24-inch gaming monitor, 144Hz refresh rate. Great for competitive gaming or extended study sessions. Comes with all cables.",
    category: "Electronics",
  },
  {
    id: "p5",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Another Gaming Monitor",
    price: 120.00,
    description: "27-inch gaming monitor, 75Hz refresh rate. Good for casual gaming or work. Comes with power cable.",
    category: "Electronics",
  },
  {
    id: "p6",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Advanced Physics Textbook",
    price: 40.00,
    description: "Advanced Physics textbook, 3rd edition. Excellent condition. Required for Physics 301.",
    category: "Textbooks",
  },
];

// Initial dummy data for gigs
let _gigs: GigCardProps[] = [
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

// Dummy user profile data
let _userProfile: UserProfile = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@campus.edu",
  avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=JohnDoe", // Placeholder avatar
  bio: "Student at Campus University, passionate about technology and helping others. Selling old textbooks and offering web development services.",
  memberSince: "August 2023",
};

let nextProductId = _products.length + 1;
let nextGigId = _gigs.length + 1;

export const getProducts = (): ProductCardProps[] => [..._products];
export const getGigs = (): GigCardProps[] => [..._gigs];
export const getUserProfile = (): UserProfile => ({ ..._userProfile }); // Return a copy

export const addProduct = (newProduct: Omit<ProductCardProps, 'id'>): ProductCardProps => {
  const productWithId = { ...newProduct, id: `p${nextProductId++}` };
  _products.push(productWithId);
  return productWithId;
};

export const updateProduct = (id: string, updatedFields: Partial<ProductCardProps>): ProductCardProps | undefined => {
  const index = _products.findIndex(p => p.id === id);
  if (index !== -1) {
    _products[index] = { ..._products[index], ...updatedFields };
    return _products[index];
  }
  return undefined;
};

export const deleteProduct = (id: string): boolean => {
  const initialLength = _products.length;
  _products = _products.filter(p => p.id !== id);
  return _products.length < initialLength;
};

export const addGig = (newGig: Omit<GigCardProps, 'id'>): GigCardProps => {
  const gigWithId = { ...newGig, id: `g${nextGigId++}` };
  _gigs.push(gigWithId);
  return gigWithId;
};

export const updateGig = (id: string, updatedFields: Partial<GigCardProps>): GigCardProps | undefined => {
  const index = _gigs.findIndex(g => g.id === id);
  if (index !== -1) {
    _gigs[index] = { ..._gigs[index], ...updatedFields };
    return _gigs[index];
  }
  return undefined;
};

export const deleteGig = (id: string): boolean => {
  const initialLength = _gigs.length;
  _gigs = _gigs.filter(g => g.id !== id);
  return _gigs.length < initialLength;
};

export const updateUserProfile = (updatedFields: Partial<UserProfile>): UserProfile => {
  _userProfile = { ..._userProfile, ...updatedFields };
  return _userProfile;
};