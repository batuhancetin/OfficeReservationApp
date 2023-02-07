import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { OrganizationModel, Organization } from "../models/organization.model";

export async function createOrganization(input: Organization) {
	return await OrganizationModel.create(input);
}

export async function findAllOrganizations() {
	return await OrganizationModel.find().sort('-createdAt').exec();
}

export async function findOrganization(query: FilterQuery<Organization>) {
	return await OrganizationModel.findOne(query);    
}

export async function findAndUpdateOrganization(query:FilterQuery<Organization>, update: UpdateQuery<Organization>, options: QueryOptions) {
	return await OrganizationModel.findOneAndUpdate(query, update, options);
}

export async function deleteOrganization(query: FilterQuery<Organization>) {
	return await OrganizationModel.findOneAndDelete(query);
}