import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { deleteProduct, getProductById } from "../services/products.service";
import type { Product } from "../types/Product";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(false);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user, isAuthenticated } = useAuth();

  const isAdmin = user?.role === "admin";
  const isGuest = !isAuthenticated;

  const isWishlisted =
    isAuthenticated && product ? isInWishlist(product.id) : false;

  useEffect(() => {
    if (!id) {
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

  const handleDeleteProduct = async () => {
    if (!product) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.title}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(product.id);
      navigate("/");
    } catch {
      window.alert("Failed to delete product.");
    }
  };

  const handleEditProduct = () => {
    if (!product) {
      return;
    }

    navigate("/admin", {
      state: {
        editProductId: product.id,
        returnTo: `/products/${product.id}`,
      },
    });
  };

  if (loading) {
    return (
      <>
        <Header />

        <main className="mx-auto min-h-[60vh] max-w-6xl px-6 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
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

        <main className="mx-auto min-h-[60vh] max-w-6xl px-6 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
          <h1 className="text-2xl font-light text-text md:text-3xl">
            Product not found
          </h1>

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
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto max-w-6xl flex-1 px-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-14">
        <Link
          to="/"
          className="inline-block border-b border-accent pb-1 text-sm text-text-muted transition-colors hover:text-accent"
        >
          Back to collection
        </Link>

        <section className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-16">
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

          <div className="pt-0 md:pt-4 lg:pt-8">
            <p className="text-xs uppercase tracking-widest text-text-muted md:text-sm">
              {product.category}
            </p>

            <h1 className="mt-3 text-2xl font-light text-text md:mt-4 md:text-3xl lg:text-4xl">
              {product.title}
            </h1>

            <p className="mt-6 text-xl text-text">€{product.price}</p>

            <p className="mt-6 max-w-md leading-7 text-text-muted md:mt-8">
              {product.description}
            </p>

            {!isAdmin && (
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
                className={`mt-8 border px-6 py-3 text-sm transition-colors md:mt-10 md:px-8 ${
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
            )}

            {isAdmin && (
              <div className="mt-8 flex gap-3 md:mt-10">
                <button
                  type="button"
                  onClick={handleEditProduct}
                  className="border border-accent px-6 py-3 text-sm text-text transition-colors hover:bg-accent-light md:px-8"
                >
                  Edit product
                </button>

                <button
                  type="button"
                  onClick={handleDeleteProduct}
                  className="border border-text-muted px-6 py-3 text-sm text-text transition-colors hover:bg-text-muted/20 md:px-8"
                >
                  Delete product
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
