import { Route, Routes } from "react-router";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  );
};

export default App;