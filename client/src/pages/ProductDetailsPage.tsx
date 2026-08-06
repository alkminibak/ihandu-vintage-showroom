import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProductById } from "../services/products.service";
import type { Product } from "../types/Product";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();

  const isWishlisted =
    isAuthenticated && product ? isInWishlist(product.id) : false;

  const isGuest = !isAuthenticated;

  useEffect(() => {
    if (!id) {
      setError(true);
      setLoading(false);
      return;
    }

    getProductById(id)
      .then((product) => {
        setProduct(product);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />

        <main className="mx-auto min-h-[60vh] max-w-6xl px-16 py-24 text-center">
          <p className="text-text-muted">Loading product...</p>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />

        <main className="mx-auto min-h-[60vh] max-w-6xl px-16 py-24 text-center">
          <h1 className="text-3xl font-light text-text">Product not found</h1>

          <p className="mt-4 text-text-muted">
            The product you are looking for is no longer available.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block border-b border-accent pb-1 text-sm text-text transition-colors hover:text-accent"
          >
            Back to collection
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-16 py-14">
        <Link
          to="/"
          className="inline-block border-b border-accent pb-1 text-sm text-text-muted transition-colors hover:text-accent"
        >
          Back to collection
        </Link>

        <section className="mt-10 grid grid-cols-2 gap-16">
          <div>
            <img
              src={product.imageUrl || "/image-placeholder.png"}
              alt={product.title}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/image-placeholder.png";
              }}
              className="block w-full"
            />
          </div>

          <div className="pt-8">
            <p className="text-sm uppercase tracking-widest text-text-muted">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-light text-text">
              {product.title}
            </h1>

            <p className="mt-6 text-xl text-text">€{product.price}</p>

            <p className="mt-8 max-w-md leading-7 text-text-muted">
              {product.description}
            </p>

            <button
              type="button"
              disabled={isGuest}
              title={
                isGuest ? "Register or log in to use the wishlist" : undefined
              }
              onClick={async () => {
                if (isWishlisted) {
                  await removeFromWishlist(product.id);
                } else {
                  await addToWishlist(product.id);
                }
              }}
              className={`mt-10 border px-8 py-3 text-sm transition-colors ${
                isGuest
                  ? "cursor-default border-text-muted bg-background text-text-muted opacity-50"
                  : "border-accent bg-accent-light text-text hover:bg-accent"
              }`}
            >
              {isGuest
                ? "Register / Login to use wishlist"
                : isWishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
