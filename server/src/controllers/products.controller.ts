import type { Request, Response } from "express";
import { products } from "../data/products.js";

export const getProductById = (request: Request, response: Response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.json(product);
};

export const getProducts = (_request: Request, response: Response) => {
  response.json(products);
};

export const createProduct = (request: Request, response: Response) => {
  const newProduct = {
    ...request.body,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  products.unshift(newProduct);

  response.status(201).json(newProduct);
};

export const deleteProduct = (request: Request, response: Response) => {
  const { id } = request.params;

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    response.status(404).json({
      message: "Product not found",
    });
    return;
  }

  products.splice(productIndex, 1);

  response.status(204).send();
};

export const updateProduct = (request: Request, response: Response) => {
  const { id } = request.params;

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    response.status(404).json({
      message: "Product not found",
    });
    return;
  }

  const updatedProduct = {
    ...products[productIndex],
    ...request.body,
    id: products[productIndex].id,
    createdAt: products[productIndex].createdAt,
  };

  products[productIndex] = updatedProduct;

  response.status(200).json(updatedProduct);
};
