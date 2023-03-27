import { ReservationModel } from "../models/all.model";
import { Desk } from "../models/desk.model";
import { Office } from "../models/office.model";
import { Reservation } from "../models/reservation.model";

export function createReservation(input: Reservation){
    return ReservationModel.create(input);
}

export function findReservation(day: string, office: Office, desk: Desk ){
    return ReservationModel.findOne({day, office, desk});
}

export function getReservations(day: string, office: Office){
    return ReservationModel.find({day: day, office: office}).populate('user', '-password -verified -verificationCode -createdAt -updatedAt -__v').exec();

}

export function deleteReservations(){
    return ReservationModel.deleteMany();
}

export function deleteReservation(day: string){
    return ReservationModel.deleteOne({day: day});
}