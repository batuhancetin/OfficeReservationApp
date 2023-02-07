import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Office } from "./office.model";

export class Desk {
    @prop({required: true, unique: true})
    name: string;

    @prop({required: true, ref: () => Office})
    office: Ref<Office>;

    @prop({default: false})
    available: boolean;
}

export const DeskModel = getModelForClass(Desk);