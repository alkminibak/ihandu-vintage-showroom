import type { Request, Response } from "express";
import { products } from "../data/products.js";

export const getProducts = (_request: Request, response: Response) => {
  response.json(products);
};
