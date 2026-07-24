import { useState } from "react";
import type { Product } from "../types/Product";

const initialFormData = {
  title: "",
  price: "",
  category: "",
  imageUrl: "",
  description: "",
};

interface ProductFormProps {
  onAddProduct: (newProduct: Product) => void;
}

const ProductForm = ({ onAddProduct }: ProductFormProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const product: Product = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      imageUrl: formData.imageUrl,
      createdAt: new Date().toISOString(),
    };

    onAddProduct(product);

    setFormData(initialFormData);
  };

  return (
    <section className="max-w-3xl rounded-lg border border-accent bg-accent-light p-8">
      <h2 className="text-2xl font-light text-text">Add New Product</h2>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-text"
            >
              Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-text"
              >
                Price
              </label>

              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-text"
              >
                Category
              </label>

              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-text"
            >
              Image URL
            </label>

            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://..."
              value={formData.imageUrl}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-text"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              value={formData.description}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md border border-accent bg-accent px-6 py-2.5 text-text transition-colors duration-300 hover:bg-accent-light"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
