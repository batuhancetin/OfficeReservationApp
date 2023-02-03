import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { OrganizationModel, Organization } from "../models/organization.model";

export async function createOrganization(input: Organization) {
  try {
    const organization = await OrganizationModel.create(input);
    return organization;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findAllOrganizations() {
  try {
    const organizations = await OrganizationModel.find().sort('-createdAt').exec();
    return organizations;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findOrganization(query: FilterQuery<Organization>) {
  try {    
    const organization = await OrganizationModel.findOne(query);    
    return organization;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findAndUpdateOrganization(query:FilterQuery<Organization>, update: UpdateQuery<Organization>, options: QueryOptions) {
  try {
    const updated = await OrganizationModel.findOneAndUpdate(query, update, options);
    return updated;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function deleteOrganization(query: FilterQuery<Organization>) {
  try {
    const deleted = await OrganizationModel.findOneAndDelete(query);
    return deleted;
  } catch (e: any) {
    throw new Error(e);
  }
}