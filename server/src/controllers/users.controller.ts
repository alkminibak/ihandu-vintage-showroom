import type { RequestHandler } from "express";
import { UserModel } from "../models/User.js";

export const registerUser: RequestHandler = async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    response.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
