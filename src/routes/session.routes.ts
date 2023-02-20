import express from "express";
import { requireAdmin, requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createSessionHandler, refreshAccessTokenHandler } from "../controllers/session.controller";
import { createSessionSchema } from "../schemas/session.schema";

const router = express.Router();

/**
   * @openapi
   * '/api/sessions':
   *  post:
   *     tags:
   *     - Authentication
   *     summary: Login
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateSessionInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateSessionResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/sessions", validateResource(createSessionSchema), createSessionHandler);

/**
 * @openapi
 * /api/sessions/refresh:
 *   post:
 *     summary: Refresh Token
 *     tags: 
 *         - Authentication
 *     parameters:
 *      - x-refresh: string
 *        in: header
 *        description: The refresh token of the session.
 *        required: true
 *     responses: 
 *       200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RefreshSessionResponse'
 *       400:
 *         description: Bad request  
 *       401:
 *         description: Could not refresh access token             
 * 
 */
router.post("/api/sessions/refresh", refreshAccessTokenHandler);

export default router;