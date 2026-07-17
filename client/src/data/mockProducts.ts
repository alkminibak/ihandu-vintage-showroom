import type { Product } from "../types/Product";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    description:
      "Oversized vintage denim jacket in excellent condition.",
    price: 35,
    category: "Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    createdAt: "2026-07-17T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Silk Patterned Shirt",
    description:
      "Lightweight vintage shirt with a relaxed fit and abstract pattern.",
    price: 18,
    category: "Shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    createdAt: "2026-07-17T10:05:00.000Z",
  },
  {
    id: "3",
    title: "Vintage Leather Coat",
    description:
      "Long vintage leather coat with a structured silhouette.",
    price: 75,
    category: "Outerwear",
    imageUrl:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f",
    createdAt: "2026-07-17T10:10:00.000Z",
  },
];