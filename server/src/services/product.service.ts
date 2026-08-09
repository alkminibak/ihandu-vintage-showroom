import type { Product } from "../models/Product.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { toProductResponse } from "../mappers/product.mapper.js";
import * as productRepository from "../repositories/product.repository.js";

export const getProducts = async () => {
  const products = await productRepository.findAll();

  return products.map(toProductResponse);
};

export const getProductById = async (id: string) => {
  const product = await productRepository.findById(id);

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  return toProductResponse(product);
};

export const createProduct = async (productData: Product) => {
  const newProduct = await productRepository.create(productData);

  return toProductResponse(newProduct);
};

export const deleteProduct = async (id: string) => {
  const deletedProduct = await productRepository.deleteById(id);

  if (!deletedProduct) {
    throw new NotFoundError("Product not found");
  }

  await productRepository.deleteWishlistEntriesByProductId(id);
};

export const updateProduct = async (
  id: string,
  productData: Partial<Product>,
) => {
  const updatedProduct = await productRepository.updateById(id, productData);

  if (!updatedProduct) {
    throw new NotFoundError("Product not found");
  }

  return toProductResponse(updatedProduct);
};
