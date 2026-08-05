import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import {
  createProduct,
  updateProduct,
  type CreateProductData,
  type ApiError,
} from "../services/products.service";

interface ProductFormData {
  title: string;
  price: string;
  category: string;
  imageUrl: string;
  description: string;
}

const initialFormData: ProductFormData = {
  title: "",
  price: "",
  category: "",
  imageUrl: "",
  description: "",
};

interface ProductFormProps {
  onAddProduct: (newProduct: Product) => void;
  onUpdateProduct: (updatedProduct: Product) => void;
  onCancelEdit: () => void;
  editingProduct: Product | null;
}

const ProductForm = ({
  onAddProduct,
  onUpdateProduct,
  onCancelEdit,
  editingProduct,
}: ProductFormProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (editingProduct) {
      // Populate the form when a product is selected for editing
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        title: editingProduct.title,
        price: editingProduct.price.toString(),
        category: editingProduct.category,
        imageUrl: editingProduct.imageUrl,
        description: editingProduct.description,
      });
    }
  }, [editingProduct]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;

    setErrors([]);

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onCancelEdit();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const productData: CreateProductData = {
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      imageUrl: formData.imageUrl,
    };

    try {
      if (editingProduct) {
        const updatedProduct = await updateProduct(
          editingProduct.id,
          productData,
        );

        onUpdateProduct(updatedProduct);
      } else {
        const newProduct = await createProduct(productData);

        onAddProduct(newProduct);
      }

      setFormData(initialFormData);
      setErrors([]);
    } catch (error) {
      const apiError = error as ApiError;

      setErrors(apiError.errors ?? [apiError.message]);
    }
  };

  return (
    <section className="max-w-3xl rounded-lg border border-accent bg-accent-light p-8">
      <h2 className="text-2xl font-light text-text">
        {editingProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <form onSubmit={handleSubmit} className="mt-8">
        {errors.length > 0 && (
          <div className="mb-6 rounded-md border border-error/40 bg-error/10 p-4">
            <ul className="list-inside list-disc space-y-1 text-sm text-error">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
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
              required
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
                required
                min="0"
                step="0.01"
                placeholder="0.01"
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
                required
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
              type="text"
              required
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
              required
              value={formData.description}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-accent bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex justify-end gap-3">
            {editingProduct && (
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-md border border-text-muted px-6 py-2.5 text-text transition-colors duration-300 hover:bg-text-muted/20"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="rounded-md border border-accent bg-accent px-6 py-2.5 text-text transition-colors duration-300 hover:bg-accent-light"
            >
              {editingProduct ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
