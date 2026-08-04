import { createContext } from "react";
import type { WishlistItem } from "../types/Wishlist";

export interface WishlistContextValue {
  wishlist: WishlistItem[];
  loading: boolean;

  refreshWishlist: () => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;

  isInWishlist: (productId: string) => boolean;
}

export const WishlistContext = createContext<WishlistContextValue | null>(null);
