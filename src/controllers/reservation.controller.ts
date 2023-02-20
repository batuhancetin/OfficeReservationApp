import { Request, Response } from "express";
import { createReservation, deleteReservation, findReservation, getReservations } from "../services/reservation.service";
import { findOffice, findOfficeByOrganization } from "../services/office.service";
import { findDesk } from "../services/desk.service";
import { Reservation } from "../models/reservation.model";

export async function getReservationsHandler(req: Request, res: Response){
    const { day } = req.params;
    const user = res.locals.user;
    const offices = await findOfficeByOrganization(user.organization)
    var allReservations: Reservation[] = []
    for (let office = 0; office < offices.length; office++) {
        const reservationsByOffice = await getReservations(day, offices[office])
        for (let reservation = 0; reservation < reservationsByOffice.length; reservation++) {
            allReservations.push(reservationsByOffice[reservation])
        }
    }
    return res.send(allReservations);
}

export async function createReservationHandler(req: Request, res: Response) {
    const body = req.body;
    const office = await findOffice(body.office);
    if (!office) {
        return res.sendStatus(404).send("Office is not found.")
    }
    const desk = await findDesk(body.desk);
    if (!desk) {
        return res.sendStatus(404).send("Desk is not found.")
    }
    const reservation = await findReservation(body.day, office, desk);
    if(!reservation) {
        body.user = res.locals.user
        const newReservation = await createReservation(body);
        return res.send(newReservation);
    } else {
        return res.sendStatus(404).send("Desk is already reserved.")
    }
}

export async function deleteReservationHandler(req: Request, res: Response){
    const {day} = req.body;
    await deleteReservation(day);
    return res.send("Reservation is deleted");
}