import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Office, OfficeModel } from "../models/office.model";

export async function createOffice(input: Office) {
    try {
        const office = await OfficeModel.create(input);
        return office;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findAllOffices() {
    try {
        const offices = await OfficeModel.find().populate('organization').exec();
        return offices;
    } catch (e : any) {
        throw new Error(e);
    }
}

export async function findOffice(query: FilterQuery<Office>) {
    try {
        const office = await OfficeModel.findOne(query).populate('organization').exec();
        return office;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findAndUpdateOffice(query:FilterQuery<Office>, update: UpdateQuery<Office>, options: QueryOptions) {
    try {
        const updated = await OfficeModel.findOneAndUpdate(query, update, options);
        return updated;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function deleteOffice(query: FilterQuery<Office>) {
    try {
      const deleted = await OfficeModel.findOneAndDelete(query);
      return deleted;
    } catch (e: any) {
      throw new Error(e);
    }
  }