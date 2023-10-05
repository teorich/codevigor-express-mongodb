import { Request, Response } from "express";
import { CreateSessionInput } from "../schema/auth.schema";
import { findUserByEmail } from "../service/user.service";


export async function createSessionHandler(req: Request<{}, {}, CreateSessionInput>, res: Response) {

    const message = "Invalid email or password"
    const {email, password} = req.body;

    const user = await findUserByEmail({email})

    if(!user) {
        return res.send(message)
    }

    const isValid = await user.validatePassword(password)

    if (!isValid) {
        return res.send(message)
    }

    // sign an access token

    // sign a refresh token

    // send the tokens
   

}