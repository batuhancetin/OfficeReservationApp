import { Express } from "express";
import { createOrganizationHandler, getOrganizationHandler, getAllOrganizationsHandler, updateOrganizationHandler, deleteOrganizationHandler } from "./controllers/organization.controller";
import validateResource from "./middleware/validateResource";
import { createOrganizationSchema, deleteOrganizationSchema, getOrganizationSchema, updateOrganizationSchema } from "./schemas/organization.schema";

function routes(app: Express) {
    app.post("/api/organizations", validateResource(createOrganizationSchema), createOrganizationHandler);
    app.get("/api/organizations", getAllOrganizationsHandler);
    app.get("/api/organizations/:id", validateResource(getOrganizationSchema), getOrganizationHandler);
    app.put("/api/organizations/:id", validateResource(updateOrganizationSchema), updateOrganizationHandler);
    app.delete("/api/organizations/:id", validateResource(deleteOrganizationSchema), deleteOrganizationHandler);

}

export default routes