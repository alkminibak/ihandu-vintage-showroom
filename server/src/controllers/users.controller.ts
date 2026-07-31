import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

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

export const loginUser: RequestHandler = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const user = await UserModel.findOne({
      email,
    }).select("+password");

    if (!user) {
      response.status(401).json({
        message: "Invalid email or password",
      });

      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      response.status(401).json({
        message: "Invalid email or password",
      });

      return;
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      jwtSecret,
      {
        expiresIn: "7d",
      },
    );

    response.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
