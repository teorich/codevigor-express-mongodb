import jwt from 'jsonwebtoken'

export function signJwt(object: Object, keyName: "accessTokenPrivatekey" | "refreshTokenPrivateKey", options?: jwt.SignOptions | undefined) {

    // const signingKey = config.get()
}


export function verifyJwt() {}