import { Router } from "express";
import { getHome } from "../controllers/home.controller.js";
import productsRouter from "./products.routes.js";

const router = Router();

router.get("/", getHome);

router.use("/products", productsRouter);

export default router;
