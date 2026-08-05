import { Link } from "react-router";

interface EmptyWishlistProps {
  isGuest?: boolean;
}

const EmptyWishlist = ({ isGuest = false }: EmptyWishlistProps) => {
  return (
    <section className="mx-auto mt-16 max-w-md text-center">
      <p className="text-xl font-light text-text">
        {isGuest
          ? "Sign in to view your wishlist"
          : "You haven't saved any pieces yet."}
      </p>

      <p className="mt-4 text-sm leading-7 text-text-muted">
        {isGuest
          ? "Create an account or log in to save and view your favorite vintage pieces."
          : "Save your favorite vintage pieces and they'll appear here."}
      </p>

      <Link
        to={isGuest ? "/login" : "/"}
        state={isGuest ? { from: "/wishlist" } : undefined}
        className="mt-6 inline-block border border-accent bg-accent-light px-6 py-2.5 text-sm text-text transition-colors duration-300 hover:bg-accent"
      >
        {isGuest ? "Register / Login" : "Browse Collection"}
      </Link>
    </section>
  );
};

export default EmptyWishlist;
