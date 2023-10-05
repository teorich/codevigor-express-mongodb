import { DocumentType } from "@typegoose/typegoose";
import { omit } from "lodash";
import SessionModel from "../model/session.model";
import { User, privateFields } from "../model/user.model";
import { signJwt } from "../utils/jwt";

export  function createSession({userId}: {userId: string}){
    return SessionModel.create({user: userId})
}

export async function signRefreshToken({userId}: {userId: any}) {

    const session = await createSession({
        userId
    })


    const refreshToken =  signJwt({
        session: session._id,
    }, "refreshTokenPrivateKey", {
        expiresIn: "1y",
    })

    return refreshToken
}


export function signAccessToken(user: DocumentType<User>) {

    const payload = omit(user.toJSON(), privateFields)
    const accessToken = signJwt(payload, "accessTokenPrivateKey")

    return accessToken

}