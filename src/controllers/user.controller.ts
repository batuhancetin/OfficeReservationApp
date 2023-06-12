import { Request, Response } from "express";
import { createUser, findUserById, findUserByEmail } from "../services/user.service";
import sendEmail from "../utils/mailer";
import { nanoid } from "nanoid";
import logger from "../utils/logger";
import { findOffice } from "../services/office.service";
import { findOrganization } from "../services/organization.service";


export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = res.locals.user
        const body = req.body;
        if (body.role !== "USER") {
            return res.status(400).send("Role is not USER.")
        }
        const organization = await findOrganization(body.organization)
        if (organization) {   
            if (organization.admin.valueOf() === user._id) {
                const user = await createUser(body);
                await sendEmail({
                    to: user.email,
                    from: "test@example.com",
                    subject: "Verify your email",
                    text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
                });
                return res.send("User successfully created");
            }
            else {               
                return res.sendStatus(403).send("Admins are different.")
            }
        }
    } catch (e: any) {
        if (e.code === 11000) {
            return res.status(409).send("Account already exists");
        }
        return res.status(500).send(e);
    }
}

export async function createAdminHandler(req: Request, res: Response) {
    const body = req.body;
    if (body.role !== "ADMIN") {
        return res.status(400).send("Role is not ADMIN.")
    }
    try {
        const user = await createUser(body);

        await sendEmail({
            to: user.email,
            from: "test@example.com",
            subject: "Verify your email",
            text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
        });
    
  
        return res.send("User successfully created");
    } catch (e: any) {
        if (e.code === 11000) {
            return res.status(409).send("Account already exists");
        }
        return res.status(500).send(e);
    }
}

export async function createSuperAdminHandler(req: Request, res: Response) {
    const body = req.body;
    if (body.role !== "SUPER_ADMIN") {
        return res.status(400).send("Role is not SUPER_ADMIN.")
    }
    try {
        const user = await createUser(body);

        await sendEmail({
            to: user.email,
            from: "test@example.com",
            subject: "Verify your email",
            text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
        });
    
  
        return res.send("User successfully created");
    } catch (e: any) {
        if (e.code === 11000) {
            return res.status(409).send("Account already exists");
        }
        return res.status(500).send(e);
    }
}


export async function verifyUserHandler(req: Request, res: Response) {
    const id = req.params.id;
    const verificationCode = req.params.verificationCode;

    const user = await findUserById(id);

    if(!user) {
        return res.send("Could not verify user");
    }

    if(user.verified) {
        return res.send("User is already verified");
    }

    if(user.verificationCode === verificationCode) {
        user.verified = true;
        await user.save();
        return res.send("User successfully verified")
    }

    return res.send("Could not verify user");
}

export async function forgotPasswordHandler(req: Request, res: Response) {
    const message = "If a user with that email is registered you will receive a password reset email";
    
    const { email } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
        logger.debug(`User with email ${email} does not exists`);
        return res.send(message);
    }
    
    if (!user.verified) {
        return res.send("User is not verified");
    }
    
    const passwordResetCode = nanoid();
    
    user.passwordResetCode = passwordResetCode;
    
    await user.save();

    await sendEmail({
        to: user.email,
        from: "test@example.com",
        subject: "Reset your password",
        text: `Password reset code: ${passwordResetCode}. Id ${user._id}`,
    });
    
    logger.debug(`Password reset email sent to ${email}`);
    
    return res.send(message);
}

export async function resetPasswordHandler(req: Request, res: Response) {
    const { id, passwordResetCode } = req.params;
  
    const { password } = req.body;
  
    const user = await findUserById(id);
  
    if (
        !user ||
        !user.passwordResetCode ||
        user.passwordResetCode !== passwordResetCode
    ) {
        return res.status(400).send("Could not reset user password");
    }
  
    user.passwordResetCode = null;
  
    user.password = password;
  
    await user.save();
  
    return res.send("Successfully updated password");
}
  
export async function getCurrentUserHandler(req: Request, res: Response) {
    return res.send(res.locals.user);
}

export async function assignOrganizationtoOfficeHandler(req: Request, res: Response) {
    const { id } = req.params;
    const { organization } = req.body;

    const office = await findOffice(id);

    if (!office) {
        return res.status(400).send("Could not find the office.");
    }

    office.organization = organization;

    await office.save();
    
    return res.send("Successfully assigned")
}
