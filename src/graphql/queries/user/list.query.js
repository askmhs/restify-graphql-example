import { listUserType } from "./../../types/user.type";
import UserEntity from "./../../../models/user.model";

export default {
    type: listUserType,
    args: {},
    resolve(root, params) {
        return UserEntity.find().lean().then(users => {
            return users
        }).catch(error => {
            throw error;
        });
    }
}