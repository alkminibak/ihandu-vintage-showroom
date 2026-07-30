import type { Request, Response } from "express";
import { products } from "../data/products.js";
import { ProductModel } from "../models/Product.js";

export const getProductById = async (request: Request, response: Response) => {
  const { id } = request.params;

  const product = await ProductModel.findById(id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.json(product);
};

export const getProducts = async (_request: Request, response: Response) => {
  const productDocuments = await ProductModel.find();
  response.json(productDocuments);
};

export const createProduct = async (request: Request, response: Response) => {
  const newProduct = await ProductModel.create(request.body);

  response.status(201).json(newProduct);
};

export const deleteProduct = async (request: Request, response: Response) => {
  const { id } = request.params;

  const deletedProduct = await ProductModel.findByIdAndDelete(id);

  if (!deletedProduct) {
    response.status(404).json({
      message: "Product not found",
    });
    return;
  }

  response.status(204).send();
};

export const updateProduct = async (request: Request, response: Response) => {
  const { id } = request.params;

  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    request.body,
    {
      new: true,
    },
  );

  if (!updatedProduct) {
    response.status(404).json({
      message: "Product not found",
    });
    return;
  }

  response.status(200).json(updatedProduct);
};
