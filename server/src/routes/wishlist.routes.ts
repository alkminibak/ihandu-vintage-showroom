import { Router } from "express";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/wishlist.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = Router();

router.use(authenticate);

/**
 * @openapi
 * /wishlist:
 *   get:
 *     tags: [Wishlist]
 *     summary: Get the authenticated user's wishlist
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wishlist retrieved successfully
 *       401:
 *         description: Authentication required
 */
router.get("/", getWishlist);

/**
 * @openapi
 * /wishlist/{productId}:
 *   post:
 *     tags: [Wishlist]
 *     summary: Add a product to the wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Product added to wishlist
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Product not found
 */
router.post("/:productId", addToWishlist);

/**
 * @openapi
 * /wishlist/{productId}:
 *   delete:
 *     tags: [Wishlist]
 *     summary: Remove a product from the wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product removed from wishlist
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Wishlist item not found
 */
router.delete("/:productId", removeFromWishlist);

export default router;
