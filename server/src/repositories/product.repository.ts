import { ProductModel, type Product } from "../models/Product.js";
import { WishlistModel } from "../models/Wishlist.js";

export const findAll = async () => {
  return ProductModel.find().sort({ createdAt: -1 });
};

export const findById = async (id: string) => {
  return ProductModel.findById(id);
};

export const create = async (productData: Product) => {
  return ProductModel.create(productData);
};

export const deleteById = async (id: string) => {
  return ProductModel.findByIdAndDelete(id);
};

export const deleteWishlistEntriesByProductId = async (productId: string) => {
  return WishlistModel.deleteMany({ productId });
};

export const updateById = async (id: string, productData: Partial<Product>) => {
  return ProductModel.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
};
