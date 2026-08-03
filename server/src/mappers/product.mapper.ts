import { ProductModel } from "../models/Product.js";

export function toProductResponse(product: InstanceType<typeof ProductModel>) {
  return {
    id: product._id.toString(),
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    imageUrl: product.imageUrl,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
}
