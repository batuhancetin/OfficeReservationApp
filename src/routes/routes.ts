import express from "express";
import user from "./user.routes";
import organization from "./organization.routes";
import desk from "./desk.routes";
import office from "./office.routes";
import session from "./session.routes";
import reservation from "./reservation.routes";

const router = express.Router();

router.use(user);
router.use(organization);
router.use(office);
router.use(session);
router.use(desk);
router.use(reservation);

export default router;