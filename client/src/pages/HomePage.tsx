import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/mockProducts";

const HomePage = () => {
  return (
    <main>
      <header>
        <h1>I Hand U</h1>
        <p>Curated Vintage Collection</p>
      </header>

      <section>
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePage;