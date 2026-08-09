import type { Request, Response } from "express";

import * as wishlistService from "../services/wishlist.service.js";

export const getWishlist = async (request: Request, response: Response) => {
  const userId = request.user!.userId;

  const wishlist = await wishlistService.getWishlist(userId);

  response.json(wishlist);
};

export const addToWishlist = async (
  request: Request<{ productId: string }>,
  response: Response,
) => {
  const userId = request.user!.userId;
  const { productId } = request.params;

  const wishlistItem = await wishlistService.addToWishlist(userId, productId);

  response.status(201).json(wishlistItem);
};

export const removeFromWishlist = async (
  request: Request<{ productId: string }>,
  response: Response,
) => {
  const userId = request.user!.userId;
  const { productId } = request.params;

  await wishlistService.removeFromWishlist(userId, productId);

  response.status(204).send();
};
