import UserModel, { User } from "../model/user.model";

export function createUser(input: Partial<User>) {
    return UserModel.create(input)
}

export function findUserByEmail(input: Partial<User>) {
    return UserModel.findOne({email: input.email})
}
