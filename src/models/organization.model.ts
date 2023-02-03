import { prop, getModelForClass } from "@typegoose/typegoose";

export class Organization {
    @prop({unique: true, required: true})
    public name?: string;

    @prop({unique: true, required: true})
    public email?: string;

    @prop({unique: true, required: true})
    public confirmation_email?: string;
}

export const OrganizationModel = getModelForClass(Organization);