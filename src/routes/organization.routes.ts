import express from "express";
import { requireAdmin, requireSuperAdmin } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createOrganizationSchema, deleteOrganizationSchema, getOrganizationSchema, updateOrganizationSchema } from "../schemas/organization.schema";
import { createOrganizationHandler, deleteOrganizationHandler, getAllOrganizationsHandler, getOrganizationHandler, updateOrganizationHandler } from "../controllers/organization.controller";


const router = express.Router();

/**
   * @openapi
   * '/api/organizations':
   *  post:
   *     tags:
   *     - Organization
   *     summary: Create an organization
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateOrganizationInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateOrganizationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/organizations", requireSuperAdmin, validateResource(createOrganizationSchema), createOrganizationHandler);

/**
   * @openapi
   * '/api/organizations':
   *  get:
   *     tags:
   *     - Organization
   *     summary: Get all organizations
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetOrganizationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/organizations", requireSuperAdmin, getAllOrganizationsHandler);

/**
   * @openapi
   * '/api/organizations/{id}':
   *  get:
   *     tags:
   *     - Organization
   *     summary: Get an organization
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the organization
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetOrganizationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/organizations/:id", validateResource(getOrganizationSchema), getOrganizationHandler);

/**
   * @openapi
   * '/api/organizations/{id}':
   *  put:
   *     tags:
   *     - Organization
   *     summary: Update an organization
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/UpdateOrganizationInput'
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the organization
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UpdateOrganizationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.patch("/api/organizations/:id", validateResource(updateOrganizationSchema), updateOrganizationHandler);

/**
   * @openapi
   * '/api/organizations/{id}':
   *  delete:
   *     tags:
   *     - Organization
   *     summary: Delete an organization
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the organization
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.delete("/api/organizations/:id", validateResource(deleteOrganizationSchema), deleteOrganizationHandler);

export default router;