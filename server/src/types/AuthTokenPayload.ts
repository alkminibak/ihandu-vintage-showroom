export interface AuthTokenPayload {
  userId: string;
  role: "user" | "admin";
}
