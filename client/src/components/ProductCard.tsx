import { Link } from "react-router";

import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="block h-auto w-full transition-opacity hover:opacity-90"
        />

        <h2 className="mt-4 text-lg font-medium text-text transition-colors hover:text-accent">
          {product.title}
        </h2>
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-text-muted">
          €{product.price}
        </p>

        <button
          type="button"
          aria-label={`Add ${product.title} to wishlist`}
          className="text-2xl leading-none text-accent transition-colors hover:text-text"
        >
          ♡
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
