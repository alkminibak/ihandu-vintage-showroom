import { Link, useParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { mockProducts } from "../data/mockProducts";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Header />

        <main className="mx-auto min-h-[60vh] max-w-6xl px-16 py-24 text-center">
          <h1 className="text-3xl font-light text-text">
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
              src={product.imageUrl}
              alt={product.title}
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

            <p className="mt-6 text-xl text-text">
              €{product.price}
            </p>

            <p className="mt-8 max-w-md leading-7 text-text-muted">
              {product.description}
            </p>

            <button
              type="button"
              className="mt-10 border border-accent bg-accent-light px-8 py-3 text-sm text-text transition-colors hover:bg-accent"
            >
              Add to wishlist
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
