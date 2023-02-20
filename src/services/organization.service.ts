import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Organization } from "../models/organization.model";
import { OrganizationModel } from "../models/all.model";

export async function createOrganization(input: Organization) {
	return await OrganizationModel.create(input);
}

export async function findAllOrganizations() {
	return await OrganizationModel.find().sort('-createdAt').exec();
}

export async function findOrganization(id: string) {
	return await OrganizationModel.findById(id);    
}

export async function findAndUpdateOrganization(query:FilterQuery<Organization>, update: UpdateQuery<Organization>, options: QueryOptions) {
	return await OrganizationModel.findOneAndUpdate(query, update, options);
}

export async function deleteOrganization(query: FilterQuery<Organization>) {
	return await OrganizationModel.findOneAndDelete(query);
}