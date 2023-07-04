import { object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - firstName
 *        - lastName
 *        - role
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: john.doe@example.com
 *        firstName:
 *          type: string
 *          default: John
 *        password:
 *          type: string
 *          default: password
 *        passwordConfirmation:
 *          type: string
 *          default: password
 *        lastName:
 *          type: string
 *          default: Doe
 *        role:
 *          type: string
 *          default: USER
 *        organization_id:
 *          type: string
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        role:
 *          type: string
 *        organization_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required",
    }),

    lastName: string({
      required_error: "Last name is required",
    }),

    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),

    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    
    role: string({
      required_error: "Role is required."
    }),
    
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});


export const verifyUserSchema = object({
  params: object({
    id: string(),
    verificationCode: string(),
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    ForgotPasswordInput:
 *      type: object
 *      required:
 *        - email
 *      properties:
 *        email:
 *          type: string
 *          default: john.doe@example.com
 */
export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    ResetPasswordInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: john.doe@example.com
 *        password:
 *          type: string
 *          default: password123
 *        passwordConfirmation:
 *          type: string
 *          default: password123
 */
export const resetPasswordSchema = object({
  params: object({
    id: string(),
    passwordResetCode: string(),
  }),
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    GetUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        role:
 *          type: string
 *        organization_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const getUserSchema = object({})


/**
 * @openapi
 * components:
 *  schemas:
 *    AssignOfficeInput:
 *      type: object
 *      required:
 *        - organization_id
 *      properties:
 *        organization_id:
 *          type: string
 */
export const assignOfficeSchema = object({
  params: object({
    id: string({
      required_error: "ID parameter is required."
    })
  }),
  body: object({
    organization_id: string({
      required_error: "Organization id is required."
    })
  })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];

export type VerifyUserInput = TypeOf<typeof verifyUserSchema>["params"];

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>["body"];

export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;

