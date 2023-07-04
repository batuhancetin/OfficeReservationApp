import express from "express";
import { requireSuperAdmin } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createOfficeHandler, deleteOfficeHandler, getAllOfficesHandler, getOfficeHandler, updateOfficeHandler } from "../controllers/office.controller";
import { createOfficeSchema, deleteOfficeSchema, getOfficeSchema, updateOfficeSchema } from "../schemas/office.schema";

const router = express.Router();

/**
   * @openapi
   * '/api/offices':
   *  post:
   *     tags:
   *     - Office
   *     summary: Create an office
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateOfficeInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateOfficeResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/offices", validateResource(createOfficeSchema), createOfficeHandler);
//router.post("/api/offices", requireSuperAdmin, validateResource(createOfficeSchema), createOfficeHandler);

/**
   * @openapi
   * '/api/offices':
   *  get:
   *     tags:
   *     - Office
   *     summary: Get all offices
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetOfficeResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/offices", getAllOfficesHandler);

/**
   * @openapi
   * '/api/offices/{id}':
   *  get:
   *     tags:
   *     - Office
   *     summary: Get an office
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the office
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetOfficeResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/offices/:id", validateResource(getOfficeSchema), getOfficeHandler);

/**
   * @openapi
   * '/api/offices/{id}':
   *  put:
   *     tags:
   *     - Office
   *     summary: Update an office
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/UpdateOfficeInput'
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the office
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UpdateOfficeResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.patch("/api/offices/:id", validateResource(updateOfficeSchema), updateOfficeHandler);

/**
   * @openapi
   * '/api/offices/{id}':
   *  delete:
   *     tags:
   *     - Office
   *     summary: Delete an office
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the office
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
router.delete("/api/offices/:id", validateResource(deleteOfficeSchema), deleteOfficeHandler);

export default router;
