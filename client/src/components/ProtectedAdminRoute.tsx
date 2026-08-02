import { Navigate } from "react-router";
import type { AuthUser } from "../types/Auth";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(storedUser) as AuthUser;

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
