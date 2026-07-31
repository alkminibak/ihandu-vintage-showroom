import jwt from "jsonwebtoken";
import type { AuthTokenPayload } from "../types/AuthTokenPayload.js";
import type { RequestHandler } from "express";

export const authenticate: RequestHandler = (request, response, next) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    response.status(401).json({
      message: "Authentication required",
    });

    return;
  }

  if (!authorizationHeader.startsWith("Bearer ")) {
    response.status(401).json({
      message: "Invalid authorization header",
    });

    return;
  }

  const token = authorizationHeader.split(" ")[1];

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (typeof decoded === "string") {
      response.status(401).json({
        message: "Invalid token",
      });

      return;
    }

    request.user = decoded as AuthTokenPayload;

    next();
  } catch {
    response.status(401).json({
      message: "Invalid or expired token",
    });

    return;
  }
};
