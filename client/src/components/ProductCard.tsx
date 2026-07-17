import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article>
      <img src={product.imageUrl} alt={product.title} />

      <h2>{product.title}</h2>

      <p>€{product.price}</p>
    </article>
  );
};

export default ProductCard;