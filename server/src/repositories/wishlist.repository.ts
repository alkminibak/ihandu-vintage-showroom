import { Types } from "mongoose";

import { WishlistModel } from "../models/Wishlist.js";

export const findByUserId = async (userId: string) => {
  return WishlistModel.find({
    userId,
  }).populate("productId");
};

export const create = async (userId: string, productId: string) => {
  const wishlistItem = await WishlistModel.create({
    userId: new Types.ObjectId(userId),
    productId: new Types.ObjectId(productId),
  });

  await wishlistItem.populate("productId");

  return wishlistItem;
};

export const deleteByUserAndProduct = async (
  userId: string,
  productId: string,
) => {
  return WishlistModel.findOneAndDelete({
    userId: new Types.ObjectId(userId),
    productId: new Types.ObjectId(productId),
  });
};
