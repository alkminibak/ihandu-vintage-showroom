import type { RequestHandler } from "express";

import * as userService from "../services/user.service.js";

export const registerUser: RequestHandler = async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const authResult = await userService.registerUser({
      firstName,
      lastName,
      email,
      password,
    });

    response.status(201).json(authResult);
  } catch (error) {
    next(error);
  }
};

export const loginUser: RequestHandler = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const authResult = await userService.loginUser({
      email,
      password,
    });

    if (!authResult) {
      response.status(401).json({
        message: "Invalid email or password",
      });

      return;
    }

    response.status(200).json(authResult);
  } catch (error) {
    next(error);
  }
};
