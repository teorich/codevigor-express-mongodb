import config from 'config'
import jwt from 'jsonwebtoken'

export function signJwt(object: Object, keyName: "accessTokenPrivatekey" | "refreshTokenPrivateKey", options?: jwt.SignOptions | undefined) {

    const signingKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii")

    return jwt.sign(object, signingKey, {
        ...(options && options),
        algorithm: "RS256"
    })
}


export function verifyJwt(token: string, keyName: "accessTokenPublickey" | "refreshTokenPublicKey") {

    const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii")

    try {
        const decoded = jwt.verify(token, publicKey)
        return decoded;
    } catch (error) {
        return null;
    }
}