import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.send("Welcome to the I Hand U API!");
});

export default router;
