import { NotFoundError } from "../errors/NotFoundError.js";
import { toWishlistResponse } from "../mappers/wishlist.mapper.js";
import * as productRepository from "../repositories/product.repository.js";
import * as wishlistRepository from "../repositories/wishlist.repository.js";

export const getWishlist = async (userId: string) => {
  const wishlist = await wishlistRepository.findByUserId(userId);

  return wishlist.map(toWishlistResponse);
};

export const addToWishlist = async (userId: string, productId: string) => {
  const product = await productRepository.findById(productId);

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  const wishlistItem = await wishlistRepository.create(userId, productId);

  return toWishlistResponse(wishlistItem);
};

export const removeFromWishlist = async (userId: string, productId: string) => {
  const deletedWishlistItem = await wishlistRepository.deleteByUserAndProduct(
    userId,
    productId,
  );

  if (!deletedWishlistItem) {
    throw new NotFoundError("Wishlist item not found");
  }
};
