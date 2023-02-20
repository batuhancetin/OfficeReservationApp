import { mongoose } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { stdTimeFunctions } from 'pino';
import { date, object, string, TypeOf } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateReservationInput:
 *      type: object
 *      required:
 *        - day
 *        - office
 *        - desk
 *      properties:
 *        day:
 *          type: string
 *          default: 01-01-2023
 *        office:
 *          type: string
 *        desk:
 *          type: string
 *    CreateReservationResponse:
 *      type: object
 *      properties:
 *        day:
 *          type: string
 *        office:
 *          type: string
 *        desk:
 *          type: string
 *        user:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createReservationSchema = object({
    body: object ({
        day: string({required_error: "day is required"}),
        office: string({required_error: "office is required"}),
        desk: string({required_error: "desk is required"}),
    })
})

/**
 * @openapi
 * components:
 *  schemas:
 *    GetReservationResponse:
 *      type: object
 *      properties:
 *        day:
 *          type: string
 *        office:
 *          type: string
 *        desk:
 *          type: string
 *        user:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
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