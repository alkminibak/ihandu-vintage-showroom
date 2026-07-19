import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/mockProducts";

const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-16 py-14">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-medium text-text-muted">
              Latest Arrivals
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-x-8 gap-y-12">
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;