import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 py-5 md:px-6 md:py-6 lg:flex-row lg:justify-between">
      <Link
        to="/"
        className="text-center transition-colors hover:text-accent lg:text-left"
      >
        <div>
          <h1 className="text-4xl font-light md:text-5xl">I Hand U</h1>

          <p className="mt-1 text-xs tracking-wide text-text-muted md:text-sm">
            Curated Vintage Collection
          </p>
        </div>
      </Link>

      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:gap-x-5 md:text-sm lg:justify-end">
        {user && user.role !== "admin" && <span>{user.firstName}</span>}

        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `transition-colors hover:text-accent ${
                isActive ? "text-accent" : ""
              }`
            }
          >
            Admin Dashboard
          </NavLink>
        )}

        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="cursor-pointer transition-colors hover:text-accent"
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
            Register / Login
          </NavLink>
        )}

        <span
          aria-hidden="true"
          className="hidden h-5 w-px bg-accent-light lg:block"
        />

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
