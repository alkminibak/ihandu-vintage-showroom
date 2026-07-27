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
