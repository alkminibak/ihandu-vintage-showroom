import type { RequestHandler } from "express";

export const authorizeAdmin: RequestHandler = (request, response, next) => {
  if (request.user?.role !== "admin") {
    response.status(403).json({
      message: "Admin access required",
    });

    return;
  }

  next();
};
