import type { WishlistItem } from "../types/Wishlist";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getWishlist(): Promise<WishlistItem[]> {
  const response = await fetch("http://localhost:3000/wishlist", {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  const wishlist = (await response.json()) as WishlistItem[];

  return wishlist;
}

export async function addToWishlist(productId: string): Promise<WishlistItem> {
  const response = await fetch(`http://localhost:3000/wishlist/${productId}`, {
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
  const response = await fetch(`http://localhost:3000/wishlist/${productId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to remove product from wishlist");
  }
}
