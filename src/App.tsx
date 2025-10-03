import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import GigsPage from "./pages/GigsPage";
import ProductDetailPage from "./pages/ProductDetailPage"; // Import ProductDetailPage
import GigDetailPage from "./pages/GigDetailPage"; // Import GigDetailPage
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="marketplace/:id" element={<ProductDetailPage />} /> {/* New route for product details */}
            <Route path="gigs" element={<GigsPage />} />
            <Route path="gigs/:id" element={<GigDetailPage />} /> {/* New route for gig details */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;