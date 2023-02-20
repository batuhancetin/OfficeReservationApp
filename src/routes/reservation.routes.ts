import express from "express";
import { requireSuperAdmin, requireUser } from "../middleware/requireAuth";
import validateResource from "../middleware/validateResource";
import { createReservationSchema, deleteReservationSchema, getReservationSchema } from "../schemas/reservation.schema";
import { createReservationHandler, deleteReservationHandler, getReservationsHandler } from "../controllers/reservation.controller";

const router = express.Router();

router.post("/api/reservations", requireUser, validateResource(createReservationSchema), createReservationHandler)
router.get("/api/reservations/:day", requireUser, validateResource(getReservationSchema), getReservationsHandler);
router.delete("/api/reservations/:id", validateResource(deleteReservationSchema), deleteReservationHandler);

export default router;