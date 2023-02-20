import express from "express";
import { requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createReservationSchema, deleteReservationSchema, getReservationSchema } from "../schemas/reservation.schema";
import { createReservationHandler, deleteReservationHandler, getReservationsHandler } from "../controllers/reservation.controller";

const router = express.Router();

/**
   * @openapi
   * '/api/reservations':
   *  post:
   *     tags:
   *     - Reservation
   *     summary: Create a reservation
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateReservationInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateReservationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.post("/api/reservations", requireUser, validateResource(createReservationSchema), createReservationHandler);

/**
   * @openapi
   * '/api/reservations/{day}':
   *  get:
   *     tags:
   *     - Reservation
   *     summary: Get reservations for that day
   *     parameters:
   *      - name: day
   *        in: path
   *        description: The day that will be reserved
   *        required: true
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetReservationResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   *      403:
   *        description: Forbidden
   */
router.get("/api/reservations/:day", requireUser, validateResource(getReservationSchema), getReservationsHandler);

/**
   * @openapi
   * '/api/reservations/{id}':
   *  delete:
   *     tags:
   *     - Reservation
   *     summary: Delete a reservation
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the reservation that will be deleted
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
router.delete("/api/reservations/:id", validateResource(deleteReservationSchema), deleteReservationHandler);

export default router;