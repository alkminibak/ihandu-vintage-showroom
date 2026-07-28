import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/products");

  const products = (await response.json()) as Product[];

  return products;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`http://localhost:3000/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product = (await response.json()) as Product;

  return product;
}

export type CreateProductData = Omit<Product, "id" | "createdAt">;

export async function createProduct(
  productData: CreateProductData,
): Promise<Product> {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  const newProduct = (await response.json()) as Product;

  return newProduct;
}
