import type { Request, Response } from "express";

import * as productService from "../services/product.service.js";

export const getProductById = async (
  request: Request<{ id: string }>,
  response: Response,
) => {
  const { id } = request.params;

  const product = await productService.getProductById(id);

  response.json(product);
};

export const getProducts = async (_request: Request, response: Response) => {
  const products = await productService.getProducts();

  response.json(products);
};

export const createProduct = async (request: Request, response: Response) => {
  const newProduct = await productService.createProduct(request.body);

  response.status(201).json(newProduct);
};

export const deleteProduct = async (
  request: Request<{ id: string }>,
  response: Response,
) => {
  const { id } = request.params;

  await productService.deleteProduct(id);

  response.status(204).send();
};

export const updateProduct = async (
  request: Request<{ id: string }>,
  response: Response,
) => {
  const { id } = request.params;

  const updatedProduct = await productService.updateProduct(id, request.body);

  response.json(updatedProduct);
};
