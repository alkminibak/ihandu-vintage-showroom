import { toProductResponse } from "../mappers/product.mapper.js";
import type { Request, Response } from "express";
import { ProductModel } from "../models/Product.js";
import { WishlistModel } from "../models/Wishlist.js";
import { NotFoundError } from "../errors/NotFoundError.js";

export const getProductById = async (request: Request, response: Response) => {
  const { id } = request.params;

  const product = await ProductModel.findById(id);

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  response.json(toProductResponse(product));
};

export const getProducts = async (_request: Request, response: Response) => {
  const products = await ProductModel.find().sort({ createdAt: -1 });

  response.json(products.map(toProductResponse));
};

export const createProduct = async (request: Request, response: Response) => {
  const newProduct = await ProductModel.create(request.body);

  response.status(201).json(toProductResponse(newProduct));
};

export const deleteProduct = async (request: Request, response: Response) => {
  const { id } = request.params;

  const deletedProduct = await ProductModel.findByIdAndDelete(id);

  if (!deletedProduct) {
    throw new NotFoundError("Product not found");
  }

  await WishlistModel.deleteMany({ productId: id });

  response.status(204).send();
};

export const updateProduct = async (request: Request, response: Response) => {
  const { id } = request.params;

  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    request.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedProduct) {
    throw new NotFoundError("Product not found");
  }

  response.json(toProductResponse(updatedProduct));
};
