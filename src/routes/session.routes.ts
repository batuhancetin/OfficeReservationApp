import express from "express";
import { requireAdmin, requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createSessionHandler, refreshAccessTokenHandler } from "../controllers/session.controller";
import { createSessionSchema } from "../schemas/auth.schema";

const router = express.Router();

router.post("/api/sessions", validateResource(createSessionSchema), createSessionHandler);
router.post("/api/sessions/refresh", refreshAccessTokenHandler);

export default router;