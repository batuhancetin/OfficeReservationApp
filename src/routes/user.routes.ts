import express from "express";
import { requireAdmin, requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { assignOrganizationtoOfficeHandler, createAdminHandler, createSuperAdminHandler, createUserHandler, forgotPasswordHandler, getCurrentUserHandler, resetPasswordHandler, verifyUserHandler } from "../controllers/user.controller";
import { assignOfficeSchema, createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from "../schemas/user.schema";

const router = express.Router();

/**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/users", requireAdmin, validateResource(createUserSchema), createUserHandler);


/**
   * @openapi
   * '/api/users/admin':
   *  post:
   *     tags:
   *     - User
   *     summary: Register an admin
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/users/admin", requireSuperAdmin, validateResource(createUserSchema), createAdminHandler);

/**
   * @openapi
   * '/api/users/superadmin':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a super admin
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/users/superadmin", validateResource(createUserSchema), createSuperAdminHandler);

/**
   * @openapi
   * '/api/users/verify/{id}/{verificationCode}':
   *  post:
   *     tags:
   *     - User
   *     summary: Verify a user
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the user
   *        required: true
   *      - name: verificationCode
   *        in: path
   *        description: The verificationCode of the user
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
router.post("/api/users/verify/:id/:verificationCode", validateResource(verifyUserSchema), verifyUserHandler);

/**
   * @openapi
   * '/api/users/forgotpassword':
   *  post:
   *     tags:
   *     - User
   *     summary: Forgot password
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/ForgotPasswordInput'
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
router.post("/api/users/forgotpassword", validateResource(forgotPasswordSchema), forgotPasswordHandler);

/**
   * @openapi
   * '/api/users/resetpassword/{id}/{passwordResetCode}':
   *  post:
   *     tags:
   *     - User
   *     summary: Reset password
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the user
   *        required: true
   *      - name: passwordResetCode
   *        in: path
   *        description: passwordResetCode of the user
   *        required: true
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/ResetPasswordInput'
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
router.post("/api/users/resetpassword/:id/:passwordResetCode", validateResource(resetPasswordSchema), resetPasswordHandler);


/**
   * @openapi
   * '/api/users/me':
   *  get:
   *     tags:
   *     - User
   *     summary: Get logged user
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/users/me", requireUser, getCurrentUserHandler);

/**
   * @openapi
   * '/api/users/assignoffice/{id}':
   *  patch:
   *     tags:
   *     - User
   *     summary: Assign organization to office
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/AssignOfficeInput'
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
router.patch("/api/users/assignoffice/:id", requireSuperAdmin, validateResource(assignOfficeSchema), assignOrganizationtoOfficeHandler)

export default router;