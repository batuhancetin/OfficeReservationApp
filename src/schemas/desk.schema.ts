import { z, TypeOf } from "zod";
const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),
        
        office: z.string({
            required_error: "Office is required."
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
 *    CreateDeskInput:
 *      type: object
 *      required:
 *        - name
 *        - office
 *      properties:
 *        name:
 *          type: string
 *        office:
 *          type: string
 *    CreateDeskResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        office:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createDeskSchema = z.object({
    ...body
})

/**
 * @openapi
 * components:
 *  schemas:
 *    GetDeskResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        office:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const getDeskSchema = z.object({
    ...params
})

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateDeskInput:
 *      type: object
 *      required:
 *        - name
 *        - office
 *      properties:
 *        name:
 *          type: string
 *        office:
 *          type: string
 *    UpdateDeskResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        office:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const updateDeskSchema = z.object({
    ...body,
    ...params
})

export const deleteDeskSchema = z.object({
    ...params
})


export type CreateDeskInput = TypeOf<typeof createDeskSchema>;
export type GetDeskInput = TypeOf<typeof getDeskSchema>;
export type UpdateDeskInput = TypeOf<typeof updateDeskSchema>;
export type DeleteDeskInput = TypeOf<typeof deleteDeskSchema>;