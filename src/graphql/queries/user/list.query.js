import { listUserType } from "./../../types/user.type";
import UserEntity from "./../../../models/user.model";

export default {
    type: listUserType,
    async resolve() {
        return await UserEntity.find().lean();
    }
}