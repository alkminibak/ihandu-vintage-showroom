import { Router } from "express";
import { getHome } from "../controllers/home.controller.js";
import productsRouter from "./products.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.get("/", getHome);

router.use("/products", productsRouter);
router.use("/users", usersRouter);

export default router;
