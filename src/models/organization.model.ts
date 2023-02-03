import { prop, getModelForClass } from "@typegoose/typegoose";

export class Organization {
    @prop({unique: true})
    public name?: string;

    @prop({unique: true})
    public email?: string;

    @prop({unique: true})
    public confirmation_email?: string;
}

export const OrganizationModel = getModelForClass(Organization);