import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Renamed from Index
import MarketplacePage from "./pages/MarketplacePage";
import GigsPage from "./pages/GigsPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout"; // Import the new Layout component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> {/* Use Layout to wrap common elements */}
            <Route index element={<HomePage />} /> {/* HomePage as the default route */}
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="gigs" element={<GigsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;