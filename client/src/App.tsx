import { Route, Routes } from "react-router";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import WishlistProvider from "./contexts/WishlistProvider";

const App = () => {
  return (
    <WishlistProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </WishlistProvider>
  );
};

export default App;
