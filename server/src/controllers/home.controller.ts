import type { Request, Response } from "express";

export const getHome = (request: Request, response: Response) => {
  response.send("Welcome to the I Hand U API!");
};
