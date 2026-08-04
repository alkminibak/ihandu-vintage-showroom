import { Link } from "react-router";

import type { Product } from "../types/Product";

import { useWishlist } from "../hooks/useWishlist";

interface ProductCardProps {
  product: Product;
  showWishlistButton?: boolean;
}

const ProductCard = ({
  product,
  showWishlistButton = true,
}: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);
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
        <p className="text-text-muted">€{product.price}</p>

        {showWishlistButton && (
          <button
            type="button"
            aria-label={`${isWishlisted ? "Remove" : "Add"} ${product.title} ${isWishlisted ? "from" : "to"} wishlist`}
            className="text-2xl leading-none text-accent transition-colors hover:text-text"
            onClick={async (event) => {
              event.preventDefault();

              if (isWishlisted) {
                await removeFromWishlist(product.id);
              } else {
                await addToWishlist(product.id);
              }
            }}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
