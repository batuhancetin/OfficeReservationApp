import { z, TypeOf } from "zod";

const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),
        
        available: z.boolean(),
        
        office: z.string({
            required_error: "Office is required."
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


export const createDeskSchema = z.object({
    ...body
})

export const getDeskSchema = z.object({
    ...params
})

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