import type { AuthTokenPayload } from "./AuthTokenPayload.js";

declare global {
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

export {};
