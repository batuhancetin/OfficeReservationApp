import { z, TypeOf } from "zod";


const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),

        admin_id: z.string({
            required_error: "Admin id is required."
        })
        
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
 *    CreateOrganizationInput:
 *      type: object
 *      required:
 *        - name
 *        - admin_id
 *      properties:
 *        name:
 *          type: string
 *        admin_id:
 *          type: string
 *    CreateOrganizationResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        admin_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createOrganizationSchema = z.object({
    ...body
})

/**
 * @openapi
 * components:
 *  schemas:
 *    GetOrganizationResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        admin_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const getOrganizationSchema = z.object({
    ...params
})

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateOrganizationInput:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        admin_id:
 *          type: string
 *    UpdateOrganizationResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        admin_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const updateOrganizationSchema = z.object({
    ...params
})

export const deleteOrganizationSchema = z.object({
    ...params
})

export type CreateOrganizationInput = TypeOf<typeof createOrganizationSchema>;
export type GetOrganizationInput = TypeOf<typeof getOrganizationSchema>;
export type UpdateOrganizationInput = TypeOf<typeof updateOrganizationSchema>;
export type DeleteOrganizationInput = TypeOf<typeof deleteOrganizationSchema>;