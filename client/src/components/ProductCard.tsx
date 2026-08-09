import { Link } from "react-router";

import type { Product } from "../types/Product";

import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";

interface ProductCardProps {
  product: Product;
  showWishlistButton?: boolean;
}

const ProductCard = ({
  product,
  showWishlistButton = true,
}: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user, isAuthenticated } = useAuth();

  const isAdmin = user?.role === "admin";
  const isGuest = !isAuthenticated;
  const isWishlisted = isAuthenticated && isInWishlist(product.id);
  return (
    <article>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl || "/image-placeholder.png"}
          alt={product.title}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/image-placeholder.png";
          }}
          className="block h-auto w-full transition-opacity hover:opacity-90"
        />

        <h2 className="mt-3 text-base font-medium text-text transition-colors hover:text-accent md:mt-4 md:text-lg">
          {product.title}
        </h2>
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-text-muted md:text-base">€{product.price}</p>

        {showWishlistButton && !isAdmin && (
          <button
            type="button"
            disabled={isGuest}
            title={
              isGuest ? "Register or log in to use the wishlist" : undefined
            }
            aria-label={
              isGuest
                ? "Register or log in to use the wishlist"
                : `${isWishlisted ? "Remove" : "Add"} ${product.title} ${
                    isWishlisted ? "from" : "to"
                  } wishlist`
            }
            className={`text-xl leading-none transition-colors md:text-2xl ${
              isGuest
                ? "cursor-default text-text-muted opacity-50"
                : "text-accent hover:text-text"
            }`}
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
