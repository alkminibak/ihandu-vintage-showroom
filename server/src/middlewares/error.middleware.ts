import type { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError.js";

export const errorMiddleware = (
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  console.error(error);

  if (error instanceof NotFoundError) {
    response.status(error.statusCode).json({
      message: error.message,
    });
    return;
  }

  response.status(500).json({
    message: "Internal server error",
  });
};
