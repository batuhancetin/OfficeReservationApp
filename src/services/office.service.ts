import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Office } from "../models/office.model";
import { OfficeModel } from "../models/all.model";
import { Organization } from "../models/organization.model";

export async function createOffice(input: Office) {
    return await OfficeModel.create(input);
}

export async function findAllOffices() {
    return await OfficeModel.find().populate('desks').exec();
}

export async function findOffice(id: string) {
    return await OfficeModel.findById(id).populate('organization').exec();
}

export async function findOfficeByOrganization(organization: string) {
    return await OfficeModel.find({organization_id: organization})
    
} 

export async function findAndUpdateOffice(query:FilterQuery<Office>, update: UpdateQuery<Office>, options: QueryOptions) {
    return await OfficeModel.findOneAndUpdate(query, update, options);
}

export async function deleteOffice(query: FilterQuery<Office>) {
    return await OfficeModel.findOneAndDelete(query);
}

