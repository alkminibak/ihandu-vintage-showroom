import { useState } from "react";
import type { AuthUser } from "../types/Auth";
import { NavLink, Link } from "react-router";

const Header = () => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? (JSON.parse(storedUser) as AuthUser) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <Link to="/" className="transition-colors hover:text-accent">
        <div>
          <h1 className="text-5xl font-light">I Hand U</h1>

          <p className="mt-1 text-sm tracking-wide text-text-muted">
            Curated Vintage Collection
          </p>
        </div>
      </Link>

      <nav className="flex items-center gap-5 text-sm">
        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="transition-colors hover:text-accent"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `transition-colors hover:text-accent ${
                isActive ? "text-accent" : ""
              }`
            }
          >
            Login
          </NavLink>
        )}

        <span aria-hidden="true" className="h-5 w-px bg-accent-light" />

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex items-center gap-2 transition-colors hover:text-accent ${
              isActive ? "text-accent" : ""
            }`
          }
        >
          My Wishlist
          <span className="text-accent">♡</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
