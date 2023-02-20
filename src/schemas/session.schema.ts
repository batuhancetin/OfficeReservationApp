import { object, string, TypeOf } from "zod";


/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSessionInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: wade.kobe@example.com
 *        password:
 *          type: string
 *          default: password
 *    CreateSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Invalid email or password"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Invalid email or password"),
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    RefreshSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 */
export const refreshSessionSchema = object({
})

export type CreateSessionInput = TypeOf<typeof createSessionSchema>["body"];