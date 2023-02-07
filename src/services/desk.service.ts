import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Desk, DeskModel } from "../models/desk.model";

export async function createDesk(input: Desk) {
    return await DeskModel.create(input);
}

export async function findAllDesks() {
    return await DeskModel.find().populate('office').exec();
}

export async function findDesk(query: FilterQuery<Desk>) {
    return await DeskModel.findOne(query).populate('office').exec();
}

export async function findAndUpdateDesk(query:FilterQuery<Desk>, update: UpdateQuery<Desk>, options: QueryOptions) {
    return await DeskModel.findOneAndUpdate(query, update, options);
}

export async function deleteDesk(query: FilterQuery<Desk>) {
    return await DeskModel.findOneAndDelete(query);
  }