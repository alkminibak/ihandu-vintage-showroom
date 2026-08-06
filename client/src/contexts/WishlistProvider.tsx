import { useEffect, useState, type ReactNode } from "react";

import { WishlistContext } from "./WishlistContext";
import type { WishlistItem } from "../types/Wishlist";

import {
  getWishlist,
  addToWishlist as addToWishlistRequest,
  removeFromWishlist as removeFromWishlistRequest,
} from "../services/wishlist.service";

interface WishlistProviderProps {
  children: ReactNode;
}

export default function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );

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

  const addToWishlist = async (productId: string) => {
    await addToWishlistRequest(productId);

    await refreshWishlist();
  };

  const removeFromWishlist = async (productId: string) => {
    await removeFromWishlistRequest(productId);

    await refreshWishlist();
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.product.id === productId);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    let cancelled = false;

    const loadWishlist = async () => {
      try {
        const wishlist = await getWishlist();

        if (!cancelled) {
          setWishlist(wishlist);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void loadWishlist();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        refreshWishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
