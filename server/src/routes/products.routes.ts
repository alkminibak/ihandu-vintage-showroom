import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", authenticate, createProduct);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
