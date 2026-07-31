import type { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError.js";
import { Error as MongooseError } from "mongoose";

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

  if (error instanceof MongooseError.CastError) {
    response.status(400).json({
      message: "Invalid product id",
    });

    return;
  }

  if (error instanceof MongooseError.ValidationError) {
    const messages = Object.values(error.errors).map(({ message }) => message);

    response.status(400).json({
      message: "Validation failed",
      errors: messages,
    });

    return;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  ) {
    response.status(409).json({
      message: "Email is already in use",
    });

    return;
  }

  response.status(500).json({
    message: "Internal server error",
  });
};
