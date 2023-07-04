import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Organization } from "./organization.model";
import { Desk } from "./desk.model";



export class Office {
    @prop({unique: true, required: true})
    name: string;

    @prop({ref: ()=> Organization})
    organization_id: Ref<Organization> | null | undefined;

    @prop({ref: ()=> Desk, default: []} )
    desks: Ref<Desk>[];
}


