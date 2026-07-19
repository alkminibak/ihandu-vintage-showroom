import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="block h-auto w-full"
      />

      <h2 className="mt-4 text-lg font-medium text-text">
        {product.title}
      </h2>

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