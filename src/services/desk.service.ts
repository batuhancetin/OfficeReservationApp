import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Desk, DeskModel } from "../models/desk.model";

export async function createDesk(input: Desk) {
    try {
        const desk = await DeskModel.create(input);
        return desk;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findAllDesks() {
    try {
        const desks = await DeskModel.find().populate('office').exec();
        return desks;
    } catch (e : any) {
        throw new Error(e);
    }
}

export async function findDesk(query: FilterQuery<Desk>) {
    try {
        const desk = await DeskModel.findOne(query).populate('office').exec();
        return desk;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findAndUpdateDesk(query:FilterQuery<Desk>, update: UpdateQuery<Desk>, options: QueryOptions) {
    try {
        const updated = await DeskModel.findOneAndUpdate(query, update, options);
        return updated;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function deleteDesk(query: FilterQuery<Desk>) {
    try {
      const deleted = await DeskModel.findOneAndDelete(query);
      return deleted;
    } catch (e: any) {
      throw new Error(e);
    }
  }