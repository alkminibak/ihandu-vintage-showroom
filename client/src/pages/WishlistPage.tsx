import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import EmptyWishlist from "../components/EmptyWishlist";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";

const WishlistPage = () => {
  const { isAuthenticated } = useAuth();
  const { wishlist, loading } = useWishlist();

  const wishlistProducts = wishlist.map((item) => item.product);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-14">
          <section>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Saved pieces
            </p>

            <h1 className="mt-4 text-xl font-light text-text md:text-3xl">
              My Wishlist
            </h1>

            <EmptyWishlist isGuest />
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-14">
          <p className="text-sm text-text-muted">Loading wishlist...</p>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-14">
        <section>
          <p className="text-xs uppercase tracking-widest text-text-muted">
            Saved pieces ({wishlistProducts.length})
          </p>

          <h1 className="mt-4 text-xl font-light text-text md:text-3xl">
            My Wishlist
          </h1>

          {!wishlistProducts.length ? (
            <EmptyWishlist />
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;
