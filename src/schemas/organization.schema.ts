import { z, TypeOf } from "zod";


const body = {
    body: z.object({
        name: z.string({
            required_error: "Name is required."
        }),

        email: z.string({
            required_error: "Email is required."
        }).email("Not a valid email."),

        confirmation_email: z.string({
            required_error: "Confirmation email is required."
        }).email("Not a valid email.")
        
    }).refine((data) => data.email === data.confirmation_email, {
        message: "Email and confirmation email must be matched.",
        path: ["emailConfirmation"]
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