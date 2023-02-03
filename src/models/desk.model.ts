import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Office } from "./office.model";

export class Desk {
    @prop({required: true, unique: true})
    public name?: string;

    @prop({required: true, ref: () => Office})
    public office?: Ref<Office>;

    @prop({default: false})
    public available?: boolean;
}

export const DeskModel = getModelForClass(Desk);