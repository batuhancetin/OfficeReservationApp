import { Express } from "express";
import { createOfficeHandler, deleteOfficeHandler, getAllOfficesHandler, getOfficeHandler, updateOfficeHandler } from "./controllers/office.controller";
import { createOrganizationHandler, getOrganizationHandler, getAllOrganizationsHandler, updateOrganizationHandler, deleteOrganizationHandler } from "./controllers/organization.controller";
import validateResource from "./middleware/validateResource";
import { createOfficeSchema, deleteOfficeSchema, getOfficeSchema, updateOfficeSchema } from "./schemas/office.schema";
import { createOrganizationSchema, deleteOrganizationSchema, getOrganizationSchema, updateOrganizationSchema } from "./schemas/organization.schema";

function routes(app: Express) {
    app.post("/api/organizations", validateResource(createOrganizationSchema), createOrganizationHandler);
    app.get("/api/organizations", getAllOrganizationsHandler);
    app.get("/api/organizations/:id", validateResource(getOrganizationSchema), getOrganizationHandler);
    app.put("/api/organizations/:id", validateResource(updateOrganizationSchema), updateOrganizationHandler);
    app.delete("/api/organizations/:id", validateResource(deleteOrganizationSchema), deleteOrganizationHandler);
    
    app.post("/api/offices", validateResource(createOfficeSchema), createOfficeHandler);
    app.get("/api/offices", getAllOfficesHandler);
    app.get("/api/offices/:id", validateResource(getOfficeSchema), getOfficeHandler);
    app.put("/api/offices/:id", validateResource(updateOfficeSchema), updateOfficeHandler);
    app.delete("/api/offices/:id", validateResource(deleteOfficeSchema), deleteOfficeHandler);
}

export default routes