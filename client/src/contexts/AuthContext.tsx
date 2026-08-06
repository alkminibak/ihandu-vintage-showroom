import { createContext } from "react";

import type { AuthUser } from "../types/Auth";

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  authenticate: (token: string, user: AuthUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
