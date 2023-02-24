import { z, TypeOf } from "zod";

const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),
    })
}

const params = {
    params: z.object({
        id: z.string({
          required_error: "Id is required",
        }),
    }),
}

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateOfficeInput:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *    CreateOfficeResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createOfficeSchema = z.object({
    ...body
})

/**
 * @openapi
 * components:
 *  schemas:
 *    GetOfficeResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const getOfficeSchema = z.object({
    ...params
})

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateOfficeInput:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        organization:
 *          type: string
 *    UpdateOfficeResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        organization:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const updateOfficeSchema = z.object({
    ...params
})

export const deleteOfficeSchema = z.object({
    ...params
})


export type CreateOfficeInput = TypeOf<typeof createOfficeSchema>;
export type GetOfficeInput = TypeOf<typeof getOfficeSchema>;
export type UpdateOfficeInput = TypeOf<typeof updateOfficeSchema>;
export type DeleteOfficeInput = TypeOf<typeof deleteOfficeSchema>;