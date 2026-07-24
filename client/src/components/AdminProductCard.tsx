import type { Product } from "../types/Product";

interface AdminProductCardProps {
  product: Product;
}

const AdminProductCard = ({ product }: AdminProductCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg border border-accent bg-white">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-text-muted">{product.category}</p>

        <h3 className="mt-1 text-lg font-medium text-text">{product.title}</h3>

        <p className="mt-2 text-sm text-text">€{product.price}</p>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-md border border-accent px-4 py-2 text-sm text-text transition-colors duration-300 hover:bg-accent-light"
          >
            Edit
          </button>

          <button
            type="button"
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
