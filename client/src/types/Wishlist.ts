import type { Product } from "./Product";

export interface WishlistItem {
  id: string;
  product: Product;
  createdAt: string;
  updatedAt: string;
}
