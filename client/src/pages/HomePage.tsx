import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../services/products.service";
import type { Product } from "../types/Product";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12 lg:px-16 lg:py-14">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-base font-medium text-text-muted md:text-lg lg:text-xl">
              Latest Arrivals
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
