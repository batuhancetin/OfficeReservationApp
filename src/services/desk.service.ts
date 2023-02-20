import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Desk } from "../models/desk.model";
import { DeskModel } from "../models/all.model";

export async function createDesk(input: Desk) {
    return await DeskModel.create(input);
}

export async function findAllDesks() {
    return await DeskModel.find().populate('office').exec();
}

export async function findDesk(id: string) {
    return await DeskModel.findById(id).populate('office').exec();
}

export async function findAndUpdateDesk(query:FilterQuery<Desk>, update: UpdateQuery<Desk>, options: QueryOptions) {
    return await DeskModel.findOneAndUpdate(query, update, options);
}

export async function deleteDesk(id: string) {
    return await DeskModel.findByIdAndDelete(id);
  }