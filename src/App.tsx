import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import GigsPage from "./pages/GigsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GigDetailPage from "./pages/GigDetailPage";
import CreateListingPage from "./pages/CreateListingPage";
import SellerDashboardPage from "./pages/SellerDashboardPage";
import EditProductPage from "./pages/EditProductPage";
import EditGigPage from "./pages/EditGigPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage"; // New import
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/AuthContext"; // New import
import ProtectedRoute from "./components/auth/ProtectedRoute"; // New import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider> {/* Wrap the entire app with AuthProvider */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="marketplace/:id" element={<ProductDetailPage />} />
            <Route path="gigs" element={<GigsPage />} />
            <Route path="gigs/:id" element={<GigDetailPage />} />
            <Route path="login" element={<LoginPage />} /> {/* Login route */}

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="create-listing" element={<CreateListingPage />} />
              <Route path="seller-dashboard" element={<SellerDashboardPage />} />
              <Route path="seller-dashboard/products/:id/edit" element={<EditProductPage />} />
              <Route path="seller-dashboard/gigs/:id/edit" element={<EditGigPage />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;