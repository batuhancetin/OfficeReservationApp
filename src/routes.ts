import { Express } from "express";
import { createOfficeHandler, deleteOfficeHandler, getAllOfficesHandler, getOfficeHandler, updateOfficeHandler } from "./controllers/office.controller";
import { createOrganizationHandler, getOrganizationHandler, getAllOrganizationsHandler, updateOrganizationHandler, deleteOrganizationHandler } from "./controllers/organization.controller";
import validateResource from "./middleware/validateResource";
import { createOfficeSchema, deleteOfficeSchema, getOfficeSchema, updateOfficeSchema } from "./schemas/office.schema";
import { createOrganizationSchema, deleteOrganizationSchema, getOrganizationSchema, updateOrganizationSchema } from "./schemas/organization.schema";
import { createDeskSchema, deleteDeskSchema, getDeskSchema, updateDeskSchema } from "./schemas/desk.schema";
import { createDeskHandler, deleteDeskHandler, getAllDesksHandler, getDeskHandler, updateDeskHandler } from "./controllers/desk.controller";

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

    app.post("/api/desks", validateResource(createDeskSchema), createDeskHandler);
    app.get("/api/desks", getAllDesksHandler);
    app.get("/api/desks/:id", validateResource(getDeskSchema), getDeskHandler);
    app.put("/api/desks/:id", validateResource(updateDeskSchema), updateDeskHandler);
    app.delete("/api/desks/:id", validateResource(deleteDeskSchema), deleteDeskHandler);
}

export default routes