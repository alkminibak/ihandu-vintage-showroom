import { API_URL, getAuthHeaders } from "../config/api";

import type { WishlistItem } from "../types/Wishlist";

export async function getWishlist(): Promise<WishlistItem[]> {
  const response = await fetch(`${API_URL}/wishlist`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  const wishlist = (await response.json()) as WishlistItem[];

  return wishlist;
}

export async function addToWishlist(productId: string): Promise<WishlistItem> {
  const response = await fetch(`${API_URL}/wishlist/${productId}`, {
    method: "POST",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to add product to wishlist");
  }

  const wishlistItem = (await response.json()) as WishlistItem;

  return wishlistItem;
}

export async function removeFromWishlist(productId: string): Promise<void> {
  const response = await fetch(`${API_URL}/wishlist/${productId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to remove product from wishlist");
  }
}
