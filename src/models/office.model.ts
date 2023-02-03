import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Organization } from "./organization.model";



export class Office {
    @prop({unique: true, required: true})
    public name?: string;

    @prop({unique: true, required: true})
    public address?: string;

    @prop({ref: ()=> Organization, required: true})
    public organization?: Ref<Organization>;
}


export const OfficeModel = getModelForClass(Office);