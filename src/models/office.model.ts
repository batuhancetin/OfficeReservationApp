import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Organization } from "./organization.model";



export class Office {
    @prop({unique: true})
    public name?: string;

    @prop({unique: true})
    public address?: string;

    @prop({ref: ()=> Organization})
    public organization?: Ref<Organization>;
}


export const OfficeModel = getModelForClass(Office);