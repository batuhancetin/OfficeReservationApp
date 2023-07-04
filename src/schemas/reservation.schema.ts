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
 *        - office_id
 *        - desk_id
 *      properties:
 *        day:
 *          type: string
 *          default: 01-01-2023
 *        office_id:
 *          type: string
 *        desk_id:
 *          type: string
 *    CreateReservationResponse:
 *      type: object
 *      properties:
 *        day:
 *          type: string
 *        office_id:
 *          type: string
 *        desk_id:
 *          type: string
 *        user_id:
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
        office_id: string({required_error: "office id is required"}),
        desk_id: string({required_error: "desk id is required"}),
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
 *        office_id:
 *          type: string
 *        desk_id:
 *          type: string
 *        user_id:
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
        desk_id: string()
    })
})

export type CreateReservationInput = TypeOf<typeof createReservationSchema>["body"];
export type ReservedInput = TypeOf<typeof getReservationSchema>["params"];
export type DeleteReservationInput = TypeOf<typeof deleteReservationSchema>["body"];