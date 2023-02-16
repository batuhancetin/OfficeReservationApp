import { z, TypeOf } from "zod";


const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),

        admin: z.string({
            required_error: "Admin is required."
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


export const createOrganizationSchema = z.object({
    ...body
})

export const getOrganizationSchema = z.object({
    ...params
})

export const updateOrganizationSchema = z.object({
    ...body,
    ...params
})

export const deleteOrganizationSchema = z.object({
    ...params
})

export type CreateOrganizationInput = TypeOf<typeof createOrganizationSchema>;
export type GetOrganizationInput = TypeOf<typeof getOrganizationSchema>;
export type UpdateOrganizationInput = TypeOf<typeof updateOrganizationSchema>;
export type DeleteOrganizationInput = TypeOf<typeof deleteOrganizationSchema>;