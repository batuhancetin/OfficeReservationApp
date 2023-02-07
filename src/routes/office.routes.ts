import express from "express";
import { requireSuperAdmin } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createOfficeHandler, deleteOfficeHandler, getAllOfficesHandler, getOfficeHandler, updateOfficeHandler } from "../controllers/office.controller";
import { createOfficeSchema, deleteOfficeSchema, getOfficeSchema, updateOfficeSchema } from "../schemas/office.schema";

const router = express.Router();

router.post("/api/offices", validateResource(createOfficeSchema), createOfficeHandler);
router.get("/api/offices", getAllOfficesHandler);
router.get("/api/offices/:id", validateResource(getOfficeSchema), getOfficeHandler);
router.put("/api/offices/:id", validateResource(updateOfficeSchema), updateOfficeHandler);
router.delete("/api/offices/:id", validateResource(deleteOfficeSchema), deleteOfficeHandler);

export default router;
