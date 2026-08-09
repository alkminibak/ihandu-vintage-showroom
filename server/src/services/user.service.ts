import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "../repositories/user.repository.js";

interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

const createToken = (userId: string, role: string) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(
    {
      userId,
      role,
    },
    jwtSecret,
    {
      expiresIn: "7d",
    },
  );
};

export const registerUser = async (userData: RegisterUserData) => {
  const user = await userRepository.create(userData);

  const token = createToken(user.id, user.role);

  return {
    message: "User registered successfully",
    token,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  };
};

export const loginUser = async (loginData: LoginUserData) => {
  const user = await userRepository.findByEmailWithPassword(loginData.email);

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(
    loginData.password,
    user.password,
  );

  if (!isPasswordValid) {
    return null;
  }

  const token = createToken(user.id, user.role);

  return {
    message: "Login successful",
    token,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
  };
};
