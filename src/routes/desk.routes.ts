import express from "express";
import { requireAdmin, requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createDeskSchema, deleteDeskSchema, getDeskSchema, updateDeskSchema } from "../schemas/desk.schema";
import { createDeskHandler, deleteDeskHandler, getAllDesksHandler, getDeskHandler, updateDeskHandler } from "../controllers/desk.controller";

const router = express.Router();

router.post("/api/desks", requireSuperAdmin, validateResource(createDeskSchema), createDeskHandler);
router.get("/api/desks", getAllDesksHandler);
router.get("/api/desks/:id", validateResource(getDeskSchema), getDeskHandler);
router.put("/api/desks/:id", validateResource(updateDeskSchema), updateDeskHandler);
router.delete("/api/desks/:id", validateResource(deleteDeskSchema), deleteDeskHandler);

export default router;