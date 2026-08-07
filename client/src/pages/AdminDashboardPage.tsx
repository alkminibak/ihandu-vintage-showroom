import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

import ProductForm from "../components/ProductForm";
import AdminProductCard from "../components/AdminProductCard";
import type { Product } from "../types/Product";
import { deleteProduct, getProducts } from "../services/products.service";

const AdminDashboardPage = () => {
  // States
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function loadProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    loadProducts();
  }, []);

  // Ref
  const formRef = useRef<HTMLDivElement>(null);

  // Handlers
  const handleAddProduct = (newProduct: Product) => {
    setProducts((previousProducts) => [newProduct, ...previousProducts]);
  };

  const handleDeleteProduct = async (productId: string) => {
    await deleteProduct(productId);

    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== productId),
    );
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );

    setEditingProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 md:py-10 lg:px-6">
      <h1 className="text-3xl font-light text-text md:text-4xl">
        Admin Dashboard
      </h1>

      <div ref={formRef} className="mt-8 md:mt-10">
        <ProductForm
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onCancelEdit={handleCancelEdit}
          editingProduct={editingProduct}
        />
      </div>

      <section className="mt-12 md:mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-light text-text">Products</h2>

          <Link
            to="/"
            className="border-b border-accent pb-1 text-sm text-text transition-colors hover:text-accent"
          >
            Back to collection
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <AdminProductCard
              key={product.id}
              product={product}
              onDeleteProduct={handleDeleteProduct}
              onEditProduct={handleEditProduct}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
