const ProductForm = () => {
  return (
    <section className="max-w-3xl rounded-lg border border-accent bg-accent-light p-8">
      <h2 className="text-2xl font-light text-text">Add New Product</h2>

      <form className="mt-8">
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
              type="text"
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
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
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
                type="text"
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
              type="url"
              placeholder="https://..."
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
              rows={6}
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
