import { API_URL } from "../config/api";

import type {
  AuthResponse,
  LoginData,
  RegisterData,
  RegisterResponse,
} from "../types/Auth";

export async function login(loginData: LoginData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid email or password");
    }

    throw new Error("Failed to login");
  }

  const authResponse = (await response.json()) as AuthResponse;

  return authResponse;
}

export async function register(
  registerData: RegisterData,
): Promise<RegisterResponse> {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error("Email is already in use");
    }

    throw new Error("Failed to register user");
  }

  const registerResponse = (await response.json()) as RegisterResponse;

  return registerResponse;
}
