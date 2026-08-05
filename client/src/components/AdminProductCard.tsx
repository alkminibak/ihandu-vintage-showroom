import { Link } from "react-router";
import { useState } from "react";
import type { Product } from "../types/Product";

const PLACEHOLDER_IMAGE = "/image-placeholder.png";

interface AdminProductCardProps {
  product: Product;
  onDeleteProduct: (productId: string) => void;
  onEditProduct: (product: Product) => void;
}

const AdminProductCard = ({
  product,
  onDeleteProduct,
  onEditProduct,
}: AdminProductCardProps) => {
  const [imageSrc, setImageSrc] = useState(product.imageUrl);

  return (
    <article className="overflow-hidden rounded-lg border border-accent bg-white">
      <Link to={`/products/${product.id}`}>
        <img
          src={imageSrc}
          alt={product.title}
          onError={() => setImageSrc(PLACEHOLDER_IMAGE)}
          className="w-full object-cover transition-opacity hover:opacity-90"
        />
      </Link>

      <div className="p-5">
        <p className="text-sm text-text-muted">{product.category}</p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 text-lg font-medium text-text transition-colors hover:text-accent">
            {product.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-text">€{product.price}</p>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => onEditProduct(product)}
            className="flex-1 rounded-md border border-accent px-4 py-2 text-sm text-text transition-colors duration-300 hover:bg-accent-light"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDeleteProduct(product.id)}
            className="flex-1 rounded-md border border-text-muted px-4 py-2 text-sm text-text transition-colors duration-300 hover:bg-text-muted/20"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default AdminProductCard;
