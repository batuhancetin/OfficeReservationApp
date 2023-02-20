import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { User } from "./user.model";
import { Office } from "./office.model";
import { Desk } from "./desk.model";

export class Reservation {
    @prop()
    day: string;

    @prop({ref: () => User })
    user: Ref<User>;

    @prop({ref: () => Office})
    office: Ref<Office>;

    @prop({ref: () => Desk})
    desk: Ref<Desk>;
}

