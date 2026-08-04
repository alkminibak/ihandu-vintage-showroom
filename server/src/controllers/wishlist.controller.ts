import type { Request, Response } from "express";
import { Types } from "mongoose";
import { WishlistModel } from "../models/Wishlist.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { toWishlistResponse } from "../mappers/wishlist.mapper.js";

export const getWishlist = async (request: Request, response: Response) => {
  const userId = request.user?.userId;
  const wishlist = await WishlistModel.find({
    userId,
  }).populate("productId");

  response.json(wishlist.map(toWishlistResponse));
};

export const addToWishlist = async (
  request: Request<{ productId: string }>,
  response: Response,
) => {
  const userId = request.user?.userId;
  const { productId } = request.params;

  const wishlistData = {
    userId: new Types.ObjectId(userId),
    productId: new Types.ObjectId(productId),
  };

  const wishlistItem = await WishlistModel.create(wishlistData);

  await wishlistItem.populate("productId");

  response.status(201).json(toWishlistResponse(wishlistItem));
};

export const removeFromWishlist = async (
  request: Request<{ productId: string }>,
  response: Response,
) => {
  const userId = request.user?.userId;
  const { productId } = request.params;

  const deletedWishlistItem = await WishlistModel.findOneAndDelete({
    userId: new Types.ObjectId(userId),
    productId: new Types.ObjectId(productId),
  });

  if (!deletedWishlistItem) {
    throw new NotFoundError("Wishlist item not found");
  }

  response.status(204).send();
};
