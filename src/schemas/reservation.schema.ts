import { mongoose } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { stdTimeFunctions } from 'pino';
import { date, object, string, TypeOf } from 'zod';


export const createReservationSchema = object({
    body: object ({
        day: string({required_error: "day is required"}),
        office: string({required_error: "office is required"}),
        desk: string({required_error: "desk is required"}),
    })
})


export const getReservationSchema = object({
    params: object ({
        day: string(),
    }), 
})

export const deleteReservationSchema = object({
    body: object ({
        day: string({required_error: "day is required"}),
        desk: string()
    })
})

export type CreateReservationInput = TypeOf<typeof createReservationSchema>["body"];
export type ReservedInput = TypeOf<typeof getReservationSchema>["params"];
export type DeleteReservationInput = TypeOf<typeof deleteReservationSchema>["body"];