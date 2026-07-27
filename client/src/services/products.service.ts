import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/products");

  const products = (await response.json()) as Product[];

  return products;
}
