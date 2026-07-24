import { useState } from "react";
import ProductForm from "../components/ProductForm";
import AdminProductCard from "../components/AdminProductCard";
import { mockProducts } from "../data/mockProducts";
import type { Product } from "../types/Product";

const AdminDashboardPage = () => {
  const [products, setProducts] = useState(mockProducts);

  const handleAddProduct = (newProduct: Product) => {
    setProducts((previousProducts) => [newProduct, ...previousProducts]);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-light text-text">Admin Dashboard</h1>

      <div className="mt-10">
        <ProductForm onAddProduct={handleAddProduct} />
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-light text-text">Products</h2>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {products.map((product) => (
            <AdminProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
