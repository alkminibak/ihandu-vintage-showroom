import { Link } from "react-router";

const EmptyWishlist = () => {
  return (
    <section className="mx-auto mt-16 max-w-md text-center">
      <p className="text-xl font-light text-text">
        You haven't saved any pieces yet.
      </p>

      <p className="mt-4 text-sm leading-7 text-text-muted">
        Save your favorite vintage pieces and they'll appear here.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block border border-accent bg-accent-light px-6 py-2.5 text-sm text-text transition-colors duration-300 hover:bg-accent"
      >
        Browse Collection
      </Link>
    </section>
  );
};

export default EmptyWishlist;
