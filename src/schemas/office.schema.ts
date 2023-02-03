import { z, TypeOf } from "zod";

const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),
        
        address: z.string({
            required_error: "Address is required."
        }),
        
        organization: z.string({
            required_error: "Organization is required."
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


export const createOfficeSchema = z.object({
    ...body
})

export const getOfficeSchema = z.object({
    ...params
})

export const updateOfficeSchema = z.object({
    ...body,
    ...params
})

export const deleteOfficeSchema = z.object({
    ...params
})


export type CreateOfficeInput = TypeOf<typeof createOfficeSchema>;
export type GetOfficeInput = TypeOf<typeof getOfficeSchema>;
export type UpdateOfficeInput = TypeOf<typeof updateOfficeSchema>;
export type DeleteOfficeInput = TypeOf<typeof deleteOfficeSchema>;