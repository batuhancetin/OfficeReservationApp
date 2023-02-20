import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

export class Organization {
    @prop({unique: true, required: true})
    name: string;

    @prop({ref: () => User, required: true})
    admin: Ref<User>;

}

