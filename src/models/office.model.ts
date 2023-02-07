import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Organization } from "./organization.model";



export class Office {
    @prop({unique: true, required: true})
    name: string;

    @prop({ref: ()=> Organization, required: true})
    organization: Ref<Organization>;
}


export const OfficeModel = getModelForClass(Office);