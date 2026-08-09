import { UserModel } from "../models/User.js";

interface CreateUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const create = async (userData: CreateUserData) => {
  return UserModel.create(userData);
};

export const findByEmailWithPassword = async (email: string) => {
  return UserModel.findOne({
    email,
  }).select("+password");
};
