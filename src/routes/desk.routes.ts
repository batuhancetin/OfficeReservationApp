import express from "express";
import { requireAdmin, requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createDeskSchema, deleteDeskSchema, getDeskSchema, updateDeskSchema } from "../schemas/desk.schema";
import { createDeskHandler, deleteDeskHandler, getAllDesksHandler, getDeskHandler, updateDeskHandler } from "../controllers/desk.controller";

const router = express.Router();

/**
   * @openapi
   * '/api/desks':
   *  post:
   *     tags:
   *     - Desk
   *     summary: Create a desk
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateDeskInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateDeskResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/desks", requireSuperAdmin, validateResource(createDeskSchema), createDeskHandler);

/**
   * @openapi
   * '/api/desks':
   *  get:
   *     tags:
   *     - Desk
   *     summary: Get all desks
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetDeskResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/desks", getAllDesksHandler);

/**
   * @openapi
   * '/api/desks/{id}':
   *  get:
   *     tags:
   *     - Desk
   *     summary: Get a desk
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the desk
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetDeskResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/desks/:id", validateResource(getDeskSchema), getDeskHandler);

/**
   * @openapi
   * '/api/desks/{id}':
   *  put:
   *     tags:
   *     - Desk
   *     summary: Update a desk
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/UpdateDeskInput'
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the desk
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UpdateDeskResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.patch("/api/desks/:id", validateResource(updateDeskSchema), updateDeskHandler);

/**
   * @openapi
   * '/api/desks/{id}':
   *  delete:
   *     tags:
   *     - Desk
   *     summary: Delete a desk
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the desk
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
router.delete("/api/desks/:id", validateResource(deleteDeskSchema), deleteDeskHandler);

export default router;