import { Link } from "react-router";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <div>
        <h1 className="text-5xl font-light">I Hand U</h1>

        <p className="mt-1 text-sm tracking-wide text-text-muted">
          Curated Vintage Collection
        </p>
      </div>

      <nav className="flex items-center gap-5 text-sm">
        <Link
          to="/login"
          className="transition-colors hover:text-accent"
        >
          Login
        </Link>

        <span
            aria-hidden="true"
            className="h-5 w-px bg-accent-light"
        />

        <Link
          to="/wishlist"
          className="flex items-center gap-2 transition-colors hover:text-accent"
        >
          My Wishlist
          <span className="text-accent">♡</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;