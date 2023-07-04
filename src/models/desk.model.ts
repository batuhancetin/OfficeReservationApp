import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Office } from "./office.model";
import { User } from "./user.model";

export class Desk {
    @prop({required: true, unique: true})
    name: string;

    @prop({ref: () => Office})
    office_id: Ref<Office>;

}

