import { getModelForClass } from "@typegoose/typegoose";
import { Organization } from "./organization.model";
import { Desk } from "./desk.model";
import { User } from "./user.model";
import { Session } from "./session.model";
import { Reservation } from "./reservation.model";
import { Office } from "./office.model"

export const OrganizationModel = getModelForClass(Organization);

export const OfficeModel = getModelForClass(Office);

export const DeskModel = getModelForClass(Desk);

export const UserModel = getModelForClass(User);

export const SessionModel = getModelForClass(Session, {
    schemaOptions: {
        timestamps: true,
    },
});

export const ReservationModel = getModelForClass(Reservation);



