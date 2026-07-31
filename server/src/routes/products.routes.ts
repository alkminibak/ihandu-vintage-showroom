import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorizeAdmin } from "../middlewares/authorize-admin.middleware.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", authenticate, authorizeAdmin, createProduct);

router.put("/:id", authenticate, authorizeAdmin, updateProduct);

router.delete("/:id", authenticate, authorizeAdmin, deleteProduct);

export default router;
