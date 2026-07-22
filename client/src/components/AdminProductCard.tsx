const AdminProductCard = () => {
  return (
    <article className="overflow-hidden rounded-lg border border-accent bg-white">
      <img
        src="https://placehold.co/600x800"
        alt="Product"
        className="w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-text-muted">Category</p>

        <h3 className="mt-1 text-lg font-medium text-text">Product Title</h3>

        <p className="mt-2 text-sm text-text">€45.00</p>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-md border border-accent px-4 py-2 text-sm text-text transition-colors duration-300 hover:bg-accent-light"
          >
            Edit
          </button>

          <button
            type="button"
            className="flex-1 rounded-md border border-text-muted px-4 py-2 text-sm text-text transition-colors duration-300 hover:bg-accent-light"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default AdminProductCard;
