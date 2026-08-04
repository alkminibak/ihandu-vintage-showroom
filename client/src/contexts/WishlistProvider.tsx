import { useEffect, useState, type ReactNode } from "react";

import { WishlistContext } from "./WishlistContext";
import type { WishlistItem } from "../types/Wishlist";

import { getWishlist } from "../services/wishlist.service";

interface WishlistProviderProps {
  children: ReactNode;
}

export default function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);

  const refreshWishlist = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setWishlist([]);
      return;
    }

    setLoading(true);

    try {
      const wishlist = await getWishlist();

      setWishlist(wishlist);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        refreshWishlist,
        addToWishlist: async () => {},
        removeFromWishlist: async () => {},
        isInWishlist: () => false,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
