import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/mockProducts";
import EmptyWishlist from "../components/EmptyWishlist";

const WishlistPage = () => {
  const wishlistProducts = mockProducts.slice(0, 0); // mock data

  return (
    <>
      <Header />

      <main className="mx-auto min-h-[60vh] max-w-6xl px-16 py-14">
        <section>
          <p className="text-xs uppercase tracking-widest text-text-muted">
            Saved pieces ({wishlistProducts.length})
          </p>

          <h1 className="mt-4 text-3xl font-light text-text">
            My Wishlist
          </h1>

          {!wishlistProducts.length ? (
            <EmptyWishlist />
          ) : (
            <div className="mt-12 grid grid-cols-4 gap-x-8 gap-y-12">
              {wishlistProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showWishlistButton={false}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WishlistPage;