import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import GigsPage from "./pages/GigsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GigDetailPage from "./pages/GigDetailPage";
import CreateListingPage from "./pages/CreateListingPage";
import SellerDashboardPage from "./pages/SellerDashboardPage"; // New import
import EditProductPage from "./pages/EditProductPage"; // New import
import EditGigPage from "./pages/EditGigPage"; // New import
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="marketplace/:id" element={<ProductDetailPage />} />
          <Route path="gigs" element={<GigsPage />} />
          <Route path="gigs/:id" element={<GigDetailPage />} />
          <Route path="create-listing" element={<CreateListingPage />} />
          <Route path="seller-dashboard" element={<SellerDashboardPage />} /> {/* New route */}
          <Route path="seller-dashboard/products/:id/edit" element={<EditProductPage />} /> {/* New route */}
          <Route path="seller-dashboard/gigs/:id/edit" element={<EditGigPage />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;