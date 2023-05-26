import { Router } from "express";
import { index, ingenieria } from "../controllers/index.routes.js";

const router = Router();

router.get("/", index);

router.get("/ingenieria", ingenieria);

export default router;