import express from "express";
import { requireAdmin, requireSuperAdmin } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createOrganizationSchema, deleteOrganizationSchema, getOrganizationSchema, updateOrganizationSchema } from "../schemas/organization.schema";
import { createOrganizationHandler, deleteOrganizationHandler, getAllOrganizationsHandler, getOrganizationHandler, updateOrganizationHandler } from "../controllers/organization.controller";


const router = express.Router();

router.post("/api/organizations", requireSuperAdmin, validateResource(createOrganizationSchema), createOrganizationHandler);
router.get("/api/organizations", requireSuperAdmin, getAllOrganizationsHandler);
router.get("/api/organizations/:id", validateResource(getOrganizationSchema), getOrganizationHandler);
router.put("/api/organizations/:id", validateResource(updateOrganizationSchema), updateOrganizationHandler);
router.delete("/api/organizations/:id", validateResource(deleteOrganizationSchema), deleteOrganizationHandler);

export default router;