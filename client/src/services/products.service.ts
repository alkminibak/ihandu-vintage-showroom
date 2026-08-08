import { API_URL } from "../config/api";

import type { Product } from "../types/Product";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  const products = (await response.json()) as Product[];

  return products;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product = (await response.json()) as Product;

  return product;
}

export type CreateProductData = Omit<Product, "id" | "createdAt" | "updatedAt">;

export interface ApiError {
  message: string;
  errors?: string[];
}

export async function createProduct(
  productData: CreateProductData,
): Promise<Product> {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const error = (await response.json()) as ApiError;

    throw error;
  }

  const newProduct = (await response.json()) as Product;

  return newProduct;
}

export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
}

export async function updateProduct(
  id: string,
  productData: CreateProductData,
): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const error = (await response.json()) as ApiError;

    throw error;
  }

  const updatedProduct: Product = await response.json();

  return updatedProduct;
}
