import { ProductModel } from "../models/Product.js";
import { WishlistModel } from "../models/Wishlist.js";
import { toProductResponse } from "./product.mapper.js";

type PopulatedWishlistItem = InstanceType<typeof WishlistModel> & {
  productId: InstanceType<typeof ProductModel>;
};

export function toWishlistResponse(
  wishlistItem: InstanceType<typeof WishlistModel>,
) {
  const populatedWishlistItem = wishlistItem as PopulatedWishlistItem;

  return {
    id: populatedWishlistItem._id.toString(),
    product: toProductResponse(populatedWishlistItem.productId),
    createdAt: populatedWishlistItem.createdAt,
    updatedAt: populatedWishlistItem.updatedAt,
  };
}
