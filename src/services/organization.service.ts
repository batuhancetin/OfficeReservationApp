import { Request } from "express";
import OrganizationModel, {OrganizationDocument, OrganizationInput} from "../models/organization.model";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

export async function createOrganization(input: OrganizationInput) {
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

export async function findOrganization(query: FilterQuery<OrganizationDocument>) {
  try {    
    const organization = await OrganizationModel.findOne(query);    
    return organization;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findAndUpdateOrganization(query:FilterQuery<OrganizationDocument>, update: UpdateQuery<OrganizationDocument>, options: QueryOptions) {
  try {
    const updated = await OrganizationModel.findOneAndUpdate(query, update, options);
    return updated;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function deleteOrganization(query: FilterQuery<OrganizationDocument>) {
  try {
    const deleted = await OrganizationModel.findOneAndDelete(query);
    return deleted;
  } catch (e: any) {
    throw new Error(e);
  }
}